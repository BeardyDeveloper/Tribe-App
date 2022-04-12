import type { NextPage } from 'next';

import { SignUpForm } from '$components/auth/SignUpForm/SignUpForm';
import { NavbarType } from '$components/layout/Navbar/Navbar';
import { PageTemplate } from '$components/PageTemplate/PageTemplate';

const SignUp: NextPage = () => {
  return (
    <>
      <PageTemplate navType={NavbarType.Light} hideFooter={true}>
        <SignUpForm />
      </PageTemplate>
    </>
  );
};

export default SignUp;
