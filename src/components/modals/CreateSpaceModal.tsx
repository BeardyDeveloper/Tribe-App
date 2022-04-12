import { AddCircle } from 'iconsax-react';
import type { FC } from 'react';
import { useState } from 'react';

import { Modal } from '$components/UI/Modal/Modal';
import {
  Button,
  ButtonCurner,
  ButtonSize,
  ButtonVariant,
} from '$sharedComponents/Button/Button';

import { StyledTextField } from './CreateSpaceModalStyles';

interface CreateSpaceModalProps {
  loading?: boolean;
  handleClose: () => void;
  onCreateNewSpace: (newSpaceName: string, newSpaceDescription: string) => void;
}

export const CreateSpaceModal: FC<CreateSpaceModalProps> = props => {
  const { loading, handleClose, onCreateNewSpace } = props;

  const [newSpaceName, setNewSpaceName] = useState('');
  const [newSpaceDescription, setNewSpaceDescription] = useState('');

  return (
    <Modal handleClose={handleClose}>
      <StyledTextField
        name="space-name"
        value={newSpaceName}
        placeholder="Space Name"
        onChange={e => setNewSpaceName(e.target.value)}
      />
      <StyledTextField
        name="space-description"
        value={newSpaceDescription}
        placeholder="Space Description"
        onChange={e => setNewSpaceDescription(e.target.value)}
      />
      <Button
        label="Create"
        icon={<AddCircle variant="Bold" />}
        variant={ButtonVariant.Primary}
        buttonSize={ButtonSize.Large}
        curner={ButtonCurner.Square}
        loading={loading}
        fullWidth={true}
        onClick={() => onCreateNewSpace(newSpaceName, newSpaceDescription)}
      />
    </Modal>
  );
};
