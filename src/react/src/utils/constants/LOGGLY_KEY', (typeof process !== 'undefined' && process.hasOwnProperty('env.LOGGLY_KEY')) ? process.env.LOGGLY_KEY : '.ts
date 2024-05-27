// react/src/utils/constants/LOGGLY_KEY.ts

/**
 * Loggly requires a global variable '_LTracker' in order to send
 * exceptions to its cloud service.
 *
 * To add your personal loggly key, update the empty string value
 * with your key.
 *
 * process.env.LOGGLY_KEY : '' -> process.env.LOGGLY_KEY : '<key>'
 */

const LOGGLY_KEY: string = (typeof process !== 'undefined' && process.env.LOGGLY_KEY) ? process.env.LOGGLY_KEY : '';

export default LOGGLY_KEY;