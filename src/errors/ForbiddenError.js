export default class ForbiddenError extends Error {
  constructor(status, message) {
    super('ForbiddenError');
    this.status = status;
    this.name = 'ForbiddenError';
    this.message = message;
  }

  toString() {
    return `${this.name}:${this.message}`;
  }
}
