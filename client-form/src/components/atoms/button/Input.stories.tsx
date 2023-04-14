import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ButtonComponent as CommonInput } from '../Button';

export default {
  title: 'atoms/Input',
  component: CommonInput,
} as ComponentMeta<typeof CommonInput>;
const Template: ComponentStory<typeof CommonInput> = (args) => {
  return <CommonInput {...args} />;
};
export const commonInput = Template.bind({});
commonInput.args = {};
