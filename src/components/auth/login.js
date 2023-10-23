import React, { useState } from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';
import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { db, auth } from '../../firebase'
import { doc, getDoc } from 'firebase/firestore';
import Swal from 'sweetalert2';

const Login = () => {
    const paperStyle = { padding: 20, width: 280, margin: '40px auto' };
    const avatarStyle = { backgroundColor: '#6495ED' };
    const btnstyle = { margin: '8px 0' };

    let navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);
    const [isSubmissionComplete, setIsSubmissionComplete] = useState(false);

    const redirectToSignUp = () => {
        navigate(`/signup`);
    }

    const redirectToForgotPassword = () => {
        navigate(`/forgotPassword`);
    }

    const initialValues = {
        email: '',
        password: ''
    }

    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Please Enter Valid Email').required("Required"),
        password: Yup.string().required("Required")
    })

    const signInSubmit = (values, props) => {
        console.log("Values : ", values);
        setIsSubmissionComplete(true);
        signInWithEmailAndPassword(auth, values.email, values.password)
            .then((userCredential) => {
                const user = userCredential.user;
                const userDocRef = doc(db, 'users', user.uid);
                getDoc(userDocRef)
                    .then((doc) => {
                        if (doc.exists()) {
                            console.log(`User's Data :`, doc.data());
                        } else {
                            console.log(`User Data not found.`);
                        }
                    })
                    .catch((error) => {
                        console.error('Error fetching user data from Firestore:', error);
                    });
                navigate(`/home`);
                Swal.fire({
                    icon: 'success',
                    title: `Signed In Successfully`,
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
                console.log(userCredential)

            })
            .catch((error) => {
                console.log(error);
                setIsSubmissionComplete(false);
                Swal.fire({
                    icon: 'error',
                    title: `Invalid Credentials`,
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
            });
    }
    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <Formik initialValues={initialValues} onSubmit={signInSubmit} validationSchema={validationSchema}>
                    {(props) => (
                        <Form className='login-form'>
                            <Field as={TextField} label='Email' name="email"
                                placeholder='Enter Email' variant="outlined" fullWidth required
                                helperText={<ErrorMessage name="email" />}
                            />
                            <Field as={TextField} label='Password' name="password"
                                placeholder='Enter Password' variant="outlined" type={showPassword ? 'text' : 'password'} fullWidth required
                                helperText={<ErrorMessage name="password" />} />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        name='showPassword'
                                        color='primary'
                                        onChange={() => setShowPassword(!showPassword)}
                                    />
                                }
                                label='Show Password'
                            />
                            <Typography>
                                <Link style={{ cursor: 'pointer', textDecoration: 'none' }} onClick={redirectToForgotPassword}>Forgot Password?</Link>
                            </Typography>
                            <Typography> Don't have an account?
                                <Link style={{ cursor: 'pointer', textDecoration: 'none' }} onClick={redirectToSignUp}>&nbsp;Sign Up</Link>
                            </Typography>
                            <Button type='submit' color='primary' variant="contained" disabled={isSubmissionComplete}
                                style={btnstyle} fullWidth>{isSubmissionComplete ? 'Loading...' : 'Sign in'}</Button>

                        </Form>
                    )}
                </Formik>
            </Paper>
        </Grid>
    );
}

export default Login;
