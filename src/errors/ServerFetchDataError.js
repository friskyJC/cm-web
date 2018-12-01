export default class ServerFetchDataError extends Error {
  constructor(requestId, code, message) {
    super('ServerFetchDataError');
    this.code = code;
    this.name = 'ServerFetchDataError';
    this.message = message;
    this.requestId = requestId;
  }

  toString() {
    return `${this.name}:${this.message}`;
  }
}
