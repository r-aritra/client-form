import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { SelectInput } from './index';

export default {
  title: 'atoms/SelectInput',
  component: SelectInput,
  argTypes: {},
} as ComponentMeta<typeof SelectInput>;
const Template: ComponentStory<typeof SelectInput> = (args) => (
  <SelectInput {...args} />
);
export const select = Template.bind({});
select.args = {
  optionList: [
    { label: 'Service', value: 'Service' },
    { label: 'Licence', value: 'Licence' },
  ],
};
