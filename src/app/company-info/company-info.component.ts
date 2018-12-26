import { Component, OnInit } from '@angular/core';
import { CompanyInfo} from '../../model/CompanyInfo';

@Component({
  selector: 'app-company-info',
  templateUrl: './company-info.component.html',
  styleUrls: ['./company-info.component.scss'],
  providers: [CompanyInfo]
})
export class CompanyInfoComponent implements OnInit {
  public showAbout: boolean;
  public showRequisites: boolean;
  public companyInfo: CompanyInfo;

  constructor(companyInfo: CompanyInfo) {
    this.companyInfo = companyInfo;
    this.showAbout = false;
    this.showRequisites = false;
  }

  ngOnInit(): void {
  }
}
