function Input({ value, placeholder, onChange, type = 'text', fullWidth = false }) {
  const handleChange = (event) => {
    event.persist();
    const value = event.target.value;
    onChange(value);
  }
  return (
    <input
      placeholder={placeholder}
      type={type}
      className={`input ${fullWidth ? 'full-width' : ''}`}
      onChange={handleChange}
      value={value}
      />
  );
}

export default Input;