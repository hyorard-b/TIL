import {render, screen} from '@testing-library/react'
import Icon from './Icon';

describe('Icon', () => {
  test('Icon 컴포넌트의 렌더링 된 결과를 확인하겠다.', () => {
    const src = `${process.env.PUBLIC_URL}/assets/icon/spinner.svg`
    const alt = ''
    const className = 'iconSpinner'
    render(<Icon src={src} alt={alt} className={className} aria-label="로딩 중.."/>)
  
    screen.debug();
  })
});