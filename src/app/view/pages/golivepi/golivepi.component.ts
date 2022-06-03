import { Component, OnInit,  Input, ViewChild  } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl } from '@angular/forms';
import Stepper from 'bs-stepper';
import { WizardComponent as BaseWizardComponent } from 'angular-archwizard';
import { NgbDateStruct, NgbCalendar, NgbDate, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';

import flatpickr from 'flatpickr'


@Component({
  selector: 'app-golivepi',
  templateUrl: './golivepi.component.html',
  styleUrls: ['./golivepi.component.scss']
})
export class GolivepiComponent implements OnInit {

  validationpersonalDetails1: FormGroup;
  validationpersonalDetails2: FormGroup;
  validationForm3: FormGroup;
  validationForm4: FormGroup;

  isForm1Submitted: Boolean;
  isForm2Submitted: Boolean;
  isForm3Submitted: Boolean;
  isForm4Submitted: Boolean;
  @ViewChild('wizardForm') wizardForm: BaseWizardComponent;

  model: NgbDateStruct;
  selectedDate: any;
  submitted = false;

  constructor(
    private fb: FormBuilder
  ) { }

 

  ngOnInit(): void {

    flatpickr(".flatpickr-minimum");
    flatpickr(".flatpickr-datetime", {
      enableTime: true,
      dateFormat: "Y-m-d H:i",
    });

     /**
     * form1 value validation
     */
      this.validationpersonalDetails1 = this.fb.group({
        firstName : [''],
        lastName : [''],
        email : [''],
        dateofbirth: [''],
        mobilenumber: ['']
      });

//       Validators.required
// Validators.required
// Validators.required
// Validators.required
// Validators.required
  
      /**
       * formw value validation
       */
      this.validationpersonalDetails2 = this.fb.group({
        storename : ['', ],
        address1 : ['', ],
        address2 : ['', ],
        address3 : ['', ],
        webpage : ['', ],
        storelogo : ['', ],
        customerservicecontactnumber : ['', ],
        chargebackcontactnumber : ['', ],

      });
//       [Validators.required, Validators.email]
//       Validators.required
// Validators.required
// Validators.required
// Validators.required
// Validators.required
// Validators.required
// Validators.required

        /**
       * formw value validation
       */
         this.validationForm3 = this.fb.group({
          email : ['', ],
          mobileNumber : ['',],
          password : ['',]
        });
        // [Validators.required, Validators.email]
        // Validators.required
        // Validators.required

        /**
       * formw value validation
       */
         this.validationForm4 = this.fb.group({
          email : ['', [Validators.required, Validators.email]],
          mobileNumber : ['', Validators.required],
          password : ['', Validators.required]
        });
  
      this.isForm1Submitted = false;
      this.isForm2Submitted = false;
      this.isForm3Submitted = false;
      this.isForm4Submitted = false;
  
  }


  /**
   * Wizard finish function
   */
   finishFunction() {
    alert('Successfully Completed');
  }

  /**
   * Returns form
   */
   get f() { return this.validationpersonalDetails1.controls; }

  
  /**
   * Returns form
   */
  get form2() {
    return this.validationpersonalDetails2.controls;
  }

  /**
   * Go to next step while form value is valid
   */
  form1Submit() {
    console.log(this.validationpersonalDetails1.value) ;
    if(this.validationpersonalDetails1.valid) {
      this.wizardForm.goToNextStep();
    }
    this.isForm1Submitted = true;
  }

  /**
   * Go to next step while form value is valid
   */
  form2Submit() {
    console.log(this.validationpersonalDetails2.value);
    if(this.validationpersonalDetails2.valid) {
      this.wizardForm.goToNextStep();
    }
    this.isForm2Submitted = true;
  }


   



 

}
