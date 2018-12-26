import {FormGroup} from '@angular/forms';

export class Helpers {
  static no_break(text: string) {
    return text.replace(' ', '&nbsp;');
  }
}

export let inRange = function (value: any, left: any, right: any) {
  return (value >= left && value <= right);
};

export let formatNumeric = function (form, controlName, event, length) {
  const control = form.controls[controlName];
  const controlValue = (control.value != null) ? control.value.toString() : '';
  const is_number = inRange(event.key, '0', '9');
  const too_long = controlValue.length > (length - 1);
  if ((!is_number) || too_long) {
    event.preventDefault();
  }
};
