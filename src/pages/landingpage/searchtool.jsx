import React from 'react';
import { AutoComplete, DatePicker, InputNumber } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import './searchtool.less';
const options = [
  { value: 'New York City' },
  { value: 'Da Nang City' },
  { value: 'Ho Chi Minh City' },
  { value: 'Can Tho City' },
];
const Searchtool = () => {
  return (
    <div className="search_container">
      <div className="search_item">
        <h4>Location</h4>
        <AutoComplete options={options} placeholder="Where are you going?" />
      </div>
      <div className="search_item">
        <h4>Check in</h4>
        <DatePicker />
      </div>
      <div className="search_item">
        <h4>Check out</h4>
        <DatePicker />
      </div>
      <div className="search_item">
        <h4>Guests</h4>
        <InputNumber min={1} max={10} defaultValue={2} />
      </div>
      <div className="icon_search">
        <SearchOutlined style={{ fontSize: '40px', padding: '7px', color: '#858585' }} />
      </div>
    </div>
  );
};

export default Searchtool;
