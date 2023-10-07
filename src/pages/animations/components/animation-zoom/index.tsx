import { zoomInAnimate } from "../Animations";

export default function Index() {
  return (
    <div className="children">
      <div style={zoomInAnimate("900ms")}>
        <h4>This title Zoom in</h4>
        <p>Also me Zoom in</p>
      </div>
    </div>
  );
}
