import * as React from 'react';
import { Text, TouchableHighlight, StyleSheet } from 'react-native';
interface Props {
  id: string;
  name: string;
  isSelected: boolean;
  onSelect: (id: string) => void;
}

const CategoryItem = ({ name, id, isSelected, onSelect }: Props) => {
  return (
    <TouchableHighlight
      style={styles.categoryItem}
      activeOpacity={0.4}
      onPress={() => onSelect(id)}
    >
      <Text style={styles.name}>{name}</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  categoryItem: {
    display: 'flex',
    marginRight: 16,
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 8,
    paddingBottom: 8,
    backgroundColor: '#ccc',
    borderRadius: 18,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CategoryItem;
