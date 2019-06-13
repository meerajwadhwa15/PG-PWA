import axios from 'axios';

async function Fetch({type, url, data, params}) {
  var res = await axios({
    method: type || 'get',
    url,
    data,
    params,
    headers: {
      authorization: 'Bearer eyJhbGciOiJSUzI1NiJ9.eyJyb2xlcyI6WyJST0xFX0FHRU5UIiwiUk9MRV9XRUIiLCJST0xFX1VTRVIiXSwidXNlcm5hbWUiOiJxYWFnZW50MUB0ZXN0LmNvbSIsImlkIjoiNDJiNTNjY2MtYTYzZi00YzBmLWI1MWItMDU4OThlNWVhYzE2IiwidXNlcklkIjo0Mjk3MTcsInJlZ2lvbiI6InNnIiwiaXNzIjoiYXV0aG9yaXphdGlvbi1zZXJ2ZXIiLCJpYXQiOjE1NjA0MDkyNzYsImV4cCI6MTU2MDQ5NTY3Nn0.tZGDCfb8OZhTgCp2DGrr9JMeDjpK_G7jG5NkNmges-DEkoWQiX7DT09g4jifqUKExHyxqX_gYM8XdcGxx7-F6S9PVLXLYljzrNSvrVhiC28RaQEcj31blJng1TLJ7YnCWmXSuTt95g1Hvwx6QCmzZ41OhmKsKzoTp7otCb-qZTfSjNSO_VpujV5b8GOAagvZIi_GdRD1V0nwxKvMolgH-EdNekI2GuMEtptI1sOyLi2FmdQGhi4eywqJi8rZkfFHcbtM9y_YrykpSiNVjxZRrDdG884j2c1n9vHQHQ6vbqWBB61T-RFTwfDTJummTGDep9o27wqzxPP4wzNQIb1UbN31qPmvy5_1nihT9uRYLcJfwtsxbHBQlDIsqirsiQbFqF3TK7JhRFjhLyfa4A_9KKYAw9-MDJQ0ET9tViyoTQugL6tULlJs2ZhoPq2fCIp0ywdxIOUTc2B_FbZ7Ecr8tGx9cu3keFNa7LsFjX6FqPKvmEOrEuRyN0CWzHvstEPFs0nrYpxg-VbK3hE3wuLf1Xsfk5dMf-W5Prc9XEAXZcOaAKXFLw4VLSTwAp4uSn-8v6FGvDoiF7JVs4C6mxuYAFV3cA8KC2nmRjFPd9z7J7a2cijOiQGsnHhtpo7QFsmE2zbXxBj02j1LsxtYm_Fn4S1IV9jb7UnrBOba7Tj-X98'
    },
    timeout: 5000,
  });
  return res.data;
}

export default Fetch;
