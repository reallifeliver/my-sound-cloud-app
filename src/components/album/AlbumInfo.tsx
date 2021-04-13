import * as React from 'react';
import { View, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import Thumbnail from '../common/Thumbnail';
import Section from '../common/Section';
import colors from '../../styles/colors';

interface Props {
  thumbnail: string;
  releasedAt: string;
  artist: string;
  trackCnt: number;
  albumTitle: string;
}

const AlbumInfo = ({
  artist,
  releasedAt,
  trackCnt,
  thumbnail,
  albumTitle,
}: Props) => {
  return (
    <Section style={styles.layout}>
      <Thumbnail source={thumbnail} size='l' />
      <View style={styles.info}>
        <View style={styles.titleArea}>
          <Text
            adjustsFontSizeToFit={true}
            numberOfLines={3}
            style={styles.title}
          >
            {albumTitle}
          </Text>
        </View>

        <Text
          style={styles.artist}
          adjustsFontSizeToFit={true}
          numberOfLines={2}
        >
          {artist}
        </Text>
        <Text style={styles.otherInfo}>{releasedAt}</Text>
        <Text style={styles.otherInfo}>{trackCnt} Tracks</Text>
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
    paddingLeft: 8,
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

export default AlbumInfo;
