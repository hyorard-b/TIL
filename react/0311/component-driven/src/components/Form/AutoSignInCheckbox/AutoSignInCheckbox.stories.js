import AutoSignInCheckbox from './AutoSignInCheckbox';

export default {
  title: "COUPANG/Form/AutoSignInCheckbox",
  component: AutoSignInCheckbox,
  argTypes: {
    checked: {
      type: "boolean"
    }
  }
}

const Template = args => <AutoSignInCheckbox {...args}/>

export const checkedAuto = Template.bind({});
export const unCheckedAuto = Template.bind({});

checkedAuto.args = {
  checked: true,
  disabled: false
}

unCheckedAuto.args = {
  checked: false,
  disabled: false
}