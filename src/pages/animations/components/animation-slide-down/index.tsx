import { slideInDownAnimate } from "../Animations";

// TODO create a render button
export default function Index() {
  return (
    <div className="children">
      <div style={slideInDownAnimate("900ms")}>
        <h4>This title Slide in down</h4>
        <p>Also me Slide in down</p>
      </div>
    </div>
  );
}
