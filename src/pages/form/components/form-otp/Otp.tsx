import { useEffect, useRef, useState } from "react";

interface IOtp {
  length: number;
  onChange: (value: string) => void;
}

let OTP_INDEX: number = 0;
export default function Otp({ length, onChange }: IOtp) {
  const [otp, setOtp] = useState<string[]>(new Array(length).fill(""));
  const [isIndex, setIsIndex] = useState(0);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const newOtp = [...otp];
    newOtp[OTP_INDEX] = value.substring(value.length - 1);

    if (!value) setIsIndex(OTP_INDEX - 1);
    else setIsIndex(OTP_INDEX + 1);

    setOtp(newOtp);
    onChange(value);
  };

  const handleKeyDown = ({ key }: { key: string }, id: number) => {
    OTP_INDEX = id;
    if (key === "Backspace") setIsIndex(OTP_INDEX - 1);
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [isIndex]);

  return (
    <>
      <div className="flex gap-2 w-full md:w-1/2 lg:w-1/4">
        {otp.map((_, id) => {
          return (
            <input
              ref={id === isIndex ? inputRef : null}
              key={id}
              type="number"
              value={otp[id]}
              onChange={handleChange}
              onKeyDown={(e) => handleKeyDown(e, id)}
              className={`font-bold text-center input ${id === isIndex
                  ? "border border-blue"
                  : "border border-gray_cool"
                }`}
            />
          );
        })}
      </div>
      {otp}
    </>
  );
}
