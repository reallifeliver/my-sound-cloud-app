import * as React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import AlbumItem from '../common/AlbumItem';
import { AlbumObjectFull } from '../../types/spotify';
import colors from '../../styles/colors';

interface Props {
  onSelectAlbum: (id: string) => void;
  list: AlbumObjectFull[];
}

const NewReleaseAlbumList = ({ list, onSelectAlbum }: Props) => {
  console.log('List');
  return (
    <View style={styles.wrapper}>
      <FlatList<AlbumObjectFull>
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={list}
        renderItem={({ item }) => (
          <AlbumItem item={item} key={item.id} onPress={onSelectAlbum} />
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
