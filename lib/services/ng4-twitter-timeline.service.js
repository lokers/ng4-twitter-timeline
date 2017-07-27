"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Rx_1 = require("rxjs/Rx");
var Ng4TwitterTimelineService = (function () {
    function Ng4TwitterTimelineService() {
        this.TWITTER_SCRIPT_ID = 'twitter-wjs';
        this.TWITTER_WIDGET_URL = 'https://platform.twitter.com/widgets.js';
    }
    Ng4TwitterTimelineService.prototype.LoadScript = function () {
        var that = this;
        return Rx_1.Observable.create(function (observer) {
            //START LOADING SCRIPT INTO DOM
            that.startScriptLoad();
            //WHEN TWITTER WIDGETS SCRIPT IS LOADED, THEN PASS ALONG....
            window['twttr'].ready(function onLoadTwitterScript(twttr) {
                observer.next(twttr);
                observer.complete();
            });
        });
    };
    ;
    Ng4TwitterTimelineService.prototype.startScriptLoad = function () {
        window['twttr'] = (function (d, s, id, url) {
            var js, fjs = d.getElementsByTagName(s)[0], t = window['twttr'] || {};
            if (d.getElementById(id))
                return t;
            js = d.createElement(s);
            js.id = id;
            js.src = url;
            fjs.parentNode.insertBefore(js, fjs);
            t._e = [];
            t.ready = function (f) {
                t._e.push(f);
            };
            return t;
        }(document, "script", this.TWITTER_SCRIPT_ID, this.TWITTER_WIDGET_URL));
    };
    Ng4TwitterTimelineService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], Ng4TwitterTimelineService);
    return Ng4TwitterTimelineService;
}());
exports.Ng4TwitterTimelineService = Ng4TwitterTimelineService;
