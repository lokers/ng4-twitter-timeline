# ng4-twitter-timeline

[![Build Status](https://travis-ci.org/lokers/ng4-twitter-timeline.svg?branch=master)](https://travis-ci.org/lokers/ng4-twitter-timeline)


Easily embed Twitter widgets into your Angular2 application! No more having to kludge together a Twitter script loader, or manage embed state on visibility change. ng4-twitter-timeline is based on the ng2-tweet (https://github.com/SolutiaConsulting/ng2-tweet)


## Installation

`npm install ng4-twitter-timeline --save`


## Usage

Import in `app.module.ts`

```javascript
import { Ng4TwitterTimelineModule } from 'ng4-twitter-timeline/lib/index';

imports: [
  Ng4TwitterTimelineModule
],
```

Add to your desired component, in this case `home.component.ts` (Don't forget to add it to your constructor)

```javascript
import { Ng4TwitterTimelineService } from 'ng4-twitter-timeline/lib/index';

constructor(private ng4TwitterTimelineService: Ng4TwitterTimelineService) {

}
```

Finally, place in your template, in this case `home.component.html`

```javascript
<ng4-twitter-timeline screenName="lokers_one"></ng4-twitter-timeline>
```

The `screenName` is the Twitter username you want to embed, for example,

https://twitter.com/lokers_one


