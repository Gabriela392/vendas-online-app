import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Modal } from 'antd';

import { logout } from '../../functions/connection/auth';
import { HeaderTestIdEnum } from '../../enums/headerTestIdEnum';
import { HeadContainer, IconExit } from './header.style';

const Header = () => {
  const navigate = useNavigate();
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
        onOk={() => logout(navigate)}
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
