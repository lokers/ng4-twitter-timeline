var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ElementRef, Input } from '@angular/core';
import { Ng4TwitterTimelineService } from '../../services/index';
var Ng4TwitterTimelineComponent = (function () {
    function Ng4TwitterTimelineComponent(element, ng4TwitterTimelineService) {
        this.element = element;
        this.ng4TwitterTimelineService = ng4TwitterTimelineService;
    }
    Ng4TwitterTimelineComponent.prototype.ngOnInit = function () {
    };
    Ng4TwitterTimelineComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        //MAKE SURE TWITTER WIDGET SCRIPT IS LOADED IN HEAD...
        this.ng4TwitterTimelineService.LoadScript().subscribe(
        //SUCCESS, WE HAVE TWITTER WIDGETS JS FILE LOADED...
        function (twttr) {
            var nativeElement = _this.element.nativeElement;
            window['twttr'].widgets.createTimeline(_this.dataSource, nativeElement, _this.options).then(function success(embed) {
                //console.log('Created tweet widget: ', embed);
            }).catch(function creationError(message) {
                //console.log('Could not create widget: ', message);
            });
        }, 
        //ERROR
        function (err) {
            console.log('****  ERROR LOADING TWITTER WIDGET', err);
        }, 
        //COMPLETE
        function () {
        });
    };
    Ng4TwitterTimelineComponent.prototype.onTwitterLoaded = function (twttr) {
        console.log('TWITTER LOADED YO', twttr);
    };
    ;
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], Ng4TwitterTimelineComponent.prototype, "dataSource", void 0);
    Ng4TwitterTimelineComponent = __decorate([
        Component({
            selector: 'ng4-twitter-timeline',
            template: "",
            styles: [""],
            providers: []
        }),
        __metadata("design:paramtypes", [ElementRef,
            Ng4TwitterTimelineService])
    ], Ng4TwitterTimelineComponent);
    return Ng4TwitterTimelineComponent;
}());
export { Ng4TwitterTimelineComponent };
