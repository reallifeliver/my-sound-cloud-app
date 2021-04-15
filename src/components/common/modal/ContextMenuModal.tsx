import * as React from 'react';
import {
  Modal,
  Text,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  TouchableHighlight,
} from 'react-native';
import { ContextMenuItem } from 'types/components';
import colors from '../../../styles/colors';
import Ionicons from '@expo/vector-icons/Ionicons';

type Props<T> = {
  menuItems: ContextMenuItem<T>[];
  visible: boolean;
  target: T | null;
  onClose: () => void;
};

type MenuItemProps = {
  onPress: () => void;
  icon: string;
  title: string;
};

function ContextMenuModal<I>({
  target,
  menuItems,
  visible,
  onClose,
}: Props<I>) {
  return (
    <Modal
      visible={!!target && visible}
      animationType={'slide'}
      transparent={true}
      presentationStyle={'overFullScreen'}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.modal}>
          <View style={styles.modalBody} onStartShouldSetResponder={() => true}>
            {menuItems.map((el) => (
              <MenuItem
                icon={el.icon ?? 'checkmark-outline'}
                title={el.title}
                onPress={() => target && el.onPress(target)}
              />
            ))}
            <MenuItem icon={'close-outline'} title='Cancel' onPress={onClose} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

const MenuItem = ({ onPress, icon, title }: MenuItemProps) => (
  <TouchableHighlight onPress={onPress} underlayColor={colors.G_200}>
    <View style={styles.menuItem}>
      <Ionicons name={icon} size={30} />
      <Text style={styles.menuItemTitle}>{title}</Text>
    </View>
  </TouchableHighlight>
);

const styles = StyleSheet.create({
  modal: {
    display: 'flex',
    height: '100%',
    justifyContent: 'flex-end',
    backgroundColor: 'transparent',
  },
  modalBody: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 30,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
    minHeight: 300,
    backgroundColor: colors.G_100,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: colors.G_600,
    shadowOpacity: 0.7,
  },
  menuItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  menuItemTitle: {
    marginLeft: 16,
    fontSize: 16,
    fontWeight: '500',
  },
});

export default ContextMenuModal;
