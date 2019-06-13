import axios from 'axios';

async function Fetch({type, url, data, params}) {
  var res = await axios({
    method: type || 'get',
    url,
    data,
    params,
    timeout: 2000,
  });
  return res.data;
}

export default Fetch;
