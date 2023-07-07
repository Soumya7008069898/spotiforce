import { LightningElement } from 'lwc';
import song from '@salesforce/resourceUrl/song';
import { NavigationMixin } from 'lightning/navigation';

export default class WelcomePage extends NavigationMixin(LightningElement) {
    songurl=song;
    handleGetStartedButton(event){
        this[NavigationMixin.Navigate]({
            type:'standard__component',
            attributes:{
                componentName:'c__Navigator'
            },
        });
    }
}

