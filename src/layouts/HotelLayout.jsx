import React from 'react';
import { Layout } from 'antd';
import Header from '@/components/Header';
import Footer from '@/components/HotelFooter';
import styles from './HotelLayout.less';

function HotelLayout({ children }) {
  return (
    <Layout className={styles.hotelLayout}>
      <section className={styles.content}>
        <Header />
      </section>
      <section className={styles.content}>{children}</section>
      <section className={styles.content}>
        <Footer />
      </section>
    </Layout>
  );
}

export default HotelLayout;
