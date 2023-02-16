import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { activite } from 'src/app/models/activite';
import {activites} from 'src/app/components/activite/activite.component';
import {  Router } from '@angular/router';
import {contacts} from 'src/app/components/contact/contact.component';




@Component({
  selector: 'app-add-activite',
  templateUrl: './add-activite.component.html',
  styleUrls: ['./add-activite.component.css']
})
export class AddActiviteComponent implements OnInit {
activite:activite;
  date:Date;
  a:any;
  registerForm: FormGroup;
    submitted = false;
  constructor(private formBuilder: FormBuilder,private router:Router) {  }
  form = {
    
    date: '',
    type: '',
   
    acceptTerms: false,
  };

  ngOnInit() {
    this.activite=new activite();
    this.a=contacts;
    this.registerForm = this.formBuilder.group({
      date: ['', Validators.required],
      type: ['', Validators.required],
        
        acceptTerms: [false, Validators.requiredTrue]
    }, {
     
    });

    
}

get f() { return this.registerForm.controls; }

activitee(){
  localStorage.setItem('state','liste');
  (this.router.navigate(['/activite']))

 }

onSubmit() {
  console.log(this.activite)
  activites.push(this.activite);
  
  console.log(activites)
  this.submitted = false;
  if(confirm("Are you sure to save ")) {
    (this.router.navigate(['/activite']))
  }
 

  // stop here if form is invalid
  if (this.registerForm.invalid) {
      return;
  }

  // display form values on success
  alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
  
}



}
