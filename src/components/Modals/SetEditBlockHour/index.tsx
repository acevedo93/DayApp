import React from 'react';
import {Modal, HStack, Text, VStack} from 'native-base';
interface Props {
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
}
export const SetEditBlockHour = ({showModal, setShowModal}: Props) => {
  return (
    <Modal isOpen={showModal} size="lg" onClose={() => setShowModal(false)}>
      {' '}
      <Modal.Content maxWidth="350">
        <Modal.Body>
          <VStack space={3}>
            <HStack alignItems="center" justifyContent="space-between">
              <Text fontWeight="medium">Sub Total</Text>
              <Text color="blueGray.400">$298.77</Text>
            </HStack>
            <HStack alignItems="center" justifyContent="space-between">
              <Text fontWeight="medium">Tax</Text>
              <Text color="blueGray.400">$38.84</Text>
            </HStack>
            <HStack alignItems="center" justifyContent="space-between">
              <Text fontWeight="medium">Total Amount</Text>
              <Text color="green.500">$337.61</Text>
            </HStack>
          </VStack>
        </Modal.Body>
      </Modal.Content>
    </Modal>
  );
};
