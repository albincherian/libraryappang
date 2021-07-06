import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  newUser(item){
    return this.http.post("http://localhost:4000/newuser", {"user":item})
      .subscribe(data => {console.log(data)})
  }
  getUser(email:any){
    return this.http.get("http://localhost:4000/getuser/"+email);
  }
  checkUser(email:any){
    return this.http.get("http://localhost:4000/checkuser/"+email);
  }
}
