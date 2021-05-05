import classnames from "classnames";

const Input = ({ className, ...props }) => {
  return (
    <input
      className={classnames("w-full h-6 border outline-none", className)}
      {...props}
    />
  );
};

export default Input;
