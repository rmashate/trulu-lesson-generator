import { useState } from 'react';

const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e, onSubmit) => {
    e.preventDefault();
    onSubmit(values);
    setValues(initialValues);
  };

  return [values, handleChange, handleSubmit];
};

export default useForm;