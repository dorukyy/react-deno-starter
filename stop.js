import { config } from "https://deno.land/x/dotenv@v3.2.0/mod.ts";

    const env = config();
    const port = parseInt(env.PORT) || 8080;

    const process = Deno.run({
      cmd: ["lsof", "-t", `-i:${port}`],
      stdout: "piped",
      stderr: "piped"
    });

    const output = await process.output();
    const pids = new TextDecoder().decode(output).trim().split("\n");

    if (pids.length > 0 && pids[0] !== "") {
      for (const pid of pids) {
        const killProcess = Deno.run({
          cmd: ["kill", "-9", pid],
          stdout: "piped",
          stderr: "piped"
        });
        await killProcess.status();
        console.log(`Process with PID ${pid} on port ${port} has been killed.`);
      }
    } else {
      console.log(`No process found on port ${port}.`);
    }