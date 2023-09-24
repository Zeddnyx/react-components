import FormValidation from "pages/Form/components/form-validation";
import FormDragAndDropMulti from "pages/Form/components/form-drag-and-drop-multi";
import FormDragAndDrop from "pages/Form/components/form-drag-and-drop";
import FormInputCopy from "pages/Form/components/form-input-copy";
import FormDropdown from "pages/Form/components/form-dropdown";
import FormDynamicAdd from "pages/Form/components/form-dynamic-add";

export const data = [
  {
    title: "Form validation",
    id: "form-validation",
    element: FormValidation,
  },
  {
    title: "Form drag and drop",
    id: "form-drag-and-drop",
    element: FormDragAndDrop,
  },
  {
    title: "Form drag and drop multi",
    id: "form-drag-and-drop-multi",
    element: FormDragAndDropMulti,
  },
  {
    title: "Form input copy",
    id: "form-input-copy",
    element: FormInputCopy,
  },
  {
    title: "Form dropdown",
    id: "form-dropdown",
    element: FormDropdown,
  },
  {
    title: "Form dynamic add",
    id: "form-dynamic-add",
    element: FormDynamicAdd,
  },
];