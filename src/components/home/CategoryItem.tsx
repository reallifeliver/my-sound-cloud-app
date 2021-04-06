import * as React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import colors from '../../styles/colors';
interface Props {
  id: string;
  name: string;
  isSelected: boolean;
  onSelect: (id: string) => void;
}

const CategoryItem = ({ name, id, isSelected, onSelect }: Props) => {
  return (
    <TouchableOpacity
      style={{
        ...styles.categoryItem,
        backgroundColor: isSelected ? colors.G_600 : colors.G_400,
      }}
      activeOpacity={0.4}
      onPress={() => onSelect(id)}
    >
      <Text
        style={{
          ...styles.name,
          color: isSelected ? colors.G_100 : colors.G_900,
        }}
      >
        {name}
      </Text>
    </TouchableOpacity>
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
    backgroundColor: colors.G_400,
    borderRadius: 18,
  },
  name: {
    fontSize: 16,
    color: colors.G_800,
    fontWeight: 'bold',
  },
});

export default CategoryItem;
