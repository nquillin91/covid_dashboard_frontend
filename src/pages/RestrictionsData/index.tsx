import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import restrictionsData from '../../services/CovidRestrictionsService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function RestrictionsData() {

  // return each card with Hospital data
  const getData = () => {
    return restrictionsData.map((data, index) => {
      return (
        <Col xs={12} md={12} sm={12} lg={12} key={index} className="mt-3 mb-3 hospitalCards">
          <div className="card">
            <div className="card-body">
              <Row>
                <Col md={12}>
                  <div className="float-left mb-4">
                    <h5 className="font-weight-bold"><FontAwesomeIcon icon="calendar-alt" /> &nbsp; {data?.date}</h5>
                  </div>
                  <div className="float-right">
                    <h5 className="font-weight-bold">{data?.beds}</h5>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col md={12}>
                <h6 className="card-title font-weight-bold">Positive Tests: {data?.positiveTests}</h6>
                <h6 className="card-title font-weight-bold">Total Tested: {data?.totalTested}</h6>
                <h6 className="card-title font-weight-bold">Daily Test Positivity: {data?.dailyTestPositivity}</h6>
                <h6 className="card-title font-weight-bold">Seven Day Average: {data?.sevenDayAvg}</h6>
                </Col>
              </Row>
            </div>
          </div>
        </Col>
      );
    });
  }

  return (
    <div>
      	<Container>
        <Col md={12} className="mt-4 mb-4">
          <h3 className="text-center">Covid Restrictions</h3>
          <p className="text-center">These are daily Positive Test Rates currently in Chicago. Also, the Covid restrictions are Moderate if under 15.0 and Severe if over 15.0.</p>
          </Col>
        <Row>
          {getData()}
        </Row>
      </Container>
  	</div>
  );
}