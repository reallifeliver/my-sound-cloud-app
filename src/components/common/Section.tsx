import React from 'react';
import { ReactNode } from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import colors from '../../styles/colors';

interface Props {
  children: ReactNode;
  style?: ViewStyle;
}
const Section = ({ children, style = {} }: Props) => {
  return <View style={{ ...styles.section, ...style }}>{children}</View>;
};

const styles = StyleSheet.create({
  section: {
    padding: 16,
    backgroundColor: colors.G_0,
    marginBottom: 8,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: colors.G_500,
    shadowOpacity: 0.1,
  },
});

export default Section;
