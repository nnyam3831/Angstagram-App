import React, { useState } from "react";

const useInput = InitialValue => {
  const [value, setValue] = useState(InitialValue);
  const onChange = text => {
    setValue(text);
  };
  return { value, onChange };
};

export default useInput;
