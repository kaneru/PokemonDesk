import config from '../config';

function getUrlWithParamsConfig(endpointConfig: string) {
  const url = {
    ...config.client.server,
    ...config.client.endpoint[endpointConfig as keyof typeof config.client.endpoint].uri,
    // endpointConfig as keyof typeof config.client.endpoint
    // endpointConfig может быть одним из ключей в endpoint
  };
  return url;
}

export default getUrlWithParamsConfig;
