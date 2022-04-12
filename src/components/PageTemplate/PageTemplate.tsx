import type { FC } from 'react';
import { ToastContainer } from 'react-toastify';

import { Footer } from '$components/layout/Footer/Footer';
import type { NavbarType } from '$components/layout/Navbar/Navbar';
import { Navbar } from '$components/layout/Navbar/Navbar';

interface PageTemplateProps {
  navType?: NavbarType;
  isNavActive?: boolean;
  hideFooter?: boolean;
  onUserLogOut?: () => void;
}

export const PageTemplate: FC<PageTemplateProps> = props => {
  const { navType, isNavActive, hideFooter, onUserLogOut } = props;

  return (
    <>
      <Navbar
        type={navType}
        isActive={isNavActive}
        onUserLogOut={onUserLogOut}
      />
      {props.children}
      {!hideFooter && <Footer />}
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
      />
    </>
  );
};
