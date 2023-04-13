import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as i0 from "@angular/core";
import * as i1 from "../konverso.service";
import * as i2 from "../translate.service";
import * as i3 from "@angular/material/dialog";
import * as i4 from "@angular/common";
import * as i5 from "nowboard-icon";
function ModalAddAttachmentsComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 14)(1, "div", 15);
    i0.ɵɵelement(2, "div", 16);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "nb-icon", 17);
    i0.ɵɵlistener("click", function ModalAddAttachmentsComponent_div_16_Template_nb_icon_click_3_listener() { const restoredCtx = i0.ɵɵrestoreView(_r4); const d_r1 = restoredCtx.$implicit; const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.deleteFile(d_r1)); });
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
        console.log(this.documentList);
        if (this.documentList.length > 0) {
            this.documentList.forEach(async (f) => {
                this.documentList.push(f);
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
    deleteFile(file) {
        this.documentList.splice(this.documentList.indexOf(file), 1);
    }
    sendAttachments() {
        this.dialogRef.close(this.documentList);
    }
    close() {
        this.dialogRef.close(null);
    }
}
ModalAddAttachmentsComponent.ɵfac = function ModalAddAttachmentsComponent_Factory(t) { return new (t || ModalAddAttachmentsComponent)(i0.ɵɵdirectiveInject(MAT_DIALOG_DATA), i0.ɵɵdirectiveInject(i1.KonversoService), i0.ɵɵdirectiveInject(i2.TranslateService), i0.ɵɵdirectiveInject(i3.MatDialogRef)); };
ModalAddAttachmentsComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ModalAddAttachmentsComponent, selectors: [["modal-add-attachments"]], decls: 19, vars: 9, consts: [[1, "position-relative", "modal-attachments-content"], ["mat-dialog-close", "", 1, "close-dialog-icon", "close-dialog-icon-15", 3, "click"], [3, "icon", "size"], [1, "bot", "bot-no-anim"], [1, "circle1"], [1, "circle2"], [1, "circle3"], [1, "mt30", "nb-title-l", "title"], [1, "mt30", "mb15", "file", 3, "click"], [1, "nb-text-s", "file-message"], [1, "mb10", "nb-text-s-1", "file-format"], [1, "d-flex-ai-c", "flex-flow-wrap", "file-div-container", "custom-scrollbar"], ["class", "mb10 mr5 d-flex-ai-c", 4, "ngFor", "ngForOf"], [1, "mt15", "full-width", "rounded", "primary", "btn-send", 3, "disabled", "click"], [1, "mb10", "mr5", "d-flex-ai-c"], [1, "file-name-div", "d-flex-ai-c", "mr5"], [1, "pj-preview", "cursor-pointer", 3, "id"], [1, "mr0", "file-icon", 3, "icon", "size", "click"]], template: function ModalAddAttachmentsComponent_Template(rf, ctx) { if (rf & 1) {
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
        i0.ɵɵelementStart(9, "div", 8);
        i0.ɵɵlistener("click", function ModalAddAttachmentsComponent_Template_div_click_9_listener() { return ctx.input.click(); });
        i0.ɵɵelement(10, "nb-icon", 2);
        i0.ɵɵelementStart(11, "div", 9);
        i0.ɵɵtext(12);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(13, "div", 10);
        i0.ɵɵtext(14, " Format .jpeg / .png / .svg ");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(15, "div", 11);
        i0.ɵɵtemplate(16, ModalAddAttachmentsComponent_div_16_Template, 4, 3, "div", 12);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(17, "button", 13);
        i0.ɵɵlistener("click", function ModalAddAttachmentsComponent_Template_button_click_17_listener() { return ctx.sendAttachments(); });
        i0.ɵɵtext(18);
        i0.ɵɵelementEnd()();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("icon", "close")("size", 1);
        i0.ɵɵadvance(6);
        i0.ɵɵtextInterpolate1(" ", ctx.translate.translate(ctx.service.locale, "SEND_ME_YOUR_ATTACHMENTS"), " ");
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
    } }, dependencies: [i4.NgForOf, i5.NowboardIconComponent], styles: [".modal-attachments-content[_ngcontent-%COMP%]   .bot-no-anim[_ngcontent-%COMP%]{margin:auto;height:120px;animation:none;-webkit-animation:none}.modal-attachments-content[_ngcontent-%COMP%]   .circle3[_ngcontent-%COMP%]{width:120px;height:120px}.modal-attachments-content[_ngcontent-%COMP%]   .circle2[_ngcontent-%COMP%]{width:90px;height:90px}.modal-attachments-content[_ngcontent-%COMP%]   .circle1[_ngcontent-%COMP%]{width:60px;height:60px}.modal-attachments-content[_ngcontent-%COMP%]   .file-names[_ngcontent-%COMP%]{margin:0!important}.modal-attachments-content[_ngcontent-%COMP%]   .file-names[_ngcontent-%COMP%]   .file-name-div[_ngcontent-%COMP%]{margin-bottom:0;width:auto;max-width:initial}.modal-attachments-content[_ngcontent-%COMP%]   .file-names[_ngcontent-%COMP%]   .file-name-div[_ngcontent-%COMP%]   .file-name[_ngcontent-%COMP%]{width:120px}.file-div-container[_ngcontent-%COMP%]{max-height:20vh;overflow-y:auto}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ModalAddAttachmentsComponent, [{
        type: Component,
        args: [{ selector: 'modal-add-attachments', template: "<div class=\"position-relative modal-attachments-content\">\n\n    <div class=\"close-dialog-icon close-dialog-icon-15\" mat-dialog-close (click)=\"close()\">\n        <nb-icon [icon]=\"'close'\" [size]=\"1\"></nb-icon>\n    </div>\n\n    <div class=\"bot bot-no-anim\">\n        <div class=\"circle1\"></div>\n        <div class=\"circle2\"></div>\n        <div class=\"circle3\"></div>\n    </div>\n\n    <div class=\"mt30 nb-title-l title\">\n        {{ translate.translate(service.locale, 'SEND_ME_YOUR_ATTACHMENTS' ) }}\n    </div>\n\n    <div class=\"mt30 mb15 file\" (click)=\"this.input.click()\">\n        <nb-icon [icon]=\"'image'\" [size]=\"1.5\"></nb-icon>\n        <div class=\"nb-text-s file-message\">\n          {{translate.translate(service.locale, 'DROP_PHOTO' ) }}\n        </div>\n        <div class=\"mb10 nb-text-s-1 file-format\">\n          Format .jpeg / .png / .svg\n        </div>\n\n    </div>\n\n    <!-- <ng-container *ngFor=\"let d of documentList; let index = index\">\n        <div class=\"mb15 file-names\">\n            <div class=\"file-name-div\">\n                <div class=\"mr10 tar file-name\">\n                    {{ d.name }}\n                </div>\n                <nb-icon (click)=\"deleteFile(d)\" [icon]=\"'delete_1'\" [size]=\"1.5\" class=\"mr0 file-icon\"></nb-icon>\n            </div>\n        </div>\n    </ng-container> -->\n\n    <div class=\"d-flex-ai-c flex-flow-wrap file-div-container custom-scrollbar\">\n        <div class=\"mb10 mr5 d-flex-ai-c\" *ngFor=\"let d of documentList; let index = index\">\n          <div class=\"file-name-div d-flex-ai-c mr5\">\n            <div class=\"pj-preview cursor-pointer\" [id]=\"'img-preview-'+index\"></div>\n          </div>\n    \n          <nb-icon (click)=\"deleteFile(d)\" [icon]=\"'delete_1'\" [size]=\"1.5\" class=\"mr0 file-icon\"></nb-icon>\n        </div>  \n    </div>\n\n    <button (click)=\"sendAttachments()\" [disabled]=\"!this.documentList || !this.documentList[0]?.name\" class=\"mt15 full-width rounded primary btn-send\">\n        {{translate.translate(service.locale, 'I_FINISHED' ) }}\n    </button>\n</div>\n", styles: [".modal-attachments-content .bot-no-anim{margin:auto;height:120px;animation:none;-webkit-animation:none}.modal-attachments-content .circle3{width:120px;height:120px}.modal-attachments-content .circle2{width:90px;height:90px}.modal-attachments-content .circle1{width:60px;height:60px}.modal-attachments-content .file-names{margin:0!important}.modal-attachments-content .file-names .file-name-div{margin-bottom:0;width:auto;max-width:initial}.modal-attachments-content .file-names .file-name-div .file-name{width:120px}.file-div-container{max-height:20vh;overflow-y:auto}\n"] }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [MAT_DIALOG_DATA]
            }] }, { type: i1.KonversoService }, { type: i2.TranslateService }, { type: i3.MatDialogRef }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtYWRkLWF0dGFjaG1lbnRzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2tvbnZlcnNvL3NyYy9saWIvbW9kYWwtYWRkLWF0dGFjaG1lbnRzL21vZGFsLWFkZC1hdHRhY2htZW50cy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9rb252ZXJzby9zcmMvbGliL21vZGFsLWFkZC1hdHRhY2htZW50cy9tb2RhbC1hZGQtYXR0YWNobWVudHMuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxNQUFNLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFDLGVBQWUsRUFBZSxNQUFNLDBCQUEwQixDQUFDOzs7Ozs7Ozs7SUNzQy9ELCtCQUFvRixjQUFBO0lBRWhGLDBCQUF5RTtJQUMzRSxpQkFBTTtJQUVOLG1DQUF3RjtJQUEvRSxtT0FBUyxlQUFBLHVCQUFhLENBQUEsSUFBQztJQUF3RCxpQkFBVSxFQUFBOzs7SUFIekQsZUFBMkI7SUFBM0IsOENBQTJCO0lBR25DLGVBQW1CO0lBQW5CLGlDQUFtQixhQUFBOztBRGxDOUQsTUFBTSxPQUFPLDRCQUE0QjtJQUtyQyxZQUNvQyxJQUsvQixFQUNNLE9BQXdCLEVBQ3hCLFNBQTRCLEVBQzNCLFNBQXFEO1FBUjdCLFNBQUksR0FBSixJQUFJLENBS25DO1FBQ00sWUFBTyxHQUFQLE9BQU8sQ0FBaUI7UUFDeEIsY0FBUyxHQUFULFNBQVMsQ0FBbUI7UUFDM0IsY0FBUyxHQUFULFNBQVMsQ0FBNEM7UUFiakUsaUJBQVksR0FBZSxFQUFFLENBQUM7UUFFdkIsZ0JBQVcsR0FBUSxFQUFFLENBQUM7UUFhekIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7WUFDdkMsS0FBSyxDQUFDLE9BQU8s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RUFBQTtRQWVWLGdDQUE0RTtRQUN4RSxnRkFNTTtRQUNWLGlCQUFNO1FBRU4sbUNBQW9KO1FBQTVJLDBHQUFTLHFCQUFpQixJQUFDO1FBQy9CLGFBQ0o7UUFBQSxpQkFBUyxFQUFBOztRQS9DSSxlQUFnQjtRQUFoQiw4QkFBZ0IsV0FBQTtRQVV6QixlQUNKO1FBREksd0dBQ0o7UUFHYSxlQUFnQjtRQUFoQiw4QkFBZ0IsYUFBQTtRQUV2QixlQUNGO1FBREUsMEZBQ0Y7UUFtQmdELGVBQWlCO1FBQWpCLDBDQUFpQjtRQVNqQyxlQUE4RDtRQUE5RCxnSEFBOEQ7UUFDOUYsZUFDSjtRQURJLDBGQUNKOzt1RkR4Q1MsNEJBQTRCO2NBTHhDLFNBQVM7MkJBQ0ksdUJBQXVCOztzQkFVNUIsTUFBTTt1QkFBQyxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEluamVjdCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TUFUX0RJQUxPR19EQVRBLCBNYXREaWFsb2dSZWZ9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XG5pbXBvcnQge1RyYW5zbGF0ZVNlcnZpY2V9IGZyb20gJy4uL3RyYW5zbGF0ZS5zZXJ2aWNlJztcbmltcG9ydCB7S29udmVyc29TZXJ2aWNlfSBmcm9tICcuLi9rb252ZXJzby5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdtb2RhbC1hZGQtYXR0YWNobWVudHMnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9tb2RhbC1hZGQtYXR0YWNobWVudHMuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL21vZGFsLWFkZC1hdHRhY2htZW50cy5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIE1vZGFsQWRkQXR0YWNobWVudHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGRvY3VtZW50TGlzdDogQXJyYXk8YW55PiA9IFtdO1xuICAgIHB1YmxpYyBpbnB1dCAhOiBIVE1MSW5wdXRFbGVtZW50O1xuICAgIHB1YmxpYyBkaXNwbGF5VGV4dDogYW55ID0ge307XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHB1YmxpYyBkYXRhOiB7XG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgaW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQsXG4gICAgICAgICAgICAgICAgZG9jdW1lbnRMaXN0OiBBcnJheTxhbnk+XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHB1YmxpYyBzZXJ2aWNlOiBLb252ZXJzb1NlcnZpY2UsXG4gICAgICAgIHB1YmxpYyB0cmFuc2xhdGUgOiBUcmFuc2xhdGVTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPE1vZGFsQWRkQXR0YWNobWVudHNDb21wb25lbnQ+XG4gICAgKSB7XG4gICAgICAgIHRoaXMuc2VydmljZS5kb2N1bWVudHMuc3Vic2NyaWJlKChmaWxlcykgPT4ge1xuICAgICAgICAgICAgZmlsZXMuZm9yRWFjaChhc3luYyAoZikgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IGZpbGVzLmluZGV4T2YoZik7XG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5zZXRQcmV2aWV3KGluZGV4LCBmKSBcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmRvY3VtZW50TGlzdCA9IHRoaXMuZGF0YS5kYXRhLmRvY3VtZW50TGlzdCB8fCBbXTtcbiAgICAgICAgdGhpcy5pbnB1dCA9IHRoaXMuZGF0YS5kYXRhLmlucHV0O1xuXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZG9jdW1lbnRMaXN0KTtcbiAgICAgICAgaWYgKHRoaXMuZG9jdW1lbnRMaXN0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuZG9jdW1lbnRMaXN0LmZvckVhY2goYXN5bmMgKGY6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZG9jdW1lbnRMaXN0LnB1c2goZik7XG4gICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5kb2N1bWVudExpc3QuaW5kZXhPZihmKTtcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnNldFByZXZpZXcoaW5kZXgsIGYpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHRoaXMuaW5wdXQub25jaGFuZ2U9ICgkZXZlbnQ6IGFueSkgPT4ge1xuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coJGV2ZW50KTtcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKHRoaXMuZG9jdW1lbnRMaXN0KTtcbiAgICAgICAgLy8gICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgLy8gICAgIEFycmF5LmZyb20oJGV2ZW50LnRhcmdldC5maWxlcykuZm9yRWFjaChhc3luYyAoZjogYW55KSA9PiB7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5kb2N1bWVudExpc3QucHVzaChmKTtcbiAgICAgICAgLy8gICAgICAgICBsZXQgaW5kZXggPSB0aGlzLmRvY3VtZW50TGlzdC5pbmRleE9mKGYpO1xuICAgICAgICAvLyAgICAgICAgIGF3YWl0IHRoaXMuc2V0UHJldmlldyhpbmRleCwgZilcbiAgICAgICAgLy8gICAgICAgfSk7XG4gICAgICAgIC8vICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZG9jdW1lbnRMaXN0LCAnYXByZXMgbGUgZm9yZWFjaCcpO1xuICAgICAgICAvLyB9O1xuICAgIH1cblxuICAgIGFzeW5jIHNldFByZXZpZXcoaW5kZXg6IG51bWJlciwgYmxvYjogYW55KSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGltYWdlOiBhbnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW1nLXByZXZpZXctJytpbmRleCk7XG4gICAgICAgICAgaW1hZ2Uuc3R5bGUuYmFja2dyb3VuZCA9ICd1cmwoJyArIFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYikgKyAnKSc7XG4gICAgICAgICAgaW1hZ2Uuc3R5bGUuYmFja2dyb3VuZFNpemUgPSAnY292ZXInO1xuICAgICAgICAgIGltYWdlLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvbiA9ICdjZW50ZXIgY2VudGVyJztcbiAgICAgICAgfSwgNTAwKTtcbiAgICB9XG5cbiAgICBkZWxldGVGaWxlKGZpbGU6IGFueSkge1xuICAgICAgICB0aGlzLmRvY3VtZW50TGlzdC5zcGxpY2UodGhpcy5kb2N1bWVudExpc3QuaW5kZXhPZihmaWxlKSwgMSk7XG4gICAgfVxuXG5cbiAgICBzZW5kQXR0YWNobWVudHMoKSB7XG4gICAgICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKHRoaXMuZG9jdW1lbnRMaXN0KTtcbiAgICB9XG5cblxuICAgIGNsb3NlKCkge1xuICAgICAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZShudWxsKTtcbiAgICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwicG9zaXRpb24tcmVsYXRpdmUgbW9kYWwtYXR0YWNobWVudHMtY29udGVudFwiPlxuXG4gICAgPGRpdiBjbGFzcz1cImNsb3NlLWRpYWxvZy1pY29uIGNsb3NlLWRpYWxvZy1pY29uLTE1XCIgbWF0LWRpYWxvZy1jbG9zZSAoY2xpY2spPVwiY2xvc2UoKVwiPlxuICAgICAgICA8bmItaWNvbiBbaWNvbl09XCInY2xvc2UnXCIgW3NpemVdPVwiMVwiPjwvbmItaWNvbj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJib3QgYm90LW5vLWFuaW1cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZTFcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZTJcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZTNcIj48L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJtdDMwIG5iLXRpdGxlLWwgdGl0bGVcIj5cbiAgICAgICAge3sgdHJhbnNsYXRlLnRyYW5zbGF0ZShzZXJ2aWNlLmxvY2FsZSwgJ1NFTkRfTUVfWU9VUl9BVFRBQ0hNRU5UUycgKSB9fVxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cIm10MzAgbWIxNSBmaWxlXCIgKGNsaWNrKT1cInRoaXMuaW5wdXQuY2xpY2soKVwiPlxuICAgICAgICA8bmItaWNvbiBbaWNvbl09XCInaW1hZ2UnXCIgW3NpemVdPVwiMS41XCI+PC9uYi1pY29uPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibmItdGV4dC1zIGZpbGUtbWVzc2FnZVwiPlxuICAgICAgICAgIHt7dHJhbnNsYXRlLnRyYW5zbGF0ZShzZXJ2aWNlLmxvY2FsZSwgJ0RST1BfUEhPVE8nICkgfX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtYjEwIG5iLXRleHQtcy0xIGZpbGUtZm9ybWF0XCI+XG4gICAgICAgICAgRm9ybWF0IC5qcGVnIC8gLnBuZyAvIC5zdmdcbiAgICAgICAgPC9kaXY+XG5cbiAgICA8L2Rpdj5cblxuICAgIDwhLS0gPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgZCBvZiBkb2N1bWVudExpc3Q7IGxldCBpbmRleCA9IGluZGV4XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtYjE1IGZpbGUtbmFtZXNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWxlLW5hbWUtZGl2XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1yMTAgdGFyIGZpbGUtbmFtZVwiPlxuICAgICAgICAgICAgICAgICAgICB7eyBkLm5hbWUgfX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8bmItaWNvbiAoY2xpY2spPVwiZGVsZXRlRmlsZShkKVwiIFtpY29uXT1cIidkZWxldGVfMSdcIiBbc2l6ZV09XCIxLjVcIiBjbGFzcz1cIm1yMCBmaWxlLWljb25cIj48L25iLWljb24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9uZy1jb250YWluZXI+IC0tPlxuXG4gICAgPGRpdiBjbGFzcz1cImQtZmxleC1haS1jIGZsZXgtZmxvdy13cmFwIGZpbGUtZGl2LWNvbnRhaW5lciBjdXN0b20tc2Nyb2xsYmFyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtYjEwIG1yNSBkLWZsZXgtYWktY1wiICpuZ0Zvcj1cImxldCBkIG9mIGRvY3VtZW50TGlzdDsgbGV0IGluZGV4ID0gaW5kZXhcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmlsZS1uYW1lLWRpdiBkLWZsZXgtYWktYyBtcjVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwai1wcmV2aWV3IGN1cnNvci1wb2ludGVyXCIgW2lkXT1cIidpbWctcHJldmlldy0nK2luZGV4XCI+PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgXG4gICAgICAgICAgPG5iLWljb24gKGNsaWNrKT1cImRlbGV0ZUZpbGUoZClcIiBbaWNvbl09XCInZGVsZXRlXzEnXCIgW3NpemVdPVwiMS41XCIgY2xhc3M9XCJtcjAgZmlsZS1pY29uXCI+PC9uYi1pY29uPlxuICAgICAgICA8L2Rpdj4gIFxuICAgIDwvZGl2PlxuXG4gICAgPGJ1dHRvbiAoY2xpY2spPVwic2VuZEF0dGFjaG1lbnRzKClcIiBbZGlzYWJsZWRdPVwiIXRoaXMuZG9jdW1lbnRMaXN0IHx8ICF0aGlzLmRvY3VtZW50TGlzdFswXT8ubmFtZVwiIGNsYXNzPVwibXQxNSBmdWxsLXdpZHRoIHJvdW5kZWQgcHJpbWFyeSBidG4tc2VuZFwiPlxuICAgICAgICB7e3RyYW5zbGF0ZS50cmFuc2xhdGUoc2VydmljZS5sb2NhbGUsICdJX0ZJTklTSEVEJyApIH19XG4gICAgPC9idXR0b24+XG48L2Rpdj5cbiJdfQ==