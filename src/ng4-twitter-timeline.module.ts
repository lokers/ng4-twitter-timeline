import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import
{
	//ng4-twitter-timeline
	Ng4TwitterTimelineComponent,
	Ng4TwitterTimelineService
} from './index';


@NgModule({
	imports:
	[
		CommonModule
	],
	declarations:
	[
		Ng4TwitterTimelineComponent
	],
	exports:
	[
		Ng4TwitterTimelineComponent
	],
	providers:
	[
		Ng4TwitterTimelineService
	]
})
export class Ng4TwitterTimelineModule 
{
	static forRoot(): ModuleWithProviders
	{
		return {
			ngModule: Ng4TwitterTimelineModule,
			providers:
			[ 
			]
		};
	}	
}