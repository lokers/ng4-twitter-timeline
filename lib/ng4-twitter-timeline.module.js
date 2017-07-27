"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var index_1 = require("./index");
var Ng4TwitterTimelineModule = (function () {
    function Ng4TwitterTimelineModule() {
    }
    Ng4TwitterTimelineModule_1 = Ng4TwitterTimelineModule;
    Ng4TwitterTimelineModule.forRoot = function () {
        return {
            ngModule: Ng4TwitterTimelineModule_1,
            providers: []
        };
    };
    Ng4TwitterTimelineModule = Ng4TwitterTimelineModule_1 = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule
            ],
            declarations: [
                index_1.Ng4TwitterTimelineComponent
            ],
            exports: [
                index_1.Ng4TwitterTimelineComponent
            ],
            providers: [
                index_1.Ng4TwitterTimelineService
            ]
        })
    ], Ng4TwitterTimelineModule);
    return Ng4TwitterTimelineModule;
    var Ng4TwitterTimelineModule_1;
}());
exports.Ng4TwitterTimelineModule = Ng4TwitterTimelineModule;
