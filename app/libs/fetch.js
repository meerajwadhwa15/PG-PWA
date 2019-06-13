import axios from 'axios';

async function Fetch({type, url, data, params}) {
  var res = await axios({
    method: type || 'get',
    url,
    data,
    params,
    timeout: 5000,
  });
  return res.data;
}

export default Fetch;
