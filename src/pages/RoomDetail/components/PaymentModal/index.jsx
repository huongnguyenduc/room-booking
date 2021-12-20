import { GRAY_1 } from '@/constants/color';
import { ArrowLeftOutlined, CrownFilled, FileDoneOutlined, StarFilled } from '@ant-design/icons';
import { Button, Col, Divider, Input, Modal, notification, Row, Select, Switch } from 'antd';
import React from 'react';
import Background1 from '@/assets/hotel/22.jpg';
import CreditCard from '@/assets/Payment/credit-card.png';
import JCB from '@/assets/Payment/jcb.png';
import Paypal from '@/assets/Payment/paypal.png';
import Visa from '@/assets/Payment/visa.png';
import styles from './styles.less';
import MaskedInput from 'antd-mask-input';

const { Option } = Select;

function PaymentModal({ isPaymentModalVisible, handlePaymentCancel, handlePaymentOk }) {
  const [isPayFull, setIsPayFull] = React.useState(true);
  const [coupon, setCoupon] = React.useState('');
  const onCouponChange = (e) => {
    setCoupon(e.target.value);
  };
  return (
    <Modal
      visible={isPaymentModalVisible}
      onOk={handlePaymentOk}
      onCancel={handlePaymentCancel}
      centered
      width={1100}
      footer={null}
      closeIcon={<></>}
      className="paymentModal"
      bodyStyle={{ borderRadius: '35px 35px 35px 35px', height: '85vh', overflow: 'auto' }}
    >
      <Row>
        <Col span={11}>
          <div className={styles.modalTitle}>
            <div className={styles.iconModalBack} onClick={handlePaymentCancel}>
              <ArrowLeftOutlined style={{ fontSize: '12px', color: GRAY_1 }} />
            </div>
            <div className={styles.modalTitleContent}>Confirm and Pay</div>
          </div>
          <div className={styles.tourTitle}>Tour trip</div>
          <div className={styles.tourItem}>
            <div className={styles.tourItemInfo}>
              <div className={styles.tourItemTitle}>Dates</div>
              <div className={styles.tourItemContent}>Dec 24 - 25</div>
            </div>
            <div className={styles.tourItemAction}>
              <div className={styles.tourItemAction}>Edit</div>
            </div>
          </div>
          <div className={styles.tourItem}>
            <div className={styles.tourItemInfo}>
              <div className={styles.tourItemTitle}>Guests</div>
              <div className={styles.tourItemContent}>1 guest</div>
            </div>
            <div className={styles.tourItemAction}>
              <div className={styles.tourItemAction}>Edit</div>
            </div>
          </div>
          <Divider />
          <div className={styles.isWorkTrip}>
            <div className={styles.isWorkTripTitle}>Is this a work trip?</div>
            <Switch />
          </div>
          <Divider />
          <div className={styles.tourTitle}>Choose how to pay</div>
          <div
            className={isPayFull ? styles.payFullTopActive : styles.payFullTopDisabled}
            onClick={() => {
              if (!isPayFull) setIsPayFull(true);
            }}
          >
            <div className={styles.payFullContent}>
              <div className={styles.payFullTitle}>Pay in full</div>
              <div className={styles.payFullDescription}>
                Pay the total now and you&apos;re all set.
              </div>
            </div>
            <div className={styles.payFullPrice}>
              $394
              <div
                className={isPayFull ? styles.payFullActiveRadio : styles.payFullDisabledRadio}
              />
            </div>
          </div>
          <div
            className={isPayFull ? styles.payFullBottomDisabled : styles.payFullBottomActive}
            onClick={() => {
              if (isPayFull) setIsPayFull(false);
            }}
          >
            <div className={styles.payFullContent}>
              <div className={styles.payFullTitle}>Pay in part</div>
              <div className={styles.payFullDescription}>
                Pay $164.06 now, and the rest ($154.06) will be automatically charged to the same
                payment method on May 29, 2021. No extra fees.
              </div>
            </div>
            <div className={styles.payFullPrice}>
              $154
              <div
                className={!isPayFull ? styles.payFullActiveRadio : styles.payFullDisabledRadio}
              />
            </div>
          </div>
          <Divider />
          <div className={styles.tourTitle}>
            Pay with
            <div className={styles.payMethod}>
              <div className={styles.payMethodItem} style={{ backgroundImage: `url(${Paypal})` }} />
              <div className={styles.payMethodItem} style={{ backgroundImage: `url(${JCB})` }} />
              <div className={styles.payMethodItem} style={{ backgroundImage: `url(${Visa})` }} />
              <div
                className={styles.payMethodItem}
                style={{ backgroundImage: `url(${CreditCard})` }}
              />
            </div>
          </div>

          <div className={styles.paySelect}>
            <div className={styles.paySelectTitle}>Guest</div>
            <Select
              bordered={false}
              defaultValue="1"
              style={{
                width: '100%',
                borderRadius: '18px',
                fontWeight: 'bold',
              }}
            >
              <Option value="1">1 Guest</Option>
              <Option value="2">2 Guests</Option>
              <Option value="4">4 Guests</Option>
            </Select>
          </div>
          <div className={styles.cardNumber}>
            {/* <Input placeholder="Card number" bordered={false} style={{ fontWeight: 'bold' }} /> */}
            <MaskedInput
              mask="1111 1111 1111 1111"
              name="card"
              bordered={false}
              placeholder="Card number"
              style={{ fontWeight: 'bold' }}
            />
          </div>
          <Row className={styles.cardInfo}>
            <Col span={12}>
              <div className={styles.expiredDate}>
                {/* <Input
                  placeholder="Expiration date"
                  style={{ fontWeight: 'bold' }}
                  bordered={false}
                /> */}
                <MaskedInput
                  mask="11/1111"
                  name="expiry"
                  placeholder="Expiration date"
                  style={{ fontWeight: 'bold' }}
                  bordered={false}
                />
              </div>
            </Col>
            <Col span={12}>
              <div className={styles.cvv}>
                {/* <Input placeholder="CVV" style={{ fontWeight: 'bold' }} bordered={false} /> */}
                <MaskedInput
                  mask="111"
                  name="ccv"
                  placeholder="CVV"
                  style={{ fontWeight: 'bold' }}
                  bordered={false}
                />
              </div>
            </Col>
          </Row>
          <div className={styles.paySelect}>
            <div className={styles.paySelectTitle}>Country</div>
            <Select
              bordered={false}
              defaultValue="1"
              style={{
                width: '100%',
                borderRadius: '18px',
                fontWeight: 'bold',
                border: 'none',
                boxShadow: 'none',
              }}
            >
              <Option value="1">Georgia</Option>
              <Option value="2">Vietnam</Option>
              <Option value="4">England</Option>
            </Select>
          </div>
          <Divider />
          <div className={styles.tourTitle}>Cancellation policy</div>
          <div className={styles.policyItem}>
            <div className={styles.policyTitle}>Free cancellation until 2:00 PM on Dec 24.</div>
            <div className={styles.policyDescription}>
              After that, cancel before 2:00 PM on Dec 25 and get a full refund, minus the first
              night and service fee.
            </div>
          </div>
          <div className={styles.policyItem}>
            <div className={styles.policyTitle}>
              Make sure this host&apos;s cancellation policy works for you.
            </div>
            <div className={styles.policyDescription}>
              Our Extenuating Circumstance policy may not cover travel disruptions caused by known
              events, like COVID-19, or foreseeable events, like common severe weather.
            </div>
          </div>
          <Divider />
          <div className={styles.paymentAction}>
            <Button
              type="primary"
              className={styles.paymentButton}
              onClick={() => {
                handlePaymentCancel();
                notification.success({
                  message: 'Room booked successfully!',
                  placement: 'bottomLeft',
                });
              }}
            >
              Confirm and Pay
            </Button>
            <div className={styles.actionDescription}>Safety Disclosures, Cancellation Policy</div>
          </div>
        </Col>
        <Col span={12} offset={1}>
          <div className={styles.roomDetail}>
            <div className={styles.roomInfo}>
              <div className={styles.roomImage} style={{ backgroundImage: `url(${Background1})` }}>
                <div className={styles.roomRate}>4.9</div>
              </div>
              <div className={styles.roomDescription}>
                <div className={styles.roomName}>Tiny house in Stepantsminda</div>
                <div className={styles.roomLocation}>Landscape Kazbegi</div>
                <div className={styles.roomSpace}>2 guests · 1 bedroom · 1 bed · 1 bath</div>
                <div className={styles.roomRating}>
                  <StarFilled style={{ color: 'orangered', fontSize: '18px' }} />
                  <div className={styles.roomRatingCount}>5.0</div>
                  <div className={styles.roomReviewCount}>(175 Reviews)</div>
                  <CrownFilled style={{ color: 'orangered', fontSize: '18px' }} />
                  <div className={styles.roomReviewCount}>Superhost</div>
                </div>
              </div>
            </div>
            <Divider />
            <div className={styles.tourTitle}>Do you have an coupon?</div>
            <Input
              suffix={
                <Button disabled={coupon === ''} type="primary" style={{ fontWeight: 'bold' }}>
                  Apply
                </Button>
              }
              onChange={onCouponChange}
              value={coupon}
            />
            <Divider />
            <div className={styles.tourTitle}>Price details</div>
            <div className={styles.priceDetailItem}>
              <div className={styles.roomPrice}>$90.00 * 3 nights</div>
              <div className={styles.roomPrice}>$270.00</div>
            </div>
            <div className={styles.priceDetailItem}>
              <div className={styles.roomService}>Service fee</div>
              <div className={styles.roomServicePrice}>$38.12</div>
            </div>
            <div className={styles.priceDetailItem}>
              <div className={styles.roomTotal}>Total (USD)</div>
              <div className={styles.roomTotal}>$308.12</div>
            </div>
          </div>
        </Col>
      </Row>
    </Modal>
  );
}

export default PaymentModal;
