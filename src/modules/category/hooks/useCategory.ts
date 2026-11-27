import { useEffect, useState } from 'react';

import { URL_CATEGORY } from '../../../shared/constants/urls';
import { MethodsEnum } from '../../../shared/enums/methods.enum';
import { useRequests } from '../../../shared/hooks/useRequests';
import { useCategoryReducer } from '../../../store/reducers/categoryReducer/useCategoryReducer';
import type { CategoryType } from '../../../shared/types/CategoryType';

export const useCategory = () => {
  const { categories, setCategories } = useCategoryReducer();
  const currentCategories = categories ?? [];
  const [searchTerm, setSearchTerm] = useState('');
  const { request } = useRequests();

  useEffect(() => {
    if (!categories || categories.length === 0) {
      void request<CategoryType[]>(URL_CATEGORY, MethodsEnum.GET, (data) => {
        if (data && data.length > 0) {
          setCategories(data);
        }
      });
    }
  }, [categories, request, setCategories]);

  const normalizedSearchTerm = searchTerm.trim().toLocaleLowerCase();
  const categoriesFiltered = currentCategories.filter((category) =>
    category.name.toLocaleLowerCase().includes(normalizedSearchTerm),
  );

  const handleOnChangeSearch = (value: string) => {
    setSearchTerm(value);
  };

  return {
    categories: categoriesFiltered,
    handleOnChangeSearch,
  };
};
