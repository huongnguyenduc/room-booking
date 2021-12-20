import React from 'react';
import { AutoComplete, DatePicker, InputNumber } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import './searchTool.less';
import { GRAY_1 } from '@/constants/color';
import { history } from 'umi';

const options = [
  { value: 'Wellington City' },
  { value: 'Da Nang City' },
  { value: 'Ho Chi Minh City' },
  { value: 'Can Tho City' },
];

const SearchTool = () => {
  return (
    <div className="search_container">
      <div className="search_item">
        <h4>Location</h4>
        <AutoComplete options={options} placeholder="Where are you going?" />
      </div>
      <div className="search_item">
        <h4>Check in</h4>
        <DatePicker format="DD-MM-YYYY" />
      </div>
      <div className="search_item">
        <h4>Check out</h4>
        <DatePicker format="DD-MM-YYYY" />
      </div>
      <div className="search_item" style={{ border: 'none' }}>
        <h4>Guests</h4>
        <InputNumber min={1} max={10} placeholder="Add guests" />
      </div>
      <div className="icon_search">
        <SearchOutlined
          style={{ fontSize: '30px', padding: '7px 14px', color: GRAY_1 }}
          onClick={() => {
            history.push('/search');
          }}
        />
      </div>
    </div>
  );
};

export default SearchTool;
