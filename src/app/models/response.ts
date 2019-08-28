export class RESPONSE {
    public ok: boolean;
    public status: number;
    public statusText: string;
    public type: number;
    public url: string;
    public data: any;
    constructor(obj: any = {}) {
        this.ok = obj.ok;
        this.status = obj.status;
        this.statusText = obj.statusText;
        this.type = obj.type;
        this.url = obj.url;
        this.data = JSON.parse(obj._body);
    }
}