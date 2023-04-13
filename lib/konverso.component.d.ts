import { EventEmitter, OnInit } from '@angular/core';
import { KonversoService } from './konverso.service';
import { ColorSet, DefaultAssets, OpenChatBotResponse, UserInput } from '../interface/KonversoInterface';
import { MatDialog } from '@angular/material/dialog';
import * as i0 from "@angular/core";
export declare class KonversoComponent implements OnInit {
    private service;
    private dialog;
    _ready: EventEmitter<boolean>;
    ready: EventEmitter<boolean>;
    sended: EventEmitter<boolean>;
    sendCalendar: EventEmitter<any>;
    files: EventEmitter<Array<any>>;
    showInput: boolean;
    afterProcess: boolean;
    fileNb: number;
    fileInput: HTMLInputElement;
    step: number;
    stepChange: EventEmitter<number>;
    documentList: Array<any>;
    query: string;
    isMobile: boolean;
    assets: DefaultAssets;
    firstVisit: boolean;
    firstUsageStory: string[];
    AssistantMode: boolean;
    colorSet: ColorSet;
    History: (UserInput | OpenChatBotResponse)[];
    disableUserInput: boolean;
    LastUserInput: UserInput;
    private _lastBotAnswer;
    PlaceHolder: string[];
    NumberPlaceHolder: string[];
    Welcome: string;
    input: HTMLInputElement;
    constructor(service: KonversoService, dialog: MatDialog);
    ngOnInit(): void;
    handleSendCalendar($event: any): void;
    send($event: UserInput): Promise<boolean>;
    get LastBotAnswer(): OpenChatBotResponse;
    sendBotCommand($event: string, push?: boolean): Promise<void>;
    private catchStep;
    onFileSelected(event: any): void;
    addFiles(): void;
    private triggerKbotResponse;
    private _isMobile;
    addNewFiles(event: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<KonversoComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<KonversoComponent, "ngx-konverso", never, { "showInput": "showInput"; "afterProcess": "afterProcess"; "fileNb": "fileNb"; "fileInput": "fileInput"; "step": "step"; }, { "ready": "ready"; "sended": "sended"; "sendCalendar": "sendCalendar"; "files": "files"; "stepChange": "stepChange"; }, never, never, false>;
}
