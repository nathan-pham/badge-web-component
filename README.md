# Web Badges
Inspired by [CoolCoderSJ's badges](https://replit.com/@CoolCoderSJ/badge)  

## Installation
The `w-badge` component is not published to a package manager. As a result, you must include the [web component library](https://github.com/nathan-pham/stateful-components) and main script located in `js/index.js` to use this component. 

## Available Properties
Badges have three assignable properties: `type`, `tag`, and `src`.
- `type`: replit or github, sets the image (defaults to github logo)
- `tag`: handle (such as @phamn23)
- `src`: explicitly sets the image - useful for custom badges

### Example Usage
`w-badge-container` is not strictly necessary and only provides styling to fix badges in the lower right hand corner. 
```html
<w-badge-container>
	<w-badge type="github" tag="nathan-pham">github</w-badge>
	<w-badge type="replit" tag="@phamn23">replit</w-badge>
</w-badge-container>
```

## Screenshots
![badge](/screenshots/badge.png)