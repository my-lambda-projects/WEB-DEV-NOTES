# AJAX Assessment

Here are some important notes about this test.

1. You can run the mocha tests either from the command line using `npm test`
   or opening the **test-page.html**. They run the same tests.
2. Do **NOT** modify the files in the "test" directory. _All_ of your work will
   happen in the numbered files in this directory.

## Usage

1. Clone the assessment repository from
   https://github.com/appacademy/assessment-ajax-js-starter.
2. `cd` into the folder and `npm install` to install dependencies
3. You have a choice about how you'd like to run these tests:
   * Use **npm test** like normal. You're going to write code using `fetch()`
     and `document` methods like `querySelectorAll`. It might feel weird to be
     doing that _completely not in a browser_. The tests use a virtual DOM and a
     fetch that controls the entire test without a browser. You can just follow
     the instructions in each of the files and just run **npm test** to do its
     thing. ![npm test](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Web/ajax/assessment-ajax-npm-test.png)
   * Use **test-page.html** in your browser which will load the _exact same
     tests_ and run them in your browser. You'll want to keep your Developer
     Tools open on the Console to see error messages while you're finishing the
     assessment. When you make changes, just refresh the browser and you'll see
     the messages in the browser. ![browser](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-Web/ajax/assessment-ajax-browser.png)
4. Your objective is to implement the code in each of the following JavaScript
   files so that when you run `npm test` or open the **test-page.html**, all
   tests pass.
   * **01-fetch-get.js** challenges you to use `fetch` in an `async` function,
     get the response, use the `json()` method to get the data, then use the
     data to create list items for a UL on the page.
   * **02-fetch-post.js** challenges you to use `fetch` in an `async` function,
     use the 'POST' verb, set the body to JSON content, and use the return data
     to create list items for a UL on the page.
   * **03-fetch-patch.js** challenges you to use `fetch` in an `async` function,
     use the 'PATCH' verb, set the body to JSON content, and use the return data
     to update a single element on the page.


## Submission

When you are ready to submit:

1. Delete the `node_modules` directory
2. Zip up your folder
3. Upload it
