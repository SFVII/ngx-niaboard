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
    }
    ngOnInit() {
        this.documentList = this.data.data.documentList || [];
        this.input = this.data.data.input;
        if (this.documentList.length > 0) {
            this.documentList.forEach(async (f) => {
                this.documentList.push(f);
                let index = this.documentList.indexOf(f);
                await this.setPreview(index, f);
            });
        }
        this.input.onchange = ($event) => {
            // @ts-ignore
            Array.from(event.target.files).forEach(async (f) => {
                this.documentList.push(f);
                let index = this.documentList.indexOf(f);
                await this.setPreview(index, f);
            });
        };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtYWRkLWF0dGFjaG1lbnRzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2tvbnZlcnNvL3NyYy9saWIvbW9kYWwtYWRkLWF0dGFjaG1lbnRzL21vZGFsLWFkZC1hdHRhY2htZW50cy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9rb252ZXJzby9zcmMvbGliL21vZGFsLWFkZC1hdHRhY2htZW50cy9tb2RhbC1hZGQtYXR0YWNobWVudHMuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxNQUFNLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFDLGVBQWUsRUFBZSxNQUFNLDBCQUEwQixDQUFDOzs7Ozs7Ozs7SUNzQy9ELCtCQUFvRixjQUFBO0lBRWhGLDBCQUF5RTtJQUMzRSxpQkFBTTtJQUVOLG1DQUF3RjtJQUEvRSxtT0FBUyxlQUFBLHVCQUFhLENBQUEsSUFBQztJQUF3RCxpQkFBVSxFQUFBOzs7SUFIekQsZUFBMkI7SUFBM0IsOENBQTJCO0lBR25DLGVBQW1CO0lBQW5CLGlDQUFtQixhQUFBOztBRGxDOUQsTUFBTSxPQUFPLDRCQUE0QjtJQUtyQyxZQUNvQyxJQUsvQixFQUNNLE9BQXdCLEVBQ3hCLFNBQTRCLEVBQzNCLFNBQXFEO1FBUjdCLFNBQUksR0FBSixJQUFJLENBS25DO1FBQ00sWUFBTyxHQUFQLE9BQU8sQ0FBaUI7UUFDeEIsY0FBUyxHQUFULFNBQVMsQ0FBbUI7UUFDM0IsY0FBUyxHQUFULFNBQVMsQ0FBNEM7UUFiakUsaUJBQVksR0FBZSxFQUFFLENBQUM7UUFFdkIsZ0JBQVcsR0FBUSxFQUFFLENBQUM7SUFhN0IsQ0FBQztJQUVELFFBQVE7UUFDSixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksSUFBSSxF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O1FBQUEsaUJBQVMsRUFBQTs7UUEvQ0ksZUFBZ0I7UUFBaEIsOEJBQWdCLFdBQUE7UUFVekIsZUFDSjtRQURJLHdHQUNKO1FBR2EsZUFBZ0I7UUFBaEIsOEJBQWdCLGFBQUE7UUFFdkIsZUFDRjtRQURFLDBGQUNGO1FBbUJnRCxlQUFpQjtRQUFqQiwwQ0FBaUI7UUFTakMsZUFBOEQ7UUFBOUQsZ0hBQThEO1FBQzlGLGVBQ0o7UUFESSwwRkFDSjs7dUZEeENTLDRCQUE0QjtjQUx4QyxTQUFTOzJCQUNJLHVCQUF1Qjs7c0JBVTVCLE1BQU07dUJBQUMsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbmplY3QsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01BVF9ESUFMT0dfREFUQSwgTWF0RGlhbG9nUmVmfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xuaW1wb3J0IHtUcmFuc2xhdGVTZXJ2aWNlfSBmcm9tICcuLi90cmFuc2xhdGUuc2VydmljZSc7XG5pbXBvcnQge0tvbnZlcnNvU2VydmljZX0gZnJvbSAnLi4va29udmVyc28uc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbW9kYWwtYWRkLWF0dGFjaG1lbnRzJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vbW9kYWwtYWRkLWF0dGFjaG1lbnRzLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9tb2RhbC1hZGQtYXR0YWNobWVudHMuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBNb2RhbEFkZEF0dGFjaG1lbnRzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBkb2N1bWVudExpc3Q6IEFycmF5PGFueT4gPSBbXTtcbiAgICBwdWJsaWMgaW5wdXQgITogSFRNTElucHV0RWxlbWVudDtcbiAgICBwdWJsaWMgZGlzcGxheVRleHQ6IGFueSA9IHt9O1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwdWJsaWMgZGF0YToge1xuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIGlucHV0OiBIVE1MSW5wdXRFbGVtZW50LFxuICAgICAgICAgICAgICAgIGRvY3VtZW50TGlzdDogQXJyYXk8YW55PlxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBwdWJsaWMgc2VydmljZTogS29udmVyc29TZXJ2aWNlLFxuICAgICAgICBwdWJsaWMgdHJhbnNsYXRlIDogVHJhbnNsYXRlU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxNb2RhbEFkZEF0dGFjaG1lbnRzQ29tcG9uZW50PlxuICAgICkge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmRvY3VtZW50TGlzdCA9IHRoaXMuZGF0YS5kYXRhLmRvY3VtZW50TGlzdCB8fCBbXTtcbiAgICAgICAgdGhpcy5pbnB1dCA9IHRoaXMuZGF0YS5kYXRhLmlucHV0O1xuXG4gICAgICAgIGlmICh0aGlzLmRvY3VtZW50TGlzdC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmRvY3VtZW50TGlzdC5mb3JFYWNoKGFzeW5jIChmOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmRvY3VtZW50TGlzdC5wdXNoKGYpO1xuICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IHRoaXMuZG9jdW1lbnRMaXN0LmluZGV4T2YoZik7XG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5zZXRQcmV2aWV3KGluZGV4LCBmKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmlucHV0Lm9uY2hhbmdlPSAoJGV2ZW50OiBhbnkpID0+IHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIEFycmF5LmZyb20oZXZlbnQudGFyZ2V0LmZpbGVzKS5mb3JFYWNoKGFzeW5jIChmOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmRvY3VtZW50TGlzdC5wdXNoKGYpO1xuICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IHRoaXMuZG9jdW1lbnRMaXN0LmluZGV4T2YoZik7XG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5zZXRQcmV2aWV3KGluZGV4LCBmKVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBhc3luYyBzZXRQcmV2aWV3KGluZGV4OiBudW1iZXIsIGJsb2I6IGFueSkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBjb25zdCBpbWFnZTogYW55ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ltZy1wcmV2aWV3LScraW5kZXgpO1xuICAgICAgICAgIGltYWdlLnN0eWxlLmJhY2tncm91bmQgPSAndXJsKCcgKyBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpICsgJyknO1xuICAgICAgICAgIGltYWdlLnN0eWxlLmJhY2tncm91bmRTaXplID0gJ2NvdmVyJztcbiAgICAgICAgICBpbWFnZS5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb24gPSAnY2VudGVyIGNlbnRlcic7XG4gICAgICAgIH0sIDUwMCk7XG4gICAgfVxuXG4gICAgZGVsZXRlRmlsZShmaWxlOiBhbnkpIHtcbiAgICAgICAgdGhpcy5kb2N1bWVudExpc3Quc3BsaWNlKHRoaXMuZG9jdW1lbnRMaXN0LmluZGV4T2YoZmlsZSksIDEpO1xuICAgIH1cblxuXG4gICAgc2VuZEF0dGFjaG1lbnRzKCkge1xuICAgICAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSh0aGlzLmRvY3VtZW50TGlzdCk7XG4gICAgfVxuXG5cbiAgICBjbG9zZSgpIHtcbiAgICAgICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UobnVsbCk7XG4gICAgfVxufVxuIiwiPGRpdiBjbGFzcz1cInBvc2l0aW9uLXJlbGF0aXZlIG1vZGFsLWF0dGFjaG1lbnRzLWNvbnRlbnRcIj5cblxuICAgIDxkaXYgY2xhc3M9XCJjbG9zZS1kaWFsb2ctaWNvbiBjbG9zZS1kaWFsb2ctaWNvbi0xNVwiIG1hdC1kaWFsb2ctY2xvc2UgKGNsaWNrKT1cImNsb3NlKClcIj5cbiAgICAgICAgPG5iLWljb24gW2ljb25dPVwiJ2Nsb3NlJ1wiIFtzaXplXT1cIjFcIj48L25iLWljb24+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwiYm90IGJvdC1uby1hbmltXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGUxXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGUyXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGUzXCI+PC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwibXQzMCBuYi10aXRsZS1sIHRpdGxlXCI+XG4gICAgICAgIHt7IHRyYW5zbGF0ZS50cmFuc2xhdGUoc2VydmljZS5sb2NhbGUsICdTRU5EX01FX1lPVVJfQVRUQUNITUVOVFMnICkgfX1cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJtdDMwIG1iMTUgZmlsZVwiIChjbGljayk9XCJ0aGlzLmlucHV0LmNsaWNrKClcIj5cbiAgICAgICAgPG5iLWljb24gW2ljb25dPVwiJ2ltYWdlJ1wiIFtzaXplXT1cIjEuNVwiPjwvbmItaWNvbj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm5iLXRleHQtcyBmaWxlLW1lc3NhZ2VcIj5cbiAgICAgICAgICB7e3RyYW5zbGF0ZS50cmFuc2xhdGUoc2VydmljZS5sb2NhbGUsICdEUk9QX1BIT1RPJyApIH19XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwibWIxMCBuYi10ZXh0LXMtMSBmaWxlLWZvcm1hdFwiPlxuICAgICAgICAgIEZvcm1hdCAuanBlZyAvIC5wbmcgLyAuc3ZnXG4gICAgICAgIDwvZGl2PlxuXG4gICAgPC9kaXY+XG5cbiAgICA8IS0tIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGQgb2YgZG9jdW1lbnRMaXN0OyBsZXQgaW5kZXggPSBpbmRleFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibWIxNSBmaWxlLW5hbWVzXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmlsZS1uYW1lLWRpdlwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtcjEwIHRhciBmaWxlLW5hbWVcIj5cbiAgICAgICAgICAgICAgICAgICAge3sgZC5uYW1lIH19XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPG5iLWljb24gKGNsaWNrKT1cImRlbGV0ZUZpbGUoZClcIiBbaWNvbl09XCInZGVsZXRlXzEnXCIgW3NpemVdPVwiMS41XCIgY2xhc3M9XCJtcjAgZmlsZS1pY29uXCI+PC9uYi1pY29uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvbmctY29udGFpbmVyPiAtLT5cblxuICAgIDxkaXYgY2xhc3M9XCJkLWZsZXgtYWktYyBmbGV4LWZsb3ctd3JhcCBmaWxlLWRpdi1jb250YWluZXIgY3VzdG9tLXNjcm9sbGJhclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibWIxMCBtcjUgZC1mbGV4LWFpLWNcIiAqbmdGb3I9XCJsZXQgZCBvZiBkb2N1bWVudExpc3Q7IGxldCBpbmRleCA9IGluZGV4XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZpbGUtbmFtZS1kaXYgZC1mbGV4LWFpLWMgbXI1XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGotcHJldmlldyBjdXJzb3ItcG9pbnRlclwiIFtpZF09XCInaW1nLXByZXZpZXctJytpbmRleFwiPjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgIFxuICAgICAgICAgIDxuYi1pY29uIChjbGljayk9XCJkZWxldGVGaWxlKGQpXCIgW2ljb25dPVwiJ2RlbGV0ZV8xJ1wiIFtzaXplXT1cIjEuNVwiIGNsYXNzPVwibXIwIGZpbGUtaWNvblwiPjwvbmItaWNvbj5cbiAgICAgICAgPC9kaXY+ICBcbiAgICA8L2Rpdj5cblxuICAgIDxidXR0b24gKGNsaWNrKT1cInNlbmRBdHRhY2htZW50cygpXCIgW2Rpc2FibGVkXT1cIiF0aGlzLmRvY3VtZW50TGlzdCB8fCAhdGhpcy5kb2N1bWVudExpc3RbMF0/Lm5hbWVcIiBjbGFzcz1cIm10MTUgZnVsbC13aWR0aCByb3VuZGVkIHByaW1hcnkgYnRuLXNlbmRcIj5cbiAgICAgICAge3t0cmFuc2xhdGUudHJhbnNsYXRlKHNlcnZpY2UubG9jYWxlLCAnSV9GSU5JU0hFRCcgKSB9fVxuICAgIDwvYnV0dG9uPlxuPC9kaXY+XG4iXX0=