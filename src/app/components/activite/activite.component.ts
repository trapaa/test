import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { contactt } from 'src/app/models/con';
import {contacts} from 'src/app/components/contact/contact.component';






export const activites: any = [
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
 const newActivites: any = [
 


  
];



@Component({
  selector: 'app-activite',
  templateUrl: './activite.component.html',
  styleUrls: ['./activite.component.css']
})
export class ActiviteComponent implements OnInit {
  displayedColumns: string[] = ['date','participant', 'subject', 'note','Opération'];
  dataSource: MatTableDataSource<any>;
state:string;
contact:contactt;
id:any;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {
    
    this.state=localStorage.getItem('state')
    if(this.state="update"){
      this.id=localStorage.getItem('id')
      this.contact=contacts[this.id]
      for(let i=0;i<activites.length;i++){
        if(activites[i].participant===this.contact.firstname){
          newActivites.push(activites[i])
        }
      }
      this.dataSource = new MatTableDataSource(newActivites);
    }else{
      this.dataSource = new MatTableDataSource(activites);
    }
  
    console.log(newActivites)
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
   
  }
  delete(i:any){
    console.log(i)
    activites.splice(activites.indexOf(i), 1);
    this.dataSource = new MatTableDataSource(activites);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    }

  ngOnInit() {
    
   

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}



