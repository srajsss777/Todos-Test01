export class APIResponse<T> {

    private status: number;
    private message: string;
    private payload: T;
    private error: string;
    
    constructor() {
        this.status = 0;
        this.message = '';
        this.payload = null;
        this.error = '';
    }


    public get apiStatus(): number {
        return this.status;
    }

    public set apiStatus(value: number) {
        this.status = value;
    }

    public get apiMessage(): string {
        return this.message;
    }


    public set apiMessage(value: string) {
        this.message = value;
    }

    public get apiPayload(): T {
        return this.payload;
    }

    public set apiPayload(value: T) {
        this.payload = value;
    }

    public get apiError(): string {
        return this.error;
    }

    public set apiError(value: string) {
        this.error = value;
    }

}
