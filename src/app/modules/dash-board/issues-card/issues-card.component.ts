import { HttpClient } from '@angular/common/http';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-issues-card',
  templateUrl: './issues-card.component.html',
  styleUrls: ['./issues-card.component.css']
})
export class IssuesCardComponent implements OnInit {
  
  IssueReportArray : any[] = [];
  isResultLoaded = false;
  isUpdateFormActive = false;

  title: string ="";
  author: string ="";
  summary: string="";
  report: string="";
  fixes: string ="";
  
  CurrentID = "";

  constructor(private http: HttpClient)
  {
    this.getAllIssueReport();
  }

  ngOnInit(): void {
  }

  getAllIssueReport()
  { 
    this.http.get("http://127.0.0.1:8000/api/V1/_issue_report")
    
    .subscribe((resultData: any)=>
    {
        this.isResultLoaded = true;
        console.log(resultData);
        this.IssueReportArray = resultData;
    });
  }

  register()
  {
    let bodyData = {
      "title" : this.title,
      "author" : this.author,
      "summary" : this.summary,
      "report" : this.report,
      "fixes" : this.fixes
    };

    this.http.post("http://127.0.0.1:8000/api/V1/save",bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Issue/Report registered successfully.")
        this.getAllIssueReport();
        this.title = '';
        this.author = '';
        this.summary  = '';
        this.report = '';
        this.fixes = '';
    });

  }

  setUpdate(data: any) 
  {
   this.title = data.title;
   this.author = data.author;
   this.summary = data.summary;
   this.report = data.report;
   this.fixes = data.fixes;
   this.CurrentID = data.id;
  }

  UpdateRecords()
  {
    let bodyData = {
      "title" : this.title,
      "author" : this.author,
      "summary" : this.summary,
      "report" : this.report,
      "fixes" : this.fixes
    };

    this.http.put("http://127.0.0.1:8000/api/V1/update"+"/"+ this.CurrentID,bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Issue/Report updated.")
        this.getAllIssueReport();
        this.author = '';
        this.summary  = '';
        this.report = '';
        this.fixes  = '';
    });
  }

  save()
  {
    if(this.CurrentID == '')
    {
        this.register();
    }
      else
      {
       this.UpdateRecords();
       this.CurrentID='';
      }          
  }

  setDelete(data: any)
  {
    this.http.delete("http://127.0.0.1:8000/api/V1/delete"+"/"+data.id).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Issue/Report deleted")
        this.getAllIssueReport();
   
    });

  }
}
