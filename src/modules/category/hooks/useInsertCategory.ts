import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { URL_CATEGORY } from '../../../shared/constants/urls';
import { MethodsEnum } from '../../../shared/enums/methods.enum';
import { useRequests } from '../../../shared/hooks/useRequests';
import type { CategoryType } from '../../../shared/types/CategoryType';
import { useCategoryReducer } from '../../../store/reducers/categoryReducer/useCategoryReducer';
import { CategoryRoutesEnum } from '../routes';

export const useInsertCategory = () => {
  const [name, setName] = useState('');
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { request } = useRequests();
  const { setCategories } = useCategoryReducer();
  const disabledButton = !name.trim();

  const insertCategory = async () => {
    const categoryName = name.trim();
    if (!categoryName || loading) {
      return;
    }

    setLoading(true);
    try {
      const createdCategory = await request<CategoryType>(
        URL_CATEGORY,
        MethodsEnum.POST,
        undefined,
        { name: categoryName },
      );
      if (!createdCategory) {
        return;
      }

      await request<CategoryType[]>(
        URL_CATEGORY,
        MethodsEnum.GET,
        setCategories,
      );
      navigate(CategoryRoutesEnum.CATEGORY);
    } finally {
      setLoading(false);
    }
  };

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  return {
    name,
    disabledButton,
    handleOnChange,
    insertCategory,
    loading,
  };
};
