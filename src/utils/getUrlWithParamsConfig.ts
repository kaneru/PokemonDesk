import config from '../config';

function getUrlWithParamsConfig(endpointConfig: string, query: any) {
  const url = {
    ...config.client.server,
    ...config.client.endpoint[endpointConfig as keyof typeof config.client.endpoint].uri,
    // endpointConfig as keyof typeof config.client.endpoint
    // endpointConfig может быть одним из ключей в endpoint
    query: {},
  };

  const queryToChange = { ...query };

  const pathname = Object.keys(query).reduce((acc, val) => {
    if (acc.indexOf(`{${val}}`) !== -1) {
      const result = acc.replace(`{${val}}`, queryToChange[val]);
      delete queryToChange[val];
      return result;
    }
    return acc;
  }, url.pathname);

  url.pathname = pathname;
  url.query = {
    ...queryToChange,
  };
  return url;
}

export default getUrlWithParamsConfig;
