import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row'
// import { ImageStyle } from '../../../pages/LandingPage/styles';
// import { NavLink } from 'react-router-dom';
import { useTheme } from '@emotion/react';
import { Container } from '../../../styles/common';

function LandingTop() {
    const theme = useTheme();

    return (
        <Navbar bg="dark" variant="dark">
            <Container background={theme.colors.bg}>
                <Row>
                    {/* <Navbar.Brand>
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
                            <NavLink to="/">
                                TowneSquare
                            </NavLink>
                        </div>
                    </Navbar.Brand> */}
                </Row>
            </Container>
        </Navbar>
    )
};

LandingTop.displayName = 'LandingTop';
export default LandingTop;