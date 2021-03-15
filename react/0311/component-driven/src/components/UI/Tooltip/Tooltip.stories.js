import Tooltip from './Tooltip';

export default {
  title: "COUPANG/UI/Tooltip",
  component: Tooltip,
  parameters: {
    docs: {
      description: {
        component: '자동 로그인 툴팁입니다.'
      }
    }
  },
  argTypes: {
    orientation: {
      control: {
        type:'select',
        options: ['top', 'right', 'bottom', 'left']
      }
    },
  }
}

const Template = args => <Tooltip {...args} />

export const top = Template.bind({});
export const right = Template.bind({});
export const left = Template.bind({});
export const bottom = Template.bind({});

top.args = {
  orientation: 'top',
  content: "개인 정보 보호를 위해 본인 기기에서만 이용해주세요"
};

right.args = {
  orientation: 'right',
  content: "개인 정보 보호를 위해 본인 기기에서만 이용해주세요"
}

left.args = {
  orientation: 'left',
  content: "개인 정보 보호를 위해 본인 기기에서만 이용해주세요"
}

bottom.args = {
  orientation: 'bottom',
  content: "개인 정보 보호를 위해 본인 기기에서만 이용해주세요"
};