public with sharing class Subscription {
        @AuraEnabled(cacheable=true)
        public static List < Contact > fetchAccts() {
            // return [ SELECT Id, Name, Subcription__c FROM Contact ];
            return [ SELECT Id, Name, Email, Subcription__c FROM Contact WHERE Subcription__c = true 
            WITH SECURITY_ENFORCED
            ];
        }
    }
