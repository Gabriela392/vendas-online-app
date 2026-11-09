import Input, { type InputProps } from '../input';

interface InputMoneyProps extends InputProps {
  value: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  addonBefore?: string;
  title?: string;
  margin?: string;
}

const DECIMAL_SIZE = 2;

const formatValue = (value: number) => value.toFixed(DECIMAL_SIZE).replace('.', ',');

const InputMoney = ({ value, onChange, addonBefore = 'R$', ...props }: InputMoneyProps) => {
  const currentValue = Number.isFinite(value) ? formatValue(value) : '0,00';

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const digits = event.target.value.replace(/\D/g, '');
    const paddedDigits = digits.padStart(DECIMAL_SIZE + 1, '0');
    const integerPart = paddedDigits.slice(0, -DECIMAL_SIZE);
    const decimalPart = paddedDigits.slice(-DECIMAL_SIZE);
    const decimalValue = `${integerPart}.${decimalPart}`;

    onChange({
      ...event,
      target: {
        ...event.target,
        value: decimalValue,
      },
    });
  };

  return (
    <Input
      {...props}
      addonBefore={addonBefore}
      value={currentValue}
      onChange={handleOnChange}
      style={{ width: '100%', ...props.style }}
    />
  );
};

export default InputMoney;
