import type { ProductType } from '../../../shared/types/ProductType';
import { bakeryCategoriesMock } from './categories.mock';

export const bakeryProductsMock: ProductType[] = [
  {
    id: 1,
    name: 'Pão francês',
    description: 'Pão francês crocante, vendido por unidade.',
    price: 0.9,
    category: bakeryCategoriesMock[0],
  },
  {
    id: 2,
    name: 'Pão de queijo',
    description: 'Pão de queijo tradicional, vendido por unidade.',
    price: 2.5,
    category: bakeryCategoriesMock[1],
  },
  {
    id: 3,
    name: 'Croissant',
    description: 'Croissant de massa folhada amanteigada.',
    price: 7.5,
    category: bakeryCategoriesMock[2],
  },
  {
    id: 4,
    name: 'Sonho de creme',
    description: 'Sonho recheado com creme de confeiteiro.',
    price: 6,
    category: bakeryCategoriesMock[2],
  },
  {
    id: 5,
    name: 'Bolo de cenoura',
    description: 'Fatia de bolo de cenoura com cobertura de chocolate.',
    price: 8,
    category: bakeryCategoriesMock[2],
  },
  {
    id: 6,
    name: 'Broa de milho',
    description: 'Broa de milho caseira, vendida por unidade.',
    price: 3.5,
    category: bakeryCategoriesMock[2],
  },
  {
    id: 7,
    name: 'Baguete',
    description: 'Baguete artesanal de casca crocante.',
    price: 8.5,
    category: bakeryCategoriesMock[0],
  },
  {
    id: 8,
    name: 'Pão integral',
    description: 'Pão integral artesanal, vendido por unidade.',
    price: 12,
    category: bakeryCategoriesMock[0],
  },
];
