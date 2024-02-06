import '../../assets/theme/theme.scss';
import './style/index.scss';

export interface IButton {
  text?: string;
  disabled?: boolean;
  readonly?: boolean;
  className?: string;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = (props: IButton): JSX.Element => {
  const {
    className, text, children
  } = props;
  return (
    <button
      onClick={props.onClick}
      disabled={props.disabled}
      className={`rumd-button ${className ? className : ''}`}
    >
      {text ? text : ''}
      {children ? children : ''}
    </button>
  );
};

export default Button;
