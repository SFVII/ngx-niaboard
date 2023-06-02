import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as i0 from "@angular/core";
import * as i1 from "../konverso.service";
import * as i2 from "../translate.service";
import * as i3 from "@angular/material/dialog";
import * as i4 from "nowboard-icon";
import * as i5 from "@nowbrains/ngx-attachment";
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
    receiveFiles($event) {
        console.log($event);
        if ($event) {
            $event.forEach(async (f) => {
                this.documentList.push(f);
            });
            this.sendAttachments();
        }
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
ModalAddAttachmentsComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ModalAddAttachmentsComponent, selectors: [["modal-add-attachments"]], decls: 4, vars: 2, consts: [[1, "position-relative", "modal-attachments-content"], ["mat-dialog-close", "", 1, "close-dialog-icon", "close-dialog-icon-15", "bot-icon", 3, "click"], [3, "icon", "size"], [3, "files"]], template: function ModalAddAttachmentsComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "div", 1);
        i0.ɵɵlistener("click", function ModalAddAttachmentsComponent_Template_div_click_1_listener() { return ctx.close(); });
        i0.ɵɵelement(2, "nb-icon", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "ngx-attachment", 3);
        i0.ɵɵlistener("files", function ModalAddAttachmentsComponent_Template_ngx_attachment_files_3_listener($event) { return ctx.receiveFiles($event); });
        i0.ɵɵelementEnd()();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("icon", "close")("size", 1);
    } }, dependencies: [i4.NowboardIconComponent, i5.NgxAttachmentComponent], styles: [".modal-attachments-content[_ngcontent-%COMP%]   .bot-no-anim[_ngcontent-%COMP%]{margin:auto;height:120px;animation:none;-webkit-animation:none}.modal-attachments-content[_ngcontent-%COMP%]   .circle3[_ngcontent-%COMP%]{width:120px;height:120px}.modal-attachments-content[_ngcontent-%COMP%]   .circle2[_ngcontent-%COMP%]{width:90px;height:90px}.modal-attachments-content[_ngcontent-%COMP%]   .circle1[_ngcontent-%COMP%]{width:60px;height:60px}.modal-attachments-content[_ngcontent-%COMP%]   .file-names[_ngcontent-%COMP%]{margin:0!important}.modal-attachments-content[_ngcontent-%COMP%]   .file-names[_ngcontent-%COMP%]   .file-name-div[_ngcontent-%COMP%]{margin-bottom:0;width:auto;max-width:initial}.modal-attachments-content[_ngcontent-%COMP%]   .file-names[_ngcontent-%COMP%]   .file-name-div[_ngcontent-%COMP%]   .file-name[_ngcontent-%COMP%]{width:120px}.file-div-container[_ngcontent-%COMP%]{max-height:20vh;overflow-y:auto}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ModalAddAttachmentsComponent, [{
        type: Component,
        args: [{ selector: 'modal-add-attachments', template: "<div class=\"position-relative modal-attachments-content\">\n\n    <div class=\"close-dialog-icon close-dialog-icon-15 bot-icon\" mat-dialog-close (click)=\"close()\">\n        <nb-icon [icon]=\"'close'\" [size]=\"1\"></nb-icon>\n    </div>\n\n    <!--<div class=\"bot bot-no-anim\">\n        <div class=\"circle1\"></div>\n        <div class=\"circle2\"></div>\n        <div class=\"circle3\"></div>\n    </div>\n\n    <div class=\"mt30 nb-title-l title\">\n        {{ translate.translate(service.locale, 'SEND_ME_YOUR_ATTACHMENTS' ) }}\n    </div>\n\n    <textarea (keyup)=\"clearMessage()\" (paste)=\"onPaste($event)\" [(ngModel)]=\"message\" class=\"nb-text-3 custom-scrollbar multiline full-width\" id=\"textarea\"\n    placeholder=\"{{translate.translate(service.locale, 'COPY_PASTE' )}}\" tabindex=\"1\"></textarea>\n\n    <div *ngIf=\"fileError != ''\" class=\"error\">\n        {{ fileError }}\n    </div>\n\n    <div class=\"mt30 mb15 file\" (click)=\"this.input.click()\">\n        <nb-icon class=\"bot-icon\" [icon]=\"'image'\" [size]=\"1.5\"></nb-icon>\n        <div class=\"nb-text-s file-message\">\n          {{translate.translate(service.locale, 'DROP_PHOTO' ) }}\n        </div>\n        <div class=\"mb10 nb-text-s-1 file-format\">\n          Format .jpeg / .png / .svg\n        </div>\n\n    </div>\n\n    <div class=\"d-flex-ai-c flex-flow-wrap file-div-container custom-scrollbar\">\n        <div class=\"mb10 mr5 d-flex-ai-c\" *ngFor=\"let d of documentList; let index = index\">\n          <div class=\"file-name-div d-flex-ai-c mr5\">\n            <div class=\"pj-preview cursor-pointer\" [id]=\"'img-preview-'+index\"></div>\n          </div>\n    \n          <nb-icon (click)=\"deleteFile(d)\" [icon]=\"'delete_1'\" [size]=\"1.5\" class=\"mr0 file-icon\"></nb-icon>\n        </div>  \n    </div>\n\n    <button (click)=\"sendAttachments()\" [disabled]=\"!this.documentList || !this.documentList[0]?.name\" class=\"mt15 full-width rounded primary btn-send\">\n        {{translate.translate(service.locale, 'I_FINISHED' ) }}\n    </button>-->\n\n    <ngx-attachment (files)=\"receiveFiles($event)\"></ngx-attachment>\n</div>\n", styles: [".modal-attachments-content .bot-no-anim{margin:auto;height:120px;animation:none;-webkit-animation:none}.modal-attachments-content .circle3{width:120px;height:120px}.modal-attachments-content .circle2{width:90px;height:90px}.modal-attachments-content .circle1{width:60px;height:60px}.modal-attachments-content .file-names{margin:0!important}.modal-attachments-content .file-names .file-name-div{margin-bottom:0;width:auto;max-width:initial}.modal-attachments-content .file-names .file-name-div .file-name{width:120px}.file-div-container{max-height:20vh;overflow-y:auto}\n"] }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [MAT_DIALOG_DATA]
            }] }, { type: i1.KonversoService }, { type: i2.TranslateService }, { type: i3.MatDialogRef }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtYWRkLWF0dGFjaG1lbnRzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2tvbnZlcnNvL3NyYy9saWIvbW9kYWwtYWRkLWF0dGFjaG1lbnRzL21vZGFsLWFkZC1hdHRhY2htZW50cy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9rb252ZXJzby9zcmMvbGliL21vZGFsLWFkZC1hdHRhY2htZW50cy9tb2RhbC1hZGQtYXR0YWNobWVudHMuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxNQUFNLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFDLGVBQWUsRUFBZSxNQUFNLDBCQUEwQixDQUFDOzs7Ozs7O0FBU3ZFLE1BQU0sT0FBTyw0QkFBNEI7SUFPckMsWUFDb0MsSUFLL0IsRUFDTSxPQUF3QixFQUN4QixTQUE0QixFQUMzQixTQUFxRDtRQVI3QixTQUFJLEdBQUosSUFBSSxDQUtuQztRQUNNLFlBQU8sR0FBUCxPQUFPLENBQWlCO1FBQ3hCLGNBQVMsR0FBVCxTQUFTLENBQW1CO1FBQzNCLGNBQVMsR0FBVCxTQUFTLENBQTRDO1FBZmpFLGlCQUFZLEdBQWUsRUFBRSxDQUFDO1FBRXZCLGdCQUFXLEdBQVEsRUFBRSxDQUFDO1FBQzdCLFlBQU8sR0FBVyxFQUFFLENBQUM7UUFDckIsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNmLHdCQUFtQixHQUFlLEVBQUUsQ0FBQztRQVlqQyxTQUFTLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxDQUFDLGlEQUFpRDtRQUVoRixJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUN2QyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDdEIsTUFB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QWdCLFdBQUE7O3VGRE9wQiw0QkFBNEI7Y0FMeEMsU0FBUzsyQkFDSSx1QkFBdUI7O3NCQVk1QixNQUFNO3VCQUFDLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5qZWN0LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNQVRfRElBTE9HX0RBVEEsIE1hdERpYWxvZ1JlZn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcbmltcG9ydCB7VHJhbnNsYXRlU2VydmljZX0gZnJvbSAnLi4vdHJhbnNsYXRlLnNlcnZpY2UnO1xuaW1wb3J0IHtLb252ZXJzb1NlcnZpY2V9IGZyb20gJy4uL2tvbnZlcnNvLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ21vZGFsLWFkZC1hdHRhY2htZW50cycsXG4gICAgdGVtcGxhdGVVcmw6ICcuL21vZGFsLWFkZC1hdHRhY2htZW50cy5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vbW9kYWwtYWRkLWF0dGFjaG1lbnRzLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTW9kYWxBZGRBdHRhY2htZW50c0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgZG9jdW1lbnRMaXN0OiBBcnJheTxhbnk+ID0gW107XG4gICAgcHVibGljIGlucHV0ICE6IEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgcHVibGljIGRpc3BsYXlUZXh0OiBhbnkgPSB7fTtcbiAgICBtZXNzYWdlOiBzdHJpbmcgPSAnJztcbiAgICBmaWxlRXJyb3IgPSAnJztcbiAgICBpbml0aWFsRG9jdW1lbnRMaXN0OiBBcnJheTxhbnk+ID0gW107XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwdWJsaWMgZGF0YToge1xuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIGlucHV0OiBIVE1MSW5wdXRFbGVtZW50LFxuICAgICAgICAgICAgICAgIGRvY3VtZW50TGlzdDogQXJyYXk8YW55PlxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBwdWJsaWMgc2VydmljZTogS29udmVyc29TZXJ2aWNlLFxuICAgICAgICBwdWJsaWMgdHJhbnNsYXRlIDogVHJhbnNsYXRlU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxNb2RhbEFkZEF0dGFjaG1lbnRzQ29tcG9uZW50PlxuICAgICkge1xuICAgICAgICBkaWFsb2dSZWYuZGlzYWJsZUNsb3NlID0gdHJ1ZTsgLy8gYmxvY2sgdGhlIGNsb3NlIHdpdGggbWFrZSBsb3NlIHRoZSBhdHRhY2htZW50c1xuXG4gICAgICAgIHRoaXMuc2VydmljZS5kb2N1bWVudHMuc3Vic2NyaWJlKChmaWxlcykgPT4ge1xuICAgICAgICAgICAgZmlsZXMuZm9yRWFjaChhc3luYyAoZikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gZmlsZXMuaW5kZXhPZihmKTtcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnNldFByZXZpZXcoaW5kZXgsIGYpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZG9jdW1lbnRMaXN0ID0gdGhpcy5kYXRhLmRhdGEuZG9jdW1lbnRMaXN0IHx8IFtdO1xuICAgICAgICB0aGlzLmlucHV0ID0gdGhpcy5kYXRhLmRhdGEuaW5wdXQ7XG5cbiAgICAgICAgaWYgKHRoaXMuZG9jdW1lbnRMaXN0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuZG9jdW1lbnRMaXN0LmZvckVhY2goYXN5bmMgKGY6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaW5pdGlhbERvY3VtZW50TGlzdC5wdXNoKGYpO1xuICAgICAgICAgICAgICAgIC8vIHRoaXMuZG9jdW1lbnRMaXN0LnB1c2goZik7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmRvY3VtZW50TGlzdC5pbmRleE9mKGYpO1xuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuc2V0UHJldmlldyhpbmRleCwgZilcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gdGhpcy5pbnB1dC5vbmNoYW5nZT0gKCRldmVudDogYW55KSA9PiB7XG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZygkZXZlbnQpO1xuICAgICAgICAvLyAgICAgY29uc29sZS5sb2codGhpcy5kb2N1bWVudExpc3QpO1xuICAgICAgICAvLyAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAvLyAgICAgQXJyYXkuZnJvbSgkZXZlbnQudGFyZ2V0LmZpbGVzKS5mb3JFYWNoKGFzeW5jIChmOiBhbnkpID0+IHtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmRvY3VtZW50TGlzdC5wdXNoKGYpO1xuICAgICAgICAvLyAgICAgICAgIGxldCBpbmRleCA9IHRoaXMuZG9jdW1lbnRMaXN0LmluZGV4T2YoZik7XG4gICAgICAgIC8vICAgICAgICAgYXdhaXQgdGhpcy5zZXRQcmV2aWV3KGluZGV4LCBmKVxuICAgICAgICAvLyAgICAgICB9KTtcbiAgICAgICAgLy8gICAgICAgY29uc29sZS5sb2codGhpcy5kb2N1bWVudExpc3QsICdhcHJlcyBsZSBmb3JlYWNoJyk7XG4gICAgICAgIC8vIH07XG4gICAgfVxuXG4gICAgcmVjZWl2ZUZpbGVzKCRldmVudDogYW55KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCRldmVudCk7XG4gICAgICAgIGlmICgkZXZlbnQpIHtcbiAgICAgICAgICAgICRldmVudC5mb3JFYWNoKGFzeW5jIChmOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmRvY3VtZW50TGlzdC5wdXNoKGYpO1xuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgdGhpcy5zZW5kQXR0YWNobWVudHMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIHNldFByZXZpZXcoaW5kZXg6IG51bWJlciwgYmxvYjogYW55KSB7XG4gICAgICAgIGlmIChbJ2ltYWdlL2pwZWcnLCAnaW1hZ2UvcG5nJywgJ2ltYWdlL3N2Zyt4bWwnXS5pbmNsdWRlcyhibG9iLnR5cGUpKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBpbWFnZTogYW55ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ltZy1wcmV2aWV3LScraW5kZXgpO1xuICAgICAgICAgICAgICAgIGltYWdlLnN0eWxlLmJhY2tncm91bmQgPSAndXJsKCcgKyBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpICsgJyknO1xuICAgICAgICAgICAgICAgIGltYWdlLnN0eWxlLmJhY2tncm91bmRTaXplID0gJ2NvdmVyJztcbiAgICAgICAgICAgICAgICBpbWFnZS5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb24gPSAnY2VudGVyIGNlbnRlcic7XG4gICAgICAgICAgICB9LCA1MDApO1xuICAgICAgICB9IGVsc2UgaWYgKFsnYXBwbGljYXRpb24vcGRmJywgJ2FwcGxpY2F0aW9uL3ZuZC5vcGVueG1sZm9ybWF0cy1vZmZpY2Vkb2N1bWVudC5zcHJlYWRzaGVldG1sLnNoZWV0JyxcbiAgICAgICAgICAgICdhcHBsaWNhdGlvbi92bmQub3BlbnhtbGZvcm1hdHMtb2ZmaWNlZG9jdW1lbnQud29yZHByb2Nlc3NpbmdtbC5kb2N1bWVudCddLmluY2x1ZGVzKGJsb2IudHlwZSkpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGltYWdlOiBhbnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW1nLXByZXZpZXctJytpbmRleCk7XG4gICAgICAgICAgICAgICAgLy8gaW1hZ2Uuc3R5bGUuYmFja2dyb3VuZCA9ICd1cmwoJyArIFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYikgKyAnKSc7XG4gICAgICAgICAgICAgICAgLy8gaW1hZ2Uuc3R5bGUuYmFja2dyb3VuZFNpemUgPSAnY292ZXInO1xuICAgICAgICAgICAgICAgIC8vIGltYWdlLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvbiA9ICdjZW50ZXIgY2VudGVyJztcbiAgICAgICAgICAgICAgICBpbWFnZS5jbGFzc0xpc3QuYWRkKCdhdHRhY2htZW50LWxpc3QtaXRlbS1sZWZ0Jyk7XG4gICAgICAgICAgICAgICAgY29uc3QgZXh0ID0gYmxvYi5uYW1lLnNwbGl0KCcuJykucG9wKClcbiAgICAgICAgICAgICAgICBpbWFnZS5jbGFzc0xpc3QuYWRkKGV4dCk7XG4gICAgICAgICAgICAgICAgaW1hZ2UuY2xhc3NMaXN0LmFkZCgnZC1mbGV4LWMnKTtcbiAgICAgICAgICAgICAgICBpbWFnZS5pbm5lckhUTUwgPSAnLicgKyBleHQudG9VcHBlckNhc2UoKTtcbiAgICAgICAgICAgIH0sIDUwMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmRvY3VtZW50TGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgdGhpcy5maWxlRXJyb3IgPSB0aGlzLnRyYW5zbGF0ZS50cmFuc2xhdGUodGhpcy5zZXJ2aWNlLmxvY2FsZSwgJ0lOVkFMSURfRklMRV9GT1JNQVQnKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dGFyZWEnKS52YWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0YXJlYScpLnZhbHVlLnJlcGxhY2UoYmxvYi5uYW1lLCAnJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlID0gdGhpcy5tZXNzYWdlLnJlcGxhY2UoYmxvYi5uYW1lLCAnJyk7XG4gICAgICAgICAgICB9LCAxMDApXG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5maWxlRXJyb3IgPSAnJywgMjAwMClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNsZWFyTWVzc2FnZSgpIHtcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gJyc7XG4gICAgfVxuXG4gICAgZGVsZXRlRmlsZShmaWxlOiBhbnkpIHtcbiAgICAgICAgdGhpcy5kb2N1bWVudExpc3Quc3BsaWNlKHRoaXMuZG9jdW1lbnRMaXN0LmluZGV4T2YoZmlsZSksIDEpO1xuICAgIH1cblxuICAgIGFzeW5jIG9uUGFzdGUoZTogYW55KSB7XG4gICAgICAgIGNvbnN0IGl0ZW1zID0gKGUuY2xpcGJvYXJkRGF0YSB8fCBlLm9yaWdpbmFsRXZlbnQuY2xpcGJvYXJkRGF0YSkuaXRlbXM7XG4gICAgICAgIGxldCBibG9iOiBhbnk7XG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBpdGVtcykge1xuICAgICAgICAgIC8vIGlmIChpdGVtLnR5cGUuaW5kZXhPZignaW1hZ2UnKSA9PT0gMCkge1xuICAgICAgICAgICAgaWYgKGl0ZW0ua2luZCA9PSAnZmlsZScpIHtcbiAgICAgICAgICAgICAgICBibG9iID0gaXRlbS5nZXRBc0ZpbGUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRvY3VtZW50TGlzdC5wdXNoKGJsb2IpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5kb2N1bWVudExpc3QuaW5kZXhPZihibG9iKTtcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnNldFByZXZpZXcoaW5kZXgsIGJsb2IpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZW5kQXR0YWNobWVudHMoKSB7XG4gICAgICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKHRoaXMuZG9jdW1lbnRMaXN0KTtcbiAgICB9XG5cblxuICAgIGNsb3NlKCkge1xuICAgICAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSh0aGlzLmluaXRpYWxEb2N1bWVudExpc3QpO1xuICAgIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJwb3NpdGlvbi1yZWxhdGl2ZSBtb2RhbC1hdHRhY2htZW50cy1jb250ZW50XCI+XG5cbiAgICA8ZGl2IGNsYXNzPVwiY2xvc2UtZGlhbG9nLWljb24gY2xvc2UtZGlhbG9nLWljb24tMTUgYm90LWljb25cIiBtYXQtZGlhbG9nLWNsb3NlIChjbGljayk9XCJjbG9zZSgpXCI+XG4gICAgICAgIDxuYi1pY29uIFtpY29uXT1cIidjbG9zZSdcIiBbc2l6ZV09XCIxXCI+PC9uYi1pY29uPlxuICAgIDwvZGl2PlxuXG4gICAgPCEtLTxkaXYgY2xhc3M9XCJib3QgYm90LW5vLWFuaW1cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZTFcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZTJcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZTNcIj48L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJtdDMwIG5iLXRpdGxlLWwgdGl0bGVcIj5cbiAgICAgICAge3sgdHJhbnNsYXRlLnRyYW5zbGF0ZShzZXJ2aWNlLmxvY2FsZSwgJ1NFTkRfTUVfWU9VUl9BVFRBQ0hNRU5UUycgKSB9fVxuICAgIDwvZGl2PlxuXG4gICAgPHRleHRhcmVhIChrZXl1cCk9XCJjbGVhck1lc3NhZ2UoKVwiIChwYXN0ZSk9XCJvblBhc3RlKCRldmVudClcIiBbKG5nTW9kZWwpXT1cIm1lc3NhZ2VcIiBjbGFzcz1cIm5iLXRleHQtMyBjdXN0b20tc2Nyb2xsYmFyIG11bHRpbGluZSBmdWxsLXdpZHRoXCIgaWQ9XCJ0ZXh0YXJlYVwiXG4gICAgcGxhY2Vob2xkZXI9XCJ7e3RyYW5zbGF0ZS50cmFuc2xhdGUoc2VydmljZS5sb2NhbGUsICdDT1BZX1BBU1RFJyApfX1cIiB0YWJpbmRleD1cIjFcIj48L3RleHRhcmVhPlxuXG4gICAgPGRpdiAqbmdJZj1cImZpbGVFcnJvciAhPSAnJ1wiIGNsYXNzPVwiZXJyb3JcIj5cbiAgICAgICAge3sgZmlsZUVycm9yIH19XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwibXQzMCBtYjE1IGZpbGVcIiAoY2xpY2spPVwidGhpcy5pbnB1dC5jbGljaygpXCI+XG4gICAgICAgIDxuYi1pY29uIGNsYXNzPVwiYm90LWljb25cIiBbaWNvbl09XCInaW1hZ2UnXCIgW3NpemVdPVwiMS41XCI+PC9uYi1pY29uPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibmItdGV4dC1zIGZpbGUtbWVzc2FnZVwiPlxuICAgICAgICAgIHt7dHJhbnNsYXRlLnRyYW5zbGF0ZShzZXJ2aWNlLmxvY2FsZSwgJ0RST1BfUEhPVE8nICkgfX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtYjEwIG5iLXRleHQtcy0xIGZpbGUtZm9ybWF0XCI+XG4gICAgICAgICAgRm9ybWF0IC5qcGVnIC8gLnBuZyAvIC5zdmdcbiAgICAgICAgPC9kaXY+XG5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJkLWZsZXgtYWktYyBmbGV4LWZsb3ctd3JhcCBmaWxlLWRpdi1jb250YWluZXIgY3VzdG9tLXNjcm9sbGJhclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibWIxMCBtcjUgZC1mbGV4LWFpLWNcIiAqbmdGb3I9XCJsZXQgZCBvZiBkb2N1bWVudExpc3Q7IGxldCBpbmRleCA9IGluZGV4XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZpbGUtbmFtZS1kaXYgZC1mbGV4LWFpLWMgbXI1XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGotcHJldmlldyBjdXJzb3ItcG9pbnRlclwiIFtpZF09XCInaW1nLXByZXZpZXctJytpbmRleFwiPjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgIFxuICAgICAgICAgIDxuYi1pY29uIChjbGljayk9XCJkZWxldGVGaWxlKGQpXCIgW2ljb25dPVwiJ2RlbGV0ZV8xJ1wiIFtzaXplXT1cIjEuNVwiIGNsYXNzPVwibXIwIGZpbGUtaWNvblwiPjwvbmItaWNvbj5cbiAgICAgICAgPC9kaXY+ICBcbiAgICA8L2Rpdj5cblxuICAgIDxidXR0b24gKGNsaWNrKT1cInNlbmRBdHRhY2htZW50cygpXCIgW2Rpc2FibGVkXT1cIiF0aGlzLmRvY3VtZW50TGlzdCB8fCAhdGhpcy5kb2N1bWVudExpc3RbMF0/Lm5hbWVcIiBjbGFzcz1cIm10MTUgZnVsbC13aWR0aCByb3VuZGVkIHByaW1hcnkgYnRuLXNlbmRcIj5cbiAgICAgICAge3t0cmFuc2xhdGUudHJhbnNsYXRlKHNlcnZpY2UubG9jYWxlLCAnSV9GSU5JU0hFRCcgKSB9fVxuICAgIDwvYnV0dG9uPi0tPlxuXG4gICAgPG5neC1hdHRhY2htZW50IChmaWxlcyk9XCJyZWNlaXZlRmlsZXMoJGV2ZW50KVwiPjwvbmd4LWF0dGFjaG1lbnQ+XG48L2Rpdj5cbiJdfQ==