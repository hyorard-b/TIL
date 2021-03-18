import { heading, a } from './HomeLinkA.module.scss'

const HomeLinkA = ({ lang, href, className, style, children, ...restProps }) => (
  <h1 lang={lang} className={heading}>
    <a className={a} href={href}>
      {children}
    </a>
  </h1>
);

HomeLinkA.defaultProps = {
  lang: 'ko-KR',
  href: '/',
};

export default HomeLinkA;