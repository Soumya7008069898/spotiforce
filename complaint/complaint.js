import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class Complaint extends NavigationMixin(LightningElement) {
    handleEmailbutton(event){
        this[NavigationMixin.Navigate]({
            type:'standard__component',
            attributes:{
                componentName:'c__Navigator11'
            },
        });
    }
    handleWebformbutton(event){
        this[NavigationMixin.Navigate]({
            type:'standard__component',
            attributes:{
                componentName:'c__Navigator12'
            },
        });
    }
}   
