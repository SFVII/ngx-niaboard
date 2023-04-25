import { OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { TranslateService } from '../translate.service';
import { KonversoService } from '../konverso.service';
import * as i0 from "@angular/core";
export declare class ModalAddAttachmentsComponent implements OnInit {
    data: {
        data: {
            input: HTMLInputElement;
            documentList: Array<any>;
        };
    };
    service: KonversoService;
    translate: TranslateService;
    private dialogRef;
    documentList: Array<any>;
    input: HTMLInputElement;
    displayText: any;
    message: string;
    fileError: string;
    initialDocumentList: Array<any>;
    constructor(data: {
        data: {
            input: HTMLInputElement;
            documentList: Array<any>;
        };
    }, service: KonversoService, translate: TranslateService, dialogRef: MatDialogRef<ModalAddAttachmentsComponent>);
    ngOnInit(): void;
    setPreview(index: number, blob: any): Promise<void>;
    clearMessage(): void;
    deleteFile(file: any): void;
    onPaste(e: any): Promise<void>;
    sendAttachments(): void;
    close(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ModalAddAttachmentsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ModalAddAttachmentsComponent, "modal-add-attachments", never, {}, {}, never, never, false>;
}
