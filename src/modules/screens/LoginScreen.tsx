import { CheckCircleFilled, GoogleOutlined } from '@ant-design/icons';
import { useState } from 'react';

import Button from '../../shared/components/buttons/button/button';
import Input from '../../shared/components/inputs/input';
import { useGlobalContext } from '../../shared/hooks/useGlobalContext';
import { useRequests } from '../../shared/hooks/useRequests';
import {
  BackgroundImage,
  Card,
  ContainerLogin,
  ContainerLoginScreen,
  Divider,
  HelperText,
  HeroBottom,
  HeroOverlay,
  HeroPanel,
  HeroSubtitle,
  HeroTitle,
  HeroTop,
  LimitedContainer,
  LogoImage,
  PasswordRules,
  PhonePrefix,
  Pill,
  Row,
  Rule,
  StepCardBox,
  StepNumber,
  StepsList,
  Terms,
  TitleLogin,
  ValidIcon,
} from '../styles/loginScreen.styles';

/* ---------- Tipos ---------- */

interface SignUpForm {
  phone: string;
  fullName: string;
  username: string;
  password: string;
}

interface StepItem {
  id: number;
  label: string;
}

interface StepCardProps {
  step: StepItem;
  active?: boolean;
}

interface PasswordRulesHintProps {
  password: string;
}

/* ---------- Constantes ---------- */

const STEPS: StepItem[] = [
  { id: 1, label: 'Registre sua conta' },
  { id: 2, label: 'Configure as informações do seu perfil' },
  { id: 3, label: 'Confirme sua identidade com documento' },
];

const PASSWORD_MIN = 12;
const PASSWORD_MAX = 20;

/* ---------- Componentes auxiliares ---------- */

const StepCard = ({ step, active }: StepCardProps) => (
  <StepCardBox $active={active}>
    <StepNumber $active={active}>{step.id}</StepNumber>
    <span>{step.label}</span>
  </StepCardBox>
);

const PasswordRulesHint = ({ password }: PasswordRulesHintProps) => {
  const hasUpper = /[A-Z]/.test(password);
  const hasLower = /[a-z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSymbol = /[^A-Za-z0-9]/.test(password);
  const lengthOk = password.length >= PASSWORD_MIN && password.length <= PASSWORD_MAX;

  return (
    <PasswordRules>
      <Rule $ok={lengthOk}>
        Mínimo de {PASSWORD_MIN} e máximo de {PASSWORD_MAX} caracteres.
      </Rule>
      <br />
      <Rule $ok={hasUpper}>Letras maiúsculas</Rule>, <Rule $ok={hasLower}>letras minúsculas</Rule>,{' '}
      <Rule $ok={hasNumber}>números</Rule> e <Rule $ok={hasSymbol}>símbolos</Rule>.
    </PasswordRules>
  );
};

/* ---------- Tela ---------- */

const LoginScreen = () => {
  const { setAccessToken } = useGlobalContext();
  const { postRequest, loading } = useRequests();
  const [form, setForm] = useState<SignUpForm>({
    phone: '',
    fullName: '',
    username: '',
    password: '',
  });

  const handleChange =
    (field: keyof SignUpForm) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setForm((current) => ({ ...current, [field]: event.target.value }));
    };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setAccessToken('novo token');
    postRequest('http://localhost:8080/auth', {
      phone: form.phone,
      fullName: form.fullName,
      username: form.username,
      password: form.password,
    });
  };

  const usernameValid = form.username.trim().length >= 3;

  return (
    <ContainerLoginScreen>
      <Card>
        <HeroPanel>
          <BackgroundImage src="./background.png" alt="" />
          <HeroOverlay />

          <HeroTop>
            <LogoImage src="./logo.png" alt="Vendas Online" />
          </HeroTop>

          <HeroBottom>
            <Pill>Venha construir com a gente 🚀</Pill>
            <HeroTitle>Comece sua jornada</HeroTitle>
            <HeroSubtitle>Siga estes passos simples para configurar sua conta.</HeroSubtitle>

            <StepsList>
              {STEPS.map((step) => (
                <StepCard key={step.id} step={step} active={step.id === 1} />
              ))}
            </StepsList>
          </HeroBottom>
        </HeroPanel>

        <ContainerLogin>
          <LimitedContainer onSubmit={handleSubmit}>
            <TitleLogin>Cadastre-se</TitleLogin>

            <Input
              title="Telefone"
              type="tel"
              placeholder="(00) 00000-0000"
              value={form.phone}
              onChange={handleChange('phone')}
              prefix={<PhonePrefix>🇧🇷 +55</PhonePrefix>}
            />

            <Row>
              <Input
                title="Nome completo"
                placeholder="Gabriela Caetano"
                value={form.fullName}
                onChange={handleChange('fullName')}
              />
              <Input
                title="Usuário"
                placeholder="gabrielacx"
                value={form.username}
                onChange={handleChange('username')}
                suffix={
                  usernameValid ? (
                    <ValidIcon>
                      <CheckCircleFilled />
                    </ValidIcon>
                  ) : (
                    <span />
                  )
                }
              />
            </Row>

            <Input
              title="Senha"
              type="password"
              margin="20px 0px 0px"
              placeholder="••••••••••••••"
              maxLength={PASSWORD_MAX}
              value={form.password}
              onChange={handleChange('password')}
            />
            <PasswordRulesHint password={form.password} />

            <Button
              htmlType="submit"
              loading={loading}
              type="primary"
              margin="24px 0px 0px 0px"
            >
              Continuar
            </Button>

            <HelperText>
              Já tem uma conta? <a href="/login">Entrar</a>
            </HelperText>

            <Divider>ou</Divider>

            <Button type="default" icon={<GoogleOutlined />} htmlType="button">
              Cadastrar com o Google
            </Button>

            <Terms>
              Ao se cadastrar, confirmo que li e concordo com a{' '}
              <a href="/login">Política de Privacidade e os Termos de Serviço</a>.
            </Terms>
          </LimitedContainer>
        </ContainerLogin>
      </Card>
    </ContainerLoginScreen>
  );
};

export default LoginScreen;
