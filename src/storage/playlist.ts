import Storage from 'react-native-storage';
import { TrackObjectSimplified } from '../types/spotify';

const PLAYLIST = 'playlist';

function setPlaylistStorage(storage: Storage) {
  return {
    addItem: async function (item: TrackObjectSimplified) {
      const data = await this.getList();
      await storage.save({
        key: PLAYLIST,
        data: [...data, item],
      });
    },
    addItems: async function (items: TrackObjectSimplified[]) {
      const data = await this.getList();
      await storage.save({
        key: PLAYLIST,
        data: [...data, ...items],
      });
    },
    deleteItem: async function (index: number) {
      try {
        const data: TrackObjectSimplified[] = await storage.load({
          key: PLAYLIST,
        });

        await storage.save({
          key: PLAYLIST,
          data: data.filter((_, i) => i !== index),
        });
      } catch (err) {
        console.error('No items');
      }
    },
    getList: async function () {
      try {
        const data: TrackObjectSimplified[] = await storage.load({
          key: PLAYLIST,
        });
        return data;
      } catch (err) {
        console.log('Init Playlist');
        return [];
      }
    },
  };
}

export default setPlaylistStorage;
