class AppError {
    message;
    statusCode;

    constructor(message, statusCode = 400) {
        this.message = messagethis
        this.statusCode = statusCode
    }
}

module.exports = AppError