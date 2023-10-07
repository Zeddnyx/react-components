import { fadeInAnimate } from "../Animations";

export default function Index() {
  return (
    <div className="children">
      <div style={fadeInAnimate("900ms")}>
        <h4>This title fade in</h4>
        <p>Also me fade in</p>
      </div>
    </div>
  );
}
