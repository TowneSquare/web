import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import { ImageStyle } from '../../../pages/LandingPage/styles';
import { NavLink } from 'react-router-dom';

function LandingTop() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Row>
                    <Navbar.Brand>
                        <div className="col-md-2">
                            <ImageStyle
                            alt=""
                            src="/logo.png"
                            width="100"
                            height="100"
                            className="d-inline-block align-top" >
                            </ImageStyle>{' '}
                        </div>
                        <div className="col-md-10">
                            <NavLink>
                                TowneSquare
                            </NavLink>
                        </div>
                    </Navbar.Brand>
                </Row>
            </Container>
        </Navbar>
    )
};

LandingTop.displayName = 'LandingTop';
export default LandingTop;