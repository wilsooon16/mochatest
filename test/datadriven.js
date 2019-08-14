//data driven test with json file


var chai = require('chai'),expect = require('chai').expect
, chaiHttp = require('chai-http');
chai.use(chaiHttp);
const fs = require('fs');
const test_data = JSON.parse(fs.readFileSync('./data/data.json', 'utf8'));



describe('Data driven API Testing', function(){
    this.timeout(1000);
    var dataTest= ["/api/unknown","/api/unknown/2","/api/users"];
    test_data.forEach(async function (data){
    it(`Data driven API Test first for endpoint pertama ${data.endpoint}`, (done) => {

      chai.request('https://reqres.in') // chai meminta base URL dan port kita
          .get(data.endpoint) // 'get' disini adalah REST method dan '/' adalah endpoint kita 
          .end((err, res) => {
            // kita melakukan response assertion disini
            
            expect(res).to.have.status(200)
            done();
          });
        });

         
    });

   });