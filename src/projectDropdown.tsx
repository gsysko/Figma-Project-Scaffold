import * as React from 'react';
import { useState } from 'react';
import { Dropdown, Field, Menu, Item, Select, Label } from '@zendeskgarden/react-dropdowns';

interface IItem {
  label: string;
  value: string;
}

const items = [
  { label: 'Exploration', value: 'exploration' },
  { label: 'Product', value: 'product' },
  { label: 'Library', value: 'library' },
  { label: 'Theme', value: 'theme' }
];

const ProjectDropdown = () => {
  const [selectedItem, setSelectedItem] = useState(items[0]);

  return (
    <Dropdown
      selectedItem={selectedItem}
      onSelect={setSelectedItem}
      downshiftProps={{ itemToString: (item: IItem) => item && item.label }}
    >
      <Field>
        <Label>Type</Label>
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
  );
};

export default ProjectDropdown;