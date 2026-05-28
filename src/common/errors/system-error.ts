import { AppError } from './app-error';

export class SystemError extends AppError {
    constructor(message: string) {
        super(message, 500, 'SYSTEM_ERROR');
    }
}