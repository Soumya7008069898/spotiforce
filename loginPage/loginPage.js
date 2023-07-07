import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class LoginPage extends NavigationMixin(LightningElement) {
    handleArtistProfileButton(event){
        this[NavigationMixin.Navigate]({
            type:'standard__component',
            attributes:{
                componentName:'c__Navigator6'
            },
        });
    }
    handleUserProfileButton(event){
        this[NavigationMixin.Navigate]({
            type:'standard__component',
            attributes:{
                componentName:'c__Navigator7'
            },
        });
    }
}
