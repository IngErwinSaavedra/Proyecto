import { ActivityCard, PageBreadcrumb } from "@/components";
import { Card, CardBody, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Statistics from "./components/Statistics";
//import AudienceOverviewChart from "./components/AudienceOverviewChart";
//import SessionsDevice from "./components/SessionsDevice";
//import ViewByUsers from "./components/ViewByUsers";
//import SessionsByChannels from "./components/SessionsByChannels";
//import TrafficReports from "./components/TrafficReports";
//import BrowserReports from "./components/BrowserReports";

const Principal = () => {
  return (
    <>
      <PageBreadcrumb subName="Dashboard" title="Analytics" />
      <Row>
        <Col lg={9}>
          <Card>
            <CardBody>
              <Statistics />
            </CardBody>
          </Card>
          {/* <AudienceOverviewChart /> */}
        </Col>
        <Col lg={3}>{/* <SessionsDevice /> */}</Col>
      </Row>
      <Row>
        <Col lg={6}>{/* <TrafficReports /> */}</Col>
        <Col lg={6}>{/* <BrowserReports /> */}</Col>
      </Row>
    </>
  );
};

export default Principal;
