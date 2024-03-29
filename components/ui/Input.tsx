interface inputProps {
  name: string;
  type: string;
  placeholder?: string;
  value?: string;
}

const Input = ({
  name,
  type,
  placeholder,
  value,
}: inputProps) => {
  return (
    <>
      <input
        className="w-full p-2 rounded-2xl"
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
      />
    </>
  );
};

export default Input;
