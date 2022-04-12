import type { NextPage } from 'next';

import { LogInForm } from '$components/auth/LogInForm/LogInForm';
import { NavbarType } from '$components/layout/Navbar/Navbar';
import { PageTemplate } from '$components/PageTemplate/PageTemplate';

const LogIn: NextPage = () => {
  return (
    <>
      <PageTemplate navType={NavbarType.Light} hideFooter={true}>
        <LogInForm />
      </PageTemplate>
    </>
  );
};

export default LogIn;
