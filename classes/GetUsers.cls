
public with sharing class GetUsers {
    @AuraEnabled(cacheable=true)
        public static List<Contact> getContacts() {
            List<Contact> contacts = 
                    [SELECT Id, Name, Main_Telephone__c, Email, Subscription__c,RecordType.Name FROM Contact WHERE RecordType.Name = 'User record type'
                    WITH SECURITY_ENFORCED];
    
            //Add isAccessible() check
            return contacts;
        }
    }