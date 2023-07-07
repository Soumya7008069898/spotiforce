import { LightningElement,track } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
export default class ArtistProfile extends NavigationMixin(LightningElement) {
    handleSongButton(event){
        this[NavigationMixin.Navigate]({
            type: 'standard__component',
            attributes:{
                componentName:'c__Navigator8'
            },
        });
    }
    handleComplainButton(event){
        this[NavigationMixin.Navigate]({
            type: 'standard__component',
            attributes:{
                componentName:'c__Navigator12'
            },
        });
    }
handleExitButton(event){
    this[NavigationMixin.Navigate]({
        type: 'standard__component',
        attributes:{
            componentName:'c__Navigator'
        },
    });
}
}

