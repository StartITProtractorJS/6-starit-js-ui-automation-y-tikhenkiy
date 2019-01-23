import {expect} from "chai";
var faker = require('faker');

describe.skip('WDIO', function () {
    it('Should be alive', function () {
        browser.url('/')
    }
      
    ) 

    it('should be allert about incorrect pass', function () {
        
        browser.click('ul li[class="account dropdown"]');
        browser.click('(//li[@class="text-center"])[1]');
        browser.pause(1000);
               
        const clientFirstName = $('input[name=firstname]');
        const clientLastName = $('input[name=lastname]');
        const clientEmail = $("(//input[@name='email'])[2]"); //the same as $("//div[@class='form-group col-md-6 required']//input[@name='email']");
        const clientPass = $("//div[@class='form-group col-md-6 required']//input[@name='password']");
        const clientConfirmPass = $('input[name=confirmed_password]');
        const clientCountryCode = $('select[name=country_code]');
        
   
        clientFirstName.addValue(faker.name.firstName());
        clientLastName.addValue(faker.name.lastName());
        clientCountryCode.selectByValue('GB');
        clientEmail.setValue(faker.internet.email(clientFirstName.getValue(),clientLastName.getValue()));
        clientPass.setValue(faker.internet.password(8));
        clientConfirmPass.setValue(faker.internet.password(8));
        
        console.log('first name: ', clientFirstName.getValue());
        console.log('last name: ', clientLastName.getValue());
        console.log('email: ', clientEmail.getValue());
        console.log('Pass: ', clientPass.getValue());
        console.log('Confirm Pass: ', clientConfirmPass.getValue());

        browser.pause(2000);
        browser.click("button[name=create_account]");

        

        let isAlertExsit = browser.isExisting("//div[@id='notices']/div[@class='alert alert-danger']");
        expect(isAlertExsit).to.be.true;

    })

    xit('should register new account', function(){
        
        function randEmailLocalpart(n){  
            return Math.random().toString(36).slice(2, 2 + Math.max(1, Math.min(n, 15)) );
          }
        
        const clientFirstName = $('input[name=firstname]');
        const clientLastName = $('input[name=lastname]');
        const clientEmail = $("(//input[@name='email'])[2]"); 
        const clientPass = $("(//input[@name='password'])[2]");
        const clientPassConfirm = $('input[name=confirmed_password]');
        const clientCountryCode = $('select[name=country_code]');

        clientFirstName.addValue("test");
        clientLastName.addValue("testovych");
        clientCountryCode.selectByValue("GB");
        clientEmail.setValue(randEmailLocalpart(7)+"@test.test");
        clientPass.setValue("123123");
        clientPassConfirm.setValue("123123")

        browser.click("button[name=create_account]");

        browser.pause(1000);

        const isAlertSuccessVisible = browser.isVisible("#notices div[class='alert alert-success']");//the as this short (".alert-success");
        expect(isAlertSuccessVisible).to.be.true;
    })
      
    

})