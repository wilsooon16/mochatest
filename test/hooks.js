// hooks example by mocha test

var assert = require('assert')


describe('Hooks Test - Test suite',function(){
    before('Addition test',function(){
        console.log("before");
   
    });

    beforeEach('Subtraction test',function(){
        console.log("before each");
    });

    after('Mulitplication test',function(){
        console.log("after");
    });


    afterEach('Division test',function(){
        console.log("after each");
    });

    it('The hook test',function(){
        console.log("this is the test");
    });

});