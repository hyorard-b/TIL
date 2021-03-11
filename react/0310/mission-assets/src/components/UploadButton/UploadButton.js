import React from 'react';
import SVGIcon from 'components/Icon/Icon';
import Button from 'components/Button/Button';
import { getPublicURL } from 'utils';


export default class UploadButton extends React.Component {
  render() {
    const { icon, children, ...restProps } = this.props;
    return <Button {...restProps}>
      업로드
      <SVGIcon src={`${getPublicURL(icon)}`} alt={children || ''} />
    </Button>
  }
}