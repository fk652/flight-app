export const paramsFormatter = (params) => {
  const kvPairs = [`access_key=${process.env.REACT_APP_AVIATION_API_KEY}`];

  for (const key in params) {
    if (params[key] === '') continue;
    kvPairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(params[key]));
  }

  return kvPairs.join('&');
}