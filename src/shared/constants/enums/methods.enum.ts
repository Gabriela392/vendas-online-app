export const MethodsEnum = {
  GET: 'GET',
  POST: 'POST',
  DELETE: 'DELETE',
  PATCH: 'PATCH',
  PUT: 'PUT',
} as const;

export type MethodsEnum = (typeof MethodsEnum)[keyof typeof MethodsEnum];