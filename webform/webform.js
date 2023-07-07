import { LightningElement } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import CASE_OBJECT from '@salesforce/schema/Case';
import SUBJECT_FIELD from '@salesforce/schema/Case.Subject';
import CASE_DESCRIPTION_FIELD from '@salesforce/schema/Case.Description';
import ORIGIN_FIELD from '@salesforce/schema/Case.Origin';
import TYPE_OF_PROBLEM_FIELD from '@salesforce/schema/Case.Type';
import COMMENTS_FIELD from '@salesforce/schema/Case.Comments';
import EMAIL_FIELD from '@salesforce/schema/Case.ContactEmail';
import RELATED_FIELD from '@salesforce/schema/Case.ContactId';
import ADDRESS_FIELD from '@salesforce/schema/Case.Address__c';
export default class InsertCaseRecord extends LightningElement {

    objectApiName=CASE_OBJECT;

    fields = [SUBJECT_FIELD,CASE_DESCRIPTION_FIELD,ORIGIN_FIELD,TYPE_OF_PROBLEM_FIELD,COMMENTS_FIELD,EMAIL_FIELD,RELATED_FIELD,ADDRESS_FIELD];



    handleSuccess(event){

        const toastEvent=new ShowToastEvent({

            title:"User Record has been created successfully !",

            message: "Contact Created ",

            variant: "success"

        });

        this.dispatchEvent(toastEvent);
    }
    
}

