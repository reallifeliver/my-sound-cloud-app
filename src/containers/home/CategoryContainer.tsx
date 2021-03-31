import * as React from 'react';
import { useEffect } from 'react';
import { View, Text } from 'react-native';
import { CategoryObject } from 'types/spotify';
import CategoryList from '../../components/home/CategoryList';
import { useSelector, useDispatch } from 'react-redux';
import {
  homeCategoryPlayListSelector,
  homeSelectedCategory,
} from '../../slice/homeSlice';
import { getHomeCategoryPlayList } from '../../slice/homeThunk';
interface Props {
  categories: CategoryObject[];
}

const CategoryContainer = ({ categories }: Props) => {
  console.log(categories);

  const categoryPlayList = useSelector(homeCategoryPlayListSelector);
  const selectedCategoryId = useSelector(homeSelectedCategory);
  const dispatch = useDispatch();
  const onSelectCategory = (id: string) => {
    dispatch(getHomeCategoryPlayList(id));
  };

  useEffect(() => {
    dispatch(getHomeCategoryPlayList('pop'));
  }, [categories]);
  console.log(categoryPlayList);

  return (
    <CategoryList
      items={categories}
      selectedId={selectedCategoryId}
      onSelect={onSelectCategory}
    />
  );
};

export default CategoryContainer;
