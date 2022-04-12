import { AddCircle } from 'iconsax-react';
import type { FC } from 'react';
import { useEffect, useState } from 'react';

import { Editor } from '$components/Editor/Editor';
import {
  Button,
  ButtonCurner,
  ButtonSize,
  ButtonVariant,
} from '$sharedComponents/Button/Button';
import { SelectBox } from '$sharedComponents/SelectBox/SelectBox';
import {
  TextField,
  TextFieldTheme,
} from '$sharedComponents/TextField/TextField';

import { Input, Row, StyledButton, Title } from './PostCreatorStyles';

export interface SpaceProps {
  id: string;
  value: string;
  label: string;
}

interface PostCreatorProps {
  title: string;
  content: string;
  spacesArray: SpaceProps[];
  loading?: boolean;
  spacesLoading?: boolean;
  onTitleChange: (arg: string) => void;
  onContentChange: (arg: string) => void;
  onSpaceChange: (arg: SpaceProps) => void;
  onCreateNewSpace: () => void;
  onCreatePost: () => void;
}

export const PostCreator: FC<PostCreatorProps> = props => {
  const {
    title,
    content,
    spacesArray,
    loading,
    spacesLoading,
    onTitleChange,
    onContentChange,
    onSpaceChange,
    onCreateNewSpace,
    onCreatePost,
  } = props;

  const [editorLoaded, setEditorLoaded] = useState(false);

  useEffect(() => {
    setEditorLoaded(true);
  }, []);

  return (
    <>
      <Title>Create New Post</Title>
      <Input>
        <TextField
          theme={TextFieldTheme.Dark}
          name="post-title"
          value={title}
          placeholder="Post Title"
          onChange={e => onTitleChange(e.target.value)}
        />
      </Input>
      <Editor
        name="post-content"
        value={content}
        onChange={onContentChange}
        editorLoaded={editorLoaded}
      />
      <Row>
        <SelectBox
          options={spacesArray}
          placeholder="Select Category"
          loading={spacesLoading}
          onChange={onSpaceChange}
        />
        <StyledButton
          label="New"
          variant={ButtonVariant.Primary}
          buttonSize={ButtonSize.Medium}
          curner={ButtonCurner.Square}
          onClick={onCreateNewSpace}
        />
      </Row>
      <Button
        label="Create"
        icon={<AddCircle variant="Bold" />}
        variant={ButtonVariant.Primary}
        buttonSize={ButtonSize.Large}
        curner={ButtonCurner.Square}
        fullWidth={true}
        loading={loading}
        onClick={onCreatePost}
      />
    </>
  );
};
