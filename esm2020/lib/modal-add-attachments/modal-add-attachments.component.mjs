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
ModalAddAttachmentsComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ModalAddAttachmentsComponent, selectors: [["modal-add-attachments"]], decls: 4, vars: 3, consts: [[1, "position-relative", "modal-attachments-content"], ["mat-dialog-close", "", 1, "close-dialog-icon", "close-dialog-icon-15", "bot-icon", 3, "click"], [3, "icon", "size"], [3, "isBot", "files"]], template: function ModalAddAttachmentsComponent_Template(rf, ctx) { if (rf & 1) {
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
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("isBot", true);
    } }, dependencies: [i4.NowboardIconComponent, i5.NgxAttachmentComponent], styles: [".modal-attachments-content[_ngcontent-%COMP%]   .bot-no-anim[_ngcontent-%COMP%]{margin:auto;height:120px;animation:none;-webkit-animation:none}.modal-attachments-content[_ngcontent-%COMP%]   .circle3[_ngcontent-%COMP%]{width:120px;height:120px}.modal-attachments-content[_ngcontent-%COMP%]   .circle2[_ngcontent-%COMP%]{width:90px;height:90px}.modal-attachments-content[_ngcontent-%COMP%]   .circle1[_ngcontent-%COMP%]{width:60px;height:60px}.modal-attachments-content[_ngcontent-%COMP%]   .file-names[_ngcontent-%COMP%]{margin:0!important}.modal-attachments-content[_ngcontent-%COMP%]   .file-names[_ngcontent-%COMP%]   .file-name-div[_ngcontent-%COMP%]{margin-bottom:0;width:auto;max-width:initial}.modal-attachments-content[_ngcontent-%COMP%]   .file-names[_ngcontent-%COMP%]   .file-name-div[_ngcontent-%COMP%]   .file-name[_ngcontent-%COMP%]{width:120px}.file-div-container[_ngcontent-%COMP%]{max-height:20vh;overflow-y:auto}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ModalAddAttachmentsComponent, [{
        type: Component,
        args: [{ selector: 'modal-add-attachments', template: "<div class=\"position-relative modal-attachments-content\">\n\n    <div class=\"close-dialog-icon close-dialog-icon-15 bot-icon\" mat-dialog-close (click)=\"close()\">\n        <nb-icon [icon]=\"'close'\" [size]=\"1\"></nb-icon>\n    </div>\n\n    <!--<div class=\"bot bot-no-anim\">\n        <div class=\"circle1\"></div>\n        <div class=\"circle2\"></div>\n        <div class=\"circle3\"></div>\n    </div>\n\n    <div class=\"mt30 nb-title-l title\">\n        {{ translate.translate(service.locale, 'SEND_ME_YOUR_ATTACHMENTS' ) }}\n    </div>\n\n    <textarea (keyup)=\"clearMessage()\" (paste)=\"onPaste($event)\" [(ngModel)]=\"message\" class=\"nb-text-3 custom-scrollbar multiline full-width\" id=\"textarea\"\n    placeholder=\"{{translate.translate(service.locale, 'COPY_PASTE' )}}\" tabindex=\"1\"></textarea>\n\n    <div *ngIf=\"fileError != ''\" class=\"error\">\n        {{ fileError }}\n    </div>\n\n    <div class=\"mt30 mb15 file\" (click)=\"this.input.click()\">\n        <nb-icon class=\"bot-icon\" [icon]=\"'image'\" [size]=\"1.5\"></nb-icon>\n        <div class=\"nb-text-s file-message\">\n          {{translate.translate(service.locale, 'DROP_PHOTO' ) }}\n        </div>\n        <div class=\"mb10 nb-text-s-1 file-format\">\n          Format .jpeg / .png / .svg\n        </div>\n\n    </div>\n\n    <div class=\"d-flex-ai-c flex-flow-wrap file-div-container custom-scrollbar\">\n        <div class=\"mb10 mr5 d-flex-ai-c\" *ngFor=\"let d of documentList; let index = index\">\n          <div class=\"file-name-div d-flex-ai-c mr5\">\n            <div class=\"pj-preview cursor-pointer\" [id]=\"'img-preview-'+index\"></div>\n          </div>\n    \n          <nb-icon (click)=\"deleteFile(d)\" [icon]=\"'delete_1'\" [size]=\"1.5\" class=\"mr0 file-icon\"></nb-icon>\n        </div>  \n    </div>\n\n    <button (click)=\"sendAttachments()\" [disabled]=\"!this.documentList || !this.documentList[0]?.name\" class=\"mt15 full-width rounded primary btn-send\">\n        {{translate.translate(service.locale, 'I_FINISHED' ) }}\n    </button>-->\n\n    <ngx-attachment [isBot]=\"true\" (files)=\"receiveFiles($event)\"></ngx-attachment>\n</div>\n", styles: [".modal-attachments-content .bot-no-anim{margin:auto;height:120px;animation:none;-webkit-animation:none}.modal-attachments-content .circle3{width:120px;height:120px}.modal-attachments-content .circle2{width:90px;height:90px}.modal-attachments-content .circle1{width:60px;height:60px}.modal-attachments-content .file-names{margin:0!important}.modal-attachments-content .file-names .file-name-div{margin-bottom:0;width:auto;max-width:initial}.modal-attachments-content .file-names .file-name-div .file-name{width:120px}.file-div-container{max-height:20vh;overflow-y:auto}\n"] }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [MAT_DIALOG_DATA]
            }] }, { type: i1.KonversoService }, { type: i2.TranslateService }, { type: i3.MatDialogRef }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtYWRkLWF0dGFjaG1lbnRzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2tvbnZlcnNvL3NyYy9saWIvbW9kYWwtYWRkLWF0dGFjaG1lbnRzL21vZGFsLWFkZC1hdHRhY2htZW50cy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9rb252ZXJzby9zcmMvbGliL21vZGFsLWFkZC1hdHRhY2htZW50cy9tb2RhbC1hZGQtYXR0YWNobWVudHMuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxNQUFNLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFDLGVBQWUsRUFBZSxNQUFNLDBCQUEwQixDQUFDOzs7Ozs7O0FBU3ZFLE1BQU0sT0FBTyw0QkFBNEI7SUFPckMsWUFDb0MsSUFLL0IsRUFDTSxPQUF3QixFQUN4QixTQUE0QixFQUMzQixTQUFxRDtRQVI3QixTQUFJLEdBQUosSUFBSSxDQUtuQztRQUNNLFlBQU8sR0FBUCxPQUFPLENBQWlCO1FBQ3hCLGNBQVMsR0FBVCxTQUFTLENBQW1CO1FBQzNCLGNBQVMsR0FBVCxTQUFTLENBQTRDO1FBZmpFLGlCQUFZLEdBQWUsRUFBRSxDQUFDO1FBRXZCLGdCQUFXLEdBQVEsRUFBRSxDQUFDO1FBQzdCLFlBQU8sR0FBVyxFQUFFLENBQUM7UUFDckIsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNmLHdCQUFtQixHQUFlLEVBQUUsQ0FBQztRQVlqQyxTQUFTLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxDQUFDLGlEQUFpRDtRQUVoRixJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUN2QyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDdEIsTUFB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QWdCLFdBQUE7UUE2Q2IsZUFBYztRQUFkLDRCQUFjOzt1RkR0Q3JCLDRCQUE0QjtjQUx4QyxTQUFTOzJCQUNJLHVCQUF1Qjs7c0JBWTVCLE1BQU07dUJBQUMsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbmplY3QsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01BVF9ESUFMT0dfREFUQSwgTWF0RGlhbG9nUmVmfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xuaW1wb3J0IHtUcmFuc2xhdGVTZXJ2aWNlfSBmcm9tICcuLi90cmFuc2xhdGUuc2VydmljZSc7XG5pbXBvcnQge0tvbnZlcnNvU2VydmljZX0gZnJvbSAnLi4va29udmVyc28uc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbW9kYWwtYWRkLWF0dGFjaG1lbnRzJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vbW9kYWwtYWRkLWF0dGFjaG1lbnRzLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9tb2RhbC1hZGQtYXR0YWNobWVudHMuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBNb2RhbEFkZEF0dGFjaG1lbnRzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBkb2N1bWVudExpc3Q6IEFycmF5PGFueT4gPSBbXTtcbiAgICBwdWJsaWMgaW5wdXQgITogSFRNTElucHV0RWxlbWVudDtcbiAgICBwdWJsaWMgZGlzcGxheVRleHQ6IGFueSA9IHt9O1xuICAgIG1lc3NhZ2U6IHN0cmluZyA9ICcnO1xuICAgIGZpbGVFcnJvciA9ICcnO1xuICAgIGluaXRpYWxEb2N1bWVudExpc3Q6IEFycmF5PGFueT4gPSBbXTtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHB1YmxpYyBkYXRhOiB7XG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgaW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQsXG4gICAgICAgICAgICAgICAgZG9jdW1lbnRMaXN0OiBBcnJheTxhbnk+XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHB1YmxpYyBzZXJ2aWNlOiBLb252ZXJzb1NlcnZpY2UsXG4gICAgICAgIHB1YmxpYyB0cmFuc2xhdGUgOiBUcmFuc2xhdGVTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPE1vZGFsQWRkQXR0YWNobWVudHNDb21wb25lbnQ+XG4gICAgKSB7XG4gICAgICAgIGRpYWxvZ1JlZi5kaXNhYmxlQ2xvc2UgPSB0cnVlOyAvLyBibG9jayB0aGUgY2xvc2Ugd2l0aCBtYWtlIGxvc2UgdGhlIGF0dGFjaG1lbnRzXG5cbiAgICAgICAgdGhpcy5zZXJ2aWNlLmRvY3VtZW50cy5zdWJzY3JpYmUoKGZpbGVzKSA9PiB7XG4gICAgICAgICAgICBmaWxlcy5mb3JFYWNoKGFzeW5jIChmKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSBmaWxlcy5pbmRleE9mKGYpO1xuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuc2V0UHJldmlldyhpbmRleCwgZik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kb2N1bWVudExpc3QgPSB0aGlzLmRhdGEuZGF0YS5kb2N1bWVudExpc3QgfHwgW107XG4gICAgICAgIHRoaXMuaW5wdXQgPSB0aGlzLmRhdGEuZGF0YS5pbnB1dDtcblxuICAgICAgICBpZiAodGhpcy5kb2N1bWVudExpc3QubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5kb2N1bWVudExpc3QuZm9yRWFjaChhc3luYyAoZjogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbml0aWFsRG9jdW1lbnRMaXN0LnB1c2goZik7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5kb2N1bWVudExpc3QucHVzaChmKTtcbiAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuZG9jdW1lbnRMaXN0LmluZGV4T2YoZik7XG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5zZXRQcmV2aWV3KGluZGV4LCBmKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyB0aGlzLmlucHV0Lm9uY2hhbmdlPSAoJGV2ZW50OiBhbnkpID0+IHtcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKCRldmVudCk7XG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyh0aGlzLmRvY3VtZW50TGlzdCk7XG4gICAgICAgIC8vICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIC8vICAgICBBcnJheS5mcm9tKCRldmVudC50YXJnZXQuZmlsZXMpLmZvckVhY2goYXN5bmMgKGY6IGFueSkgPT4ge1xuICAgICAgICAvLyAgICAgICAgIHRoaXMuZG9jdW1lbnRMaXN0LnB1c2goZik7XG4gICAgICAgIC8vICAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5kb2N1bWVudExpc3QuaW5kZXhPZihmKTtcbiAgICAgICAgLy8gICAgICAgICBhd2FpdCB0aGlzLnNldFByZXZpZXcoaW5kZXgsIGYpXG4gICAgICAgIC8vICAgICAgIH0pO1xuICAgICAgICAvLyAgICAgICBjb25zb2xlLmxvZyh0aGlzLmRvY3VtZW50TGlzdCwgJ2FwcmVzIGxlIGZvcmVhY2gnKTtcbiAgICAgICAgLy8gfTtcbiAgICB9XG5cbiAgICByZWNlaXZlRmlsZXMoJGV2ZW50OiBhbnkpIHtcbiAgICAgICAgY29uc29sZS5sb2coJGV2ZW50KTtcbiAgICAgICAgaWYgKCRldmVudCkge1xuICAgICAgICAgICAgJGV2ZW50LmZvckVhY2goYXN5bmMgKGY6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZG9jdW1lbnRMaXN0LnB1c2goZik7XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICB0aGlzLnNlbmRBdHRhY2htZW50cygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgc2V0UHJldmlldyhpbmRleDogbnVtYmVyLCBibG9iOiBhbnkpIHtcbiAgICAgICAgaWYgKFsnaW1hZ2UvanBlZycsICdpbWFnZS9wbmcnLCAnaW1hZ2Uvc3ZnK3htbCddLmluY2x1ZGVzKGJsb2IudHlwZSkpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGltYWdlOiBhbnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW1nLXByZXZpZXctJytpbmRleCk7XG4gICAgICAgICAgICAgICAgaW1hZ2Uuc3R5bGUuYmFja2dyb3VuZCA9ICd1cmwoJyArIFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYikgKyAnKSc7XG4gICAgICAgICAgICAgICAgaW1hZ2Uuc3R5bGUuYmFja2dyb3VuZFNpemUgPSAnY292ZXInO1xuICAgICAgICAgICAgICAgIGltYWdlLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvbiA9ICdjZW50ZXIgY2VudGVyJztcbiAgICAgICAgICAgIH0sIDUwMCk7XG4gICAgICAgIH0gZWxzZSBpZiAoWydhcHBsaWNhdGlvbi9wZGYnLCAnYXBwbGljYXRpb24vdm5kLm9wZW54bWxmb3JtYXRzLW9mZmljZWRvY3VtZW50LnNwcmVhZHNoZWV0bWwuc2hlZXQnLFxuICAgICAgICAgICAgJ2FwcGxpY2F0aW9uL3ZuZC5vcGVueG1sZm9ybWF0cy1vZmZpY2Vkb2N1bWVudC53b3JkcHJvY2Vzc2luZ21sLmRvY3VtZW50J10uaW5jbHVkZXMoYmxvYi50eXBlKSkge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgaW1hZ2U6IGFueSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbWctcHJldmlldy0nK2luZGV4KTtcbiAgICAgICAgICAgICAgICAvLyBpbWFnZS5zdHlsZS5iYWNrZ3JvdW5kID0gJ3VybCgnICsgVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKSArICcpJztcbiAgICAgICAgICAgICAgICAvLyBpbWFnZS5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9ICdjb3Zlcic7XG4gICAgICAgICAgICAgICAgLy8gaW1hZ2Uuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uID0gJ2NlbnRlciBjZW50ZXInO1xuICAgICAgICAgICAgICAgIGltYWdlLmNsYXNzTGlzdC5hZGQoJ2F0dGFjaG1lbnQtbGlzdC1pdGVtLWxlZnQnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBleHQgPSBibG9iLm5hbWUuc3BsaXQoJy4nKS5wb3AoKVxuICAgICAgICAgICAgICAgIGltYWdlLmNsYXNzTGlzdC5hZGQoZXh0KTtcbiAgICAgICAgICAgICAgICBpbWFnZS5jbGFzc0xpc3QuYWRkKCdkLWZsZXgtYycpO1xuICAgICAgICAgICAgICAgIGltYWdlLmlubmVySFRNTCA9ICcuJyArIGV4dC50b1VwcGVyQ2FzZSgpO1xuICAgICAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZG9jdW1lbnRMaXN0LnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICB0aGlzLmZpbGVFcnJvciA9IHRoaXMudHJhbnNsYXRlLnRyYW5zbGF0ZSh0aGlzLnNlcnZpY2UubG9jYWxlLCAnSU5WQUxJRF9GSUxFX0ZPUk1BVCcpO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0YXJlYScpLnZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHRhcmVhJykudmFsdWUucmVwbGFjZShibG9iLm5hbWUsICcnKTtcbiAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2UgPSB0aGlzLm1lc3NhZ2UucmVwbGFjZShibG9iLm5hbWUsICcnKTtcbiAgICAgICAgICAgIH0sIDEwMClcblxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmZpbGVFcnJvciA9ICcnLCAyMDAwKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2xlYXJNZXNzYWdlKCkge1xuICAgICAgICB0aGlzLm1lc3NhZ2UgPSAnJztcbiAgICB9XG5cbiAgICBkZWxldGVGaWxlKGZpbGU6IGFueSkge1xuICAgICAgICB0aGlzLmRvY3VtZW50TGlzdC5zcGxpY2UodGhpcy5kb2N1bWVudExpc3QuaW5kZXhPZihmaWxlKSwgMSk7XG4gICAgfVxuXG4gICAgYXN5bmMgb25QYXN0ZShlOiBhbnkpIHtcbiAgICAgICAgY29uc3QgaXRlbXMgPSAoZS5jbGlwYm9hcmREYXRhIHx8IGUub3JpZ2luYWxFdmVudC5jbGlwYm9hcmREYXRhKS5pdGVtcztcbiAgICAgICAgbGV0IGJsb2I6IGFueTtcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGl0ZW1zKSB7XG4gICAgICAgICAgLy8gaWYgKGl0ZW0udHlwZS5pbmRleE9mKCdpbWFnZScpID09PSAwKSB7XG4gICAgICAgICAgICBpZiAoaXRlbS5raW5kID09ICdmaWxlJykge1xuICAgICAgICAgICAgICAgIGJsb2IgPSBpdGVtLmdldEFzRmlsZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuZG9jdW1lbnRMaXN0LnB1c2goYmxvYik7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmRvY3VtZW50TGlzdC5pbmRleE9mKGJsb2IpO1xuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuc2V0UHJldmlldyhpbmRleCwgYmxvYilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNlbmRBdHRhY2htZW50cygpIHtcbiAgICAgICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UodGhpcy5kb2N1bWVudExpc3QpO1xuICAgIH1cblxuXG4gICAgY2xvc2UoKSB7XG4gICAgICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKHRoaXMuaW5pdGlhbERvY3VtZW50TGlzdCk7XG4gICAgfVxufVxuIiwiPGRpdiBjbGFzcz1cInBvc2l0aW9uLXJlbGF0aXZlIG1vZGFsLWF0dGFjaG1lbnRzLWNvbnRlbnRcIj5cblxuICAgIDxkaXYgY2xhc3M9XCJjbG9zZS1kaWFsb2ctaWNvbiBjbG9zZS1kaWFsb2ctaWNvbi0xNSBib3QtaWNvblwiIG1hdC1kaWFsb2ctY2xvc2UgKGNsaWNrKT1cImNsb3NlKClcIj5cbiAgICAgICAgPG5iLWljb24gW2ljb25dPVwiJ2Nsb3NlJ1wiIFtzaXplXT1cIjFcIj48L25iLWljb24+XG4gICAgPC9kaXY+XG5cbiAgICA8IS0tPGRpdiBjbGFzcz1cImJvdCBib3Qtbm8tYW5pbVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlMVwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlMlwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlM1wiPjwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cIm10MzAgbmItdGl0bGUtbCB0aXRsZVwiPlxuICAgICAgICB7eyB0cmFuc2xhdGUudHJhbnNsYXRlKHNlcnZpY2UubG9jYWxlLCAnU0VORF9NRV9ZT1VSX0FUVEFDSE1FTlRTJyApIH19XG4gICAgPC9kaXY+XG5cbiAgICA8dGV4dGFyZWEgKGtleXVwKT1cImNsZWFyTWVzc2FnZSgpXCIgKHBhc3RlKT1cIm9uUGFzdGUoJGV2ZW50KVwiIFsobmdNb2RlbCldPVwibWVzc2FnZVwiIGNsYXNzPVwibmItdGV4dC0zIGN1c3RvbS1zY3JvbGxiYXIgbXVsdGlsaW5lIGZ1bGwtd2lkdGhcIiBpZD1cInRleHRhcmVhXCJcbiAgICBwbGFjZWhvbGRlcj1cInt7dHJhbnNsYXRlLnRyYW5zbGF0ZShzZXJ2aWNlLmxvY2FsZSwgJ0NPUFlfUEFTVEUnICl9fVwiIHRhYmluZGV4PVwiMVwiPjwvdGV4dGFyZWE+XG5cbiAgICA8ZGl2ICpuZ0lmPVwiZmlsZUVycm9yICE9ICcnXCIgY2xhc3M9XCJlcnJvclwiPlxuICAgICAgICB7eyBmaWxlRXJyb3IgfX1cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJtdDMwIG1iMTUgZmlsZVwiIChjbGljayk9XCJ0aGlzLmlucHV0LmNsaWNrKClcIj5cbiAgICAgICAgPG5iLWljb24gY2xhc3M9XCJib3QtaWNvblwiIFtpY29uXT1cIidpbWFnZSdcIiBbc2l6ZV09XCIxLjVcIj48L25iLWljb24+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJuYi10ZXh0LXMgZmlsZS1tZXNzYWdlXCI+XG4gICAgICAgICAge3t0cmFuc2xhdGUudHJhbnNsYXRlKHNlcnZpY2UubG9jYWxlLCAnRFJPUF9QSE9UTycgKSB9fVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1iMTAgbmItdGV4dC1zLTEgZmlsZS1mb3JtYXRcIj5cbiAgICAgICAgICBGb3JtYXQgLmpwZWcgLyAucG5nIC8gLnN2Z1xuICAgICAgICA8L2Rpdj5cblxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cImQtZmxleC1haS1jIGZsZXgtZmxvdy13cmFwIGZpbGUtZGl2LWNvbnRhaW5lciBjdXN0b20tc2Nyb2xsYmFyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtYjEwIG1yNSBkLWZsZXgtYWktY1wiICpuZ0Zvcj1cImxldCBkIG9mIGRvY3VtZW50TGlzdDsgbGV0IGluZGV4ID0gaW5kZXhcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmlsZS1uYW1lLWRpdiBkLWZsZXgtYWktYyBtcjVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwai1wcmV2aWV3IGN1cnNvci1wb2ludGVyXCIgW2lkXT1cIidpbWctcHJldmlldy0nK2luZGV4XCI+PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgXG4gICAgICAgICAgPG5iLWljb24gKGNsaWNrKT1cImRlbGV0ZUZpbGUoZClcIiBbaWNvbl09XCInZGVsZXRlXzEnXCIgW3NpemVdPVwiMS41XCIgY2xhc3M9XCJtcjAgZmlsZS1pY29uXCI+PC9uYi1pY29uPlxuICAgICAgICA8L2Rpdj4gIFxuICAgIDwvZGl2PlxuXG4gICAgPGJ1dHRvbiAoY2xpY2spPVwic2VuZEF0dGFjaG1lbnRzKClcIiBbZGlzYWJsZWRdPVwiIXRoaXMuZG9jdW1lbnRMaXN0IHx8ICF0aGlzLmRvY3VtZW50TGlzdFswXT8ubmFtZVwiIGNsYXNzPVwibXQxNSBmdWxsLXdpZHRoIHJvdW5kZWQgcHJpbWFyeSBidG4tc2VuZFwiPlxuICAgICAgICB7e3RyYW5zbGF0ZS50cmFuc2xhdGUoc2VydmljZS5sb2NhbGUsICdJX0ZJTklTSEVEJyApIH19XG4gICAgPC9idXR0b24+LS0+XG5cbiAgICA8bmd4LWF0dGFjaG1lbnQgW2lzQm90XT1cInRydWVcIiAoZmlsZXMpPVwicmVjZWl2ZUZpbGVzKCRldmVudClcIj48L25neC1hdHRhY2htZW50PlxuPC9kaXY+XG4iXX0=