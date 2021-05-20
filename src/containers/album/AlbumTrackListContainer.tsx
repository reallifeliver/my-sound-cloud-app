import * as React from 'react';
import Section from '../../components/common/Section';
import VerticalItemList from '../../components/common/VerticalItemList';
import { TrackObjectSimplified } from 'types/spotify';
import { useSelector, useDispatch } from 'react-redux';
import { albumTracksSelector } from '../../slice/root/albumSlice';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { Text } from 'react-native';
import { ContextMenuItem } from 'types/components';
import storage from '../../storage';

type Props = {
  thumbnail: string;
};
const AlbumTrackListContainer = ({ thumbnail }: Props) => {
  const { items } = useSelector(albumTracksSelector);
  const onSelectTrack = (item: TrackObjectSimplified) => {
    console.log(item.id);
  };

  const contextMenus: ContextMenuItem<TrackObjectSimplified>[] = [
    {
      title: 'Add PlayList',
      onPress: async (item: TrackObjectSimplified) => {
        await storage.playlist.addItem(item);
      },
    },
  ];

  return (
    <Section style={{ flex: 1 }}>
      <VerticalItemList<TrackObjectSimplified>
        items={items}
        getItemContent={(item) => ({
          title: item.name,
          subtitle: item.artists[0].name,
          thumbnail: thumbnail,
        })}
        onSelect={onSelectTrack}
        contextMenus={contextMenus}
      />
    </Section>
  );
};

export default AlbumTrackListContainer;
