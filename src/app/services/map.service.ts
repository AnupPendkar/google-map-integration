import { inject, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import {
  IConfirmationMessage,
  ConfirmationDialogComponent,
} from '../confirmation-dialog/confirmation-dialog.component';

@Injectable({
  providedIn: 'root',
})
export class MapService {
  title;
  bounds;
  private toastr = inject(ToastrService);
  private dialog = inject(MatDialog);

  constructor() {}

  showSuccessToast(toastTitle: string, toastMessage?: string) {
    this.toastr.success(toastMessage, toastTitle);
  }

  showFailedToast(toastTitle: string, toastMessage?: string) {
    this.toastr.error(toastMessage, toastTitle);
  }

  askUserConfirmation(
    confirmationMsg: IConfirmationMessage,
    dismissable = true
  ): Observable<any> {
    return this.dialog
      .open(ConfirmationDialogComponent, {
        data: confirmationMsg,
        backdropClass: 'delete-confirmation-popup',
        disableClose: !dismissable,
        panelClass: 'confirmation-overlay',
        autoFocus: false,
        maxWidth: '90vw !important',
        height: '100% !important',
        width: '100% !important',
      })
      .afterClosed();
  }

  bargePointSelectionRules(
    confirmationMsg: IConfirmationMessage,
    dismissable = true
  ): Observable<any> {
    return this.dialog
      .open(ConfirmationDialogComponent, {
        data: confirmationMsg,
        backdropClass: 'delete-confirmation-popup',
        disableClose: !dismissable,
        panelClass: 'confirmation-overlay',
        autoFocus: false,
        maxWidth: '90vw !important',
        height: '100% !important',
        width: '100% !important',
      })
      .afterClosed();
  }
}
