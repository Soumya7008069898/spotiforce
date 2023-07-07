import { LightningElement } from 'lwc';
import { NavigationMixin} from 'lightning/navigation';
export default class GetPremium extends NavigationMixin(LightningElement){
    handlegetbutton(){
        this[NavigationMixin.Navigate]({
            type: 'standard__component',
            attributes:{
                componentName:'c__Navigator7'
            },
        });
        window.alert("Congratulation you got the premium");
  }
}