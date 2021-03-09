import { render, screen } from '@testing-library/react';
import App from './App';

// 첫 번째 테스트 케이스
test('앱이 정상 동작?', () => {
  // 컴포넌트 렌더링
  render(<App />);
  // 스크린 디버깅
  screen.debug();
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});

// 두 번째 테스트 케이스
test('learn react 텍스트를 가진 요소가 App 컴포넌트에 존재하는가?', () => {
  render(<App />)
  const linkElement = screen.getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()
});