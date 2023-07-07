public with sharing class SearchSongsController 
{
    @AuraEnabled(cacheable=true)
    public static list<SONG__c> getsongList(string searchKey)
    {
        string searchKeyword  = '%' + searchKey + '%';
        list<SONG__c> songListRecord = new list<SONG__c>();
        for(SONG__c songObj : [Select Name,duration__c,Artist__c
       From SONG__c
       WHERE name LIKE : searchKeyword 
       WITH SECURITY_ENFORCED])
       {
songListRecord.add(songObj);  
    }
    return songListRecord;
}
}