import Animation from "pages/animations/components/animation-scroll";
import AnimationsFade from "pages/animations/components/animation-fade";
import AnimationZoom from "pages/animations/components/animation-zoom";
import AnimationSlide from "pages/animations/components/animation-slide-down";

export const data = [
  {
    title: "Animation onRender",
    id: "animation",
    element: AnimationsFade,
  },
  {
    title: "Animation onZoom",
    id: "animation",
    element: AnimationZoom,
  },
  {
    title: "Animation onSlide",
    id: "animation",
    element: AnimationSlide,
  },
  {
    title: "Animation onScroll",
    id: "animation",
    element: Animation,
  },
];
