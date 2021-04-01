export interface VerticalItemContent {
  title: string;
  subtitle: string;
  thumbnail: string;
  key?: string | number;
}

export interface ContextMenuItem<T> {
  title: string;
  onPress: (item: T) => void;
}
