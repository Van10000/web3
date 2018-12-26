import { Component, OnInit } from '@angular/core';
import { CompanyInfo } from '../../model/CompanyInfo';

@Component({
  selector: 'app-about-company',
  templateUrl: './about-company.component.html',
  styleUrls: ['./about-company.component.scss'],
  providers: [CompanyInfo]
})
export class AboutCompanyComponent implements OnInit {
  public ads: Array<CompanyAds>;
  public aboutCountry: string;
  public showFull: boolean;
  public aboutCountryShort: string;
  public companyInfo: CompanyInfo;

  constructor(companyInfo: CompanyInfo) {
    this.companyInfo = companyInfo;
    this.ads = [
      new CompanyAds(
        '../assets/images/ads-1.jpg',
        'Клубника на улице рамбла',
        '139,99 руб.'
        ),
      new CompanyAds(
        '../assets/images/ads-2.jpg',
        'Золотой пляж',
        '35,89 руб.'
      ),
      new CompanyAds(
        '../assets/images/ads-1.jpg',
        'Экскурсии',
        '1000 р/час.'
      )
    ];
    this.aboutCountry = `Испа́ния (исп. и галис. España), официально Короле́вство Испа́ния
    (исп. и галис. Reino de España МФА [ˈreino ðe esˈpaɲa]) —
    суверенное государство на юго-западе Европы и частично в Африке,
    член Европейского союза и НАТО. Испания занимает бо́льшую часть (80 %)
    Пиренейского полуострова, а также Канарские и Балеарские острова,
    имеет общую площадь 504 782 км² (вместе с небольшими суверенными
    территориями на африканском побережье, городами Сеута и Мелилья),
    являясь четвёртой по величине страной в Европе (после России,
    Украины и Франции).`;
    this.aboutCountryShort = `Испа́ния (исп. и галис. España), официально Короле́вство Испа́ния
    (исп. и галис. Reino de España МФА [ˈreino ðe esˈpaɲa]) —
    суверенное государство на юго-западе Европы и частично в Африке,
    член Европейского союза и НАТО...`;
    this.showFull = false;
  }

  ngOnInit() {
  }

}


class CompanyAds {
  imagePath: string;
  productName: string;
  productPrice: string;

  constructor(imagePath: string, productName: string, productPrice: string) {
    this.imagePath = imagePath;
    this.productName = productName;
    this.productPrice = productPrice;
  }
}
