import FormValidation from "pages/form/components/form-validation";
import FormDragAndDropMulti from "pages/form/components/form-drag-and-drop-multi";
import FormDragAndDrop from "pages/form/components/form-drag-and-drop";
import FormInputCopy from "pages/form/components/form-input-copy";
import FormDropdown from "pages/form/components/form-dropdown";
import FormDropdownHover from "pages/form/components/form-dropdown-hover";
import FormDynamicAdd from "pages/form/components/form-dynamic-add";
import FormInputTag from "pages/form/components/form-input-tag";

export const data = [
  {
    title: "Form validation",
    id: "form-validation",
    element: FormValidation,
  },
  {
    title: "Form drag and drop file",
    id: "form-drag-and-drop",
    element: FormDragAndDrop,
  },
  {
    title: "Form drag and drop multi file",
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
    title: "Form dropdown hover",
    id: "form-dropdown-hover",
    element: FormDropdownHover,
  },
  {
    title: "Form dynamic add",
    id: "form-dynamic-add",
    element: FormDynamicAdd,
  },
  {
    title: "Form Input Tag",
    id: "form-input-tag",
    element: FormInputTag,
  },
];
