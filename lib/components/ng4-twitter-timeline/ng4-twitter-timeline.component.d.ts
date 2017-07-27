import { AfterViewInit, ElementRef, OnInit } from '@angular/core';
import { Ng4TwitterTimelineService } from '../../services/index';
export declare class Ng4TwitterTimelineComponent implements OnInit, AfterViewInit {
    private element;
    private ng4TwitterTimelineService;
    screenName: string;
    constructor(element: ElementRef, ng4TwitterTimelineService: Ng4TwitterTimelineService);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    private onTwitterLoaded(twttr);
}
