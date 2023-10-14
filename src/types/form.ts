export interface IInput {
  type: string;
  placeholder: string;
  label?: string;
  name?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onKeyUp?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  logo?: string;
  isDisabled?: boolean;
  isError?: string;
  className?: string;
  style?: React.CSSProperties;
}

export interface IDropdown {
  data: {
    id?: number;
    value: string;
    name: string;
  }[];
  select: string;
  setSelect: React.Dispatch<React.SetStateAction<string>>;
}

export interface IDragAndDropValidation {
  file: File;
  acceptedTypes: string[];
  fileSize: number;
}

export interface IFile {
  file: File;
  image: string;
  handleDelete: () => void;
}
export interface IFileView {
  file: File;
  image: string;
  handleDeleteId: (id: number) => void;
  id: number;
}

export interface ITable {
  data: {
    id: number;
    name: string;
    description: string;
  }[];
}
