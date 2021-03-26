import React, { ReactNode } from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';
import Section from '../../components/common/Section';

interface Props {
  title: string;
  link: any;
  children: ReactNode;
}

const HomeContent = ({ title, link, children }: Props) => {
  return (
    <Section>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <Text onPress={() => {}}>more</Text>
      </View>
      <View style={styles.body}>{children}</View>
    </Section>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    letterSpacing: 1,
    paddingBottom: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  moreButton: {},
  body: {},
});

export default HomeContent;
