import React, {useEffect, useState} from 'react';
import {Modal, VStack, Button} from 'native-base';
import {DayData} from '../../../models';
import {CustomInput} from '../../CustomInput';
import {taskFormatAdapter} from '../../../adapters';
interface Props {
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
  data: DayData;
  sendData: (data: DayData) => void;
}
export const SetEditBlockHour = ({
  showModal,
  setShowModal,
  data,
  sendData,
}: Props) => {
  const [task1, setTask1] = useState('');
  const [task2, setTask2] = useState('');

  useEffect(() => {
    if (data.tasks[0]?.description.length) {
      setTask1(data.tasks[0].description);
    }

    if (data.tasks[1]?.description.length) {
      setTask1(data.tasks[1].description);
    }
  }, []);

  const handleData = () => {
    let dataWithNewBlock = {...data};
    dataWithNewBlock = {
      ...dataWithNewBlock,
      tasks: taskFormatAdapter(task1, task2),
    };

    sendData(dataWithNewBlock);
    setShowModal(false);
  };

  return (
    <Modal isOpen={showModal} size="lg" onClose={() => setShowModal(false)}>
      <Modal.Content backgroundColor="info.10" maxWidth="80%">
        <Modal.Header alignItems="center">{data.hour}</Modal.Header>
        <Modal.Body>
          <VStack space="4">
            <CustomInput value={task1} onChange={setTask1} />
            <CustomInput value={task2} onChange={setTask2} />
            <Button backgroundColor="primary.200" onPress={handleData}>
              Guardar
            </Button>
          </VStack>
        </Modal.Body>
      </Modal.Content>
    </Modal>
  );
};
