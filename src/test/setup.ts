import 'whatwg-fetch';
import '@testing-library/jest-dom';
import { server } from './mocks/server';
beforeAll(() => {
  server.listen({
    // Aqui nos ajuda a saber quais sao as requests que ainda nao foram mocadas.
    onUnhandledRequest: (req) => {
      console.error(`=== ${req.method} ${req.url} isn't mocked ===`);
    }
  });
});

afterAll(() => {
  server.close(); 
})

afterEach(() => {
  server.resetHandlers();
})

