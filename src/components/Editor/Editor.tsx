/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable node/global-require */
import type ClassicEditorType from '@ckeditor/ckeditor5-build-classic';
import type Event from '@ckeditor/ckeditor5-utils/src/eventinfo';
import type { FC } from 'react';
import { useEffect, useRef } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

// import { CKEditor } from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { Loader, Wrapper } from './EditorStyles';

interface EditorProps {
  value: any;
  name: string;
  editorLoaded: boolean;
  onChange: (data: any) => void;
}

export const Editor: FC<EditorProps> = props => {
  const { onChange, editorLoaded, name, value } = props;

  const editorRef = useRef<any>();
  const { CKEditor, ClassicEditor } = editorRef.current || {};

  useEffect(() => {
    editorRef.current = {
      CKEditor: require('@ckeditor/ckeditor5-react').CKEditor,
      ClassicEditor: require('@ckeditor/ckeditor5-build-classic'),
    };
  }, []);

  return (
    <Wrapper>
      {editorLoaded ? (
        <CKEditor
          type=""
          editor={ClassicEditor}
          data={value}
          name={name}
          config={{
            language: {
              ui: 'en',
              content: 'en',
            },
            placeholder: 'Post Content',
          }}
          onChange={(event: Event, editor: ClassicEditorType) => {
            const data = editor.getData();
            onChange(data);
          }}
        />
      ) : (
        <Loader>
          <ClipLoader />
        </Loader>
      )}
    </Wrapper>
  );
};
