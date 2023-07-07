import { LightningElement,track,wire } from 'lwc';
import SONG_OBJECT from '@salesforce/schema/SONG__C';
import getsongList from '@salesforce/apex/SearchSongsController.getsongList';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import { NavigationMixin } from 'lightning/navigation';
export default class UserProfile extends NavigationMixin(LightningElement) {
    @track songsRecord;
    searchValue = '';
 
    // update searchValue var when input field value change
    searchKeyword(event) {
        this.searchValue = event.target.value;
    }
 
    // call apex method on button click 
    handleSearchKeyword() {
        
        if (this.searchValue !== '') {
            getsongList({
                    searchKey: this.searchValue
                })
                .then(result => {
                    // set @track contacts variable with return contact list from server  
                    this.songsRecord = result;
                })
                .catch(error => {
                   
                    const event = new ShowToastEvent({
                        title: 'Error',
                        variant: 'error',
                        message: error.body.message,
                    });
                    this.dispatchEvent(event);
                    // reset contacts var with null   
                    this.songsRecord = null;
                });
        } else {
            // fire toast event if input field is blank
            const event = new ShowToastEvent({
                variant: 'error',
                message: 'Search text missing..',
            });
            this.dispatchEvent(event);
        }
    }
  handlesubscribeButton(event){
        this[NavigationMixin.Navigate]({
            type: 'standard__component',
            attributes:{
                componentName:'c__Navigator10'
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