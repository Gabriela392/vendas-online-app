import { Input as AntdInput, type InputProps as AntdInputProps } from 'antd';

export type InputProps = AntdInputProps;

interface BaseInputProps extends InputProps {
  value?: string | number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  margin?: string;
  title?: string;
}

const Input = ({ value, onChange, margin, title, ...props }: BaseInputProps) => {
  return (
    <div style={{ width: '100%', margin }}>
      {title && <div style={{ marginBottom: 8 }}>{title}</div>}
      <AntdInput value={value} onChange={onChange} {...props} />
    </div>
  );
};

export default Input;