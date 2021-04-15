import * as React from 'react';
import { useState } from 'react';
import { VerticalItemContent, ContextMenuItem } from 'types/components';
import {
  TouchableWithoutFeedback,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableHighlight,
  FlatList,
  ScrollResponderEvent,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';
import colors from '../../styles/colors';
import Thumbnail from './Thumbnail';
import ContextMenuModal from './modal/ContextMenuModal';

interface Props<T> {
  items: T[];
  getItemContent: (item: T) => VerticalItemContent;
  onSelect: (item: T) => void;
  contextMenus?: ContextMenuItem<T>[];
  isEndPage?: boolean;
  getNext?: () => Promise<void>;
}

function VerticalItemList<I>({
  getItemContent,
  items,
  onSelect,
  contextMenus,
  isEndPage,
  getNext,
}: Props<I>) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isContextOpen, setIsContextOpen] = useState<boolean>(false);
  const onContext = () => {
    setIsContextOpen(true);
  };

  const onEndReached = async () => {
    if (isEndPage || isLoading) return;
    setIsLoading(true);
    await getNext?.();
    setIsLoading(false);
  };

  return (
    <>
      <FlatList<I>
        style={styles.wrapper}
        data={items}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.9}
        renderItem={({ item, index }) => {
          const { subtitle, title, thumbnail, key } = getItemContent(item);
          return (
            <TouchableWithoutFeedback
              key={key ?? index}
              onPress={() => onSelect(item)}
            >
              <View style={styles.listItem}>
                <Thumbnail source={thumbnail} size={'s'} />
                <View style={styles.info}>
                  <Text style={styles.title}>{title}</Text>
                  <Text numberOfLines={2} style={styles.subTitle}>
                    {subtitle}
                  </Text>
                </View>
                {contextMenus && contextMenus.length > 0 && (
                  <TouchableHighlight
                    underlayColor={colors.G_300}
                    activeOpacity={0.3}
                    style={styles.contextMenu}
                    onPress={onContext}
                  >
                    <View>
                      <Ionicons name='ellipsis-horizontal-outline' size={16} />
                    </View>
                  </TouchableHighlight>
                )}
              </View>
            </TouchableWithoutFeedback>
          );
        }}
      />
      {contextMenus && (
        <ContextMenuModal<I>
          visible={isContextOpen}
          menuItems={contextMenus}
          onClose={() => setIsContextOpen(false)}
        />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  wrapper: {},
  listItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 8,
    paddingBottom: 8,
    width: '100%',
  },
  info: {
    flex: 1,
    height: '100%',
    display: 'flex',
    alignItems: 'flex-start',
    paddingLeft: 16,
    paddingTop: 4,
    paddingBottom: 4,
    paddingRight: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
    paddingBottom: 8,
  },
  subTitle: {
    fontSize: 14,
    color: colors.G_600,
  },
  contextMenu: {
    position: 'absolute',
    right: 0,
    alignSelf: 'center',
    zIndex: 2,
    width: 32,
    height: 32,
    borderRadius: 16,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default VerticalItemList;
