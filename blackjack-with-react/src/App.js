import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { HandWithInfo } from './components/HandWithInfo';
import { MessageRow } from './components/MessageRow';

function App() {
  return (
    <>
      <div style={{backgroundColor: '#0D1C0D', width: '100vw', height: '100vh'}}>
        <MessageRow />
        <Container fluid style={{backgroundColor: '#4C8844', width: '100vw', height: '84vh'}}>
          {/* <img src='./images/1_of_clubs.png' style={{height: '500px'}} alt=''/> */}
          <Row>Row for Budget and Current Bet Info</Row>
          <Row>Row for Dealers info and hand</Row>
          <Row>Row for Players info and hand</Row>
          <Row>Row for Deal, Hit, Stand buttons</Row>
        </Container>
      </div>
    </>
    
  );
}

export default App;

