import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';




@Component({
  selector: 'app-add-activite',
  templateUrl: './add-activite.component.html',
  styleUrls: ['./add-activite.component.css']
})
export class AddActiviteComponent implements OnInit {

  date:Date;
  registerForm: FormGroup;
    submitted = false;
  constructor(private formBuilder: FormBuilder) {  }
  

  ngOnInit() {
  
    this.registerForm = this.formBuilder.group({
      date: ['', Validators.required],
      type: ['', Validators.required],
        
        acceptTerms: [false, Validators.requiredTrue]
    }, {
     
    });

    
}

get f() { return this.registerForm.controls; }

onSubmit() {
  this.submitted = true;

  // stop here if form is invalid
  if (this.registerForm.invalid) {
      return;
  }

  // display form values on success
  alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
  console.log("vrai")
}

}
