import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
export default class NewCategory extends NavigationMixin(LightningElement) {

    handleNewArtistButton(event){
        this[NavigationMixin.Navigate]({
            type:'standard__component',
            attributes:{
                componentName:'c__Navigator3'
            },
        });
    }
    handleNewUserButton(event){
        this[NavigationMixin.Navigate]({
            type:'standard__component',
            attributes:{
                componentName:'c__Navigator4'
            },
        });
    }
}