# svelte-simple-tooltip
A very simple Svelte Tooltip Action to put on HTML elements

![Example](https://github.com/nordquist/svelte-simple-tooltip/blob/main/tooltip_0.gif?raw=true)

## Usage
```
import tooltip from './tooltip.js';

use:tooltip={options}
```

```
options = {
	title: 'Title of the tooltip <optional>',
	body: 'Body fo the tooltip <required>',
	opacity: 1 <optional, default = 1>,
	bodyClassList: 'class1-i-want-to-add-to-component class2 <optional>',
  titleClassList: ''
}
```

*Example*
```
{
  opacity: 1,
  title: 'My title',
  body: 'Testing to write a little longer text as a tooltip to see whether or not it will work and look decent in different resolutions.',
  titleClassList: 'rounded-t-lg dark:text-gray-700 text-white bg-gray-800 dark:bg-gray-200',
  bodyClassList: 'rounded-lg bg-white dark:bg-gray-800 dark:border-gray-800 shadow'
}
```

*Example*
```
<div class="button-wrapper" use:tooltip={{opacity: 1, title: 'My title', body: 'Testing to write a little longer text as a tooltip to see whether or not it will work and look decent in different resolutions.' }}>
```


## License

The MIT License (MIT)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.