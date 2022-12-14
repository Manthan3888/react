import 'bootstrap/dist/css/bootstrap.min.css';
import { Card,Button } from 'react-bootstrap';

const Carddet = (props) =>{
    return(
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>
                       {props.age}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card> 
        </>
    )
}

export default Carddet;