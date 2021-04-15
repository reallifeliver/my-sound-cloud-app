import * as React from 'react';
import { Modal, StyleSheet, Text, Pressable, View } from 'react-native';
import { CustomErrorState } from '../../../types/error';
import colors from '../../../styles/colors';
interface Props {
  error: CustomErrorState | null;
  onClose: () => void;
}
const ErrorModal = ({ error, onClose }: Props) => {
  console.log(error);

  return (
    <Modal
      animationType={'slide'}
      visible={!!error}
      transparent={true}
      presentationStyle={'overFullScreen'}
    >
      <View style={styles.modal}>
        <Text style={styles.status}>{error?.status}</Text>
        <Text style={styles.message}>{error?.message}</Text>
        <Pressable onPress={onClose}>
          <Text style={styles.close}>CLOSE</Text>
        </Pressable>
      </View>
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
    height: '100%',
  },
  status: {
    fontSize: 24,
    color: colors.WARN,
    textAlign: 'center',
    marginBottom: 16,
  },
  message: {
    width: '80%',
    fontSize: 16,
    marginBottom: 32,
    color: colors.G_200,
    textAlign: 'center',
  },
  close: {
    fontSize: 16,
    color: colors.CONFIRM,
  },
});

export default ErrorModal;
