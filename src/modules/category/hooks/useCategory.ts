import { useEffect, useState } from 'react';

import { URL_CATEGORY } from '../../../shared/constants/urls';
import { MethodsEnum } from '../../../shared/enums/methods.enum';
import { useDataContext } from '../../../shared/hooks/useDataContext';
import { useRequests } from '../../../shared/hooks/useRequests';
import { bakeryCategoriesMock } from '../../product/mocks/categories.mock';
import type { CategoryType } from '../../../shared/types/CategoryType';

export const useCategory = () => {
  const { categories, setCategories } = useDataContext();
  const currentCategories =
    categories && categories.length > 0 ? categories : bakeryCategoriesMock;
  const [categoriesFiltered, setCategoriesFiltered] = useState(currentCategories);
  const { request } = useRequests();

  useEffect(() => {
    if (!categories || categories.length === 0) {
      request<CategoryType[]>(URL_CATEGORY, MethodsEnum.GET, (data) => {
        if (data && data.length > 0) {
          setCategories(data);
        } else {
          setCategories(bakeryCategoriesMock);
        }
      });
    }
  }, []);

  useEffect(() => {
    const list = categories && categories.length > 0 ? categories : bakeryCategoriesMock;
    setCategoriesFiltered([...list]);
  }, [categories]);

  const handleOnChangeSearch = (value: string) => {
    const list = categories && categories.length > 0 ? categories : bakeryCategoriesMock;
    if (!value) {
      setCategoriesFiltered([...list]);
    } else {
      setCategoriesFiltered([
        ...list.filter((category) =>
          category.name.toUpperCase().includes(value.toUpperCase()),
        ),
      ]);
    }
  };

  return {
    categories: categoriesFiltered,
    handleOnChangeSearch,
  };
};
