import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as i0 from "@angular/core";
import * as i1 from "../konverso.service";
import * as i2 from "../translate.service";
import * as i3 from "@angular/material/dialog";
import * as i4 from "@angular/forms";
import * as i5 from "@angular/common";
import * as i6 from "nowboard-icon";
function ModalAddAttachmentsComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 16);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.fileError, " ");
} }
function ModalAddAttachmentsComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 17)(1, "div", 18);
    i0.ɵɵelement(2, "div", 19);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "nb-icon", 20);
    i0.ɵɵlistener("click", function ModalAddAttachmentsComponent_div_18_Template_nb_icon_click_3_listener() { const restoredCtx = i0.ɵɵrestoreView(_r5); const d_r2 = restoredCtx.$implicit; const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.deleteFile(d_r2)); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const index_r3 = ctx.index;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("id", "img-preview-" + index_r3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("icon", "delete_1")("size", 1.5);
} }
export class ModalAddAttachmentsComponent {
    constructor(data, service, translate, dialogRef) {
        this.data = data;
        this.service = service;
        this.translate = translate;
        this.dialogRef = dialogRef;
        this.documentList = [];
        this.displayText = {};
        this.message = '';
        this.fileError = '';
        dialogRef.disableClose = true; // block the close with make lose the attachments
        this.service.documents.subscribe((files) => {
            files.forEach(async (f) => {
                const index = files.indexOf(f);
                await this.setPreview(index, f);
            });
        });
    }
    ngOnInit() {
        this.documentList = this.data.data.documentList || [];
        this.input = this.data.data.input;
        if (this.documentList.length > 0) {
            this.documentList.forEach(async (f) => {
                // this.documentList.push(f);
                const index = this.documentList.indexOf(f);
                await this.setPreview(index, f);
            });
        }
        // this.input.onchange= ($event: any) => {
        //     console.log($event);
        //     console.log(this.documentList);
        //     // @ts-ignore
        //     Array.from($event.target.files).forEach(async (f: any) => {
        //         this.documentList.push(f);
        //         let index = this.documentList.indexOf(f);
        //         await this.setPreview(index, f)
        //       });
        //       console.log(this.documentList, 'apres le foreach');
        // };
    }
    async setPreview(index, blob) {
        if (['image/jpeg', 'image/png', 'image/svg+xml'].includes(blob.type)) {
            setTimeout(() => {
                const image = document.getElementById('img-preview-' + index);
                image.style.background = 'url(' + URL.createObjectURL(blob) + ')';
                image.style.backgroundSize = 'cover';
                image.style.backgroundPosition = 'center center';
            }, 500);
        }
        else if (['application/pdf', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document'].includes(blob.type)) {
            setTimeout(() => {
                const image = document.getElementById('img-preview-' + index);
                // image.style.background = 'url(' + URL.createObjectURL(blob) + ')';
                // image.style.backgroundSize = 'cover';
                // image.style.backgroundPosition = 'center center';
                image.classList.add('attachment-list-item-left');
                const ext = blob.name.split('.').pop();
                image.classList.add(ext);
                image.classList.add('d-flex-c');
                image.innerHTML = '.' + ext.toUpperCase();
            }, 500);
        }
        else {
            this.documentList.splice(index, 1);
            this.fileError = this.translate.translate(this.service.locale, 'INVALID_FILE_FORMAT');
            setTimeout(() => {
                // @ts-ignore
                document.getElementById('textarea').value = document.getElementById('textarea').value.replace(blob.name, '');
                this.message = this.message.replace(blob.name, '');
            }, 100);
            setTimeout(() => this.fileError = '', 2000);
        }
    }
    clearMessage() {
        this.message = '';
    }
    deleteFile(file) {
        this.documentList.splice(this.documentList.indexOf(file), 1);
    }
    async onPaste(e) {
        const items = (e.clipboardData || e.originalEvent.clipboardData).items;
        let blob;
        for (const item of items) {
            // if (item.type.indexOf('image') === 0) {
            if (item.kind == 'file') {
                blob = item.getAsFile();
                this.documentList.push(blob);
                const index = this.documentList.indexOf(blob);
                await this.setPreview(index, blob);
            }
        }
    }
    sendAttachments() {
        this.dialogRef.close(this.documentList);
    }
    close() {
        this.dialogRef.close(null);
    }
}
ModalAddAttachmentsComponent.ɵfac = function ModalAddAttachmentsComponent_Factory(t) { return new (t || ModalAddAttachmentsComponent)(i0.ɵɵdirectiveInject(MAT_DIALOG_DATA), i0.ɵɵdirectiveInject(i1.KonversoService), i0.ɵɵdirectiveInject(i2.TranslateService), i0.ɵɵdirectiveInject(i3.MatDialogRef)); };
ModalAddAttachmentsComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ModalAddAttachmentsComponent, selectors: [["modal-add-attachments"]], decls: 21, vars: 12, consts: [[1, "position-relative", "modal-attachments-content"], ["mat-dialog-close", "", 1, "close-dialog-icon", "close-dialog-icon-15", 3, "click"], [3, "icon", "size"], [1, "bot", "bot-no-anim"], [1, "circle1"], [1, "circle2"], [1, "circle3"], [1, "mt30", "nb-title-l", "title"], ["id", "textarea", "tabindex", "1", 1, "nb-text-3", "custom-scrollbar", "multiline", "full-width", 3, "ngModel", "placeholder", "keyup", "paste", "ngModelChange"], ["class", "error", 4, "ngIf"], [1, "mt30", "mb15", "file", 3, "click"], [1, "nb-text-s", "file-message"], [1, "mb10", "nb-text-s-1", "file-format"], [1, "d-flex-ai-c", "flex-flow-wrap", "file-div-container", "custom-scrollbar"], ["class", "mb10 mr5 d-flex-ai-c", 4, "ngFor", "ngForOf"], [1, "mt15", "full-width", "rounded", "primary", "btn-send", 3, "disabled", "click"], [1, "error"], [1, "mb10", "mr5", "d-flex-ai-c"], [1, "file-name-div", "d-flex-ai-c", "mr5"], [1, "pj-preview", "cursor-pointer", 3, "id"], [1, "mr0", "file-icon", 3, "icon", "size", "click"]], template: function ModalAddAttachmentsComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "div", 1);
        i0.ɵɵlistener("click", function ModalAddAttachmentsComponent_Template_div_click_1_listener() { return ctx.close(); });
        i0.ɵɵelement(2, "nb-icon", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "div", 3);
        i0.ɵɵelement(4, "div", 4)(5, "div", 5)(6, "div", 6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "div", 7);
        i0.ɵɵtext(8);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "textarea", 8);
        i0.ɵɵlistener("keyup", function ModalAddAttachmentsComponent_Template_textarea_keyup_9_listener() { return ctx.clearMessage(); })("paste", function ModalAddAttachmentsComponent_Template_textarea_paste_9_listener($event) { return ctx.onPaste($event); })("ngModelChange", function ModalAddAttachmentsComponent_Template_textarea_ngModelChange_9_listener($event) { return ctx.message = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(10, ModalAddAttachmentsComponent_div_10_Template, 2, 1, "div", 9);
        i0.ɵɵelementStart(11, "div", 10);
        i0.ɵɵlistener("click", function ModalAddAttachmentsComponent_Template_div_click_11_listener() { return ctx.input.click(); });
        i0.ɵɵelement(12, "nb-icon", 2);
        i0.ɵɵelementStart(13, "div", 11);
        i0.ɵɵtext(14);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(15, "div", 12);
        i0.ɵɵtext(16, " Format .jpeg / .png / .svg ");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(17, "div", 13);
        i0.ɵɵtemplate(18, ModalAddAttachmentsComponent_div_18_Template, 4, 3, "div", 14);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(19, "button", 15);
        i0.ɵɵlistener("click", function ModalAddAttachmentsComponent_Template_button_click_19_listener() { return ctx.sendAttachments(); });
        i0.ɵɵtext(20);
        i0.ɵɵelementEnd()();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("icon", "close")("size", 1);
        i0.ɵɵadvance(6);
        i0.ɵɵtextInterpolate1(" ", ctx.translate.translate(ctx.service.locale, "SEND_ME_YOUR_ATTACHMENTS"), " ");
        i0.ɵɵadvance(1);
        i0.ɵɵpropertyInterpolate("placeholder", ctx.translate.translate(ctx.service.locale, "COPY_PASTE"));
        i0.ɵɵproperty("ngModel", ctx.message);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.fileError != "");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("icon", "image")("size", 1.5);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1(" ", ctx.translate.translate(ctx.service.locale, "DROP_PHOTO"), " ");
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngForOf", ctx.documentList);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("disabled", !ctx.documentList || !(ctx.documentList[0] == null ? null : ctx.documentList[0].name));
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", ctx.translate.translate(ctx.service.locale, "I_FINISHED"), " ");
    } }, dependencies: [i4.DefaultValueAccessor, i4.NgControlStatus, i4.NgModel, i5.NgForOf, i5.NgIf, i6.NowboardIconComponent], styles: [".modal-attachments-content[_ngcontent-%COMP%]   .bot-no-anim[_ngcontent-%COMP%]{margin:auto;height:120px;animation:none;-webkit-animation:none}.modal-attachments-content[_ngcontent-%COMP%]   .circle3[_ngcontent-%COMP%]{width:120px;height:120px}.modal-attachments-content[_ngcontent-%COMP%]   .circle2[_ngcontent-%COMP%]{width:90px;height:90px}.modal-attachments-content[_ngcontent-%COMP%]   .circle1[_ngcontent-%COMP%]{width:60px;height:60px}.modal-attachments-content[_ngcontent-%COMP%]   .file-names[_ngcontent-%COMP%]{margin:0!important}.modal-attachments-content[_ngcontent-%COMP%]   .file-names[_ngcontent-%COMP%]   .file-name-div[_ngcontent-%COMP%]{margin-bottom:0;width:auto;max-width:initial}.modal-attachments-content[_ngcontent-%COMP%]   .file-names[_ngcontent-%COMP%]   .file-name-div[_ngcontent-%COMP%]   .file-name[_ngcontent-%COMP%]{width:120px}.file-div-container[_ngcontent-%COMP%]{max-height:20vh;overflow-y:auto}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ModalAddAttachmentsComponent, [{
        type: Component,
        args: [{ selector: 'modal-add-attachments', template: "<div class=\"position-relative modal-attachments-content\">\n\n    <div class=\"close-dialog-icon close-dialog-icon-15\" mat-dialog-close (click)=\"close()\">\n        <nb-icon [icon]=\"'close'\" [size]=\"1\"></nb-icon>\n    </div>\n\n    <div class=\"bot bot-no-anim\">\n        <div class=\"circle1\"></div>\n        <div class=\"circle2\"></div>\n        <div class=\"circle3\"></div>\n    </div>\n\n    <div class=\"mt30 nb-title-l title\">\n        {{ translate.translate(service.locale, 'SEND_ME_YOUR_ATTACHMENTS' ) }}\n    </div>\n\n    <textarea (keyup)=\"clearMessage()\" (paste)=\"onPaste($event)\" [(ngModel)]=\"message\" class=\"nb-text-3 custom-scrollbar multiline full-width\" id=\"textarea\"\n    placeholder=\"{{translate.translate(service.locale, 'COPY_PASTE' )}}\" tabindex=\"1\"></textarea>\n\n    <div *ngIf=\"fileError != ''\" class=\"error\">\n        {{ fileError }}\n    </div>\n\n    <div class=\"mt30 mb15 file\" (click)=\"this.input.click()\">\n        <nb-icon [icon]=\"'image'\" [size]=\"1.5\"></nb-icon>\n        <div class=\"nb-text-s file-message\">\n          {{translate.translate(service.locale, 'DROP_PHOTO' ) }}\n        </div>\n        <div class=\"mb10 nb-text-s-1 file-format\">\n          Format .jpeg / .png / .svg\n        </div>\n\n    </div>\n\n    <!-- <ng-container *ngFor=\"let d of documentList; let index = index\">\n        <div class=\"mb15 file-names\">\n            <div class=\"file-name-div\">\n                <div class=\"mr10 tar file-name\">\n                    {{ d.name }}\n                </div>\n                <nb-icon (click)=\"deleteFile(d)\" [icon]=\"'delete_1'\" [size]=\"1.5\" class=\"mr0 file-icon\"></nb-icon>\n            </div>\n        </div>\n    </ng-container> -->\n\n    <div class=\"d-flex-ai-c flex-flow-wrap file-div-container custom-scrollbar\">\n        <div class=\"mb10 mr5 d-flex-ai-c\" *ngFor=\"let d of documentList; let index = index\">\n          <div class=\"file-name-div d-flex-ai-c mr5\">\n            <div class=\"pj-preview cursor-pointer\" [id]=\"'img-preview-'+index\"></div>\n          </div>\n    \n          <nb-icon (click)=\"deleteFile(d)\" [icon]=\"'delete_1'\" [size]=\"1.5\" class=\"mr0 file-icon\"></nb-icon>\n        </div>  \n    </div>\n\n    <button (click)=\"sendAttachments()\" [disabled]=\"!this.documentList || !this.documentList[0]?.name\" class=\"mt15 full-width rounded primary btn-send\">\n        {{translate.translate(service.locale, 'I_FINISHED' ) }}\n    </button>\n</div>\n", styles: [".modal-attachments-content .bot-no-anim{margin:auto;height:120px;animation:none;-webkit-animation:none}.modal-attachments-content .circle3{width:120px;height:120px}.modal-attachments-content .circle2{width:90px;height:90px}.modal-attachments-content .circle1{width:60px;height:60px}.modal-attachments-content .file-names{margin:0!important}.modal-attachments-content .file-names .file-name-div{margin-bottom:0;width:auto;max-width:initial}.modal-attachments-content .file-names .file-name-div .file-name{width:120px}.file-div-container{max-height:20vh;overflow-y:auto}\n"] }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [MAT_DIALOG_DATA]
            }] }, { type: i1.KonversoService }, { type: i2.TranslateService }, { type: i3.MatDialogRef }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtYWRkLWF0dGFjaG1lbnRzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2tvbnZlcnNvL3NyYy9saWIvbW9kYWwtYWRkLWF0dGFjaG1lbnRzL21vZGFsLWFkZC1hdHRhY2htZW50cy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9rb252ZXJzby9zcmMvbGliL21vZGFsLWFkZC1hdHRhY2htZW50cy9tb2RhbC1hZGQtYXR0YWNobWVudHMuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxNQUFNLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFDLGVBQWUsRUFBZSxNQUFNLDBCQUEwQixDQUFDOzs7Ozs7Ozs7SUNrQm5FLCtCQUEyQztJQUN2QyxZQUNKO0lBQUEsaUJBQU07OztJQURGLGVBQ0o7SUFESSxpREFDSjs7OztJQXlCSSwrQkFBb0YsY0FBQTtJQUVoRiwwQkFBeUU7SUFDM0UsaUJBQU07SUFFTixtQ0FBd0Y7SUFBL0UsbU9BQVMsZUFBQSx1QkFBYSxDQUFBLElBQUM7SUFBd0QsaUJBQVUsRUFBQTs7O0lBSHpELGVBQTJCO0lBQTNCLDhDQUEyQjtJQUduQyxlQUFtQjtJQUFuQixpQ0FBbUIsYUFBQTs7QUR6QzlELE1BQU0sT0FBTyw0QkFBNEI7SUFNckMsWUFDb0MsSUFLL0IsRUFDTSxPQUF3QixFQUN4QixTQUE0QixFQUMzQixTQUFxRDtRQVI3QixTQUFJLEdBQUosSUFBSSxDQUtuQztRQUNNLFlBQU8sR0FBUCxPQUFPLENBQWlCO1FBQ3hCLGNBQVMsR0FBVCxTQUFTLENBQW1CO1FBQzNCLGNBQVMsR0FBVCxTQUFTLENBQTRDO1FBZGpFLGlCQUFZLEdBQWUsRUFBRSxDQUFDO1FBRXZCLGdCQUFXLEdBQVEsRUFBRSxDQUFDO1FBQzdCLFlBQU8sR0FBVyxFQUFFLENBQUM7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LElBQUM7UUFDcEQsOEJBQWlEO1FBQ2pELGdDQUFvQztRQUNsQyxhQUNGO1FBQUEsaUJBQU07UUFDTixnQ0FBMEM7UUFDeEMsNkNBQ0Y7UUFBQSxpQkFBTSxFQUFBO1FBZVYsZ0NBQTRFO1FBQ3hFLGdGQU1NO1FBQ1YsaUJBQU07UUFFTixtQ0FBb0o7UUFBNUksMEdBQVMscUJBQWlCLElBQUM7UUFDL0IsYUFDSjtRQUFBLGlCQUFTLEVBQUE7O1FBdERJLGVBQWdCO1FBQWhCLDhCQUFnQixXQUFBO1FBVXpCLGVBQ0o7UUFESSx3R0FDSjtRQUdBLGVBQW9FO1FBQXBFLGtHQUFvRTtRQURQLHFDQUFxQjtRQUc1RSxlQUFxQjtRQUFyQiwwQ0FBcUI7UUFLZCxlQUFnQjtRQUFoQiw4QkFBZ0IsYUFBQTtRQUV2QixlQUNGO1FBREUsMEZBQ0Y7UUFtQmdELGVBQWlCO1FBQWpCLDBDQUFpQjtRQVNqQyxlQUE4RDtRQUE5RCxnSEFBOEQ7UUFDOUYsZUFDSjtRQURJLDBGQUNKOzt1RkQvQ1MsNEJBQTRCO2NBTHhDLFNBQVM7MkJBQ0ksdUJBQXVCOztzQkFXNUIsTUFBTTt1QkFBQyxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEluamVjdCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TUFUX0RJQUxPR19EQVRBLCBNYXREaWFsb2dSZWZ9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XG5pbXBvcnQge1RyYW5zbGF0ZVNlcnZpY2V9IGZyb20gJy4uL3RyYW5zbGF0ZS5zZXJ2aWNlJztcbmltcG9ydCB7S29udmVyc29TZXJ2aWNlfSBmcm9tICcuLi9rb252ZXJzby5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdtb2RhbC1hZGQtYXR0YWNobWVudHMnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9tb2RhbC1hZGQtYXR0YWNobWVudHMuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL21vZGFsLWFkZC1hdHRhY2htZW50cy5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIE1vZGFsQWRkQXR0YWNobWVudHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGRvY3VtZW50TGlzdDogQXJyYXk8YW55PiA9IFtdO1xuICAgIHB1YmxpYyBpbnB1dCAhOiBIVE1MSW5wdXRFbGVtZW50O1xuICAgIHB1YmxpYyBkaXNwbGF5VGV4dDogYW55ID0ge307XG4gICAgbWVzc2FnZTogc3RyaW5nID0gJyc7XG4gICAgZmlsZUVycm9yID0gJyc7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwdWJsaWMgZGF0YToge1xuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIGlucHV0OiBIVE1MSW5wdXRFbGVtZW50LFxuICAgICAgICAgICAgICAgIGRvY3VtZW50TGlzdDogQXJyYXk8YW55PlxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBwdWJsaWMgc2VydmljZTogS29udmVyc29TZXJ2aWNlLFxuICAgICAgICBwdWJsaWMgdHJhbnNsYXRlIDogVHJhbnNsYXRlU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxNb2RhbEFkZEF0dGFjaG1lbnRzQ29tcG9uZW50PlxuICAgICkge1xuICAgICAgICBkaWFsb2dSZWYuZGlzYWJsZUNsb3NlID0gdHJ1ZTsgLy8gYmxvY2sgdGhlIGNsb3NlIHdpdGggbWFrZSBsb3NlIHRoZSBhdHRhY2htZW50c1xuXG4gICAgICAgIHRoaXMuc2VydmljZS5kb2N1bWVudHMuc3Vic2NyaWJlKChmaWxlcykgPT4ge1xuICAgICAgICAgICAgZmlsZXMuZm9yRWFjaChhc3luYyAoZikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gZmlsZXMuaW5kZXhPZihmKTtcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnNldFByZXZpZXcoaW5kZXgsIGYpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZG9jdW1lbnRMaXN0ID0gdGhpcy5kYXRhLmRhdGEuZG9jdW1lbnRMaXN0IHx8IFtdO1xuICAgICAgICB0aGlzLmlucHV0ID0gdGhpcy5kYXRhLmRhdGEuaW5wdXQ7XG5cbiAgICAgICAgaWYgKHRoaXMuZG9jdW1lbnRMaXN0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuZG9jdW1lbnRMaXN0LmZvckVhY2goYXN5bmMgKGY6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIHRoaXMuZG9jdW1lbnRMaXN0LnB1c2goZik7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmRvY3VtZW50TGlzdC5pbmRleE9mKGYpO1xuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuc2V0UHJldmlldyhpbmRleCwgZilcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gdGhpcy5pbnB1dC5vbmNoYW5nZT0gKCRldmVudDogYW55KSA9PiB7XG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZygkZXZlbnQpO1xuICAgICAgICAvLyAgICAgY29uc29sZS5sb2codGhpcy5kb2N1bWVudExpc3QpO1xuICAgICAgICAvLyAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAvLyAgICAgQXJyYXkuZnJvbSgkZXZlbnQudGFyZ2V0LmZpbGVzKS5mb3JFYWNoKGFzeW5jIChmOiBhbnkpID0+IHtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmRvY3VtZW50TGlzdC5wdXNoKGYpO1xuICAgICAgICAvLyAgICAgICAgIGxldCBpbmRleCA9IHRoaXMuZG9jdW1lbnRMaXN0LmluZGV4T2YoZik7XG4gICAgICAgIC8vICAgICAgICAgYXdhaXQgdGhpcy5zZXRQcmV2aWV3KGluZGV4LCBmKVxuICAgICAgICAvLyAgICAgICB9KTtcbiAgICAgICAgLy8gICAgICAgY29uc29sZS5sb2codGhpcy5kb2N1bWVudExpc3QsICdhcHJlcyBsZSBmb3JlYWNoJyk7XG4gICAgICAgIC8vIH07XG4gICAgfVxuXG4gICAgYXN5bmMgc2V0UHJldmlldyhpbmRleDogbnVtYmVyLCBibG9iOiBhbnkpIHtcbiAgICAgICAgaWYgKFsnaW1hZ2UvanBlZycsICdpbWFnZS9wbmcnLCAnaW1hZ2Uvc3ZnK3htbCddLmluY2x1ZGVzKGJsb2IudHlwZSkpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGltYWdlOiBhbnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW1nLXByZXZpZXctJytpbmRleCk7XG4gICAgICAgICAgICAgICAgaW1hZ2Uuc3R5bGUuYmFja2dyb3VuZCA9ICd1cmwoJyArIFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYikgKyAnKSc7XG4gICAgICAgICAgICAgICAgaW1hZ2Uuc3R5bGUuYmFja2dyb3VuZFNpemUgPSAnY292ZXInO1xuICAgICAgICAgICAgICAgIGltYWdlLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvbiA9ICdjZW50ZXIgY2VudGVyJztcbiAgICAgICAgICAgIH0sIDUwMCk7XG4gICAgICAgIH0gZWxzZSBpZiAoWydhcHBsaWNhdGlvbi9wZGYnLCAnYXBwbGljYXRpb24vdm5kLm9wZW54bWxmb3JtYXRzLW9mZmljZWRvY3VtZW50LnNwcmVhZHNoZWV0bWwuc2hlZXQnLFxuICAgICAgICAgICAgJ2FwcGxpY2F0aW9uL3ZuZC5vcGVueG1sZm9ybWF0cy1vZmZpY2Vkb2N1bWVudC53b3JkcHJvY2Vzc2luZ21sLmRvY3VtZW50J10uaW5jbHVkZXMoYmxvYi50eXBlKSkge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgaW1hZ2U6IGFueSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbWctcHJldmlldy0nK2luZGV4KTtcbiAgICAgICAgICAgICAgICAvLyBpbWFnZS5zdHlsZS5iYWNrZ3JvdW5kID0gJ3VybCgnICsgVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKSArICcpJztcbiAgICAgICAgICAgICAgICAvLyBpbWFnZS5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9ICdjb3Zlcic7XG4gICAgICAgICAgICAgICAgLy8gaW1hZ2Uuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uID0gJ2NlbnRlciBjZW50ZXInO1xuICAgICAgICAgICAgICAgIGltYWdlLmNsYXNzTGlzdC5hZGQoJ2F0dGFjaG1lbnQtbGlzdC1pdGVtLWxlZnQnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBleHQgPSBibG9iLm5hbWUuc3BsaXQoJy4nKS5wb3AoKVxuICAgICAgICAgICAgICAgIGltYWdlLmNsYXNzTGlzdC5hZGQoZXh0KTtcbiAgICAgICAgICAgICAgICBpbWFnZS5jbGFzc0xpc3QuYWRkKCdkLWZsZXgtYycpO1xuICAgICAgICAgICAgICAgIGltYWdlLmlubmVySFRNTCA9ICcuJyArIGV4dC50b1VwcGVyQ2FzZSgpO1xuICAgICAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZG9jdW1lbnRMaXN0LnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICB0aGlzLmZpbGVFcnJvciA9IHRoaXMudHJhbnNsYXRlLnRyYW5zbGF0ZSh0aGlzLnNlcnZpY2UubG9jYWxlLCAnSU5WQUxJRF9GSUxFX0ZPUk1BVCcpO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0YXJlYScpLnZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHRhcmVhJykudmFsdWUucmVwbGFjZShibG9iLm5hbWUsICcnKTtcbiAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2UgPSB0aGlzLm1lc3NhZ2UucmVwbGFjZShibG9iLm5hbWUsICcnKTtcbiAgICAgICAgICAgIH0sIDEwMClcblxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmZpbGVFcnJvciA9ICcnLCAyMDAwKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2xlYXJNZXNzYWdlKCkge1xuICAgICAgICB0aGlzLm1lc3NhZ2UgPSAnJztcbiAgICB9XG5cbiAgICBkZWxldGVGaWxlKGZpbGU6IGFueSkge1xuICAgICAgICB0aGlzLmRvY3VtZW50TGlzdC5zcGxpY2UodGhpcy5kb2N1bWVudExpc3QuaW5kZXhPZihmaWxlKSwgMSk7XG4gICAgfVxuXG4gICAgYXN5bmMgb25QYXN0ZShlOiBhbnkpIHtcbiAgICAgICAgY29uc3QgaXRlbXMgPSAoZS5jbGlwYm9hcmREYXRhIHx8IGUub3JpZ2luYWxFdmVudC5jbGlwYm9hcmREYXRhKS5pdGVtcztcbiAgICAgICAgbGV0IGJsb2I6IGFueTtcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGl0ZW1zKSB7XG4gICAgICAgICAgLy8gaWYgKGl0ZW0udHlwZS5pbmRleE9mKCdpbWFnZScpID09PSAwKSB7XG4gICAgICAgICAgICBpZiAoaXRlbS5raW5kID09ICdmaWxlJykge1xuICAgICAgICAgICAgICAgIGJsb2IgPSBpdGVtLmdldEFzRmlsZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuZG9jdW1lbnRMaXN0LnB1c2goYmxvYik7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmRvY3VtZW50TGlzdC5pbmRleE9mKGJsb2IpO1xuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuc2V0UHJldmlldyhpbmRleCwgYmxvYilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNlbmRBdHRhY2htZW50cygpIHtcbiAgICAgICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UodGhpcy5kb2N1bWVudExpc3QpO1xuICAgIH1cblxuXG4gICAgY2xvc2UoKSB7XG4gICAgICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKG51bGwpO1xuICAgIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJwb3NpdGlvbi1yZWxhdGl2ZSBtb2RhbC1hdHRhY2htZW50cy1jb250ZW50XCI+XG5cbiAgICA8ZGl2IGNsYXNzPVwiY2xvc2UtZGlhbG9nLWljb24gY2xvc2UtZGlhbG9nLWljb24tMTVcIiBtYXQtZGlhbG9nLWNsb3NlIChjbGljayk9XCJjbG9zZSgpXCI+XG4gICAgICAgIDxuYi1pY29uIFtpY29uXT1cIidjbG9zZSdcIiBbc2l6ZV09XCIxXCI+PC9uYi1pY29uPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cImJvdCBib3Qtbm8tYW5pbVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlMVwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlMlwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlM1wiPjwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cIm10MzAgbmItdGl0bGUtbCB0aXRsZVwiPlxuICAgICAgICB7eyB0cmFuc2xhdGUudHJhbnNsYXRlKHNlcnZpY2UubG9jYWxlLCAnU0VORF9NRV9ZT1VSX0FUVEFDSE1FTlRTJyApIH19XG4gICAgPC9kaXY+XG5cbiAgICA8dGV4dGFyZWEgKGtleXVwKT1cImNsZWFyTWVzc2FnZSgpXCIgKHBhc3RlKT1cIm9uUGFzdGUoJGV2ZW50KVwiIFsobmdNb2RlbCldPVwibWVzc2FnZVwiIGNsYXNzPVwibmItdGV4dC0zIGN1c3RvbS1zY3JvbGxiYXIgbXVsdGlsaW5lIGZ1bGwtd2lkdGhcIiBpZD1cInRleHRhcmVhXCJcbiAgICBwbGFjZWhvbGRlcj1cInt7dHJhbnNsYXRlLnRyYW5zbGF0ZShzZXJ2aWNlLmxvY2FsZSwgJ0NPUFlfUEFTVEUnICl9fVwiIHRhYmluZGV4PVwiMVwiPjwvdGV4dGFyZWE+XG5cbiAgICA8ZGl2ICpuZ0lmPVwiZmlsZUVycm9yICE9ICcnXCIgY2xhc3M9XCJlcnJvclwiPlxuICAgICAgICB7eyBmaWxlRXJyb3IgfX1cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJtdDMwIG1iMTUgZmlsZVwiIChjbGljayk9XCJ0aGlzLmlucHV0LmNsaWNrKClcIj5cbiAgICAgICAgPG5iLWljb24gW2ljb25dPVwiJ2ltYWdlJ1wiIFtzaXplXT1cIjEuNVwiPjwvbmItaWNvbj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm5iLXRleHQtcyBmaWxlLW1lc3NhZ2VcIj5cbiAgICAgICAgICB7e3RyYW5zbGF0ZS50cmFuc2xhdGUoc2VydmljZS5sb2NhbGUsICdEUk9QX1BIT1RPJyApIH19XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwibWIxMCBuYi10ZXh0LXMtMSBmaWxlLWZvcm1hdFwiPlxuICAgICAgICAgIEZvcm1hdCAuanBlZyAvIC5wbmcgLyAuc3ZnXG4gICAgICAgIDwvZGl2PlxuXG4gICAgPC9kaXY+XG5cbiAgICA8IS0tIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGQgb2YgZG9jdW1lbnRMaXN0OyBsZXQgaW5kZXggPSBpbmRleFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibWIxNSBmaWxlLW5hbWVzXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmlsZS1uYW1lLWRpdlwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtcjEwIHRhciBmaWxlLW5hbWVcIj5cbiAgICAgICAgICAgICAgICAgICAge3sgZC5uYW1lIH19XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPG5iLWljb24gKGNsaWNrKT1cImRlbGV0ZUZpbGUoZClcIiBbaWNvbl09XCInZGVsZXRlXzEnXCIgW3NpemVdPVwiMS41XCIgY2xhc3M9XCJtcjAgZmlsZS1pY29uXCI+PC9uYi1pY29uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvbmctY29udGFpbmVyPiAtLT5cblxuICAgIDxkaXYgY2xhc3M9XCJkLWZsZXgtYWktYyBmbGV4LWZsb3ctd3JhcCBmaWxlLWRpdi1jb250YWluZXIgY3VzdG9tLXNjcm9sbGJhclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibWIxMCBtcjUgZC1mbGV4LWFpLWNcIiAqbmdGb3I9XCJsZXQgZCBvZiBkb2N1bWVudExpc3Q7IGxldCBpbmRleCA9IGluZGV4XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZpbGUtbmFtZS1kaXYgZC1mbGV4LWFpLWMgbXI1XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGotcHJldmlldyBjdXJzb3ItcG9pbnRlclwiIFtpZF09XCInaW1nLXByZXZpZXctJytpbmRleFwiPjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgIFxuICAgICAgICAgIDxuYi1pY29uIChjbGljayk9XCJkZWxldGVGaWxlKGQpXCIgW2ljb25dPVwiJ2RlbGV0ZV8xJ1wiIFtzaXplXT1cIjEuNVwiIGNsYXNzPVwibXIwIGZpbGUtaWNvblwiPjwvbmItaWNvbj5cbiAgICAgICAgPC9kaXY+ICBcbiAgICA8L2Rpdj5cblxuICAgIDxidXR0b24gKGNsaWNrKT1cInNlbmRBdHRhY2htZW50cygpXCIgW2Rpc2FibGVkXT1cIiF0aGlzLmRvY3VtZW50TGlzdCB8fCAhdGhpcy5kb2N1bWVudExpc3RbMF0/Lm5hbWVcIiBjbGFzcz1cIm10MTUgZnVsbC13aWR0aCByb3VuZGVkIHByaW1hcnkgYnRuLXNlbmRcIj5cbiAgICAgICAge3t0cmFuc2xhdGUudHJhbnNsYXRlKHNlcnZpY2UubG9jYWxlLCAnSV9GSU5JU0hFRCcgKSB9fVxuICAgIDwvYnV0dG9uPlxuPC9kaXY+XG4iXX0=