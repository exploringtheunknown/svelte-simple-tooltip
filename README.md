# svelte-simple-tooltip
A very simple Svelte Tooltip Action to put on HTML elements

## Usage
```
use:tooltip={options}
```

```
options = {
	title: 'Title of the tooltip <optional>',
	body: 'Body fo the tooltip <required>',
	opacity: 1 <optional, default = 1>,
	classList: 'class1-i-want-to-add-to-component class2 <optional>'
}
```

*Example*
```
{
  opacity: 1,
  title: 'My title',
  body: 'Testing to write a little longer text as a tooltip to see whether or not it will work and look decent in different resolutions.',
  classList: 'rounded-lg bg-white dark:bg-gray-800 dark:border-gray-800 shadow'
}
```

*Example*
```
<div class="button-wrapper" use:tooltip={{opacity: 1, title: 'My title', body: 'Testing to write a little longer text as a tooltip to see whether or not it will work and look decent in different resolutions.' }}>
```


## License
MIT
