import { createServer, IncomingMessage, ServerResponse } from 'http';
import { success, error } from '@ayanthedev/colorlogs';

export function start(port: number){
  const server = createServer((request: IncomingMessage, response: ServerResponse) => {
    response.end('Online.');
  });
  try {
    server.listen(port, () => {
      success('server started, port: ' + port);
    });
  } catch (err) {
    error(err);
  };
};
