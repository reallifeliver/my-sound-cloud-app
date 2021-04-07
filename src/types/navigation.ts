import { StackNavigationProp } from '@react-navigation/stack';

export type MainTabParamList = {
  Home: {
    test: string;
  };
  PlayList: undefined;
  MusicList: undefined;
};

export type RootStackParamList = {
  Main: undefined;
  Album: undefined;
};
