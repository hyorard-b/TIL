const ajax =  (() => {
  
  const req = (method, url, successCallback, failureCallback, payload) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.send(JSON.stringify(payload));

    xhr.onload = () => {
      (xhr.status === 200 || xhr.status === 201) ? successCallback(JSON.parse(xhr.response)) : failureCallback(xhr.response);
    };
  };

  return {
    get(url, callback) {
      req('GET', url, callback);
    },
    post(url, payload, successCallback, failureCallback) {
      req('POST', url, successCallback, failureCallback, payload);
    },
    patch(url, payload, successCallback, failureCallback) {
      req('PATCH', url, successCallback, failureCallback, payload);
    },
    delete(url, successCallback, failureCallback) {
      req('DELETE', url, successCallback, failureCallback);
    }
  }
})();

export default ajax;