function Input({ value, placeholder, onChange }) {
  const handleChange = (event) => {
    event.persist();
    onChange(event.target.value);
  }
  return (
    <input placeholder={placeholder} type="text" className="input" onChange={handleChange} value={value}/>
  );
}

export default Input;