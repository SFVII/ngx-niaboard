import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as i0 from "@angular/core";
import * as i1 from "../konverso.service";
import * as i2 from "../translate.service";
import * as i3 from "@angular/material/dialog";
import * as i4 from "@angular/forms";
import * as i5 from "@angular/common";
import * as i6 from "nowboard-icon";
function ModalAddAttachmentsComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 15)(1, "div", 16);
    i0.ɵɵelement(2, "div", 17);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "nb-icon", 18);
    i0.ɵɵlistener("click", function ModalAddAttachmentsComponent_div_17_Template_nb_icon_click_3_listener() { const restoredCtx = i0.ɵɵrestoreView(_r4); const d_r1 = restoredCtx.$implicit; const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.deleteFile(d_r1)); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const index_r2 = ctx.index;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("id", "img-preview-" + index_r2);
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
        dialogRef.disableClose = true; // block the close with make lose the attachments
        this.service.documents.subscribe((files) => {
            files.forEach(async (f) => {
                let index = files.indexOf(f);
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
                let index = this.documentList.indexOf(f);
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
        setTimeout(() => {
            const image = document.getElementById('img-preview-' + index);
            image.style.background = 'url(' + URL.createObjectURL(blob) + ')';
            image.style.backgroundSize = 'cover';
            image.style.backgroundPosition = 'center center';
        }, 500);
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
                let index = this.documentList.indexOf(blob);
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
ModalAddAttachmentsComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ModalAddAttachmentsComponent, selectors: [["modal-add-attachments"]], decls: 20, vars: 11, consts: [[1, "position-relative", "modal-attachments-content"], ["mat-dialog-close", "", 1, "close-dialog-icon", "close-dialog-icon-15", 3, "click"], [3, "icon", "size"], [1, "bot", "bot-no-anim"], [1, "circle1"], [1, "circle2"], [1, "circle3"], [1, "mt30", "nb-title-l", "title"], ["id", "textarea", "tabindex", "1", 1, "nb-text-3", "custom-scrollbar", "multiline", "full-width", 3, "ngModel", "placeholder", "keyup", "paste", "ngModelChange"], [1, "mt30", "mb15", "file", 3, "click"], [1, "nb-text-s", "file-message"], [1, "mb10", "nb-text-s-1", "file-format"], [1, "d-flex-ai-c", "flex-flow-wrap", "file-div-container", "custom-scrollbar"], ["class", "mb10 mr5 d-flex-ai-c", 4, "ngFor", "ngForOf"], [1, "mt15", "full-width", "rounded", "primary", "btn-send", 3, "disabled", "click"], [1, "mb10", "mr5", "d-flex-ai-c"], [1, "file-name-div", "d-flex-ai-c", "mr5"], [1, "pj-preview", "cursor-pointer", 3, "id"], [1, "mr0", "file-icon", 3, "icon", "size", "click"]], template: function ModalAddAttachmentsComponent_Template(rf, ctx) { if (rf & 1) {
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
        i0.ɵɵelementStart(10, "div", 9);
        i0.ɵɵlistener("click", function ModalAddAttachmentsComponent_Template_div_click_10_listener() { return ctx.input.click(); });
        i0.ɵɵelement(11, "nb-icon", 2);
        i0.ɵɵelementStart(12, "div", 10);
        i0.ɵɵtext(13);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(14, "div", 11);
        i0.ɵɵtext(15, " Format .jpeg / .png / .svg ");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(16, "div", 12);
        i0.ɵɵtemplate(17, ModalAddAttachmentsComponent_div_17_Template, 4, 3, "div", 13);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(18, "button", 14);
        i0.ɵɵlistener("click", function ModalAddAttachmentsComponent_Template_button_click_18_listener() { return ctx.sendAttachments(); });
        i0.ɵɵtext(19);
        i0.ɵɵelementEnd()();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("icon", "close")("size", 1);
        i0.ɵɵadvance(6);
        i0.ɵɵtextInterpolate1(" ", ctx.translate.translate(ctx.service.locale, "SEND_ME_YOUR_ATTACHMENTS"), " ");
        i0.ɵɵadvance(1);
        i0.ɵɵpropertyInterpolate("placeholder", ctx.translate.translate(ctx.service.locale, "COPY_PASTE"));
        i0.ɵɵproperty("ngModel", ctx.message);
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
    } }, dependencies: [i4.DefaultValueAccessor, i4.NgControlStatus, i4.NgModel, i5.NgForOf, i6.NowboardIconComponent], styles: [".modal-attachments-content[_ngcontent-%COMP%]   .bot-no-anim[_ngcontent-%COMP%]{margin:auto;height:120px;animation:none;-webkit-animation:none}.modal-attachments-content[_ngcontent-%COMP%]   .circle3[_ngcontent-%COMP%]{width:120px;height:120px}.modal-attachments-content[_ngcontent-%COMP%]   .circle2[_ngcontent-%COMP%]{width:90px;height:90px}.modal-attachments-content[_ngcontent-%COMP%]   .circle1[_ngcontent-%COMP%]{width:60px;height:60px}.modal-attachments-content[_ngcontent-%COMP%]   .file-names[_ngcontent-%COMP%]{margin:0!important}.modal-attachments-content[_ngcontent-%COMP%]   .file-names[_ngcontent-%COMP%]   .file-name-div[_ngcontent-%COMP%]{margin-bottom:0;width:auto;max-width:initial}.modal-attachments-content[_ngcontent-%COMP%]   .file-names[_ngcontent-%COMP%]   .file-name-div[_ngcontent-%COMP%]   .file-name[_ngcontent-%COMP%]{width:120px}.file-div-container[_ngcontent-%COMP%]{max-height:20vh;overflow-y:auto}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ModalAddAttachmentsComponent, [{
        type: Component,
        args: [{ selector: 'modal-add-attachments', template: "<div class=\"position-relative modal-attachments-content\">\n\n    <div class=\"close-dialog-icon close-dialog-icon-15\" mat-dialog-close (click)=\"close()\">\n        <nb-icon [icon]=\"'close'\" [size]=\"1\"></nb-icon>\n    </div>\n\n    <div class=\"bot bot-no-anim\">\n        <div class=\"circle1\"></div>\n        <div class=\"circle2\"></div>\n        <div class=\"circle3\"></div>\n    </div>\n\n    <div class=\"mt30 nb-title-l title\">\n        {{ translate.translate(service.locale, 'SEND_ME_YOUR_ATTACHMENTS' ) }}\n    </div>\n\n    <textarea (keyup)=\"clearMessage()\" (paste)=\"onPaste($event)\" [(ngModel)]=\"message\" class=\"nb-text-3 custom-scrollbar multiline full-width\" id=\"textarea\"\n    placeholder=\"{{translate.translate(service.locale, 'COPY_PASTE' )}}\" tabindex=\"1\"></textarea>\n\n    <div class=\"mt30 mb15 file\" (click)=\"this.input.click()\">\n        <nb-icon [icon]=\"'image'\" [size]=\"1.5\"></nb-icon>\n        <div class=\"nb-text-s file-message\">\n          {{translate.translate(service.locale, 'DROP_PHOTO' ) }}\n        </div>\n        <div class=\"mb10 nb-text-s-1 file-format\">\n          Format .jpeg / .png / .svg\n        </div>\n\n    </div>\n\n    <!-- <ng-container *ngFor=\"let d of documentList; let index = index\">\n        <div class=\"mb15 file-names\">\n            <div class=\"file-name-div\">\n                <div class=\"mr10 tar file-name\">\n                    {{ d.name }}\n                </div>\n                <nb-icon (click)=\"deleteFile(d)\" [icon]=\"'delete_1'\" [size]=\"1.5\" class=\"mr0 file-icon\"></nb-icon>\n            </div>\n        </div>\n    </ng-container> -->\n\n    <div class=\"d-flex-ai-c flex-flow-wrap file-div-container custom-scrollbar\">\n        <div class=\"mb10 mr5 d-flex-ai-c\" *ngFor=\"let d of documentList; let index = index\">\n          <div class=\"file-name-div d-flex-ai-c mr5\">\n            <div class=\"pj-preview cursor-pointer\" [id]=\"'img-preview-'+index\"></div>\n          </div>\n    \n          <nb-icon (click)=\"deleteFile(d)\" [icon]=\"'delete_1'\" [size]=\"1.5\" class=\"mr0 file-icon\"></nb-icon>\n        </div>  \n    </div>\n\n    <button (click)=\"sendAttachments()\" [disabled]=\"!this.documentList || !this.documentList[0]?.name\" class=\"mt15 full-width rounded primary btn-send\">\n        {{translate.translate(service.locale, 'I_FINISHED' ) }}\n    </button>\n</div>\n", styles: [".modal-attachments-content .bot-no-anim{margin:auto;height:120px;animation:none;-webkit-animation:none}.modal-attachments-content .circle3{width:120px;height:120px}.modal-attachments-content .circle2{width:90px;height:90px}.modal-attachments-content .circle1{width:60px;height:60px}.modal-attachments-content .file-names{margin:0!important}.modal-attachments-content .file-names .file-name-div{margin-bottom:0;width:auto;max-width:initial}.modal-attachments-content .file-names .file-name-div .file-name{width:120px}.file-div-container{max-height:20vh;overflow-y:auto}\n"] }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [MAT_DIALOG_DATA]
            }] }, { type: i1.KonversoService }, { type: i2.TranslateService }, { type: i3.MatDialogRef }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtYWRkLWF0dGFjaG1lbnRzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2tvbnZlcnNvL3NyYy9saWIvbW9kYWwtYWRkLWF0dGFjaG1lbnRzL21vZGFsLWFkZC1hdHRhY2htZW50cy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9rb252ZXJzby9zcmMvbGliL21vZGFsLWFkZC1hdHRhY2htZW50cy9tb2RhbC1hZGQtYXR0YWNobWVudHMuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxNQUFNLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFDLGVBQWUsRUFBZSxNQUFNLDBCQUEwQixDQUFDOzs7Ozs7Ozs7O0lDeUMvRCwrQkFBb0YsY0FBQTtJQUVoRiwwQkFBeUU7SUFDM0UsaUJBQU07SUFFTixtQ0FBd0Y7SUFBL0UsbU9BQVMsZUFBQSx1QkFBYSxDQUFBLElBQUM7SUFBd0QsaUJBQVUsRUFBQTs7O0lBSHpELGVBQTJCO0lBQTNCLDhDQUEyQjtJQUduQyxlQUFtQjtJQUFuQixpQ0FBbUIsYUFBQTs7QURyQzlELE1BQU0sT0FBTyw0QkFBNEI7SUFNckMsWUFDb0MsSUFLL0IsRUFDTSxPQUF3QixFQUN4QixTQUE0QixFQUMzQixTQUFxRDtRQVI3QixTQUFJLEdBQUosSUFBSSxDQUtuQztRQUNNLFlBQU8sR0FBUCxPQUFPLENBQWlCO1FBQ3hCLGNBQVMsR0FBVCxTQUFTLENBQW1CO1FBQzNCLGNBQVMsR0FBVCxTQUFTLENBQTRDO1FBZGpFLGlCQUFZLEdBQWUsRUFBRSxDQUFDO1FBRXZCLGdCQUFXLEdBQVEsRUFBRSxDQUFDO1FBQzdCLFlBQU8sR0FBVyxFQUFFLENBQUM7UUFhakIsU0FBUyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsQ0FBQyxpREFBaUQ7UUFFaEYsSUFBSSxD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Ozt1RkQzQ1MsNEJBQTRCO2NBTHhDLFNBQVM7MkJBQ0ksdUJBQXVCOztzQkFXNUIsTUFBTTt1QkFBQyxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEluamVjdCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TUFUX0RJQUxPR19EQVRBLCBNYXREaWFsb2dSZWZ9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XG5pbXBvcnQge1RyYW5zbGF0ZVNlcnZpY2V9IGZyb20gJy4uL3RyYW5zbGF0ZS5zZXJ2aWNlJztcbmltcG9ydCB7S29udmVyc29TZXJ2aWNlfSBmcm9tICcuLi9rb252ZXJzby5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdtb2RhbC1hZGQtYXR0YWNobWVudHMnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9tb2RhbC1hZGQtYXR0YWNobWVudHMuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL21vZGFsLWFkZC1hdHRhY2htZW50cy5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIE1vZGFsQWRkQXR0YWNobWVudHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGRvY3VtZW50TGlzdDogQXJyYXk8YW55PiA9IFtdO1xuICAgIHB1YmxpYyBpbnB1dCAhOiBIVE1MSW5wdXRFbGVtZW50O1xuICAgIHB1YmxpYyBkaXNwbGF5VGV4dDogYW55ID0ge307XG4gICAgbWVzc2FnZTogc3RyaW5nID0gJyc7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHB1YmxpYyBkYXRhOiB7XG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgaW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQsXG4gICAgICAgICAgICAgICAgZG9jdW1lbnRMaXN0OiBBcnJheTxhbnk+XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHB1YmxpYyBzZXJ2aWNlOiBLb252ZXJzb1NlcnZpY2UsXG4gICAgICAgIHB1YmxpYyB0cmFuc2xhdGUgOiBUcmFuc2xhdGVTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPE1vZGFsQWRkQXR0YWNobWVudHNDb21wb25lbnQ+XG4gICAgKSB7XG4gICAgICAgIGRpYWxvZ1JlZi5kaXNhYmxlQ2xvc2UgPSB0cnVlOyAvLyBibG9jayB0aGUgY2xvc2Ugd2l0aCBtYWtlIGxvc2UgdGhlIGF0dGFjaG1lbnRzXG5cbiAgICAgICAgdGhpcy5zZXJ2aWNlLmRvY3VtZW50cy5zdWJzY3JpYmUoKGZpbGVzKSA9PiB7XG4gICAgICAgICAgICBmaWxlcy5mb3JFYWNoKGFzeW5jIChmKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gZmlsZXMuaW5kZXhPZihmKTtcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnNldFByZXZpZXcoaW5kZXgsIGYpIFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZG9jdW1lbnRMaXN0ID0gdGhpcy5kYXRhLmRhdGEuZG9jdW1lbnRMaXN0IHx8IFtdO1xuICAgICAgICB0aGlzLmlucHV0ID0gdGhpcy5kYXRhLmRhdGEuaW5wdXQ7XG5cbiAgICAgICAgaWYgKHRoaXMuZG9jdW1lbnRMaXN0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuZG9jdW1lbnRMaXN0LmZvckVhY2goYXN5bmMgKGY6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIHRoaXMuZG9jdW1lbnRMaXN0LnB1c2goZik7XG4gICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5kb2N1bWVudExpc3QuaW5kZXhPZihmKTtcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnNldFByZXZpZXcoaW5kZXgsIGYpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHRoaXMuaW5wdXQub25jaGFuZ2U9ICgkZXZlbnQ6IGFueSkgPT4ge1xuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coJGV2ZW50KTtcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKHRoaXMuZG9jdW1lbnRMaXN0KTtcbiAgICAgICAgLy8gICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgLy8gICAgIEFycmF5LmZyb20oJGV2ZW50LnRhcmdldC5maWxlcykuZm9yRWFjaChhc3luYyAoZjogYW55KSA9PiB7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5kb2N1bWVudExpc3QucHVzaChmKTtcbiAgICAgICAgLy8gICAgICAgICBsZXQgaW5kZXggPSB0aGlzLmRvY3VtZW50TGlzdC5pbmRleE9mKGYpO1xuICAgICAgICAvLyAgICAgICAgIGF3YWl0IHRoaXMuc2V0UHJldmlldyhpbmRleCwgZilcbiAgICAgICAgLy8gICAgICAgfSk7XG4gICAgICAgIC8vICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZG9jdW1lbnRMaXN0LCAnYXByZXMgbGUgZm9yZWFjaCcpO1xuICAgICAgICAvLyB9O1xuICAgIH1cblxuICAgIGFzeW5jIHNldFByZXZpZXcoaW5kZXg6IG51bWJlciwgYmxvYjogYW55KSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGltYWdlOiBhbnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW1nLXByZXZpZXctJytpbmRleCk7XG4gICAgICAgICAgaW1hZ2Uuc3R5bGUuYmFja2dyb3VuZCA9ICd1cmwoJyArIFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYikgKyAnKSc7XG4gICAgICAgICAgaW1hZ2Uuc3R5bGUuYmFja2dyb3VuZFNpemUgPSAnY292ZXInO1xuICAgICAgICAgIGltYWdlLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvbiA9ICdjZW50ZXIgY2VudGVyJztcbiAgICAgICAgfSwgNTAwKTtcbiAgICB9XG5cbiAgICBjbGVhck1lc3NhZ2UoKSB7XG4gICAgICAgIHRoaXMubWVzc2FnZSA9ICcnO1xuICAgIH1cblxuICAgIGRlbGV0ZUZpbGUoZmlsZTogYW55KSB7XG4gICAgICAgIHRoaXMuZG9jdW1lbnRMaXN0LnNwbGljZSh0aGlzLmRvY3VtZW50TGlzdC5pbmRleE9mKGZpbGUpLCAxKTtcbiAgICB9XG5cbiAgICBhc3luYyBvblBhc3RlKGU6IGFueSkge1xuICAgICAgICBjb25zdCBpdGVtcyA9IChlLmNsaXBib2FyZERhdGEgfHwgZS5vcmlnaW5hbEV2ZW50LmNsaXBib2FyZERhdGEpLml0ZW1zO1xuICAgICAgICBsZXQgYmxvYjogYW55O1xuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgaXRlbXMpIHtcbiAgICAgICAgICAvLyBpZiAoaXRlbS50eXBlLmluZGV4T2YoJ2ltYWdlJykgPT09IDApIHtcbiAgICAgICAgICAgIGlmIChpdGVtLmtpbmQgPT0gJ2ZpbGUnKSB7XG4gICAgICAgICAgICAgICAgYmxvYiA9IGl0ZW0uZ2V0QXNGaWxlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5kb2N1bWVudExpc3QucHVzaChibG9iKTtcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSB0aGlzLmRvY3VtZW50TGlzdC5pbmRleE9mKGJsb2IpO1xuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuc2V0UHJldmlldyhpbmRleCwgYmxvYilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNlbmRBdHRhY2htZW50cygpIHtcbiAgICAgICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UodGhpcy5kb2N1bWVudExpc3QpO1xuICAgIH1cblxuXG4gICAgY2xvc2UoKSB7XG4gICAgICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKG51bGwpO1xuICAgIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJwb3NpdGlvbi1yZWxhdGl2ZSBtb2RhbC1hdHRhY2htZW50cy1jb250ZW50XCI+XG5cbiAgICA8ZGl2IGNsYXNzPVwiY2xvc2UtZGlhbG9nLWljb24gY2xvc2UtZGlhbG9nLWljb24tMTVcIiBtYXQtZGlhbG9nLWNsb3NlIChjbGljayk9XCJjbG9zZSgpXCI+XG4gICAgICAgIDxuYi1pY29uIFtpY29uXT1cIidjbG9zZSdcIiBbc2l6ZV09XCIxXCI+PC9uYi1pY29uPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cImJvdCBib3Qtbm8tYW5pbVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlMVwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlMlwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlM1wiPjwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cIm10MzAgbmItdGl0bGUtbCB0aXRsZVwiPlxuICAgICAgICB7eyB0cmFuc2xhdGUudHJhbnNsYXRlKHNlcnZpY2UubG9jYWxlLCAnU0VORF9NRV9ZT1VSX0FUVEFDSE1FTlRTJyApIH19XG4gICAgPC9kaXY+XG5cbiAgICA8dGV4dGFyZWEgKGtleXVwKT1cImNsZWFyTWVzc2FnZSgpXCIgKHBhc3RlKT1cIm9uUGFzdGUoJGV2ZW50KVwiIFsobmdNb2RlbCldPVwibWVzc2FnZVwiIGNsYXNzPVwibmItdGV4dC0zIGN1c3RvbS1zY3JvbGxiYXIgbXVsdGlsaW5lIGZ1bGwtd2lkdGhcIiBpZD1cInRleHRhcmVhXCJcbiAgICBwbGFjZWhvbGRlcj1cInt7dHJhbnNsYXRlLnRyYW5zbGF0ZShzZXJ2aWNlLmxvY2FsZSwgJ0NPUFlfUEFTVEUnICl9fVwiIHRhYmluZGV4PVwiMVwiPjwvdGV4dGFyZWE+XG5cbiAgICA8ZGl2IGNsYXNzPVwibXQzMCBtYjE1IGZpbGVcIiAoY2xpY2spPVwidGhpcy5pbnB1dC5jbGljaygpXCI+XG4gICAgICAgIDxuYi1pY29uIFtpY29uXT1cIidpbWFnZSdcIiBbc2l6ZV09XCIxLjVcIj48L25iLWljb24+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJuYi10ZXh0LXMgZmlsZS1tZXNzYWdlXCI+XG4gICAgICAgICAge3t0cmFuc2xhdGUudHJhbnNsYXRlKHNlcnZpY2UubG9jYWxlLCAnRFJPUF9QSE9UTycgKSB9fVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1iMTAgbmItdGV4dC1zLTEgZmlsZS1mb3JtYXRcIj5cbiAgICAgICAgICBGb3JtYXQgLmpwZWcgLyAucG5nIC8gLnN2Z1xuICAgICAgICA8L2Rpdj5cblxuICAgIDwvZGl2PlxuXG4gICAgPCEtLSA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBkIG9mIGRvY3VtZW50TGlzdDsgbGV0IGluZGV4ID0gaW5kZXhcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1iMTUgZmlsZS1uYW1lc1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpbGUtbmFtZS1kaXZcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibXIxMCB0YXIgZmlsZS1uYW1lXCI+XG4gICAgICAgICAgICAgICAgICAgIHt7IGQubmFtZSB9fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxuYi1pY29uIChjbGljayk9XCJkZWxldGVGaWxlKGQpXCIgW2ljb25dPVwiJ2RlbGV0ZV8xJ1wiIFtzaXplXT1cIjEuNVwiIGNsYXNzPVwibXIwIGZpbGUtaWNvblwiPjwvbmItaWNvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L25nLWNvbnRhaW5lcj4gLS0+XG5cbiAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4LWFpLWMgZmxleC1mbG93LXdyYXAgZmlsZS1kaXYtY29udGFpbmVyIGN1c3RvbS1zY3JvbGxiYXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1iMTAgbXI1IGQtZmxleC1haS1jXCIgKm5nRm9yPVwibGV0IGQgb2YgZG9jdW1lbnRMaXN0OyBsZXQgaW5kZXggPSBpbmRleFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWxlLW5hbWUtZGl2IGQtZmxleC1haS1jIG1yNVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBqLXByZXZpZXcgY3Vyc29yLXBvaW50ZXJcIiBbaWRdPVwiJ2ltZy1wcmV2aWV3LScraW5kZXhcIj48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICBcbiAgICAgICAgICA8bmItaWNvbiAoY2xpY2spPVwiZGVsZXRlRmlsZShkKVwiIFtpY29uXT1cIidkZWxldGVfMSdcIiBbc2l6ZV09XCIxLjVcIiBjbGFzcz1cIm1yMCBmaWxlLWljb25cIj48L25iLWljb24+XG4gICAgICAgIDwvZGl2PiAgXG4gICAgPC9kaXY+XG5cbiAgICA8YnV0dG9uIChjbGljayk9XCJzZW5kQXR0YWNobWVudHMoKVwiIFtkaXNhYmxlZF09XCIhdGhpcy5kb2N1bWVudExpc3QgfHwgIXRoaXMuZG9jdW1lbnRMaXN0WzBdPy5uYW1lXCIgY2xhc3M9XCJtdDE1IGZ1bGwtd2lkdGggcm91bmRlZCBwcmltYXJ5IGJ0bi1zZW5kXCI+XG4gICAgICAgIHt7dHJhbnNsYXRlLnRyYW5zbGF0ZShzZXJ2aWNlLmxvY2FsZSwgJ0lfRklOSVNIRUQnICkgfX1cbiAgICA8L2J1dHRvbj5cbjwvZGl2PlxuIl19