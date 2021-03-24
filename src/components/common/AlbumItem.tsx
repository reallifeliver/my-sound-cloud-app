import * as React from 'react';
import { AlbumObjectFull } from 'types/spotify';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
interface Props {
  item: AlbumObjectFull;
  onPress: (id: string) => void;
}

const AlbumItem = ({ item, onPress }: Props) => {
  const { images, name, artists, release_date } = item;

  const [firstArtist, ...restArtists] = artists;
  const artistName =
    firstArtist.name +
    (restArtists.length > 0 ? ` 외 ${restArtists.length}명` : '');
  console.log(item);
  return (
    <TouchableHighlight>
      <View style={styles.wrapper}>
        <Image style={styles.thumbnail} source={{ uri: images[0].url }}></Image>
        <View>
          <Text style={styles.albumName}>{name}</Text>
          <Text style={styles.artistName}>{artistName}</Text>
          <Text style={styles.releasedDate}>{release_date}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginRight: 16,
    width: 120,
  },
  albumName: {
    fontSize: 20,
  },
  artistName: {
    fontSize: 16,
  },
  releasedDate: {
    fontSize: 12,
  },
  thumbnail: {
    width: 120,
    height: 120,
    borderRadius: 3,
  },
});
export default AlbumItem;
