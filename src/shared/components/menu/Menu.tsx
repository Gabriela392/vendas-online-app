import { MenuContainer, MenuContainerLogoName, MenuLogo, NameCompany } from "./menu.style"

const Menu = () => {
  return (
    <MenuContainer>
        <MenuContainerLogoName>
            <MenuLogo src="/logo.png" alt="Logo" />
            <NameCompany>Vendas Online</NameCompany>
        </MenuContainerLogoName>
    </MenuContainer>
  );
};

export default Menu;