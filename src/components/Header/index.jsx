import React from 'react';
import Icon, {
  GlobalOutlined,
  MenuOutlined,
  SearchOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { ReactComponent as Logo } from '@/assets/icons/door-open-solid.svg';
import { Button, Layout, Menu, Input, Modal, Select, Divider } from 'antd';
import { FacebookFilled, GoogleOutlined } from '@ant-design/icons';
import styles from './styles.less';
const { Option } = Select;

const { Header, Content, Footer } = Layout;

const title = (
  <div className="SignIn_title">
    <h2 style={{ fontWeight: 'bold' }}>Sign in</h2>
    <a href="#" style={{ color: 'gray', fontSize: '13px', textDecoration: 'underline' }}>
      Create an account
    </a>
  </div>
);

function HotelHeader() {
  const [visible, setVisible] = React.useState(false);
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
        <Button
          type="primary"
          size="large"
          icon={<UserOutlined />}
          className={styles.signIn}
          onClick={() => setVisible(true)}
        >
          Sign in
        </Button>
        <Modal
          title={title}
          style={{ top: 100, left: 400 }}
          visible={visible}
          onCancel={() => setVisible(false)}
          footer={[]}
        >
          <div className="SignInContainer">
            <Select
              style={{
                height: '50px',
                width: 300,
                border: '2px solid lightgray',
                borderRadius: '7px 7px 0px 0px',
              }}
              defaultValue="Country/Region"
            >
              <Option value="jack">American</Option>
              <Option value="lucy">England</Option>
              <Option value="Yiminghe">Australia</Option>
            </Select>
            <Input
              style={{
                height: '50px',
                width: 300,
                border: '2px solid lightgray',
                borderRadius: '0px 0px 7px 7px',
              }}
              placeholder="Phone Number"
            />
            <p style={{ fontSize: '11px', color: 'gray', marginTop: '5px' }}>
              We`&apos;`ll call or text you to confirm your number. Standard message and data rates
              apply.
            </p>
            <Button
              style={{ height: '50px', width: 300, borderRadius: '7px 7px 7px 7px' }}
              type="primary"
            >
              Sign in
            </Button>
            <Divider>OR</Divider>
            <div className="PlugginButton">
              <FacebookFilled style={{ fontSize: '20px', marginLeft: '15px' }} />
              <h3>Continue with Facebook</h3>
            </div>
            <div className="PlugginButton">
              <GoogleOutlined style={{ fontSize: '20px', marginLeft: '15px' }} />
              <h3>Continue with Google</h3>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default HotelHeader;
