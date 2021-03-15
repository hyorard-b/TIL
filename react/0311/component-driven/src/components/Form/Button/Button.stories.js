import Button from './Button'

export default {
  title: 'COUPANG/Form/Button',
  component: Button
}

// 스토리 컴포넌트 템플릿
const Template = (args) => {
  return <Button {...args} />
}

export const Primary = Template.bind({});
export const PrimaryDisabled = Template.bind({});
export const Secondary = Template.bind({});
export const SecondaryDisabled = Template.bind({});


Primary.args = {
  content: '버튼',
  state: 'primary',
  disabled: false
}

PrimaryDisabled.args = {
  content: '버튼',
  state: 'primary',
  disabled: true
}

Secondary.args = {
  content: '버튼',
  state: 'secondary',
  disabled: false
}

SecondaryDisabled.args = {
  content: '버튼',
  state: 'secondary',
  disabled: true
}



// export const Primary = () => <Button>안녕 스토리북 😇</Button>