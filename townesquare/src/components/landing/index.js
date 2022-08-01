import LandingTop from "./components/LandingTop";

export const Landing = ({ page = 'landing' }) => {
    const { t } = useTranslation();

    return (
        <>
            <Helmet>
                <title>{t('metaTags:title')}</title>
            </Helmet>
            <main className='landing-page'>
                <Grid>
                    <LandingTop page={page} />
                </Grid>
            </main>
        </>
    )
}
