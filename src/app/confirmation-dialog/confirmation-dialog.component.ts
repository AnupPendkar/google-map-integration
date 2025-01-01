import { CommonModule } from '@angular/common';
import {
  Component,
  OnInit,
  Inject,
  Input,
  Optional,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface IConfirmationMessage {
  message?: string;
  title?: string;
  confirmButtonMessage?: string;
  cancelButtonMessage?: string;
  isDetrimentalAction?: boolean;
  isSubmitShown?: boolean;
  rules?: Array<any>;
}

@Component({
  selector: 'app-confirmation-dialog',
  standalone: true,
  imports: [CommonModule, FormsModule, MatButtonModule],
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss'],
})
export class ConfirmationDialogComponent implements OnInit {
  @Input() promptData: IConfirmationMessage;
  @ViewChild('btnRef') buttonRef!: MatButton;

  constructor(
    @Optional() public dialogRef: MatDialogRef<any, any>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: IConfirmationMessage
  ) {
    this.promptData = {
      message: data?.message ?? '',
      cancelButtonMessage: data?.cancelButtonMessage ?? 'Cancel',
      confirmButtonMessage: data?.confirmButtonMessage ?? 'Yes',
      isDetrimentalAction: data?.isDetrimentalAction === true,
      title: data?.title ?? 'Delete Confirmation',
      isSubmitShown: data?.isSubmitShown ?? true,
      rules: data.rules,
    };
  }

  ngOnInit() {}

  ngAfterViewInit() {
    if (this.promptData.isSubmitShown) this.buttonRef.focus();
  }
}
