import React from 'react';
import { act } from '@testing-library/react';

// Se usar axios
// import { AxiosStatic } from 'axios';
// eslint-disable-next-line global-require
// export const mockAxios: jest.Mocked<AxiosStatic> = require('axios').default;

export const buildSpy = () => jest.fn();

export const ensureRender = async () => {
  await act(() => Promise.resolve());
};
