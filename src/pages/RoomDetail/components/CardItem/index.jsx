import PropTypes from 'prop-types';
import styles from './styles.less';
import { Row, Col } from 'antd';

const CardItem = (props) => {
  return (
    <Row gutter={[8, 0]}>
      <Col lg={8} md={12} sm={12} xs={12}>
        <div className={styles.roomCard}>
          <div
            className={styles.roomCardImage}
            style={{
              backgroundImage: `url(https://res.cloudinary.com/huong/image/upload/v1648603270/assets/background_4_x4uwse.jpg)`,
            }}
          >
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
          <div
            className={styles.roomCardImage}
            style={{
              backgroundImage: `url(https://res.cloudinary.com/huong/image/upload/v1648603271/assets/background_5_ipotxu.jpg)`,
            }}
          >
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
            style={{
              backgroundImage: `url(https://res.cloudinary.com/huong/image/upload/v1648603270/assets/background_1_qztndl.jpg)`,
              backgroundPosition: 'center',
            }}
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
