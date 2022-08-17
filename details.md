# How does this work

PS: im assuming you have Node installed, cause you'd need that along side npm to follow the instructions

  - Clone this this repo, cd into the root folder then run `npm i` to get all the dependencies installed
  - run `npm run start` to get the server started
  - click on the url logged to your console and this would take you to a root route where youd be greeted with the text 'hello world'
  - navigate to the route howold?dob={insert a timestamp of the Date of birth in the format YYYY-MM-DD or YYYY-MM-DDTHH:MM:SS}
  - then you'd get a json response with a key age and its value the resulting age from the calculation
  - Added a special handle for when the resulting age is in the future, with a fun to read message
