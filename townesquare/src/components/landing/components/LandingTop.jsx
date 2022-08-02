import { style } from '@mui/system';
import { Row, Col } from 'react-bootstrap';

const styles = {
    logo: {
      maxHeight: "200px",
      backgroundColor: "#fff",
      padding: "0 20px",
      display: "inline"
    },
    brandName: {
        verticalAlign: "top"
    },
    landingHeader: {
        display: "flex",
        color: "#fff",
        whiteSpace: "nowrap"
    }
  }
  

function LandingTop() {
    return (
        <div className='landing-top'>
            <Row>
                <Col lg={12} sm={12} xs={12}>
                    <div class={styles.landingHeader}>
                        <p style={styles.brandName}>
                            <img style={styles.logo} src='/logo.png' alt="The Logo for Townesquare"/>
                            TowneSquare
                        </p>
                    </div>
                </Col>
            </Row>
        </div>
    )
};

LandingTop.displayName = 'LandingTop';
export default LandingTop;