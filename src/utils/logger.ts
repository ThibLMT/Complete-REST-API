import dayjs from "dayjs";
import pino from "pino";

const logger = pino({
  transport: {
    target: "pino-pretty",
    options: {
      translateTime: "SYS:standard",
      timestampKey: "time",
    },
  },
  base: {
    pid: false,
  },
});

export default logger;
