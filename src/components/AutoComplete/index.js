import Input from "../Input";
import classnames from "classnames";
import React from "react";
import { debounce } from "../../lib/debounce";

const AutoComplete = ({
  className,
  onChange = () => {},
  children,
  ...rest
}) => {
  return (
    <div className={classnames("w-full", className)}>
      <div className="w-full">
        <Input
          className="h-8 p-1 bg-gray-200 text-gray-900 rounded-sm"
          placeholder="Search"
          type="search"
          onChange={debounce((e) => onChange(e.target.value), 300)}
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
