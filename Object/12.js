function parse_URL(url) {
  const urlObj = new URL(url);

  let params = {};
  for (const [key, value] of urlObj.searchParams.entries()) {
    params[key] = value;
  }

  return {
    source: url,
    protocol: urlObj.protocol.replace(':', ''),
    host: urlObj.hostname,
    port: urlObj.port,
    query: urlObj.search,
    params: params,
    file: urlObj.pathname.split('/').pop(),
    hash: urlObj.hash.replace('#', ''),
    path: urlObj.pathname,
    relative: urlObj.pathname + urlObj.search + urlObj.hash,
    segments: urlObj.pathname.replace(/^\//, '').split('/')
  };
}

console.log(parse_URL('https://github.com/pubnub/python/search?utf8=%E2%9C%93&q=python'));
