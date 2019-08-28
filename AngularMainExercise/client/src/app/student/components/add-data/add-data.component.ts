import { Component, OnInit } from '@angular/core';
import { AddUser } from '../../../add-user';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DataService } from '../../../data.service';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css']
})
export class AddDataComponent implements OnInit {

  public id;
  public isUpdate = true;
  public updateData = [];

  userModel = new AddUser(null, "vishal", "soni", null, "7417417415", "vms@gmail.com", 360003);

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private dataService: DataService) { }

  ngOnInit() {
    this.editData();
  }

  editData() {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.id = parseInt(params.get('id'));
    });

    if (this.id) {
      this.isUpdate = true;
      this.dataService.getUserByID(this.id).subscribe(data => {
        this.userModel = data;
      });
    }
    else {
      this.isUpdate = false;
    }
  }

  onSubmit() {
    if (this.isUpdate) {
      this.dataService.updateUserByID(this.userModel, this.id).subscribe(data => { });
    } else {
      console.log(this.userModel);
      this.dataService.createUsersData(this.userModel).subscribe(data => { });
    }
    this.router.navigate(['showData']);
  }
}
