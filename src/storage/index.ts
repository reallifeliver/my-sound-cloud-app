import Storage from 'react-native-storage';
import AsyncStorage from '@react-native-community/async-storage';
import setPlaylistStorage from './playlist';

const instance = new Storage({
  size: 1000,
  storageBackend: AsyncStorage,
  defaultExpires: 1000 * 3600 * 24,
  enableCache: true,
  sync: {
    // we'll talk about the details later.
  },
});

const storage = {
  playlist: setPlaylistStorage(instance),
};

export default storage;
