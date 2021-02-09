const ajax =  (() => {
  
  const req = (method, url, callback, payload) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.send(JSON.stringify(payload));

    xhr.onload = () => {
      (xhr.status === 200 || xhr.status === 201) ? callback(JSON.parse(xhr.response)) : console.error(xhr.status);
    };
  };

  return {
    get(url, callback) {
      req('GET', url, callback);
    },
    post(url, payload, callback) {
      req('POST', url, callback, payload);
    },
    patch(url, payload, callback) {
      req('PATCH', url, callback, payload)
    },
    delete(url, callback) {
      req('DELETE', url, callback);
    }
  }
})();

export default ajax;