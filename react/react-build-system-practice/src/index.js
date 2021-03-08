import {createElement as h} from 'react';
import {render} from 'react-dom';

const iconElement = h(
  'img',
  {
    alt: '',
    src: '/assets/icons/spinner.svg',
    key: 'child-kwfdw',
    height: 12,
  }
)

const buttonElement = h(
  'button',
  {
    type: 'button',
    className: 'button button__upload button--pending',
    onClick(e) {
      console.log(e.target)
    }
  },
  '업로드 중',
  iconElement
)

const rootNode = document.getElementById('root');
render(buttonElement, rootNode);