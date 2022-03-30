import React from 'react';
import './index.css';
import './styles.less';
import { Row, Col } from 'antd';
import { Divider } from 'antd';
import { Avatar } from 'antd';
import { Button, Carousel } from 'antd';
import { Select } from 'antd';
import {
  LeftOutlined,
  RightOutlined,
  StarFilled,
  EnvironmentFilled,
  ArrowLeftOutlined,
  ShareAltOutlined,
  HeartOutlined,
  PictureOutlined,
  AuditOutlined,
} from '@ant-design/icons';
import RoomFeature from './components/RoomFeature/index.jsx';
import styles from './styles.less';
import { Content } from 'antd/lib/layout/layout';
import { DatePicker, Space } from 'antd';
import CardItem from './components/CardItem';
import { GRAY_1 } from '@/constants/color';
import PaymentModal from './components/PaymentModal';
import ScrollReveal from '@/components/ScrollReveal/ScrollReveal';
import { history } from 'umi';

const RoomDetail = (props) => {
  const { Option } = Select;

  const features = [
    {
      id: '1',
      title: 'Entire home ',
      desc: 'You will have the tiny house to yourself',
      icon: 'data:image/png;base64,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',
    },
    {
      id: '2',
      title: 'Enhanced Clean ',
      desc: "This host committed to Airbnb's 5-step enhanced cleaning process",
      icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4cqQuRFX3GwUBfyK4eQy9OkOWETWWuKpodA&usqp=CAU',
    },
    {
      id: '3',
      title: 'Mirian is a Superhost',
      desc: 'Superhosts are experienced highly rate hosts who are committed to providing great stays for guests',
      icon: 'https://cdn3.iconfinder.com/data/icons/sympletts-free-sampler/128/star-512.png',
    },
    {
      id: '4',
      title: 'Wifi',
      desc: 'Giest often seatch for this popular amenity',
      icon: 'data:image/png;base64,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',
    },
    {
      id: '5',
      title: 'House rules ',
      desc: "This place isn't suitable for infants (0-2 yrs) and the host doesn't allow pet or smoking ",
      icon: 'data:image/png;base64,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',
    },
  ];

  const [isPaymentModalVisible, setIsPaymentModalVisible] = React.useState(false);

  const showPaymentModal = () => {
    setIsPaymentModalVisible(true);
  };

  const handlePaymentOk = () => {
    setIsPaymentModalVisible(false);
  };

  const handlePaymentCancel = () => {
    setIsPaymentModalVisible(false);
  };

  return (
    <Content className={styles.roomDetailPage}>
      <Row style={{ margin: '20px 0' }}>
        <Col lg={24} md={24} sm={24} xs={24}>
          <Row align="middle">
            <Col lg={1} md={1} sm={2} xs={2}>
              <ScrollReveal reveal={{ origin: 'right', delay: 400 }}>
                <div className={styles.iconBack} onClick={() => history.push('/search')}>
                  <ArrowLeftOutlined style={{ fontSize: '16px', color: GRAY_1 }} />
                </div>
              </ScrollReveal>
            </Col>

            <Col span={19}>
              <ScrollReveal reveal={{ origin: 'right', delay: 400 }}>
                <div className={styles.room}>
                  <div className={styles.name}>Landscape Kazbegi</div>
                  <Col span={20}>
                    <div className={styles.desc}>
                      <div className={styles.rate}>
                        <StarFilled style={{ color: 'orangered' }} />
                        <span className={styles.ratePoint}> 5.0</span>
                        <span className={styles.numberReview}> (175 Reviews)</span>
                      </div>
                      <div className={styles.location}>
                        <EnvironmentFilled style={{ color: 'orangered' }} />
                        <span className={styles.numberReview}>
                          {' '}
                          Stepantsminda, Mtskheta-Mtianeti, Georgia
                        </span>
                      </div>
                    </div>
                  </Col>
                </div>
              </ScrollReveal>
            </Col>
            <Col lg={4} md={4} sm={3} xs={3}>
              <ScrollReveal reveal={{ origin: 'right', delay: 400 }}>
                <div className={styles.action}>
                  <div className={styles.actionItem}>
                    <ShareAltOutlined style={{ fontSize: '26px', color: GRAY_1 }} />
                    <span className={styles.actionName}>Share</span>
                  </div>
                  <div className={styles.actionItem}>
                    <HeartOutlined style={{ fontSize: '26px', color: GRAY_1 }} />
                    <span className={styles.actionName}>Heart</span>
                  </div>
                </div>
              </ScrollReveal>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row gutter={{ xl: 24, md: 12, sm: 6, xs: 4 }}>
        <Col lg={8} md={8} sm={8} xs={24}>
          <ScrollReveal reveal={{ origin: 'top', delay: 500 }}>
            <div
              className={styles.viewHotel}
              style={{
                backgroundImage: `url(https://res.cloudinary.com/huong/image/upload/v1648603233/assets/hotel/18_oale8h.jpg)`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
              }}
            />
          </ScrollReveal>
        </Col>
        <Col lg={8} md={8} sm={8} xs={24}>
          <ScrollReveal reveal={{ origin: 'top', delay: 600 }}>
            <Row>
              <div
                className={styles.viewHotel}
                style={{
                  backgroundImage: `url(https://res.cloudinary.com/huong/image/upload/v1648603244/assets/hotel/22_qsepey.jpg)`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  height: '282px',
                }}
              />
            </Row>
          </ScrollReveal>
          <ScrollReveal reveal={{ origin: 'top', delay: 700 }}>
            <Row>
              <div
                className={styles.viewHotel}
                style={{
                  backgroundImage: `url(https://res.cloudinary.com/huong/image/upload/v1648603256/assets/hotel/31_xauggd.jpg)`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  height: '282px',
                }}
              />
            </Row>
          </ScrollReveal>
        </Col>
        <Col lg={8} md={8} sm={8} xs={24}>
          <ScrollReveal reveal={{ origin: 'top', delay: 800 }}>
            <div
              className={styles.viewHotel}
              style={{
                backgroundImage: `url(https://res.cloudinary.com/huong/image/upload/v1648603269/assets/hotel/33_ekrujw.jpg)`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
              }}
            >
              {/* <div className={styles.photos}>Choose another photo</div> */}
              <Button
                className={styles.btnShowPhotos}
                icon={<PictureOutlined style={{ fontSize: '25px' }} />}
              >
                Show all photos +12
              </Button>
            </div>
          </ScrollReveal>
        </Col>
      </Row>
      <Row style={{ marginTop: '20px' }}>
        <Col lg={16} md={16} sm={24} xs={24}>
          <Row>
            <Col span={19}>
              <ScrollReveal reveal={{ origin: 'top', delay: 400 }}>
                <div className="room__title">Tiny house hosted by George</div>
                <div className="room__info">2 guests · 1 bedroom · 1 bed · 1 bathroom</div>
              </ScrollReveal>
            </Col>
            <Col span={2}>
              <ScrollReveal reveal={{ origin: 'top', delay: 400 }}>
                <div className={styles.roomInfo}>
                  <Avatar
                    size={48}
                    src={
                      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80'
                    }
                  />
                </div>
              </ScrollReveal>
            </Col>
          </Row>

          <Divider />
          {features.map((feature, index) => {
            return (
              <ScrollReveal key={`${index}-feature`} reveal={{ origin: 'top', delay: 400 }}>
                <RoomFeature featureProps={feature} key={feature.id} />
              </ScrollReveal>
            );
          })}
        </Col>

        <Col lg={8} md={8} sm={24} xs={24}>
          <ScrollReveal reveal={{ origin: 'top', delay: 400 }}>
            <div className={styles.orderBox}>
              <Row>
                <Col span={12}>
                  <span className={styles.price}>
                    <span className={styles.priceDollar}>$94</span> / night
                  </span>
                </Col>
                <Col span={12}>
                  <div className={styles.roomRate}>
                    <StarFilled style={{ color: 'orangered', fontSize: '22px' }} />
                    <span className={styles.ratePoint}> 5.0</span>
                    <span className={styles.reviewNumber}> (175 Reviews)</span>
                  </div>
                </Col>
              </Row>
              <Row style={{ margin: '10px 0' }}>
                <div className={styles.selectBox}>
                  <Row>
                    <Col span={12} style={{ borderRight: '1px solid lightgray' }}>
                      <div className={styles.selectTitle}>Check-in</div>
                      <DatePicker
                        placeholder="Add date"
                        style={{ width: '100%', border: 'none', boxShadow: 'none' }}
                        format="DD-MM-YYYY"
                      />
                    </Col>

                    <Col span={12}>
                      <div className={styles.selectTitle}>Check-out</div>
                      <DatePicker
                        placeholder="Add date"
                        style={{ width: '100%', border: 'none', boxShadow: 'none' }}
                        format="DD-MM-YYYY"
                      />
                    </Col>
                    <Col span={24} style={{ borderTop: '1px solid lightgray' }}>
                      <div className={styles.selectTitle}>Guest</div>
                      <Select
                        bordered={false}
                        defaultValue="1"
                        style={{
                          width: '100%',
                          borderRadius: '18px',
                          fontWeight: 'bold',
                          border: 'none',
                          boxShadow: 'none',
                        }}
                      >
                        <Option value="1">1 Guest</Option>
                        <Option value="2">2 Guests</Option>
                        <Option value="4">4 Guests</Option>
                      </Select>
                    </Col>
                  </Row>
                </div>
              </Row>
              <Row>
                <Col span={24}>
                  <PaymentModal
                    isPaymentModalVisible={isPaymentModalVisible}
                    handlePaymentCancel={handlePaymentCancel}
                    handlePaymentOk={handlePaymentOk}
                  />
                  <Button
                    type="primary"
                    block
                    className={styles.btnOrder}
                    style={{ fontWeight: 'bold', marginLeft: '3px' }}
                    onClick={showPaymentModal}
                  >
                    Check availibility
                  </Button>
                </Col>
              </Row>
            </div>
            <div className={styles.report}>
              <AuditOutlined style={{ fontSize: '22px', marginRight: '10px' }} /> Report this
              listing
            </div>
          </ScrollReveal>
        </Col>
      </Row>
      <Divider />
      <ScrollReveal reveal={{ origin: 'right', delay: 400 }}>
        <div className={styles.placeRecommend}>More places to stay</div>
      </ScrollReveal>
      <ScrollReveal reveal={{ origin: 'top', delay: 400 }}>
        <Carousel
          arrows
          prevArrow={<LeftOutlined />}
          nextArrow={<RightOutlined />}
          className="carousel"
        >
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
        </Carousel>
      </ScrollReveal>
    </Content>
  );
};

RoomDetail.propTypes = {};

export default RoomDetail;
