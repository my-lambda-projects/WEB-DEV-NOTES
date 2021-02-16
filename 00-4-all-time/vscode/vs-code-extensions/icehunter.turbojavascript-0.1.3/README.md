# JavaScript

## VS Code JavaScript (ES6) Turbo

---

[![Version](https://vsmarketplacebadge.apphb.com/version/Icehunter.TurboJavaScript.svg)](https://marketplace.visualstudio.com/items?itemName=Icehunter.TurboJavaScript)
[![Installs](https://vsmarketplacebadge.apphb.com/installs/Icehunter.TurboJavaScript.svg)](https://marketplace.visualstudio.com/items?itemName=Icehunter.TurboJavaScript)
[![Ratings](https://vsmarketplacebadge.apphb.com/rating/Icehunter.TurboJavaScript.svg)](https://marketplace.visualstudio.com/items?itemName=Icehunter.TurboJavaScript)

## Snippets

Below is a list of all available snippets and the triggers of each one. The **⇥** means the `TAB` key.

"cb" ⇥ Node callback,

```javascript
(err, ${1:value}) => {${0}}
```

"pr" ⇥ Promise,

```javascript
new Promise((resolve, reject) => {
	${0}
})
```

"then" ⇥ Promise.then,

```javascript
${1:promise}.then((${2:value}) => {
	${0}
})
```

".then" ⇥ chain then,

```javascript
.then((${1:value}) => {${0}})
```

"catch" ⇥ Promise.catch,

```javascript
${1:promise}.catch((${2:err}) => {
	${0}
})
```

".catch" ⇥ chain catch,

```javascript
.catch((${1:err}) => {${0}})
```

"desc" ⇥ describe,

```javascript
describe('${1:description}', () => {
	${0}
});
```

"cont" ⇥ context,

```javascript
context('${1:description}', () => {
	${0}
});
```

"it" ⇥ it,

```javascript
it('${1:description}', () => {
	${0}
});
```

"its" ⇥ it synchronous,

```javascript
it('${1:description}', () => {
	${0}
});
```

"ita" ⇥ it asynchronous,

```javascript
it('${1:description}', (done) => {
	${0}
	done();
});
```

"bf" ⇥ mocha before,

```javascript
before(() => {
	${0}
});
```

"bfe" ⇥ mocha beforeEach,

```javascript
beforeEach(() => {
	${0}
});
```

"aft" ⇥ mocha after,

```javascript
after(() => {
	${0}
});
```

"afe" ⇥ mocha afterEach,

```javascript
afterEach(() => {
	${0}
});
```

"cl" ⇥ class,

```javascript
class ${1:name} {
	constructor(${2:arguments}) {
		${0}
	}
}
```

"cex" ⇥ class extends,

```javascript
class ${1:name} extends ${2:base} {
	constructor(${3:arguments}) {
		super(${3:arguments});
		${0}
	}
}
```

"ctor" ⇥ constructor,

```javascript
constructor(${1:arguments}) {
	super(${1:arguments});${0}
}
```

"clog" ⇥ console.log,

```javascript
console.log(${0})
```

"cerr" ⇥ console.error,

```javascript
console.error(${0})
```

"if" ⇥ if statement,

```javascript
if (${1:condition}) {
	${0}
}
```

"el" ⇥ else statement,

```javascript
else {
	${0}
}
```

"ife" ⇥ if/else statement,

```javascript
if (${1:condition}) {
	${0}
} else {

}
```

"ei" ⇥ else if statement,

```javascript
else if (${1:condition}) {
	${0}
}
```

"fl" ⇥ for loop,

```javascript
for (let ${1:i} = 0, ${2:len} = ${3:iterable}.length; ${1:i} < ${2:len}; ${1:i}++) {
	${0}
}
```

"fi" ⇥ for in loop,

```javascript
for (let ${1:key} in ${2:source}) {
	if (${2:source}.hasOwnProperty(${1:key})) {
		${0}
	}
}
```

"fo" ⇥ for of loop,

```javascript
for (let ${1:key} of ${2:source}) {
	${0}
}
```

"wl" ⇥ while loop,

```javascript
while (${1:condition}) {
	${0}
}
```

"tc" ⇥ try/catch,

```javascript
try {
	${0}
} catch (${1:err}) {

}
```

"tf" ⇥ try/finally,

```javascript
try {
	${0}
} finally {

}
```

"tcf" ⇥ try/catch/finally,

```javascript
try {
	${0}
} catch (${1:err}) {

} finally {

}
```

"sw" ⇥ switch case,

```javascript
switch (${1:expr}) {
	case ${2:value}:
		return $0;
	default:
		return;
}
```

"iife" ⇥ immediately-invoked function expression,

```javascript
((${1:arguments}) => {
	${0}
})(${2});
```

"fa" ⇥ function apply,

```javascript
${1:fn}.apply(${2:this}, ${3:arguments})
```

"fc" ⇥ function call,

```javascript
${1:fn}.call(${2:this}, ${3:arguments})
```

"fb" ⇥ function bind,

```javascript
${1:fn}.bind(${2:this}, ${3:arguments})
```

"af" ⇥ arrow function,

```javascript
(${1:arguments}) => ${2:statement}
```

"seq" ⇥ sequence,

```javascript
[...Array(${1:length}).keys()]${0}
```

"fe" ⇥ forEach loop,

```javascript
${1:iterable}.forEach((${2:item}) => {
	${0}
});
```

".fe" ⇥ chain forEach,

```javascript
.forEach((${1:item}) => {${0}})
```

"map" ⇥ map,

```javascript
${1:iterable}.map((${2:item}) => {
	${0}
});
```

".map" ⇥ chain map,

```javascript
.map((${1:item}) => {${0}})
```

"reduce" ⇥ reduce,

```javascript
${1:iterable}.reduce((${2:previous}, ${3:current}) => {
	${0}
}${4:, initial});
```

".reduce" ⇥ chain reduce,

```javascript
.reduce((${1:previous}, ${2:current}) => {${0}}${4:, initial})
```

"filter" ⇥ filter,

```javascript
${1:iterable}.filter(${2:item} => {
	${0}
});
```

".filter" ⇥ chain filter,

```javascript
.filter((${1:item}) => {${0}})
```

"find" ⇥ find,

```javascript
${1:iterable}.find(${2:item} => {
	${0}
});
```

".find" ⇥ chain find,

```javascript
.find((${1:item}) => {${0}})
```

"ex" ⇥ module export,

```javascript
export ${1:member};
```

"exd" ⇥ module default export,

```javascript
export default ${1:member};
```

"im" ⇥ import module,

```javascript
import ${1:*} from '${2:module}';
```

"ima" ⇥ import module as,

```javascript
import ${1:*} as ${2:name} from '${3:module}';
```

"on" ⇥ event handler,

```javascript
${1:emitter}.on('${2:event}', (${3:arguments}) => {
	${0}
});
```

".on" ⇥ chain event handler,

```javascript
.on('${2:event}', (${3:arguments}) => {${0}});
```

"kv" ⇥ key/value pair,

```javascript
${1:key}: ${2:value}
```

"fn" ⇥ method,

```javascript
const ${1:method} = (${2:arguments}) => {
	${0}
}
```

"get" ⇥ getter,

```javascript
get ${1:property}() {
	${0}
}
```

"set" ⇥ setter,

```javascript
set ${1:property}(${2:value}) {
	${0}
}
```

"gs" ⇥ getter + setter,

```javascript
get ${1:property}() {
	${0}
}
set ${1:property}(${2:value}) {

}
```

"proto" ⇥ prototype method,

```javascript
${1:Class}.prototype.${2:method} = (${3:arguments}) => {
	${0}
};
```

".proto" ⇥ chain prototype method,

```javascript
.prototype.${2:methodName} = (${3:arguments}) => {
	${0}
}
```

"oa" ⇥ Object.assign,

```javascript
Object.assign(${1:dest}, ${2:source})
```

"oc" ⇥ Object.assign copy,

```javascript
Object.assign({}, ${1:original}, ${2:source})
```

"re" ⇥ require,

```javascript
require('${1:module}');
```

"em" ⇥ exports.member,

```javascript
exports.${1:member} = ${2:value};
```

"me" ⇥ module.exports,

```javascript
module.exports = ${1:name};
```

"mc" ⇥ module as class,

```javascript
var ${1:name} = (() => {
	const ${1:name} = (${2:arguments}) => {
		${0}
	};
	return ${1:name};
})();
module.exports = ${1:name};
```

"rp" ⇥ return promise,

```javascript
return new Promise((resolve, reject) => {
	${0}
});
```

"st" ⇥ setTimeout,

```javascript
setTimeout(() => {
	${0}
}, ${1:delay});
```

"si" ⇥ setInterval,

```javascript
setInterval(() => {
	${0}
}, ${1:delay});
```

"sim" ⇥ setImmediate,

```javascript
setImmediate(() => {
	${0}
});
```

"nt" ⇥ process nextTick,

```javascript
process.nextTick(() => {
	${1:}
});
```

"tof" ⇥ typeof,

```javascript
typeof ${1:source} === '${2:undefined}'
```

"iof" ⇥ instanceof,

```javascript
${1:source} instanceof ${2:Object}
```
