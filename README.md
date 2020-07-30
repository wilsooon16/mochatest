### Mocha and Chai API Testframework 


Mocha is a feature-rich JavaScript test framework running on Node.js and in the browser, making asynchronous testing simple and fun. Mocha tests run serially, allowing for flexible and accurate reporting, while mapping uncaught exceptions to the correct test cases.

Chai is a BDD / TDD assertion library for node and the browser that can be delightfully paired with any javascript testing framework.

For more complete documenation please visit "https://mochajs.org" and "https://www.chaijs.com"




#installation step
1. cd go this directory.
2. sudo npm install

#installation globally
1. npm install -g mocha && \
   npm install -g chai && \
   npm install -g chai-http && \
   npm install -g mochawesome

#running all sample test
1. npm test

#running spesific test
1. npm run spesific test/filename.js

#check html report
1. check in this directory reports/mochawesome.html

#install with docker
1. cd to this directory
2. docker build -t mocha .

#running with docker
1. docker run mocha npm test
2. docker run mocha npm run spesific test/filename.js
   
   
Contributor :wilson (wilsoon.hiu@gmail.com)
