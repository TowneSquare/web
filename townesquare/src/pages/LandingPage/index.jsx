import '../../App.css';
import { useState, useEffect } from "react";
import { Header } from '../../components/landing/components/Header';
import { Profile } from '../../components/landing/components/Profile';
import { ContentMarketplace } from '../../components/landing/components/ContentMarketplace';
import { Rewards } from '../../components/landing/components/Rewards';
import { Ecosystem } from '../../components/landing/components/Ecosystem';
import LandingPageData from '../../data/landing_page.json'
import Page from '../../components/Foundation/Page';



const LandingPage = () => {
    const [landingPageData, setLandingPageData] = useState({});
    useEffect(() => {
      setLandingPageData(LandingPageData);
    }, []);

    return (
        
        <Page>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css" />
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-theme.min.css" />
            <Header data={landingPageData.Header} />
            <Profile data={landingPageData} />
            <ContentMarketplace data={landingPageData} />
            <Rewards data={landingPageData} />
            <Ecosystem data={landingPageData} />

        </Page>
    );
}

export default LandingPage;