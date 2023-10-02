import { useLocation, useNavigate } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi";

export default function Title() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const filter = pathname.split("/")[1].split("-").join(" ");

  return (
    <div className="mt-5">
      <button
        onClick={() => navigate("/")}
        className="flex gap-3 items-center capitalize"
      >
        <HiArrowLeft />
        <h3>All - {filter}</h3>
      </button>
    </div>
  );
}
