import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.less';
import Background1 from '@/assets/background_1.jpg';
import Background2 from '@/assets/background_2.jpg';
import Background3 from '@/assets/background_3.jpg';
import Background4 from '@/assets/background_4.jpg';
import Background5 from '@/assets/background_5.jpg';
import { Row, Col } from 'antd';

const CardItem = (props) => {
  return (
    <Row gutter={[8, 0]}>
      <Col lg={8} md={12} sm={12} xs={12}>
        <div className={styles.roomCard}>
          <div className={styles.roomCardImage} style={{ backgroundImage: `url(${Background4})` }}>
            <div className={styles.roomRating}>4.9</div>
          </div>
          <div className={styles.title}>Dreamscape Glamping</div>
          <div className={styles.description}>Entire carbin in Dyerville</div>
          <div className={styles.roomDescription}>Studio · 1 bed · 1 bath</div>
          <div className={styles.price}>$164/ night</div>
        </div>
      </Col>
      <Col lg={8} md={12} sm={12} xs={12}>
        <div className={styles.roomCard}>
          <div className={styles.roomCardImage} style={{ backgroundImage: `url(${Background5})` }}>
            <div className={styles.roomRating}>4.9</div>
          </div>
          <div className={styles.title}>Marlborough Paradise</div>
          <div className={styles.description}>Entire carbin in Dyerville</div>
          <div className={styles.roomDescription}>Studio · 1 bed · 1 bath</div>
          <div className={styles.price}>$164/ night</div>
        </div>
      </Col>
      <Col lg={8} md={12} sm={12} xs={12}>
        <div className={styles.roomCard}>
          <div
            className={styles.roomCardImage}
            style={{ backgroundImage: `url(${Background1})`, backgroundPosition: 'center' }}
          >
            <div className={styles.roomRating}>4.9</div>
          </div>
          <div className={styles.title}>Exclusive Romantic Retreat</div>
          <div className={styles.description}>Entire carbin in Dyerville</div>
          <div className={styles.roomDescription}>Studio · 1 bed · 1 bath</div>
          <div className={styles.price}>$164/ night</div>
        </div>
      </Col>
    </Row>
  );
};

CardItem.propTypes = {};

export default CardItem;
