import { Col, Row, Button } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import React from 'react';
import { SearchOutlined } from '@ant-design/icons';
import styles from './styles.less';
import Background1 from '@/assets/background_1.jpg';
import Background2 from '@/assets/background_2.jpg';
import Background3 from '@/assets/background_3.jpg';
import Background4 from '@/assets/background_4.jpg';
import Background5 from '@/assets/background_5.jpg';
import BackgroundPro1 from '@/assets/hotel/1.jpg';
import BackgroundPro2 from '@/assets/hotel/2.jpg';
import BackgroundPro3 from '@/assets/hotel/3.jpg';
import BackgroundPro4 from '@/assets/hotel/4.jpg';
import BackgroundPro5 from '@/assets/hotel/5.jpg';
import BackgroundPro6 from '@/assets/hotel/6.jpg';
import BackgroundPro7 from '@/assets/hotel/7.jpg';
import BackgroundPro8 from '@/assets/hotel/8.jpg';
import BackgroundPro9 from '@/assets/hotel/9.jpg';
import BackgroundPro10 from '@/assets/hotel/10.jpg';
import BackgroundPro11 from '@/assets/hotel/11.jpg';
import BackgroundPro12 from '@/assets/hotel/12.jpg';
import BackgroundPro13 from '@/assets/hotel/13.jpg';
import BackgroundPro14 from '@/assets/hotel/14.jpg';
import BackgroundPro15 from '@/assets/hotel/15.jpg';
import BackgroundPro16 from '@/assets/hotel/16.jpg';
import ProBackground from '@/assets/pro_background.jpg';
import { GRAY_1 } from '@/constants/color';
import ScrollReveal from '@/components/ScrollReveal/ScrollReveal';
import { history } from 'umi';

