import * as React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import colors from '../../styles/colors';
import Thumbnail from './Thumbnail';
interface Props {
  title: string;
  subTitle: string;
  thumbnail: string;
  onPress: () => void;
}

const ThumbnailItem = ({ title, subTitle, thumbnail, onPress }: Props) => {
  return (
    <View style={styles.wrapper}>
      <TouchableHighlight onPress={onPress}>
        <Thumbnail size='m' source={thumbnail} />
      </TouchableHighlight>
      <View style={styles.footer}>
        <Text style={styles.title} numberOfLines={2}>
          {title}
        </Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginRight: 8,
    width: 150,
  },
  footer: {
    paddingTop: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.G_900,
  },
  subTitle: {
    paddingTop: 4,
    color: colors.G_700,
    fontSize: 14,
  },
});
export default ThumbnailItem;
