import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-golive',
  templateUrl: './golive.component.html',
  styleUrls: ['./golive.component.scss']
})
export class GoliveComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
  }

  gotoMainWebsite(){
    // this.router.navigate(['https://paynet.co.in/']);
    window.location.href="https://paynet.co.in/";
  }
  proceedtoDashborad(){
    this.router.navigate(['./personalinfo']);
  }

}
