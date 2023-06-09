# jsuals
Javascript utility functions for web development (Front-End + Back-End)

## Installation
* npm: `npm install jsuals`
* yarn: `yarn add jsuals`

## Import 
```javascript
// For JS Frameworks:
import * as jsuals from "jsuals/dist/jsuals-client"
const capitalizedString = jsuals.string('jsuals library to easE the codinG').capitalize();
// output is "Jsuals Library To Ease The Coding"

// For Node.js (Runtime Javascript)
const jsuals = require('jsuals');
const capitalizedString = jsuals.string('jsuals library to easE the codinG').capitalize();
// output is "Jsuals Library To Ease The Coding"

// Or by specfic module in Node.js (Runtime Javascript)
const { string } = require('jsuals');
const capitalizedString = string('jsuals library to easE the codinG').capitalize();
// output is "Jsuals Library To Ease The Coding"

// Or you can use directly in html script tag
<script src="https://cdn.jsdelivr.net/gh/hahsanayub/jsuals/dist/jsuals-client.js"></script>
<script>
    const capitalizedString = jsuals.string('jsuals library to easE the codinG').capitalize();
    // output is "Jsuals Library To Ease The Coding"
</script>

```

## Functions (UI)
### DOM 

```typescript
import { asyncMap } "@thalesrc/js-utils/array";

const array = [1, 2, 3];

const result = await asyncMap(array, async value => {
 return await addOneAfterASecond(value);
});

console.log(result); // [2, 3, 4]
```

## License
[MIT](./LICENSE)