import { ComponentMeta, ComponentStory } from '@storybook/react';
import { NumberInputComponent as CommonInput } from './index';

export default {
  title: 'atoms/NumberInput',
  component: CommonInput,
} as ComponentMeta<typeof CommonInput>;
const Template: ComponentStory<typeof CommonInput> = (args) => {
  return <CommonInput {...args} />;
};
export const commonInput = Template.bind({});
commonInput.args = {};
