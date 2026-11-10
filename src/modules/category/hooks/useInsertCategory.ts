import React from 'react';
import { useState } from 'react';

export const useInsertCategory = () => {
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);

  const insertCategory = () => {
    setLoading(true);
  };

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  return {
    name,
    handleOnChange,
    insertCategory,
    loading,
  };
};
