import Input from './Input'

export default {
  title: 'COUPANG/Form/Input',
  component: Input,
  parameters: {
    docs: {
      description: {
        component: '인풋 컴포넌트입니다.'
      }
    }
  },
  argTypes: {
    type: {
      control: {
        type:'select',
        options: ['email', 'password']
      }
    },
    state: {
      control: {
        type:'select',
        options: ['normal', 'inputed']
      }
    },
    visible: {
      control: {
        type: 'select',
        options: ['default', 'true', 'false']
      }
    },
    text: {
      control:{
        type: 'text'
      }
    }
  }
}

const Template = args => <Input {...args}></Input>

export const NormalEmail = Template.bind({});
export const InputedEmail = Template.bind({});
export const NormalPassword = Template.bind({});
export const InputedPassword = Template.bind({});
export const InputedPasswordVisible = Template.bind({});

NormalEmail.args = {
  type: 'email',
  state: 'normal',
  visible: 'default'
}

InputedEmail.args = {
  type: 'email',
  state: 'inputed',
  visible: 'default',
  text: 'hyorard08@'
}

NormalPassword.args = {
  type: 'password',
  state: 'normal',
  visible: 'default'
}

InputedPassword.args = {
  type: 'password',
  state: 'inputed',
  visible: 'false',
  text: 'best midfielder'
}

InputedPasswordVisible.args = {
  type: 'password',
  state: 'inputed',
  visible: 'true',
  text: 'best midfielder'
}