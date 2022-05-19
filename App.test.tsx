import * as React from 'react';
import { render } from '@testing-library/react';

import App from './';

describe('#App', () => {
  test('Render component', () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });
});
