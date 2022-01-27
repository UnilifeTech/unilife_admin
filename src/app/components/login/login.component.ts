import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  username: any;
  password: any;
  constructor(private http: HttpClient, private toastr: ToastrService) {}

  ngOnInit(): void {}

  login() {
    if (!this.username) {
      this.toastr.error('Enter Username', 'Error');
      return;
    }
    if (!this.password) {
      this.toastr.error('Enter Password', 'Error');
      return;
    }
    console.log(this.username, this.password);
    let data = {
      username: 'webmaster',
      password: '724724',
    };
    this.http
      .post('http://localhost:5000/adminlogin', data)
      .subscribe((res) => {
        console.log(res);
        if(res) {

        }
        else {
          this.toastr.error("Something went wrong");
        }
      });
  }
}
