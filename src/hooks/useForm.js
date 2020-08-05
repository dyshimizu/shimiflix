import { useState } from 'react';

function useForm(initialCategoryValues) {
  const [category, setCategory] = useState(initialCategoryValues);

  function handleChange(e) {
    const chave = e.target.getAttribute('name');
    const { value } = e.target;

    setCategory({
      ...category,
      [chave]: value,
    });
  }

  function clearForm() {
    setCategory(initialCategoryValues);
  }
  return {
    category,
    setCategory,
    handleChange,
    clearForm,
  };
}

export default useForm;
