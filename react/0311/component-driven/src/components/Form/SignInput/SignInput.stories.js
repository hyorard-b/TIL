import SignInput from './SignInput'

export default {
  title: 'COUPANG/Form/SignInput',
  component: SignInput,
  parameters: {
    docs: {
      description: {
        component: '회원가입 인풋 컴포넌트입니다.'
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
        options: [true, false]
      }
    },
    hasError: {
      control: {
        type: 'select',
        options: [true, false]
      }
    },
    value: {
      control:{
        type: 'text'
      }
    }
  }
}

const Template = args => <SignInput {...args} />

export const NormalEmail = Template.bind({});
export const NormalPassword = Template.bind({});
export const InputedEmail = Template.bind({});
export const InputedPassword = Template.bind({});
export const InputedVisiblePassword = Template.bind({});
export const NormalErrorEmail = Template.bind({});
export const InputedErrorEmail = Template.bind({});
export const NormalErrorPassword = Template.bind({});
export const InputedErrorPassword = Template.bind({});
export const InputedVisibleErrorPassword = Template.bind({});

NormalEmail.args = {
  type: 'email',
  state: 'normal',
}

InputedEmail.args = {
  type: 'email',
  state: 'inputed',
  value: 'hyorard08@'
}

NormalErrorEmail.args = {
  type: 'email',
  state: 'normal',
  hasError: true
}

InputedErrorEmail.args = {
  type: 'email',
  state: 'inputed',
  hasError: true,
  value: 'hyorard08@'
}

NormalPassword.args = {
  type: 'password',
  state: 'normal',
}

InputedPassword.args = {
  type: 'password',
  state: 'inputed',
  value: 'this is password'
}

NormalErrorPassword.args = {
  type: 'password',
  state: 'normal',
  hasError: true
}

InputedErrorPassword.args = {
  type: 'password',
  state: 'inputed',
  hasError: true,
  value: 'this is password'
}

InputedVisibleErrorPassword.args = {
  type: 'password',
  state: 'inputed',
  visible: true,
  hasError: true,
  value: 'this is password'
}

InputedVisiblePassword.args = {
  type: 'password',
  state: 'inputed',
  visible: true,
  value: 'this is password'
}