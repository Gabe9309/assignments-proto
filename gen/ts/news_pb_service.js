// package: news
// file: news.proto

var news_pb = require("./news_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var NewsService = (function () {
  function NewsService() {}
  NewsService.serviceName = "news.NewsService";
  return NewsService;
}());

NewsService.GetNewsFeed = {
  methodName: "GetNewsFeed",
  service: NewsService,
  requestStream: false,
  responseStream: false,
  requestType: news_pb.NewsRequest,
  responseType: news_pb.NewsResponse
};

NewsService.ListSections = {
  methodName: "ListSections",
  service: NewsService,
  requestStream: false,
  responseStream: false,
  requestType: news_pb.ListSectionsRequest,
  responseType: news_pb.SectionListResponse
};

exports.NewsService = NewsService;

function NewsServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

NewsServiceClient.prototype.getNewsFeed = function getNewsFeed(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(NewsService.GetNewsFeed, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

NewsServiceClient.prototype.listSections = function listSections(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(NewsService.ListSections, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.NewsServiceClient = NewsServiceClient;

