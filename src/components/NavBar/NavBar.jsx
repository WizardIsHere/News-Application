import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'

const NavBar = () => {
    const { currentUser, logOut } = useAuth()
    const navigate = useNavigate()


    const handleLogout = async () => {
        try {
            await logOut();
            console.log("Logged out")
            navigate('/login')
        } catch (error) {
            console.log(error)
        }
    }
    const AccountDetails = () => {
        console.log(currentUser)
    }
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top">
                <Container>
                    <Navbar.Brand href="#home"><h4>reactiveNews</h4></Navbar.Brand>
                    <Nav className="ms-auto ">
                        <Link className='active nav-link' to="/">Home</Link>
                        <Link to={'/general'} className="nav-link" >General</Link>
                        <Link to={'/business'} className="nav-link" >Business</Link>
                        <Link to={'/entertainment'} className="nav-link" >Entertainment</Link>
                        <Link to={'/health'} className="nav-link" >Health</Link>
                        <Link to={'/science'} className="nav-link" >Science</Link>
                        <Link to={'/technology'} className="nav-link" >Technology</Link>
                        <Link to={'/sports'} className="nav-link" >Sports</Link>

                        <NavDropdown title="My Account" id="navbarScrollingDropdown">
                            <NavDropdown.Item>{currentUser.email}</NavDropdown.Item>

                            <NavDropdown.Divider />
                            <NavDropdown.Item onClick={handleLogout}>
                                Logout
                            </NavDropdown.Item>
                        </NavDropdown>

                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar;