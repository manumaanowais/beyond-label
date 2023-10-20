import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Grid, Paper, Avatar, Button, TextField } from '@material-ui/core'
import EnhancedEncryptionIcon from '@material-ui/icons/EnhancedEncryption';
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from '../../firebase'
import Swal from 'sweetalert2';

const ForgotPassword = () => {

    const paperStyle = { padding: 20, width: 280, margin: '90px auto' }
    const avatarStyle = { backgroundColor: '#6495ED' }

    let navigate = useNavigate();

    const forgotPasswordSubmit = (e) => {
        e.preventDefault();
        const emailValue = e.target.email.value;

        if (emailValue === null || emailValue === '') {
            Swal.fire({
                icon: 'error',
                title: `Please Enter Email To Change Password`,
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 1500,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer);
                    toast.addEventListener('mouseleave', Swal.resumeTimer);
                },
            });
        } else {
            try {
                sendPasswordResetEmail(auth, emailValue).then(data => {
                    Swal.fire(
                        'Mail Sent',
                        'Follow the link send to your gmail to change password',
                        'success'
                      )
                    navigate(`/`);
                }).catch(err => {
                    alert(err.code)
                })
            } catch (error) {
                console.log(error)
            }
        }
    }

    const cancelForgotPassword = () => {
        navigate(`/`);
    }

    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><EnhancedEncryptionIcon /></Avatar>
                    <h2>Forgot Password</h2>
                </Grid>
                <form onSubmit={(e) => forgotPasswordSubmit(e)}>
                    <TextField label='Email' placeholder='Enter Email' variant='outlined' name='email' fullWidth /><br /><br /><br />
                    <div style={{ display: 'flex', gap: '8px' }}>
                        <Button style={{width: '-webkit-fill-available'}} type='submit' variant='contained' color='primary'>Submit</Button>
                        <Button style={{width: '-webkit-fill-available'}} type='button' variant='outlined' color='primary' onClick={cancelForgotPassword}>Cancel</Button>
                    </div>
                </form>
            </Paper>
        </Grid>
    )
}

export default ForgotPassword