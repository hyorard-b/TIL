import {createElement} from 'react';
import './Btn.css';

const renderButton = ({state, text, path, disabled = false}) => {
  const btn = createElement(
    'button',
    {
      className: `button button__upload button--${state}`,
      disabled: disabled,
    },
    text,
    createElement(
      'img',
      {
        src: `./assets/${path}.svg`,
        
        alt: ' ',
        height: 12
      }
    )
  );

  return btn;
};

export default renderButton;