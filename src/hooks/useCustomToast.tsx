import React from 'react';
import {useToast} from 'native-base';
import {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {toastSelector} from '../redux/slices/toast.slice';

export const useCustomToast = (CustomComponent: any) => {
  const {isOpen, content, type} = useSelector(toastSelector);
  const toast = useToast();

  useEffect(() => {
    if (isOpen) {
      toast.show({
        placement: 'top',
        render: () => <CustomComponent content={content} type={type} />,
      });
    }
  }, [isOpen]);

  return {
    isOpen,
    content,
  };
};
