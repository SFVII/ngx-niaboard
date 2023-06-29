import { NgModule, Optional, SkipSelf } from '@angular/core';
import { KonversoComponent } from './konverso.component';
import { KonversoService } from './konverso.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DesktopFullScreenComponent } from './desktop-full-screen/desktop-full-screen.component';
import { CommonModule } from '@angular/common';
import { FirstVisitComponent } from './first-visit/first-visit.component';
import { SafeHtmlPipe } from './pipe/safe-html.pipe';
import { NowboardIconModule, NowboardIconService } from 'nowboard-icon';
import { CustomCheckboxCalendarComponent } from './custom-checkbox-calendar/custom-checkbox-calendar.component';
import { ModalAddAttachmentsComponent } from './modal-add-attachments/modal-add-attachments.component';
import { NgxAttachmentModule, NgxAttachmentService } from '@nowbrains/ngx-attachment';
import * as i0 from "@angular/core";
import * as i1 from "nowboard-icon";
import * as i2 from "@nowbrains/ngx-attachment";
// @ts-ignore
export class KonversoModule {
    constructor(parentModule) {
        if (parentModule) {
            throw new Error('KonversoModule is already loaded. Import it in the AppModule only');
        }
    }
    static forRoot(config) {
        return {
            ngModule: KonversoModule,
            providers: [
                { provide: '__NgxKonverso__', useValue: config },
                KonversoService
            ]
        };
    }
}
KonversoModule.ɵfac = function KonversoModule_Factory(t) { return new (t || KonversoModule)(i0.ɵɵinject(KonversoModule, 12)); };
KonversoModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: KonversoModule });
KonversoModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [
        KonversoService,
        NowboardIconService,
        NgxAttachmentService
    ], imports: [FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        CommonModule,
        NowboardIconModule.forRoot({
            disabled_color: '#5E7290',
            primary: '#001B66'
        }),
        NgxAttachmentModule.forRoot({
            lang: 'fr',
            endpoint: '',
            auth: true
        }), NowboardIconModule,
        NgxAttachmentModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(KonversoModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    KonversoComponent,
                    DesktopFullScreenComponent,
                    FirstVisitComponent,
                    SafeHtmlPipe,
                    CustomCheckboxCalendarComponent,
                    ModalAddAttachmentsComponent,
                ],
                imports: [
                    FormsModule,
                    ReactiveFormsModule,
                    HttpClientModule,
                    CommonModule,
                    NowboardIconModule.forRoot({
                        disabled_color: '#5E7290',
                        primary: '#001B66'
                    }),
                    NgxAttachmentModule.forRoot({
                        lang: 'fr',
                        endpoint: '',
                        auth: true
                    })
                ],
                providers: [
                    KonversoService,
                    NowboardIconService,
                    NgxAttachmentService
                ],
                exports: [
                    KonversoComponent,
                    NowboardIconModule,
                    NgxAttachmentModule
                ]
            }]
    }], function () { return [{ type: KonversoModule, decorators: [{
                type: Optional
            }, {
                type: SkipSelf
            }] }]; }, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(KonversoModule, { declarations: [KonversoComponent,
        DesktopFullScreenComponent,
        FirstVisitComponent,
        SafeHtmlPipe,
        CustomCheckboxCalendarComponent,
        ModalAddAttachmentsComponent], imports: [FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        CommonModule, i1.NowboardIconModule, i2.NgxAttachmentModule], exports: [KonversoComponent,
        NowboardIconModule,
        NgxAttachmentModule] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia29udmVyc28ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMva29udmVyc28vc3JjL2xpYi9rb252ZXJzby5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFzQixRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNoRixPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUV2RCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sb0JBQW9CLENBQUM7QUFDbkQsT0FBTyxFQUFDLFdBQVcsRUFBRSxtQkFBbUIsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ2hFLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQ3RELE9BQU8sRUFBQywwQkFBMEIsRUFBQyxNQUFNLHFEQUFxRCxDQUFDO0FBQy9GLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSxxQ0FBcUMsQ0FBQztBQUN4RSxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDbkQsT0FBTyxFQUFDLGtCQUFrQixFQUFFLG1CQUFtQixFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3RFLE9BQU8sRUFBQywrQkFBK0IsRUFBQyxNQUFNLCtEQUErRCxDQUFDO0FBQzlHLE9BQU8sRUFBQyw0QkFBNEIsRUFBQyxNQUFNLHlEQUF5RCxDQUFDO0FBQ3JHLE9BQU8sRUFBQyxtQkFBbUIsRUFBRSxvQkFBb0IsRUFBQyxNQUFNLDJCQUEyQixDQUFDOzs7O0FBR3BGLGFBQWE7QUFvQ2IsTUFBTSxPQUFPLGNBQWM7SUFDekIsWUFBb0MsWUFBNkI7UUFDL0QsSUFBSSxZQUFZLEVBQUU7WUFDaEIsTUFBTSxJQUFJLEtBQUssQ0FDYixtRUFBbUUsQ0FBQyxDQUFDO1NBQ3hFO0lBQ0gsQ0FBQztJQUVNLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBeUI7UUFDN0MsT0FBTztZQUNMLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFNBQVMsRUFBRTtnQkFDVCxFQUFDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFDO2dCQUM5QyxlQUFlO2FBQ2hCO1NBQ0YsQ0FBQztJQUNKLENBQUM7OzRFQWhCVSxjQUFjO2dFQUFkLGNBQWM7cUVBWGI7UUFDUixlQUFlO1FBQ2YsbUJBQW1CO1FBQ25CLG9CQUFvQjtLQUN2QixZQWxCQyxXQUFXO1FBQ1gsbUJBQW1CO1FBQ25CLGdCQUFnQjtRQUNoQixZQUFZO1FBQ1osa0JBQWtCLENBQUMsT0FBTyxDQUFDO1lBQ3pCLGNBQWMsRUFBRSxTQUFTO1lBQ3pCLE9BQU8sRUFBRSxTQUFTO1NBQ25CLENBQUM7UUFDRixtQkFBbUIsQ0FBQyxPQUFPLENBQUM7WUFDMUIsSUFBSSxFQUFFLElBQUk7WUFDVixRQUFRLEVBQUUsRUFBRTtZQUNaLElBQUksRUFBRSxJQUFJO1NBQ1gsQ0FBQyxFQVNBLGtCQUFrQjtRQUNsQixtQkFBbUI7dUZBR1osY0FBYztjQW5DMUIsUUFBUTtlQUFDO2dCQUNSLFlBQVksRUFBRTtvQkFDVixpQkFBaUI7b0JBQ2pCLDBCQUEwQjtvQkFDMUIsbUJBQW1CO29CQUNuQixZQUFZO29CQUNaLCtCQUErQjtvQkFDL0IsNEJBQTRCO2lCQUMvQjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsV0FBVztvQkFDWCxtQkFBbUI7b0JBQ25CLGdCQUFnQjtvQkFDaEIsWUFBWTtvQkFDWixrQkFBa0IsQ0FBQyxPQUFPLENBQUM7d0JBQ3pCLGNBQWMsRUFBRSxTQUFTO3dCQUN6QixPQUFPLEVBQUUsU0FBUztxQkFDbkIsQ0FBQztvQkFDRixtQkFBbUIsQ0FBQyxPQUFPLENBQUM7d0JBQzFCLElBQUksRUFBRSxJQUFJO3dCQUNWLFFBQVEsRUFBRSxFQUFFO3dCQUNaLElBQUksRUFBRSxJQUFJO3FCQUNYLENBQUM7aUJBQ0g7Z0JBQ0QsU0FBUyxFQUFHO29CQUNSLGVBQWU7b0JBQ2YsbUJBQW1CO29CQUNuQixvQkFBb0I7aUJBQ3ZCO2dCQUNELE9BQU8sRUFBRTtvQkFDTCxpQkFBaUI7b0JBQ2pCLGtCQUFrQjtvQkFDbEIsbUJBQW1CO2lCQUN0QjthQUNGOztzQkFFYyxRQUFROztzQkFBSSxRQUFROzt3RkFEdEIsY0FBYyxtQkFqQ3JCLGlCQUFpQjtRQUNqQiwwQkFBMEI7UUFDMUIsbUJBQW1CO1FBQ25CLFlBQVk7UUFDWiwrQkFBK0I7UUFDL0IsNEJBQTRCLGFBRzlCLFdBQVc7UUFDWCxtQkFBbUI7UUFDbkIsZ0JBQWdCO1FBQ2hCLFlBQVksNERBaUJWLGlCQUFpQjtRQUNqQixrQkFBa0I7UUFDbEIsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSwgT3B0aW9uYWwsIFNraXBTZWxmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7S29udmVyc29Db21wb25lbnR9IGZyb20gJy4va29udmVyc28uY29tcG9uZW50JztcbmltcG9ydCB7S29udmVyc29JbnRlcmZhY2V9IGZyb20gJy4uL2ludGVyZmFjZS9Lb252ZXJzb0ludGVyZmFjZSc7XG5pbXBvcnQge0tvbnZlcnNvU2VydmljZX0gZnJvbSAnLi9rb252ZXJzby5zZXJ2aWNlJztcbmltcG9ydCB7Rm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7SHR0cENsaWVudE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHtEZXNrdG9wRnVsbFNjcmVlbkNvbXBvbmVudH0gZnJvbSAnLi9kZXNrdG9wLWZ1bGwtc2NyZWVuL2Rlc2t0b3AtZnVsbC1zY3JlZW4uY29tcG9uZW50JztcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtGaXJzdFZpc2l0Q29tcG9uZW50fSBmcm9tICcuL2ZpcnN0LXZpc2l0L2ZpcnN0LXZpc2l0LmNvbXBvbmVudCc7XG5pbXBvcnQge1NhZmVIdG1sUGlwZX0gZnJvbSAnLi9waXBlL3NhZmUtaHRtbC5waXBlJztcbmltcG9ydCB7Tm93Ym9hcmRJY29uTW9kdWxlLCBOb3dib2FyZEljb25TZXJ2aWNlfSBmcm9tICdub3dib2FyZC1pY29uJztcbmltcG9ydCB7Q3VzdG9tQ2hlY2tib3hDYWxlbmRhckNvbXBvbmVudH0gZnJvbSAnLi9jdXN0b20tY2hlY2tib3gtY2FsZW5kYXIvY3VzdG9tLWNoZWNrYm94LWNhbGVuZGFyLmNvbXBvbmVudCc7XG5pbXBvcnQge01vZGFsQWRkQXR0YWNobWVudHNDb21wb25lbnR9IGZyb20gJy4vbW9kYWwtYWRkLWF0dGFjaG1lbnRzL21vZGFsLWFkZC1hdHRhY2htZW50cy5jb21wb25lbnQnO1xuaW1wb3J0IHtOZ3hBdHRhY2htZW50TW9kdWxlLCBOZ3hBdHRhY2htZW50U2VydmljZX0gZnJvbSAnQG5vd2JyYWlucy9uZ3gtYXR0YWNobWVudCc7XG5cblxuLy8gQHRzLWlnbm9yZVxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgICBLb252ZXJzb0NvbXBvbmVudCxcbiAgICAgIERlc2t0b3BGdWxsU2NyZWVuQ29tcG9uZW50LFxuICAgICAgRmlyc3RWaXNpdENvbXBvbmVudCxcbiAgICAgIFNhZmVIdG1sUGlwZSxcbiAgICAgIEN1c3RvbUNoZWNrYm94Q2FsZW5kYXJDb21wb25lbnQsXG4gICAgICBNb2RhbEFkZEF0dGFjaG1lbnRzQ29tcG9uZW50LFxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxuICAgIENvbW1vbk1vZHVsZSxcbiAgICBOb3dib2FyZEljb25Nb2R1bGUuZm9yUm9vdCh7IC8vIGxpZ2h0IHRoZW1lIGNvbG9yXG4gICAgICBkaXNhYmxlZF9jb2xvcjogJyM1RTcyOTAnLFxuICAgICAgcHJpbWFyeTogJyMwMDFCNjYnXG4gICAgfSksXG4gICAgTmd4QXR0YWNobWVudE1vZHVsZS5mb3JSb290KHtcbiAgICAgIGxhbmc6ICdmcicsXG4gICAgICBlbmRwb2ludDogJycsXG4gICAgICBhdXRoOiB0cnVlXG4gICAgfSlcbiAgXSxcbiAgcHJvdmlkZXJzIDogW1xuICAgICAgS29udmVyc29TZXJ2aWNlLFxuICAgICAgTm93Ym9hcmRJY29uU2VydmljZSxcbiAgICAgIE5neEF0dGFjaG1lbnRTZXJ2aWNlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICAgIEtvbnZlcnNvQ29tcG9uZW50LFxuICAgICAgTm93Ym9hcmRJY29uTW9kdWxlLFxuICAgICAgTmd4QXR0YWNobWVudE1vZHVsZVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEtvbnZlcnNvTW9kdWxlIHtcbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcGFyZW50TW9kdWxlPzogS29udmVyc29Nb2R1bGUpIHtcbiAgICBpZiAocGFyZW50TW9kdWxlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdLb252ZXJzb01vZHVsZSBpcyBhbHJlYWR5IGxvYWRlZC4gSW1wb3J0IGl0IGluIHRoZSBBcHBNb2R1bGUgb25seScpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZm9yUm9vdChjb25maWc6IEtvbnZlcnNvSW50ZXJmYWNlKTogTW9kdWxlV2l0aFByb3ZpZGVyczxLb252ZXJzb01vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogS29udmVyc29Nb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge3Byb3ZpZGU6ICdfX05neEtvbnZlcnNvX18nLCB1c2VWYWx1ZTogY29uZmlnfSxcbiAgICAgICAgS29udmVyc29TZXJ2aWNlXG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuIl19