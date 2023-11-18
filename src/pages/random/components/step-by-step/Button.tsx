export default function Button({
  action,
  currentStep,
  setCurrentStep,
  isDisabled,
}: {
  action: "next" | "prev";
  currentStep: number;
  setCurrentStep: (value: number) => void;
  isDisabled?: boolean;
}) {
  const handleActionn = (action: "next" | "prev") => {
    if (action === "next") {
      setCurrentStep(currentStep + 1);
    } else {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div>
      <button
        disabled={isDisabled}
        type="button"
        onClick={() => handleActionn(action)}
        className={`flex items-center justify-center w-20 h-10 text-white rounded 
        ${action == "next" ? "bg-blue animate" : "bg-gray animate"}
        ${currentStep === 1 && action === "prev" ? "opacity-50" : ""}
        ${currentStep === 3 && action === "next" ? "opacity-50" : ""}`}
      >
        {action}
      </button>
    </div>
  );
}
