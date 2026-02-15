import { useState } from "react";

const useInputHook = (defaultValue) => {
  const [fieldValue, setFieldValue] = useState(defaultValue);

  const handleValueOnChange = (e) => {
    setFieldValue(e.target.value);
  };
  return [fieldValue, handleValueOnChange];
};

export default useInputHook;
