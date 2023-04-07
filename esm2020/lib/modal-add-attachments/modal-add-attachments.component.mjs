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
            console.log(image);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtYWRkLWF0dGFjaG1lbnRzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2tvbnZlcnNvL3NyYy9saWIvbW9kYWwtYWRkLWF0dGFjaG1lbnRzL21vZGFsLWFkZC1hdHRhY2htZW50cy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9rb252ZXJzby9zcmMvbGliL21vZGFsLWFkZC1hdHRhY2htZW50cy9tb2RhbC1hZGQtYXR0YWNobWVudHMuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxNQUFNLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFDLGVBQWUsRUFBZSxNQUFNLDBCQUEwQixDQUFDOzs7Ozs7Ozs7SUNzQy9ELCtCQUFvRixjQUFBO0lBRWhGLDBCQUF5RTtJQUMzRSxpQkFBTTtJQUVOLG1DQUF3RjtJQUEvRSxtT0FBUyxlQUFBLHVCQUFhLENBQUEsSUFBQztJQUF3RCxpQkFBVSxFQUFBOzs7SUFIekQsZUFBMkI7SUFBM0IsOENBQTJCO0lBR25DLGVBQW1CO0lBQW5CLGlDQUFtQixhQUFBOztBRGxDOUQsTUFBTSxPQUFPLDRCQUE0QjtJQUtyQyxZQUNvQyxJQUsvQixFQUNNLE9BQXdCLEVBQ3hCLFNBQTRCLEVBQzNCLFNBQXFEO1FBUjdCLFNBQUksR0FBSixJQUFJLENBS25DO1FBQ00sWUFBTyxHQUFQLE9BQU8sQ0FBaUI7UUFDeEIsY0FBUyxHQUFULFNBQVMsQ0FBbUI7UUFDM0IsY0FBUyxHQUFULFNBQVMsQ0FBNEM7UUFiakUsaUJBQVksR0FBZSxFQUFFLENBQUM7UUFFdkIsZ0JBQVcsR0FBUSxFQUFFLENBQUM7SUFhN0IsQ0FBQztJQUVELFFBQVE7UUFDSixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksSUFBSSxF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dCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5qZWN0LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNQVRfRElBTE9HX0RBVEEsIE1hdERpYWxvZ1JlZn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcbmltcG9ydCB7VHJhbnNsYXRlU2VydmljZX0gZnJvbSAnLi4vdHJhbnNsYXRlLnNlcnZpY2UnO1xuaW1wb3J0IHtLb252ZXJzb1NlcnZpY2V9IGZyb20gJy4uL2tvbnZlcnNvLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ21vZGFsLWFkZC1hdHRhY2htZW50cycsXG4gICAgdGVtcGxhdGVVcmw6ICcuL21vZGFsLWFkZC1hdHRhY2htZW50cy5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vbW9kYWwtYWRkLWF0dGFjaG1lbnRzLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTW9kYWxBZGRBdHRhY2htZW50c0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgZG9jdW1lbnRMaXN0OiBBcnJheTxhbnk+ID0gW107XG4gICAgcHVibGljIGlucHV0ICE6IEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgcHVibGljIGRpc3BsYXlUZXh0OiBhbnkgPSB7fTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBASW5qZWN0KE1BVF9ESUFMT0dfREFUQSkgcHVibGljIGRhdGE6IHtcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICBpbnB1dDogSFRNTElucHV0RWxlbWVudCxcbiAgICAgICAgICAgICAgICBkb2N1bWVudExpc3Q6IEFycmF5PGFueT5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgcHVibGljIHNlcnZpY2U6IEtvbnZlcnNvU2VydmljZSxcbiAgICAgICAgcHVibGljIHRyYW5zbGF0ZSA6IFRyYW5zbGF0ZVNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8TW9kYWxBZGRBdHRhY2htZW50c0NvbXBvbmVudD5cbiAgICApIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kb2N1bWVudExpc3QgPSB0aGlzLmRhdGEuZGF0YS5kb2N1bWVudExpc3QgfHwgW107XG4gICAgICAgIHRoaXMuaW5wdXQgPSB0aGlzLmRhdGEuZGF0YS5pbnB1dDtcblxuICAgICAgICB0aGlzLmlucHV0Lm9uY2hhbmdlPSAoJGV2ZW50OiBhbnkpID0+IHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIEFycmF5LmZyb20oZXZlbnQudGFyZ2V0LmZpbGVzKS5mb3JFYWNoKGFzeW5jIChmOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmRvY3VtZW50TGlzdC5wdXNoKGYpO1xuICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IHRoaXMuZG9jdW1lbnRMaXN0LmluZGV4T2YoZik7XG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5zZXRQcmV2aWV3KGluZGV4LCBmKVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBhc3luYyBzZXRQcmV2aWV3KGluZGV4OiBudW1iZXIsIGJsb2I6IGFueSkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBjb25zdCBpbWFnZTogYW55ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ltZy1wcmV2aWV3LScraW5kZXgpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKGltYWdlKTtcbiAgICAgICAgICBpbWFnZS5zdHlsZS5iYWNrZ3JvdW5kID0gJ3VybCgnICsgVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKSArICcpJztcbiAgICAgICAgICBpbWFnZS5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9ICdjb3Zlcic7XG4gICAgICAgICAgaW1hZ2Uuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uID0gJ2NlbnRlciBjZW50ZXInO1xuICAgICAgICB9LCA1MDApO1xuICAgIH1cblxuICAgIGRlbGV0ZUZpbGUoZmlsZTogYW55KSB7XG4gICAgICAgIHRoaXMuZG9jdW1lbnRMaXN0LnNwbGljZSh0aGlzLmRvY3VtZW50TGlzdC5pbmRleE9mKGZpbGUpLCAxKTtcbiAgICB9XG5cblxuICAgIHNlbmRBdHRhY2htZW50cygpIHtcbiAgICAgICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UodGhpcy5kb2N1bWVudExpc3QpO1xuICAgIH1cblxuXG4gICAgY2xvc2UoKSB7XG4gICAgICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKG51bGwpO1xuICAgIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJwb3NpdGlvbi1yZWxhdGl2ZSBtb2RhbC1hdHRhY2htZW50cy1jb250ZW50XCI+XG5cbiAgICA8ZGl2IGNsYXNzPVwiY2xvc2UtZGlhbG9nLWljb24gY2xvc2UtZGlhbG9nLWljb24tMTVcIiBtYXQtZGlhbG9nLWNsb3NlIChjbGljayk9XCJjbG9zZSgpXCI+XG4gICAgICAgIDxuYi1pY29uIFtpY29uXT1cIidjbG9zZSdcIiBbc2l6ZV09XCIxXCI+PC9uYi1pY29uPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cImJvdCBib3Qtbm8tYW5pbVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlMVwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlMlwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlM1wiPjwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cIm10MzAgbmItdGl0bGUtbCB0aXRsZVwiPlxuICAgICAgICB7eyB0cmFuc2xhdGUudHJhbnNsYXRlKHNlcnZpY2UubG9jYWxlLCAnU0VORF9NRV9ZT1VSX0FUVEFDSE1FTlRTJyApIH19XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwibXQzMCBtYjE1IGZpbGVcIiAoY2xpY2spPVwidGhpcy5pbnB1dC5jbGljaygpXCI+XG4gICAgICAgIDxuYi1pY29uIFtpY29uXT1cIidpbWFnZSdcIiBbc2l6ZV09XCIxLjVcIj48L25iLWljb24+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJuYi10ZXh0LXMgZmlsZS1tZXNzYWdlXCI+XG4gICAgICAgICAge3t0cmFuc2xhdGUudHJhbnNsYXRlKHNlcnZpY2UubG9jYWxlLCAnRFJPUF9QSE9UTycgKSB9fVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1iMTAgbmItdGV4dC1zLTEgZmlsZS1mb3JtYXRcIj5cbiAgICAgICAgICBGb3JtYXQgLmpwZWcgLyAucG5nIC8gLnN2Z1xuICAgICAgICA8L2Rpdj5cblxuICAgIDwvZGl2PlxuXG4gICAgPCEtLSA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBkIG9mIGRvY3VtZW50TGlzdDsgbGV0IGluZGV4ID0gaW5kZXhcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1iMTUgZmlsZS1uYW1lc1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpbGUtbmFtZS1kaXZcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibXIxMCB0YXIgZmlsZS1uYW1lXCI+XG4gICAgICAgICAgICAgICAgICAgIHt7IGQubmFtZSB9fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxuYi1pY29uIChjbGljayk9XCJkZWxldGVGaWxlKGQpXCIgW2ljb25dPVwiJ2RlbGV0ZV8xJ1wiIFtzaXplXT1cIjEuNVwiIGNsYXNzPVwibXIwIGZpbGUtaWNvblwiPjwvbmItaWNvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L25nLWNvbnRhaW5lcj4gLS0+XG5cbiAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4LWFpLWMgZmxleC1mbG93LXdyYXAgZmlsZS1kaXYtY29udGFpbmVyIGN1c3RvbS1zY3JvbGxiYXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1iMTAgbXI1IGQtZmxleC1haS1jXCIgKm5nRm9yPVwibGV0IGQgb2YgZG9jdW1lbnRMaXN0OyBsZXQgaW5kZXggPSBpbmRleFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWxlLW5hbWUtZGl2IGQtZmxleC1haS1jIG1yNVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBqLXByZXZpZXcgY3Vyc29yLXBvaW50ZXJcIiBbaWRdPVwiJ2ltZy1wcmV2aWV3LScraW5kZXhcIj48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICBcbiAgICAgICAgICA8bmItaWNvbiAoY2xpY2spPVwiZGVsZXRlRmlsZShkKVwiIFtpY29uXT1cIidkZWxldGVfMSdcIiBbc2l6ZV09XCIxLjVcIiBjbGFzcz1cIm1yMCBmaWxlLWljb25cIj48L25iLWljb24+XG4gICAgICAgIDwvZGl2PiAgXG4gICAgPC9kaXY+XG5cbiAgICA8YnV0dG9uIChjbGljayk9XCJzZW5kQXR0YWNobWVudHMoKVwiIFtkaXNhYmxlZF09XCIhdGhpcy5kb2N1bWVudExpc3QgfHwgIXRoaXMuZG9jdW1lbnRMaXN0WzBdPy5uYW1lXCIgY2xhc3M9XCJtdDE1IGZ1bGwtd2lkdGggcm91bmRlZCBwcmltYXJ5IGJ0bi1zZW5kXCI+XG4gICAgICAgIHt7dHJhbnNsYXRlLnRyYW5zbGF0ZShzZXJ2aWNlLmxvY2FsZSwgJ0lfRklOSVNIRUQnICkgfX1cbiAgICA8L2J1dHRvbj5cbjwvZGl2PlxuIl19