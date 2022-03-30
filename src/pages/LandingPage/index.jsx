// import React from 'react';
import { Carousel, Row, Col, Tabs, Button } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import './style.less';
import SearchTool from './searchTool';
import ScrollReveal from '@/components/ScrollReveal/ScrollReveal';
import { exploreData, slideData, recommendData } from './data';

const { TabPane } = Tabs;

const LandingPage = () => {
  return (
    <div className="Container">
      <ScrollReveal style={{ width: '110%', position: 'relative' }} reveal={{ delay: 300 }}>
        <div className="herosection">
          <Carousel
            className="carousel"
            autoplay
            arrows
            prevArrow={
              <div style={{ position: 'relative' }}>
                <LeftOutlined
                  style={{
                    position: 'absolute',
                    top: '20px',
                    left: '20px',
                    color: 'var(--gray-1)',
                  }}
                />
              </div>
            }
            nextArrow={
              <div style={{ position: 'relative' }}>
                <RightOutlined
                  style={{
                    position: 'absolute',
                    top: '20px',
                    left: '20px',
                    color: 'var(--gray-1)',
                  }}
                />
              </div>
            }
          >
            {slideData.map((item) => (
              <div
                key={item.id}
                id={item.id}
                className="contentStyle"
                style={{ backgroundImage: `url(${item.image})` }}
              />
            ))}
          </Carousel>
          <div className="carousel_content">
            <ScrollReveal reveal={{ origin: 'top' }}>
              <div className="carousel_title">The Greatest Outdoors</div>
            </ScrollReveal>
            <ScrollReveal reveal={{ origin: 'top' }}>
              <div className="carousel_description">Wishlists curated by Roomsy</div>
            </ScrollReveal>
            <ScrollReveal reveal={{ delay: 600 }}>
              <div className="carousel_button">Get inspired</div>
            </ScrollReveal>
          </div>
          <SearchTool />
        </div>
      </ScrollReveal>
      <div className="recommend">
        <Row gutter={{ xl: 30, md: 12, sm: 6, xs: 4 }}>
          <Col
            xs={{ span: 20, offset: 2 }}
            lg={{ span: 8, offset: 0 }}
            md={{ span: 15, offset: 4 }}
          >
            <ScrollReveal reveal={{ delay: 600 }}>
              <div
                className="placeCard"
                style={{
                  background: `url(${recommendData[0].image})`,
                  backgroundPosition: 'center',
                  backgroundSize: `cover`,
                }}
              >
                <div className="title-content-1">
                  <div className="title-name" style={{ color: 'white', fontWeight: 'bold' }}>
                    {recommendData[0].title}
                  </div>
                  <span>{recommendData[0].count} stays</span>
                </div>
              </div>
            </ScrollReveal>
          </Col>

          <Col
            xs={{ span: 20, offset: 2 }}
            lg={{ span: 8, offset: 0 }}
            md={{ span: 15, offset: 4 }}
            className="placeCard"
          >
            <Row>
              <Col span={24}>
                <ScrollReveal reveal={{ delay: 700 }}>
                  <div
                    className="place"
                    style={{
                      background: `url(${recommendData[1].image})`,
                      backgroundSize: `cover`,
                      backgroundPosition: 'center',
                    }}
                  >
                    <div className="title-content-2">
                      <div className="title-name" style={{ color: 'white', fontWeight: 'bold' }}>
                        {recommendData[1].title}
                      </div>
                      <span>{recommendData[1].count} stays</span>
                    </div>
                  </div>
                </ScrollReveal>
              </Col>
            </Row>
            <div style={{ marginBottom: '20px' }} />
            <Row>
              <Col span={24}>
                <ScrollReveal reveal={{ delay: 800 }}>
                  <div
                    className="place"
                    style={{
                      background: `url(${recommendData[2].image})`,
                      backgroundSize: `cover`,
                      backgroundPosition: 'center',
                    }}
                  >
                    <div className="title-content-2">
                      <div className="title-name" style={{ color: 'white', fontWeight: 'bold' }}>
                        {recommendData[2].title}
                      </div>
                      <span>{recommendData[2].count} stays</span>
                    </div>
                  </div>
                </ScrollReveal>
              </Col>
            </Row>
          </Col>
          <Col
            xs={{ span: 20, offset: 2 }}
            lg={{ span: 8, offset: 0 }}
            md={{ span: 15, offset: 4 }}
          >
            <ScrollReveal reveal={{ delay: 900 }}>
              <div
                className="placeCard"
                style={{
                  background: `url(${recommendData[3].image})`,
                  backgroundSize: `cover`,
                  backgroundPosition: 'center',
                }}
              >
                <div className="title-content-1">
                  <div className="title-name" style={{ color: 'white', fontWeight: 'bold' }}>
                    {recommendData[3].title}
                  </div>
                  <span>{recommendData[3].count} stays</span>
                </div>
              </div>
            </ScrollReveal>
          </Col>
        </Row>
      </div>
      <div className="explore">
        <ScrollReveal>
          <div className="title">
            <h2 style={{ fontWeight: 'bold' }}>Explore nearby</h2>
          </div>
        </ScrollReveal>
        <div className="container_explore">
          <Row gutter={[0, 15]}>
            {exploreData.map((item) => (
              <Col
                lg={{ span: 6, offset: 0 }}
                md={{ span: 10, offset: 0 }}
                xs={{ span: 10, offset: 0 }}
                key={item.city}
              >
                <ScrollReveal>
                  <div className="item_container">
                    <div
                      className="image_explore"
                      style={{ background: `url(${item.image})`, backgroundSize: `cover` }}
                    />
                    <div className="item_content">
                      <div className="item_content_city">{item.city}</div>
                      <div className="item_content_time">
                        {item.time}
                        {item.time > 1 ? ` hours ` : ` hour `}drive
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              </Col>
            ))}
          </Row>
        </div>
      </div>
      <div className="host_section">
        <div className="host_curved_bottom" />
        <div className="host_curved_top" />
        <div className="host_content">
          <ScrollReveal>
            <div className="host_title">Become a Host</div>
          </ScrollReveal>
          <ScrollReveal style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <div className="host_description">
              Earn extra income and unlock new opportunities by sharing your space.
            </div>
          </ScrollReveal>
          <ScrollReveal reveal={{ duration: 800, origin: 'top' }}>
            <Button type="primary" className="host_button">
              Learn More
            </Button>
          </ScrollReveal>
        </div>
        <ScrollReveal style={{ position: 'absolute', bottom: '50%', left: '4%' }}>
          <div
            className="host_noInfo"
            style={{
              backgroundImage: `url(https://res.cloudinary.com/huong/image/upload/v1648603020/assets/host/binz_msqs4w.jpg)`,
            }}
            reveal={{ origin: 'top' }}
          />
        </ScrollReveal>
        <ScrollReveal
          style={{ position: 'absolute', top: '35%', left: '27%' }}
          reveal={{ origin: 'top' }}
        >
          <div
            className="host_noInfo"
            style={{
              backgroundImage: `url(https://res.cloudinary.com/huong/image/upload/v1648603033/assets/host/lisa_eeesha.jpg)`,
            }}
          />
        </ScrollReveal>
        <ScrollReveal
          style={{ position: 'absolute', top: '35%', right: '34%' }}
          reveal={{ origin: 'top' }}
        >
          <div
            className="host_noInfo"
            style={{
              backgroundImage: `url(https://res.cloudinary.com/huong/image/upload/v1648603028/assets/host/gong_yoo_rqwpqf.jpg)`,
            }}
          />
        </ScrollReveal>
        <ScrollReveal
          reveal={{ origin: 'top' }}
          style={{ position: 'absolute', position: 'absolute', bottom: '50%', right: '11%' }}
        >
          <div
            className="host_noInfo"
            style={{
              backgroundImage: `url(https://res.cloudinary.com/huong/image/upload/v1648603049/assets/host/son_tung_okv5fp.jpg)`,
            }}
          />
        </ScrollReveal>
        <ScrollReveal style={{ position: 'absolute', top: '-7%', right: '9%' }}>
          <div
            className="host_info"
            style={{
              backgroundImage: `url(https://res.cloudinary.com/huong/image/upload/v1648603044/assets/host/my_image_cjne7m.jpg)`,
            }}
          >
            <div className="host_info_content">
              <div className="host_name">Duc Huong</div>
              <div className="host_age">20 old</div>
            </div>
          </div>
        </ScrollReveal>
        <ScrollReveal style={{ position: 'absolute', bottom: '-10%', right: '16%' }}>
          <div
            className="host_info"
            style={{
              backgroundImage: `url(https://res.cloudinary.com/huong/image/upload/v1648603053/assets/host/tan_khang_sdj0cn.jpg)`,
            }}
          >
            <div className="host_info_content">
              <div className="host_name">Tan Khang</div>
              <div className="host_age">20 old</div>
            </div>
          </div>
        </ScrollReveal>
        <ScrollReveal style={{ position: 'absolute', top: '-7%', left: '12%' }}>
          <div
            className="host_info"
            style={{
              backgroundImage: `url(https://res.cloudinary.com/huong/image/upload/v1648603038/assets/host/minh_huy_jz6k5o.jpg)`,
            }}
          >
            <div className="host_info_content">
              <div className="host_name">Minh Huy</div>
              <div className="host_age">20 old</div>
            </div>
          </div>
        </ScrollReveal>
        <ScrollReveal style={{ position: 'absolute', bottom: '-10%', left: '15%' }}>
          <div
            className="host_info"
            style={{
              backgroundImage: `url(https://res.cloudinary.com/huong/image/upload/v1648603026/assets/host/duong_kha_ls6va0.jpg)`,
            }}
          >
            <div className="host_info_content">
              <div className="host_name">Duong Kha</div>
              <div className="host_age">20 old</div>
            </div>
          </div>
        </ScrollReveal>
      </div>
      <div className="tab_select">
        <ScrollReveal>
          <h2 style={{ fontWeight: 'bold' }}>Inspiration for future getaways</h2>
        </ScrollReveal>
        <ScrollReveal>
          <Tabs defaultActiveKey="1">
            <TabPane tab="Destinations for art and culture" key="1">
              <ScrollReveal>
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
              </ScrollReveal>
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
        </ScrollReveal>
      </div>
    </div>
  );
};

export default LandingPage;
