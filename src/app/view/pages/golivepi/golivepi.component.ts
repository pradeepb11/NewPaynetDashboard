import { Component, OnInit,  Input, ViewChild, AfterViewInit  } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl } from '@angular/forms';
import Stepper from 'bs-stepper';
import { WizardComponent as BaseWizardComponent } from 'angular-archwizard';
import { NgbDateStruct, NgbCalendar, NgbDate, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';

import flatpickr from 'flatpickr'
// declare var $: any;  
import * as $ from 'jquery'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-golivepi',
  templateUrl: './golivepi.component.html',
  styleUrls: ['./golivepi.component.scss']
})
export class GolivepiComponent implements OnInit, AfterViewInit {

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
  image: any;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
  ) { }
  ngAfterViewInit(): void {
   

  }

 

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
        Account_type:[''],
        Store_name : ['', ],
        address1 : ['', ],
        address2 : ['', ],
        address3 : ['', ],
        webpage : ['', ],
        storelogo : ['', ],
        customerservicecontactnumber : ['', ],
        chargebackcontactnumber : ['', ],
        csemailaddress:[''],
        termandcUrl:[''],
        productdesc:[''], 
        chargebackemailadd:['']


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
          branchaddress:[''],
          ibancode:[''],
          accountholdername:[''],
          accountnumber:[''],
          bankstatement:[''],


        });
        // [Validators.required, Validators.email]
        // Validators.required
        // Validators.required

        /**
       * formw value validation
       */
         this.validationForm4 = this.fb.group({
          nameofyourbuisness : ['',],
          yearofyourbuisness : ['', Validators.required],
          password : ['', Validators.required]
        });
  
      this.isForm1Submitted = false;
      this.isForm2Submitted = false;
      this.isForm3Submitted = false;
      this.isForm4Submitted = false;
  


      if ($('#timer-countdown').length) {
        function countdown( elementName: any, minutes: any, seconds:any )
        {
            var element:any, endTime:any, hours:any, mins:any, msLeft:any, time:any;
            function twoDigits( n:any )
            {
                return (n <= 9 ? "0" + n : n);
            }
            function updateTimer()
            {
                msLeft = endTime - (+new Date);
                if ( msLeft < 1000 ) {
                    element.innerHTML = "Time is up!";
                } else {
                    time = new Date( msLeft );
                    hours = time.getUTCHours();
                    mins = time.getUTCMinutes();
                    element.innerHTML = (hours ? hours + ':' + twoDigits( mins ) : mins) + ':' + twoDigits( time.getUTCSeconds() );
                    setTimeout( updateTimer, time.getUTCMilliseconds() + 500 );
                }
            }
            element = document.getElementById( elementName );
            endTime = (+new Date) + 1000 * (60*minutes + seconds) + 500;
            updateTimer();
        }
        countdown( "timer-countdown", 5, 0 );
      }

  }


  /**
   * Wizard finish function
   */
   finishFunction() {
    alert('Successfully Completed');
    this.router.navigate(['/dashboard']);
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

  changeListener($event:any) : void {
    this.readThis($event.target);
  }
   

  readThis(inputValue: any): void {
    var file:File = inputValue.files[0];
    var myReader:FileReader = new FileReader();

    myReader.onloadend = (e) => {
      this.image = myReader.result;
      console.log(myReader.result);
    }
    myReader.readAsDataURL(file);
  }

 

}
