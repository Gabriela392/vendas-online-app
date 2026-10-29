import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';
import type { InputProps as InputPropsAntd } from 'antd';

import { BoxInput, InputPasswordStyled, InputStyled, TitleInput } from './input.styles';

interface InputProps extends InputPropsAntd {
  title?: string;
  margin?: string;
}

const Input = ({ title, margin, type, ...props }: InputProps) => {
  return (
    <BoxInput style={{ margin }}>
      {title && <TitleInput>{title}</TitleInput>}
      {type === 'password' ? (
        <InputPasswordStyled
          iconRender={(visible) => (visible ? <EyeOutlined /> : <EyeInvisibleOutlined />)}
          {...props}
        />
      ) : (
        <InputStyled type={type} {...props} />
      )}
    </BoxInput>
  );
};

export default Input;
