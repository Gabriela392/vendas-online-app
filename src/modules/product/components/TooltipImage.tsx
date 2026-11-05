import Tooltip from '../../../shared/components/tooltip/Tooltip';
import type { ProductType } from '../../../shared/types/ProductType';
import { ImageProduct } from '../styles/tooltipImage.style';

interface TooltipImageProps {
  product: ProductType;
}

const TooltipImage = ({ product }: TooltipImageProps) => {
  return (
    <Tooltip
      tooltip={
        product.image ? (
          <ImageProduct src={product.image} alt={product.name} />
        ) : (
          product.description ?? 'Imagem indisponível'
        )
      }
    >
      <span>{product.id}</span>
    </Tooltip>
  );
};

export default TooltipImage;