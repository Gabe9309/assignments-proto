// package: users
// file: users/users.proto

import * as users_users_pb from "../users/users_pb";
import {grpc} from "@improbable-eng/grpc-web";

type UserRegServiceSignup = {
  readonly methodName: string;
  readonly service: typeof UserRegService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof users_users_pb.SignupRequest;
  readonly responseType: typeof users_users_pb.SignupResponse;
};

type UserRegServiceLogin = {
  readonly methodName: string;
  readonly service: typeof UserRegService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof users_users_pb.LoginRequest;
  readonly responseType: typeof users_users_pb.LoginResponse;
};

export class UserRegService {
  static readonly serviceName: string;
  static readonly Signup: UserRegServiceSignup;
  static readonly Login: UserRegServiceLogin;
}

type UserServiceGetUser = {
  readonly methodName: string;
  readonly service: typeof UserService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof users_users_pb.GetUserRequest;
  readonly responseType: typeof users_users_pb.GetUserResponse;
};

type UserServiceUpdateUser = {
  readonly methodName: string;
  readonly service: typeof UserService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof users_users_pb.UpdateUserRequest;
  readonly responseType: typeof users_users_pb.UpdateUserResponse;
};

type UserServiceDeleteUser = {
  readonly methodName: string;
  readonly service: typeof UserService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof users_users_pb.DeleteUserRequest;
  readonly responseType: typeof users_users_pb.DeleteUserResponse;
};

export class UserService {
  static readonly serviceName: string;
  static readonly GetUser: UserServiceGetUser;
  static readonly UpdateUser: UserServiceUpdateUser;
  static readonly DeleteUser: UserServiceDeleteUser;
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

export class UserRegServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  signup(
    requestMessage: users_users_pb.SignupRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: users_users_pb.SignupResponse|null) => void
  ): UnaryResponse;
  signup(
    requestMessage: users_users_pb.SignupRequest,
    callback: (error: ServiceError|null, responseMessage: users_users_pb.SignupResponse|null) => void
  ): UnaryResponse;
  login(
    requestMessage: users_users_pb.LoginRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: users_users_pb.LoginResponse|null) => void
  ): UnaryResponse;
  login(
    requestMessage: users_users_pb.LoginRequest,
    callback: (error: ServiceError|null, responseMessage: users_users_pb.LoginResponse|null) => void
  ): UnaryResponse;
}

export class UserServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getUser(
    requestMessage: users_users_pb.GetUserRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: users_users_pb.GetUserResponse|null) => void
  ): UnaryResponse;
  getUser(
    requestMessage: users_users_pb.GetUserRequest,
    callback: (error: ServiceError|null, responseMessage: users_users_pb.GetUserResponse|null) => void
  ): UnaryResponse;
  updateUser(
    requestMessage: users_users_pb.UpdateUserRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: users_users_pb.UpdateUserResponse|null) => void
  ): UnaryResponse;
  updateUser(
    requestMessage: users_users_pb.UpdateUserRequest,
    callback: (error: ServiceError|null, responseMessage: users_users_pb.UpdateUserResponse|null) => void
  ): UnaryResponse;
  deleteUser(
    requestMessage: users_users_pb.DeleteUserRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: users_users_pb.DeleteUserResponse|null) => void
  ): UnaryResponse;
  deleteUser(
    requestMessage: users_users_pb.DeleteUserRequest,
    callback: (error: ServiceError|null, responseMessage: users_users_pb.DeleteUserResponse|null) => void
  ): UnaryResponse;
}

