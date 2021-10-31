import React from 'react';
import PropTypes from 'prop-types';
import './index.css';
import styles from './styles.less';
import { Row, Col, Carousel } from 'antd';
import { Avatar } from 'antd';

const RoomFeature = (props) => {
  const { title, desc } = props;

  return (
    <>
      <Row style={{ marginTop: '15px' }}>
        <Col lg={{ span: 1 }} style={{ marginRight: '5px' }}>
          <div className="feature__icon">
            <Avatar
              size={22}
              src={
                'data:image/png;base64,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'
              }
            />
          </div>
        </Col>

        <Col lg={{ span: 22 }}>
          <div>
            <div className={styles.featureIcon}>Entire home</div>
            <div className={styles.featureDesc}>Youll have the tiny house to yourself</div>
          </div>
        </Col>
      </Row>
    </>
  );
};

RoomFeature.propTypes = {};

export default RoomFeature;
