import InputOtp from "./Otp";

export default function Index() {
  const handleChange = (value: string) => {
//     console.log(value);
  }

  return <InputOtp length={4} onChange={handleChange} />;
}
