import { logout } from '../../functions/connection/auth';
import { HeadContainer, IconExit } from './header.style';

import { useState } from 'react';
import { Modal } from 'antd';

const Header = () => {
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const hideModal = () => {
    setOpen(false);
  };
  return (
    <>
      <Modal
        title=""
        open={open}
        onOk={logout}
        onCancel={hideModal}
        okText="Sair"
        cancelText="Cancelar"
      >
        <p>Realmente deseja sair?</p>
      </Modal>
      <HeadContainer>
        <IconExit onClick={showModal} />
      </HeadContainer>
    </>
  );
};

export default Header;
