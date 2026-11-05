import { Tooltip as TooltipAntd } from 'antd';

interface TooltipProps {
  children: React.ReactNode;
  tooltip?: React.ReactNode;
  title?: string;
}

const Tooltip = ({ children, tooltip, title }: TooltipProps) => {
  return (
    <TooltipAntd title={tooltip ?? title} placement="top">
      {children}
    </TooltipAntd>
  );
};

export default Tooltip;