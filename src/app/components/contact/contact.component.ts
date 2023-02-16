import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {  Router } from '@angular/router';





export const contacts: any = [
  {id:1,firstname: 'efdfl', lastname: 'Berline',company:'iyoyuy',job:'hthyth',email:'szde',phone:333333,contactowner:'fdrrrh',adress:'fdrrrh',city:'fdrrrh',contry:'fdrrrh',state:'fdrrrh',zip:11},
  { id:2,firstname: 'erzerze', lastname: 'ssqsq',company:'ghfghg',job:'sqdqsdqs',email:'htyt',phone:5554,contactowner:'sddfgr',adress:'fdrrrh',city:'fdrrrh',contry:'fdrrrh',state:'fdrrrh',zip:11},
  {id:3,firstname: 'zmrklefs', lastname: 'csccsc',company:'sdqsdq',job:'ezezez',email:'qqqqq',phone:558474,contactowner:'aazea',adress:'fdrrrh',city:'fdrrrh',contry:'fdrrrh',state:'fdrrrh',zip:11},
  {id:4,firstname: 'efdfl', lastname: 'Berline',company:'iyoyuy',job:'hthyth',email:'szde',phone:333333,contactowner:'fdrrrh',adress:'fdrrrh',city:'fdrrrh',contry:'fdrrrh',state:'fdrrrh',zip:11},
  {id:5,firstname: 'erzerze', lastname: 'ssqsq',company:'ghfghg',job:'sqdqsdqs',email:'htyt',phone:5554,contactowner:'sddfgr',adress:'fdrrrh',city:'fdrrrh',contry:'fdrrrh',state:'fdrrrh',zip:11},
  {id:6,firstname: 'zmrklefs', lastname: 'csccsc',company:'sdqsdq',job:'ezezez',email:'qqqqq',phone:558474,contactowner:'aazea',adress:'fdrrrh',city:'fdrrrh',contry:'fdrrrh',state:'fdrrrh',zip:11},
  {id:7,firstname: 'efdfl', lastname: 'Berline',company:'iyoyuy',job:'hthyth',email:'szde',phone:333333,contactowner:'fdrrrh',adress:'fdrrrh',city:'fdrrrh',contry:'fdrrrh',state:'fdrrrh',zip:11},
  {id:8,firstname: 'erzerze', lastname: 'ssqsq',company:'ghfghg',job:'sqdqsdqs',email:'htyt',phone:5554,contactowner:'sddfgr',adress:'fdrrrh',city:'fdrrrh',contry:'fdrrrh',state:'fdrrrh',zip:11},
  {id:9,firstname: 'zmrklefs', lastname: 'csccsc',company:'sdqsdq',job:'ezezez',email:'qqqqq',phone:558474,contactowner:'aazea',adress:'fdrrrh',city:'fdrrrh',contry:'fdrrrh',state:'fdrrrh',zip:11}
  
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
 
  constructor(private router:Router) {

    this.dataSource = new MatTableDataSource(contacts);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


  delete(i:any){
    console.log(i)
    contacts.splice(contacts.indexOf(i), 1);
    this.dataSource = new MatTableDataSource(contacts);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    }

   update(i:any){
    localStorage.setItem('id',contacts.indexOf(i));
    (this.router.navigate(['/update']))

   }

   activite(){
    localStorage.setItem('state','ajoute');
    (this.router.navigate(['/activite']))

   }

    

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}



