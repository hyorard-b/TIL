// <button type="button" className="button button__upload button--idle">
// 자식 주입
// </button>

const Button = ({children, className, ...restProps}) => {
  return (
  <button
    type="button"
    className={`button ${className}`.trim()}
    {...restProps}
  >
    {children}
  </button>
  )
};