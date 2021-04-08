import * as React from 'react';
import { Modal, StyleSheet, Text, Pressable } from 'react-native';
import { CustomErrorState } from '../../types/error';
import colors from 'styles/colors';
interface Props {
  error: CustomErrorState | null;
  onClose: () => void;
}
const ErrorModal = ({ error, onClose }: Props) => {
  return (
    <Modal
      style={styles.modal}
      animationType={'slide'}
      visible={!!error}
      presentationStyle={'overFullScreen'}
    >
      <Text style={styles.code}>{error?.code}</Text>
      <Text style={styles.message}>{error?.message}</Text>
      <Pressable onPress={onClose}>
        <Text style={styles.close}>CLOSET</Text>
      </Pressable>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    backgroundColor: colors.G_900,
    opacity: 0.8,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  code: {
    fontSize: 24,
    color: colors.WARN,
    marginBottom: 16,
  },
  message: {
    width: '80%',
    fontSize: 16,
    marginBottom: 32,
  },
  close: {
    fontSize: 16,
    color: colors.CONFIRM,
  },
});

export default ErrorModal;
