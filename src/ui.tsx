import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client';
import { useState } from 'react';
import './ui.css'
import { ThemeProvider } from '@zendeskgarden/react-theming';
import { Dropdown, Field, Menu, Item, Select, Label } from '@zendeskgarden/react-dropdowns';
import { Button } from '@zendeskgarden/react-buttons';
import { Row, Col } from '@zendeskgarden/react-grid';
import styled from 'styled-components';

import FormGeneric from './formGeneric'
import FormTheme from './formTheme'

interface IItem {
  label: string;
  value: string;
}

const items = [
  { label: 'Exploration', value: 'Exploration' },
  { label: 'Product spec', value: 'Product' },
  { label: 'Library', value: 'Library' },
  { label: 'Theme', value: 'Theme' }
];

const App = () => {
  const [selectedItem, setSelectedItem] = useState(items[0]);
  function handleSubmit(e) {
    e.preventDefault();
    console.log('You clicked submit.');
  }

  function resize(height: number) {
    parent.postMessage({ pluginMessage: { type: 'resize', height: height } }, '*');
  }

  return (
    <ThemeProvider>
      <form onSubmit={handleSubmit}>
        <Row>
          <Col>
            <Dropdown
              selectedItem={selectedItem}
              onSelect={ selectedItem => {
                  setSelectedItem(selectedItem)
                  switch (selectedItem.value){
                    case 'Theme':
                      // resize(624)
                      break
                    default:
                      // resize(330)
                      break
                  }
                }
              }
              downshiftProps={{ itemToString: (item: IItem) => item && item.label }}
            >
              <Field>
                <Label>Project type</Label>
                <Select>{selectedItem.label}</Select>
              </Field>
              <Menu>
                {items.map(option => (
                  <Item key={option.value} value={option}>
                    {option.label}
                  </Item>
                ))}
              </Menu>
            </Dropdown>
          </Col>
        </Row>
        {selectedItem.value == 'Theme' ? <FormTheme /> : <FormGeneric projectType={selectedItem.value}/>}
      </form>
    </ThemeProvider>
  );
};

const container = document.getElementById('react-page');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);