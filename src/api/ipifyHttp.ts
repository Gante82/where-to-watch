import createHttp from 'api/common';

console.log(process.env.REACT_APP_IPIFY_ENDPOINT);
const ipifyHttp = createHttp(process.env.REACT_APP_IPIFY_ENDPOINT, {
  'Cache-Control': 'no-cache',
});

export default ipifyHttp;
