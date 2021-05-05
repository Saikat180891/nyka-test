import Input from "../Input";
import classnames from "classnames";
import React from "react";

const AutoComplete = ({
  className,
  onChange = () => {},
  children,
  ...rest
}) => {
  const [value, setValue] = React.useState("");

  return (
    <div className={classnames("w-full", className)}>
      <div className="w-full">
        <Input
          className="h-8 p-1 bg-gray-200 text-gray-900 rounded-sm"
          placeholder="Search"
          type="search"
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
      <div className="relative">
        <ul className="flex flex-col p-0 m-0 absolute top-0 left-0 shadow">
          {typeof children === "function" ? children() : children}
        </ul>
      </div>
    </div>
  );
};

export default AutoComplete;
