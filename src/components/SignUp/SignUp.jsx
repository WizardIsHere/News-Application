import React, { useRef, useState, useEffect } from 'react'
import {Form, Button, Card, Alert } from 'react-bootstrap'

import { useAuth } from '../../contexts/AuthContext';
import styles from './SignUp.module.css';
import GoogleIcon from '../../assets/google.png';
import GitHubIcon from '../../assets/github.png';
import { Link, useNavigate} from 'react-router-dom';

const SignUp = () => {

    const emailRef = useRef();
    const passRef = useRef();
    const confpassRef = useRef();

    const {signUp, googleSignIn, currentUser, githubSignIn} = useAuth();
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState()
    const navigate = useNavigate()

    // Email and password Sign in
    async function handleSubmit (event) {
        event.preventDefault();

        if(passRef.current.value !== confpassRef.current.value){
            return setError("Password does not match.")
        }
        try {
            setError('')
            setLoading(true)
            await signUp(emailRef.current.value, passRef.current.value);
            navigate('/')
        } catch (error) {
            setError("Failed to sign up.")
            console.log(error)
        }
        setLoading(false)
    }


    // Google Sign in
    const googleSignInHandler = async (event) => {
        event.preventDefault();
        try {
            setError('')
            await googleSignIn();
 
        } catch (error) {
            setError("Failed to sign up.")
            console.log(error)
        }
    }


    //  Github Sign In
    const githubSignInHandler = async (event) => {
        event.preventDefault();
        try {
            setError('')
            await githubSignIn();
            navigate("/")
        } catch (error) {
            setError("Failed to sign up.")
            console.log(error)
        }
    }


    useEffect(() => {
        if(currentUser != null){
            navigate("/")
        }
    }, [currentUser]);

    return (
        <>
            <div className={`w-100 ${styles.AuthWrap}`}>
                <Card style={{ borderRadius: '25px' }}>
                    <Card.Body>
                        <h2 className='text-center mb-4' style={{ color: "#f45c43" }}>SignUp</h2>
                        {error && <Alert variant='danger'>{error}</Alert>}
                        <Form onSubmit={handleSubmit}>
                            <Form.Group id='email'>
                                <div className='mb-2'>
                                    <Form.Control className={styles.authFormInput} type='email' placeholder='Email' ref={emailRef} required />
                                </div>
                            </Form.Group>

                            <Form.Group id='password'>
                                <div className='mb-2'>
                                    <Form.Control className={styles.authFormInput} type='password' placeholder='Password' ref={passRef} required />
                                </div>
                            </Form.Group>

                            <Form.Group id='confirmpass'>
                                <div>
                                    <Form.Control className={styles.authFormInput} type='password' placeholder='Confirm Password' ref={confpassRef} required />
                                </div>
                            </Form.Group>
                            <Button className={`w-100 mt-3 ${styles.infoButton}`} disabled={loading} type='submit'>Sign Up</Button>
                            <hr />
                            <div className='d-flex flex-direction-column align-items-center justify-content-center' style={{ gap: "4rem" }} >
                                <Button className={`mt-1 ${styles.authButtons}`} onClick={googleSignInHandler}> <img src={GoogleIcon} />  </Button>
                                <Button className={`mt-1 ${styles.authButtons}`} onClick={githubSignInHandler}> <img src={GitHubIcon} /> </Button>
                            </div>
                        </Form>
                    </Card.Body>
                </Card>
                <div className='w-100 text-center mt-2 text-light'>
                    Already have an account? <Link to='/login' style={{ color:'white', textDecoration: 'none'}}>Login</Link>
                </div>
            </div>
        </>
    )
}

export default SignUp