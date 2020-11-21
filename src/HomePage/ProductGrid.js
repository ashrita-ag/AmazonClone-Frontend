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
              heading="Up to 50% off | Like-new products"
              image="https://images-eu.ssl-images-amazon.com/images/G/31/in-certifiedrefurbished/gateway/Gateway_Unboxed_1209837_379x304._SY304_CB424157491_.jpg"
              link="/like-new-products"
              class="productLink d-block"
            />
          </Col>

          <Col lg={{ order: 2 }} md={{ order: 2 }}>
            <Product
              heading="For a productive home office"
              image="https://images-eu.ssl-images-amazon.com/images/G/31/img20/CEPC/GW/Dashboard/WFH_GW_DC_379x304._SY304_CB417122473_.jpg"
              link="/home-office"
              class="productLink d-block"
            />
          </Col>

          <Col lg={{ order: 3 }} md={{ order: 3 }}>
            <Product
              heading="Additional items to explore"
              image="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Fashion/WRS_PC_June16/WRC_CC/Flexible_Desktop__Cat_Card_2X._SY304_CB429564537_.jpg"
              link="/additional-items"
              class="productLink d-block"
            />
          </Col>

          <Col lg={{ order: 4 }} md={{ order: 6 }}>
            <HomeGridItem />
          </Col>

          <Col lg={{ order: 5 }} md={{ order: 4 }}>
            <Product
              heading="Up to 50% off | Refurbished speakers"
              image="https://images-eu.ssl-images-amazon.com/images/G/31/in-certifiedrefurbished/gateway/Desktop_Speakers_1198382_379x304._SY304_CB448485373_.jpg"
              link="/"
              class="productLink d-block invisible"
            />
          </Col>

          <Col lg={{ order: 6 }} md={{ order: 5 }}>
            <Product
              heading="Refurbished mobiles"
              image="https://images-eu.ssl-images-amazon.com/images/G/31/in-certifiedrefurbished/gateway/Ver2_GW._SY304_CB446171261_.jpg"
              link="/"
              class="productLink d-block invisible"
            />
          </Col>

          <Col lg={{ order: 7 }} md={{ order: 7 }}>
            <Product
              heading="Studio headphones, audio interfaces & more"
              image="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Camera/GoPro/Gateway/379x304_pc_cc._SY304_CB417124607_.jpg"
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
              heading="Save up to 40% | Amazon Pantry"
              image="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Pantry/MARCH_2020/BAU/GW/Dashboard/FlexibleDesktop_CatCard._SY304_CB422434412_.jpg"
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
