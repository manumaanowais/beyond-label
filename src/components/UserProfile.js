import React, { useEffect, useState } from 'react';
import Header from './Header';
import { Button, List, ListItem, ListItemText } from '@material-ui/core';
import { db, auth, upload, useAuth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from 'firebase/firestore';
import './UserProfile.css';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import Modal from './Modal';

const UserProfile = () => {
    const [user, setUser] = useState(null);
    const currentUser = useAuth();

    //Get User Details
    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                const userDocRef = doc(db, 'users', user?.uid);
                getDoc(userDocRef)
                    .then((doc) => {
                        if (doc.exists()) {
                            setUser(doc.data())
                        } else {
                            console.log(`User Data not found.`);
                        }
                    })
                    .catch((error) => {
                        console.error('Error fetching user data from Firestore:', error);
                    });
            } else {
                setUser(null);
            }
        });

        return () => {
            listen();
        };
    }, []);

    //For Adding Profile Photo
    const [isModalOpen, setModalOpen] = useState(false);

    const handleAddPhoto = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };
    const [photo, setPhoto] = useState(null);
    const [loading, setLoading] = useState(false);
    const [photoURL, setPhotoURL] = useState('');

    function handleChange(e) {
        if (e.target.files[0]) {
            setPhoto(e.target.files[0])
        }
    }

    function handleClick() {
        upload(photo, currentUser, setLoading);
    }

    useEffect(() => {
        if (currentUser?.photoURL) {
            setPhotoURL(currentUser.photoURL);
        }
    }, [currentUser])

    return (
        <div className='profile-page'>
            <Header />
            <div className='profile-container'>
                {user && (
                    <div className="fields">
                        <div className='profile-photo'>
                            {photoURL ? (
                                <img src={photoURL} alt="Avatar" className="avatar" />
                            ) : (
                                <AccountCircleOutlinedIcon className="avatar" />
                            )}
                        </div>
                        <List className='fields-list'>
                            <ListItem><ListItemText primary={`NAME: ${user?.name.toUpperCase()}`} /></ListItem>
                            <ListItem><ListItemText primary={`EMAIL: ${user?.email}`} /></ListItem>
                            <ListItem><ListItemText primary={`PHONE: ${user?.phoneNumber}`} /></ListItem>
                            <ListItem><ListItemText primary={`GENDER: ${user?.gender.toUpperCase()}`} /></ListItem>
                        </List>

                        <div style={{ textAlign: 'center' }}>
                            <Button type='button' color='primary' variant="contained" onClick={handleAddPhoto}>{photoURL ? 'Edit Profile Photo' : 'Add Profile Photo'}</Button>
                        </div>
                    </div>
                )}
            </div>

            {/* Render the modal with the file input and upload button */}
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <input type="file" onChange={handleChange} />
                <button disabled={loading || !photo} onClick={handleClick}>Upload</button>
            </Modal>
        </div>
    );
};

export default UserProfile;
