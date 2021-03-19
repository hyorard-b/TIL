const Button = ({ counter, updateCounter, children, ...restProps }) => {
  const handleCounter = () => {
    children === '+' ? updateCounter(++counter) : updateCounter(--counter);
  }

  return (
    <button onClick={handleCounter}>{children}</button>
  )
};

export default Button;