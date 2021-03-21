import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import hospitalData from '../../services/HospitalDataService';
import "./hospitalStyles.css";
import moment from 'moment';

export default function HospitalData() {

  // get latest time update
  const date = new Date();
  const currentTime = moment(date).format("MM/DD/YYYY hh:mm:ss");

  // generate random and compacity wait times
  const getRandomNumber = (maximum: number) =>{
      return Math.floor(Math.random() * Math.floor(maximum));
  };

  // dynamic class for hospitals with high capacity
  const overHalfCapacity = (val: number) =>{
    return (val <= 10) ? "text-danger" : "text-success";
  }

  // return each card with Hospital data
  const getData = () => {
    return hospitalData.map((data, index) => {
      return (
        <Col xs={12} md={6} sm={12} lg={4} key={index} className="mt-3 mb-3 hospitalCards">
          <div className="card">
            <div className="card-body">
              <Row>
                <Col md={12}>
                  <div className="float-left mb-4">
                    <h5 className="font-weight-bold">{data?.title}</h5>
                  </div>
                  <div className="float-right">
                    <h5 className={`font-weight-bold ${overHalfCapacity(data?.beds)}`}><FontAwesomeIcon icon="bed" /> &nbsp;{data?.beds}</h5>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col md={12}>
                <h6 className="card-title font-weight-bold">Capacity: {getRandomNumber(250)}</h6>
                <h6 className="card-title font-weight-bold">Estimated Threshold: {data?.threshold}%</h6>
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
          <h3 className="text-center">Hospital Data: Region 11</h3>
          <p className="text-center">Last Updated: {currentTime}</p>
          </Col>
        <Row>
          {getData()}
        </Row>
      </Container>
    </div>
  );
}