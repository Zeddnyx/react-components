import Animation from "pages/Animations";
import Notify from "pages/Notify";
import Pagination from "pages/Paginations";
import Scroll from "pages/Scroll";
import Form from "pages/Form";

export const data = [
  {
    title: "Form input",
    slug: "/form-input",
    image: "",
    element: Form,
    subtitle: [
      {
        title: "Form validation",
        id: "form-validation",
      },
      {
        title: "Form drag and drop multi",
        id: "form-drag-and-drop-multi",
      },
      {
        title: "Form input copy",
        id: "form-input-copy",
      },
      {
        title: "Form dropdown",
        id: "form-dropdown",
      },
    ],
  },
  {
    title: "Animation",
    slug: "/animations",
    image: "",
    element: Animation,
    subtitle: [],
  },
  {
    title: "Notify",
    slug: "/notify",
    image: "",
    element: Notify,
    subtitle: [],
  },
  {
    title: "Paginations",
    slug: "/paginations",
    image: "",
    element: Pagination,
    subtitle: [],
  },
  {
    title: "Scroll",
    slug: "/scroll",
    image: "",
    element: Scroll,
    subtitle: [],
  },
];
