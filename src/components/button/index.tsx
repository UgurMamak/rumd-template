import './style/index.scss';

interface IButton {
  text?: string;
  disabled?: boolean;
  readonly?: boolean;
  className?: string;
  children?: React.ReactNode;
}

const Button = (props: IButton): JSX.Element => {
  return (
    <button
      disabled={props.disabled}
      className={`rumd-button ${props.className}`}
    >
      {props.children}
    </button>
  );
};

export default Button;