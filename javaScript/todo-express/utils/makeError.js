const makeError = msg => {
  const error = new Error(msg);
  error.status = 400;
}

export default makeError;