import './style/index.scss';

export interface IBadge {
  text?: string;
  disabled?: boolean;
  readonly?: boolean;
  className?: string;
  children?: React.ReactNode;
  //onClick: () => {};
}

const Badge = (props: IBadge): JSX.Element => {
  const {
    className, text, children
  } = props;
  return (
    <div className={`rumd-badge ${className ? className : ''}`}>
      {text ? text : ''}
      {children ? children : ''}
    </div>
  );
};

export default Badge;
