import { Component } from '@angular/core';
import { FatherComponent } from './father/father.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from '../highlight.directive';

@Component({
  selector: 'app-grandfather',
  standalone: true,
  imports: [FatherComponent ,FormsModule , CommonModule , HighlightDirective],
  templateUrl: './grandfather.component.html',
  styleUrl: './grandfather.component.css'
})
export class GrandfatherComponent {
  introduceHim : boolean = false;
  message: string = "";
  showForm: boolean = false;
  grandFauser: any = {
   fullName : '',
   fathersName: '',
   email: '',
   number: '',
   callBack: function() {
     this.introduceHim = true;
     this.message = "introduce him to my grand child";
   }

  }
  takeDetails(){
    this.showForm = true;
  }

  onSubmit(){

    this.grandFauser.callBack();
    this.message = this.grandFauser.message;
    this.showForm = false;
    this.introduceHim = true;
    console.log(this.message);

  }
}
