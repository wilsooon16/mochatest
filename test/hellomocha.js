

var assert = require('assert')

describe('Math operation - Test suite',function(){
    this.timeout(3000);
    it('Addition test',function(done){
        setTimeout(done,1000);
       
        var a =10;
        var b=10;

        var c = a+b; 
        assert.equal(c,20);
    });

    it('Subtraction test',function(done){
        setTimeout(done,1000);
        var a =10;
        var b=10; 
        var c = a-b; 
        assert.equal(c,0);
    });

    it('Mulitplication test',function(done){
        setTimeout(done,1000);
        var a =10;
        var b=10;
        var c = a*b; 
        assert.equal(c,100);
    });


    it('Division test',function(done){
        setTimeout(done,1000);
        var a =10;
        var b=10;
        var c = a/b; 
        assert.equal(c,1);
    });

});