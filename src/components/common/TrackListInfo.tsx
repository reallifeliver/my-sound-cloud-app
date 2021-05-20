import * as React from 'react';
import { ViewStyle, TextStyle, StyleSheet, View, Text } from 'react-native';
import Section from './Section';
import Thumbnail from './Thumbnail';
import colors from '../../styles/colors';

interface Props {
  title: string;
  thumbnail: string;
  subTitle?: string;
}

const TrackListInfo = ({ title, thumbnail, subTitle }: Props) => {
  return (
    <Section style={styles.layout}>
      <Thumbnail source={thumbnail} size='m' />
      <View style={styles.info}>
        <View style={styles.titleArea}>
          <Text
            adjustsFontSizeToFit={true}
            numberOfLines={3}
            style={styles.title}
          >
            {title}
          </Text>
        </View>

        <Text
          style={styles.artist}
          adjustsFontSizeToFit={true}
          numberOfLines={2}
        >
          {subTitle}
        </Text>
      </View>
    </Section>
  );
};

interface Style {
  layout: ViewStyle;
  info: ViewStyle;
  titleArea: ViewStyle;
  title: TextStyle;
  artist: TextStyle;
  otherInfo: TextStyle;
}

const styles = StyleSheet.create<Style>({
  layout: {
    display: 'flex',
    flexDirection: 'row',
  },
  info: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    paddingLeft: 16,
  },
  titleArea: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    width: '100%',
    paddingBottom: 8,
  },
  artist: {
    fontSize: 20,
    color: colors.G_800,
    paddingBottom: 16,
  },
  otherInfo: {
    color: colors.G_700,
    paddingBottom: 8,
  },
});

export default TrackListInfo;
