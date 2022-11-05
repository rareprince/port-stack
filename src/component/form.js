import React, { useState } from 'react';
 

export default function useForm(initial = {}) {
  //set state to allow for input
  const [input, setInput] = useState(initial);

  function handleChange(event) {
    let { value, name, type } = event.target;
    if (type === 'number') {
      value = parseInt(value);
    }
    setInput({ ...input, [name]: value });
  }

  function resetForm(){
    setInput(initial);
  }
  
  function clearForm() {
    const blankState = Object.fromEntries(
      Object.entries(input).map(([key]) => [key, ''])
    );
    setInput(blankState);
    return { input, handleChange, resetForm, clearForm };
  }
}

 