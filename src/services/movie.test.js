import { getMovies } from './movie';
import { MOCKS_POST } from './mocks';
import axios from 'axios';

jest.mock('axios');

describe('Movie Service', () => {
  it('should return movies', async () => {
    const mockResponse = { data: MOCKS_POST };
    axios.get.mockResolvedValue(mockResponse);
    const results = await getMovies();
    expect(results).toHaveLength(mockResponse.data.length);
    expect(results).toEqual(mockResponse.data);
    expect(results).toMatchObject(mockResponse.data);
  });
});
