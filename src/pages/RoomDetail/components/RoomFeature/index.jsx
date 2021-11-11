import React from 'react';
import PropTypes from 'prop-types';
import './index.css';
import styles from './styles.less';
import { Row, Col, Carousel } from 'antd';
import { Avatar } from 'antd';

const RoomFeature = (props) => {
  const feature = props.featureProps;

  return (
    <Row gutter={[0, 8]} style={{ marginBottom: '8px' }} className={styles.feature}>
      <Col style={{ marginRight: '5px' }} lg={1} md={1} sm={1} xs={2}>
        <Avatar size={22} src={feature.icon} />
      </Col>
      <Col lg={22} md={22} sm={22} xs={21}>
        <div>
          <div className={styles.featureTitle}>{feature.title}</div>
          <div className={styles.featureDesc}>{feature.desc}</div>
        </div>
      </Col>
    </Row>
  );
};

RoomFeature.propTypes = {};

export default RoomFeature;
