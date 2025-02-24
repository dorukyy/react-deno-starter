import { serve } from "https://deno.land/std@0.203.0/http/server.ts";
import { serveDir } from "https://deno.land/std@0.203.0/http/file_server.ts";
import { config } from "https://deno.land/x/dotenv@v3.2.0/mod.ts";

const env = config();
const port = parseInt(env.PORT) || 8080;

const handler = (request) => {
  return serveDir(request, { fsRoot: "./dist" });
};

console.log(`HTTP webserver running. Access it at: http://localhost:${port}/`);
await serve(handler, { port });