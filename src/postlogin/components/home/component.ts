import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, MatDialog } from '@angular/material';
import { AddeventComponent } from '../addevent/component';
import { CommonPopupComponent } from '../../../shared/component/common-popup/component';

export interface TodoList {

  description: string;
  targetDate: string;
  isCompleted: boolean;
}

const todoLists: TodoList[] = [
  { description: 'learn JPA', targetDate: 'Nov 1, 2020', isCompleted: true },
  { description: 'learn JPA', targetDate: 'Nov 2, 2020', isCompleted: true },
  { description: 'learn JPA', targetDate: 'Nov 3, 2020', isCompleted: true },
  { description: 'learn JPA', targetDate: 'Nov 4, 2020', isCompleted: true },
  { description: 'learn JPA', targetDate: 'Nov 5, 2020', isCompleted: true },
  { description: 'learn JPA', targetDate: 'Nov 6, 2020', isCompleted: true },
  { description: 'learn JPA', targetDate: 'Nov 7, 2020', isCompleted: true },
  { description: 'learn JPA', targetDate: 'Nov 8, 2020', isCompleted: true },
  { description: 'learn JPA', targetDate: 'Nov 9, 2020', isCompleted: true },
  { description: 'learn JPA', targetDate: 'Nov 10, 2020', isCompleted: true },
  { description: 'learn JPA', targetDate: 'Nov 11, 2020', isCompleted: true },
  { description: 'learn JPA', targetDate: 'Nov 12, 2020', isCompleted: true },
  { description: 'learn JPA', targetDate: 'Nov 13, 2020', isCompleted: true },
  { description: 'learn JPA', targetDate: 'Nov 14, 2020', isCompleted: true },
  { description: 'learn JPA', targetDate: 'Nov 15, 2020', isCompleted: true },
  { description: 'learn JPA', targetDate: 'Nov 16, 2020', isCompleted: true },
  { description: 'learn JPA', targetDate: 'Nov 17, 2020', isCompleted: true },
];


@Component({
  selector: 'app-home',
  templateUrl: './template.html',
  styleUrls: ['./style.css']
})

export class HomeComponent implements OnInit {



  constructor(
    private router: Router,
    private dialog: MatDialog
  ) { }


  displayedColumns: string[] = ['description', 'targetDate', 'isCompleted', 'update', 'delete'];


  todoList = new MatTableDataSource(todoLists);

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  ngOnInit() {
    this.todoList.sort = this.sort;
  }

  public openPopUp(): void {
    this.dialog.open(AddeventComponent, {
      width: '50%'
    });
  }

  public updateTodoDetails(): void {
    this.dialog.open(AddeventComponent, {
      width: '50%'
    });
  }

  public deleteTodoDetails(): void {
    this.dialog.open(CommonPopupComponent, {
      width: '30%'
    });
  }

  public logout(): void {
    this.dialog.open(CommonPopupComponent, {
      width: '30%'
    });
    // this.router.navigate(['login']);
  }

}
