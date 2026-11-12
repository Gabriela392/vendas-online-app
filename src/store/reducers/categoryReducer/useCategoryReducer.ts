import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import type { CategoryType } from '../../../shared/types/CategoryType';
import { useAppSelector } from '../../hooks';
import { setCategoriesAction } from '.';

export const useCategoryReducer = () => {
  const dispatch = useDispatch();
  const { categories } = useAppSelector((state) => state.categoryReducer);

  const setCategories = useCallback(
    (categories: CategoryType[]) => {
      dispatch(setCategoriesAction(categories));
    },
    [dispatch],
  );

  return {
    categories,
    setCategories,
  };
};
