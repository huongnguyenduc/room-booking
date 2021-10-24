import { Col, Row, Button } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import React from 'react';
import styles from './styles.less';
import Background1 from '@/assets/background_1.jpg';
import Background2 from '@/assets/background_2.jpg';
import Background3 from '@/assets/background_3.jpg';
import Background4 from '@/assets/background_4.jpg';
import Background5 from '@/assets/background_5.jpg';
import ProBackground from '@/assets/pro_background.jpg';

function SearchPage() {
  return (
    <Content className={styles.searchPage}>
      <Row gutter={{ xl: 24, md: 12, sm: 6, xs: 4 }}>
        <Col lg={6} md={12} sm={12} xs={12}>
          <div className={styles.roomCard}>
            <div
              className={styles.roomCardImage}
              style={{ backgroundImage: `url(${Background1})` }}
            >
              <div className={styles.roomRating}>4.9</div>
            </div>
            <div className={styles.title}>Tia Hut</div>
            <div className={styles.description}>Entire carbin in Dyerville</div>
            <div className={styles.roomDescription}>Studio · 1 bed · 1 bath</div>
            <div className={styles.price}>$164/ night</div>
          </div>
        </Col>
        <Col lg={6} md={12} sm={12} xs={12}>
          <div className={styles.roomCard}>
            <div
              className={styles.roomCardImage}
              style={{ backgroundImage: `url(${Background2})` }}
            >
              <div className={styles.roomRating}>4.9</div>
            </div>
            <div className={styles.title}>Tia Hut</div>
            <div className={styles.description}>Entire carbin in Dyerville</div>
            <div className={styles.roomDescription}>Studio · 1 bed · 1 bath</div>
            <div className={styles.price}>$164/ night</div>
          </div>
        </Col>
        <Col lg={6} md={12} sm={12} xs={12}>
          <div className={styles.roomCard}>
            <div
              className={styles.roomCardImage}
              style={{ backgroundImage: `url(${Background3})` }}
            >
              <div className={styles.roomRating}>4.9</div>
            </div>
            <div className={styles.title}>Tia Hut</div>
            <div className={styles.description}>Entire carbin in Dyerville</div>
            <div className={styles.roomDescription}>Studio · 1 bed · 1 bath</div>
            <div className={styles.price}>$164/ night</div>
          </div>
        </Col>
        <Col lg={6} md={12} sm={12} xs={12}>
          <div className={styles.roomCard}>
            <div
              className={styles.roomCardImage}
              style={{ backgroundImage: `url(${Background4})` }}
            >
              <div className={styles.roomRating}>4.9</div>
            </div>
            <div className={styles.title}>Tia Hut</div>
            <div className={styles.description}>Entire carbin in Dyerville</div>
            <div className={styles.roomDescription}>Studio · 1 bed · 1 bath</div>
            <div className={styles.price}>$164/ night</div>
          </div>
        </Col>
      </Row>
      <div className={styles.bannerPro} style={{ backgroundImage: `url(${ProBackground})` }}>
        <Row className={styles.bannerProRow}>
          <Col
            xs={{ offset: 1, span: 22 }}
            sm={{ offset: 2, span: 16 }}
            md={{ offset: 3, span: 12 }}
            lg={{ offset: 2, span: 10 }}
          >
            <div className={styles.content}>Thoughtfully designed homes.</div>
            <div className={styles.content}>
              Exceptional hosts.{' '}
              <span className={styles.hightLightContent}>Verified for quality.</span>
            </div>
            <div className={styles.subContent}>
              Every home is verified through in-person quality inspection to ensure quality and
              design. Just look for the <span className={styles.subContentPro}>Pro</span> badge.
            </div>
            <Button className={styles.proButton}>Get PRO</Button>
          </Col>
        </Row>
      </div>
      <Row gutter={{ xl: 24, md: 12, sm: 6, xs: 4 }}>
        <Col lg={6} md={12} sm={12} xs={12}>
          <div className={styles.roomCard}>
            <div
              className={styles.roomCardImage}
              style={{ backgroundImage: `url(${Background5})` }}
            >
              <div className={styles.roomRating}>4.9</div>
            </div>
            <div className={styles.title}>Tia Hut</div>
            <div className={styles.description}>Entire carbin in Dyerville</div>
            <div className={styles.roomDescription}>Studio · 1 bed · 1 bath</div>
            <div className={styles.price}>$164/ night</div>
          </div>
        </Col>
        <Col lg={6} md={12} sm={12} xs={12}>
          <div className={styles.roomCard}>
            <div
              className={styles.roomCardImage}
              style={{ backgroundImage: `url(${Background2})` }}
            >
              <div className={styles.roomRating}>4.9</div>
            </div>
            <div className={styles.title}>Tia Hut</div>
            <div className={styles.description}>Entire carbin in Dyerville</div>
            <div className={styles.roomDescription}>Studio · 1 bed · 1 bath</div>
            <div className={styles.price}>$164/ night</div>
          </div>
        </Col>
        <Col lg={6} md={12} sm={12} xs={12}>
          <div className={styles.roomCard}>
            <div
              className={styles.roomCardImage}
              style={{ backgroundImage: `url(${Background3})` }}
            >
              <div className={styles.roomRating}>4.9</div>
            </div>
            <div className={styles.title}>Tia Hut</div>
            <div className={styles.description}>Entire carbin in Dyerville</div>
            <div className={styles.roomDescription}>Studio · 1 bed · 1 bath</div>
            <div className={styles.price}>$164/ night</div>
          </div>
        </Col>
        <Col lg={6} md={12} sm={12} xs={12}>
          <div className={styles.roomCard}>
            <div
              className={styles.roomCardImage}
              style={{ backgroundImage: `url(${Background4})` }}
            >
              <div className={styles.roomRating}>4.9</div>
            </div>
            <div className={styles.title}>Tia Hut</div>
            <div className={styles.description}>Entire carbin in Dyerville</div>
            <div className={styles.roomDescription}>Studio · 1 bed · 1 bath</div>
            <div className={styles.price}>$164/ night</div>
          </div>
        </Col>
      </Row>
      <Row gutter={{ xl: 24, md: 12, sm: 6, xs: 4 }}>
        <Col lg={6} md={12} sm={12} xs={12}>
          <div className={styles.roomCard}>
            <div
              className={styles.roomCardImage}
              style={{ backgroundImage: `url(${Background5})` }}
            >
              <div className={styles.roomRating}>4.9</div>
            </div>
            <div className={styles.title}>Tia Hut</div>
            <div className={styles.description}>Entire carbin in Dyerville</div>
            <div className={styles.roomDescription}>Studio · 1 bed · 1 bath</div>
            <div className={styles.price}>$164/ night</div>
          </div>
        </Col>
        <Col lg={6} md={12} sm={12} xs={12}>
          <div className={styles.roomCard}>
            <div
              className={styles.roomCardImage}
              style={{ backgroundImage: `url(${Background2})` }}
            >
              <div className={styles.roomRating}>4.9</div>
            </div>
            <div className={styles.title}>Tia Hut</div>
            <div className={styles.description}>Entire carbin in Dyerville</div>
            <div className={styles.roomDescription}>Studio · 1 bed · 1 bath</div>
            <div className={styles.price}>$164/ night</div>
          </div>
        </Col>
        <Col lg={6} md={12} sm={12} xs={12}>
          <div className={styles.roomCard}>
            <div
              className={styles.roomCardImage}
              style={{ backgroundImage: `url(${Background3})` }}
            >
              <div className={styles.roomRating}>4.9</div>
            </div>
            <div className={styles.title}>Tia Hut</div>
            <div className={styles.description}>Entire carbin in Dyerville</div>
            <div className={styles.roomDescription}>Studio · 1 bed · 1 bath</div>
            <div className={styles.price}>$164/ night</div>
          </div>
        </Col>
        <Col lg={6} md={12} sm={12} xs={12}>
          <div className={styles.roomCard}>
            <div
              className={styles.roomCardImage}
              style={{ backgroundImage: `url(${Background4})` }}
            >
              <div className={styles.roomRating}>4.9</div>
            </div>
            <div className={styles.title}>Tia Hut</div>
            <div className={styles.description}>Entire carbin in Dyerville</div>
            <div className={styles.roomDescription}>Studio · 1 bed · 1 bath</div>
            <div className={styles.price}>$164/ night</div>
          </div>
        </Col>
      </Row>
      <Row gutter={{ xl: 24, md: 12, sm: 6, xs: 4 }}>
        <Col lg={8} md={8} sm={8} xs={24}>
          <div className={styles.categoryCard} style={{ backgroundImage: `url(${Background2})` }}>
            <div className={styles.categoryCardTitle}>Unique stays</div>
            <div className={styles.categoryCardStayCount}>131 stays</div>
          </div>
        </Col>
        <Col lg={8} md={8} sm={8} xs={24}>
          <div className={styles.categoryCard} style={{ backgroundImage: `url(${Background5})` }}>
            <div className={styles.categoryCardTitle}>Outdoor gateways</div>
            <div className={styles.categoryCardStayCount}>131 stays</div>
          </div>
        </Col>
        <Col lg={8} md={8} sm={8} xs={24}>
          <div className={styles.categoryCard} style={{ backgroundImage: `url(${Background3})` }}>
            <div className={styles.categoryCardTitle}>Entire homes</div>
            <div className={styles.categoryCardStayCount}>131 stays</div>
          </div>
        </Col>
      </Row>
      <Row gutter={{ xl: 24, md: 12, sm: 6, xs: 4 }}>
        <Col lg={6} md={12} sm={12} xs={12}>
          <div className={styles.roomCard}>
            <div
              className={styles.roomCardImage}
              style={{ backgroundImage: `url(${Background5})` }}
            >
              <div className={styles.roomRating}>4.9</div>
            </div>
            <div className={styles.title}>Tia Hut</div>
            <div className={styles.description}>Entire carbin in Dyerville</div>
            <div className={styles.roomDescription}>Studio · 1 bed · 1 bath</div>
            <div className={styles.price}>$164/ night</div>
          </div>
        </Col>
        <Col lg={6} md={12} sm={12} xs={12}>
          <div className={styles.roomCard}>
            <div
              className={styles.roomCardImage}
              style={{ backgroundImage: `url(${Background2})` }}
            >
              <div className={styles.roomRating}>4.9</div>
            </div>
            <div className={styles.title}>Tia Hut</div>
            <div className={styles.description}>Entire carbin in Dyerville</div>
            <div className={styles.roomDescription}>Studio · 1 bed · 1 bath</div>
            <div className={styles.price}>$164/ night</div>
          </div>
        </Col>
        <Col lg={6} md={12} sm={12} xs={12}>
          <div className={styles.roomCard}>
            <div
              className={styles.roomCardImage}
              style={{ backgroundImage: `url(${Background3})` }}
            >
              <div className={styles.roomRating}>4.9</div>
            </div>
            <div className={styles.title}>Tia Hut</div>
            <div className={styles.description}>Entire carbin in Dyerville</div>
            <div className={styles.roomDescription}>Studio · 1 bed · 1 bath</div>
            <div className={styles.price}>$164/ night</div>
          </div>
        </Col>
        <Col lg={6} md={12} sm={12} xs={12}>
          <div className={styles.roomCard}>
            <div
              className={styles.roomCardImage}
              style={{ backgroundImage: `url(${Background4})` }}
            >
              <div className={styles.roomRating}>4.9</div>
            </div>
            <div className={styles.title}>Tia Hut</div>
            <div className={styles.description}>Entire carbin in Dyerville</div>
            <div className={styles.roomDescription}>Studio · 1 bed · 1 bath</div>
            <div className={styles.price}>$164/ night</div>
          </div>
        </Col>
      </Row>
    </Content>
  );
}

export default SearchPage;
