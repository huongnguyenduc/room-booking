import React, { useState } from 'react';
import { Carousel, Row, Col, Tabs, Modal, Button, Select, Input, Divider } from 'antd';
import { LeftOutlined, RightOutlined, FacebookFilled, GoogleOutlined } from '@ant-design/icons';
import './style.less';
import Searchtool from './searchtool';
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
const { Option } = Select;
const { TabPane } = Tabs;
const LandingPage = () => {
  const [visible, setVisible] = useState(false);
  const title = (
    <div className="SignIn_title">
      <h2 style={{ fontWeight: 'bold' }}>Sign in</h2>
      <a href="#" style={{ color: 'gray', fontSize: '13px', textDecoration: 'underline' }}>
        Create an account
      </a>
    </div>
  );
  return (
    <div className="Container">
      <div className="SignIn">
        <Button type="primary" onClick={() => setVisible(true)}>
          Sign In
        </Button>
        <Modal
          title={title}
          style={{ top: 100, left: 400 }}
          visible={visible}
          onCancel={() => setVisible(false)}
          footer={[]}
        >
          <div className="SignInContainer">
            <Select
              style={{
                height: '50px',
                width: 300,
                border: '2px solid lightgray',
                borderRadius: '7px 7px 0px 0px',
              }}
              defaultValue="Country/Region"
            >
              <Option value="jack">American</Option>
              <Option value="lucy">England</Option>
              <Option value="Yiminghe">Australia</Option>
            </Select>
            <Input
              style={{
                height: '50px',
                width: 300,
                border: '2px solid lightgray',
                borderRadius: '0px 0px 7px 7px',
              }}
              placeholder="Phone Number"
            />
            <p style={{ fontSize: '11px', color: 'gray', marginTop: '5px' }}>
              We`&apos;`ll call or text you to confirm your number. Standard message and data rates
              apply.
            </p>
            <Button
              style={{ height: '50px', width: 300, borderRadius: '7px 7px 7px 7px' }}
              type="primary"
            >
              Sign in
            </Button>
            <Divider>OR</Divider>
            <div className="PlugginButton">
              <FacebookFilled style={{ fontSize: '20px', marginLeft: '15px' }} />
              <h3>Continue with Facebook</h3>
            </div>
            <div className="PlugginButton">
              <GoogleOutlined style={{ fontSize: '20px', marginLeft: '15px' }} />
              <h3>Continue with Google</h3>
            </div>
          </div>
        </Modal>
      </div>
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
      </div>
      <div className="search-container">
        <Searchtool />
      </div>
      <div className="recommend">
        <Row gutter={{ xl: 40, md: 12, sm: 6, xs: 4 }}>
          <Col
            xs={{ span: 20, offset: 1 }}
            lg={{ span: 7, offset: 0 }}
            md={{ span: 11, offset: 6 }}
          >
            <div className="placeCard" style={{ background: `url(${place1})` }}>
              <div className="title-content-1">
                <h3 style={{ color: 'white', fontWeight: 'bold' }}>Outdoor gateways</h3>
                <span>131 stays</span>
              </div>
            </div>
          </Col>
          <Col
            xs={{ span: 20, offset: 1 }}
            lg={{ span: 7, offset: 0 }}
            md={{ span: 11, offset: 6 }}
            className="placeCard"
          >
            <Row>
              <Col span={23}>
                <div
                  className="place"
                  style={{ background: `url(${place2})`, backgroundSize: `cover` }}
                >
                  <div className="title-content-2">
                    <h3 style={{ color: 'white', fontWeight: 'bold' }}>Unique stays</h3>
                    <span>131 stays</span>
                  </div>
                </div>
              </Col>
            </Row>
            <div style={{ margin: '50px' }} />
            <Row>
              <Col span={23}>
                <div
                  className="place"
                  style={{ background: `url(${place3})`, backgroundSize: `cover` }}
                >
                  <div className="title-content-2">
                    <h3 style={{ color: 'white', fontWeight: 'bold' }}>Entire home</h3>
                    <span>131 stays</span>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
          <Col
            xs={{ span: 20, offset: 1 }}
            lg={{ span: 7, offset: 0 }}
            md={{ span: 11, offset: 6 }}
          >
            <div
              className="placeCard"
              style={{ background: `url(${place4})`, backgroundSize: `cover` }}
            >
              <div className="title-content-1">
                <h3 style={{ color: 'white', fontWeight: 'bold' }}>Pets allowed</h3>
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
          <Row>
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
                  <h4>San Francisco</h4>
                  <h5>3 Hour drive</h5>
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
                  <h4>Los Angeles</h4>
                  <h5>1 Hour drive</h5>
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
                  <h4>Rome</h4>
                  <h5>2 Hour drive</h5>
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
                  <h4>Miami</h4>
                  <h5>5 Hour drive</h5>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
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
                  <h4>New York City</h4>
                  <h5>3 Hour drive</h5>
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
                  <h4>Paris</h4>
                  <h5>1 Hour drive</h5>
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
                  <h4>Danang</h4>
                  <h5>2 Hour drive</h5>
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
                  <h4>Singapore</h4>
                  <h5>5 Hour drive</h5>
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
            <Row>
              <Col
                lg={{ span: 4, offset: 0 }}
                md={{ span: 4, offset: 0 }}
                xs={{ span: 4, offset: 0 }}
              >
                <div className="content_location">
                  <h4>Phoenix</h4>
                  <h5>Arizona</h5>
                </div>
              </Col>
              <Col
                lg={{ span: 4, offset: 0 }}
                md={{ span: 4, offset: 0 }}
                xs={{ span: 4, offset: 0 }}
              >
                <div className="content_location">
                  <h4>San Francisco</h4>
                  <h5>California</h5>
                </div>
              </Col>
              <Col
                lg={{ span: 4, offset: 0 }}
                md={{ span: 4, offset: 0 }}
                xs={{ span: 4, offset: 0 }}
              >
                <div className="content_location">
                  <h4>Keswick</h4>
                  <h5>England</h5>
                </div>
              </Col>
              <Col
                lg={{ span: 4, offset: 0 }}
                md={{ span: 4, offset: 0 }}
                xs={{ span: 4, offset: 0 }}
              >
                <div className="content_location">
                  <h4>York</h4>
                  <h5>England</h5>
                </div>
              </Col>
              <Col
                lg={{ span: 4, offset: 0 }}
                md={{ span: 4, offset: 0 }}
                xs={{ span: 4, offset: 0 }}
              >
                <div className="content_location">
                  <h4>Dublin</h4>
                  <h5>Ireland</h5>
                </div>
              </Col>
              <Col
                lg={{ span: 4, offset: 0 }}
                md={{ span: 4, offset: 0 }}
                xs={{ span: 4, offset: 0 }}
              >
                <div className="content_location">
                  <h4>Grande Isle</h4>
                  <h5>Lousiana</h5>
                </div>
              </Col>
            </Row>
            <Row>
              <Col
                lg={{ span: 4, offset: 0 }}
                md={{ span: 4, offset: 0 }}
                xs={{ span: 4, offset: 0 }}
              >
                <div className="content_location">
                  <h4>Duluth</h4>
                  <h5>Minnesota</h5>
                </div>
              </Col>
              <Col
                lg={{ span: 4, offset: 0 }}
                md={{ span: 4, offset: 0 }}
                xs={{ span: 4, offset: 0 }}
              >
                <div className="content_location">
                  <h4>Hot Springs</h4>
                  <h5>Arkansas</h5>
                </div>
              </Col>
              <Col
                lg={{ span: 4, offset: 0 }}
                md={{ span: 4, offset: 0 }}
                xs={{ span: 4, offset: 0 }}
              >
                <div className="content_location">
                  <h4>Barcelona</h4>
                  <h5>Catalonia</h5>
                </div>
              </Col>
              <Col
                lg={{ span: 4, offset: 0 }}
                md={{ span: 4, offset: 0 }}
                xs={{ span: 4, offset: 0 }}
              >
                <div className="content_location">
                  <h4>London</h4>
                  <h5>England</h5>
                </div>
              </Col>
              <Col
                lg={{ span: 4, offset: 0 }}
                md={{ span: 4, offset: 0 }}
                xs={{ span: 4, offset: 0 }}
              >
                <div className="content_location">
                  <h4>Paris</h4>
                  <h5>France</h5>
                </div>
              </Col>
              <Col
                lg={{ span: 4, offset: 0 }}
                md={{ span: 4, offset: 0 }}
                xs={{ span: 4, offset: 0 }}
              >
                <div className="content_location">
                  <h4>Florece</h4>
                  <h5>Italy</h5>
                </div>
              </Col>
            </Row>
            <Row>
              <Col
                lg={{ span: 4, offset: 0 }}
                md={{ span: 4, offset: 0 }}
                xs={{ span: 4, offset: 0 }}
              >
                <div className="content_location">
                  <h4>Berlin</h4>
                  <h5>Germany</h5>
                </div>
              </Col>
              <Col
                lg={{ span: 4, offset: 0 }}
                md={{ span: 4, offset: 0 }}
                xs={{ span: 4, offset: 0 }}
              >
                <div className="content_location">
                  <h4>Athens</h4>
                  <h5>Greece</h5>
                </div>
              </Col>
              <Col
                lg={{ span: 4, offset: 0 }}
                md={{ span: 4, offset: 0 }}
                xs={{ span: 4, offset: 0 }}
              >
                <div className="content_location">
                  <h4>Istambul</h4>
                  <h5>Turkey</h5>
                </div>
              </Col>
              <Col
                lg={{ span: 4, offset: 0 }}
                md={{ span: 4, offset: 0 }}
                xs={{ span: 4, offset: 0 }}
              >
                <div className="content_location">
                  <h4>Milan</h4>
                  <h5>italy</h5>
                </div>
              </Col>
              <Col
                lg={{ span: 4, offset: 0 }}
                md={{ span: 4, offset: 0 }}
                xs={{ span: 4, offset: 0 }}
              >
                <div className="content_location">
                  <h4>Rome</h4>
                  <h5>Italy</h5>
                </div>
              </Col>
              <Col
                lg={{ span: 4, offset: 0 }}
                md={{ span: 4, offset: 0 }}
                xs={{ span: 4, offset: 0 }}
              >
                <div className="content_location">
                  <h4>Marid</h4>
                  <h5>Spain</h5>
                </div>
              </Col>
            </Row>
          </TabPane>
          <TabPane tab="Destinations for outdoor adventure" key="2">
            <Row>
              <Col
                lg={{ span: 4, offset: 0 }}
                md={{ span: 4, offset: 0 }}
                xs={{ span: 4, offset: 0 }}
              >
                <div className="content_location">
                  <h4>Duluth</h4>
                  <h5>Minnesota</h5>
                </div>
              </Col>
              <Col
                lg={{ span: 4, offset: 0 }}
                md={{ span: 4, offset: 0 }}
                xs={{ span: 4, offset: 0 }}
              >
                <div className="content_location">
                  <h4>Hot Springs</h4>
                  <h5>Arkansas</h5>
                </div>
              </Col>
              <Col
                lg={{ span: 4, offset: 0 }}
                md={{ span: 4, offset: 0 }}
                xs={{ span: 4, offset: 0 }}
              >
                <div className="content_location">
                  <h4>Barcelona</h4>
                  <h5>Catalonia</h5>
                </div>
              </Col>
              <Col
                lg={{ span: 4, offset: 0 }}
                md={{ span: 4, offset: 0 }}
                xs={{ span: 4, offset: 0 }}
              >
                <div className="content_location">
                  <h4>London</h4>
                  <h5>England</h5>
                </div>
              </Col>
              <Col
                lg={{ span: 4, offset: 0 }}
                md={{ span: 4, offset: 0 }}
                xs={{ span: 4, offset: 0 }}
              >
                <div className="content_location">
                  <h4>Paris</h4>
                  <h5>France</h5>
                </div>
              </Col>
              <Col
                lg={{ span: 4, offset: 0 }}
                md={{ span: 4, offset: 0 }}
                xs={{ span: 4, offset: 0 }}
              >
                <div className="content_location">
                  <h4>Florece</h4>
                  <h5>Italy</h5>
                </div>
              </Col>
            </Row>
            <Row>
              <Col
                lg={{ span: 4, offset: 0 }}
                md={{ span: 4, offset: 0 }}
                xs={{ span: 4, offset: 0 }}
              >
                <div className="content_location">
                  <h4>Phoenix</h4>
                  <h5>Arizona</h5>
                </div>
              </Col>
              <Col
                lg={{ span: 4, offset: 0 }}
                md={{ span: 4, offset: 0 }}
                xs={{ span: 4, offset: 0 }}
              >
                <div className="content_location">
                  <h4>San Francisco</h4>
                  <h5>California</h5>
                </div>
              </Col>
              <Col
                lg={{ span: 4, offset: 0 }}
                md={{ span: 4, offset: 0 }}
                xs={{ span: 4, offset: 0 }}
              >
                <div className="content_location">
                  <h4>Keswick</h4>
                  <h5>England</h5>
                </div>
              </Col>
              <Col
                lg={{ span: 4, offset: 0 }}
                md={{ span: 4, offset: 0 }}
                xs={{ span: 4, offset: 0 }}
              >
                <div className="content_location">
                  <h4>York</h4>
                  <h5>England</h5>
                </div>
              </Col>
              <Col
                lg={{ span: 4, offset: 0 }}
                md={{ span: 4, offset: 0 }}
                xs={{ span: 4, offset: 0 }}
              >
                <div className="content_location">
                  <h4>Dublin</h4>
                  <h5>Ireland</h5>
                </div>
              </Col>
              <Col
                lg={{ span: 4, offset: 0 }}
                md={{ span: 4, offset: 0 }}
                xs={{ span: 4, offset: 0 }}
              >
                <div className="content_location">
                  <h4>Grande Isle</h4>
                  <h5>Lousiana</h5>
                </div>
              </Col>
            </Row>
            <Row>
              <Col
                lg={{ span: 4, offset: 0 }}
                md={{ span: 4, offset: 0 }}
                xs={{ span: 4, offset: 0 }}
              >
                <div className="content_location">
                  <h4>Berlin</h4>
                  <h5>Germany</h5>
                </div>
              </Col>
              <Col
                lg={{ span: 4, offset: 0 }}
                md={{ span: 4, offset: 0 }}
                xs={{ span: 4, offset: 0 }}
              >
                <div className="content_location">
                  <h4>Athens</h4>
                  <h5>Greece</h5>
                </div>
              </Col>
              <Col
                lg={{ span: 4, offset: 0 }}
                md={{ span: 4, offset: 0 }}
                xs={{ span: 4, offset: 0 }}
              >
                <div className="content_location">
                  <h4>Istambul</h4>
                  <h5>Turkey</h5>
                </div>
              </Col>
              <Col
                lg={{ span: 4, offset: 0 }}
                md={{ span: 4, offset: 0 }}
                xs={{ span: 4, offset: 0 }}
              >
                <div className="content_location">
                  <h4>Milan</h4>
                  <h5>italy</h5>
                </div>
              </Col>
              <Col
                lg={{ span: 4, offset: 0 }}
                md={{ span: 4, offset: 0 }}
                xs={{ span: 4, offset: 0 }}
              >
                <div className="content_location">
                  <h4>Rome</h4>
                  <h5>Italy</h5>
                </div>
              </Col>
              <Col
                lg={{ span: 4, offset: 0 }}
                md={{ span: 4, offset: 0 }}
                xs={{ span: 4, offset: 0 }}
              >
                <div className="content_location">
                  <h4>Marid</h4>
                  <h5>Spain</h5>
                </div>
              </Col>
            </Row>
          </TabPane>
          <TabPane tab="Mountain cabins" key="3">
            <Row>
              <Col
                lg={{ span: 4, offset: 0 }}
                md={{ span: 4, offset: 0 }}
                xs={{ span: 4, offset: 0 }}
              >
                <div className="content_location">
                  <h4>Berlin</h4>
                  <h5>Germany</h5>
                </div>
              </Col>
              <Col
                lg={{ span: 4, offset: 0 }}
                md={{ span: 4, offset: 0 }}
                xs={{ span: 4, offset: 0 }}
              >
                <div className="content_location">
                  <h4>Athens</h4>
                  <h5>Greece</h5>
                </div>
              </Col>
              <Col
                lg={{ span: 4, offset: 0 }}
                md={{ span: 4, offset: 0 }}
                xs={{ span: 4, offset: 0 }}
              >
                <div className="content_location">
                  <h4>Istambul</h4>
                  <h5>Turkey</h5>
                </div>
              </Col>
              <Col
                lg={{ span: 4, offset: 0 }}
                md={{ span: 4, offset: 0 }}
                xs={{ span: 4, offset: 0 }}
              >
                <div className="content_location">
                  <h4>Milan</h4>
                  <h5>italy</h5>
                </div>
              </Col>
              <Col
                lg={{ span: 4, offset: 0 }}
                md={{ span: 4, offset: 0 }}
                xs={{ span: 4, offset: 0 }}
              >
                <div className="content_location">
                  <h4>Rome</h4>
                  <h5>Italy</h5>
                </div>
              </Col>
              <Col
                lg={{ span: 4, offset: 0 }}
                md={{ span: 4, offset: 0 }}
                xs={{ span: 4, offset: 0 }}
              >
                <div className="content_location">
                  <h4>Marid</h4>
                  <h5>Spain</h5>
                </div>
              </Col>
            </Row>
            <Row>
              <Col
                lg={{ span: 4, offset: 0 }}
                md={{ span: 4, offset: 0 }}
                xs={{ span: 4, offset: 0 }}
              >
                <div className="content_location">
                  <h4>Duluth</h4>
                  <h5>Minnesota</h5>
                </div>
              </Col>
              <Col
                lg={{ span: 4, offset: 0 }}
                md={{ span: 4, offset: 0 }}
                xs={{ span: 4, offset: 0 }}
              >
                <div className="content_location">
                  <h4>Hot Springs</h4>
                  <h5>Arkansas</h5>
                </div>
              </Col>
              <Col
                lg={{ span: 4, offset: 0 }}
                md={{ span: 4, offset: 0 }}
                xs={{ span: 4, offset: 0 }}
              >
                <div className="content_location">
                  <h4>Barcelona</h4>
                  <h5>Catalonia</h5>
                </div>
              </Col>
              <Col
                lg={{ span: 4, offset: 0 }}
                md={{ span: 4, offset: 0 }}
                xs={{ span: 4, offset: 0 }}
              >
                <div className="content_location">
                  <h4>London</h4>
                  <h5>England</h5>
                </div>
              </Col>
              <Col
                lg={{ span: 4, offset: 0 }}
                md={{ span: 4, offset: 0 }}
                xs={{ span: 4, offset: 0 }}
              >
                <div className="content_location">
                  <h4>Paris</h4>
                  <h5>France</h5>
                </div>
              </Col>
              <Col
                lg={{ span: 4, offset: 0 }}
                md={{ span: 4, offset: 0 }}
                xs={{ span: 4, offset: 0 }}
              >
                <div className="content_location">
                  <h4>Florece</h4>
                  <h5>Italy</h5>
                </div>
              </Col>
            </Row>
            <Row>
              <Col
                lg={{ span: 4, offset: 0 }}
                md={{ span: 4, offset: 0 }}
                xs={{ span: 4, offset: 0 }}
              >
                <div className="content_location">
                  <h4>Phoenix</h4>
                  <h5>Arizona</h5>
                </div>
              </Col>
              <Col
                lg={{ span: 4, offset: 0 }}
                md={{ span: 4, offset: 0 }}
                xs={{ span: 4, offset: 0 }}
              >
                <div className="content_location">
                  <h4>San Francisco</h4>
                  <h5>California</h5>
                </div>
              </Col>
              <Col
                lg={{ span: 4, offset: 0 }}
                md={{ span: 4, offset: 0 }}
                xs={{ span: 4, offset: 0 }}
              >
                <div className="content_location">
                  <h4>Keswick</h4>
                  <h5>England</h5>
                </div>
              </Col>
              <Col
                lg={{ span: 4, offset: 0 }}
                md={{ span: 4, offset: 0 }}
                xs={{ span: 4, offset: 0 }}
              >
                <div className="content_location">
                  <h4>York</h4>
                  <h5>England</h5>
                </div>
              </Col>
              <Col
                lg={{ span: 4, offset: 0 }}
                md={{ span: 4, offset: 0 }}
                xs={{ span: 4, offset: 0 }}
              >
                <div className="content_location">
                  <h4>Dublin</h4>
                  <h5>Ireland</h5>
                </div>
              </Col>
              <Col
                lg={{ span: 4, offset: 0 }}
                md={{ span: 4, offset: 0 }}
                xs={{ span: 4, offset: 0 }}
              >
                <div className="content_location">
                  <h4>Grande Isle</h4>
                  <h5>Lousiana</h5>
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
