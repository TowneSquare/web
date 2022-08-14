import '../../App.css';
import styled from '@emotion/styled';
import Page from '../../components/Foundation/Page';
import { Footer } from '../../components/Foundation/Footer';
import { Title } from '../../components/Foundation';

const TermsOfService = () => {
    return (
        <Page>
            <script src="https://unpkg.com/react/umd/react.production.min.js"></script>

            <script
            src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"></script>

            <script
            src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"></script>
            
            <script>var Alert = ReactBootstrap.Alert;</script>
            <CenteredTitle>
                <CenteredSpan>
                    Terms of Service coming soon!
                </CenteredSpan>
            </CenteredTitle>
            <Footer></Footer>
        </Page>
    );
}

const CenteredTitle = styled(Title)`
    height: 80vh; 
    text-align: center;
    line-height: 80vh;
`

const CenteredSpan = styled.span`
    display: inline-block;
    vertical-align: middle;
    line-height: normal;
`

export default TermsOfService;