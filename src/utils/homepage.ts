import Animation from "pages/Animations";
import Modal from "pages/Modal";
import Pagination from "pages/Paginations";
import Slider from "pages/Slider";
import Form from "pages/Form";

//* icons
import { MdAnimation } from "react-icons/md";
import { AiOutlineForm } from "react-icons/ai";
import { PiSlideshowLight } from "react-icons/pi";
import { RiPagesLine } from "react-icons/ri";
import { SiPowerpages } from "react-icons/si";

export const data = [
  {
    title: "Form input",
    slug: "/form-input",
    image: "",
    element: Form,
    icons: AiOutlineForm
  },
  {
    title: "Animation",
    slug: "/animations",
    image: "",
    element: Animation,
    icons: MdAnimation
  },
  {
    title: "Modal",
    slug: "/modal",
    image: "",
    element: Modal,
    icons: SiPowerpages 
  },
  {
    title: "Paginations",
    slug: "/paginations",
    image: "",
    element: Pagination,
    icons: RiPagesLine
  },
  {
    title: "Slider",
    slug: "/slider",
    image: "",
    element: Slider,
    icons: PiSlideshowLight
  },
];
