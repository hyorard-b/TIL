import './Button.scss'

const Button = ({ children, state, ...restProps }) => {
  // {className: 'baroon'}
  return (
    <button
      type="button"
      className={`button ${state ? `button--${state}` : ''}`.trim()}
      {...restProps}
    >
      {/* JSX는 반환하는 루트 요소는 반드시 1개여야 한다. React.Fragment, [] */}
      {children}
    </button>
  )
}

// 컴포넌트 기본 속성 정의
Button.defaultProps = {
  // className: 'button',
}

export default Button
