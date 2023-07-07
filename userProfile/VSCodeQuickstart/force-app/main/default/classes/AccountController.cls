
public with sharing class AccountController {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAllActiveAccounts() {
    List<Account> acc= new List<Account>();
     acc= [SELECT Id,Name,Active__c FROM Account WHERE Active__c = 'Yes'];
      return acc;
    }
  }