import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
export default class email extends NavigationMixin(LightningElement) {
    handleemailloginbutton(event){
        this[NavigationMixin.Navigate]({
            type:'standard__component',
            attributes:{
                componentName:'c__Navigator13'
            },
        });
    }
}