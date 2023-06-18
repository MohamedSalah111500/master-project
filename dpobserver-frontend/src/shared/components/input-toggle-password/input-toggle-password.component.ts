import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import {
  ControlValueAccessor,
  FormBuilder,
  NG_VALUE_ACCESSOR,
} from "@angular/forms";
import { FormGroup } from "@angular/forms";
import { Validators } from "@angular/forms";
import { HelpersFunction } from "src/app/core/help/help";

@Component({
  selector: "input-toggle-password",
  templateUrl: "./input-toggle-password.component.html",
  styleUrls: ["./input-toggle-password.component.scss"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InputTogglePasswordComponent,
      multi: true,
    },
  ],
})
export class InputTogglePasswordComponent implements ControlValueAccessor {
  constructor(public helpersFunction: HelpersFunction) {}
  @Input() label: string = "Password";
  @Input() valid: any;

  show: boolean = false;
  dirty: boolean = false;

  value: string = "";
  disabled = false;
  onTouched!: () => void;
  onChange: (value: string) => void = () => {};

  writeValue(obj: string): void {
    this.value = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  setValue(e: Event) {
    if (this.disabled) {
      return;
    }
    const filterValue = (e.target as HTMLInputElement).value;
    this.onChange(filterValue);
    this.dirty = true

  }

  showPassword() {
    this.show = !this.show;
  }
}
