# svelte-simple-tooltip

[![npm version](https://badge.fury.io/js/svelte-simple-tooltip.svg)](https://badge.fury.io/js/svelte-simple-tooltip)


A very simple Svelte Tooltip Action to put on HTML elements

![Example](https://github.com/nordquist/svelte-simple-tooltip/blob/main/tooltip_0.gif?raw=true)



## Usage
```javascript
import tooltip from 'svelte-simple-tooltip';

use:tooltip={options}
```
**options**

* title - Title of the tooltip \<optional\>
* body - 'Body fo the tooltip \<required\>'
* opacity - 1 \<optional, default = 1\>
* bodyClassList - A string containing classes you would like to apply to the outer wrapper of the tooltip
* titleClassList - A string containing classes you would like to apply to the title element of the tooltip
* position - CSS values to position the tooltip with position _absolute_ from its relative parent


______________________________________


```
options = {
  title: 'Title of the tooltip <optional>',
  body: 'Body fo the tooltip <required>',
  opacity: 1 <optional, default = 1>,
  bodyClassList: 'class1-i-want-to-add-to-component class2 <optional>',
  titleClassList: '',
  position: { 
    top: '1px',
    right: '2em',
    bottom: '45%',
    left: '2rem'
  }
}
```

*Example*
```javascript
{
  opacity: 1,
  title: 'My title',
  body: 'Testing to write a little longer text as a tooltip to see whether or not it will work and look decent in different resolutions.',
  titleClassList: 'rounded-t-lg dark:text-gray-700 text-white bg-gray-800 dark:bg-gray-200',
  bodyClassList: 'rounded-lg bg-white dark:bg-gray-800 dark:border-gray-800 shadow',
  position: {
    top: '1px',
    right: '2em',
    bottom: '45%',
    left: '2rem'
  }  
}
```

*Example*
```html
<div class="button-wrapper" use:tooltip={{opacity: 1, title: 'My title', body: 'Testing to write a little longer text as a tooltip to see whether or not it will work and look decent in different resolutions.' }}>
```


## License

The MIT License (MIT)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.