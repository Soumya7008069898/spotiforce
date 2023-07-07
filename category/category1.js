import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class Category extends NavigationMixin(LightningElement) {
    handleArtistButton(event){
        this[NavigationMixin.Navigate]({
            type:'standard__component',
            attributes:{
                componentName:'c__Navigator5'
            },
        });
    }
    handleUserButton(event){
        this[NavigationMixin.Navigate]({
            type:'standard__component',
            attributes:{
                componentName:'c__Navigator1'
            },
        });
    }
    handleNewButton(event){
        this[NavigationMixin.Navigate]({
            type:'standard__component',
            attributes:{
                componentName:'c__Navigator2'
            },
        });
    }
}