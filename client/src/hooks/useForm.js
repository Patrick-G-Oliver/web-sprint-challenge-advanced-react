// write your custom hook here to control your checkout form
import { useState } from "react";

const useForm = (initialValues) => {
    const [inputValues, setInputValues] = useState(initialValues);

    const handleInputs = e => {
        setInputValues({
            ...inputValues,
            [e.target.name]: e.target.value
        });
    };
    return [inputValues, handleInputs];
};
  
export default useForm;