public with sharing class Contactinfo {
    @AuraEnabled(cacheable=true)
   public static Contact createContact(Contact hs) {
       
       insert hs;
       return hs;
   }
}