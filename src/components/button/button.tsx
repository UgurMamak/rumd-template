import './style/index.scss';

export interface IButton {
  text?: string;
  disabled?: boolean;
  readonly?: boolean;
  className?: string;
  children?: React.ReactNode;
  //onClick: () => {};
}

const Button = (props: IButton): JSX.Element => {
  const {
    className, text, children
  } = props;
  return (
    <button
      disabled={props.disabled}
      className={`rumd-button ${className ? className : ''}`}
    >
      {text ? text : ''}
      {children ? children : ''}
    </button>
  );
};

export default Button;
