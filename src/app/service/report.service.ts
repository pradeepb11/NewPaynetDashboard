import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError,  map,  tap } from 'rxjs/operators'; 
import { environment } from 'src/environments/environment';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};



@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(
    private _http: HttpClient
  ) { }


  payoutReport(timestamp: Timestamp): Observable<any>{
    return this._http.post<any>('http://43.204.55.13:3000/api/payoutreport/', timestamp, httpOptions)
    catchError(this.handleError)
  }

  payoutreportsucess(): Observable<any>{
    return this._http.get<any>('http://43.204.55.13:3000/api/payoutreport/success', httpOptions)
    catchError(this.handleError);
    
  }
  payoutReportFailur(): Observable<any>{
    return this._http.get<any>('http://43.204.55.13:3000/api/payoutreport/failure', httpOptions)
    catchError(this.handleError);
  }

  payinReport(timestampReport: TimeStampReport): Observable<any>{
    return this._http.post<any>('http://43.204.55.13:3000/api/payinReport/', timestampReport, httpOptions)
    catchError(this.handleError)
  }

  payinReportSuccess(): Observable<any>{
    return this._http.get<any>('http://43.204.55.13:3000/api/payinreport/success', httpOptions)
    catchError(this.handleError)
  }

  payinReportFailure(): Observable<any>{
    return this._http.get<any>('http://43.204.55.13:3000/api/payinreport/failure', httpOptions)
    catchError(this.handleError);
  }

  payoutReportThisMonth():Observable<any>{
    return this._http.get<any>('http://43.204.55.13:3000/api/payoutreport/payoutmonthReport', httpOptions)
    catchError(this.handleError)
  }
  
  


  private handleError(err: HttpErrorResponse){

    let errorMessage = '';
    if(err.error instanceof ErrorEvent){
        errorMessage = `An error occurred ${err.error.message}`;
        console.log('Error Occurred');
    } else {
        errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        console.log('Server returned code');
    }
    console.error(errorMessage);
    return throwError(errorMessage);
}



}


export interface Timestamp{
  start_date: string;
  end_date: string;
} 

export interface TimeStampReport{
  start_date: string;
  end_date: string;
}