// package: news
// file: news/news.proto

import * as news_news_pb from "../news/news_pb";
import {grpc} from "@improbable-eng/grpc-web";

type NewsServiceGetNewsFeed = {
  readonly methodName: string;
  readonly service: typeof NewsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof news_news_pb.NewsRequest;
  readonly responseType: typeof news_news_pb.NewsResponse;
};

type NewsServiceListSections = {
  readonly methodName: string;
  readonly service: typeof NewsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof news_news_pb.ListSectionsRequest;
  readonly responseType: typeof news_news_pb.SectionListResponse;
};

export class NewsService {
  static readonly serviceName: string;
  static readonly GetNewsFeed: NewsServiceGetNewsFeed;
  static readonly ListSections: NewsServiceListSections;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class NewsServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getNewsFeed(
    requestMessage: news_news_pb.NewsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: news_news_pb.NewsResponse|null) => void
  ): UnaryResponse;
  getNewsFeed(
    requestMessage: news_news_pb.NewsRequest,
    callback: (error: ServiceError|null, responseMessage: news_news_pb.NewsResponse|null) => void
  ): UnaryResponse;
  listSections(
    requestMessage: news_news_pb.ListSectionsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: news_news_pb.SectionListResponse|null) => void
  ): UnaryResponse;
  listSections(
    requestMessage: news_news_pb.ListSectionsRequest,
    callback: (error: ServiceError|null, responseMessage: news_news_pb.SectionListResponse|null) => void
  ): UnaryResponse;
}

