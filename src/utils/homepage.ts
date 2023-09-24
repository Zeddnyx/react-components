import Animation from "pages/Animations";
import Modal from "pages/Modal";
import Pagination from "pages/Paginations";
import Scroll from "pages/Scroll";
import Form from "pages/Form";

//* subtitle list
import { data as form } from "./list-form";
import { data as animation} from "./list-animation";
import { data as modal } from "./list-modal";
import { data as pagination} from "./list-pagination";
import { data as scroll} from "./list-scroll";

export const data = [
  {
    title: "Form input",
    slug: "/form-input",
    image: "",
    element: Form,
    subtitle: form,
  },
  {
    title: "Animation",
    slug: "/animations",
    image: "",
    element: Animation,
    subtitle: animation,
  },
  {
    title: "Modal",
    slug: "/modal",
    image: "",
    element: Modal,
    subtitle: modal,
  },
  {
    title: "Paginations",
    slug: "/paginations",
    image: "",
    element: Pagination,
    subtitle: pagination,
  },
  {
    title: "Scroll",
    slug: "/scroll",
    image: "",
    element: Scroll,
    subtitle: scroll,
  },
];
