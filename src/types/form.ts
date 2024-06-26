export interface IInput {
  type?: string;
  placeholder: string;
  label?: string;
  name?: string;
  value: string|number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onKeyUp?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  logo?: string;
  isDisabled?: boolean;
  isError?: string;
  className?: string;
  style?: React.CSSProperties;
}

export interface IDropdown {
  options: {
    id?: number;
    value: string;
    label: string;
  }[];
  select: string;
  setSelect: React.Dispatch<React.SetStateAction<string>>;
  onChange: (e: string) => void;
}

export interface IFileDrag {
  multiple: boolean;
  acceptType: string[];
  maxSize: number;
  file: File[];
  setFile: React.Dispatch<React.SetStateAction<File[]>>;
}

export interface IFileValidation {
  file: File;
  acceptType: string[];
  maxSize: number;
}

export interface IFileView {
  file: File;
  image: string;
  handleDelete: (id: number) => void;
  id: number;
  acceptType: string[];
  maxSize: number;
}

export interface ITable {
  data: {
    id: number;
    name: string;
    description: string;
  }[];
}
