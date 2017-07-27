import
{
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit
} from '@angular/core';

import { Ng4TwitterTimelineService } from '../../services/index';

@Component({
  selector: 'ng4-twitter-timeline',
  template: ``,
  styles: [ `` ],
  providers: []
})
export class Ng4TwitterTimelineComponent implements OnInit, AfterViewInit
{
  @Input() dataSrc: object;
  @Input() opts: object;

  constructor
  (
    private element: ElementRef,
    private ng4TwitterTimelineService : Ng4TwitterTimelineService
  )
  {
  }

  ngOnInit()
  {
  }

  ngAfterViewInit()
  {
    //MAKE SURE TWITTER WIDGET SCRIPT IS LOADED IN HEAD...
    this.ng4TwitterTimelineService.LoadScript().subscribe 
    (
      //SUCCESS, WE HAVE TWITTER WIDGETS JS FILE LOADED...
      twttr =>
      {
        let nativeElement = this.element.nativeElement;

        window['twttr'].widgets.createTimeline(this.dataSrc, nativeElement, this.opts).then
        (
          function success(embed) 
          {
            //console.log('Created tweet widget: ', embed);
          } 
        ).catch
        (
          function creationError(message) 
          {
            //console.log('Could not create widget: ', message);
          }
        );
      },

      //ERROR
      err =>
      {
        console.log('****  ERROR LOADING TWITTER WIDGET', err);
      },
      
      //COMPLETE
      () =>
      {
      }
    );
  }

  private onTwitterLoaded(twttr)
  {
    console.log('TWITTER LOADED YO', twttr);
  };
}