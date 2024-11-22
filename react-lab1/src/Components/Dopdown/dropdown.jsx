import React from 'react';
import { Dropdown } from 'react-bootstrap';

const MyDropdown = () => (
  <Dropdown>
    <Dropdown.Toggle variant="success" id="dropdown-basic">
      Dropdown Button
    </Dropdown.Toggle>

    <Dropdown.Menu>
      <Dropdown.Item href="#/action-1">Русский</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Eng</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
);

export default MyDropdown;