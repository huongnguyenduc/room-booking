import React from 'react';
import { Layout } from 'antd';
import styles from './HotelLayout.less';

function HotelLayout({ children }) {
  return (
    <Layout className={styles.hotelLayout}>
      <section className={styles.content}>{children}</section>
    </Layout>
  );
}

export default HotelLayout;
