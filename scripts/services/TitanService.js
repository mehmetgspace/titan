const TitanService = function () {
  this.api = new API();
};

/**
 * @define requestWithXMLHttpRequest
 * @description get posts with XMLHttpRequest
 */
TitanService.prototype.getPostsWithXMLHttpRequest = function (callback) {
  this.api.requestWithXMLHttpRequest('GET', 'posts', {}, callback);
};

/**
 * @define requestWithFetch
 * @description get post with fetch
 */
TitanService.prototype.getPostsWithFetch = function (callback) {
  this.api.requestWithFetch('GET', 'posts', {}, callback);
};