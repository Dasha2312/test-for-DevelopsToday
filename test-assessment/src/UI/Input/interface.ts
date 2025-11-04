
export interface IInput {
  typeInput?: string;
  isClearable?: boolean;
  placeholderInput?: string
}

export interface IPasswordToggle {
  isVisible: boolean;
  onTogglePassword: () => void;
}