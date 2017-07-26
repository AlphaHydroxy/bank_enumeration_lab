var assert = require('assert');
var Bank = require('../bank.js');
var Account = require('../account.js')

describe('Bank', function() {
  
  var account1;
  var account2;
  var account3;
  var account4;
  var bank;

  beforeEach(function() {
    account1 = new Account("Sian", 60);
    account2 = new Account("Keith", 10);
    account3 = new Account("Harrison", 90);
    account4 = new Account("Craig", 5);
    bank = new Bank();
    bank.addAccount(account1);
    bank.addAccount(account2);
    bank.addAccount(account3);
    bank.addAccount(account4);
  })

  it("should be able to add account", function() {
    assert.strictEqual(4, bank.accounts.length)
  });

  xit("should be able to find total value of all acounts", function() {
    assert.strictEqual(165, bank.totalValue())
  });

  xit("should be able to find an account by owner name", function() {
    assert.deepEqual(account4, bank.accountByName("Craig"))
  });

  xit("should be able to find an account with highest value", function() {
    assert.deepEqual(account3, bank.largestAccount())
  });

  xit("should be able to find the average value of accounts", function() {
    assert.strictEqual(41.25, bank.averageValue())
  });

});
