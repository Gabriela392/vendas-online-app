import { Tooltip as TooltipAntd } from 'antd';

interface TooltipProps {
  children: React.ReactNode;
  tooltip?: React.ReactNode;
  title?: string;
}

const Tooltip = ({ children, tooltip, title }: TooltipProps) => {
  return (
    <TooltipAntd
      title={tooltip ?? title}
      placement="top"
      trigger="hover"
      mouseEnterDelay={0}
      mouseLeaveDelay={0}
    >
      {children}
    </TooltipAntd>
  );
};

export default Tooltip;
