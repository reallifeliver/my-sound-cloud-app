import * as React from 'react';
import { Modal, Text, StyleSheet, View } from 'react-native';
import { ContextMenuItem } from 'types/components';
import colors from '../../../styles/colors';

type Props<T> = {
  menuItems: ContextMenuItem<T>[];
  visible: boolean;
  onClose: () => void;
};

function ContextMenuModal<I>({ menuItems, visible, onClose }: Props<I>) {
  return (
    <Modal
      visible={visible}
      onRequestClose={onClose}
      animationType={'slide'}
      transparent={true}
      presentationStyle={'overFullScreen'}
      onTouchEnd={onClose}
    >
      <View style={styles.modal}>
        <View style={styles.modalBody}>
          <Text>modal</Text>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
    height: '100%',
    justifyContent: 'flex-end',
    backgroundColor: 'transparent',
  },
  modalBody: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
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
});

export default ContextMenuModal;
