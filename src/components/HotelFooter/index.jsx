import React from 'react';
import { Button, Layout, Menu, Row, Col } from 'antd';
import styles from './styles.less';
import Icon, {
  AppleFilled,
  CopyrightCircleOutlined,
  FacebookFilled,
  GoogleOutlined,
  InstagramFilled,
  TwitterSquareFilled,
  UpOutlined,
} from '@ant-design/icons';
import './index.css';
import { history } from 'umi';
import { ReactComponent as Logo } from '@/assets/icons/door-open-solid.svg';
import ScrollReveal from '@/components/ScrollReveal/ScrollReveal';

const { Header, Content, Footer } = Layout;
const { SubMenu } = Menu;

function HotelFooter() {
  function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    if (this.scrollY >= 200) scrollUp.classList.add('show-scroll');
    else scrollUp.classList.remove('show-scroll');
    console.log(this.scrollY);
  }
  React.useEffect(() => {
    window.addEventListener('scroll', scrollUp);
  }, []);
  return (
    <footer className={styles.hotelFooter}>
      <ScrollReveal reveal={{ reset: true }}>
        <div className={styles.hotelTopFooter}>
          <span className={styles.app}>
            <span className={`${styles.appItem} ${styles.apple}`}>
              <AppleFilled className={styles.appIcon} />
              <span className={styles.appDescription}>
                <div className={styles.smallAppDescription}>Available on the</div>
                <div className={styles.appTitle}>Appstore</div>
              </span>
            </span>
            <span className={`${styles.appItem} ${styles.google}`}>
              <GoogleOutlined className={styles.appIcon} />
              <span className={styles.appDescription}>
                <div className={styles.smallAppDescription}>Get it on</div>
                <div className={styles.appTitle}>Google Play</div>
              </span>
            </span>
          </span>
          <span className={styles.logoBrand}>
            <Icon component={Logo} className={styles.logo} />
            <span className={styles.brand} onClick={() => history.push('/')}>
              Roomsy
            </span>
          </span>
          <Button size="large" className={styles.hostButton}>
            Become a host
          </Button>
        </div>
      </ScrollReveal>
      <ScrollReveal reveal={{ reset: true }}>
        <Row className={styles.hotelMiddleFooter} gutter={[0, 20]}>
          <Col lg={6} md={12} sm={12} xs={12}>
            <div className={styles.category}>ABOUT</div>
            <div className={styles.categoryItem}>How Roomsy works</div>
            <div className={styles.categoryItem}>News Room</div>
            <div className={styles.categoryItem}>Investors</div>
            <div className={styles.categoryItem}>Roomsy Pro</div>
            <div className={styles.categoryItem}>Roomsy Vip</div>
            <div className={styles.categoryItem}>Careers</div>
          </Col>
          <Col lg={6} md={12} sm={12} xs={12}>
            <div className={styles.category}>COMMUNITY</div>
            <div className={styles.categoryItem}>Diversity And Belonging</div>
            <div className={styles.categoryItem}>Again Discrimination</div>
            <div className={styles.categoryItem}>Accessibility</div>
            <div className={styles.categoryItem}>Frontline Stays</div>
            <div className={styles.categoryItem}>Guess Referrals</div>
            <div className={styles.categoryItem}>Gift Cards</div>
          </Col>
          <Col lg={6} md={12} sm={12} xs={12}>
            <div className={styles.category}>HOST</div>
            <div className={styles.categoryItem}>Host Your Home</div>
            <div className={styles.categoryItem}>Host An Online Experience</div>
            <div className={styles.categoryItem}>Host An Experience</div>
            <div className={styles.categoryItem}>Responsible Hosting</div>
            <div className={styles.categoryItem}>Resource Center</div>
          </Col>
          <Col lg={6} md={12} sm={12} xs={12}>
            <div className={styles.category}>SUPPORT</div>
            <div className={styles.categoryItem}>Help center</div>
            <div className={styles.categoryItem}>Cancellation Options</div>
            <div className={styles.categoryItem}>Neighborhood Support</div>
            <div className={styles.categoryItem}>Trust And Safety</div>
          </Col>
        </Row>
      </ScrollReveal>

      <ScrollReveal reveal={{ reset: true }}>
        <div className={styles.hotelMiddleFooterSmall}>
          <Menu mode="inline">
            <SubMenu key="sub1" title="ABOUT">
              <Menu.Item key="1">How Roomsy works</Menu.Item>
              <Menu.Item key="2">News Room</Menu.Item>
              <Menu.Item key="23">Investors</Menu.Item>
              <Menu.Item key="24">Roomsy Pro</Menu.Item>
              <Menu.Item key="25">Roomsy Vip</Menu.Item>
              <Menu.Item key="26">Careers</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" title="COMMUNITY">
              <Menu.Item key="51">Diversity And Belonging</Menu.Item>
              <Menu.Item key="62">Again Discrimination</Menu.Item>
              <Menu.Item key="53">Accessibility</Menu.Item>
              <Menu.Item key="64">Frontline Stays</Menu.Item>
              <Menu.Item key="55">Guess Referrals</Menu.Item>
              <Menu.Item key="66">Gift Cards</Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" title="HOST">
              <Menu.Item key="9">Host Your Home</Menu.Item>
              <Menu.Item key="10">Host An Online Experience</Menu.Item>
              <Menu.Item key="11">Host An Experience</Menu.Item>
              <Menu.Item key="12">Responsible Hosting</Menu.Item>
              <Menu.Item key="13">Resource Center</Menu.Item>
            </SubMenu>
            <SubMenu key="sub4" title="SUPPORT">
              <Menu.Item key="91">Help center</Menu.Item>
              <Menu.Item key="101">Cancellation Options</Menu.Item>
              <Menu.Item key="111">Neighborhood Support</Menu.Item>
              <Menu.Item key="121">Trust And Safety</Menu.Item>
            </SubMenu>
          </Menu>
        </div>
      </ScrollReveal>
      <ScrollReveal reveal={{ reset: true, origin: 'top' }}>
        <Row div className={styles.hotelBottomFooter} gutter={[0, 10]}>
          <Col
            xxl={3}
            xl={4}
            lg={5}
            md={6}
            sm={{ span: 7, order: 1 }}
            xs={{ span: 24, order: 2 }}
            className={styles.hotelBottomFooterCol}
          >
            <CopyrightCircleOutlined className={styles.copyrightIcon} /> 2021 Roomsy, Inc
          </Col>
          <Col
            xxl={4}
            xl={5}
            lg={6}
            md={7}
            sm={{ span: 8, order: 2 }}
            xs={{ span: 24, order: 3 }}
            className={styles.hotelBottomFooterCol}
          >
            Privacy ?? Terms ?? Sitemap
          </Col>
          <Col
            xxl={{ offset: 15, span: 2 }}
            xl={{ offset: 12, span: 3 }}
            lg={{ offset: 10, span: 3 }}
            md={{ offset: 7, span: 4 }}
            sm={{ offset: 4, span: 5, order: 3 }}
            xs={{ span: 24, order: 1 }}
            className={styles.hotelBottomFooterCol}
          >
            <FacebookFilled className={styles.socialAppIcon} />{' '}
            <TwitterSquareFilled className={styles.socialAppIcon} />{' '}
            <InstagramFilled className={styles.socialAppIcon} />
          </Col>
        </Row>
      </ScrollReveal>
      <a href="#" className={styles.scrollUp} id="scroll-up">
        <UpOutlined style={{ color: 'var(--gray-1)' }} />
      </a>
    </footer>
  );
}

export default HotelFooter;
