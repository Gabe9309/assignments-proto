// package: news
// file: news/news.proto

import { NewsRequest, NewsResponse, ListSectionsRequest, SectionListResponse } from "../news/news_pb";
import { grpc } from "@improbable-eng/grpc-web";

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
  requestType: NewsRequest,
  responseType: NewsResponse
};

NewsService.ListSections = {
  methodName: "ListSections",
  service: NewsService,
  requestStream: false,
  responseStream: false,
  requestType: ListSectionsRequest,
  responseType: SectionListResponse
};

const _NewsService = NewsService;
export { _NewsService as NewsService };

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

const _NewsServiceClient = NewsServiceClient;
export { _NewsServiceClient as NewsServiceClient };

