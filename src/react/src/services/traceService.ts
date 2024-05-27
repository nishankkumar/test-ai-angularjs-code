// react/src/services/traceService.ts

import printStackTrace from 'stacktrace-js';

class TraceService {
  print() {
    return printStackTrace();
  }
}

export default new TraceService();