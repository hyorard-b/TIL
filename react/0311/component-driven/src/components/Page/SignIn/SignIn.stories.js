import SignIn from './SignIn';

export default {
  title: "COUPANG/Page/SignIn",
  component: SignIn,
  argTypes: {
    state: {
      control: {
        type: 'select',
        options: ['initialization', 'inputed', 'invalid']
      }
    }
  }
}

const Template = args => <SignIn {...args} />

export const Initialization = Template.bind({});
export const Inputed = Template.bind({});
export const Invalid = Template.bind({});

Initialization.args = {
  state: 'initialization'
};

Inputed.args = {
  state: 'inputed'
};

Invalid.args = {
  state: 'invalid'
};