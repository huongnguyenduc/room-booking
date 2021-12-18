// import React from 'react';
import { Carousel, Row, Col, Tabs } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import './style.less';
import SearchTool from './searchTool';
import slide1 from '../../asset/image2.jpg';
import slide2 from '../../asset/image4.jpg';
import slide3 from '../../asset/image1.jpg';
import slide4 from '../../asset/image3.jpg';
import place1 from '../../asset/outdoor.jpg';
import place2 from '../../asset/unique.jpg';
import place3 from '../../asset/entire.jpg';
import place4 from '../../asset/pest.jpg';
import explore1 from '../../asset/explore1.jpg';
import explore2 from '../../asset/explore2.jpg';
import explore3 from '../../asset/explore3.jpg';
import explore4 from '../../asset/explore4.jpg';
import explore5 from '../../asset/explore5.jpg';
import explore6 from '../../asset/explore6.jpg';
import explore7 from '../../asset/explore7.jpg';
import explore8 from '../../asset/explore8.jpg';
const { TabPane } = Tabs;
const LandingPage = () => {
  return (
    <div className="Container">
      <div className="herosection">
        <Carousel
          className="carousel"
          autoplay
          arrows
          prevArrow={<LeftOutlined />}
          nextArrow={<RightOutlined />}
        >
          <div id="image1" className="contentStyle" style={{ background: `url(${slide1})` }} />
          <div className="contentStyle" id="image2" style={{ background: `url(${slide2})` }} />
          <div className="contentStyle" id="image3" style={{ background: `url(${slide3})` }} />
          <div className="contentStyle" id="image4" style={{ background: `url(${slide4})` }} />
        </Carousel>
        <SearchTool />
      </div>
      <div className="recommend">
        <Row gutter={{ xl: 30, md: 12, sm: 6, xs: 4 }}>
          <Col
            xs={{ span: 20, offset: 2 }}
            lg={{ span: 8, offset: 0 }}
            md={{ span: 15, offset: 4 }}
          >
            <div className="placeCard" style={{ background: `url(${place1})` }}>
              <div className="title-content-1">
                <div className="title-name" style={{ color: 'white', fontWeight: 'bold' }}>
                  Outdoor gateways
                </div>
                <span>131 stays</span>
              </div>
            </div>
          </Col>
          <Col
            xs={{ span: 20, offset: 2 }}
            lg={{ span: 8, offset: 0 }}
            md={{ span: 15, offset: 4 }}
            className="placeCard"
          >
            <Row>
              <Col span={24}>
                <div
                  className="place"
                  style={{ background: `url(${place2})`, backgroundSize: `cover` }}
                >
                  <div className="title-content-2">
                    <div className="title-name" style={{ color: 'white', fontWeight: 'bold' }}>
                      Unique stays
                    </div>
                    <span>131 stays</span>
                  </div>
                </div>
              </Col>
            </Row>
            <div style={{ marginBottom: '20px' }} />
            <Row>
              <Col span={24}>
                <div
                  className="place"
                  style={{ background: `url(${place3})`, backgroundSize: `cover` }}
                >
                  <div className="title-content-2">
                    <div className="title-name" style={{ color: 'white', fontWeight: 'bold' }}>
                      Entire home
                    </div>
                    <span>131 stays</span>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
          <Col
            xs={{ span: 20, offset: 2 }}
            lg={{ span: 8, offset: 0 }}
            md={{ span: 15, offset: 4 }}
          >
            <div
              className="placeCard"
              style={{ background: `url(${place4})`, backgroundSize: `cover` }}
            >
              <div className="title-content-1">
                <div className="title-name" style={{ color: 'white', fontWeight: 'bold' }}>
                  Pets allowed
                </div>
                <span>131 stays</span>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <div className="explore">
        <div className="title">
          <h2 style={{ fontWeight: 'bold' }}>Explore nearby</h2>
        </div>
        <div className="container_explore">
          <Row gutter={[0, 15]}>
            <Col
              lg={{ span: 6, offset: 0 }}
              md={{ span: 10, offset: 0 }}
              xs={{ span: 10, offset: 0 }}
            >
              <div className="item_container">
                <div
                  id="explore1"
                  className="image_explore"
                  style={{ background: `url(${explore1})`, backgroundSize: `cover` }}
                />
                <div className="item_content">
                  <div className="item_content_city">San Francisco</div>
                  <div className="item_content_time">3 Hour drive</div>
                </div>
              </div>
            </Col>
            <Col
              lg={{ span: 5, offset: 1 }}
              md={{ span: 10, offset: 0 }}
              xs={{ span: 10, offset: 2 }}
            >
              <div className="item_container">
                <div
                  id="explore2"
                  className="image_explore"
                  style={{ background: `url(${explore2})`, backgroundSize: `cover` }}
                />
                <div className="item_content">
                  <div className="item_content_city">Los Angeles</div>
                  <div className="item_content_time">1 Hour drive</div>
                </div>
              </div>
            </Col>
            <Col
              lg={{ span: 5, offset: 1 }}
              md={{ span: 10, offset: 0 }}
              xs={{ span: 10, offset: 0 }}
            >
              <div className="item_container">
                <div
                  id="explore3"
                  className="image_explore"
                  style={{ background: `url(${explore3})`, backgroundSize: `cover` }}
                />
                <div className="item_content">
                  <div className="item_content_city">Rome</div>
                  <div className="item_content_time">2 Hour drive</div>
                </div>
              </div>
            </Col>
            <Col
              lg={{ span: 5, offset: 1 }}
              md={{ span: 10, offset: 0 }}
              xs={{ span: 10, offset: 2 }}
            >
              <div className="item_container">
                <div
                  id="explore4"
                  className="image_explore"
                  style={{ background: `url(${explore4})`, backgroundSize: `cover` }}
                />
                <div className="item_content">
                  <div className="item_content_city">Miami</div>
                  <div className="item_content_time">5 Hour drive</div>
                </div>
              </div>
            </Col>
            <Col
              lg={{ span: 6, offset: 0 }}
              md={{ span: 10, offset: 0 }}
              xs={{ span: 10, offset: 0 }}
            >
              <div className="item_container">
                <div
                  id="explore5"
                  className="image_explore"
                  style={{ background: `url(${explore5})`, backgroundSize: `cover` }}
                />
                <div className="item_content">
                  <div className="item_content_city">New York City</div>
                  <div className="item_content_time">3 Hour drive</div>
                </div>
              </div>
            </Col>
            <Col
              lg={{ span: 5, offset: 1 }}
              md={{ span: 10, offset: 0 }}
              xs={{ span: 10, offset: 2 }}
            >
              <div className="item_container">
                <div
                  id="explore6"
                  className="image_explore"
                  style={{ background: `url(${explore6})`, backgroundSize: `cover` }}
                />
                <div className="item_content">
                  <div className="item_content_city">Paris</div>
                  <div className="item_content_time">1 Hour drive</div>
                </div>
              </div>
            </Col>
            <Col
              lg={{ span: 5, offset: 1 }}
              md={{ span: 10, offset: 0 }}
              xs={{ span: 10, offset: 0 }}
            >
              <div className="item_container">
                <div
                  id="explore7"
                  className="image_explore"
                  style={{ background: `url(${explore7})`, backgroundSize: `cover` }}
                />
                <div className="item_content">
                  <div className="item_content_city">Danang</div>
                  <div className="item_content_time">2 Hour drive</div>
                </div>
              </div>
            </Col>
            <Col
              lg={{ span: 5, offset: 1 }}
              md={{ span: 10, offset: 0 }}
              xs={{ span: 10, offset: 2 }}
            >
              <div className="item_container">
                <div
                  id="explore8"
                  className="image_explore"
                  style={{ background: `url(${explore8})`, backgroundSize: `cover` }}
                />
                <div className="item_content">
                  <div className="item_content_city">Singapore</div>
                  <div className="item_content_time">5 Hour drive</div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div className="tab_select">
        <h2 style={{ fontWeight: 'bold' }}>Inspiration for future getaways</h2>
        <Tabs defaultActiveKey="1">
          <TabPane tab="Destinations for art and culture" key="1">
            <Row gutter={[0, 10]}>
              <Col
                lg={{ span: 4, offset: 0 }}
                md={{ span: 4, offset: 0 }}
                xs={{ span: 4, offset: 0 }}
              >
                <div className="content_location">
                  <div className="content_location_city">Phoenix</div>
                  <div className="content_location_country">Arizona</div>
                </div>
              </Col>
              <Col
                lg={{ span: 4, offset: 0 }}
                md={{ span: 4, offset: 0 }}
                xs={{ span: 4, offset: 0 }}
              >
                <div className="content_location">
                  <div className="content_location_city">San Francisco</div>
                  <div className="content_location_country">California</div>
                </div>
              </Col>
              <Col
                lg={{ span: 4, offset: 0 }}
                md={{ span: 4, offset: 0 }}
                xs={{ span: 4, offset: 0 }}
              >
                <div className="content_location">
                  <div className="content_location_city">Keswick</div>
                  <div className="content_location_country">England</div>
                </div>
              </Col>
              <Col
                lg={{ span: 4, offset: 0 }}
                md={{ span: 4, offset: 0 }}
                xs={{ span: 4, offset: 0 }}
              >
                <div className="content_location">
                  <div className="content_location_city">York</div>
                  <div className="content_location_country">England</div>
                </div>
              </Col>
              <Col
                lg={{ span: 4, offset: 0 }}
                md={{ span: 4, offset: 0 }}
                xs={{ span: 4, offset: 0 }}
              >
                <div className="content_location">
                  <div className="content_location_city">Dublin</div>
                  <div className="content_location_country">Ireland</div>
                </div>
              </Col>
              <Col
                lg={{ span: 4, offset: 0 }}
                md={{ span: 4, offset: 0 }}
                xs={{ span: 4, offset: 0 }}
              >
                <div className="content_location">
                  <div className="content_location_city">Grande Isle</div>
                  <div className="content_location_country">Lousiana</div>
                </div>
              </Col>
              <Col
                lg={{ span: 4, offset: 0 }}
                md={{ span: 4, offset: 0 }}
                xs={{ span: 4, offset: 0 }}
              >
                <div className="content_location">
                  <div className="content_location_city">Duluth</div>
                  <div className="content_location_country">Minnesota</div>
                </div>
              </Col>
              <Col
                lg={{ span: 4, offset: 0 }}
                md={{ span: 4, offset: 0 }}
                xs={{ span: 4, offset: 0 }}
              >
                <div className="content_location">
                  <div className="content_location_city">Hot Springs</div>
                  <div className="content_location_country">Arkansas</div>
                </div>
              </Col>
              <Col
                lg={{ span: 4, offset: 0 }}
                md={{ span: 4, offset: 0 }}
                xs={{ span: 4, offset: 0 }}
              >
                <div className="content_location">
                  <div className="content_location_city">Barcelona</div>
                  <div className="content_location_country">Catalonia</div>
                </div>
              </Col>
              <Col
                lg={{ span: 4, offset: 0 }}
                md={{ span: 4, offset: 0 }}
                xs={{ span: 4, offset: 0 }}
              >
                <div className="content_location">
                  <div className="content_location_city">London</div>
                  <div className="content_location_country">England</div>
                </div>
              </Col>
              <Col
                lg={{ span: 4, offset: 0 }}
                md={{ span: 4, offset: 0 }}
                xs={{ span: 4, offset: 0 }}
              >
                <div className="content_location">
                  <div className="content_location_city">Paris</div>
                  <div className="content_location_country">France</div>
                </div>
              </Col>
              <Col
                lg={{ span: 4, offset: 0 }}
                md={{ span: 4, offset: 0 }}
                xs={{ span: 4, offset: 0 }}
              >
                <div className="content_location">
                  <div className="content_location_city">Florece</div>
                  <div className="content_location_country">Italy</div>
                </div>
              </Col>
              <Col
                lg={{ span: 4, offset: 0 }}
                md={{ span: 4, offset: 0 }}
                xs={{ span: 4, offset: 0 }}
              >
                <div className="content_location">
                  <div className="content_location_city">Berlin</div>
                  <div className="content_location_country">Germany</div>
                </div>
              </Col>
              <Col
                lg={{ span: 4, offset: 0 }}
                md={{ span: 4, offset: 0 }}
                xs={{ span: 4, offset: 0 }}
              >
                <div className="content_location">
                  <div className="content_location_city">Athens</div>
                  <div className="content_location_country">Greece</div>
                </div>
              </Col>
              <Col
                lg={{ span: 4, offset: 0 }}
                md={{ span: 4, offset: 0 }}
                xs={{ span: 4, offset: 0 }}
              >
                <div className="content_location">
                  <div className="content_location_city">Istambul</div>
                  <div className="content_location_country">Turkey</div>
                </div>
              </Col>
              <Col
                lg={{ span: 4, offset: 0 }}
                md={{ span: 4, offset: 0 }}
                xs={{ span: 4, offset: 0 }}
              >
                <div className="content_location">
                  <div className="content_location_city">Milan</div>
                  <div className="content_location_country">italy</div>
                </div>
              </Col>
              <Col
                lg={{ span: 4, offset: 0 }}
                md={{ span: 4, offset: 0 }}
                xs={{ span: 4, offset: 0 }}
              >
                <div className="content_location">
                  <div className="content_location_city">Rome</div>
                  <div className="content_location_country">Italy</div>
                </div>
              </Col>
              <Col
                lg={{ span: 4, offset: 0 }}
                md={{ span: 4, offset: 0 }}
                xs={{ span: 4, offset: 0 }}
              >
                <div className="content_location">
                  <div className="content_location_city">Marid</div>
                  <div className="content_location_country">Spain</div>
                </div>
              </Col>
            </Row>
          </TabPane>
          <TabPane tab="Destinations for outdoor adventure" key="2">
            <Row gutter={[0, 10]}>
              <Col
                lg={{ span: 4, offset: 0 }}
                md={{ span: 4, offset: 0 }}
                xs={{ span: 4, offset: 0 }}
              >
                <div className="content_location">
                  <div className="content_location_city">Duluth</div>
                  <div className="content_location_country">Minnesota</div>
                </div>
              </Col>
              <Col
                lg={{ span: 4, offset: 0 }}
                md={{ span: 4, offset: 0 }}
                xs={{ span: 4, offset: 0 }}
              >
                <div className="content_location">
                  <div className="content_location_city">Hot Springs</div>
                  <div className="content_location_country">Arkansas</div>
                </div>
              </Col>
              <Col
                lg={{ span: 4, offset: 0 }}
                md={{ span: 4, offset: 0 }}
                xs={{ span: 4, offset: 0 }}
              >
                <div className="content_location">
                  <div className="content_location_city">Barcelona</div>
                  <div className="content_location_country">Catalonia</div>
                </div>
              </Col>
              <Col
                lg={{ span: 4, offset: 0 }}
                md={{ span: 4, offset: 0 }}
                xs={{ span: 4, offset: 0 }}
              >
                <div className="content_location">
                  <div className="content_location_city">London</div>
                  <div className="content_location_country">England</div>
                </div>
              </Col>
              <Col
                lg={{ span: 4, offset: 0 }}
                md={{ span: 4, offset: 0 }}
                xs={{ span: 4, offset: 0 }}
              >
                <div className="content_location">
                  <div className="content_location_city">Paris</div>
                  <div className="content_location_country">France</div>
                </div>
              </Col>
              <Col
                lg={{ span: 4, offset: 0 }}
                md={{ span: 4, offset: 0 }}
                xs={{ span: 4, offset: 0 }}
              >
                <div className="content_location">
                  <div className="content_location_city">Florece</div>
                  <div className="content_location_country">Italy</div>
                </div>
              </Col>
              <Col
                lg={{ span: 4, offset: 0 }}
                md={{ span: 4, offset: 0 }}
                xs={{ span: 4, offset: 0 }}
              >
                <div className="content_location">
                  <div className="content_location_city">Phoenix</div>
                  <div className="content_location_country">Arizona</div>
                </div>
              </Col>
              <Col
                lg={{ span: 4, offset: 0 }}
                md={{ span: 4, offset: 0 }}
                xs={{ span: 4, offset: 0 }}
              >
                <div className="content_location">
                  <div className="content_location_city">San Francisco</div>
                  <div className="content_location_country">California</div>
                </div>
              </Col>
              <Col
                lg={{ span: 4, offset: 0 }}
                md={{ span: 4, offset: 0 }}
                xs={{ span: 4, offset: 0 }}
              >
                <div className="content_location">
                  <div className="content_location_city">Keswick</div>
                  <div className="content_location_country">England</div>
                </div>
              </Col>
              <Col
                lg={{ span: 4, offset: 0 }}
                md={{ span: 4, offset: 0 }}
                xs={{ span: 4, offset: 0 }}
              >
                <div className="content_location">
                  <div className="content_location_city">York</div>
                  <div className="content_location_country">England</div>
                </div>
              </Col>
              <Col
                lg={{ span: 4, offset: 0 }}
                md={{ span: 4, offset: 0 }}
                xs={{ span: 4, offset: 0 }}
              >
                <div className="content_location">
                  <div className="content_location_city">Dublin</div>
                  <div className="content_location_country">Ireland</div>
                </div>
              </Col>
              <Col
                lg={{ span: 4, offset: 0 }}
                md={{ span: 4, offset: 0 }}
                xs={{ span: 4, offset: 0 }}
              >
                <div className="content_location">
                  <div className="content_location_city">Grande Isle</div>
                  <div className="content_location_country">Lousiana</div>
                </div>
              </Col>
              <Col
                lg={{ span: 4, offset: 0 }}
                md={{ span: 4, offset: 0 }}
                xs={{ span: 4, offset: 0 }}
              >
                <div className="content_location">
                  <div className="content_location_city">Berlin</div>
                  <div className="content_location_country">Germany</div>
                </div>
              </Col>
              <Col
                lg={{ span: 4, offset: 0 }}
                md={{ span: 4, offset: 0 }}
                xs={{ span: 4, offset: 0 }}
              >
                <div className="content_location">
                  <div className="content_location_city">Athens</div>
                  <div className="content_location_country">Greece</div>
                </div>
              </Col>
              <Col
                lg={{ span: 4, offset: 0 }}
                md={{ span: 4, offset: 0 }}
                xs={{ span: 4, offset: 0 }}
              >
                <div className="content_location">
                  <div className="content_location_city">Istambul</div>
                  <div className="content_location_country">Turkey</div>
                </div>
              </Col>
              <Col
                lg={{ span: 4, offset: 0 }}
                md={{ span: 4, offset: 0 }}
                xs={{ span: 4, offset: 0 }}
              >
                <div className="content_location">
                  <div className="content_location_city">Milan</div>
                  <div className="content_location_country">italy</div>
                </div>
              </Col>
              <Col
                lg={{ span: 4, offset: 0 }}
                md={{ span: 4, offset: 0 }}
                xs={{ span: 4, offset: 0 }}
              >
                <div className="content_location">
                  <div className="content_location_city">Rome</div>
                  <div className="content_location_country">Italy</div>
                </div>
              </Col>
              <Col
                lg={{ span: 4, offset: 0 }}
                md={{ span: 4, offset: 0 }}
                xs={{ span: 4, offset: 0 }}
              >
                <div className="content_location">
                  <div className="content_location_city">Marid</div>
                  <div className="content_location_country">Spain</div>
                </div>
              </Col>
            </Row>
          </TabPane>
          <TabPane tab="Mountain cabins" key="3">
            <Row gutter={[0, 10]}>
              <Col
                lg={{ span: 4, offset: 0 }}
                md={{ span: 4, offset: 0 }}
                xs={{ span: 4, offset: 0 }}
              >
                <div className="content_location">
                  <div className="content_location_city">Berlin</div>
                  <div className="content_location_country">Germany</div>
                </div>
              </Col>
              <Col
                lg={{ span: 4, offset: 0 }}
                md={{ span: 4, offset: 0 }}
                xs={{ span: 4, offset: 0 }}
              >
                <div className="content_location">
                  <div className="content_location_city">Athens</div>
                  <div className="content_location_country">Greece</div>
                </div>
              </Col>
              <Col
                lg={{ span: 4, offset: 0 }}
                md={{ span: 4, offset: 0 }}
                xs={{ span: 4, offset: 0 }}
              >
                <div className="content_location">
                  <div className="content_location_city">Istambul</div>
                  <div className="content_location_country">Turkey</div>
                </div>
              </Col>
              <Col
                lg={{ span: 4, offset: 0 }}
                md={{ span: 4, offset: 0 }}
                xs={{ span: 4, offset: 0 }}
              >
                <div className="content_location">
                  <div className="content_location_city">Milan</div>
                  <div className="content_location_country">italy</div>
                </div>
              </Col>
              <Col
                lg={{ span: 4, offset: 0 }}
                md={{ span: 4, offset: 0 }}
                xs={{ span: 4, offset: 0 }}
              >
                <div className="content_location">
                  <div className="content_location_city">Rome</div>
                  <div className="content_location_country">Italy</div>
                </div>
              </Col>
              <Col
                lg={{ span: 4, offset: 0 }}
                md={{ span: 4, offset: 0 }}
                xs={{ span: 4, offset: 0 }}
              >
                <div className="content_location">
                  <div className="content_location_city">Marid</div>
                  <div className="content_location_country">Spain</div>
                </div>
              </Col>
              <Col
                lg={{ span: 4, offset: 0 }}
                md={{ span: 4, offset: 0 }}
                xs={{ span: 4, offset: 0 }}
              >
                <div className="content_location">
                  <div className="content_location_city">Duluth</div>
                  <div className="content_location_country">Minnesota</div>
                </div>
              </Col>
              <Col
                lg={{ span: 4, offset: 0 }}
                md={{ span: 4, offset: 0 }}
                xs={{ span: 4, offset: 0 }}
              >
                <div className="content_location">
                  <div className="content_location_city">Hot Springs</div>
                  <div className="content_location_country">Arkansas</div>
                </div>
              </Col>
              <Col
                lg={{ span: 4, offset: 0 }}
                md={{ span: 4, offset: 0 }}
                xs={{ span: 4, offset: 0 }}
              >
                <div className="content_location">
                  <div className="content_location_city">Barcelona</div>
                  <div className="content_location_country">Catalonia</div>
                </div>
              </Col>
              <Col
                lg={{ span: 4, offset: 0 }}
                md={{ span: 4, offset: 0 }}
                xs={{ span: 4, offset: 0 }}
              >
                <div className="content_location">
                  <div className="content_location_city">London</div>
                  <div className="content_location_country">England</div>
                </div>
              </Col>
              <Col
                lg={{ span: 4, offset: 0 }}
                md={{ span: 4, offset: 0 }}
                xs={{ span: 4, offset: 0 }}
              >
                <div className="content_location">
                  <div className="content_location_city">Paris</div>
                  <div className="content_location_country">France</div>
                </div>
              </Col>
              <Col
                lg={{ span: 4, offset: 0 }}
                md={{ span: 4, offset: 0 }}
                xs={{ span: 4, offset: 0 }}
              >
                <div className="content_location">
                  <div className="content_location_city">Florece</div>
                  <div className="content_location_country">Italy</div>
                </div>
              </Col>
              <Col
                lg={{ span: 4, offset: 0 }}
                md={{ span: 4, offset: 0 }}
                xs={{ span: 4, offset: 0 }}
              >
                <div className="content_location">
                  <div className="content_location_city">Phoenix</div>
                  <div className="content_location_country">Arizona</div>
                </div>
              </Col>
              <Col
                lg={{ span: 4, offset: 0 }}
                md={{ span: 4, offset: 0 }}
                xs={{ span: 4, offset: 0 }}
              >
                <div className="content_location">
                  <div className="content_location_city">San Francisco</div>
                  <div className="content_location_country">California</div>
                </div>
              </Col>
              <Col
                lg={{ span: 4, offset: 0 }}
                md={{ span: 4, offset: 0 }}
                xs={{ span: 4, offset: 0 }}
              >
                <div className="content_location">
                  <div className="content_location_city">Keswick</div>
                  <div className="content_location_country">England</div>
                </div>
              </Col>
              <Col
                lg={{ span: 4, offset: 0 }}
                md={{ span: 4, offset: 0 }}
                xs={{ span: 4, offset: 0 }}
              >
                <div className="content_location">
                  <div className="content_location_city">York</div>
                  <div className="content_location_country">England</div>
                </div>
              </Col>
              <Col
                lg={{ span: 4, offset: 0 }}
                md={{ span: 4, offset: 0 }}
                xs={{ span: 4, offset: 0 }}
              >
                <div className="content_location">
                  <div className="content_location_city">Dublin</div>
                  <div className="content_location_country">Ireland</div>
                </div>
              </Col>
              <Col
                lg={{ span: 4, offset: 0 }}
                md={{ span: 4, offset: 0 }}
                xs={{ span: 4, offset: 0 }}
              >
                <div className="content_location">
                  <div className="content_location_city">Grande Isle</div>
                  <div className="content_location_country">Lousiana</div>
                </div>
              </Col>
            </Row>
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default LandingPage;
