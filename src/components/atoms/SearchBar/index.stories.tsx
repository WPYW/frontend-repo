import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SearchBar } from './index';

export default {
  title: 'atoms/SearchBar',
  component: SearchBar,
} as ComponentMeta<typeof SearchBar>;

const Template: ComponentStory<typeof SearchBar> = (args) => {
  const [value, setValue] = useState('');
  return <SearchBar value={value} onChange={(event) => setValue(event.target.value)} {...args} />;
};

export const DefaultSearchBar = Template.bind({});
DefaultSearchBar.args = {
  placeholder: '입력해주세요',
};
