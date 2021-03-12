import Icon from './Icon'

export default {
  title: 'COUPANG/UI/Icon',
  Component: Icon,
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['show', 'hide', 'password', 'email']
      }
    }
  }
}

const Template = (args) => {
  return <Icon {...args} />
};

export const Email = Template.bind({});
export const Password = Template.bind({});
export const Hide = Template.bind({});
export const Show = Template.bind({});

Email.args = {
  type: 'email'
}

Password.args = {
  type: 'password'
}

Hide.args = {
  type: 'hide'
}

Show.args = {
  type: 'show'
}