function SearchPage() {
  return (
    <Content className={styles.searchPage}>
      <Row className={styles.location}>
        <Col span={12}>
          <div className={styles.locationItem}>
            <div className={styles.locationItemTitle}>Location</div>
            <div className={styles.locationItemContent}>
              Wellington City, Wellington, New Zealand
            </div>
          </div>
        </Col>
        <Col span={3}>
          <div className={styles.locationItem}>
            <div className={styles.locationItemTitle}>Check in</div>
            <div className={styles.locationItemContent}>Dec 24</div>
          </div>
        </Col>
        <Col span={3}>
          <div className={styles.locationItem}>
            <div className={styles.locationItemTitle}>Check out</div>
            <div className={styles.locationItemContent}>Dec 25</div>
          </div>
        </Col>
        <Col span={3}>
          <div className={styles.locationItem}>
            <div className={styles.locationItemTitle}>Guests</div>
            <div className={styles.locationItemContent}>2 Guests</div>
          </div>
        </Col>
        <Col span={3}>
          <div className={styles.locationSearch}>
            <div className={styles.locationSearchIcon}>
              <SearchOutlined style={{ fontSize: '20px', color: GRAY_1 }} />
            </div>
          </div>
        </Col>
      </Row>
      <Row className={styles.info}>
        <Col span={12}>
          <div className={styles.infoContent}>
            <div className={styles.infoRoom}>29 stays · Dec 24 - 25</div>
            <div className={styles.infoSelectedMap}>Stays in selected map area</div>
          </div>
        </Col>
        <Col span={12}>
          <div className={styles.infoFilter}>
            <div className={styles.infoFilterItem}>Cancellation flexibility</div>
            <div className={styles.infoFilterItem}>Entire place</div>
            <div className={styles.infoFilterItem}>Price</div>
            <div className={styles.infoFilterItem}>Instant Book</div>
            <div className={styles.infoFilterMore}>More filters · 19</div>
          </div>
        </Col>
      </Row>
      <Row gutter={{ xl: 24, md: 12, sm: 6, xs: 4 }}>
        <Col lg={6} md={12} sm={12} xs={12}>
          <ScrollReveal reveal={{ origin: 'right', delay: 400 }}>
            <div className={styles.roomCard} onClick={() => history.push('/room-detail')}>
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
          </ScrollReveal>
        </Col>
        <Col lg={6} md={12} sm={12} xs={12}>
          <ScrollReveal reveal={{ origin: 'right', delay: 500 }}>
            <div className={styles.roomCard} onClick={() => history.push('/room-detail')}>
              <div
                className={styles.roomCardImage}
                style={{ backgroundImage: `url(${Background2})` }}
              >
                <div className={styles.roomRating}>4.9</div>
              </div>
              <div className={styles.title}>Dreamscape Glamping</div>
              <div className={styles.description}>Entire carbin in Dyerville</div>
              <div className={styles.roomDescription}>Studio · 1 bed · 1 bath</div>
              <div className={styles.price}>$164/ night</div>
            </div>
          </ScrollReveal>
        </Col>
        <Col lg={6} md={12} sm={12} xs={12}>
          <ScrollReveal reveal={{ origin: 'right', delay: 600 }}>
            <div className={styles.roomCard} onClick={() => history.push('/room-detail')}>
              <div
                className={styles.roomCardImage}
                style={{ backgroundImage: `url(${Background3})` }}
              >
                <div className={styles.roomRating}>4.9</div>
              </div>
              <div className={styles.title}>Ica View Glamping</div>
              <div className={styles.description}>Entire carbin in Dyerville</div>
              <div className={styles.roomDescription}>Studio · 1 bed · 1 bath</div>
              <div className={styles.price}>$164/ night</div>
            </div>
          </ScrollReveal>
        </Col>
        <Col lg={6} md={12} sm={12} xs={12}>
          <ScrollReveal reveal={{ origin: 'right', delay: 400 }}>
            <div className={styles.roomCard} onClick={() => history.push('/room-detail')}>
              <div
                className={styles.roomCardImage}
                style={{ backgroundImage: `url(${Background4})` }}
              >
                <div className={styles.roomRating}>4.9</div>
              </div>
              <div className={styles.title}>Private Farmstay</div>
              <div className={styles.description}>Entire carbin in Dyerville</div>
              <div className={styles.roomDescription}>Studio · 1 bed · 1 bath</div>
              <div className={styles.price}>$164/ night</div>
            </div>
          </ScrollReveal>
        </Col>
      </Row>
      <ScrollReveal reveal={{ origin: 'left', delay: 400 }}>
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
      </ScrollReveal>
      <Row gutter={{ xl: 24, md: 12, sm: 6, xs: 4 }}>
        <Col lg={6} md={12} sm={12} xs={12}>
          <ScrollReveal reveal={{ origin: 'right', delay: 400 }}>
            <div className={styles.roomCard} onClick={() => history.push('/room-detail')}>
              <div
                className={styles.roomCardImage}
                style={{ backgroundImage: `url(${BackgroundPro1})` }}
              >
                <div className={styles.roomRating}>4.9</div>
              </div>
              <div className={styles.title}>The Good End of the Shed</div>
              <div className={styles.description}>Entire carbin in Dyerville</div>
              <div className={styles.roomDescription}>Studio · 1 bed · 1 bath</div>
              <div className={styles.price}>$164/ night</div>
            </div>
          </ScrollReveal>
        </Col>
        <Col lg={6} md={12} sm={12} xs={12}>
          <ScrollReveal reveal={{ origin: 'right', delay: 500 }}>
            <div className={styles.roomCard} onClick={() => history.push('/room-detail')}>
              <div
                className={styles.roomCardImage}
                style={{ backgroundImage: `url(${BackgroundPro2})` }}
              >
                <div className={styles.roomRating}>4.9</div>
              </div>
              <div className={styles.title}>Retro Eco-Farmstay</div>
              <div className={styles.description}>Entire carbin in Dyerville</div>
              <div className={styles.roomDescription}>Studio · 1 bed · 1 bath</div>
              <div className={styles.price}>$164/ night</div>
            </div>
          </ScrollReveal>
        </Col>
        <Col lg={6} md={12} sm={12} xs={12}>
          <ScrollReveal reveal={{ origin: 'right', delay: 600 }}>
            <div className={styles.roomCard} onClick={() => history.push('/room-detail')}>
              <div
                className={styles.roomCardImage}
                style={{ backgroundImage: `url(${BackgroundPro3})` }}
              >
                <div className={styles.roomRating}>4.9</div>
              </div>
              <div className={styles.title}>Exclusive Romantic Retreat</div>
              <div className={styles.description}>Entire carbin in Dyerville</div>
              <div className={styles.roomDescription}>Studio · 1 bed · 1 bath</div>
              <div className={styles.price}>$164/ night</div>
            </div>
          </ScrollReveal>
        </Col>
        <Col lg={6} md={12} sm={12} xs={12}>
          <ScrollReveal reveal={{ origin: 'right', delay: 400 }}>
            <div className={styles.roomCard} onClick={() => history.push('/room-detail')}>
              <div
                className={styles.roomCardImage}
                style={{ backgroundImage: `url(${BackgroundPro4})` }}
              >
                <div className={styles.roomRating}>4.9</div>
              </div>
              <div className={styles.title}>Private Farmstay</div>
              <div className={styles.description}>Entire carbin in Dyerville</div>
              <div className={styles.roomDescription}>Studio · 1 bed · 1 bath</div>
              <div className={styles.price}>$164/ night</div>
            </div>
          </ScrollReveal>
        </Col>
      </Row>
      <Row gutter={{ xl: 24, md: 12, sm: 6, xs: 4 }}>
        <Col lg={6} md={12} sm={12} xs={12}>
          <ScrollReveal reveal={{ origin: 'right', delay: 400 }}>
            <div className={styles.roomCard} onClick={() => history.push('/room-detail')}>
              <div
                className={styles.roomCardImage}
                style={{ backgroundImage: `url(${BackgroundPro5})` }}
              >
                <div className={styles.roomRating}>4.9</div>
              </div>
              <div className={styles.title}>Te Horo Farmstay</div>
              <div className={styles.description}>Entire carbin in Dyerville</div>
              <div className={styles.roomDescription}>Studio · 1 bed · 1 bath</div>
              <div className={styles.price}>$164/ night</div>
            </div>
          </ScrollReveal>
        </Col>
        <Col lg={6} md={12} sm={12} xs={12}>
          <ScrollReveal reveal={{ origin: 'right', delay: 500 }}>
            <div className={styles.roomCard} onClick={() => history.push('/room-detail')}>
              <div
                className={styles.roomCardImage}
                style={{ backgroundImage: `url(${BackgroundPro6})` }}
              >
                <div className={styles.roomRating}>4.9</div>
              </div>
              <div className={styles.title}>Dreamscape Glamping</div>
              <div className={styles.description}>Entire carbin in Dyerville</div>
              <div className={styles.roomDescription}>Studio · 1 bed · 1 bath</div>
              <div className={styles.price}>$164/ night</div>
            </div>
          </ScrollReveal>
        </Col>
        <Col lg={6} md={12} sm={12} xs={12}>
          <ScrollReveal reveal={{ origin: 'right', delay: 600 }}>
            <div className={styles.roomCard} onClick={() => history.push('/room-detail')}>
              <div
                className={styles.roomCardImage}
                style={{ backgroundImage: `url(${BackgroundPro7})` }}
              >
                <div className={styles.roomRating}>4.9</div>
              </div>
              <div className={styles.title}>Ica View Glamping</div>
              <div className={styles.description}>Entire carbin in Dyerville</div>
              <div className={styles.roomDescription}>Studio · 1 bed · 1 bath</div>
              <div className={styles.price}>$164/ night</div>
            </div>
          </ScrollReveal>
        </Col>
        <Col lg={6} md={12} sm={12} xs={12}>
          <ScrollReveal reveal={{ origin: 'right', delay: 400 }}>
            <div className={styles.roomCard} onClick={() => history.push('/room-detail')}>
              <div
                className={styles.roomCardImage}
                style={{ backgroundImage: `url(${BackgroundPro8})` }}
              >
                <div className={styles.roomRating}>4.9</div>
              </div>
              <div className={styles.title}>Tia Hut</div>
              <div className={styles.description}>Entire carbin in Dyerville</div>
              <div className={styles.roomDescription}>Studio · 1 bed · 1 bath</div>
              <div className={styles.price}>$164/ night</div>
            </div>
          </ScrollReveal>
        </Col>
      </Row>
      <ScrollReveal reveal={{ origin: 'left', delay: 400 }}>
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
      </ScrollReveal>
      <Row gutter={{ xl: 24, md: 12, sm: 6, xs: 4 }}>
        <Col lg={6} md={12} sm={12} xs={12}>
          <ScrollReveal reveal={{ origin: 'right', delay: 400 }}>
            <div className={styles.roomCard} onClick={() => history.push('/room-detail')}>
              <div
                className={styles.roomCardImage}
                style={{ backgroundImage: `url(${BackgroundPro9})` }}
              >
                <div className={styles.roomRating}>4.9</div>
              </div>
              <div className={styles.title}>Te Horo Farmstay</div>
              <div className={styles.description}>Entire carbin in Dyerville</div>
              <div className={styles.roomDescription}>Studio · 1 bed · 1 bath</div>
              <div className={styles.price}>$164/ night</div>
            </div>
          </ScrollReveal>
        </Col>
        <Col lg={6} md={12} sm={12} xs={12}>
          <ScrollReveal reveal={{ origin: 'right', delay: 500 }}>
            <div className={styles.roomCard} onClick={() => history.push('/room-detail')}>
              <div
                className={styles.roomCardImage}
                style={{ backgroundImage: `url(${BackgroundPro10})` }}
              >
                <div className={styles.roomRating}>4.9</div>
              </div>
              <div className={styles.title}>Dreamscape Glamping</div>
              <div className={styles.description}>Entire carbin in Dyerville</div>
              <div className={styles.roomDescription}>Studio · 1 bed · 1 bath</div>
              <div className={styles.price}>$164/ night</div>
            </div>
          </ScrollReveal>
        </Col>
        <Col lg={6} md={12} sm={12} xs={12}>
          <ScrollReveal reveal={{ origin: 'right', delay: 600 }}>
            <div className={styles.roomCard} onClick={() => history.push('/room-detail')}>
              <div
                className={styles.roomCardImage}
                style={{ backgroundImage: `url(${BackgroundPro11})` }}
              >
                <div className={styles.roomRating}>4.9</div>
              </div>
              <div className={styles.title}>Ica View Glamping</div>
              <div className={styles.description}>Entire carbin in Dyerville</div>
              <div className={styles.roomDescription}>Studio · 1 bed · 1 bath</div>
              <div className={styles.price}>$164/ night</div>
            </div>
          </ScrollReveal>
        </Col>
        <Col lg={6} md={12} sm={12} xs={12}>
          <ScrollReveal reveal={{ origin: 'right', delay: 400 }}>
            <div className={styles.roomCard} onClick={() => history.push('/room-detail')}>
              <div
                className={styles.roomCardImage}
                style={{ backgroundImage: `url(${BackgroundPro12})` }}
              >
                <div className={styles.roomRating}>4.9</div>
              </div>
              <div className={styles.title}>Tia Hut</div>
              <div className={styles.description}>Entire carbin in Dyerville</div>
              <div className={styles.roomDescription}>Studio · 1 bed · 1 bath</div>
              <div className={styles.price}>$164/ night</div>
            </div>
          </ScrollReveal>
        </Col>
      </Row>
      <Row gutter={{ xl: 24, md: 12, sm: 6, xs: 4 }} style={{ marginBottom: '30px' }}>
        <Col lg={6} md={12} sm={12} xs={12}>
          <ScrollReveal reveal={{ origin: 'right', delay: 400 }}>
            <div className={styles.roomCard} onClick={() => history.push('/room-detail')}>
              <div
                className={styles.roomCardImage}
                style={{ backgroundImage: `url(${BackgroundPro13})` }}
              >
                <div className={styles.roomRating}>4.9</div>
              </div>
              <div className={styles.title}>Ica View Glamping</div>
              <div className={styles.description}>Entire carbin in Dyerville</div>
              <div className={styles.roomDescription}>Studio · 1 bed · 1 bath</div>
              <div className={styles.price}>$164/ night</div>
            </div>
          </ScrollReveal>
        </Col>
        <Col lg={6} md={12} sm={12} xs={12}>
          <ScrollReveal reveal={{ origin: 'right', delay: 500 }}>
            <div className={styles.roomCard} onClick={() => history.push('/room-detail')}>
              <div
                className={styles.roomCardImage}
                style={{ backgroundImage: `url(${BackgroundPro14})` }}
              >
                <div className={styles.roomRating}>4.9</div>
              </div>
              <div className={styles.title}>Dreamscape Glamping</div>
              <div className={styles.description}>Entire carbin in Dyerville</div>
              <div className={styles.roomDescription}>Studio · 1 bed · 1 bath</div>
              <div className={styles.price}>$164/ night</div>
            </div>
          </ScrollReveal>
        </Col>
        <Col lg={6} md={12} sm={12} xs={12}>
          <ScrollReveal reveal={{ origin: 'right', delay: 600 }}>
            <div className={styles.roomCard} onClick={() => history.push('/room-detail')}>
              <div
                className={styles.roomCardImage}
                style={{ backgroundImage: `url(${BackgroundPro15})` }}
              >
                <div className={styles.roomRating}>4.9</div>
              </div>
              <div className={styles.title}>Marlborough Paradise</div>
              <div className={styles.description}>Entire carbin in Dyerville</div>
              <div className={styles.roomDescription}>Studio · 1 bed · 1 bath</div>
              <div className={styles.price}>$164/ night</div>
            </div>
          </ScrollReveal>
        </Col>
        <Col lg={6} md={12} sm={12} xs={12}>
          <ScrollReveal reveal={{ origin: 'right', delay: 400 }}>
            <div className={styles.roomCard} onClick={() => history.push('/room-detail')}>
              <div
                className={styles.roomCardImage}
                style={{ backgroundImage: `url(${BackgroundPro16})` }}
              >
                <div className={styles.roomRating}>4.9</div>
              </div>
              <div className={styles.title}>Exclusive Romantic Retreat</div>
              <div className={styles.description}>Entire carbin in Dyerville</div>
              <div className={styles.roomDescription}>Studio · 1 bed · 1 bath</div>
              <div className={styles.price}>$164/ night</div>
            </div>
          </ScrollReveal>
        </Col>
      </Row>
      <div className={styles.pagination}>
        <div className={styles.paginationItem}>
          <div className={styles.paginationNum}>1</div>
          <div className={styles.paginationSelected} />
        </div>
        <div className={styles.paginationItem}>2</div>
        <div className={styles.paginationItem}>3</div>
        <div className={styles.paginationItem}>4</div>
        <div className={styles.paginationItem}>...</div>
        <div className={styles.paginationItem}>Next</div>
      </div>
    </Content>
  );
}

export default SearchPage;
