import { TErrorSources, TGenericErrorResponse } from './error';

const handleDuplicateError = (err: any): TGenericErrorResponse => {
  const match = err.message.match(/dup key: \{ name: "(.*?)" \}/);

  const extractedMessage = match && match[1];

  const errorSources: TErrorSources = [
    {
      path: '',
      message: `${extractedMessage} is already exist`,
    },
  ];

  const statusCode = 400;

  return {
    statusCode,
    message: 'Invalid ID',
    errorSources,
  };
};

export default handleDuplicateError;
