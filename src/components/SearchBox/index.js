import React, { useEffect, useState } from "react";
import { Dropdown, Menu } from 'antd';
import { apiURL } from 'config';

const SearchBox = ({styleName, onChange, value, selectOption}) => {
  const [fetching, setFetching] = useState(false);
  const [options, setOptions] = useState(<></>);

  function onInput(e) {
    if (e.target.value.length > 2) {
      setFetching(true);
      fetchOptions(e.target.value).then((newOptions) => {
        if (newOptions.length > 0) {
          let tempOptions = (
            <Menu>
              {newOptions.map((option, index) =>
                <Menu.Item key={index} onClick={() => selectOption(option.value)}>{option.label}</Menu.Item>
              )}
            </Menu>
          );
          setOptions(tempOptions);
        } else {
          setOptions(<></>);
        }
        setFetching(false);
      })
    } else {
      setOptions(<></>);
    }
  }

  async function fetchOptions(text) {
    return fetch(`${apiURL}options?text=${text}`)
      .then((response) => response.json())
      .then((body) =>
        body.results.map((result) => ({
          label: `${result.name} ${result.description}`,
          value: result.name,
        })),
      );
  }

  return (
    <div className={`gx-search-bar ${styleName}`}>
      <div className="gx-form-group">
      <Dropdown overlay={options}>
      <input className="ant-input" type="search" onChange={onChange}
              onInput={onInput} value={value}/>
      </Dropdown>
        <span className="gx-search-icon gx-pointer"><i className="icon icon-search"/></span>
      </div>
    </div>
  )
};
export default SearchBox;

SearchBox.defaultProps = {
  styleName: "",
  value: "",
};