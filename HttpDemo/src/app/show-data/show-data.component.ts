import { Component, OnInit, Input, Output } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-show-data',
    templateUrl: './show-data.component.html',
    styleUrls: ['./show-data.component.css']
})
export class ShowDataComponent implements OnInit {

    public updateSelected;
    public parentData = [];
    public deleteID;
    public fullName;

    constructor(private dataService: DataService, private router: Router) { }

    key: string = 'First Name';
    reverse: boolean = false;
    p: number = 1;

    sort(key) {
        this.key = key;
        this.reverse = !this.reverse;
    }

    ngOnInit() {
        this.dataService.getUsersData().subscribe(data => {
            this.parentData = data;
            console.log(this.parentData);
        });
    }

    setDeleteID(deleteID, fname, lname) {
        this.deleteID = deleteID;
        this.fullName = fname + ' ' + lname;
    }

    onUpdate(i) {
        this.router.navigate(['editData', i]);
    }

    onDelete() {
        this.dataService.deleteUserByID(this.deleteID).subscribe(data => { });
    }
}

