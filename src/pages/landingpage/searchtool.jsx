import React from 'react';
import { AutoComplete, DatePicker, InputNumber } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import './searchtool.css';
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
        <AutoComplete
          style={{ width: '180px', border: 'none' }}
          options={options}
          placeholder="Where are you going?"
        />
      </div>
      <div className="search_item">
        <h4>Check in</h4>
        <DatePicker style={{ border: 'none' }} />
      </div>
      <div className="search_item">
        <h4>Check out</h4>
        <DatePicker style={{ border: 'none' }} />
      </div>
      <div className="search_item">
        <h4>Guests</h4>
        <InputNumber
          style={{ border: 'none', color: '#26313f' }}
          min={1}
          max={10}
          defaultValue={2}
        />
      </div>
      <div className="search_item">
        <SearchOutlined
          className="icon_search"
          style={{ fontSize: '40px', padding: '2px', margin: '5px', color: '#858585' }}
        />
      </div>
    </div>
  );
};

export default Searchtool;
