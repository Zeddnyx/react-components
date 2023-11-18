import Animation from "pages/animations";
import Modal from "pages/modal";
import Pagination from "pages/paginations";
import Slider from "pages/slider";
import Form from "pages/form";
import DnD from "pages/dnd";
import Random from "pages/random";

//* icons
import { MdAnimation } from "react-icons/md";
import { AiOutlineForm } from "react-icons/ai";
import { PiSlideshowLight } from "react-icons/pi";
import { RiPagesLine } from "react-icons/ri";
import { SiPowerpages } from "react-icons/si";
import { BsLayersHalf,BsCardHeading } from "react-icons/bs";


export const data = [
  {
    title: "Form input",
    slug: "/form-input",
    image: "",
    element: Form,
    icons: AiOutlineForm,
  },
  {
    title: "Animation",
    slug: "/animations",
    image: "",
    element: Animation,
    icons: MdAnimation,
  },
  {
    title: "Modal",
    slug: "/modal",
    image: "",
    element: Modal,
    icons: BsLayersHalf,
  },
  {
    title: "Paginations",
    slug: "/paginations",
    image: "",
    element: Pagination,
    icons: RiPagesLine,
  },
  {
    title: "Slider",
    slug: "/slider",
    image: "",
    element: Slider,
    icons: PiSlideshowLight,
  },
  {
    title: "Drag and drop",
    slug: "/dnd",
    image: "",
    element: DnD,
    icons: SiPowerpages,
  },
  {
    title: "Random",
    slug: "/random",
    image: "",
    element: Random,
    icons: BsCardHeading,
  }
];
