import { ExternalContainer, TooltipContainer } from "./tooltip.style";

interface TooltipProps {
  children: React.ReactNode;
  tooltip: string;
}

const Tooltip = ({ children, tooltip }: TooltipProps) => {
 
    return (
        <TooltipContainer>
            <ExternalContainer>
                {tooltip}
            </ExternalContainer>
            {children}
        </TooltipContainer>
    )
     
};

export default Tooltip;