import * as React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { CategoryObject } from 'types/spotify';
import CategoryItem from './CategoryItem';

interface Props {
  items: CategoryObject[];
  selectedId: string;
  onSelect: (id: string) => void;
}

const CategoryList = ({ items, selectedId, onSelect }: Props) => {
  return (
    <FlatList<CategoryObject>
      style={styles.list}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => (
        <CategoryItem
          key={item.id}
          id={item.id}
          name={item.name}
          onSelect={onSelect}
          isSelected={selectedId === item.id}
        />
      )}
      data={items}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    paddingTop: 8,
    paddingBottom: 8,
  },
});

export default CategoryList;
