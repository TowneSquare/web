import tsLogo from '../../../assets/logo.png';

function LandingTop() {
    return (
        <div className='landing-top'>
            <Row>
                <Col lg={12} sm={12} xs={12}>
                    <div class='landing-top-header'>
                        <span class='landing-top-header-logo'>
                            <img src={tsLogo} />
                            <span>TowneSquare</span>
                        </span>
                    </div>
                </Col>
            </Row>
        </div>
    )
};

LandingTop.displayName = 'LandingTop';
export default LandingTop;