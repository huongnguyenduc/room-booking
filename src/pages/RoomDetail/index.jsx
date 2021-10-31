import React from 'react';
import PropTypes from 'prop-types';
import './index.css';
import { Row, Col, Carousel } from 'antd';
import { Card } from 'antd';
import { Divider } from 'antd';
import { Avatar } from 'antd';
import { Button, Radio } from 'antd';
import { Select } from 'antd';
import { StarFilled, EnvironmentFilled, LeftCircleOutlined } from '@ant-design/icons';
import RoomFeature from './components/RoomFeature/index.jsx';
import styles from './styles.less';
import { Content } from 'antd/lib/layout/layout';
import Background1 from '@/assets/background_1.jpg';
import Background2 from '@/assets/background_2.jpg';
import Background3 from '@/assets/background_3.jpg';
import Background4 from '@/assets/background_4.jpg';
import Background5 from '@/assets/background_5.jpg';
import ProBackground from '@/assets/pro_background.jpg';
const RoomDetail = (props) => {
  return (
    <Content className={styles.roomDetailPage}>
      <Row gutter={{ xl: 24, md: 12, sm: 6, xs: 4 }}>
        <Col lg={8} md={8} sm={8} xs={24}>
          <div className={styles.viewHotel} style={{ backgroundImage: `url(${Background2})` }} />
        </Col>
        <Col lg={8} md={8} sm={8} xs={24}>
          <Row>
            <div
              className={styles.viewHotel}
              style={{ backgroundImage: `url(${Background5})`, height: '200px' }}
            />
          </Row>
          <Row>
            <div
              className={styles.viewHotel}
              style={{ backgroundImage: `url(${Background5})`, height: '200px' }}
            />
          </Row>
        </Col>
        <Col lg={8} md={8} sm={8} xs={24}>
          <div className={styles.viewHotel} style={{ backgroundImage: `url(${Background3})` }} />
        </Col>
      </Row>
      <Row>
        <Col lg={16} md={16} sm={24} xs={24}>
          <Row>
            <Col span={21}>
              <div>
                <div className="room__title">Tiny house hosted by George</div>
                <div className="room__info">2 guests - 1 bedroom - 1 bed - 1 bathroom</div>
              </div>
            </Col>
            <Col span={1}>
              <Avatar
                size={48}
                src={
                  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80'
                }
              />
            </Col>
          </Row>

          <Divider />

          <RoomFeature />
          <RoomFeature />
          <RoomFeature />
          <RoomFeature />
          <RoomFeature />
          <RoomFeature />
        </Col>

        <Col lg={8} md={8} sm={24} xs={24}>
          <div className="order__box">
            <Row>
              <Col span={10}>
                <span className="room__price">$94</span>
                <span className="room__price__type"> / night</span>
              </Col>
              <Col span={14}>
                <div className="room_rate">
                  <StarFilled style={{ color: 'orangered' }} />
                  <span className="rate__point"> 5.0</span>
                  <span className="number__review"> (175 Reviews)</span>
                </div>
              </Col>
            </Row>
            <Row style={{ margin: '15px 0', borderRadius: '50px' }}>
              <Col span={12}>
                <Button block>Check in</Button>
              </Col>
              <Col span={12}>
                <Button block>Check in</Button>
              </Col>
              <Col span={24}>
                <Button block>Check in</Button>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <Button type="primary" block className="button__order">
                  Check availibility
                </Button>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Content>
  );
};

RoomDetail.propTypes = {};

export default RoomDetail;
