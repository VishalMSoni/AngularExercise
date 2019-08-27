import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "customPhoneNum" })

export class customNumber implements PipeTransform {

    constructor() { }

    transform(value: any) {
        if (value.length == 10) {
            let newValue;
            newValue = '+91-' + value.slice(0, 3) + '-' + value.slice(3, 7) + '-' + value.slice(7, 10);
            return newValue;
        }
    }
}

