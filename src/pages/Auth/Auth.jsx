import React from 'react'
import { Container} from 'react-bootstrap'

import styles from './Auth.module.css';
import SignUp from '../../components/SignUp/SignUp';
import Brand from '../../components/Brand/Brand';

const Auth = () => {

    return (
        <>
        <div className={styles.Auth}>
            <Container
                className={` d-flex align-items-center justify-content-center ${styles.AuthContainer} `}
            >
               <Brand />
                <SignUp /> 
            </Container>

        </div>
        </>
    )
}

export default Auth