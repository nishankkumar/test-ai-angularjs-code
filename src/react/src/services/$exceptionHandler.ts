import { useRootScope } from '../hooks/useRootScope';

class ExceptionLoggingService {
  log(exception: any, cause?: string) {
    // Implement the logging logic here
    console.error('Exception:', exception, 'Cause:', cause);
  }
}

const exceptionLoggingService = new ExceptionLoggingService();

const useExceptionHandler = () => {
  const { setRootScopeAttribute } = useRootScope();

  const handleException = (exception: any, cause?: string) => {
    exceptionLoggingService.log(exception, cause);
    setRootScopeAttribute('lastException', { exception, cause });
  };

  return handleException;
};

export default useExceptionHandler;