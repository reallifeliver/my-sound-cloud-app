import * as React from 'react';
import { Image, StyleSheet } from 'react-native';

type ThumbnailSize = 's' | 'm' | 'l';

interface Props {
  size: ThumbnailSize;
  source: string;
}

const Thumbnail = ({ size, source }: Props) => {
  const style = styles[size];

  return <Image style={style} source={{ uri: source }} />;
};

const styles = StyleSheet.create<{ [key in ThumbnailSize]: any }>({
  s: {
    width: 80,
    height: 80,
    borderRadius: 3,
  },
  m: {
    width: 150,
    height: 150,
    borderRadius: 3,
  },
  l: {
    width: 180,
    height: 180,
    borderRadius: 8,
  },
});

export default Thumbnail;
