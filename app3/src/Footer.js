import './App.css';
import { FaInstagram,FaTwitter,FaFacebookF,FaPinterest } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

const Footer = () =>{
    return(
        <>
            <footer>
                <div className='social bgcolor1 spacert p-4'>
                <Container>
                    <h2>Follow Us</h2>
                    <div className='social_icon d-flex justify-content-center'>
                    <div className='icon'><FaFacebookF/></div>
                    <div className='icon'><FaTwitter/></div>
                    <div className='icon'><FaInstagram/></div>
                    <div className='icon'><FaPinterest/></div>
                    </div>
                </Container>
                </div>
                <div className='footer bgcolor p-4'>
                <Container>
                    <p>© 2022 All Rights Reserved by Maxico Smart Watch.</p>
                </Container>
                </div>
            </footer>
        </>
    )
}

export default Footer;