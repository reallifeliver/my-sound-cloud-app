import * as React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { AlbumObjectFull } from '../../types/spotify';
import colors from '../../styles/colors';
import ThumbnailItem from '../common/ThumnailItem';
import { getArtistSummary } from '../../utils/artist';

interface Props {
  onSelect: (id: string) => void;
  list: AlbumObjectFull[];
}

const NewReleaseAlbumList = ({ list, onSelect }: Props) => {
  return (
    <View style={styles.wrapper}>
      <FlatList<AlbumObjectFull>
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={list}
        renderItem={({ item }) => (
          <ThumbnailItem
            title={item.name}
            key={item.id}
            subTitle={getArtistSummary(item.artists)}
            thumbnail={item.images[0].url}
            onPress={() => onSelect(item.id)}
          />
        )}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    borderColor: colors.G_500, // FIXME
  },
});

export default NewReleaseAlbumList;
