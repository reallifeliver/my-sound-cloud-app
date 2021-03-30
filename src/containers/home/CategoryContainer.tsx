import * as React from 'react';
import { View, Text } from 'react-native';
import { CategoryObject } from 'types/spotify';
import CategoryList from '../../components/home/CategoryList';
interface Props {
  categories: CategoryObject[];
}

const CategoryContainer = ({ categories }: Props) => {
  const onSelectCategory = (id: string) => {
    console.log(id);
  };

  return (
    <CategoryList
      items={categories}
      selectedId={'id'}
      onSelect={onSelectCategory}
    />
  );
};

export default CategoryContainer;
