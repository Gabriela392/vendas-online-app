import '@testing-library/jest-dom';
import { TextEncoder, TextDecoder } from 'util';
import { jest } from '@jest/globals';

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

globalThis.__mockNavigate = jest.fn();

const reactRouterDom = await import('react-router-dom');
jest.unstable_mockModule('react-router-dom', () => ({
  ...reactRouterDom,
  redirect: jest.fn(),
  useNavigate: () => globalThis.__mockNavigate,
}));
