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
                this.initialDocumentList.push(f);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtYWRkLWF0dGFjaG1lbnRzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2tvbnZlcnNvL3NyYy9saWIvbW9kYWwtYWRkLWF0dGFjaG1lbnRzL21vZGFsLWFkZC1hdHRhY2htZW50cy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9rb252ZXJzby9zcmMvbGliL21vZGFsLWFkZC1hdHRhY2htZW50cy9tb2RhbC1hZGQtYXR0YWNobWVudHMuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxNQUFNLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFDLGVBQWUsRUFBZSxNQUFNLDBCQUEwQixDQUFDOzs7Ozs7Ozs7SUNrQm5FLCtCQUEyQztJQUN2QyxZQUNKO0lBQUEsaUJBQU07OztJQURGLGVBQ0o7SUFESSxpREFDSjs7OztJQXlCSSwrQkFBb0YsY0FBQTtJQUVoRiwwQkFBeUU7SUFDM0UsaUJBQU07SUFFTixtQ0FBd0Y7SUFBL0UsbU9BQVMsZUFBQSx1QkFBYSxDQUFBLElBQUM7SUFBd0QsaUJBQVUsRUFBQTs7O0lBSHpELGVBQTJCO0lBQTNCLDhDQUEyQjtJQUduQyxlQUFtQjtJQUFuQixpQ0FBbUIsYUFBQTs7QUR6QzlELE1BQU0sT0FBTyw0QkFBNEI7SUFPckMsWUFDb0MsSUFLL0IsRUFDTSxPQUF3QixFQUN4QixTQUE0QixFQUMzQixTQUFxRDtRQVI3QixTQUFJLEdBQUosSUFBSSxDQUtuQztRQUNNLFlBQU8sR0FBUCxPQUFPLENBQWlCO1FBQ3hCLGNBQVMsR0FBVCxTQUFTLENBQW1CO1FBQzNCLGNBQVMsR0FBVCxTQUFTLENBQTRDO1FBZmpFLGlCQUFZLEdBQWUsRUFBRSxDQUFDO1FBRXZCLGdCQUFXLEdBQVEsRUFBRSxDQUFDO1FBQzdCLFlBQU8sR0FBVyxFQUFFLENBQUM7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R0FBUyxrQkFBYyxJQUFDLG9HQUFVLG1CQUFlLElBQXpCLDRJQUFBO1FBQ2dELGlCQUFXO1FBRTdGLCtFQUVNO1FBRU4sZ0NBQXlEO1FBQTdCLHVHQUFTLGlCQUFrQixJQUFDO1FBQ3BELDhCQUFpRDtRQUNqRCxnQ0FBb0M7UUFDbEMsYUFDRjtRQUFBLGlCQUFNO1FBQ04sZ0NBQTBDO1FBQ3hDLDZDQUNGO1FBQUEsaUJBQU0sRUFBQTtRQWVWLGdDQUE0RTtRQUN4RSxnRkFNTTtRQUNWLGlCQUFNO1FBRU4sbUNBQW9KO1FBQTVJLDBHQUFTLHFCQUFpQixJQUFDO1FBQy9CLGFBQ0o7UUFBQSxpQkFBUyxFQUFBOztRQXRESSxlQUFnQjtRQUFoQiw4QkFBZ0IsV0FBQTtRQVV6QixlQUNKO1FBREksd0dBQ0o7UUFHQSxlQUFvRTtRQUFwRSxrR0FBb0U7UUFEUCxxQ0FBcUI7UUFHNUUsZUFBcUI7UUFBckIsMENBQXFCO1FBS2QsZUFBZ0I7UUFBaEIsOEJBQWdCLGFBQUE7UUFFdkIsZUFDRjtRQURFLDBGQUNGO1FBbUJnRCxlQUFpQjtRQUFqQiwwQ0FBaUI7UUFTakMsZUFBOEQ7UUFBOUQsZ0hBQThEO1FBQzlGLGVBQ0o7UUFESSwwRkFDSjs7dUZEL0NTLDRCQUE0QjtjQUx4QyxTQUFTOzJCQUNJLHVCQUF1Qjs7c0JBWTVCLE1BQU07dUJBQUMsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbmplY3QsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01BVF9ESUFMT0dfREFUQSwgTWF0RGlhbG9nUmVmfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xuaW1wb3J0IHtUcmFuc2xhdGVTZXJ2aWNlfSBmcm9tICcuLi90cmFuc2xhdGUuc2VydmljZSc7XG5pbXBvcnQge0tvbnZlcnNvU2VydmljZX0gZnJvbSAnLi4va29udmVyc28uc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbW9kYWwtYWRkLWF0dGFjaG1lbnRzJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vbW9kYWwtYWRkLWF0dGFjaG1lbnRzLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9tb2RhbC1hZGQtYXR0YWNobWVudHMuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBNb2RhbEFkZEF0dGFjaG1lbnRzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBkb2N1bWVudExpc3Q6IEFycmF5PGFueT4gPSBbXTtcbiAgICBwdWJsaWMgaW5wdXQgITogSFRNTElucHV0RWxlbWVudDtcbiAgICBwdWJsaWMgZGlzcGxheVRleHQ6IGFueSA9IHt9O1xuICAgIG1lc3NhZ2U6IHN0cmluZyA9ICcnO1xuICAgIGZpbGVFcnJvciA9ICcnO1xuICAgIGluaXRpYWxEb2N1bWVudExpc3Q6IEFycmF5PGFueT4gPSBbXTtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHB1YmxpYyBkYXRhOiB7XG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgaW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQsXG4gICAgICAgICAgICAgICAgZG9jdW1lbnRMaXN0OiBBcnJheTxhbnk+XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHB1YmxpYyBzZXJ2aWNlOiBLb252ZXJzb1NlcnZpY2UsXG4gICAgICAgIHB1YmxpYyB0cmFuc2xhdGUgOiBUcmFuc2xhdGVTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPE1vZGFsQWRkQXR0YWNobWVudHNDb21wb25lbnQ+XG4gICAgKSB7XG4gICAgICAgIGRpYWxvZ1JlZi5kaXNhYmxlQ2xvc2UgPSB0cnVlOyAvLyBibG9jayB0aGUgY2xvc2Ugd2l0aCBtYWtlIGxvc2UgdGhlIGF0dGFjaG1lbnRzXG5cbiAgICAgICAgdGhpcy5zZXJ2aWNlLmRvY3VtZW50cy5zdWJzY3JpYmUoKGZpbGVzKSA9PiB7XG4gICAgICAgICAgICBmaWxlcy5mb3JFYWNoKGFzeW5jIChmKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbml0aWFsRG9jdW1lbnRMaXN0LnB1c2goZik7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSBmaWxlcy5pbmRleE9mKGYpO1xuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuc2V0UHJldmlldyhpbmRleCwgZik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kb2N1bWVudExpc3QgPSB0aGlzLmRhdGEuZGF0YS5kb2N1bWVudExpc3QgfHwgW107XG4gICAgICAgIHRoaXMuaW5wdXQgPSB0aGlzLmRhdGEuZGF0YS5pbnB1dDtcblxuICAgICAgICBpZiAodGhpcy5kb2N1bWVudExpc3QubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5kb2N1bWVudExpc3QuZm9yRWFjaChhc3luYyAoZjogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5kb2N1bWVudExpc3QucHVzaChmKTtcbiAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuZG9jdW1lbnRMaXN0LmluZGV4T2YoZik7XG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5zZXRQcmV2aWV3KGluZGV4LCBmKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyB0aGlzLmlucHV0Lm9uY2hhbmdlPSAoJGV2ZW50OiBhbnkpID0+IHtcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKCRldmVudCk7XG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyh0aGlzLmRvY3VtZW50TGlzdCk7XG4gICAgICAgIC8vICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIC8vICAgICBBcnJheS5mcm9tKCRldmVudC50YXJnZXQuZmlsZXMpLmZvckVhY2goYXN5bmMgKGY6IGFueSkgPT4ge1xuICAgICAgICAvLyAgICAgICAgIHRoaXMuZG9jdW1lbnRMaXN0LnB1c2goZik7XG4gICAgICAgIC8vICAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5kb2N1bWVudExpc3QuaW5kZXhPZihmKTtcbiAgICAgICAgLy8gICAgICAgICBhd2FpdCB0aGlzLnNldFByZXZpZXcoaW5kZXgsIGYpXG4gICAgICAgIC8vICAgICAgIH0pO1xuICAgICAgICAvLyAgICAgICBjb25zb2xlLmxvZyh0aGlzLmRvY3VtZW50TGlzdCwgJ2FwcmVzIGxlIGZvcmVhY2gnKTtcbiAgICAgICAgLy8gfTtcbiAgICB9XG5cbiAgICBhc3luYyBzZXRQcmV2aWV3KGluZGV4OiBudW1iZXIsIGJsb2I6IGFueSkge1xuICAgICAgICBpZiAoWydpbWFnZS9qcGVnJywgJ2ltYWdlL3BuZycsICdpbWFnZS9zdmcreG1sJ10uaW5jbHVkZXMoYmxvYi50eXBlKSkge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgaW1hZ2U6IGFueSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbWctcHJldmlldy0nK2luZGV4KTtcbiAgICAgICAgICAgICAgICBpbWFnZS5zdHlsZS5iYWNrZ3JvdW5kID0gJ3VybCgnICsgVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKSArICcpJztcbiAgICAgICAgICAgICAgICBpbWFnZS5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9ICdjb3Zlcic7XG4gICAgICAgICAgICAgICAgaW1hZ2Uuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uID0gJ2NlbnRlciBjZW50ZXInO1xuICAgICAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgfSBlbHNlIGlmIChbJ2FwcGxpY2F0aW9uL3BkZicsICdhcHBsaWNhdGlvbi92bmQub3BlbnhtbGZvcm1hdHMtb2ZmaWNlZG9jdW1lbnQuc3ByZWFkc2hlZXRtbC5zaGVldCcsXG4gICAgICAgICAgICAnYXBwbGljYXRpb24vdm5kLm9wZW54bWxmb3JtYXRzLW9mZmljZWRvY3VtZW50LndvcmRwcm9jZXNzaW5nbWwuZG9jdW1lbnQnXS5pbmNsdWRlcyhibG9iLnR5cGUpKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBpbWFnZTogYW55ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ltZy1wcmV2aWV3LScraW5kZXgpO1xuICAgICAgICAgICAgICAgIC8vIGltYWdlLnN0eWxlLmJhY2tncm91bmQgPSAndXJsKCcgKyBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpICsgJyknO1xuICAgICAgICAgICAgICAgIC8vIGltYWdlLnN0eWxlLmJhY2tncm91bmRTaXplID0gJ2NvdmVyJztcbiAgICAgICAgICAgICAgICAvLyBpbWFnZS5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb24gPSAnY2VudGVyIGNlbnRlcic7XG4gICAgICAgICAgICAgICAgaW1hZ2UuY2xhc3NMaXN0LmFkZCgnYXR0YWNobWVudC1saXN0LWl0ZW0tbGVmdCcpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGV4dCA9IGJsb2IubmFtZS5zcGxpdCgnLicpLnBvcCgpXG4gICAgICAgICAgICAgICAgaW1hZ2UuY2xhc3NMaXN0LmFkZChleHQpO1xuICAgICAgICAgICAgICAgIGltYWdlLmNsYXNzTGlzdC5hZGQoJ2QtZmxleC1jJyk7XG4gICAgICAgICAgICAgICAgaW1hZ2UuaW5uZXJIVE1MID0gJy4nICsgZXh0LnRvVXBwZXJDYXNlKCk7XG4gICAgICAgICAgICB9LCA1MDApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5kb2N1bWVudExpc3Quc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIHRoaXMuZmlsZUVycm9yID0gdGhpcy50cmFuc2xhdGUudHJhbnNsYXRlKHRoaXMuc2VydmljZS5sb2NhbGUsICdJTlZBTElEX0ZJTEVfRk9STUFUJyk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHRhcmVhJykudmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dGFyZWEnKS52YWx1ZS5yZXBsYWNlKGJsb2IubmFtZSwgJycpO1xuICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZSA9IHRoaXMubWVzc2FnZS5yZXBsYWNlKGJsb2IubmFtZSwgJycpO1xuICAgICAgICAgICAgfSwgMTAwKVxuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZmlsZUVycm9yID0gJycsIDIwMDApXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjbGVhck1lc3NhZ2UoKSB7XG4gICAgICAgIHRoaXMubWVzc2FnZSA9ICcnO1xuICAgIH1cblxuICAgIGRlbGV0ZUZpbGUoZmlsZTogYW55KSB7XG4gICAgICAgIHRoaXMuZG9jdW1lbnRMaXN0LnNwbGljZSh0aGlzLmRvY3VtZW50TGlzdC5pbmRleE9mKGZpbGUpLCAxKTtcbiAgICB9XG5cbiAgICBhc3luYyBvblBhc3RlKGU6IGFueSkge1xuICAgICAgICBjb25zdCBpdGVtcyA9IChlLmNsaXBib2FyZERhdGEgfHwgZS5vcmlnaW5hbEV2ZW50LmNsaXBib2FyZERhdGEpLml0ZW1zO1xuICAgICAgICBsZXQgYmxvYjogYW55O1xuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgaXRlbXMpIHtcbiAgICAgICAgICAvLyBpZiAoaXRlbS50eXBlLmluZGV4T2YoJ2ltYWdlJykgPT09IDApIHtcbiAgICAgICAgICAgIGlmIChpdGVtLmtpbmQgPT0gJ2ZpbGUnKSB7XG4gICAgICAgICAgICAgICAgYmxvYiA9IGl0ZW0uZ2V0QXNGaWxlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5kb2N1bWVudExpc3QucHVzaChibG9iKTtcbiAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuZG9jdW1lbnRMaXN0LmluZGV4T2YoYmxvYik7XG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5zZXRQcmV2aWV3KGluZGV4LCBibG9iKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2VuZEF0dGFjaG1lbnRzKCkge1xuICAgICAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSh0aGlzLmRvY3VtZW50TGlzdCk7XG4gICAgfVxuXG5cbiAgICBjbG9zZSgpIHtcbiAgICAgICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UodGhpcy5pbml0aWFsRG9jdW1lbnRMaXN0KTtcbiAgICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwicG9zaXRpb24tcmVsYXRpdmUgbW9kYWwtYXR0YWNobWVudHMtY29udGVudFwiPlxuXG4gICAgPGRpdiBjbGFzcz1cImNsb3NlLWRpYWxvZy1pY29uIGNsb3NlLWRpYWxvZy1pY29uLTE1XCIgbWF0LWRpYWxvZy1jbG9zZSAoY2xpY2spPVwiY2xvc2UoKVwiPlxuICAgICAgICA8bmItaWNvbiBbaWNvbl09XCInY2xvc2UnXCIgW3NpemVdPVwiMVwiPjwvbmItaWNvbj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJib3QgYm90LW5vLWFuaW1cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZTFcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZTJcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZTNcIj48L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJtdDMwIG5iLXRpdGxlLWwgdGl0bGVcIj5cbiAgICAgICAge3sgdHJhbnNsYXRlLnRyYW5zbGF0ZShzZXJ2aWNlLmxvY2FsZSwgJ1NFTkRfTUVfWU9VUl9BVFRBQ0hNRU5UUycgKSB9fVxuICAgIDwvZGl2PlxuXG4gICAgPHRleHRhcmVhIChrZXl1cCk9XCJjbGVhck1lc3NhZ2UoKVwiIChwYXN0ZSk9XCJvblBhc3RlKCRldmVudClcIiBbKG5nTW9kZWwpXT1cIm1lc3NhZ2VcIiBjbGFzcz1cIm5iLXRleHQtMyBjdXN0b20tc2Nyb2xsYmFyIG11bHRpbGluZSBmdWxsLXdpZHRoXCIgaWQ9XCJ0ZXh0YXJlYVwiXG4gICAgcGxhY2Vob2xkZXI9XCJ7e3RyYW5zbGF0ZS50cmFuc2xhdGUoc2VydmljZS5sb2NhbGUsICdDT1BZX1BBU1RFJyApfX1cIiB0YWJpbmRleD1cIjFcIj48L3RleHRhcmVhPlxuXG4gICAgPGRpdiAqbmdJZj1cImZpbGVFcnJvciAhPSAnJ1wiIGNsYXNzPVwiZXJyb3JcIj5cbiAgICAgICAge3sgZmlsZUVycm9yIH19XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwibXQzMCBtYjE1IGZpbGVcIiAoY2xpY2spPVwidGhpcy5pbnB1dC5jbGljaygpXCI+XG4gICAgICAgIDxuYi1pY29uIFtpY29uXT1cIidpbWFnZSdcIiBbc2l6ZV09XCIxLjVcIj48L25iLWljb24+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJuYi10ZXh0LXMgZmlsZS1tZXNzYWdlXCI+XG4gICAgICAgICAge3t0cmFuc2xhdGUudHJhbnNsYXRlKHNlcnZpY2UubG9jYWxlLCAnRFJPUF9QSE9UTycgKSB9fVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1iMTAgbmItdGV4dC1zLTEgZmlsZS1mb3JtYXRcIj5cbiAgICAgICAgICBGb3JtYXQgLmpwZWcgLyAucG5nIC8gLnN2Z1xuICAgICAgICA8L2Rpdj5cblxuICAgIDwvZGl2PlxuXG4gICAgPCEtLSA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBkIG9mIGRvY3VtZW50TGlzdDsgbGV0IGluZGV4ID0gaW5kZXhcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1iMTUgZmlsZS1uYW1lc1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpbGUtbmFtZS1kaXZcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibXIxMCB0YXIgZmlsZS1uYW1lXCI+XG4gICAgICAgICAgICAgICAgICAgIHt7IGQubmFtZSB9fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxuYi1pY29uIChjbGljayk9XCJkZWxldGVGaWxlKGQpXCIgW2ljb25dPVwiJ2RlbGV0ZV8xJ1wiIFtzaXplXT1cIjEuNVwiIGNsYXNzPVwibXIwIGZpbGUtaWNvblwiPjwvbmItaWNvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L25nLWNvbnRhaW5lcj4gLS0+XG5cbiAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4LWFpLWMgZmxleC1mbG93LXdyYXAgZmlsZS1kaXYtY29udGFpbmVyIGN1c3RvbS1zY3JvbGxiYXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1iMTAgbXI1IGQtZmxleC1haS1jXCIgKm5nRm9yPVwibGV0IGQgb2YgZG9jdW1lbnRMaXN0OyBsZXQgaW5kZXggPSBpbmRleFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWxlLW5hbWUtZGl2IGQtZmxleC1haS1jIG1yNVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBqLXByZXZpZXcgY3Vyc29yLXBvaW50ZXJcIiBbaWRdPVwiJ2ltZy1wcmV2aWV3LScraW5kZXhcIj48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICBcbiAgICAgICAgICA8bmItaWNvbiAoY2xpY2spPVwiZGVsZXRlRmlsZShkKVwiIFtpY29uXT1cIidkZWxldGVfMSdcIiBbc2l6ZV09XCIxLjVcIiBjbGFzcz1cIm1yMCBmaWxlLWljb25cIj48L25iLWljb24+XG4gICAgICAgIDwvZGl2PiAgXG4gICAgPC9kaXY+XG5cbiAgICA8YnV0dG9uIChjbGljayk9XCJzZW5kQXR0YWNobWVudHMoKVwiIFtkaXNhYmxlZF09XCIhdGhpcy5kb2N1bWVudExpc3QgfHwgIXRoaXMuZG9jdW1lbnRMaXN0WzBdPy5uYW1lXCIgY2xhc3M9XCJtdDE1IGZ1bGwtd2lkdGggcm91bmRlZCBwcmltYXJ5IGJ0bi1zZW5kXCI+XG4gICAgICAgIHt7dHJhbnNsYXRlLnRyYW5zbGF0ZShzZXJ2aWNlLmxvY2FsZSwgJ0lfRklOSVNIRUQnICkgfX1cbiAgICA8L2J1dHRvbj5cbjwvZGl2PlxuIl19