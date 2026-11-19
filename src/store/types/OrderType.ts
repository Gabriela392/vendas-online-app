import type { UserType } from '../../modules/login/types/UserType';

export interface OrderType {
  id: number;
  date: string;
  userId: number;
  user: UserType;
  amountProducts: number;
}

// "id": 2,
//         "date": "Mon Feb 12 2005 20 20:07:01 GMT-0300 (Brasilia Standard Time)",
//         "userID": 2,
//         "adressId": 1,
//         "paymentId": 6,
//         "user": {
//             "id": 2,
//             "name": "Gabiela Caetano",
//             "email": "gabrielacaetano@.com",
//             "phone": "81993813941"
//             "cpf": "00000000000"
//         },
//         "amountProducts": 2
