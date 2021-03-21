import LineChartComp  from '../../components/Charts';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import vaccineInfo from '../../services/VaccinationDataService';
//import ScatterChart from '../../components/ScatterChart';
import moment from 'moment';

// schema
//   name: 'Page G',
//       uv: 3490,
//       pv: 4300,
//       amt: 2100

export default function VaccinationData() {
// pfizer vaccine data
const pfizerData = vaccineInfo.pfizerVaccineAllocations.weeklyData.map(data => ({ 
  name: moment(data.week_of_allocations).format("MM/DD/YY"),
  uv: data._1st_dose_allocations,
  pv: data._2nd_dose_allocations,
  amt: data._1st_dose_allocations
}));

// Moderna Vaccine Data
const modernaData = vaccineInfo.modernaVaccineAllocations.weeklyData.map(data => ({ 
  name: moment(data.week_of_allocations).format("MM/DD/YY"),
  uv: data._1st_dose_allocations,
  pv: data._2nd_dose_allocations,
  amt: data._1st_dose_allocations
}));

// stats on the dosage administered
const vaccineDataOverview = vaccineInfo.weeklyVaccinations.map(data => ({ 
  name: `WK: ${moment(data.Report_Date).format("MM/DD/YY")}`,
  uv: data.AdministeredCountRollAvg,
  pv: data.PersonsFullyVaccinated,
  amt: data.AdministeredCountChange,
  cnt: data.PctVaccinatedPopulation
}));

  return (
    <div>
      <Container>
        <Col md={12} className="mt-4 mb-4">
          <h3 className="text-center">Vaccination Data</h3>
          </Col>
        <Row>
        <Col md={12} className="mt-4 mb-4">
          <h4 className="text-center">Weekly Vaccination Data</h4>
          <p className="text-center">This is the latest information on adminstering of the vaccines by the week.</p>
          </Col>
          <Col lg={12} md={12} sm={12} xs={12} className="mb-4">
          <LineChartComp data={vaccineDataOverview} uvName="Vaccinated Average" pvName="Vaccinated Count"></LineChartComp>
          </Col>
          <Col lg={12} md={12} sm={12} xs={12} className="mb-4">
          <Col md={12} className="mt-4 mb-4">
          <h4 className="text-center">Pfizer Vaccination Data</h4>
          <p className="text-center">This is the latest information on the dosages of the Pfizer vaccine.</p>
          </Col>
          <LineChartComp data={pfizerData} uvName="1st Dose" pvName="2nd Dose"></LineChartComp>
          </Col>
          <Col md={12} className="mt-4 mb-4">
          <h4 className="text-center">Moderna Vaccination Data</h4>
          <p className="text-center">This is the latest information on the dosages of the Moderna vaccine.</p>
          </Col>
          <Col lg={12} md={12} sm={12} xs={12} className="mb-4">
          <LineChartComp data={modernaData} uvName="1st Dose" pvName="2nd Dose"></LineChartComp>
          </Col>
        </Row>
      </Container>
  	</div>
  );
}
