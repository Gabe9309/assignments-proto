// package: users
// file: users/users.proto

var users_users_pb = require("../users/users_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

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
  requestType: users_users_pb.SignupRequest,
  responseType: users_users_pb.SignupResponse
};

UserRegService.Login = {
  methodName: "Login",
  service: UserRegService,
  requestStream: false,
  responseStream: false,
  requestType: users_users_pb.LoginRequest,
  responseType: users_users_pb.LoginResponse
};

exports.UserRegService = UserRegService;

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

exports.UserRegServiceClient = UserRegServiceClient;

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
  requestType: users_users_pb.GetUserRequest,
  responseType: users_users_pb.GetUserResponse
};

UserService.UpdateUser = {
  methodName: "UpdateUser",
  service: UserService,
  requestStream: false,
  responseStream: false,
  requestType: users_users_pb.UpdateUserRequest,
  responseType: users_users_pb.UpdateUserResponse
};

UserService.DeleteUser = {
  methodName: "DeleteUser",
  service: UserService,
  requestStream: false,
  responseStream: false,
  requestType: users_users_pb.DeleteUserRequest,
  responseType: users_users_pb.DeleteUserResponse
};

exports.UserService = UserService;

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

exports.UserServiceClient = UserServiceClient;

