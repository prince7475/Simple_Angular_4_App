import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:String;
  age:Number;
  email:String;
  address: Address
  hobbies: String[];
  constructor() { 
    console.log("constructor ran")
  }

  ngOnInit() {
    this.name ="Prince"
    this.age = 30;
    this.email = "Prince.donkor74@gmail.com"
    this.address = {
      street : "19B queen street",
      city : "Worcester",
      state: "MA"
    }
    this.hobbies = ["Write code", "Play games"]
  }

  addHobby(value){
    this.hobbies.push(value)
    return false
  }

  
  deleteHoppy(index){
    let newList = this.hobbies.filter( (el,i) => {
     return !(i === index)
    })
    this.hobbies = newList
  }

}

interface Address {
  street:String;
  city:String;
  state:String;
}