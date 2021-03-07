# svelte-simple-tooltip
A very simple Svelte Tooltip Action to put on HTML elements

![Example](hhttps://github.com/nordquist/svelte-simple-tooltip/blob/main/tooltip_0.gif?raw=true)

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
MIT
