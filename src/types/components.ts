export type VerticalItemContent = {
  title: string;
  subtitle: string;
  thumbnail: string;
  key?: string | number;
};

export type ContextMenuItem<T> = {
  title: string;
  onPress: (item: T) => void;
  icon?: string;
};
