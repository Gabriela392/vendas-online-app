import { render } from '@testing-library/react';

import Button from '../Button';

describe('test button', () => {
  it('teste render', () => {
    render(<Button />);
    expect(1).toBe(1);
  });
});
