import '../../App.css';
import { useState, useEffect } from "react";
import { Header } from '../../components/landing/components/Header';
import { Profile } from '../../components/landing/components/Profile';
import { ContentMarketplace } from '../../components/landing/components/ContentMarketplace';
import { Rewards } from '../../components/landing/components/Rewards';
import { Ecosystem } from '../../components/landing/components/Ecosystem';
import LandingPageData from './../../data/landing_page.json'
import Page from '../../components/Foundation/Page';
import { Footer } from '../../components/Foundation/Footer';
import { LandingData } from '../../data/types';



const LandingPage = () => {
    const [landingPageData, setLandingPageData] = useState({});
    useEffect(() => {
      setLandingPageData(LandingPageData);
    }, []);

    return (
        <Page>
          <script src="https://unpkg.com/react/umd/react.production.min.js"></script>

          <script
            src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"></script>

          <script
            src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"></script>
            

          <script>var Alert = ReactBootstrap.Alert;</script>
          <Header data={landingPageData} />
          <Profile data={landingPageData} />
          <ContentMarketplace data={landingPageData} />
          <Rewards data={LandingPageData["Rewards"] as LandingData} />
          <Ecosystem data={LandingPageData["Ecosystem"] as LandingData} />
          <Footer></Footer>
        </Page>
    );
}

export default LandingPage;