import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import restrictionsData from '../../services/CovidRestrictionsService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Home() {

  return (
    <div>
      	<Container>
          <Col md={12} className="mt-5 text-center">
            <div><FontAwesomeIcon icon="laptop-medical" size="10x" /></div>
          </Col>
        <Col md={12} className="mt-4 mb-4">
          <h3 className="text-center">Welcome to the Covid Application!</h3>
          <p className="text-center">Here is where you will find information and data regarding the Covid-19 vaccination rollout. It will will all the information on Covid-19 vaccines.</p>
          </Col>
      </Container>
  	</div>
  );
}