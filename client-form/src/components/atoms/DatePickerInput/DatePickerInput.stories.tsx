import { ComponentMeta, ComponentStory } from '@storybook/react';
import { DatePickerInput } from './index';

export default {
  title: 'atoms/DatePickerInput',
  component: DatePickerInput,
} as ComponentMeta<typeof DatePickerInput>;
const Template: ComponentStory<typeof DatePickerInput> = (args) => {
  return <DatePickerInput {...args} />;
};
export const commonInput = Template.bind({});
commonInput.args = {
  placeholder: 'Select Date',
};
