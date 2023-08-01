import { useMouse } from "~/hooks/useMouse";

export default function App() {
  const { x, y } = useMouse();
  return (
    <div>
      <h2>Mouse Tract Section</h2>
      <p>X position is {x || "null"}</p>
      <p>X position is {y || "null"}</p>
    </div>
  );
}
