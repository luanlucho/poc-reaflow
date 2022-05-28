// Interfaces and types from component Button

// Component Props
export interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  mode?: ButtonModes;
}

// Styled Component Props
export interface ButtonStyledProps {
  className: string;
  buttonMode: ButtonModes;
}

export enum ButtonModes {
  PRIMARY = "PRIMARY",
  SECONDARY = "SECONDARY"
}
