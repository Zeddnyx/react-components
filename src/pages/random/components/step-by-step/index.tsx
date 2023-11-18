import { useState } from "react";

import Button from "./Button";
import StepNumber from "./StepNumber";
import Step from "./Step";

export default function Index() {
  const [currentStep, setCurrentStep] = useState(1);
  const [form, setForm] = useState({
    name: "",
    lastName: "",
    address: "",
    phone: "",
    email: "",
  });

  const { name, lastName, address, phone, email } = form;
  const disabled = !name || !lastName || !address || !phone || !email;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (name && lastName && address && phone && email) {
      console.log(form);
    }
  };

  const renderContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <Step
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            name="Name"
            type="text"
            valueSecond={form.lastName}
            onChangeSecond={(e) =>
              setForm({ ...form, lastName: e.target.value })
            }
            nameSecond="Last Name"
            typeSecond="text"
          />
        );
      case 2:
        return (
          <Step
            value={form.address}
            onChange={(e) => setForm({ ...form, address: e.target.value })}
            name="Address"
            type="text"
            valueSecond={form.phone}
            onChangeSecond={(e) => setForm({ ...form, phone: e.target.value })}
            nameSecond="Phone"
            typeSecond="text"
          />
        );
      case 3:
        return (
          <Step
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            name="Email"
            type="email"
            isValueSecond={false}
          />
        );
    }
  };

  const activeStep = (step: number) => {
    return currentStep - 1 === step || currentStep - 1 === step + 1;
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="grid grid-cols-5 place-items-center">
        <StepNumber id={1} current={currentStep} />
        <div className={`step ${activeStep(1) ? "bg-blue" : "bg-gray"}`}></div>
        <StepNumber id={2} current={currentStep} />
        <div className={`step ${activeStep(2) ? "bg-blue" : "bg-gray"}`}></div>
        <StepNumber id={3} current={currentStep} />
      </div>

      <form
        className="flex flex-col gap-5 px-2 md:px-14"
        onSubmit={handleSubmit}
      >
        <div className="h-36">{renderContent()}</div>
        <div className="flexBetween">
          <Button
            action="prev"
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
            isDisabled={currentStep === 1}
          />
          <div className="flex gap-2">
            <button
              className={`btn-blue ${disabled ? "opacity-50" : ""}`}
              type="submit"
              disabled={currentStep !== 3 && disabled}
            >
              submit
            </button>

            <Button
              action="next"
              currentStep={currentStep}
              setCurrentStep={setCurrentStep}
              isDisabled={currentStep === 3}
            />
          </div>
        </div>
      </form>
    </div>
  );
}
