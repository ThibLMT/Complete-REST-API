import logger from "pino";
import dayjs from "dayjs";

const log = logger({
  transport: {
    target: "pino-pretty",
    options: {
      colorize: true,
      sync: true,
    },
  },
  base: {
    pid: false,
  },
  timestamp: () => `,"time":${dayjs().format()}`,
});

export default log;
