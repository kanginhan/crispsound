import React, { useContext } from "react";
import Checkbox from "./Checkbox";
import context from "../../contexts";

const WidgetSelector = ({ children }) => {
  const { widget, dispatch } = useContext(context);
  const check = widget[children];

  const onClick = e => {
    dispatch.widget({ type: "TOGGLE", name: children });
  };

  return (
    <Checkbox check={check} onClick={onClick}>
      {children}
    </Checkbox>
  );
};

export default WidgetSelector;
