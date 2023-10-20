import { useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { onAuthStateChanged } from "firebase/auth";
import { getAuth, updateProfile  } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import Swal from 'sweetalert2';

const firebaseConfig = {
  apiKey: "AIzaSyBs4zQpUrqywJNxc2XopzrsCdl5Z8Y0JmE",
  authDomain: "beyond-label.firebaseapp.com",
  projectId: "beyond-label",
  storageBucket: "beyond-label.appspot.com",
  messagingSenderId: "498579345801",
  appId: "1:498579345801:web:7bd49ab7fdc216c8389158"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage();

export {
  db,
  auth,
}

export function useAuth() {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, user => setCurrentUser(user));
    return unsub;
  }, [])

  return currentUser;
}

// Storage
export async function upload(file, currentUser, setLoading) {
  const fileRef = ref(storage, currentUser?.uid + '.png');

  setLoading(true);

  const snapshot = await uploadBytes(fileRef, file);
  console.log("Snapshot : " ,snapshot)
  const photoURL = await getDownloadURL(fileRef);

  updateProfile(currentUser, { photoURL });

  setLoading(false);
  Swal.fire({
    icon: 'success',
    title: `Profile Photo Updated`,
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
window.location.reload();
}