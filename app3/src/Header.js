import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

const Header = () =>{
    return(
        <>
            <header>
                <div className='bgcolor1'>
                <Container>
                    <div className='top_header d-flex justify-content-between align-items-center mt-3 p-3'>
                        <div>
                            <img src={require('./image/logo.png')}></img>
                        </div>
                        <nav class="nav">
                            <a class="nav-link" href="#">Home</a>
                            <a class="nav-link" href="#">About</a>
                            <a class="nav-link" href="#">Features</a>
                            <a class="nav-link" href="#">Product</a>
                            <a class="nav-link" href="#">Contact</a>
                        </nav>
                    </div>
                </Container>
                </div>
            </header>
        </>
    )
}

export default Header;