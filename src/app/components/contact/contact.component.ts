import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';





export const contacts: any = [
  {firstname: 'efdfl', lastname: 'Berline',company:'iyoyuy',job:'hthyth',email:'szde',phone:333333,contactowner:'fdrrrh'},
  {firstname: 'erzerze', lastname: 'ssqsq',company:'ghfghg',job:'sqdqsdqs',email:'htyt',phone:5554,contactowner:'sddfgr'},
  {firstname: 'zmrklefs', lastname: 'csccsc',company:'sdqsdq',job:'ezezez',email:'qqqqq',phone:558474,contactowner:'aazea'},
  {firstname: 'efdfl', lastname: 'Berline',company:'iyoyuy',job:'hthyth',email:'szde',phone:333333,contactowner:'fdrrrh'},
  {firstname: 'erzerze', lastname: 'ssqsq',company:'ghfghg',job:'sqdqsdqs',email:'htyt',phone:5554,contactowner:'sddfgr'},
  {firstname: 'zmrklefs', lastname: 'csccsc',company:'sdqsdq',job:'ezezez',email:'qqqqq',phone:558474,contactowner:'aazea'},
  {firstname: 'efdfl', lastname: 'Berline',company:'iyoyuy',job:'hthyth',email:'szde',phone:333333,contactowner:'fdrrrh'},
  {firstname: 'erzerze', lastname: 'ssqsq',company:'ghfghg',job:'sqdqsdqs',email:'htyt',phone:5554,contactowner:'sddfgr'},
  {firstname: 'zmrklefs', lastname: 'csccsc',company:'sdqsdq',job:'ezezez',email:'qqqqq',phone:558474,contactowner:'aazea'}
  
];


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements AfterViewInit {
  displayedColumns: string[] = ['etoile','firstname', 'lastname', 'company', 'job','email', 'phone', 'contactowner','Opération'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {

    this.dataSource = new MatTableDataSource(contacts);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}



