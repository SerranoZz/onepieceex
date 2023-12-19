class CustomError extends Error {
    errorCode: number;
    msgs?: string[];
    constructor(message: string, errorCode: number, msgs?: string[]) {
        super(message);
        this.errorCode = errorCode;
        this.msgs = msgs;
    }
}
export default CustomError;