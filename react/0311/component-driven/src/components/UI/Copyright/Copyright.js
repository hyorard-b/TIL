import { small } from './Copyright.module.scss';

const Copyright = ({}) => {
  
  return (
    <small lang="en" className={small}>
      &copy;Coupang Corp. All rights reserved.
    </small>
  )
};

Copyright.displayName = '저작권';

export default Copyright;