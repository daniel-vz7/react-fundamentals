function Input({ value, placeholder, onChange, type = 'text' }) {
  const handleChange = (event) => {
    event.persist();
    const value = parseInt(event.target.value);
    onChange(value);
  }
  return (
    <input
      placeholder={placeholder}
      type={type}
      className="input"
      onChange={handleChange}
      value={value}
      />
  );
}

export default Input;