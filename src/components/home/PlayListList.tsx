import * as React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { PlaylistObjectSimplified } from '../../types/spotify';
import colors from '../../styles/colors';
import ThumbnailItem from '../common/ThumnailItem';

interface Props {
  onSelect: (id: string) => void;
  list: PlaylistObjectSimplified[];
}

const PlayListList = ({ list, onSelect }: Props) => {
  return (
    <View style={styles.wrapper}>
      <FlatList<PlaylistObjectSimplified>
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={list}
        renderItem={({ item }) => (
          <ThumbnailItem
            title={item.name}
            key={item.id}
            subTitle={`${item.tracks.total} 곡`}
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

export default PlayListList;
