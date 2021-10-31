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

const RoomDetail = (props) => {
  return (
    <div>
      <Col span={24}>
        <Row style={{ margin: '50px 50px 10px 50px' }}>
          <Col lg={{ span: 22, offset: 2 }}>
            <Row align="middle">
              <Col lg={{ span: 1, offset: 0 }}>
                <LeftCircleOutlined style={{ fontSize: '40px', Color: '##f1eff1' }} />
                {/* <Avatar size={36} src={"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80"} /> */}
              </Col>
              <Col span={23}>
                <div>
                  <div className="room__name">Tiny house hosted by George</div>
                  <Col span={20} offset={1}>
                    <div className="room__desc">
                      <div className="room_rate">
                        <StarFilled style={{ color: 'orangered' }} />
                        <span className="rate__point"> 5.0</span>
                        <span className="number__review"> (175 Reviews)</span>
                      </div>
                      <div className="room__location">
                        <EnvironmentFilled style={{ color: 'orangered' }} />
                        <span className="number__review"> Ở đây không có gì ngoài cảnh đẹp</span>
                      </div>
                    </div>
                  </Col>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row style={{ margin: '20px 50px 50px 50px' }}>
          <Col xs={{ span: 6, offset: 2 }} lg={{ span: 6, offset: 2 }}>
            <img
              src="https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=735&q=80"
              className="view__hotel view--large"
              alt=""
            />
          </Col>
          <Col xs={{ span: 6, offset: 2 }} lg={{ span: 6, offset: 1 }}>
            <Row>
              <Col span={24}>
                <img
                  src="https://images.unsplash.com/photo-1445019980597-93fa8acb246c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1474&q=80"
                  className="view__hotel view--small"
                  alt=""
                />
              </Col>
            </Row>
            <div style={{ margin: '20px' }} />
            <Row>
              <Col span={24}>
                <img
                  src="https://images.unsplash.com/photo-1582719508461-905c673771fd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1025&q=80"
                  className="view__hotel view--small"
                  alt=""
                />
              </Col>
            </Row>
          </Col>
          <Col xs={{ span: 6, offset: 2 }} lg={{ span: 6, offset: 1 }}>
            <img
              src="https://images.unsplash.com/photo-1563911302283-d2bc129e7570?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=735&q=80"
              className="view__hotel view--large"
              alt=""
            />
          </Col>
        </Row>

        <Row style={{ margin: '50px' }}>
          <Col xs={{ span: 6, offset: 2 }} lg={{ span: 12, offset: 2 }}>
            <Row>
              <Col span={22}>
                <div>
                  <div className="room__title">Tiny house hosted by George</div>
                  <div className="room__info">2 guests - 1 bedroom - 1 bed - 1 bathroom</div>
                </div>
              </Col>
              <Col span={2}>
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
          </Col>

          <Col span={6} offset={2}>
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
      </Col>
    </div>
  );
};

RoomDetail.propTypes = {};

export default RoomDetail;
