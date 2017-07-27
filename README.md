# ng4-twitter-timeline

[![Build Status](https://travis-ci.org/lokers/ng4-twitter-timeline.svg?branch=master)](https://travis-ci.org/lokers/ng4-twitter-timeline)


Easily embed Twitter widgets into your Angular2 application! No more having to kludge together a Twitter script loader, or manage embed state on visibility change. ng4-twitter-timeline is based on the ng2-tweet (https://github.com/SolutiaConsulting/ng2-tweet)


Current Version: 1.0.8
Latest Update: July 27, 2017
Main Contributors: Lukasz Goslawski http://lokers.github.io


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
<ng4-twitter-timeline [dataSrc]="{sourceType: 'profile',screenName: 'lokers_one'}" [opts]="{tweetLimit: 2}"></ng4-twitter-timeline>
```

The `dataSrc` is the Twitter `data source` object
The `opts` is the Twitter `options` object

For more about them read the official Twitter documentation https://dev.twitter.com/web/javascript/creating-widgets#create-timeline


## Licence

MIT License

Copyright (c) 2017 Lukasz Goslawski, http://lokers.github.io

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.