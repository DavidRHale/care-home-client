This front end is built to speak to an api which can be found at https://github.com/DavidRHale/care-home-api .

To run the application:
1) Clone the repository
2) Open a terminal from the root of the project
3) Run the following commands:
  * npm install
  * npm run start
  
The tests can be run with the command 'npm run test'. Choose option 'a' to run all tests.

Future considerations for the application:
* Handle error cases - Currently the front end only deals with the 'happy paths' and ignores error cases.
* Client side validation and feedback to user inputs
* More robust unit testing
* End to end testing
* Known bug needing fixed - Unable to delete a resident who is assigned to two rooms
* Futher discussion with the business team regarding functionality - should residents be able to be assigned to multiple rooms?
* Should the residents' favourite food be included? I have no idea why I thought this was relevant...
