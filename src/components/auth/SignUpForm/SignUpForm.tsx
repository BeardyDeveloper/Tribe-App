import { useJoinNetwork } from '@tribeplatform/react-sdk/hooks';
import { ArrowCircleRight, Lock, UserSquare } from 'iconsax-react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import type { ChangeEvent, FC } from 'react';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import {
  Button,
  ButtonCurner,
  ButtonSize,
} from '$sharedComponents/Button/Button';
import {
  TextField,
  TextFieldType,
} from '$sharedComponents/TextField/TextField';

import {
  Container,
  Content,
  Helper,
  HelperLink,
  InputBox,
  Label,
  StyledEmailSvg,
  Title,
} from './SignUpFormStyles';

export const SignUpForm: FC = () => {
  const { mutateAsync: signup } = useJoinNetwork({ fields: 'basic' });
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const onSubmit = () => {
    setLoading(true);

    signup({
      input: {
        email,
        name,
        password,
      },
    })
      .then(res => {
        if (res.accessToken) {
          router.push('/logIn');
        }
      })
      .catch(err => {
        toast.error(err.response.errors[0].message, { theme: 'light' });
      })
      .finally(() => setLoading(false));
  };

  return (
    <Container>
      <Content>
        <Title>Join To Community</Title>
        <InputBox mt={true}>
          <Label>Email</Label>
          <TextField
            icon={<StyledEmailSvg />}
            name="email"
            placeholder="info@gmail.com"
            value={email}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
            onClear={() => setEmail('')}
          />
        </InputBox>
        <InputBox>
          <Label>Name</Label>
          <TextField
            icon={<UserSquare />}
            name="name"
            placeholder="Johnny Wilson"
            value={name}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setName(e.target.value)
            }
            onClear={() => setName('')}
          />
        </InputBox>
        <InputBox minMb={true}>
          <Label>Password</Label>
          <TextField
            type={TextFieldType.Password}
            icon={<Lock />}
            name="password"
            placeholder="******"
            value={password}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
            onClear={() => setPassword('')}
          />
        </InputBox>
        <Button
          buttonSize={ButtonSize.Medium}
          curner={ButtonCurner.Square}
          label="Submit"
          icon={<ArrowCircleRight variant="Bold" />}
          fullWidth={true}
          loading={loading}
          onClick={onSubmit}
        />
        <Helper>
          Already have an Account?{' '}
          <Link href="/logIn">
            <HelperLink>Log In</HelperLink>
          </Link>
        </Helper>
      </Content>
    </Container>
  );
};
