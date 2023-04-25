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
        this.initialDocumentList = [];
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
                this.initialDocumentList.push(f);
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
        console.log(this.initialDocumentList);
        this.dialogRef.close(this.initialDocumentList);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtYWRkLWF0dGFjaG1lbnRzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2tvbnZlcnNvL3NyYy9saWIvbW9kYWwtYWRkLWF0dGFjaG1lbnRzL21vZGFsLWFkZC1hdHRhY2htZW50cy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9rb252ZXJzby9zcmMvbGliL21vZGFsLWFkZC1hdHRhY2htZW50cy9tb2RhbC1hZGQtYXR0YWNobWVudHMuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxNQUFNLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFDLGVBQWUsRUFBZSxNQUFNLDBCQUEwQixDQUFDOzs7Ozs7Ozs7SUNrQm5FLCtCQUEyQztJQUN2QyxZQUNKO0lBQUEsaUJBQU07OztJQURGLGVBQ0o7SUFESSxpREFDSjs7OztJQXlCSSwrQkFBb0YsY0FBQTtJQUVoRiwwQkFBeUU7SUFDM0UsaUJBQU07SUFFTixtQ0FBd0Y7SUFBL0UsbU9BQVMsZUFBQSx1QkFBYSxDQUFBLElBQUM7SUFBd0QsaUJBQVUsRUFBQTs7O0lBSHpELGVBQTJCO0lBQTNCLDhDQUEyQjtJQUduQyxlQUFtQjtJQUFuQixpQ0FBbUIsYUFBQTs7QUR6QzlELE1BQU0sT0FBTyw0QkFBNEI7SUFPckMsWUFDb0MsSUFLL0IsRUFDTSxPQUF3QixFQUN4QixTQUE0QixFQUMzQixTQUFxRDtRQVI3QixTQUFJLEdBQUosSUFBSSxDQUtuQztRQUNNLFlBQU8sR0FBUCxPQUFPLENBQWlCO1FBQ3hCLGNBQVMsR0FBVCxTQUFTLENBQW1CO1FBQzNCLGNBQVMsR0FBVCxTQUFTLENBQTRDO1FBZmpFLGlCQUFZLEdBQWUsRUFBRSxDQUFDO1FBRXZCLGdCQUFXLEdBQVEsRUFBRSxDQUFDO1FBQzdCLFlBQU8sR0FBVyxFQUFFLENBQUM7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UUFFTiw4QkFBbUM7UUFDL0IsWUFDSjtRQUFBLGlCQUFNO1FBRU4sbUNBQ2tGO1FBRHhFLDJHQUFTLGtCQUFjLElBQUMsb0dBQVUsbUJBQWUsSUFBekIsNElBQUE7UUFDZ0QsaUJBQVc7UUFFN0YsK0VBRU07UUFFTixnQ0FBeUQ7UUFBN0IsdUdBQVMsaUJBQWtCLElBQUM7UUFDcEQsOEJBQWlEO1FBQ2pELGdDQUFvQztRQUNsQyxhQUNGO1FBQUEsaUJBQU07UUFDTixnQ0FBMEM7UUFDeEMsNkNBQ0Y7UUFBQSxpQkFBTSxFQUFBO1FBZVYsZ0NBQTRFO1FBQ3hFLGdGQU1NO1FBQ1YsaUJBQU07UUFFTixtQ0FBb0o7UUFBNUksMEdBQVMscUJBQWlCLElBQUM7UUFDL0IsYUFDSjtRQUFBLGlCQUFTLEVBQUE7O1FBdERJLGVBQWdCO1FBQWhCLDhCQUFnQixXQUFBO1FBVXpCLGVBQ0o7UUFESSx3R0FDSjtRQUdBLGVBQW9FO1FBQXBFLGtHQUFvRTtRQURQLHFDQUFxQjtRQUc1RSxlQUFxQjtRQUFyQiwwQ0FBcUI7UUFLZCxlQUFnQjtRQUFoQiw4QkFBZ0IsYUFBQTtRQUV2QixlQUNGO1FBREUsMEZBQ0Y7UUFtQmdELGVBQWlCO1FBQWpCLDBDQUFpQjtRQVNqQyxlQUE4RDtRQUE5RCxnSEFBOEQ7UUFDOUYsZUFDSjtRQURJLDBGQUNKOzt1RkQvQ1MsNEJBQTRCO2NBTHhDLFNBQVM7MkJBQ0ksdUJBQXVCOztzQkFZNUIsTUFBTTt1QkFBQyxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEluamVjdCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TUFUX0RJQUxPR19EQVRBLCBNYXREaWFsb2dSZWZ9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XG5pbXBvcnQge1RyYW5zbGF0ZVNlcnZpY2V9IGZyb20gJy4uL3RyYW5zbGF0ZS5zZXJ2aWNlJztcbmltcG9ydCB7S29udmVyc29TZXJ2aWNlfSBmcm9tICcuLi9rb252ZXJzby5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdtb2RhbC1hZGQtYXR0YWNobWVudHMnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9tb2RhbC1hZGQtYXR0YWNobWVudHMuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL21vZGFsLWFkZC1hdHRhY2htZW50cy5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIE1vZGFsQWRkQXR0YWNobWVudHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGRvY3VtZW50TGlzdDogQXJyYXk8YW55PiA9IFtdO1xuICAgIHB1YmxpYyBpbnB1dCAhOiBIVE1MSW5wdXRFbGVtZW50O1xuICAgIHB1YmxpYyBkaXNwbGF5VGV4dDogYW55ID0ge307XG4gICAgbWVzc2FnZTogc3RyaW5nID0gJyc7XG4gICAgZmlsZUVycm9yID0gJyc7XG4gICAgaW5pdGlhbERvY3VtZW50TGlzdDogQXJyYXk8YW55PiA9IFtdO1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBASW5qZWN0KE1BVF9ESUFMT0dfREFUQSkgcHVibGljIGRhdGE6IHtcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICBpbnB1dDogSFRNTElucHV0RWxlbWVudCxcbiAgICAgICAgICAgICAgICBkb2N1bWVudExpc3Q6IEFycmF5PGFueT5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgcHVibGljIHNlcnZpY2U6IEtvbnZlcnNvU2VydmljZSxcbiAgICAgICAgcHVibGljIHRyYW5zbGF0ZSA6IFRyYW5zbGF0ZVNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8TW9kYWxBZGRBdHRhY2htZW50c0NvbXBvbmVudD5cbiAgICApIHtcbiAgICAgICAgZGlhbG9nUmVmLmRpc2FibGVDbG9zZSA9IHRydWU7IC8vIGJsb2NrIHRoZSBjbG9zZSB3aXRoIG1ha2UgbG9zZSB0aGUgYXR0YWNobWVudHNcblxuICAgICAgICB0aGlzLnNlcnZpY2UuZG9jdW1lbnRzLnN1YnNjcmliZSgoZmlsZXMpID0+IHtcbiAgICAgICAgICAgIGZpbGVzLmZvckVhY2goYXN5bmMgKGYpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IGZpbGVzLmluZGV4T2YoZik7XG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5zZXRQcmV2aWV3KGluZGV4LCBmKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmRvY3VtZW50TGlzdCA9IHRoaXMuZGF0YS5kYXRhLmRvY3VtZW50TGlzdCB8fCBbXTtcbiAgICAgICAgdGhpcy5pbnB1dCA9IHRoaXMuZGF0YS5kYXRhLmlucHV0O1xuXG4gICAgICAgIGlmICh0aGlzLmRvY3VtZW50TGlzdC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmRvY3VtZW50TGlzdC5mb3JFYWNoKGFzeW5jIChmOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmluaXRpYWxEb2N1bWVudExpc3QucHVzaChmKTtcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmRvY3VtZW50TGlzdC5wdXNoKGYpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5kb2N1bWVudExpc3QuaW5kZXhPZihmKTtcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnNldFByZXZpZXcoaW5kZXgsIGYpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHRoaXMuaW5wdXQub25jaGFuZ2U9ICgkZXZlbnQ6IGFueSkgPT4ge1xuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coJGV2ZW50KTtcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKHRoaXMuZG9jdW1lbnRMaXN0KTtcbiAgICAgICAgLy8gICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgLy8gICAgIEFycmF5LmZyb20oJGV2ZW50LnRhcmdldC5maWxlcykuZm9yRWFjaChhc3luYyAoZjogYW55KSA9PiB7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5kb2N1bWVudExpc3QucHVzaChmKTtcbiAgICAgICAgLy8gICAgICAgICBsZXQgaW5kZXggPSB0aGlzLmRvY3VtZW50TGlzdC5pbmRleE9mKGYpO1xuICAgICAgICAvLyAgICAgICAgIGF3YWl0IHRoaXMuc2V0UHJldmlldyhpbmRleCwgZilcbiAgICAgICAgLy8gICAgICAgfSk7XG4gICAgICAgIC8vICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZG9jdW1lbnRMaXN0LCAnYXByZXMgbGUgZm9yZWFjaCcpO1xuICAgICAgICAvLyB9O1xuICAgIH1cblxuICAgIGFzeW5jIHNldFByZXZpZXcoaW5kZXg6IG51bWJlciwgYmxvYjogYW55KSB7XG4gICAgICAgIGlmIChbJ2ltYWdlL2pwZWcnLCAnaW1hZ2UvcG5nJywgJ2ltYWdlL3N2Zyt4bWwnXS5pbmNsdWRlcyhibG9iLnR5cGUpKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBpbWFnZTogYW55ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ltZy1wcmV2aWV3LScraW5kZXgpO1xuICAgICAgICAgICAgICAgIGltYWdlLnN0eWxlLmJhY2tncm91bmQgPSAndXJsKCcgKyBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpICsgJyknO1xuICAgICAgICAgICAgICAgIGltYWdlLnN0eWxlLmJhY2tncm91bmRTaXplID0gJ2NvdmVyJztcbiAgICAgICAgICAgICAgICBpbWFnZS5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb24gPSAnY2VudGVyIGNlbnRlcic7XG4gICAgICAgICAgICB9LCA1MDApO1xuICAgICAgICB9IGVsc2UgaWYgKFsnYXBwbGljYXRpb24vcGRmJywgJ2FwcGxpY2F0aW9uL3ZuZC5vcGVueG1sZm9ybWF0cy1vZmZpY2Vkb2N1bWVudC5zcHJlYWRzaGVldG1sLnNoZWV0JyxcbiAgICAgICAgICAgICdhcHBsaWNhdGlvbi92bmQub3BlbnhtbGZvcm1hdHMtb2ZmaWNlZG9jdW1lbnQud29yZHByb2Nlc3NpbmdtbC5kb2N1bWVudCddLmluY2x1ZGVzKGJsb2IudHlwZSkpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGltYWdlOiBhbnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW1nLXByZXZpZXctJytpbmRleCk7XG4gICAgICAgICAgICAgICAgLy8gaW1hZ2Uuc3R5bGUuYmFja2dyb3VuZCA9ICd1cmwoJyArIFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYikgKyAnKSc7XG4gICAgICAgICAgICAgICAgLy8gaW1hZ2Uuc3R5bGUuYmFja2dyb3VuZFNpemUgPSAnY292ZXInO1xuICAgICAgICAgICAgICAgIC8vIGltYWdlLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvbiA9ICdjZW50ZXIgY2VudGVyJztcbiAgICAgICAgICAgICAgICBpbWFnZS5jbGFzc0xpc3QuYWRkKCdhdHRhY2htZW50LWxpc3QtaXRlbS1sZWZ0Jyk7XG4gICAgICAgICAgICAgICAgY29uc3QgZXh0ID0gYmxvYi5uYW1lLnNwbGl0KCcuJykucG9wKClcbiAgICAgICAgICAgICAgICBpbWFnZS5jbGFzc0xpc3QuYWRkKGV4dCk7XG4gICAgICAgICAgICAgICAgaW1hZ2UuY2xhc3NMaXN0LmFkZCgnZC1mbGV4LWMnKTtcbiAgICAgICAgICAgICAgICBpbWFnZS5pbm5lckhUTUwgPSAnLicgKyBleHQudG9VcHBlckNhc2UoKTtcbiAgICAgICAgICAgIH0sIDUwMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmRvY3VtZW50TGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgdGhpcy5maWxlRXJyb3IgPSB0aGlzLnRyYW5zbGF0ZS50cmFuc2xhdGUodGhpcy5zZXJ2aWNlLmxvY2FsZSwgJ0lOVkFMSURfRklMRV9GT1JNQVQnKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dGFyZWEnKS52YWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0YXJlYScpLnZhbHVlLnJlcGxhY2UoYmxvYi5uYW1lLCAnJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlID0gdGhpcy5tZXNzYWdlLnJlcGxhY2UoYmxvYi5uYW1lLCAnJyk7XG4gICAgICAgICAgICB9LCAxMDApXG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5maWxlRXJyb3IgPSAnJywgMjAwMClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNsZWFyTWVzc2FnZSgpIHtcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gJyc7XG4gICAgfVxuXG4gICAgZGVsZXRlRmlsZShmaWxlOiBhbnkpIHtcbiAgICAgICAgdGhpcy5kb2N1bWVudExpc3Quc3BsaWNlKHRoaXMuZG9jdW1lbnRMaXN0LmluZGV4T2YoZmlsZSksIDEpO1xuICAgIH1cblxuICAgIGFzeW5jIG9uUGFzdGUoZTogYW55KSB7XG4gICAgICAgIGNvbnN0IGl0ZW1zID0gKGUuY2xpcGJvYXJkRGF0YSB8fCBlLm9yaWdpbmFsRXZlbnQuY2xpcGJvYXJkRGF0YSkuaXRlbXM7XG4gICAgICAgIGxldCBibG9iOiBhbnk7XG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBpdGVtcykge1xuICAgICAgICAgIC8vIGlmIChpdGVtLnR5cGUuaW5kZXhPZignaW1hZ2UnKSA9PT0gMCkge1xuICAgICAgICAgICAgaWYgKGl0ZW0ua2luZCA9PSAnZmlsZScpIHtcbiAgICAgICAgICAgICAgICBibG9iID0gaXRlbS5nZXRBc0ZpbGUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRvY3VtZW50TGlzdC5wdXNoKGJsb2IpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5kb2N1bWVudExpc3QuaW5kZXhPZihibG9iKTtcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnNldFByZXZpZXcoaW5kZXgsIGJsb2IpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZW5kQXR0YWNobWVudHMoKSB7XG4gICAgICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKHRoaXMuZG9jdW1lbnRMaXN0KTtcbiAgICB9XG5cblxuICAgIGNsb3NlKCkge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmluaXRpYWxEb2N1bWVudExpc3QpO1xuICAgICAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSh0aGlzLmluaXRpYWxEb2N1bWVudExpc3QpO1xuICAgIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJwb3NpdGlvbi1yZWxhdGl2ZSBtb2RhbC1hdHRhY2htZW50cy1jb250ZW50XCI+XG5cbiAgICA8ZGl2IGNsYXNzPVwiY2xvc2UtZGlhbG9nLWljb24gY2xvc2UtZGlhbG9nLWljb24tMTVcIiBtYXQtZGlhbG9nLWNsb3NlIChjbGljayk9XCJjbG9zZSgpXCI+XG4gICAgICAgIDxuYi1pY29uIFtpY29uXT1cIidjbG9zZSdcIiBbc2l6ZV09XCIxXCI+PC9uYi1pY29uPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cImJvdCBib3Qtbm8tYW5pbVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlMVwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlMlwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlM1wiPjwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cIm10MzAgbmItdGl0bGUtbCB0aXRsZVwiPlxuICAgICAgICB7eyB0cmFuc2xhdGUudHJhbnNsYXRlKHNlcnZpY2UubG9jYWxlLCAnU0VORF9NRV9ZT1VSX0FUVEFDSE1FTlRTJyApIH19XG4gICAgPC9kaXY+XG5cbiAgICA8dGV4dGFyZWEgKGtleXVwKT1cImNsZWFyTWVzc2FnZSgpXCIgKHBhc3RlKT1cIm9uUGFzdGUoJGV2ZW50KVwiIFsobmdNb2RlbCldPVwibWVzc2FnZVwiIGNsYXNzPVwibmItdGV4dC0zIGN1c3RvbS1zY3JvbGxiYXIgbXVsdGlsaW5lIGZ1bGwtd2lkdGhcIiBpZD1cInRleHRhcmVhXCJcbiAgICBwbGFjZWhvbGRlcj1cInt7dHJhbnNsYXRlLnRyYW5zbGF0ZShzZXJ2aWNlLmxvY2FsZSwgJ0NPUFlfUEFTVEUnICl9fVwiIHRhYmluZGV4PVwiMVwiPjwvdGV4dGFyZWE+XG5cbiAgICA8ZGl2ICpuZ0lmPVwiZmlsZUVycm9yICE9ICcnXCIgY2xhc3M9XCJlcnJvclwiPlxuICAgICAgICB7eyBmaWxlRXJyb3IgfX1cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJtdDMwIG1iMTUgZmlsZVwiIChjbGljayk9XCJ0aGlzLmlucHV0LmNsaWNrKClcIj5cbiAgICAgICAgPG5iLWljb24gW2ljb25dPVwiJ2ltYWdlJ1wiIFtzaXplXT1cIjEuNVwiPjwvbmItaWNvbj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm5iLXRleHQtcyBmaWxlLW1lc3NhZ2VcIj5cbiAgICAgICAgICB7e3RyYW5zbGF0ZS50cmFuc2xhdGUoc2VydmljZS5sb2NhbGUsICdEUk9QX1BIT1RPJyApIH19XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwibWIxMCBuYi10ZXh0LXMtMSBmaWxlLWZvcm1hdFwiPlxuICAgICAgICAgIEZvcm1hdCAuanBlZyAvIC5wbmcgLyAuc3ZnXG4gICAgICAgIDwvZGl2PlxuXG4gICAgPC9kaXY+XG5cbiAgICA8IS0tIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGQgb2YgZG9jdW1lbnRMaXN0OyBsZXQgaW5kZXggPSBpbmRleFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibWIxNSBmaWxlLW5hbWVzXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmlsZS1uYW1lLWRpdlwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtcjEwIHRhciBmaWxlLW5hbWVcIj5cbiAgICAgICAgICAgICAgICAgICAge3sgZC5uYW1lIH19XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPG5iLWljb24gKGNsaWNrKT1cImRlbGV0ZUZpbGUoZClcIiBbaWNvbl09XCInZGVsZXRlXzEnXCIgW3NpemVdPVwiMS41XCIgY2xhc3M9XCJtcjAgZmlsZS1pY29uXCI+PC9uYi1pY29uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvbmctY29udGFpbmVyPiAtLT5cblxuICAgIDxkaXYgY2xhc3M9XCJkLWZsZXgtYWktYyBmbGV4LWZsb3ctd3JhcCBmaWxlLWRpdi1jb250YWluZXIgY3VzdG9tLXNjcm9sbGJhclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibWIxMCBtcjUgZC1mbGV4LWFpLWNcIiAqbmdGb3I9XCJsZXQgZCBvZiBkb2N1bWVudExpc3Q7IGxldCBpbmRleCA9IGluZGV4XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZpbGUtbmFtZS1kaXYgZC1mbGV4LWFpLWMgbXI1XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGotcHJldmlldyBjdXJzb3ItcG9pbnRlclwiIFtpZF09XCInaW1nLXByZXZpZXctJytpbmRleFwiPjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgIFxuICAgICAgICAgIDxuYi1pY29uIChjbGljayk9XCJkZWxldGVGaWxlKGQpXCIgW2ljb25dPVwiJ2RlbGV0ZV8xJ1wiIFtzaXplXT1cIjEuNVwiIGNsYXNzPVwibXIwIGZpbGUtaWNvblwiPjwvbmItaWNvbj5cbiAgICAgICAgPC9kaXY+ICBcbiAgICA8L2Rpdj5cblxuICAgIDxidXR0b24gKGNsaWNrKT1cInNlbmRBdHRhY2htZW50cygpXCIgW2Rpc2FibGVkXT1cIiF0aGlzLmRvY3VtZW50TGlzdCB8fCAhdGhpcy5kb2N1bWVudExpc3RbMF0/Lm5hbWVcIiBjbGFzcz1cIm10MTUgZnVsbC13aWR0aCByb3VuZGVkIHByaW1hcnkgYnRuLXNlbmRcIj5cbiAgICAgICAge3t0cmFuc2xhdGUudHJhbnNsYXRlKHNlcnZpY2UubG9jYWxlLCAnSV9GSU5JU0hFRCcgKSB9fVxuICAgIDwvYnV0dG9uPlxuPC9kaXY+XG4iXX0=