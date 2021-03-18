import HomeLinkA from './HomeLinkA';

export default {
  title: "COUPANG/UI/HomeLinkA",
  component: HomeLinkA,
  argTypes: {
    
  }
  // args: {}
  // decorators: {}
  // parameters: {}
}

const Template = args => <HomeLinkA {...args} />;


export const Normal = Template.bind({});
export const ChangeLevel = Template.bind({});
export const ChangeLang = Template.bind({});

Normal.storyName = '홈 링크 (기본)';

ChangeLevel.args = {
  level: 4,
  children: '취직 좀 시켜줘요!'
};
ChangeLevel.storyName = '홈 링크 (레벨 4);'


ChangeLang.args = {
  lang: 'es',
  children: 'Deixa \'m aconseguir feina! por favor'
};
ChangeLang.storyName = '홈 링크 (스페인어 설정)'



