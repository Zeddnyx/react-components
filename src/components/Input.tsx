import { memo } from "react";

interface IInput {
  type: string;
  placeholder: string;
  label?: string;
  name?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  logo?: string;
  isDisabled?: boolean;
  isError?: string;
}

function Input({
  type,
  placeholder,
  label,
  name,
  value,
  onChange,
  logo,
  isDisabled = false,
  isError,
}: IInput) {
  return (
    <div className="relative flex flex-col gap-1">
      <label htmlFor={name}>{label}</label>
      <div className="relative flex items-center">
        {logo && (
          <img src={logo} alt="input logo" className="w-4 h-4 absolute ml-2" />
        )}
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
          disabled={isDisabled}
          className={`${logo && "pl-7"} input`}
        />
      </div>
      <p className="error-input">{isError}</p>
    </div>
  );
}

export default memo(Input);
