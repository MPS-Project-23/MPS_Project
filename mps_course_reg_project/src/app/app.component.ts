import { Component, OnInit } from '@angular/core';
import { UtilService } from './util.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'mps_course_reg_project';

  sidebarVisible: boolean = false;
  userDetails:any = {}

  constructor(
    readonly util: UtilService,
    public http: HttpClient
  ){

  }

  loadPosts() {
    this.http
      .get('https://lemon-forest-095346910.4.azurestaticapps.net/data-api/rest/class_data')
      .subscribe( (response)=> {
          alert(JSON.stringify(response));
    })
  }
  ngOnInit(): void {
      this.userDetails = this.util.getUserInfo();
  }

  onToggle(event: any) {
    this.sidebarVisible = event.checked;
  }

  
}
