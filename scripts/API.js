const API = function() {
  this.apiUrl = 'https://jsonplaceholder.typicode.com/';
};

/**
 * @define requestWithXMLHttpRequest
 * @description api request with XMLHttpRequest
 */
API.prototype.requestWithXMLHttpRequest = function(method, controller, params, callback) {
  const req = new XMLHttpRequest();

  req.addEventListener('load', function () {
    const getData = JSON.parse(this.responseText);
    if (Array.isArray(getData)) {
      callback(getData);
    }
  });
  req.addEventListener('error', function () {
    // error
  });
  req.open(method, this.apiUrl + controller);
  req.send();
};

/**
 * @define requestWithFetch
 * @description api request with fetch
 */
API.prototype.requestWithFetch = function(method, controller, params, callback) {
  fetch(this.apiUrl + controller)
    .then((response) => {
      response.json().then((data) => {
        const getData = data;
        if (Array.isArray(getData)) {
          callback(getData);
        }
      });
    })
    .catch((err) => {
      // error
    });
};