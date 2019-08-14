//simple basic api test

var chai = require('chai'),expect = require('chai').expect
, chaiHttp = require('chai-http');
chai.use(chaiHttp);
const addContext = require('mochawesome/addContext');


describe('Math operation - Test suite',function(){
   

    this.timeout(10000);

    it('Simple API Test first', function (done) {
    
      addContext(this, 'this is the request for simple api');
     
      chai.request('https://reqres.in') // chai meminta base URL dan port kita
          .get('/api/users/2') // 'get' disini adalah REST method dan '/' adalah endpoint kita 
          .end((err, res) => {
            // kita melakukan response assertion disini
            
            expect(res).to.have.status(200).and.to.have.nested.property('body.data')
            .that.includes.all.keys([ 'email','avatar','id'])
                      
    
            done();
          });
          addContext(this, 'end point /api/users/2');
          addContext(this, 'should have status 200');
    
        });



        it('Simple API Test second', function (done) {
       
          addContext(this, 'this is the request for simple api');
          
          chai.request('https://reqres.in') // chai meminta base URL dan port kita
              .get('/api/users/2') // 'get' disini adalah REST method dan '/' adalah endpoint kita 
              .end((err, res) => {
                // kita melakukan response assertion disini
                
                expect(res).to.have.status(200).and.to.have.nested.property('body.data')
                .that.includes.all.keys([ 'email','avatar','id'])
                
                done();
              });
              addContext(this, 'end point /api/users/2');
              addContext(this, 'should have status 200');
        
            });
 
    
  

   });




   