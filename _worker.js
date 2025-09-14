// 需要反代的地址
const hostname = "https://visa.com"

function handleRequest(request) {
  if (request.headers.get('Upgrade') !== 'websocket') {
    return new Response('Access Denied', { status: 403 });
  }
  let url = new URL(request.url);
  return fetch(new Request(hostname + url.pathname + url.search, request));
}

export default {
    async fetch(request, env, ctx) {
        return handleRequest(request);
    },
};
