import { Col, Row, Button } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import { SearchOutlined } from '@ant-design/icons';
import styles from './styles.less';
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
                style={{
                  backgroundImage: `url(https://res.cloudinary.com/huong/image/upload/v1648603270/assets/background_1_qztndl.jpg)`,
                }}
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
                style={{
                  backgroundImage: `url(https://res.cloudinary.com/huong/image/upload/v1648603271/assets/background_2_abgprd.jpg)`,
                }}
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
                style={{
                  backgroundImage: `url(https://res.cloudinary.com/huong/image/upload/v1648603270/assets/background_3_szd10h.jpg)`,
                }}
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
                style={{
                  backgroundImage: `url(https://res.cloudinary.com/huong/image/upload/v1648603270/assets/background_4_x4uwse.jpg)`,
                }}
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
        <div
          className={styles.bannerPro}
          style={{
            backgroundImage: `url(https://res.cloudinary.com/huong/image/upload/v1648603272/assets/pro_background_sswrgz.jpg)`,
          }}
        >
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
                style={{
                  backgroundImage: `url(https://res.cloudinary.com/huong/image/upload/v1648603108/assets/hotel/1_ee8rq7.jpg)`,
                }}
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
                style={{
                  backgroundImage: `url(https://res.cloudinary.com/huong/image/upload/v1648603111/assets/hotel/2_rn7wdj.jpg)`,
                }}
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
                style={{
                  backgroundImage: `url(https://res.cloudinary.com/huong/image/upload/v1648603115/assets/hotel/3_cidi2n.jpg)`,
                }}
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
                style={{
                  backgroundImage: `url(https://res.cloudinary.com/huong/image/upload/v1648603124/assets/hotel/4_elrixk.jpg)`,
                }}
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
                style={{
                  backgroundImage: `url(https://res.cloudinary.com/huong/image/upload/v1648603133/assets/hotel/5_irlrrx.jpg)`,
                }}
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
                style={{
                  backgroundImage: `url(https://res.cloudinary.com/huong/image/upload/v1648603133/assets/hotel/6_wcsfpc.jpg)`,
                }}
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
                style={{
                  backgroundImage: `url(https://res.cloudinary.com/huong/image/upload/v1648603141/assets/hotel/7_uitfu1.jpg)`,
                }}
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
                style={{
                  backgroundImage: `url(https://res.cloudinary.com/huong/image/upload/v1648603155/assets/hotel/8_ss1ty6.jpg)`,
                }}
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
            <div
              className={styles.categoryCard}
              style={{
                backgroundImage: `url(https://res.cloudinary.com/huong/image/upload/v1648603271/assets/background_2_abgprd.jpg)`,
              }}
            >
              <div className={styles.categoryCardTitle}>Unique stays</div>
              <div className={styles.categoryCardStayCount}>131 stays</div>
            </div>
          </Col>
          <Col lg={8} md={8} sm={8} xs={24}>
            <div
              className={styles.categoryCard}
              style={{
                backgroundImage: `url(https://res.cloudinary.com/huong/image/upload/v1648603271/assets/background_5_ipotxu.jpg)`,
              }}
            >
              <div className={styles.categoryCardTitle}>Outdoor gateways</div>
              <div className={styles.categoryCardStayCount}>131 stays</div>
            </div>
          </Col>
          <Col lg={8} md={8} sm={8} xs={24}>
            <div
              className={styles.categoryCard}
              style={{
                backgroundImage: `url(https://res.cloudinary.com/huong/image/upload/v1648603270/assets/background_3_szd10h.jpg)`,
              }}
            >
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
                style={{
                  backgroundImage: `url(https://res.cloudinary.com/huong/image/upload/v1648603158/assets/hotel/9_uonhhn.jpg)`,
                }}
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
                style={{
                  backgroundImage: `url(https://res.cloudinary.com/huong/image/upload/v1648603172/assets/hotel/10_foz3aq.jpg)`,
                }}
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
                style={{
                  backgroundImage: `url(https://res.cloudinary.com/huong/image/upload/v1648603169/assets/hotel/11_sfaj3n.jpg)`,
                }}
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
                style={{
                  backgroundImage: `url(https://res.cloudinary.com/huong/image/upload/v1648603184/assets/hotel/12_wygwnr.jpg)`,
                }}
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
                style={{
                  backgroundImage: `url(https://res.cloudinary.com/huong/image/upload/v1648603189/assets/hotel/13_nggjdl.jpg)`,
                }}
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
                style={{
                  backgroundImage: `url(https://res.cloudinary.com/huong/image/upload/v1648603202/assets/hotel/14_wry9wt.jpg)`,
                }}
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
                style={{
                  backgroundImage: `url(https://res.cloudinary.com/huong/image/upload/v1648603207/assets/hotel/15_jturnt.jpg)`,
                }}
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
                style={{
                  backgroundImage: `url(https://res.cloudinary.com/huong/image/upload/v1648603220/assets/hotel/16_xkk5ab.jpg)`,
                }}
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
