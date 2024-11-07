import { Component , Input , ViewChild} from '@angular/core';
import { ChildComponent } from './child/child.component';
import { FormBuilder, FormControl, FormGroup,  ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ageValidator } from '../age.validator';

@Component({
  selector: 'app-father',
  standalone: true,
  imports: [ChildComponent , ReactiveFormsModule, CommonModule ],
  templateUrl: './father.component.html',
  styleUrl: './father.component.css'
})
export class FatherComponent {
  @Input() data : string | undefined;
  @ViewChild(ChildComponent) viewdata ! : ChildComponent
  myForm : FormGroup;
  subMitted: boolean = false;
  response = "";
  childMessage : string | undefined;

  constructor(private fb : FormBuilder){
    this.myForm = this.fb.group ({
       firstName: ['' , [Validators.required , Validators.minLength]],
       lastName: ['' , [Validators.required , Validators.minLength]],
       email:  ['' , [Validators.required , Validators.email]],
       number:  ['' , [Validators.minLength(10) , Validators.maxLength(10)]],
       age:   ['' , Validators.required , ageValidator(18 , 45) ]
       
    })
    
  }
   
  onSubmit(){
    console.log(this.myForm , "submitted");
    this.subMitted = true;
  }

  recievemessage(event : string){
     console.log(event);
  }
   
  addChild(id: any , name: any){
    let child = {"id" : id , "name" : name}
    this.response = this.viewdata.addingChild(child);
   }

   receivechildMsg(message : any){
     this.childMessage = message;
   }


}
