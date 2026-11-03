import { useGlobalContext } from "../../../shared/hooks/useGlobalContext";

const Product = () => {
    const { user } = useGlobalContext();

    return <div>{`Produtos ${user?.name || 'Usuário'}`}</div>
};

export default Product;