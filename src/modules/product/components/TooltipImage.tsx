import { Tooltip } from 'antd';
import type { ProductType } from '../../../shared/types/ProductType';

interface TooltipImageProps {
  product: ProductType;
}

const TooltipImage = ({ product }: TooltipImageProps) => {
  return (
    <Tooltip
      title={
        product.image ? (
          <img
            src={product.image}
            alt={product.name}
            style={{ display: 'block', maxWidth: 200, maxHeight: 200 }}
          />
        ) : (
          product.description ?? product.name
        )
      }
    >
      <span>{product.id}</span>
    </Tooltip>
  );
};

export default TooltipImage;