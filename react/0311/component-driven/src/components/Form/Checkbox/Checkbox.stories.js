import Checkbox from './Checkbox'

export default {
  title: "COUPANG/Form/Checkbox",
  component: Checkbox,
  parameters: {
    docs: {
      description: {
        component: '자동 로그인 체크박스입니다.'
      }
    }
  },
  argTypes: {
    checked: {
      type: 'boolean'
    },
    disabled: {
      type: 'boolean'
    }
  }
}

const Template = args => <Checkbox {...args} />

export const uncheckedBox = Template.bind({});
export const checkedBox = Template.bind({});
export const disabledCheckedBox = Template.bind({});

uncheckedBox.args = {
  checked: false,
  disabled: false
}

checkedBox.args = {
  checked: true,
  disabled: false
}

disabledCheckedBox.args = {
  checked: true,
  disabled: true
}