import { useState } from "react";

const useFormHook = (defaultValue) => {
  const [formField, setFormField] = useState(defaultValue);
  const handleOnChangeField = (e) => {
    setFormField(e.target.value);
  };
  return [formField, handleOnChangeField];
};

export default useFormHook;
