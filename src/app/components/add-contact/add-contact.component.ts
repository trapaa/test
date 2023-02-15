import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { contactt } from 'src/app/models/con';
import {contacts} from 'src/app/components/contact/contact.component';
import {  Router } from '@angular/router';


@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
  contact:contactt;
  c:any;
  registerForm: FormGroup;
    submitted = false;
  constructor(private formBuilder: FormBuilder,private router:Router) { }
  form = {
    email:',',
    FirstName: '',
    LastName: '',
   
   
    acceptTerms: false,
  };
  ngOnInit() {
    this.c=contacts;
    console.log(contacts)
   this.contact=new contactt()
    this.registerForm = this.formBuilder.group({
      FirstName: ['', Validators.required],
      LastName: ['', Validators.required],
        
        acceptTerms: [false, Validators.requiredTrue]
    }, {
     
    });

}

get f() { return this.registerForm.controls; }




onSubmit() {
  console.log(this.contact)
  contacts.push(this.contact);
  
  console.log(contacts)
  
  this.submitted = true;

  if(confirm("Are you sure to save ")) {
    (this.router.navigate(['/contact']))
  }
 
  // stop here if form is invalid
  if (this.registerForm.invalid) {
      return;
  }

  // display form values on success
  alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
  console.log("vrai")
}

}
