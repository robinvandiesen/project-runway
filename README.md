# Assignment

Please create a page that contains an input field.
When the user enters _at least_ three characters into this input field,
you should display all flight information from the `flights.json` file where the destination airport matches the entered input.
Please implement it using vanilla JavaScript. Try to keep it simple.

We think 4 hours should be enough to spend on this assignment.
Please don't spend more than that unless you're having fun and want to show off :)

## Requirements:

- Use Webpack to build an ES5 bundle of your app. You'll have to set it up with all the necessary dependencies, loaders, etc. for JavaScript and SCSS.
- Make it look nice. Make sure Webpack packages your styles. We have provided some internal SCSS files in the `/src/scss` directory from our internal setup.
  You can read about these on [http://takeoff.schiphol.nl/component/style-fundamentals](http://takeoff.schiphol.nl/component/style-fundamentals)
  Note: You will not be able to install these packages as the repository is `private`.
- Your application should treat the contents of `flights.json` as the output of an API endpoint.
  It should load this asynchronously using XHR or Fetch API and should not require a page reload when the user changes their input.

## Submission:

- Create a clone of this repository locally.
  Then push it to **your GitHub account** and continue working from there.
  Once you have finished, please send us the URL of the repository you have created.

### Some things to consider:

- We like DRY and KISS
- We like tested code
- We like readable code
- We like using the latest features of ES6 where applicable
- Last but not least, have fun!

# Process

## Notes:

- I was not able to create a clone from a dropbox so I did a git init.
- I was not able to make it look super pretty, because of missing styles. I used the styles as they were given.
