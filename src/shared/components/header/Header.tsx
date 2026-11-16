import { logout } from '../../functions/connection/auth';
import { HeadContainer, IconExit } from './header.style';

import { useState } from 'react';
import { Modal } from 'antd';
import { HeaderTestIdEnum } from '../../enums/headerTestIdEnum';

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
        data-testid={HeaderTestIdEnum.HEADER_MODAL}
        title=""
        open={open}
        onOk={logout}
        onCancel={hideModal}
        okText="Sim"
        cancelText="Cancelar"
      >
        <p data-testid={HeaderTestIdEnum.HEADER_MODAL_P}>
          Realmente deseja sair?
        </p>
      </Modal>
      <HeadContainer data-testid={HeaderTestIdEnum.HEADER_CONTAINER}>
        <IconExit
          data-testid={HeaderTestIdEnum.HEADER_LOGO}
          onClick={showModal}
        />
      </HeadContainer>
    </>
  );
};

export default Header;
