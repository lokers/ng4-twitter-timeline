import { Observable } from 'rxjs/Rx';
export declare class Ng4TwitterTimelineService {
    readonly TWITTER_SCRIPT_ID: string;
    readonly TWITTER_WIDGET_URL: string;
    constructor();
    LoadScript(): Observable<any>;
    private startScriptLoad();
}
