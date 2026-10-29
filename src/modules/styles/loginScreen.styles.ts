import styled from 'styled-components';

const BREAKPOINT = '900px';

export const ContainerLoginScreen = styled.div`
  width: 100%;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background-color: #d9d9d9;

  @media (max-width: ${BREAKPOINT}) {
    padding: 0;
    align-items: stretch;
  }
`;

export const Card = styled.div`
  width: 100%;
  max-width: 1200px;
  min-height: 700px;
  display: flex;
  padding: 8px;
  box-sizing: border-box;
  background-color: #ffffff;
  border-radius: 36px;
  overflow: hidden;

  @media (max-width: ${BREAKPOINT}) {
    flex-direction: column;
    min-height: 100vh;
    padding: 0;
    border-radius: 0;
  }
`;

/* ---------- Painel esquerdo (hero) ---------- */

export const HeroPanel = styled.section`
  position: relative;
  flex: 1 1 55%;
  min-height: 684px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 40px 40px 32px;
  box-sizing: border-box;
  border-radius: 28px;
  overflow: hidden;
  color: #ffffff;
  background-color: #006397;

  @media (max-width: ${BREAKPOINT}) {
    flex: none;
    min-height: auto;
    gap: 32px;
    padding: 24px 20px;
    border-radius: 0 0 28px 28px;
  }
`;

export const BackgroundImage = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
`;

export const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  background: linear-gradient(
    180deg,
    rgba(0, 99, 151, 0.35) 0%,
    rgba(0, 99, 151, 0.7) 55%,
    rgba(0, 54, 92, 0.95) 100%
  );
`;

export const HeroTop = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
`;

export const LogoImage = styled.img`
  width: 140px;
  height: auto;
  background-color: #ffffff;
  border-radius: 16px;
  padding: 4px 8px;

  @media (max-width: ${BREAKPOINT}) {
    width: 110px;
  }
`;

export const HeroBottom = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Pill = styled.span`
  padding: 10px 18px;
  border-radius: 999px;
  background-color: rgba(255, 255, 255, 0.22);
  backdrop-filter: blur(6px);
  font-size: 15px;
`;

export const HeroTitle = styled.h1`
  margin: 20px 0 12px;
  font-size: 52px;
  line-height: 1.1;
  font-weight: 500;

  @media (max-width: ${BREAKPOINT}) {
    font-size: 34px;
  }
`;

export const HeroSubtitle = styled.p`
  margin: 0 0 32px;
  font-size: 17px;
  opacity: 0.9;

  @media (max-width: ${BREAKPOINT}) {
    font-size: 15px;
    margin-bottom: 0;
  }
`;

export const StepsList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;

  @media (max-width: ${BREAKPOINT}) {
    display: none;
  }
`;

export const StepCardBox = styled.div<{ $active?: boolean }>`
  min-height: 132px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px;
  box-sizing: border-box;
  border-radius: 20px;
  font-size: 14px;
  background-color: ${({ $active }) => ($active ? '#ffffff' : 'rgba(255, 255, 255, 0.2)')};
  color: ${({ $active }) => ($active ? '#1a1a1a' : 'rgba(255, 255, 255, 0.85)')};
  backdrop-filter: blur(6px);
`;

export const StepNumber = styled.span<{ $active?: boolean }>`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 12px;
  color: #ffffff;
  background-color: ${({ $active }) => ($active ? '#006397' : 'transparent')};
  border: 1px solid ${({ $active }) => ($active ? '#006397' : 'rgba(255, 255, 255, 0.7)')};
`;

/* ---------- Painel direito (formulário) ---------- */

export const ContainerLogin = styled.section`
  flex: 1 1 45%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px 24px;
  box-sizing: border-box;
  background-color: #ffffff;
`;

export const LimitedContainer = styled.form`
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
`;

export const TitleLogin = styled.h2`
  margin: 0 0 32px;
  text-align: center;
  font-size: 32px;
  font-weight: 500;
  color: #006397;
`;

export const Row = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 20px;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const PhonePrefix = styled.span`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #1a1a1a;
`;

export const ValidIcon = styled.span`
  color: #2da44e;
`;

export const PasswordRules = styled.div`
  margin-top: 10px;
  font-size: 11px;
  line-height: 1.6;
  color: #8a8f94;
`;

export const Rule = styled.span<{ $ok?: boolean }>`
  color: ${({ $ok }) => ($ok ? '#1a1a1a' : '#8a8f94')};
  font-weight: ${({ $ok }) => ($ok ? 600 : 400)};
`;

export const HelperText = styled.p`
  margin: 12px 0 0;
  text-align: center;
  font-size: 12px;
  color: #1a1a1a;

  a {
    color: #006397;
    font-weight: 600;
  }
`;

export const Divider = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 16px 0;
  font-size: 12px;
  color: #1a1a1a;

  &::before,
  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background-color: #ececec;
  }
`;

export const Terms = styled.p`
  margin: 24px 0 0;
  text-align: center;
  font-size: 11px;
  line-height: 1.6;
  color: #3a3f44;

  a {
    color: #006397;
  }
`;
