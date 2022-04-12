import { getPostTypeGQLQuery } from '@tribeplatform/gql-client';
import type { Space } from '@tribeplatform/gql-client/types';
import {
  PostMappingTypeEnum,
  PostTypeContext,
} from '@tribeplatform/gql-client/types';
import { useTribeClient } from '@tribeplatform/react-sdk';
import {
  useAddPost,
  useCreateSpace,
  useSpaces,
} from '@tribeplatform/react-sdk/hooks';
import { useQueryClient } from '@tribeplatform/react-sdk/lib';
import { simplifyPaginatedResult } from '@tribeplatform/react-sdk/utils';
import { getCookie } from 'cookies-next';
import { AnimatePresence } from 'framer-motion';
import type { NextPage } from 'next';
import Router, { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { Header } from '$components/collaborate/Header/Header';
import type { SpaceProps } from '$components/collaborate/PostCreator/PostCreator';
import { PostCreator } from '$components/collaborate/PostCreator/PostCreator';
import { NavbarType } from '$components/layout/Navbar/Navbar';
import { CreateSpaceModal } from '$components/modals/CreateSpaceModal';
import { PageTemplate } from '$components/PageTemplate/PageTemplate';
import { Container } from '$components/UI/Container';
import { PagePaper } from '$styles/PagesStyles';

const Collaborate: NextPage = () => {
  const router = useRouter();
  const { mutateAsync: CreateSpace } = useCreateSpace({ fields: 'basic' });
  const { mutateAsync: AddPost } = useAddPost({ fields: 'basic' });

  const { client } = useTribeClient();

  const listTypesPromise = client.posts.listPostTypes({ limit: 10 });
  listTypesPromise.then(types => console.log(types));

  const {
    data: spacesData,
    isLoading: isSpacesLoading,
    refetch: refetchSpaces,
  } = useSpaces({
    fields: { image: 'basic' },
    variables: {
      limit: 48,
    },
  });
  const { nodes: allSpaces } = simplifyPaginatedResult<Space>(spacesData);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isCreatSpaceLoading, setIsCreatSpaceLoading] = useState(false);
  const [isCreatPostLoading, setIsCreatPostLoading] = useState(false);

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [spacesArray, setSpacesArray] = useState<SpaceProps[]>([]);
  const [space, setSpace] = useState<SpaceProps | null>();

  useEffect(() => {
    const allSpacesShell = [...allSpaces];

    const spacesInfoArray: SpaceProps[] = allSpacesShell.map(item => ({
      id: item.id,
      value: item.name,
      label: item.name,
    }));

    setSpacesArray(spacesInfoArray);
  }, [isSpacesLoading]);

  const onCreateNewSpace = (
    newSpaceName: string,
    newSpaceDescription: string,
  ) => {
    setIsCreatSpaceLoading(true);
    CreateSpace({
      input: {
        name: newSpaceName,
        description: newSpaceDescription,
      },
    })
      .then(res => {
        refetchSpaces();
      })
      .catch(err => {
        toast.error(err.response.errors[0].message, { theme: 'dark' });
      })
      .finally(() => setIsCreatSpaceLoading(false));
  };

  const onCreatePost = () => {
    setIsCreatPostLoading(true);

    AddPost({
      input: {
        publish: true,
        postTypeId: 'nnp2AFyIsJXRVV3',
        mappingFields: [
          {
            key: 'title',
            type: PostMappingTypeEnum.TEXT,
            value: JSON.stringify(title),
          },
          {
            key: 'content',
            type: PostMappingTypeEnum.HTML,
            value: JSON.stringify(content),
          },
        ],
      },
      spaceId: space!.id,
    })
      .then(res => {
        toast.success('Post Created', { theme: 'dark' });
      })
      .catch(err => {
        toast.error(err.response.errors[0].message, { theme: 'dark' });
      })
      .finally(() => setIsCreatPostLoading(false));
  };

  return (
    <>
      <PageTemplate
        navType={NavbarType.Dark}
        onUserLogOut={() => router.replace('/logIn')}
      >
        <Header />
        <Container>
          <PagePaper>
            <PostCreator
              title={title}
              content={content}
              spacesArray={spacesArray}
              loading={isCreatPostLoading}
              spacesLoading={isSpacesLoading}
              onTitleChange={(val: string) => setTitle(val)}
              onContentChange={(val: string) => setContent(val)}
              onSpaceChange={(val: SpaceProps) => setSpace(val)}
              onCreateNewSpace={() => setIsModalOpen(true)}
              onCreatePost={onCreatePost}
            />
          </PagePaper>
        </Container>
      </PageTemplate>

      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {isModalOpen && (
          <CreateSpaceModal
            loading={isCreatSpaceLoading}
            handleClose={() => setIsModalOpen(false)}
            onCreateNewSpace={(newSpaceName, newSpaceDescription) =>
              onCreateNewSpace(newSpaceName, newSpaceDescription)
            }
          />
        )}
      </AnimatePresence>
    </>
  );
};

Collaborate.getInitialProps = async ({ req, res }) => {
  const token = getCookie('userToken', { req, res });

  if (!token) {
    if (res) {
      // server
      res.writeHead(302, {
        Location: '/logIn',
      });

      res.end();
    } else {
      // client
      Router.push('/logIn');
    }
  }
  return { props: {} };
};

export default Collaborate;
