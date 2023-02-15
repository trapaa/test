import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';






const activites: any = [
  {date: '12/121/12', participant: 'Berline',subject:'eeeeee',note:'aaaaaa'},
  {date: '19/15/15', participant: 'aaaaaa',subject:'fffff',note:'ddddddd'},
  {date: '15/121/13', participant: 'bbbbb',subject:'hhhhhh',note:'xsssss'},
  {date: '13/121/14', participant: 'ccccccc',subject:'sssssss',note:'QQQQQ'},
  {date: '11/12/15', participant: 'dddddd',subject:'zzzzzz',note:'SSDDSDSD'},
  {date: '12/121/12', participant: 'Berline',subject:'eeeeee',note:'aaaaaa'},
  {date: '19/15/15', participant: 'aaaaaa',subject:'fffff',note:'ddddddd'},
  {date: '15/121/13', participant: 'bbbbb',subject:'hhhhhh',note:'xsssss'},
  {date: '13/121/14', participant: 'ccccccc',subject:'sssssss',note:'QQQQQ'},
  {date: '11/12/15', participant: 'dddddd',subject:'zzzzzz',note:'SSDDSDSD'},


  
];


@Component({
  selector: 'app-activite',
  templateUrl: './activite.component.html',
  styleUrls: ['./activite.component.css']
})
export class ActiviteComponent implements AfterViewInit {
  displayedColumns: string[] = ['date','participant', 'subject', 'note','Opération'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {
    this.dataSource = new MatTableDataSource(activites);
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



