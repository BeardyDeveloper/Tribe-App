import { useLogin } from '@tribeplatform/react-sdk/hooks';
import { setCookies } from 'cookies-next';
import { ArrowCircleRight, Lock } from 'iconsax-react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import type { ChangeEvent, FC } from 'react';
import { useState } from 'react';
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
} from './LogInFormStyles';

export const LogInForm: FC = () => {
  const { login } = useLogin();
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const onSubmit = () => {
    setLoading(true);
    login({
      variables: { input: { usernameOrEmail: email, password } },
    })
      .then(res => {
        if (res.accessToken) {
          setCookies('userToken', res.accessToken);
          router.push('/collaborate');
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
        <Title>Log In Your Account</Title>
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
          Dont have an Account?{' '}
          <Link href="/signUp">
            <HelperLink>Create one</HelperLink>
          </Link>
        </Helper>
      </Content>
    </Container>
  );
};
