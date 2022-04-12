import type { FC } from 'react';

import { Backdrop } from '$components/UI/Backdrop/Backdrop';

import { Close, Content, Temp } from './ModalStyles';

const dropIn = {
  hidden: {
    y: '-70vh',
    x: '-50%',
    opacity: 0,
  },
  visible: {
    y: '-50%',
    x: '-50%',
    opacity: 1,
    transition: {
      duration: 0.1,
      type: 'spring',
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: '50vh',
    opacity: 0,
  },
};

interface ModalProps {
  handleClose: () => void;
}

export const Modal: FC<ModalProps> = props => {
  const { handleClose } = props;

  return (
    <>
      <Backdrop onClick={handleClose} />
      <Temp
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={(e: any) => e.stopPropagation()}
      >
        <Close onClick={handleClose}>&times;</Close>
        <Content>{props.children}</Content>
      </Temp>
    </>
  );
};
