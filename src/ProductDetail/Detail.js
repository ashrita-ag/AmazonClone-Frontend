import React from "react";
import "./Detail.css";
import DetailCard from "./DetailCard.js";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Detail() {
  return (
    <div>
    {/* <div className="detailHeading">Get Our Best Deals</div> */}
      <Container fluid className="detailContainer">
        <Row noGutters md={3} lg={4}>
          <Col>
            <DetailCard
              heading="Amazon fresh"
              image="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Fresh/Event/Jupiter20-Phase4/diwali/DesktopGateway_CategoryCard_379X304._SY304_CB417134027_.jpg"
            />
          </Col>

          <Col>
            <DetailCard
              heading="Amazon fresh"
              image="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Fresh/Event/Jupiter20-Phase4/diwali/DesktopGateway_CategoryCard_379X304._SY304_CB417134027_.jpg"
            />
          </Col>
          <Col>
            <DetailCard
              heading="Amazon fresh"
              image="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Fresh/Event/Jupiter20-Phase4/diwali/DesktopGateway_CategoryCard_379X304._SY304_CB417134027_.jpg"
            />
          </Col>
          <Col>
            <DetailCard
              heading="Amazon fresh"
              image="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Fresh/Event/Jupiter20-Phase4/diwali/DesktopGateway_CategoryCard_379X304._SY304_CB417134027_.jpg"
            />
          </Col>
          <Col>
            <DetailCard
              heading="Amazon fresh"
              image="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Fresh/Event/Jupiter20-Phase4/diwali/DesktopGateway_CategoryCard_379X304._SY304_CB417134027_.jpg"
            />
          </Col>
          <Col>
            <DetailCard
              heading="Amazon fresh"
              image="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Fresh/Event/Jupiter20-Phase4/diwali/DesktopGateway_CategoryCard_379X304._SY304_CB417134027_.jpg"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Detail;
