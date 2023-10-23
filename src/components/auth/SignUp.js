import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import { Formik, Field, Form, ErrorMessage } from 'formik'
import { FormHelperText } from '@material-ui/core'
import * as Yup from 'yup'
import { AuthErrorCodes, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { db, auth } from '../../firebase'
import { doc, setDoc } from 'firebase/firestore';
import Swal from 'sweetalert2';

const Signup = () => {
    const paperStyle = { padding: '30px 20px', width: 300, margin: '20px auto' };
    const headerStyle = { margin: 0 };
    const avatarStyle = { backgroundColor: '#6495ED' };
    const marginTop = { marginTop: 5 }

    const initialValues = {
        name: '',
        email: '',
        gender: '',
        phoneNumber: '',
        password: '',
        confirmPassword: '',
        termsAndConditions: false
    }

    const validationSchema = Yup.object().shape({
        name: Yup.string().min(3, "Name Is Too Short").required("Required"),
        email: Yup.string().email("Enter Valid Email").required("Required"),
        gender: Yup.string().oneOf(["male", "female"], "Required").required("Required"),
        phoneNumber: Yup.number().typeError("Enter Valid Phone Number").required('Required'),
        password: Yup.string().min(8, "Minimum Length Should Be 8 Characters").required("Required"),
        confirmPassword: Yup.string().oneOf([Yup.ref('password')], "Password Mismatch").required("Required"),
        termsAndConditions: Yup.string().oneOf(["true"], "Accept Terms & Conditions")
    })

    const handleSignUpSubmit = async (values, props) => {
        createUserWithEmailAndPassword(auth, values.email, values.password)
            .then(async (res) => {
                const user = res.user;
                await updateProfile(user, {
                    displayName: values.name,
                });

                // Save the user's data to Firestore
                const userRef = doc(db, 'users', user.uid);
                await setDoc(userRef, {
                    name: values.name,
                    email: values.email,
                    phoneNumber: values.phoneNumber,
                    gender: values.gender,
                    termsAndConditions: values.termsAndConditions
                });
            })
            .then((userCredential) => {
                Swal.fire({
                    icon: 'success',
                    title: `Account Created Successfully`,
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
                navigate(`/`);
                console.log(userCredential);
            })
            .catch((error) => {
                if (error.code === AuthErrorCodes.EMAIL_EXISTS) {
                    Swal.fire({
                        icon: 'error',
                        title: `A User With This Email Already Exists, Try Resetting The Password`,
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
                    console.log(error);
                    Swal.fire({
                        icon: 'error',
                        title: `Error Adding User, Try Again`,
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
                }
            });
    }

    let navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const cancelSignUp = () => {
        navigate(`/`);
    }

    return (
        <Grid>
            <Paper elevation={20} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        <AddCircleOutlineOutlinedIcon />
                    </Avatar>
                    <h2 style={headerStyle}>Sign Up</h2>
                    <Typography variant='caption' gutterBottom>Fill this form to be a part of our family</Typography>
                </Grid><br />
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSignUpSubmit}>
                    {(props) => (
                        <Form style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>

                            <Field as={TextField} fullWidth variant='outlined' name="name" label='Name'
                                placeholder="Enter Your Name" helperText={<ErrorMessage name="name" />} />
                            <Field as={TextField} fullWidth variant='outlined' name="email" label='Email'
                                placeholder="Enter Your Email" helperText={<ErrorMessage name="email" />} />
                            <FormControl component="fieldset" style={marginTop}>
                                <FormLabel component="legend">Gender</FormLabel>
                                < Field as={RadioGroup} aria-label="gender" name="gender" style={{ display: 'initial' }}>
                                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                                </ Field>
                            </FormControl>
                            <FormHelperText><ErrorMessage name="gender" /></FormHelperText>
                            <Field as={TextField} fullWidth variant='outlined' name="phoneNumber" label='Phone Number'
                                placeholder="Enter Your Phone Number" helperText={<ErrorMessage name="phoneNumber" />} />
                            <Field as={TextField} fullWidth variant='outlined' name='password'
                                label='Password' placeholder="Enter Your Password"
                                helperText={<ErrorMessage name="password" />} type={showPassword ? 'text' : 'password'}
                                InputProps={{
                                    endAdornment: (
                                        <span style={{ cursor: 'pointer' }} onClick={() => setShowPassword(!showPassword)}>
                                            {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                        </span>
                                    ),
                                }} />
                            <Field as={TextField} fullWidth variant='outlined' name="confirmPassword"
                                label='Confirm Password' placeholder="Confirm Your Password"
                                helperText={<ErrorMessage name="confirmPassword" />} type={showConfirmPassword ? 'text' : 'password'}
                                InputProps={{
                                    endAdornment: (
                                        <span style={{ cursor: 'pointer' }} onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                                            {showConfirmPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                        </span>
                                    ),
                                }} />
                            <FormControlLabel
                                control={<Field as={Checkbox} name="termsAndConditions" />}
                                label="I accept the terms and conditions."
                            />
                            <FormHelperText><ErrorMessage name="termsAndConditions" /></FormHelperText>
                            <div style={{ display: 'flex', gap: '8px' }}>
                                <Button style={{ width: '-webkit-fill-available' }} type='submit' disabled={props.isSubmitting} variant='contained' color='primary'>
                                    {props.isSubmitting ? "Loading..." : "Sign up"}
                                </Button>
                                <Button style={{ width: '-webkit-fill-available' }} type='button' variant='outlined' color='primary' onClick={cancelSignUp}>
                                    Cancel
                                </Button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </Paper>
        </Grid>
    );
}

export default Signup;
