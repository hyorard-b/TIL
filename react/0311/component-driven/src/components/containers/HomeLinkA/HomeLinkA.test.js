import { render, screen } from '@testing-library/react';
import HomeLinkA from './HomeLinkA';

describe('HomeLinkA 컴포넌트', () => {
  test('HomeLinkA 컴포넌트는 제대로 작동하는가?', () => {
    render(<HomeLinkA></HomeLinkA>);

    screen.debug();
  });
});