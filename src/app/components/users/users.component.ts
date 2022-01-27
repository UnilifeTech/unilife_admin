import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  constructor(private http: HttpClient, private toastr: ToastrService) {}

  ngOnInit(): void {
    this.http.get('http://localhost:5000/userlist').subscribe((res) => {
      console.log(res);
    });
  }
}
