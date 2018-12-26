export class CompanyInfo {
  public type: string;
  public name: string;
  public phone: string;
  public website: string;
  public email: string;
  public about: string;
  public requisites: Map<string, string>;

  constructor() {
    this.type = 'Индивидуальный предприниматель';
    this.name = 'Швецова Мария Валерьевна';
    this.phone = '+79193977777';
    this.website = 'www.mary.com';
    this.email = 'mary@tochka.com';
    this.about = `
    Занимается продажей туров в Испанию, экскурсий в самые экзотические места.
    Организует путешествие по индивидуальной программе.
    Предоставляется полная гарантия на поездку.
    `;
    this.requisites = new Map<string, string>(
      [
        ['Счет получателя', '12345 123 1 1234 1234567'],
        ['Получатель', this.name],
        ['БИК', '123456789'],
        ['Банк получателя', 'Банк "Рога и Копыта"'],
        ['Корр. счет', '54321 321 1 4321 7654321'],
        ['ИНН банка', '0123456789'],
        ['КПП банка', '123456789']
      ]);
  }
}
