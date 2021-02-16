## JSON and WebStorage (W4D4) - Learning Objectives

### JSON
1. Identify and generate valid JSON-formatted strings
- In most cases we can just add "" around our data. Whenever we are reference a string, we have to escape a " character with \".
- {key1: "value", key2: 12} becomes "{\"key1\": \"value\", \"key2\": 12}"
- Important to note that the keys in this object are strings, so we add in the escaped quotes around each key. {key1: "value"} is the same as {"key1": "value"}

2. Use JSON.parse to deserialize JSON-formatted strings
```js
  const objJSON = "{\"key1\": \"value\", \"key2\": 12}";
  const parsedObj = JSON.parse(objJSON);
  console.log(parsedObj);
```

3. Use JSON.stringify to serialize JavaScript objects
```js
  const obj = {key1: "value", key2: 12};
  const objJSON = JSON.stringify(obj);
  console.log(objJSON);
```

4. Correctly identify the definition of "deserialize"
- Taking a string and turning it into data. We say string here because we are working with JSON. More broadly, it could refer to another format, such as bits, that we are turning into data.

5. Correctly identify the definition of "serialize"
- Taking data and turning it into a string format in order to send or store more easily. (Same applies with the usage of strings, could be a different format if we're not talking about JSON)

### WebStorage
1. Write JavaScript to store the value "I <3 falafel" with the key "eatz" in the browser's local storage.
```js
  localStorage.setItem('eatz', 'I <3 falafel');
```

2. Write JavaScript to read the value stored in local storage for the key "paper-trail".
```js
  localStorage.getItem('paper-trail')
```
