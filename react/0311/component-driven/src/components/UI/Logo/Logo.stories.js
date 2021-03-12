import Logo from './Logo'

export default {
  title: "COUPANG/UI/Logo",
  component: Logo,
  argTypes: {
    title: {
      description: '로고 이름 (스크린 리더에서 읽힘)',
      defaultValue: { summary: '쿠팡' },
    },
    type: {
      description: '로고 이름 (스크린 리더에서 읽힘)',
      defaultValue: { summary: 'color' },
      control: {
        type: 'select',
        options: ['colorful', 'mono', 'black']
      }
    }
  }
}

const Template = args => {
  return <Logo {...args} />
};

export const Colorful = Template.bind({})
export const Mono = Template.bind({})
export const Black = Template.bind({})

Colorful.args = { 
  title: '쿠팡', 
  type: 'colorful'
}

Mono.args = {
  title: '쿠팡',  
  type: 'mono'
}

Black.args = {
  title: '쿠팡',  
  type: 'black'
}
