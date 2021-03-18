import { render, screen } from '@testing-library/react';
import Heading from './Heading';

// 스위트로 그룹화 ( describe )
// decribe(description, callback)
describe('Heading 컴포넌트', () => {

  //  테스트 케이스
  test('컴포넌트 렌더링은 정상적으로 구현되는가?', () => {
    // 컴포넌트 렌더링
    render(<Heading level={ 3 }></Heading>)
    // 스크린 디버깅
    screen.debug();
  })
  
})



