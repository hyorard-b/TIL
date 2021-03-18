// import { heading, a } from './HomeLinkA.module.scss';

import Heading from 'components/Heading/Heading';
import LinkA from 'components/LinkA/LinkA';
import { node, number, object, oneOfType, string } from 'prop-types';

const HomeLinkA = ({ level, lang, href, className, style, children, headingProps, linkAProps, ...restProps }) => (
  <Heading level={level} lnag={lang} {...headingProps}>
    <LinkA href={href} {...linkAProps}>
      {children}
    </LinkA>
  </Heading>
);

HomeLinkA.defaultProps = {
  level: 1,
  lang: 'ko-KR',
  href: '/',
};

HomeLinkA.propTypes = {
  level: oneOfType([number, string]),
  lang: string,
  href: string,
  children: node,
  headingProps: object,
  linkAProps: object,
  style: object,
};

export default HomeLinkA;