var Bank = require('./bank/bank.js');
var Account = require('./bank/account.js');
var BankView = require('./bank/bankView.js')
var sampleAccounts = require('../sample.json');

window.onload = function() {
  var bank = new Bank();
  for(account of sampleAccounts) {
    bank.addAccount(new Account(account));
  }
  
  new BankView(bank);
};

