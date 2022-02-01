import winston from 'winston'

const logger = winston.createLogger({
   level: 'info',
   format: winston.format.json(),
   defaultMeta: { service: 'user-service' },
   transports: [
      //
      // - Write all logs with importance level of `error` or less to `error.log`
      // - Write all logs with importance level of `info` or less to `combined.log`
      //

      new winston.transports.File({
         filename: 'error.log',
         level: 'error',
         format: winston.format.json(),
      }),
      new winston.transports.File({
         filename: 'combined.log',
         format: winston.format.json(),
      }),
   ],
})
if (process.env.NODE_ENV !== 'production') {
   logger.add(
      new winston.transports.Console({
         format: winston.format.simple(),
      })
   )
}
export default logger
