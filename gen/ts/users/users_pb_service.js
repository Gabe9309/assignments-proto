// package: users
// file: users/users.proto

import { SignupRequest, SignupResponse, LoginRequest, LoginResponse, GetUserRequest, GetUserResponse, UpdateUserRequest, UpdateUserResponse, DeleteUserRequest, DeleteUserResponse } from "../users/users_pb";
import { grpc } from "@improbable-eng/grpc-web";

var UserRegService = (function () {
  function UserRegService() {}
  UserRegService.serviceName = "users.UserRegService";
  return UserRegService;
}());

UserRegService.Signup = {
  methodName: "Signup",
  service: UserRegService,
  requestStream: false,
  responseStream: false,
  requestType: SignupRequest,
  responseType: SignupResponse
};

UserRegService.Login = {
  methodName: "Login",
  service: UserRegService,
  requestStream: false,
  responseStream: false,
  requestType: LoginRequest,
  responseType: LoginResponse
};

const _UserRegService = UserRegService;
export { _UserRegService as UserRegService };

function UserRegServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

UserRegServiceClient.prototype.signup = function signup(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UserRegService.Signup, {
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

UserRegServiceClient.prototype.login = function login(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UserRegService.Login, {
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

const _UserRegServiceClient = UserRegServiceClient;
export { _UserRegServiceClient as UserRegServiceClient };

var UserService = (function () {
  function UserService() {}
  UserService.serviceName = "users.UserService";
  return UserService;
}());

UserService.GetUser = {
  methodName: "GetUser",
  service: UserService,
  requestStream: false,
  responseStream: false,
  requestType: GetUserRequest,
  responseType: GetUserResponse
};

UserService.UpdateUser = {
  methodName: "UpdateUser",
  service: UserService,
  requestStream: false,
  responseStream: false,
  requestType: UpdateUserRequest,
  responseType: UpdateUserResponse
};

UserService.DeleteUser = {
  methodName: "DeleteUser",
  service: UserService,
  requestStream: false,
  responseStream: false,
  requestType: DeleteUserRequest,
  responseType: DeleteUserResponse
};

const _UserService = UserService;
export { _UserService as UserService };

function UserServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

UserServiceClient.prototype.getUser = function getUser(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UserService.GetUser, {
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

UserServiceClient.prototype.updateUser = function updateUser(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UserService.UpdateUser, {
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

UserServiceClient.prototype.deleteUser = function deleteUser(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UserService.DeleteUser, {
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

const _UserServiceClient = UserServiceClient;
export { _UserServiceClient as UserServiceClient };

