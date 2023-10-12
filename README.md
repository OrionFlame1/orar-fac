
# Usage

There are two ways to deploy this project.

1. Drop the build folder into a webserver, then access it by entering the URL without the name of the HTML file
Example: https://servername/orar-fac/ (this should open the project and it should work flawless without any dependency or any further action)

2. Use the Github Commandline interface.

2.1 Clone this project using `git clone https://github.com/OrionFlame1/orar-fac`

2.2 Install dependencies based on `package.json` file using `npm i` (shorthand for `npm install`)

2.3 Start the project in developer mode using `npm start dev` or in production mode using `npm start` or `yarn start`

# Concept

Basically, the React library `moment` is used to get the current day and hour, a table listing workdays and hours is being shown, then a highlight is applied to the row for the current workday, the current hour and their intersection of row and column. Table is being populated with a user-written JSON file, every element in the file contains 4 individual attributes, the hour of placed element and a common attribute that indicates the workday.