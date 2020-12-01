function Input({ type = 'text', id, placeholder = '', name = '', onChange, value, isValid }) {
  return (
    <input
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      className={`rounded-md bg-white border border-gray-200 text-sm shadow py-1 pl-2 w-28 ${
        !isValid && 'bg-red-300 border-red-300'
      }`}
      onChange={onChange}
      value={value}
    />
  );
}

export default Input;
