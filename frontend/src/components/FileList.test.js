// frontend/src/components/FileList.test.js
import React from 'react';
import { act, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import FileList from './FileList';
import * as api from '../api';

jest.mock('../api');

describe('FileList Component', () => {
  test('displays files data', async () => {
    const mockData = [
      {
        file: 'file1.csv',
        lines: [
          { text: 'RgTya', number: 64075909, hex: '70ad29aacf0b690b0467fe2b2767f765' },
        ],
      },
    ];

    api.getFilesData.mockResolvedValue(mockData);

    render(<FileList />);

    await waitFor(() => {
      expect(screen.getByText('file1.csv')).toBeInTheDocument();
      expect(screen.getByText('Text: RgTya, Number: 64075909, Hex: 70ad29aacf0b690b0467fe2b2767f765')).toBeInTheDocument();
    });
  });
});
