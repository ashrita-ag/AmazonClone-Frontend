import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Product from "./Product.js";
import "./ProductGrid.css";
import HomeGridItem from "./HomeGridItem.js";

function ProductGrid() {
  return (
    <div className="productGrid">
      <Container fluid className="productGridContainer">
        <Row noGutters md={3} lg={4}>
          <Col lg={{ order: 1 }} md={{ order: 1 }}>
            <Product
              heading="Amazon fresh"
              image="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Fresh/Event/Jupiter20-Phase4/diwali/DesktopGateway_CategoryCard_379X304._SY304_CB417134027_.jpg"
              link="/detail1"
              class="productLink d-block"
            />
          </Col>

          <Col lg={{ order: 2 }} md={{ order: 2 }}>
            <Product
              heading="Up to 50% off | Chimneys"
              image="https://images-eu.ssl-images-amazon.com/images/G/31/img19/Home/LA/LATVFdesktopQC/Chimney_GW_CC_379x304._SY304_CB427965740_.jpg"
              link="www.amazon.in"
              class="productLink d-block"
            />
          </Col>

          <Col lg={{ order: 3 }} md={{ order: 3 }}>
            <Product
              heading="For efficient home working"
              image="https://images-eu.ssl-images-amazon.com/images/G/31/IMG19/Furniture/MSO/WFH_379x304._SY304_CB430182042_.jpg"
              link="www.amazon.in"
              class="productLink d-block"
            />
          </Col>

          <Col lg={{ order: 4 }} md={{ order: 6 }}>
            <HomeGridItem />
          </Col>

          <Col lg={{ order: 5 }} md={{ order: 4 }}>
            <Product
              heading="Up to 50% off | Microwaves"
              image="https://images-eu.ssl-images-amazon.com/images/G/31/img19/Home/LA/LATVFdesktopQC/Desktop-category-card-adapt_379x304_2._SY304_CB429612182_.jpg"
              link="/"
              class="productLink d-block invisible"
            />
          </Col>

          <Col lg={{ order: 6 }} md={{ order: 5 }}>
            <Product
              heading="Additional items to explore"
              image="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Fashion/WRS_PC_June16/WRC_CC/Flexible_Desktop__Cat_Card_2X._SY304_CB429564537_.jpg"
              link="/"
              class="productLink d-block invisible"
            />
          </Col>

          <Col lg={{ order: 7 }} md={{ order: 7 }}>
            <Product
              heading="Amazon fresh | Diwali essentials"
              image="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Fresh/Event/Jupiter20-Phase4/diwali/DesktopGateway_CategoryCard_379X304._SY304_CB417134027_.jpg"
              link="/"
              class="productLink d-block invisible"
            />
          </Col>

          <Col lg={{ order: 8 }} md={{ order: 8 }}>
            <Product
              heading="Last minute gifting | Amazon Pay Gift Cards"
              image="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Family/GW/Desktop/379x304_1x_card._SY304_CB428642151_.jpg"
              link="/"
              class="productLink d-block invisible"
            />
          </Col>

          <Col lg={{ order: 9 }} md={{ order: 9 }} className="d-lg-none">
            <Product
              heading="Amazon fresh | Diwali essentials"
              image="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Fresh/Event/Jupiter20-Phase4/diwali/DesktopGateway_CategoryCard_379X304._SY304_CB417134027_.jpg"
              link="/"
              class="productLink d-block invisible"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ProductGrid;
