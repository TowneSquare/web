import { Container } from '../../styles/common';
import '../../App.css';
import Page from '../../components/Foundation/Page';

function Home() {
  return (
    <Page>
      <div className="App">
        <Container>
          <h1>TowneSquare Checklist:</h1>
          <div>Build site: x<br />Win hackathon: x<br />Publish TowneSquare: x<br />Get rich: x</div>
          <br />
          <img src="https://media4.giphy.com/media/Qv5TjYPMeesh3ALM4N/giphy.gif"/>
          <br />
          <br />
          <div>Message Dreamer#6463 on Discord when you run out of work to do! :)</div>
        </Container>
      </div>
    </Page>
  );
}

export default Home;
