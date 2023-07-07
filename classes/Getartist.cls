
public with sharing class Getartist {
    @AuraEnabled(cacheable=true)
        public static List<Contact> getContacts() {
            List<Contact> contacts = 
                    [SELECT Id, FirstName, Lastname, Main_Telephone__c, Email, Number_of_songs__c, RecordType.Name FROM Contact WHERE RecordType.Name = 'Artist record type'
                    WITH SECURITY_ENFORCED];

            //Add isAccessible() check
            return contacts;
        }
    }