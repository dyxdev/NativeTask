import { Modal, Pressable, StyleSheet } from 'react-native';
import { PropsWithChildren } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { ThemedView } from './ThemedView';
import { ThemedText } from './ThemedText';

type Props = PropsWithChildren<{
  title?: string  
  isVisible: boolean;
  onClose: () => void;
}>;

/**
 * Custom Modal component.
 *
 * @param {Props} props - Component props.
 * @param {string} [props.title] - Modal title.
 * @param {boolean} props.isVisible - Determines modal visibility.
 * @param {() => void} props.onClose - Callback function to close the modal.
 * @param {React.ReactNode} props.children - Content to be displayed within the modal.
 * @returns {JSX.Element} - The rendered modal component.
 */
export function CustomModal({ isVisible, children, title, onClose }: Props) {
  return (
    <ThemedView style={styles.centeredView}>
        <Modal animationType="slide" transparent={true} visible={isVisible}>
        <ThemedView style={styles.centeredView}>
        <ThemedView style={styles.modalContent}>
        <ThemedView style={styles.titleContainer}>
          <ThemedText style={styles.title}>{title}</ThemedText>
          <Pressable onPress={onClose}>
            <Ionicons name="close" color="#25292e" size={22} />
          </Pressable>
        </ThemedView>
        {children}
      </ThemedView>
        </ThemedView>
    </Modal>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
  },
  modalContent: {
    height: '100%',
    width: '100%',
    backgroundColor: '#fff',
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
    position: 'absolute',
    padding: 5
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  titleContainer: {
    height: '16%',
    backgroundColor: '#fff',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: '#25292e',
    fontSize: 16,
  },
});
