import { LightningElement,track } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import CONTACT_OBJECT from '@salesforce/schema/Contact';
import FIRSTNAME_FIELD from '@salesforce/schema/Contact.FirstName';
import LASTNAME_FIELD from '@salesforce/schema/Contact.LastName';
import ACCOUNTNAME_FIELD from '@salesforce/schema/Contact.AccountId';
import MAINTELEPHONE_FIELD from '@salesforce/schema/Contact.Main_Telephone__c';
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';
import PASSWORD_FIELD from '@salesforce/schema/Contact.Password__c'
import { NavigationMixin } from 'lightning/navigation';
export default class UserRegistrationPage extends NavigationMixin(LightningElement){
    objectApiName=CONTACT_OBJECT;

    fields = [FIRSTNAME_FIELD,LASTNAME_FIELD,ACCOUNTNAME_FIELD,EMAIL_FIELD,MAINTELEPHONE_FIELD,PASSWORD_FIELD];
    handleSuccess(event){

        const toastEvent=new ShowToastEvent({

            title:"User Record has been created successfully !",

            message: "Contact Created ",

            variant: "success"

        });

        this.dispatchEvent(toastEvent);

    }
    handlebackbutton(){
        this[NavigationMixin.Navigate]({
            type: 'standard__component',
            attributes:{
                componentName:'c__Navigator1'
            },
        });
    }
}
