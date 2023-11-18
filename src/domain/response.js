class Response {
  constructor(status, httpStatus, message, data) {
    this.timesStamp = new Date().toLocaleDateString();
    this.status = status;
    this.httpStatus = httpStatus;
    this.message = message;
    this.data = data;
  }
}

export default Response;
