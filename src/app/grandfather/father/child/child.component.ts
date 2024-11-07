import { Component , EventEmitter, OnInit , output, Output } from '@angular/core';
import { rejects } from 'assert';
import { resolve } from 'path';
import { Observable } from 'rxjs';
import { childService } from '../../../services/service.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Subject , Subscription } from 'rxjs';
import { ReplaySubject } from 'rxjs';


@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  @Output() messageEvent = new EventEmitter<string>();
  @Output() childmessageEvent = new EventEmitter<string>();
  private subscribed!: Subscription;
  public myData : any = [];
  public subjectData : any = [];
  impHeader = "@ViewChild(ChildComponent) viewdata ! : ChildComponent"


   subject = new ReplaySubject();

  constructor(private _childData : childService){}

  isPromise = new Promise<string>((resolve , rejects) =>{
    console.log("promise started");
  })

  myObservable = new Observable(observer => {
    console.log("observable started");
    observer.next("a");
    observer.next('b');
    observer.next('c');

  })

  ngOnInit(){
   this.myObservable.subscribe(data =>{
     console.log(data);
   })

   this._childData.getChild().subscribe(data =>{
    this.myData = data;
    console.log(data);
   })

  }
 
   emitData(){
    this.subject.next(1);
    setTimeout(() => {
      this.subject.next(2);
    }, 3000)

    setTimeout(() => {
      this.subject.next(3);
    }, 6000)
    setTimeout(() => {
      this.subject.next(4);
    }, 9000)
    setTimeout(() => {
      this.subject.next(5);
    }, 12000)
   }

   getData(){
    this.subscribed =   this.subject.subscribe((data: any) =>{
        this.subjectData.push(data)
        this.messageEvent.emit('Father subject data received');
     })
   }
   unSubscribe(){
     if(this.subscribed){
       this.subscribed.unsubscribe();
     }
  }

  addingChild(childData: any){
      this.myData.push(childData);
      return childData.name +" is added successfully"
  }
  sendMessage(msg:any){
    this.childmessageEvent.emit(msg)
  }

}
