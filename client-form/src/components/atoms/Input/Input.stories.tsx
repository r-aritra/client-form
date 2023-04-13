import { ComponentMeta, ComponentStory } from '@storybook/react';
import { InputComponent as CommonInput } from './index';

export default {
  title: 'atoms/Input',
  component: CommonInput,
} as ComponentMeta<typeof CommonInput>;
const Template: ComponentStory<typeof CommonInput> = (args) => {
  return <CommonInput {...args} />;
};
export const commonInput = Template.bind({});
commonInput.args = {};
