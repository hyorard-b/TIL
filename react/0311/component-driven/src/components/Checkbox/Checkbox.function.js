export default function Checkbox({ id, label, checked, onChange, ...restProps}) {
  return (
      <>
        <input type="checkbox" name={id} id={id} checked={checked}
          onChange={onChange}
        />
        <label htmlFor={id}>{label}</label>
      </>
    )
}