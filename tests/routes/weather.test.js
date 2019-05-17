const expect = require('chai').expect;

const { forecast } = require('../../routes/weather');

let req = {
    body: {},
};

let res = {
    sendCalledWith: '',
    send: function(arg) { 
        this.sendCalledWith = arg;
    }
};

describe('Greetings Route', function() {
    describe('Weather() function', function() {
        it('Should error out if no city provided ', function() {
            forecast(req, res);
            expect(res.sendCalledWith).to.contain('error');
        });
    })
});
