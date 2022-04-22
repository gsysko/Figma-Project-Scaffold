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

import { FormExploration } from './formExploration'
import FormTheme from './formTheme'

// declare function require(path: string): any

// class App extends React.Component {
//   textbox: HTMLInputElement

//   countRef = (element: HTMLInputElement) => {
//     if (element) element.value = '5'
//     this.textbox = element
//   }

//   onCreate = () => {
//     const count = parseInt(this.textbox.value, 10)
//     parent.postMessage({ pluginMessage: { type: 'create-rectangles', count } }, '*')
//   }

//   onCancel = () => {
//     parent.postMessage({ pluginMessage: { type: 'cancel' } }, '*')
//   }

//   render() {
//     return <ThemeProvider>
//     <FormProject />
//   </ThemeProvider>;
//   }
// }

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

  return (
    <ThemeProvider>
      <form onSubmit={handleSubmit}>
        <Row>
          <Col>
            <Dropdown
              selectedItem={selectedItem}
              onSelect={setSelectedItem}
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
        {selectedItem.value == 'theme' ? <FormTheme /> : <FormExploration projectType={selectedItem.value}/>}
      </form>
    </ThemeProvider>
  );
};

const container = document.getElementById('react-page');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);