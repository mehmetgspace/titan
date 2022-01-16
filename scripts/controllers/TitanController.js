const TitanController = function() {
  this.titanService = new TitanService();
  this.postList = [];
};

/**
 * @define getPostsWithXMLHttpRequest
 * @description get post list from api with XMLHttpRequest
 */
TitanController.prototype.getPostsWithXMLHttpRequest = function() {
  const self = this;

  this.titanService.getPostsWithXMLHttpRequest(function(postList) {
    self.postList = postList;
  });
};

/**
 * @define getPostsWithFetch
 * @description get post list from api with fetch
 */
TitanController.prototype.getPostsWithFetch = function() {
  const self = this;

  this.titanService.getPostsWithFetch(function(postList) {
    self.postList = postList;
  });
};