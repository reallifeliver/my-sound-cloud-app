import * as React from 'react';
import { AlbumObjectFull } from 'types/spotify';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import colors from '../../styles/colors';
interface Props {
  item: AlbumObjectFull;
  onPress: (id: string) => void;
}

const AlbumItem = ({ item, onPress }: Props) => {
  const { images, name, artists, id } = item;

  const [firstArtist, ...restArtists] = artists;
  const artistName =
    firstArtist.name +
    (restArtists.length > 0 ? ` 외 ${restArtists.length}명` : '');
  console.log(item);

  const handlePress = () => onPress(id);

  return (
    <View style={styles.wrapper}>
      <TouchableHighlight onPress={handlePress}>
        <Image style={styles.thumbnail} source={{ uri: images[0].url }}></Image>
      </TouchableHighlight>
      <View style={styles.footer}>
        <Text style={styles.albumName} numberOfLines={2}>
          {name}
        </Text>
        <Text style={styles.artistName}>{artistName}</Text>
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
  albumName: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.G_900,
  },
  artistName: {
    paddingTop: 4,
    color: colors.G_700,
    fontSize: 14,
  },
  thumbnail: {
    width: 150,
    height: 150,
    borderRadius: 3,
  },
});
export default AlbumItem;
