export default function CountControl({ onUpdate, step = 1, label, children }) {
  const updateCount = () => {
    if (children.includes('-')) step *= -1;
    onUpdate(step);
  }
  return (
    <button type="button" onClick={updateCount} aria-label={ label }>
      {children}
    </button>
  )
}