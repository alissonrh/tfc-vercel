export default class MissingParamError extends Error {
  status: number;
  constructor(message: string) {
    super(message);
    this.status = 400;
  }
}
