const Input = (props) => {
  const { type, label, placeholder, name } = props;

  return (
    <input
      className="w-full w-[484px] h-[44px] border border-black rounded-md px-2"
      type={type}
      label={label}
      placeholder={placeholder}
      id={name}
      name={name}
    />
  );
};

export default Input;
