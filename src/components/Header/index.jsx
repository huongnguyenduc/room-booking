import React from 'react';
import Icon, {
  GlobalOutlined,
  MenuOutlined,
  SearchOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { ReactComponent as Logo } from '@/assets/icons/door-open-solid.svg';
import { Button, Layout, Menu, Input } from 'antd';
import styles from './styles.less';

const { Header, Content, Footer } = Layout;

function HotelHeader() {
  return (
    <div className={styles.hotelHeader}>
      <div className={styles.hotelHeaderLeft}>
        <MenuOutlined className={styles.menu} />
        <Icon component={Logo} className={styles.logo} />
        <span className={styles.brand}>Roomsy</span>
        <span className={styles.menuItem}>Place to stay</span>
        <span className={styles.menuItem}>Experiences</span>
        <span className={styles.menuItem}>Nearby</span>
      </div>
      <div className={styles.hotelHeaderRight}>
        <SearchOutlined className={styles.searchIcon} />
        <Input placeholder="Become a host" className={styles.searchInput} bordered={false} />
        <Button
          size="large"
          icon={<GlobalOutlined className={styles.globalIcon} />}
          className={styles.global}
        >
          {' '}
        </Button>
        <Button type="primary" size="large" icon={<UserOutlined />} className={styles.signIn}>
          Sign in
        </Button>
      </div>
    </div>
  );
}

export default HotelHeader;
