import {Component} from "@angular/core";

@Component({
  selector:'app-warning-alert',
  template:`
  <p>This is a warning, you are in danger!</p>
  `,
  styles:[
    `
    p{
      padding: 20px;
      background-color: red;
      border:1px solid mediumvioletred;
    }
    `

  ]
})
export class WarningAlertComponent{

}
