const HttpStatus = {
  OK: { code: 200, status: "OK" },
  CREATED: { code: 201, status: "Created" },
  BAD_REQUEST: { code: 400, status: "Bad Request" },
  NOT_FOUND: { code: 404, status: "Not Found" },
  INTERNAL_SERVER: { code: 500, status: "Internal Server Error" },
  NO_CONTENT: { code: 204, status: "No Content" },
};

export default HttpStatus;
