import { FormGroup } from "@angular/forms";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class HelpersFunction {
  getErrorByController = (
    formBuilder: any,
    name: string,
    errorName: string
  ): FormGroup<any> => {
    return formBuilder["controls"][name].errors?.[errorName];
  };

  isControllerValid = (formBuilder: any, name: string): FormGroup<any> => {
    return formBuilder["controls"][name].valid;
  };

  isControllerTouched = (formBuilder: any, name: string): FormGroup<any> => {
    return formBuilder["controls"][name].dirty;
  };

  controllerNotValidAndDirty = (
    formBuilder: any,
    name: string
  ): FormGroup<any> => {
    return (
      !formBuilder["controls"][name].valid &&
      formBuilder["controls"][name].dirty
    );
  };

  controllerVal = (formBuilder: any, name: string): FormGroup<any> => {
    return formBuilder["controls"][name].value;
  };
}
