import { render, screen } from '@testing-library/react';
import LinkA from './LinkA';

describe('링크A 컴포넌트', () => {

  test('링크A 컴포넌트는 제대로 작동하는가?', () => {
  
    render(<LinkA href="/storage"/>);
    
    screen.debug();
  })
});