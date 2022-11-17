import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { FadeSlideInOut, FadeSlideInOutKonversoOpacityOut, FadeSlideInOutKonversoTranslateOut, FadeSlideInOutKonversoHeight } from 'ngx-nowbrains-animations';
/* TODO remove it */
import { animate, style, transition, trigger } from '@angular/animations';
import * as i0 from "@angular/core";
import * as i1 from "../translate.service";
import * as i2 from "../konverso.service";
import * as i3 from "ngx-nowbrains-animations";
import * as i4 from "@angular/forms";
import * as i5 from "@angular/common";
import * as i6 from "nowboard-icon";
import * as i7 from "../first-visit/first-visit.component";
import * as i8 from "../custom-checkbox-calendar/custom-checkbox-calendar.component";
import * as i9 from "../pipe/safe-html.pipe";
function DesktopFullScreenComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "bot-first-visit", 3);
    i0.ɵɵlistener("ready", function DesktopFullScreenComponent_ng_container_2_Template_bot_first_visit_ready_1_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.emit($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("firstUsageStory", ctx_r0.firstUsageStory)("assets", ctx_r0.assets);
} }
const _c0 = function (a0) { return { color: a0 }; };
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 15)(2, "div", 16);
    i0.ɵɵelement(3, "div", 17);
    i0.ɵɵelementStart(4, "span", 18);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("@FadeSlideInOutKonversoHeightTest", ctx_r6.animations.FadeSlideInOut(ctx_r6.animationHeightTTX * 1.5, ctx_r6.animationSlideValue));
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("user-input-top", (ctx_r6.LastUserInput == null ? null : ctx_r6.LastUserInput.message) != "");
    i0.ɵɵproperty("@FadeSlideInOutKonversoTranslateOutTest", ctx_r6.animations.FadeSlideInOut(ctx_r6.animationTTX * 1.5, ctx_r6.animationSlideValue));
    i0.ɵɵadvance(1);
    i0.ɵɵstyleMap(i0.ɵɵpureFunction1(8, _c0, ctx_r6.assets == null ? null : ctx_r6.assets.ColorSet == null ? null : ctx_r6.assets.ColorSet.Secondary));
    i0.ɵɵproperty("innerHTML", ctx_r6.LastUserInput.message, i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r6.LastUserInput.date);
} }
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "span", 22);
    i0.ɵɵpipe(2, "safeHtml");
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r14 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("@FadeSlideInOutKonversoTranslateOut", ctx_r14.animations.FadeSlideInOut(ctx_r14.animationTTX, -100))("innerHTML", i0.ɵɵpipeBind1(2, 2, ctx_r14.LastBotAnswer.text), i0.ɵɵsanitizeHtml);
} }
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "span", 23);
    i0.ɵɵelementContainerEnd();
} }
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_3_ng_container_1_Template, 3, 4, "ng-container", 2);
    i0.ɵɵtemplate(2, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_3_ng_container_2_Template, 2, 0, "ng-container", 2);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r10 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !(ctx_r10.LastBotAnswer == null ? null : ctx_r10.LastBotAnswer.text == null ? null : ctx_r10.LastBotAnswer.text.includes("loading-dots")) && ctx_r10.changed && ctx_r10.showText);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r10.afterProcess);
} }
const _c1 = function (a0, a1) { return { borderColor: a0, color: a1 }; };
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_4_ng_container_2_ng_container_1_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r26 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 29);
    i0.ɵɵlistener("click", function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_4_ng_container_2_ng_container_1_button_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r26); const ctx_r25 = i0.ɵɵnextContext(2); const suggest_r18 = ctx_r25.$implicit; const i_r19 = ctx_r25.index; const ctx_r24 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r24.byPassUserInput(suggest_r18 == null ? null : suggest_r18.value == null ? null : suggest_r18.value.onClick, i_r19)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const suggest_r18 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r21 = i0.ɵɵnextContext(5);
    i0.ɵɵstyleMap(i0.ɵɵpureFunction2(4, _c1, ctx_r21.assets == null ? null : ctx_r21.assets.ColorSet == null ? null : ctx_r21.assets.ColorSet.Primary, ctx_r21.assets == null ? null : ctx_r21.assets.ColorSet == null ? null : ctx_r21.assets.ColorSet.Primary));
    i0.ɵɵproperty("@FadeSlideInOutKonversoTranslateOut", ctx_r21.animations.FadeSlideInOut(ctx_r21.animationTTX, -100))("innerHTML", suggest_r18.label || (suggest_r18.value == null ? null : suggest_r18.value.displayedMessage) || (suggest_r18.value == null ? null : suggest_r18.value.title), i0.ɵɵsanitizeHtml);
} }
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_4_ng_container_2_ng_container_1_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r30 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 30);
    i0.ɵɵlistener("click", function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_4_ng_container_2_ng_container_1_button_2_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r30); const ctx_r29 = i0.ɵɵnextContext(2); const suggest_r18 = ctx_r29.$implicit; const i_r19 = ctx_r29.index; const ctx_r28 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r28.byPassUserInput(suggest_r18 == null ? null : suggest_r18.value == null ? null : suggest_r18.value.onClick, i_r19)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const suggest_r18 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r22 = i0.ɵɵnextContext(5);
    i0.ɵɵstyleMap(i0.ɵɵpureFunction2(4, _c1, ctx_r22.assets == null ? null : ctx_r22.assets.ColorSet == null ? null : ctx_r22.assets.ColorSet.Primary, ctx_r22.assets == null ? null : ctx_r22.assets.ColorSet == null ? null : ctx_r22.assets.ColorSet.Primary));
    i0.ɵɵproperty("@FadeSlideInOutKonversoTranslateOut", ctx_r22.animations.FadeSlideInOut(ctx_r22.animationTTX, -100))("innerHTML", suggest_r18.label || (suggest_r18.value == null ? null : suggest_r18.value.displayedMessage) || (suggest_r18.value == null ? null : suggest_r18.value.title), i0.ɵɵsanitizeHtml);
} }
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_4_ng_container_2_ng_container_1_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r34 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 31);
    i0.ɵɵlistener("click", function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_4_ng_container_2_ng_container_1_button_3_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r34); const ctx_r33 = i0.ɵɵnextContext(2); const suggest_r18 = ctx_r33.$implicit; const i_r19 = ctx_r33.index; const ctx_r32 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r32.byPassUserInput(suggest_r18 == null ? null : suggest_r18.value == null ? null : suggest_r18.value.onClick, i_r19)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const suggest_r18 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r23 = i0.ɵɵnextContext(5);
    i0.ɵɵstyleMap(i0.ɵɵpureFunction2(4, _c1, ctx_r23.assets == null ? null : ctx_r23.assets.ColorSet == null ? null : ctx_r23.assets.ColorSet.Primary, ctx_r23.assets == null ? null : ctx_r23.assets.ColorSet == null ? null : ctx_r23.assets.ColorSet.Primary));
    i0.ɵɵproperty("@FadeSlideInOutKonversoTranslateOut", ctx_r23.animations.FadeSlideInOut(ctx_r23.animationTTX, -100))("innerHTML", suggest_r18.label || (suggest_r18.value == null ? null : suggest_r18.value.displayedMessage) || (suggest_r18.value == null ? null : suggest_r18.value.title), i0.ɵɵsanitizeHtml);
} }
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_4_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_4_ng_container_2_ng_container_1_button_1_Template, 1, 7, "button", 26);
    i0.ɵɵtemplate(2, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_4_ng_container_2_ng_container_1_button_2_Template, 1, 7, "button", 27);
    i0.ɵɵtemplate(3, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_4_ng_container_2_ng_container_1_button_3_Template, 1, 7, "button", 28);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const suggest_r18 = i0.ɵɵnextContext().$implicit;
    const ctx_r20 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (suggest_r18.value == null ? null : suggest_r18.value.title) == "Terminer" && ctx_r20.changed || (suggest_r18.value == null ? null : suggest_r18.value.title) == "Quit" && ctx_r20.changed);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (suggest_r18.value == null ? null : suggest_r18.value.title) == "Nouvelle Demande" && ctx_r20.changed || (suggest_r18.value == null ? null : suggest_r18.value.title) == "New Request" && ctx_r20.changed);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (suggest_r18.value == null ? null : suggest_r18.value.title) && (suggest_r18.value == null ? null : suggest_r18.value.title) != "Terminer" && (suggest_r18.value == null ? null : suggest_r18.value.title) != "Quit" && (suggest_r18.value == null ? null : suggest_r18.value.title) != "Nouvelle Demande" && (suggest_r18.value == null ? null : suggest_r18.value.title) != "New Request" && ctx_r20.changed);
} }
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_4_ng_container_2_ng_container_1_Template, 4, 3, "ng-container", 2);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const suggest_r18 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", suggest_r18.format === "button");
} }
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_4_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 32)(2, "div", 33)(3, "i");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r17 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("@FadeSlideInOutKonversoTranslateOut", ctx_r17.animations.FadeSlideInOut(ctx_r17.animationTTX, -100));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r17.select);
} }
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 24);
    i0.ɵɵtemplate(2, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_4_ng_container_2_Template, 2, 1, "ng-container", 25);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_4_ng_container_3_Template, 5, 2, "ng-container", 2);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r11 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r11.LastBotAnswer.medias[0].required_actions);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r11.disableUserInput);
} }
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_custom_checkbox_calendar_5_Template(rf, ctx) { if (rf & 1) {
    const _r38 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "custom-checkbox-calendar", 34);
    i0.ɵɵlistener("calendarChange", function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_custom_checkbox_calendar_5_Template_custom_checkbox_calendar_calendarChange_0_listener($event) { i0.ɵɵrestoreView(_r38); const ctx_r37 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r37.bindCalendar($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r12 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("@FadeSlideInOutKonversoHeightTest", ctx_r12.animations.FadeSlideInOut(ctx_r12.animationTTX, ctx_r12.animationSlideValue))("state", ctx_r12.afterProcess)("calendarTemplate", ctx_r12.calendarTemplate)("columnOverride", ctx_r12.calendarKeyOverride);
} }
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_6_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r39 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r39.sendBtn, " ");
} }
const _c2 = function (a0, a1) { return { backgroundColor: a0, color: a1 }; };
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    const _r41 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 35)(2, "div", 36)(3, "div", 37)(4, "button", 38);
    i0.ɵɵlistener("click", function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_6_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r41); const ctx_r40 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r40.changeNumber(1)); });
    i0.ɵɵelement(5, "nb-icon", 39);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "button", 40);
    i0.ɵɵlistener("click", function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_6_Template_button_click_6_listener() { i0.ɵɵrestoreView(_r41); const ctx_r42 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r42.changeNumber(-1)); });
    i0.ɵɵelement(7, "nb-icon", 39);
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(8, "input", 41);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "div", 42)(10, "button", 43);
    i0.ɵɵlistener("click", function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_6_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r41); const ctx_r43 = i0.ɵɵnextContext(4); ctx_r43._send(); ctx_r43.showUserInputControls = false; return i0.ɵɵresetView(ctx_r43.showUserInvitation = !ctx_r43.showUserInvitation); });
    i0.ɵɵtemplate(11, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_6_ng_container_11_Template, 2, 1, "ng-container", 2);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r13 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("@FadeSlideInOutKonversoOpacityOut", ctx_r13.animations.FadeSlideInOut(ctx_r13.animationTTX, ctx_r13.animationSlideValue));
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("icon", "up_2")("size", 1.5);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("icon", "down_2")("size", 1.5);
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("value", ctx_r13.userInput);
    i0.ɵɵadvance(2);
    i0.ɵɵstyleMap(i0.ɵɵpureFunction2(10, _c2, ctx_r13.assets == null ? null : ctx_r13.assets.ColorSet == null ? null : ctx_r13.assets.ColorSet.Primary, ctx_r13.assets == null ? null : ctx_r13.assets.ColorSet == null ? null : ctx_r13.assets.ColorSet.Secondary));
    i0.ɵɵproperty("disabled", !ctx_r13.userInput);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r13.inputType === "number");
} }
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 19)(2, "div", 20);
    i0.ɵɵtemplate(3, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_3_Template, 3, 2, "ng-container", 2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_4_Template, 4, 2, "ng-container", 2);
    i0.ɵɵtemplate(5, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_custom_checkbox_calendar_5_Template, 1, 4, "custom-checkbox-calendar", 21);
    i0.ɵɵtemplate(6, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_6_Template, 12, 13, "ng-container", 2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("mt-4", !ctx_r7.showUserInvitation);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r7.LastBotAnswer.text);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r7.LastBotAnswer.medias && ctx_r7.LastBotAnswer.medias.length && ctx_r7.LastBotAnswer.medias[0].required_actions && ctx_r7.LastBotAnswer.medias[0].required_actions.length > 0 && !(ctx_r7.LastBotAnswer == null ? null : ctx_r7.LastBotAnswer.text == null ? null : ctx_r7.LastBotAnswer.text.includes("loading-dots")));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r7.afterProcess);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r7.inputType === "number");
} }
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    const _r45 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "button", 44);
    i0.ɵɵlistener("click", function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_10_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r45); const ctx_r44 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r44.getCalendar()); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 45);
    i0.ɵɵlistener("click", function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_10_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r45); const ctx_r46 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r46.skip()); });
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r8.translate.translate(ctx_r8.service.locale, "VALIDATE_AVAILABILITY"), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r8.translate.translate(ctx_r8.service.locale, "SKIP"), " ");
} }
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_11_ng_container_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r51 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "textarea", 48);
    i0.ɵɵlistener("ngModelChange", function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_11_ng_container_1_ng_container_3_Template_textarea_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r51); const ctx_r50 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r50.userInput = $event); })("keyup.enter", function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_11_ng_container_1_ng_container_3_Template_textarea_keyup_enter_1_listener() { i0.ɵɵrestoreView(_r51); const ctx_r52 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r52.userInput && ctx_r52._send()); })("keyup", function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_11_ng_container_1_ng_container_3_Template_textarea_keyup_1_listener($event) { i0.ɵɵrestoreView(_r51); const ctx_r53 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r53.userWriting($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r48 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r48.userInput)("maxlength", ctx_r48.inputLimit)("placeholder", ctx_r48.currentPlaceHolder);
} }
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_11_ng_container_1_ng_container_4_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r54 = i0.ɵɵnextContext(6);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r54.sendBtnMsg, " ");
} }
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_11_ng_container_1_ng_container_4_button_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 52);
    i0.ɵɵelement(1, "nb-icon", 39);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r55 = i0.ɵɵnextContext(6);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("icon", "scan_11")("size", 1.5);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r55.btnScreen, " ");
} }
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_11_ng_container_1_ng_container_4_button_5_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r57 = i0.ɵɵnextContext(7);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r57.translate.translate(ctx_r57.service.locale, "ATTACHMENT"), " ");
} }
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_11_ng_container_1_ng_container_4_button_5_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r58 = i0.ɵɵnextContext(7);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r58.translate.translate(ctx_r58.service.locale, "ATTACHMENTS"), " ");
} }
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_11_ng_container_1_ng_container_4_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r60 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 53);
    i0.ɵɵlistener("click", function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_11_ng_container_1_ng_container_4_button_5_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r60); const ctx_r59 = i0.ɵɵnextContext(6); return i0.ɵɵresetView(ctx_r59.openUpload.emit(true)); });
    i0.ɵɵtext(1);
    i0.ɵɵtemplate(2, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_11_ng_container_1_ng_container_4_button_5_ng_container_2_Template, 2, 1, "ng-container", 2);
    i0.ɵɵtemplate(3, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_11_ng_container_1_ng_container_4_button_5_ng_container_3_Template, 2, 1, "ng-container", 2);
    i0.ɵɵelement(4, "nb-icon", 39);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r56 = i0.ɵɵnextContext(6);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r56.nbFiles, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r56.nbFiles <= 1);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r56.nbFiles > 1);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("icon", "attachment")("size", 1.5);
} }
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_11_ng_container_1_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    const _r62 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 42)(2, "button", 49);
    i0.ɵɵlistener("click", function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_11_ng_container_1_ng_container_4_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r62); const ctx_r61 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r61._send()); });
    i0.ɵɵtemplate(3, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_11_ng_container_1_ng_container_4_ng_container_3_Template, 2, 1, "ng-container", 2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_11_ng_container_1_ng_container_4_button_4_Template, 3, 3, "button", 50);
    i0.ɵɵtemplate(5, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_11_ng_container_1_ng_container_4_button_5_Template, 5, 5, "button", 51);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r49 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(2);
    i0.ɵɵstyleMap(i0.ɵɵpureFunction2(6, _c2, ctx_r49.assets == null ? null : ctx_r49.assets.ColorSet == null ? null : ctx_r49.assets.ColorSet.Primary, ctx_r49.assets == null ? null : ctx_r49.assets.ColorSet == null ? null : ctx_r49.assets.ColorSet.Secondary));
    i0.ɵɵproperty("disabled", !ctx_r49.userInput);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r49.inputType !== "number");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r49.inputType !== "number" && ctx_r49.IsMobile);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r49.inputType !== "number");
} }
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_11_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 46)(2, "div", 47);
    i0.ɵɵtemplate(3, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_11_ng_container_1_ng_container_3_Template, 2, 3, "ng-container", 2);
    i0.ɵɵtemplate(4, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_11_ng_container_1_ng_container_4_Template, 6, 9, "ng-container", 2);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r47 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("@FadeSlideInOutKonversoTranslateOut", ctx_r47.animations.FadeSlideInOut(ctx_r47.animationTTX, ctx_r47.animationSlideValueAdd));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r47.inputType === "text");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r47.inputType !== "number");
} }
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_11_ng_container_1_Template, 5, 3, "ng-container", 2);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r9.disableUserInput && ctx_r9.showInput);
} }
const _c3 = function () { return { "height": "40%" }; };
function DesktopFullScreenComponent_ng_container_3_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7)(1, "div", 8);
    i0.ɵɵelement(2, "div", 9)(3, "div", 10)(4, "div", 11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 12)(6, "div", 13);
    i0.ɵɵtemplate(7, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_7_Template, 6, 10, "ng-container", 2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(8, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_Template, 7, 6, "ng-container", 2);
    i0.ɵɵelementStart(9, "div", 14);
    i0.ɵɵtemplate(10, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_10_Template, 5, 2, "ng-container", 2);
    i0.ɵɵtemplate(11, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_11_Template, 2, 1, "ng-container", 2);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("@FadeSlideInOutKonversoOpacityOut", ctx_r4.animations.FadeSlideInOut(ctx_r4.animationTTX, ctx_r4.animationSlideValue))("ngStyle", i0.ɵɵpureFunction0(8, _c3));
    i0.ɵɵadvance(5);
    i0.ɵɵclassProp("user-input-container-outer-hidden", !ctx_r4.showUserInvitation);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.LastUserInput && !ctx_r4.afterProcess || !ctx_r4.showUserInvitation);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.LastBotAnswer);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r4.afterProcess && ctx_r4.config.AfterProcessScenario.FormButtons.length > 0);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r4.afterProcess && ctx_r4.showUserInputControls && ctx_r4.inputType !== "number");
} }
function DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 16);
    i0.ɵɵelement(2, "div", 17);
    i0.ɵɵelementStart(3, "span", 18);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const entry_r67 = i0.ɵɵnextContext().$implicit;
    const ctx_r68 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("@FadeSlideInOutKonversoTranslateOut", ctx_r68.animations.FadeSlideInOut(ctx_r68.animationTTX, ctx_r68.animationSlideValue));
    i0.ɵɵadvance(1);
    i0.ɵɵstyleMap(i0.ɵɵpureFunction2(5, _c2, ctx_r68.assets == null ? null : ctx_r68.assets.ColorSet == null ? null : ctx_r68.assets.ColorSet.Primary, ctx_r68.assets == null ? null : ctx_r68.assets.ColorSet == null ? null : ctx_r68.assets.ColorSet.Secondary));
    i0.ɵɵproperty("innerHTML", entry_r67.message, i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(entry_r67.date);
} }
function DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_2_ng_container_2_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 65);
    i0.ɵɵpipe(1, "safeHtml");
} if (rf & 2) {
    const entry_r67 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(1, 1, entry_r67.text), i0.ɵɵsanitizeHtml);
} }
function DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_2_ng_container_2_span_1_Template, 2, 3, "span", 64);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r71 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r71.changed);
} }
function DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_2_ng_container_3_ng_container_1_ng_container_1_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r81 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 67);
    i0.ɵɵlistener("click", function DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_2_ng_container_3_ng_container_1_ng_container_1_button_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r81); const suggest_r76 = i0.ɵɵnextContext(2).$implicit; const ctx_r79 = i0.ɵɵnextContext(6); return i0.ɵɵresetView(ctx_r79.byPassUserInput(suggest_r76 == null ? null : suggest_r76.value == null ? null : suggest_r76.value.onClick)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const suggest_r76 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r78 = i0.ɵɵnextContext(6);
    i0.ɵɵstyleMap(i0.ɵɵpureFunction2(3, _c1, ctx_r78.assets == null ? null : ctx_r78.assets.ColorSet == null ? null : ctx_r78.assets.ColorSet.Primary, ctx_r78.assets == null ? null : ctx_r78.assets.ColorSet == null ? null : ctx_r78.assets.ColorSet.Primary));
    i0.ɵɵproperty("innerHTML", suggest_r76.label || (suggest_r76.value == null ? null : suggest_r76.value.displayedMessage) || (suggest_r76.value == null ? null : suggest_r76.value.title), i0.ɵɵsanitizeHtml);
} }
function DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_2_ng_container_3_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_2_ng_container_3_ng_container_1_ng_container_1_button_1_Template, 1, 6, "button", 66);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r77 = i0.ɵɵnextContext(7);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r77.changed);
} }
function DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_2_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_2_ng_container_3_ng_container_1_ng_container_1_Template, 2, 1, "ng-container", 2);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const suggest_r76 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", suggest_r76.format === "button");
} }
function DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_2_ng_container_3_ng_container_1_Template, 2, 1, "ng-container", 25);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const entry_r67 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", entry_r67.medias[0].required_actions);
} }
function DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 63);
    i0.ɵɵtemplate(2, DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_2_ng_container_2_Template, 2, 1, "ng-container", 2);
    i0.ɵɵtemplate(3, DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_2_ng_container_3_Template, 2, 1, "ng-container", 2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const entry_r67 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", entry_r67.text);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", entry_r67.medias && entry_r67.medias.length && entry_r67.medias[0].required_actions && entry_r67.medias[0].required_actions.length);
} }
function DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_1_Template, 5, 8, "ng-container", 2);
    i0.ɵɵtemplate(2, DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_2_Template, 4, 2, "ng-container", 2);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const entry_r67 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", entry_r67.date);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !entry_r67.date);
} }
function DesktopFullScreenComponent_ng_container_3_div_3_div_7_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r87 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 70);
    i0.ɵɵlistener("click", function DesktopFullScreenComponent_ng_container_3_div_3_div_7_button_2_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r87); const ctx_r86 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r86._send()); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r85 = i0.ɵɵnextContext(4);
    i0.ɵɵstyleMap(i0.ɵɵpureFunction2(4, _c2, ctx_r85.assets == null ? null : ctx_r85.assets.ColorSet == null ? null : ctx_r85.assets.ColorSet.Primary, ctx_r85.assets == null ? null : ctx_r85.assets.ColorSet == null ? null : ctx_r85.assets.ColorSet.Secondary));
    i0.ɵɵproperty("disabled", !ctx_r85.userInput);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", ctx_r85.sendBtn, " ");
} }
function DesktopFullScreenComponent_ng_container_3_div_3_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r89 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 35)(1, "input", 68);
    i0.ɵɵlistener("ngModelChange", function DesktopFullScreenComponent_ng_container_3_div_3_div_7_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r89); const ctx_r88 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r88.userInput = $event); })("keyup.enter", function DesktopFullScreenComponent_ng_container_3_div_3_div_7_Template_input_keyup_enter_1_listener() { i0.ɵɵrestoreView(_r89); const ctx_r90 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r90.userInput && ctx_r90._send()); })("keyup", function DesktopFullScreenComponent_ng_container_3_div_3_div_7_Template_input_keyup_1_listener($event) { i0.ɵɵrestoreView(_r89); const ctx_r91 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r91.userWriting($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(2, DesktopFullScreenComponent_ng_container_3_div_3_div_7_button_2_Template, 2, 7, "button", 69);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r65 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r65.userInput)("placeholder", ctx_r65.currentPlaceHolder);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r65.changed);
} }
function DesktopFullScreenComponent_ng_container_3_div_3_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 33)(1, "i");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r66 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r66.select);
} }
function DesktopFullScreenComponent_ng_container_3_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 54);
    i0.ɵɵtext(1);
    i0.ɵɵelementStart(2, "div", 55, 56)(4, "div", 57);
    i0.ɵɵtemplate(5, DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_Template, 3, 2, "ng-container", 25);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 58);
    i0.ɵɵtemplate(7, DesktopFullScreenComponent_ng_container_3_div_3_div_7_Template, 3, 3, "div", 59);
    i0.ɵɵtemplate(8, DesktopFullScreenComponent_ng_container_3_div_3_div_8_Template, 3, 1, "div", 60);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "div", 61);
    i0.ɵɵelement(10, "img", 62);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const _r63 = i0.ɵɵreference(3);
    const ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r5.AssistantMode, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("scrollTop", _r63.scrollTo(0, 9999999));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r5.displayData);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r5.disableUserInput && ctx_r5.showInput);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.disableUserInput);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("src", ctx_r5.assets.FullSizeLogo, i0.ɵɵsanitizeUrl);
} }
function DesktopFullScreenComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r93 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "button", 4);
    i0.ɵɵlistener("click", function DesktopFullScreenComponent_ng_container_3_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r93); const ctx_r92 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r92.byPassUserInput("exit", 0)); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(2, DesktopFullScreenComponent_ng_container_3_div_2_Template, 12, 9, "div", 5);
    i0.ɵɵtemplate(3, DesktopFullScreenComponent_ng_container_3_div_3_Template, 11, 6, "div", 6);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.AssistantMode);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r1.AssistantMode);
} }
const _c4 = function () { return { "background-color": "#100652 0% 0% no-repeat padding-box;" }; };
const defaultInputType = 'text';
const defaultInputLimit = 300;
const ANIMATION_TTX = 750;
const ANIMATION_TTX_ADD = 250;
const ANIMATION_SLIDE_VALUE = -50;
const ANIMATION_SLIDE_VALUE_ADD = -25;
const ANIMATION_HEIGHT_TTX = 1250;
const ANIMATION_TYPE_CUBIC_BEZIER = 'cubic-bezier(0.39, 0.58, 0.57, 1)';
/* TODO */
/* move the animations to ngx-nowbrains-animations */
export const FadeSlideInOutKonversoTranslateOutTest = trigger('FadeSlideInOutKonversoTranslateOutTest', [
    transition(':enter', [
        style({ opacity: 0, top: '{{percent_start}}%' }),
        animate(`{{ttx}}ms ${ANIMATION_TYPE_CUBIC_BEZIER}`, style({ opacity: 1, top: '0%' }))
    ]),
    transition(':leave', [
        style({ opacity: 1 }),
        animate('{{ttx}}ms ease-in-out', style({ opacity: 0 }))
    ])
]);
export const FadeSlideInOutKonversoHeightTest = trigger('FadeSlideInOutKonversoHeightTest', [
    transition(':enter', [
        style({ height: 0 }),
        animate(`{{ttx}}ms ${ANIMATION_TYPE_CUBIC_BEZIER}`, style({ height: '*' }))
    ]),
    transition(':leave', [
        style({ opacity: 1 }),
        animate('{{ttx}}ms ease-in-out', style({ opacity: 0 }))
    ])
]);
export const FadeSlideInOutKonversoHeightOutTest = trigger('FadeSlideInOutKonversoHeightOutTest', [
    transition(':enter', [
        style({ height: '*' }),
        animate(`{{ttx}}ms ${ANIMATION_TYPE_CUBIC_BEZIER}`, style({ height: 0 }))
    ])
]);
/* TODO remove it */
export class DesktopFullScreenComponent {
    constructor(translate, service, animations, config) {
        this.translate = translate;
        this.service = service;
        this.animations = animations;
        this.AssistantMode = false;
        this.firstVisit = false;
        this.IsMobile = false;
        this.afterProcess = false;
        this.nbFiles = 0;
        this.readySend = new EventEmitter(false);
        this.send = new EventEmitter(null);
        this.sendBotCommand = new EventEmitter(null);
        this.sendEvent = new EventEmitter(null);
        this.sendCalendar = new EventEmitter(null);
        this.openUpload = new EventEmitter(false);
        this.currentPlaceHolder = '';
        this.sendBtn = '';
        this.sendBtnMsg = '';
        this.select = '';
        this.changed = false;
        this.botListening = false;
        this.showWrapper = true;
        this.showText = true;
        this.inputType = defaultInputType;
        this.inputLimit = defaultInputLimit;
        this.newMessage = false;
        this.messageCurrent = '';
        this.msgArray = [];
        this.botListeningTimer = 0;
        this.anim_done = false;
        this.reloaded = false;
        this.btnScreen = '';
        this.nbAttachments = 0;
        this.days = [];
        this.calendarAvailability = {};
        this.calendarTemplate = {
            morning: { all: true, monday: true, tuesday: true, wednesday: true, thursday: true, friday: true },
            afternoon: { all: true, monday: true, tuesday: true, wednesday: true, thursday: true, friday: true }
        };
        this.calendarKeyOverride = {
            morning: 'MORNING_ALL',
            afternoon: 'AFTERNOON_ALL',
            monday: 'MONDAY',
            tuesday: 'TUESDAY',
            wednesday: 'WEDNESDAY',
            thursday: 'THURSDAY',
            friday: 'FRIDAY'
        };
        this.showUserInputControls = true;
        this.showUserInvitation = true;
        this.animationTTX = ANIMATION_TTX;
        this.animationTtxAdd = ANIMATION_TTX_ADD;
        this.animationSlideValue = ANIMATION_SLIDE_VALUE;
        this.animationSlideValueAdd = ANIMATION_SLIDE_VALUE_ADD;
        this.animationHeightTTX = ANIMATION_HEIGHT_TTX;
        service.lang.subscribe((r) => {
            if (service.locale) {
                this.sendBtn = translate.translate(service.locale, 'SEND');
                this.sendBtnMsg = translate.translate(service.locale, 'SEND_MESSAGE');
                this.select = translate.translate(service.locale, 'SELECT');
                this.btnScreen = translate.translate(service.locale, 'SCREENSHOT');
                this.days = [
                    'MONDAY',
                    'TUESDAY',
                    'WEDNESDAY',
                    'THURSDAY',
                    'FRIDAY',
                    'SATURDAY',
                    'SUNDAY',
                    'MONDAY'
                ];
            }
        });
        this.config = config;
    }
    changeNumber(value) {
        if ((+this.userInput + value) > 0) {
            this.userInput = (+this.userInput + value).toString();
        }
    }
    ngOnChanges() {
        if (this.afterProcess) {
            //this.LastUserInput = null;
            this.LastBotAnswer.text = this.config.AfterProcessScenario.BotMessage[this.service.locale];
            if (this.config.AfterProcessScenario.FormElements[0][0].label == 'Jour 1') {
                let day1 = this.days[new Date().getDay() - 1];
                let day2 = this.days[new Date().getDay()];
                let day3 = this.days[new Date().getDay() + 1];
                this.config.AfterProcessScenario.FormElements[0][0].label = day1;
                this.config.AfterProcessScenario.FormElements[1][0].label = day2;
                this.config.AfterProcessScenario.FormElements[2][0].label = day3;
            }
        }
        this.changed = false;
        if (this.LastBotAnswer && document.getElementById('text') && this.LastBotAnswer?.text && !this.LastBotAnswer?.text?.includes('loading-dots')) {
            document.getElementById('text').innerHTML = '';
        }
        if (this.LastBotAnswer && this.LastBotAnswer.text && this.LastBotAnswer?.text?.includes('<number>') && this.LastBotAnswer?.text?.includes('</number>')) {
            this.userInput = '1';
            this.inputType = 'number';
            this.inputLimit = 999;
            this.currentPlaceHolder = this.NumberPlaceHolder[Math.floor(Math.random() * this.NumberPlaceHolder.length)];
        }
        else {
            this.currentPlaceHolder = this.PlaceHolder[Math.floor(Math.random() * this.PlaceHolder.length)];
            this.inputType = defaultInputType;
            this.inputLimit = defaultInputLimit;
        }
        /*   if (!this.anim_done) {
               let t2 = setInterval(() => {
                   if (this.LastBotAnswer  && !this.LastBotAnswer?.text && !this.LastBotAnswer?.text?.includes('loading-dots') && this.anim_done) {
                       clearInterval(t2);
                       const string = this.LastBotAnswer?.text
                           .split('<br/>').join(` `)
                           .split('&eacute;').join('é')
                           .split('&egrave;').join('è')
                           .replace(/<[^>]*>?/gm, '')
                           .split('&nbsp;').join('');

                       this.msgArray = string.split('');
                       if (this.messageCurrent !== string) {
                           this.newMessage = true;
                           this.messageCurrent = string;
                           this.launchLoop();
                       }
                       //this.looper(array, timer);
                   }
               }, 100);
           } else if (this.LastBotAnswer && this.LastBotAnswer.text) {
               const string = this.LastBotAnswer?.text
                   .split('<br/>').join(` `)
                   .split('&eacute;').join('é')
                   .split('&egrave;').join('è')
                   .replace(/<[^>]*>?/gm, '')
                   .split('&nbsp;').join('');

               this.msgArray = string.split('');
               if (this.messageCurrent !== string && string !== '') {
                   this.newMessage = true;
                   this.messageCurrent = string;
                   this.launchLoop();
               }
           }*/
        setTimeout(() => {
            this.changed = true;
        }, 100);
    }
    bindCalendar($event) {
        //console.log('bindCalendar $event', $event)
        delete $event.all;
        this.calendarAvailability = $event;
    }
    getCalendar() {
        this.sendCalendar.emit(this.calendarAvailability);
    }
    skip() {
        this.sendCalendar.emit(null);
    }
    launchLoop() {
        this.timer = setInterval(() => {
            if (this.msgArray.length == 0) {
                clearInterval(this.timer);
            }
            if (this.newMessage) {
                if (document.getElementById('text')) {
                    document.getElementById('text').innerHTML = '';
                }
                this.newMessage = false;
                //this.msgArray = this.messageCurrent.split("");
                clearInterval(this.timer);
                this.launchLoop();
            }
            this.looper();
        }, 60);
    }
    looper() {
        if (this.msgArray.length > 0 && !this.reloaded) {
            if (document.getElementById('text')) {
                document.getElementById('text').innerHTML += this.msgArray.shift();
            }
        }
    }
    ngOnInit() {
        this.inputType = defaultInputType;
        this.inputLimit = defaultInputLimit;
        if (this.PlaceHolder) {
            this.currentPlaceHolder = this.PlaceHolder[Math.floor(Math.random() * this.PlaceHolder.length)];
            setInterval(() => {
                this.currentPlaceHolder = this.PlaceHolder[Math.floor(Math.random() * this.PlaceHolder.length)];
            }, 3000);
        }
    }
    userWriting(key) {
        if (key.code === 'Enter') {
            this.botListening = false;
            this.botListeningTimer = 0;
        }
        else if (key.code === 'Backspace') {
        }
        else {
            this.botListening = true;
            if (this.botListeningTimer == 0) {
                this.botListeningTimer += 2;
            }
            else if (this.botListeningTimer < 5) {
                this.botListeningTimer += 1;
            }
        }
    }
    emit($event) {
        this.firstVisit = false;
        this.readySend.emit(true);
    }
    _send() {
        if (this.LastBotAnswer?.endOfTopic && this.LastUserInput) {
            this.LastUserInput.message = '';
        }
        this.botListening = false;
        const userData = {
            message: this.userInput,
            date: new Date().toLocaleTimeString(navigator.language, {
                hour: '2-digit',
                minute: '2-digit'
            })
        };
        this.send.emit(userData);
        this.userInput = null;
    }
    async scroll(scrollHeight) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(0);
            }, 300);
        });
    }
    byPassUserInput(botdata, i) {
        this.sendBotCommand.emit(botdata);
    }
}
DesktopFullScreenComponent.ɵfac = function DesktopFullScreenComponent_Factory(t) { return new (t || DesktopFullScreenComponent)(i0.ɵɵdirectiveInject(i1.TranslateService), i0.ɵɵdirectiveInject(i2.KonversoService), i0.ɵɵdirectiveInject(i3.AnimationsService), i0.ɵɵdirectiveInject('__NgxKonverso__')); };
DesktopFullScreenComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DesktopFullScreenComponent, selectors: [["bot-full-screen"]], inputs: { AssistantMode: "AssistantMode", assets: "assets", firstVisit: "firstVisit", firstUsageStory: "firstUsageStory", displayData: "displayData", disableUserInput: "disableUserInput", LastUserInput: "LastUserInput", LastBotAnswer: "LastBotAnswer", PlaceHolder: "PlaceHolder", IsMobile: "IsMobile", showInput: "showInput", NumberPlaceHolder: "NumberPlaceHolder", afterProcess: "afterProcess", nbFiles: "nbFiles" }, outputs: { readySend: "readySend", send: "send", sendBotCommand: "sendBotCommand", sendEvent: "sendEvent", sendCalendar: "sendCalendar", openUpload: "openUpload" }, features: [i0.ɵɵNgOnChangesFeature], decls: 4, vars: 7, consts: [["xmlns", "http://www.w3.org/1999/html", 1, "bot-container"], [1, "bot-view"], [4, "ngIf"], [3, "firstUsageStory", "assets", "ready"], ["id", "exit-btn", 2, "display", "none", 3, "click"], ["class", "bot-assistant-wrapper", 4, "ngIf"], ["class", "bot-chat-wrapper", 4, "ngIf"], [1, "bot-assistant-wrapper"], [1, "bot", 3, "ngStyle"], [1, "circle1"], [1, "circle2"], [1, "circle3"], [1, "bot-discussion-wrapper", 2, "min-height", "60%", "max-height", "60%", "height", "60%", "/*max-height", "120px"], [1, "overflow-hidden", "d-flex", "flex-column", "w-100", "position-relative", "user-input-container-outer"], [1, "position-relative", "bot-input-wrapper"], [1, "overflow-hidden", "d-flex", "flex-column", "w-100", "user-input-container"], [1, "user-input"], [1, "data", 3, "innerHTML"], [1, "time"], [1, "position-relative", "bot-answer"], [1, "d-flex", "flex-column", "w-100", "position-relative", "bot-answer__text"], [3, "state", "calendarTemplate", "columnOverride", "calendarChange", 4, "ngIf"], [1, "w-100", "justify-content-center", 3, "innerHTML"], ["id", "loading-creation"], [1, "mt35", "d-flex", "justify-content-center", "w-100", "position-relative", "bot-answer__buttons"], [4, "ngFor", "ngForOf"], ["class", "bot-button bot-button-left show-btn", 3, "style", "innerHTML", "click", 4, "ngIf"], ["class", "bot-button bot-button-right show-btn", 3, "style", "innerHTML", "click", 4, "ngIf"], ["class", "bot-button bot-button-grey show-btn", 3, "style", "innerHTML", "click", 4, "ngIf"], [1, "bot-button", "bot-button-left", "show-btn", 3, "innerHTML", "click"], [1, "bot-button", "bot-button-right", "show-btn", 3, "innerHTML", "click"], [1, "bot-button", "bot-button-grey", "show-btn", 3, "innerHTML", "click"], [1, "position-relative", "bot-answer__disable-input"], [1, "bot-input-disable"], [3, "state", "calendarTemplate", "columnOverride", "calendarChange"], [1, "bot-input"], [1, "input-number-div"], [1, "input-number-div-arrow"], [1, "arrow-up", 3, "click"], [3, "icon", "size"], [1, "arrow-down", 3, "click"], ["type", "number", "min", "1", 3, "value"], [1, "bot-container-btn"], [1, "bot-button", "send-btn", "input-number-btn", "showUserInputControls", 3, "disabled", "click"], [1, "primary", "rounded", "validate-after-btn", 2, "display", "inline-block", 3, "click"], [1, "rounded", "secondary", "skip-after-btn", 2, "display", "inline-block", 3, "click"], ["id", "bot-input-div", 1, "d-flex", "flex-column", "w-100", "position-realtive", "bot-input"], [1, "w-100", "h-100", "d-flex", "flex-column", "position-absolute", "bot-input__controls"], [3, "ngModel", "maxlength", "placeholder", "ngModelChange", "keyup.enter", "keyup"], [1, "bot-button", "send-btn", 3, "disabled", "click"], ["class", "bot-button-screen", 4, "ngIf"], ["class", "bot-button-attach", 3, "click", 4, "ngIf"], [1, "bot-button-screen"], [1, "bot-button-attach", 3, "click"], [1, "bot-chat-wrapper"], [1, "bot-discussion-wrapper", 3, "scrollTop"], ["scrollMe", ""], [1, "bot-chat"], [1, "bot-input-wrapper"], ["class", "bot-input", 4, "ngIf"], ["class", "bot-input-disable", 4, "ngIf"], [1, "bot-logo"], [3, "src"], [1, "bot-answer"], ["class", "", 3, "innerHTML", 4, "ngIf"], [1, "", 3, "innerHTML"], ["class", "bot-button", 3, "style", "innerHTML", "click", 4, "ngIf"], [1, "bot-button", 3, "innerHTML", "click"], ["type", "text", "maxlength", "200", 3, "ngModel", "placeholder", "ngModelChange", "keyup.enter", "keyup"], ["class", "bot-button", 3, "style", "disabled", "click", 4, "ngIf"], [1, "bot-button", 3, "disabled", "click"]], template: function DesktopFullScreenComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "div", 1);
        i0.ɵɵtemplate(2, DesktopFullScreenComponent_ng_container_2_Template, 2, 2, "ng-container", 2);
        i0.ɵɵtemplate(3, DesktopFullScreenComponent_ng_container_3_Template, 4, 2, "ng-container", 2);
        i0.ɵɵelementEnd()();
    } if (rf & 2) {
        i0.ɵɵstyleMap(i0.ɵɵpureFunction0(6, _c4));
        i0.ɵɵclassMap(ctx.IsMobile ? "bot-mobile" : "");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.firstVisit && ctx.firstUsageStory);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.firstVisit || !ctx.firstUsageStory);
    } }, dependencies: [i4.DefaultValueAccessor, i4.NgControlStatus, i4.MaxLengthValidator, i4.NgModel, i5.NgForOf, i5.NgIf, i5.NgStyle, i6.NowboardIconComponent, i7.FirstVisitComponent, i8.CustomCheckboxCalendarComponent, i9.SafeHtmlPipe], styles: ["@keyframes gradient{0%{background-position:50% 0%}50%{background-position:50% 100%}to{background-position:50% 0%}}@keyframes pulsebot{0%{transform:scale(1)}50%{transform:scale(1.3)}to{transform:scale(1)}}.bot-listening[_ngcontent-%COMP%]{height:100%;background:transparent}.bot-listening[_ngcontent-%COMP%]:before{content:\"\";position:absolute;top:-60vw;left:-80vw;width:150vw;height:150vw;border-radius:50%;background:transparent}.bot-listening[_ngcontent-%COMP%]:after{content:\"\";position:absolute;top:-40vw;left:-50vw;width:90vw;height:90vw;border-radius:50%;background:transparent}@media screen and (min--moz-device-pixel-ratio:0){.m-carl-notification[_ngcontent-%COMP%]{transform:translate(0)!important}}.m-carl-notification[_ngcontent-%COMP%]{position:relative;top:50%}.m-carl-notification[_ngcontent-%COMP%]   .m-cue[_ngcontent-%COMP%]{width:168px;height:168px;margin:0 auto 50px;display:flex;justify-content:center;align-items:center}.m-carl-notification[_ngcontent-%COMP%]   .m-cue[_ngcontent-%COMP%]   .a-cue-icon[_ngcontent-%COMP%]{position:absolute;width:100px;height:100px;transform:translate(5px) translateY(5px);border-radius:50%;background:radial-gradient(circle at 50% 50%,#9D107D 1px,#9D107D 3%,#580b58 60%);box-shadow:0 0 10px 5px #00000040;animation:pulsebot 3.5s ease infinite}.m-carl-notification[_ngcontent-%COMP%]   .m-cue[_ngcontent-%COMP%]   .a-cue-voice[_ngcontent-%COMP%]{transform-origin:center center;height:130px;width:130px;position:absolute;display:flex;justify-content:center;align-items:center}.m-carl-notification[_ngcontent-%COMP%]   .m-cue[_ngcontent-%COMP%]   .a-cue-voice-el[_ngcontent-%COMP%]{position:absolute;width:130px;height:130px;border-radius:50%;background:#fff;opacity:.2;filter:blur(2px)}.voice1[_ngcontent-%COMP%]{background:#9A147F!important}.voice2[_ngcontent-%COMP%]{background:#773691!important}.voice3[_ngcontent-%COMP%]{background:#4E5CA8!important}.voice4[_ngcontent-%COMP%]{background:#ABC1F1!important}.m-carl-notification[_ngcontent-%COMP%]   .m-cue[_ngcontent-%COMP%]   .a-cue-voice-el[_ngcontent-%COMP%]:nth-child(1){animation:hovering 6s ease 0s infinite reverse both}.m-carl-notification[_ngcontent-%COMP%]   .m-cue[_ngcontent-%COMP%]   .a-cue-voice-el[_ngcontent-%COMP%]:nth-child(2){animation:hovering 7s ease 0s infinite both}.m-carl-notification[_ngcontent-%COMP%]   .m-cue[_ngcontent-%COMP%]   .a-cue-voice-el[_ngcontent-%COMP%]:nth-child(3){animation:hovering 8s ease 0s infinite reverse both}.m-carl-notification[_ngcontent-%COMP%]   .m-cue[_ngcontent-%COMP%]   .a-cue-voice-el[_ngcontent-%COMP%]:nth-child(4){animation:hovering 9s ease 0s infinite both}.m-carl-notification[_ngcontent-%COMP%]   .m-cue[_ngcontent-%COMP%]   .a-cue-voice-el[_ngcontent-%COMP%]:nth-child(5){animation:hovering 10s ease 0s infinite reverse both}.m-carl-notification[_ngcontent-%COMP%]   .m-cue[_ngcontent-%COMP%]   .speaking[_ngcontent-%COMP%]{animation:pulse 2s ease 0s infinite}.m-carl-notification[_ngcontent-%COMP%]   .a-caption[_ngcontent-%COMP%]{color:#fff;font-size:1.5em;line-height:1.8em;text-shadow:0px 1px 2px rgba(0,0,0,.26);text-align:center}.m-carl-notification[_ngcontent-%COMP%]   .a-caption.speaking[_ngcontent-%COMP%]{text-shadow:0px 0px 0px;opacity:.4}@keyframes hovering{0%{transform:rotate(0) translate(18px) rotate(0)}to{transform:rotate(360deg) translate(18px) rotate(-360deg)}}@keyframes pulse{0%{transform:scale(1)}10%{transform:scale(1.15)}15%{transform:scale(1.25)}20%{transform:scale(1.05)}30%{transform:scale(1.3)}40%{transform:scale(1)}50%{transform:scale(1.25)}55%{transform:scale(1.1)}60%{transform:scale(1)}65%{transform:scale(1.3)}70%{transform:scale(1.2)}80%{transform:scale(1.15)}90%{transform:scale(1.25)}to{transform:scale(1.05)}}input[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}input[type=number][_ngcontent-%COMP%]{-moz-appearance:textfield}"], data: { animation: [FadeSlideInOut, FadeSlideInOutKonversoOpacityOut, FadeSlideInOutKonversoTranslateOut, FadeSlideInOutKonversoHeight, FadeSlideInOutKonversoTranslateOutTest, FadeSlideInOutKonversoHeightTest] // TODO remove it
     } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DesktopFullScreenComponent, [{
        type: Component,
        args: [{ selector: 'bot-full-screen', animations: [FadeSlideInOut, FadeSlideInOutKonversoOpacityOut, FadeSlideInOutKonversoTranslateOut, FadeSlideInOutKonversoHeight, FadeSlideInOutKonversoTranslateOutTest, FadeSlideInOutKonversoHeightTest] // TODO remove it
                , template: "<!--<div class=\"bot-container\"  [class]=\"IsMobile ? 'bot-mobile' : ''\" [style]=\"{'background-color' : '#100652 0% 0% no-repeat padding-box;'}\"-->\n\n  <!--<canvas class=\"orb-canvas\"></canvas>\n  <div class=\"overlay\">\n    <div class=\"overlay__inner\">\n    </div>\n  </div>-->\n  <div class=\"bot-container\"  [class]=\"IsMobile ? 'bot-mobile' : ''\" [style]=\"{'background-color' : '#100652 0% 0% no-repeat padding-box;'}\"\n     xmlns=\"http://www.w3.org/1999/html\">\n  <div class=\"bot-view\">\n    <ng-container *ngIf=\"firstVisit && firstUsageStory\">\n      <bot-first-visit [firstUsageStory]=\"firstUsageStory\" [assets]=\"assets\"\n                       (ready)=\"emit($event)\"></bot-first-visit>\n    </ng-container>\n    <ng-container *ngIf=\"!firstVisit || !firstUsageStory\">\n      <button (click)=\"byPassUserInput('exit', 0)\" id=\"exit-btn\" style=\"display: none;\"></button>\n\n      <div class=\"bot-assistant-wrapper\" *ngIf=\"AssistantMode\">\n        <!-- TODO do we need id, remove it? -->\n        <!--<div *ngIf=\"!botListening\" class=\"bot-logo\" id=\"botlogo\">\n          <img [src]=\"assets.FullSizeLogo\">\n        </div>-->\n        <!--<div [ngStyle]=\"{'height': '40%'}\" class=\"bot-logo bot-listening\">\n          <div [ngStyle]=\"{'transform': 'translateY(-10vh)'}\" class=\"m-carl-notification\">\n            <div class=\"m-carl-notification-cue m-cue\">\n              <div *ngIf=\"botListening\" class=\"a-cue-voice\" id=\"bot\">\n                <div class=\"a-cue-voice-el voice1\"></div>\n                <div class=\"a-cue-voice-el voice2\"></div>\n                <div class=\"a-cue-voice-el voice3\"></div>\n                <div class=\"a-cue-voice-el voice4\"></div>\n                <div class=\"a-cue-voice-el\"></div>\n              </div>\n              <div class=\"a-cue-icon\" id=\"bot-icon\"></div>\n            </div>\n          </div>\n        </div>-->\n\n        <div [@FadeSlideInOutKonversoOpacityOut]=\"animations.FadeSlideInOut(animationTTX, animationSlideValue)\" [ngStyle]=\"{'height': '40%'}\" class=\"bot\">\n          <div class=\"circle1\"></div>\n          <div class=\"circle2\"></div>\n          <div class=\"circle3\"></div>\n        </div>\n\n        <div  class=\"bot-discussion-wrapper\" style=\"min-height: 60%; max-height: 60%; height: 60%; /*max-height: 120px;*/\">\n          <!-- USER INPUT -->\n          <div [class.user-input-container-outer-hidden]=\"!showUserInvitation\" class=\"overflow-hidden d-flex flex-column w-100 position-relative user-input-container-outer\">\n            <ng-container *ngIf=\"(LastUserInput && !afterProcess) || !showUserInvitation\">\n              <div [@FadeSlideInOutKonversoHeightTest]=\"animations.FadeSlideInOut(animationHeightTTX*1.5, animationSlideValue)\" class=\"overflow-hidden d-flex flex-column w-100 user-input-container\">\n                <div [@FadeSlideInOutKonversoTranslateOutTest]=\"animations.FadeSlideInOut(animationTTX*1.5, animationSlideValue)\" [class.user-input-top]=\"LastUserInput?.message != ''\"  class=\"user-input\">\n                  <div class=\"data\" [style]=\"{\n                          color : assets?.ColorSet?.Secondary\n                        }\" [innerHTML]=\"LastUserInput.message\">\n                  </div>\n                  <span class=\"time\">{{LastUserInput.date}}</span>\n                </div>\n              </div>\n            </ng-container>\n          </div>\n\n          <!-- BOT ANSWER -->\n          <ng-container *ngIf=\"LastBotAnswer\">\n            <div class=\"position-relative bot-answer\">\n              <div [class.mt-4]=\"!showUserInvitation\" class=\"d-flex flex-column w-100 position-relative bot-answer__text\">\n\n                <!-- BOT ANSWER TEXT -->\n                <ng-container *ngIf=\"LastBotAnswer.text\">\n                  <!--<span *ngIf=\"!LastBotAnswer.text.includes('loading-dots')\" id=\"text\"></span><br>\n                  <span *ngIf=\"changed && LastBotAnswer.text.includes('loading-dots')\" class=\"fade\" [innerHTML]=\"LastBotAnswer.text | safeHtml\"></span><br>\n                  -->\n                  <ng-container *ngIf=\"!LastBotAnswer?.text?.includes('loading-dots') && changed && showText\">\n                    <span [@FadeSlideInOutKonversoTranslateOut]=\"animations.FadeSlideInOut(animationTTX, -100)\" class=\"w-100 justify-content-center\" [innerHTML]=\"LastBotAnswer.text | safeHtml\"></span>\n                  </ng-container>\n                  <ng-container *ngIf=\"!afterProcess\">\n                    <span id=\"loading-creation\"></span>\n                  </ng-container>\n                </ng-container>\n              </div>\n\n              <ng-container *ngIf=\"LastBotAnswer.medias && LastBotAnswer.medias.length\n                && LastBotAnswer.medias[0].required_actions\n                && LastBotAnswer.medias[0].required_actions.length > 0\n                && !LastBotAnswer?.text?.includes('loading-dots')\">\n                <!-- BOT ANSWER BUTTONS -->\n                <div class=\"mt35 d-flex justify-content-center w-100 position-relative bot-answer__buttons\">\n                  <ng-container *ngFor=\"let suggest of LastBotAnswer.medias[0].required_actions; let i = index\">\n                    <ng-container *ngIf=\"suggest.format === 'button'\">\n                        <button\n                          [@FadeSlideInOutKonversoTranslateOut]=\"animations.FadeSlideInOut(animationTTX, -100)\"\n                          *ngIf=\"suggest.value?.title == 'Terminer' && changed || suggest.value?.title == 'Quit' && changed\" [style]=\"{\n                            borderColor : assets?.ColorSet?.Primary,\n                            color : assets?.ColorSet?.Primary\n                          }\"\n                          class=\"bot-button bot-button-left show-btn\" (click)=\"byPassUserInput(suggest?.value?.onClick, i)\"\n                          [innerHTML]=\"suggest.label|| suggest.value?.displayedMessage || suggest.value?.title \">\n                        </button>\n                        <button\n                          [@FadeSlideInOutKonversoTranslateOut]=\"animations.FadeSlideInOut(animationTTX, -100)\"\n                          *ngIf=\"suggest.value?.title == 'Nouvelle Demande' && changed || suggest.value?.title == 'New Request' && changed\" [style]=\"{\n                            borderColor : assets?.ColorSet?.Primary,\n                            color : assets?.ColorSet?.Primary\n                          }\"\n                          class=\"bot-button bot-button-right show-btn\" (click)=\"byPassUserInput(suggest?.value?.onClick, i)\"\n                          [innerHTML]=\"suggest.label|| suggest.value?.displayedMessage || suggest.value?.title \">\n                        </button>\n                        <button\n                          [@FadeSlideInOutKonversoTranslateOut]=\"animations.FadeSlideInOut(animationTTX, -100)\"\n                          *ngIf=\"suggest.value?.title && suggest.value?.title != 'Terminer' && suggest.value?.title != 'Quit' && suggest.value?.title != 'Nouvelle Demande' && suggest.value?.title != 'New Request' && changed\"\n                            [style]=\"{\n                            borderColor : assets?.ColorSet?.Primary,\n                            color : assets?.ColorSet?.Primary\n                          }\"\n                          class=\"bot-button bot-button-grey show-btn\" (click)=\"byPassUserInput(suggest?.value?.onClick, i)\"\n                          [innerHTML]=\"suggest.label|| suggest.value?.displayedMessage || suggest.value?.title \">\n                      </button>\n                    </ng-container>\n                  </ng-container>\n                </div>\n\n                <ng-container *ngIf=\"disableUserInput\">\n                  <div class=\"position-relative bot-answer__disable-input\">\n                    <div [@FadeSlideInOutKonversoTranslateOut]=\"animations.FadeSlideInOut(animationTTX, -100)\" class=\"bot-input-disable\">\n                      <i>{{ select }}</i>\n                    </div>\n                  </div>\n                </ng-container>\n              </ng-container>\n              <!-- BOT ANSWER BUTTONS -->\n\n              <!--<ng-container *ngIf=\"afterProcess && config.AfterProcessScenario.FormElements.length > 0\">\n                <div class=\"after-process-form\">\n                  <div class=\"after-process-subform\" *ngFor=\"let formElements of config.AfterProcessScenario.FormElements\">\n                    <ng-container *ngFor=\"let form of formElements\">\n                      <ng-container [ngSwitch]=\"form.type\">\n                        <div *ngSwitchCase=\"'checkbox'\" [ngStyle]=\"{'display': form?.display ? form.display: 'block'}\" class=\"bot-checkbox\">\n                          <input [checked]=\"form?.checked == true ? 'true': 'false'\" [id]=\"form?.id\" [name]=\"form?.id\" [type]='form?.type' value=\"false\">\n                          <label [for]=\"form?.id\" class=\"bot-checkbox-label\">\n                            {{ translate.translate(service.locale, form.label) }}\n                          </label>\n                        </div>\n\n                        <input [class]=\"form?.class\" [id]=\"form?.id\" [ngStyle]=\"{'display': form?.display ? form.display: 'block'}\" *ngSwitchCase=\"'text'\"\n                        [pattern]=\"form?.pattern\" [placeholder]=\"form?.placeholder\" [type]=\"form?.type\"\n                        [value]=\"form?.value\">\n\n                        <div [class]=\"form?.class\" *ngSwitchCase=\"'div'\" [ngStyle]=\"{'display': form?.display ? form.display: 'block'}\">\n                          {{ translate.translate(service.locale, form?.content) }}\n                        </div>\n\n                        <textarea [class]=\"form?.class\" [id]=\"form?.id\" *ngSwitchCase=\"'textarea'\" [ngStyle]=\"{'display': form?.display ? form.display: 'block'}\"\n                        [placeholder]=\"translate.translate(service.locale, form?.placeholder)\"></textarea>\n                      </ng-container>\n                    </ng-container>\n                  </div>\n                </div>\n              </ng-container>-->\n\n              <custom-checkbox-calendar\n                [@FadeSlideInOutKonversoHeightTest]=\"animations.FadeSlideInOut(animationTTX, animationSlideValue)\"\n                *ngIf=\"afterProcess\"\n                [state]=\"afterProcess\"\n                (calendarChange)=\"bindCalendar($event)\"\n                [calendarTemplate]=\"calendarTemplate\"\n                [columnOverride]=\"calendarKeyOverride\">\n              </custom-checkbox-calendar>\n\n              <ng-container *ngIf=\"inputType === 'number'\">\n                <div [@FadeSlideInOutKonversoOpacityOut]=\"animations.FadeSlideInOut(animationTTX, animationSlideValue)\" class=\"bot-input\">\n                                  <!--<input [type]=\"inputType\" [(ngModel)]=\"userInput\" (keyup.enter)=\"userInput && _send()\" (keyup)=\"userWriting($event)\" min=\"2\" [max]=\"inputLimit\"\n                       [placeholder]=\"currentPlaceHolder\">-->\n                  <div class=\"input-number-div\">\n                    <div class=\"input-number-div-arrow\">\n                      <button (click)=\"changeNumber(1)\" class=\"arrow-up\">\n                        <nb-icon [icon]=\"'up_2'\" [size]=\"1.5\"></nb-icon>\n                      </button>\n\n                      <button (click)=\"changeNumber(-1)\" class=\"arrow-down\">\n                        <nb-icon [icon]=\"'down_2'\" [size]=\"1.5\"></nb-icon>\n                      </button>\n                    </div>\n\n                    <input type=\"number\" min=\"1\" value=\"{{ userInput }}\">\n                  </div>\n\n                  <div class=\"bot-container-btn\">\n                    <button class=\"bot-button send-btn input-number-btn showUserInputControls\" [style]=\"{\n                      backgroundColor : assets?.ColorSet?.Primary,\n                      color : assets?.ColorSet?.Secondary\n                  }\" (click)=\"_send();showUserInputControls=false;showUserInvitation=!showUserInvitation;\" [disabled]=\"!userInput\">\n\n                      <ng-container *ngIf=\"inputType === 'number'\">\n                        {{ sendBtn }}\n                      </ng-container>\n                    </button>\n                  </div>\n                </div>\n              </ng-container>\n            </div>\n          </ng-container>\n\n          <div class=\"position-relative bot-input-wrapper\">\n            <ng-container *ngIf=\"afterProcess && config.AfterProcessScenario.FormButtons.length > 0\">\n              <!--<button [class]=\"btn.class\" *ngFor=\"let btn of config.AfterProcessScenario.FormButtons\" [ngStyle]=\"{'display': btn?.display ? btn.display: 'block'}\">\n                {{ translate.translate(service.locale, btn.label) }}\n              </button>-->\n              <button (click)=\"getCalendar()\" class=\"primary rounded validate-after-btn\" style=\"display: inline-block;\">\n                {{ translate.translate(service.locale, 'VALIDATE_AVAILABILITY') }}\n              </button>\n\n              <button class=\"rounded secondary skip-after-btn\" style=\"display: inline-block;\" (click)=\"skip()\">\n                {{ translate.translate(service.locale, 'SKIP') }}\n              </button>\n            </ng-container>\n\n            <ng-container *ngIf=\"!afterProcess && showUserInputControls && inputType !== 'number'\">\n              <ng-container *ngIf=\"!disableUserInput && showInput\">\n                <div class=\"d-flex flex-column w-100 position-realtive bot-input\" id=\"bot-input-div\">\n                  <div [@FadeSlideInOutKonversoTranslateOut]=\"animations.FadeSlideInOut(animationTTX, animationSlideValueAdd)\" class=\"w-100 h-100 d-flex flex-column position-absolute bot-input__controls\">\n\n                    <ng-container *ngIf=\"inputType === 'text'\">\n                      <textarea [(ngModel)]=\"userInput\" (keyup.enter)=\"userInput && _send()\" (keyup)=\"userWriting($event)\" [maxlength]=\"inputLimit\"\n                        [placeholder]=\"currentPlaceHolder\"></textarea>\n                    </ng-container>\n\n                    <ng-container *ngIf=\"inputType !== 'number'\">\n                      <div class=\"bot-container-btn\">\n                        <button class=\"bot-button send-btn\" [style]=\"{\n                          backgroundColor : assets?.ColorSet?.Primary,\n                          color : assets?.ColorSet?.Secondary}\"\n                          (click)=\"_send()\"\n                          [disabled]=\"!userInput\">\n\n                          <ng-container *ngIf=\"inputType !== 'number'\">\n                            {{ sendBtnMsg }}\n                          </ng-container>\n\n                          <!--<ng-container *ngIf=\"inputType === 'number'\">\n                            {{ sendBtn }}\n                          </ng-container>-->\n                        </button>\n\n                        <button *ngIf=\"inputType !== 'number' && IsMobile\" class=\"bot-button-screen\">\n                          <nb-icon [icon]=\"'scan_11'\" [size]=\"1.5\"></nb-icon>\n                          {{ btnScreen }}\n                        </button>\n\n                        <button *ngIf=\"inputType !== 'number'\" class=\"bot-button-attach\" (click)=\"openUpload.emit(true)\">\n                          {{ nbFiles }}\n\n                          <ng-container *ngIf=\"nbFiles <= 1\">\n                            {{ translate.translate(service.locale, 'ATTACHMENT') }}\n                          </ng-container>\n\n                          <ng-container *ngIf=\"nbFiles > 1\">\n                            {{ translate.translate(service.locale, 'ATTACHMENTS') }}\n                          </ng-container>\n\n                          <nb-icon [icon]=\"'attachment'\" [size]=\"1.5\"></nb-icon>\n                        </button>\n                      </div>\n                    </ng-container>\n\n                  </div>\n                </div>\n              </ng-container>\n            </ng-container>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"bot-chat-wrapper\" *ngIf=\"!AssistantMode\">\n        {{AssistantMode}}\n        <div class=\"bot-discussion-wrapper\" #scrollMe [scrollTop]=\"scrollMe.scrollTo(0, 9999999)\">\n          <div class=\"bot-chat\">\n            <ng-container *ngFor=\"let entry of displayData\">\n              <ng-container *ngIf=\"entry.date\">\n                <div [@FadeSlideInOutKonversoTranslateOut]=\"animations.FadeSlideInOut(animationTTX, animationSlideValue)\" class=\"user-input\">\n                  <div class=\"data\" [style]=\"{\n                     backgroundColor : assets?.ColorSet?.Primary,\n                     color : assets?.ColorSet?.Secondary\n                    }\" [innerHTML]=\"entry.message\">\n                  </div>\n                  <span class=\"time\">{{entry.date}}</span>\n                </div>\n              </ng-container>\n              <ng-container *ngIf=\"!entry.date\">\n                <div class=\"bot-answer\">\n                  <ng-container *ngIf=\"entry.text\">\n                    <span *ngIf=\"changed\" class=\"\" [innerHTML]=\"entry.text | safeHtml\"></span>\n                  </ng-container>\n                  <ng-container *ngIf=\"entry.medias && entry.medias.length\n                   && entry.medias[0].required_actions\n                   && entry.medias[0].required_actions.length\">\n                    <ng-container *ngFor=\"let suggest of entry.medias[0].required_actions\">\n                      <ng-container *ngIf=\"suggest.format === 'button'\">\n                        <button *ngIf=\"changed\" [style]=\"{\n                     borderColor : assets?.ColorSet?.Primary,\n                     color : assets?.ColorSet?.Primary\n            }\" class=\"bot-button\" (click)=\"byPassUserInput(suggest?.value?.onClick)\"\n                                [innerHTML]=\"suggest.label|| suggest.value?.displayedMessage || suggest.value?.title \"></button>\n                      </ng-container>\n                    </ng-container>\n                  </ng-container>\n\n                </div>\n              </ng-container>\n            </ng-container>\n          </div>\n        </div>\n        <div class=\"bot-input-wrapper\">\n          <div class=\"bot-input\" *ngIf=\"!disableUserInput && showInput\">\n            <input type=\"text\" [(ngModel)]=\"userInput\" (keyup.enter)=\"userInput && _send()\" (keyup)=\"userWriting($event)\" maxlength=\"200\"\n                   [placeholder]=\"currentPlaceHolder\">\n            <button *ngIf=\"changed\" class=\"bot-button\" [style]=\"{\n                     backgroundColor : assets?.ColorSet?.Primary,\n                     color : assets?.ColorSet?.Secondary\n            }\" (click)=\"_send()\" [disabled]=\"!userInput\">{{ sendBtn }}\n            </button>\n          </div>\n          <div class=\"bot-input-disable\" *ngIf=\"disableUserInput\">\n            <i>{{ select }}</i>\n          </div>\n        </div>\n        <div class=\"bot-logo\">\n          <img [src]=\"assets.FullSizeLogo\">\n        </div>\n      </div>\n    </ng-container>\n\n  </div>\n</div>\n", styles: ["@keyframes gradient{0%{background-position:50% 0%}50%{background-position:50% 100%}to{background-position:50% 0%}}@keyframes pulsebot{0%{transform:scale(1)}50%{transform:scale(1.3)}to{transform:scale(1)}}.bot-listening{height:100%;background:transparent}.bot-listening:before{content:\"\";position:absolute;top:-60vw;left:-80vw;width:150vw;height:150vw;border-radius:50%;background:transparent}.bot-listening:after{content:\"\";position:absolute;top:-40vw;left:-50vw;width:90vw;height:90vw;border-radius:50%;background:transparent}@media screen and (min--moz-device-pixel-ratio:0){.m-carl-notification{transform:translate(0)!important}}.m-carl-notification{position:relative;top:50%}.m-carl-notification .m-cue{width:168px;height:168px;margin:0 auto 50px;display:flex;justify-content:center;align-items:center}.m-carl-notification .m-cue .a-cue-icon{position:absolute;width:100px;height:100px;transform:translate(5px) translateY(5px);border-radius:50%;background:radial-gradient(circle at 50% 50%,#9D107D 1px,#9D107D 3%,#580b58 60%);box-shadow:0 0 10px 5px #00000040;animation:pulsebot 3.5s ease infinite}.m-carl-notification .m-cue .a-cue-voice{transform-origin:center center;height:130px;width:130px;position:absolute;display:flex;justify-content:center;align-items:center}.m-carl-notification .m-cue .a-cue-voice-el{position:absolute;width:130px;height:130px;border-radius:50%;background:#fff;opacity:.2;filter:blur(2px)}.voice1{background:#9A147F!important}.voice2{background:#773691!important}.voice3{background:#4E5CA8!important}.voice4{background:#ABC1F1!important}.m-carl-notification .m-cue .a-cue-voice-el:nth-child(1){animation:hovering 6s ease 0s infinite reverse both}.m-carl-notification .m-cue .a-cue-voice-el:nth-child(2){animation:hovering 7s ease 0s infinite both}.m-carl-notification .m-cue .a-cue-voice-el:nth-child(3){animation:hovering 8s ease 0s infinite reverse both}.m-carl-notification .m-cue .a-cue-voice-el:nth-child(4){animation:hovering 9s ease 0s infinite both}.m-carl-notification .m-cue .a-cue-voice-el:nth-child(5){animation:hovering 10s ease 0s infinite reverse both}.m-carl-notification .m-cue .speaking{animation:pulse 2s ease 0s infinite}.m-carl-notification .a-caption{color:#fff;font-size:1.5em;line-height:1.8em;text-shadow:0px 1px 2px rgba(0,0,0,.26);text-align:center}.m-carl-notification .a-caption.speaking{text-shadow:0px 0px 0px;opacity:.4}@keyframes hovering{0%{transform:rotate(0) translate(18px) rotate(0)}to{transform:rotate(360deg) translate(18px) rotate(-360deg)}}@keyframes pulse{0%{transform:scale(1)}10%{transform:scale(1.15)}15%{transform:scale(1.25)}20%{transform:scale(1.05)}30%{transform:scale(1.3)}40%{transform:scale(1)}50%{transform:scale(1.25)}55%{transform:scale(1.1)}60%{transform:scale(1)}65%{transform:scale(1.3)}70%{transform:scale(1.2)}80%{transform:scale(1.15)}90%{transform:scale(1.25)}to{transform:scale(1.05)}}input::-webkit-outer-spin-button,input::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}input[type=number]{-moz-appearance:textfield}\n"] }]
    }], function () { return [{ type: i1.TranslateService }, { type: i2.KonversoService }, { type: i3.AnimationsService }, { type: undefined, decorators: [{
                type: Inject,
                args: ['__NgxKonverso__']
            }] }]; }, { AssistantMode: [{
            type: Input
        }], assets: [{
            type: Input
        }], firstVisit: [{
            type: Input
        }], firstUsageStory: [{
            type: Input
        }], displayData: [{
            type: Input
        }], disableUserInput: [{
            type: Input
        }], LastUserInput: [{
            type: Input
        }], LastBotAnswer: [{
            type: Input
        }], PlaceHolder: [{
            type: Input
        }], IsMobile: [{
            type: Input
        }], showInput: [{
            type: Input
        }], NumberPlaceHolder: [{
            type: Input
        }], afterProcess: [{
            type: Input
        }], nbFiles: [{
            type: Input
        }], readySend: [{
            type: Output
        }], send: [{
            type: Output
        }], sendBotCommand: [{
            type: Output
        }], sendEvent: [{
            type: Output
        }], sendCalendar: [{
            type: Output
        }], openUpload: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVza3RvcC1mdWxsLXNjcmVlbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9rb252ZXJzby9zcmMvbGliL2Rlc2t0b3AtZnVsbC1zY3JlZW4vZGVza3RvcC1mdWxsLXNjcmVlbi5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9rb252ZXJzby9zcmMvbGliL2Rlc2t0b3AtZnVsbC1zY3JlZW4vZGVza3RvcC1mdWxsLXNjcmVlbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFxQixNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFJaEcsT0FBTyxFQUVILGNBQWMsRUFDZCxnQ0FBZ0MsRUFDaEMsa0NBQWtDLEVBQ2xDLDRCQUE0QixFQUMvQixNQUFNLDBCQUEwQixDQUFDO0FBWWxDLG9CQUFvQjtBQUNwQixPQUFPLEVBQUMsT0FBTyxFQUFhLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFDLE1BQU0scUJBQXFCLENBQUM7Ozs7Ozs7Ozs7Ozs7SUNiL0UsNkJBQW9EO0lBQ2xELDBDQUN3QztJQUF2QiwrTEFBUyxlQUFBLG1CQUFZLENBQUEsSUFBQztJQUFDLGlCQUFrQjtJQUM1RCwwQkFBZTs7O0lBRkksZUFBbUM7SUFBbkMsd0RBQW1DLHlCQUFBOzs7O0lBbUM5Qyw2QkFBOEU7SUFDNUUsK0JBQXdMLGNBQUE7SUFFcEwsMEJBR007SUFDTixnQ0FBbUI7SUFBQSxZQUFzQjtJQUFBLGlCQUFPLEVBQUEsRUFBQTtJQUd0RCwwQkFBZTs7O0lBVFIsZUFBNEc7SUFBNUcsaUpBQTRHO0lBQ0csZUFBcUQ7SUFBckQsNEdBQXFEO0lBQWxLLGlKQUE0RztJQUM3RixlQUVWO0lBRlUsa0pBRVY7SUFBQywyRUFBbUM7SUFFekIsZUFBc0I7SUFBdEIsK0NBQXNC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WUFDRyxRQUFRO2tCQUFoQixLQUFLO1lBQ0csU0FBUztrQkFBakIsS0FBSztZQUNHLGlCQUFpQjtrQkFBekIsS0FBSztZQUNHLFlBQVk7a0JBQXBCLEtBQUs7WUFDRyxPQUFPO2tCQUFmLEtBQUs7WUFFSSxTQUFTO2tCQUFsQixNQUFNO1lBQ0csSUFBSTtrQkFBYixNQUFNO1lBQ0csY0FBYztrQkFBdkIsTUFBTTtZQUNHLFNBQVM7a0JBQWxCLE1BQU07WUFDRyxZQUFZO2tCQUFyQixNQUFNO1lBQ0csVUFBVTtrQkFBbkIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIEluamVjdCwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtEZWZhdWx0QXNzZXRzLCBLb252ZXJzb0ludGVyZmFjZSwgT3BlbkNoYXRCb3RSZXNwb25zZSwgVXNlcklucHV0fSBmcm9tICcuLi8uLi9pbnRlcmZhY2UvS29udmVyc29JbnRlcmZhY2UnO1xuaW1wb3J0IHtLb252ZXJzb1NlcnZpY2V9IGZyb20gJy4uL2tvbnZlcnNvLnNlcnZpY2UnO1xuaW1wb3J0IHtUcmFuc2xhdGVTZXJ2aWNlfSBmcm9tICcuLi90cmFuc2xhdGUuc2VydmljZSc7XG5pbXBvcnQge1xuICAgIEFuaW1hdGlvbnNTZXJ2aWNlLFxuICAgIEZhZGVTbGlkZUluT3V0LFxuICAgIEZhZGVTbGlkZUluT3V0S29udmVyc29PcGFjaXR5T3V0LFxuICAgIEZhZGVTbGlkZUluT3V0S29udmVyc29UcmFuc2xhdGVPdXQsXG4gICAgRmFkZVNsaWRlSW5PdXRLb252ZXJzb0hlaWdodFxufSBmcm9tICduZ3gtbm93YnJhaW5zLWFuaW1hdGlvbnMnO1xuXG5kZWNsYXJlIHZhciBQSVhJOiBhbnk7XG5jb25zdCBkZWZhdWx0SW5wdXRUeXBlID0gJ3RleHQnO1xuY29uc3QgZGVmYXVsdElucHV0TGltaXQgPSAzMDA7XG5jb25zdCBBTklNQVRJT05fVFRYID0gNzUwO1xuY29uc3QgQU5JTUFUSU9OX1RUWF9BREQgPSAyNTA7XG5jb25zdCBBTklNQVRJT05fU0xJREVfVkFMVUUgPSAtNTA7XG5jb25zdCBBTklNQVRJT05fU0xJREVfVkFMVUVfQUREID0gLTI1O1xuY29uc3QgQU5JTUFUSU9OX0hFSUdIVF9UVFggPSAxMjUwO1xuXG5cbi8qIFRPRE8gcmVtb3ZlIGl0ICovXG5pbXBvcnQge2FuaW1hdGUsIGtleWZyYW1lcywgc3R5bGUsIHRyYW5zaXRpb24sIHRyaWdnZXJ9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuXG5jb25zdCBBTklNQVRJT05fVFlQRV9DVUJJQ19CRVpJRVIgPSAnY3ViaWMtYmV6aWVyKDAuMzksIDAuNTgsIDAuNTcsIDEpJztcblxuLyogVE9ETyAqL1xuLyogbW92ZSB0aGUgYW5pbWF0aW9ucyB0byBuZ3gtbm93YnJhaW5zLWFuaW1hdGlvbnMgKi9cbmV4cG9ydCBjb25zdCBGYWRlU2xpZGVJbk91dEtvbnZlcnNvVHJhbnNsYXRlT3V0VGVzdCA9IHRyaWdnZXIoJ0ZhZGVTbGlkZUluT3V0S29udmVyc29UcmFuc2xhdGVPdXRUZXN0JywgW1xuICAgIHRyYW5zaXRpb24oJzplbnRlcicsIFtcbiAgICAgICAgc3R5bGUoe29wYWNpdHk6IDAsIHRvcDogJ3t7cGVyY2VudF9zdGFydH19JSd9KSxcbiAgICAgICAgYW5pbWF0ZShge3t0dHh9fW1zICR7QU5JTUFUSU9OX1RZUEVfQ1VCSUNfQkVaSUVSfWAsIHN0eWxlKHtvcGFjaXR5OiAxLCB0b3A6ICcwJSd9KSlcbiAgICBdKSxcbiAgICB0cmFuc2l0aW9uKCc6bGVhdmUnLCBbXG4gICAgICAgIHN0eWxlKHtvcGFjaXR5OiAxfSksXG4gICAgICAgIGFuaW1hdGUoJ3t7dHR4fX1tcyBlYXNlLWluLW91dCcsIHN0eWxlKHtvcGFjaXR5OiAwfSkpXG4gICAgXSlcbl0pO1xuXG5leHBvcnQgY29uc3QgRmFkZVNsaWRlSW5PdXRLb252ZXJzb0hlaWdodFRlc3QgPSB0cmlnZ2VyKCdGYWRlU2xpZGVJbk91dEtvbnZlcnNvSGVpZ2h0VGVzdCcsIFtcbiAgICB0cmFuc2l0aW9uKCc6ZW50ZXInLCBbXG4gICAgICAgIHN0eWxlKHtoZWlnaHQ6IDB9KSxcbiAgICAgICAgYW5pbWF0ZShge3t0dHh9fW1zICR7QU5JTUFUSU9OX1RZUEVfQ1VCSUNfQkVaSUVSfWAsIHN0eWxlKHtoZWlnaHQ6ICcqJ30pKVxuICAgIF0pLFxuICAgIHRyYW5zaXRpb24oJzpsZWF2ZScsIFtcbiAgICAgICAgc3R5bGUoe29wYWNpdHk6IDF9KSxcbiAgICAgICAgYW5pbWF0ZSgne3t0dHh9fW1zIGVhc2UtaW4tb3V0Jywgc3R5bGUoe29wYWNpdHk6IDB9KSlcbiAgICBdKVxuXSk7XG5cbmV4cG9ydCBjb25zdCBGYWRlU2xpZGVJbk91dEtvbnZlcnNvSGVpZ2h0T3V0VGVzdCA9IHRyaWdnZXIoJ0ZhZGVTbGlkZUluT3V0S29udmVyc29IZWlnaHRPdXRUZXN0JywgW1xuICAgIHRyYW5zaXRpb24oJzplbnRlcicsIFtcbiAgICAgICAgc3R5bGUoe2hlaWdodDogJyonfSksXG4gICAgICAgIGFuaW1hdGUoYHt7dHR4fX1tcyAke0FOSU1BVElPTl9UWVBFX0NVQklDX0JFWklFUn1gLCBzdHlsZSh7aGVpZ2h0OiAwfSkpXG4gICAgXSlcbl0pO1xuXG4vKiBUT0RPIHJlbW92ZSBpdCAqL1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2JvdC1mdWxsLXNjcmVlbicsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2Rlc2t0b3AtZnVsbC1zY3JlZW4uY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2Rlc2t0b3AtZnVsbC1zY3JlZW4uY29tcG9uZW50LmNzcyddLFxuICAgIC8vYW5pbWF0aW9uczogW0ZhZGVTbGlkZUluT3V0LCBGYWRlU2xpZGVJbk91dEtvbnZlcnNvT3BhY2l0eU91dCwgRmFkZVNsaWRlSW5PdXRLb252ZXJzb1RyYW5zbGF0ZU91dCwgRmFkZVNsaWRlSW5PdXRLb252ZXJzb0hlaWdodF1cbiAgICBhbmltYXRpb25zOiBbRmFkZVNsaWRlSW5PdXQsIEZhZGVTbGlkZUluT3V0S29udmVyc29PcGFjaXR5T3V0LCBGYWRlU2xpZGVJbk91dEtvbnZlcnNvVHJhbnNsYXRlT3V0LCBGYWRlU2xpZGVJbk91dEtvbnZlcnNvSGVpZ2h0LCBGYWRlU2xpZGVJbk91dEtvbnZlcnNvVHJhbnNsYXRlT3V0VGVzdCwgRmFkZVNsaWRlSW5PdXRLb252ZXJzb0hlaWdodFRlc3RdIC8vIFRPRE8gcmVtb3ZlIGl0XG59KVxuZXhwb3J0IGNsYXNzIERlc2t0b3BGdWxsU2NyZWVuQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQge1xuICAgIEBJbnB1dCgpIEFzc2lzdGFudE1vZGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBASW5wdXQoKSBhc3NldHM6IERlZmF1bHRBc3NldHM7XG4gICAgQElucHV0KCkgZmlyc3RWaXNpdDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIGZpcnN0VXNhZ2VTdG9yeTogc3RyaW5nW107XG4gICAgQElucHV0KCkgZGlzcGxheURhdGE6IChVc2VySW5wdXQgfCBPcGVuQ2hhdEJvdFJlc3BvbnNlKVtdO1xuICAgIEBJbnB1dCgpIGRpc2FibGVVc2VySW5wdXQ6IGJvb2xlYW47XG4gICAgQElucHV0KCkgTGFzdFVzZXJJbnB1dDogVXNlcklucHV0O1xuICAgIEBJbnB1dCgpIExhc3RCb3RBbnN3ZXI6IE9wZW5DaGF0Qm90UmVzcG9uc2U7XG4gICAgQElucHV0KCkgUGxhY2VIb2xkZXI6IHN0cmluZ1tdO1xuICAgIEBJbnB1dCgpIElzTW9iaWxlOiBib29sZWFuID0gZmFsc2U7XG4gICAgQElucHV0KCkgc2hvd0lucHV0OiBib29sZWFuO1xuICAgIEBJbnB1dCgpIE51bWJlclBsYWNlSG9sZGVyOiBzdHJpbmdbXTtcbiAgICBASW5wdXQoKSBhZnRlclByb2Nlc3MgPSBmYWxzZTtcbiAgICBASW5wdXQoKSBuYkZpbGVzID0gMDtcblxuICAgIEBPdXRwdXQoKSByZWFkeVNlbmQ6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oZmFsc2UpO1xuICAgIEBPdXRwdXQoKSBzZW5kOiBFdmVudEVtaXR0ZXI8VXNlcklucHV0PiA9IG5ldyBFdmVudEVtaXR0ZXI8VXNlcklucHV0PihudWxsKTtcbiAgICBAT3V0cHV0KCkgc2VuZEJvdENvbW1hbmQ6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KG51bGwpO1xuICAgIEBPdXRwdXQoKSBzZW5kRXZlbnQ6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KG51bGwpO1xuICAgIEBPdXRwdXQoKSBzZW5kQ2FsZW5kYXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KG51bGwpO1xuICAgIEBPdXRwdXQoKSBvcGVuVXBsb2FkOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KGZhbHNlKTtcbiAgICBwdWJsaWMgdXNlcklucHV0OiBzdHJpbmc7XG4gICAgcHVibGljIGN1cnJlbnRQbGFjZUhvbGRlcjogc3RyaW5nID0gJyc7XG4gICAgcHVibGljIHNlbmRCdG4gPSAnJztcbiAgICBwdWJsaWMgc2VuZEJ0bk1zZyA9ICcnO1xuICAgIHB1YmxpYyBzZWxlY3QgPSAnJztcbiAgICBwdWJsaWMgY2hhbmdlZCA9IGZhbHNlO1xuICAgIHB1YmxpYyBib3RMaXN0ZW5pbmcgPSBmYWxzZTtcbiAgICBwdWJsaWMgc2hvd1dyYXBwZXIgPSB0cnVlO1xuICAgIHB1YmxpYyBzaG93VGV4dCA9IHRydWU7XG4gICAgcHVibGljIGlucHV0VHlwZTogc3RyaW5nID0gZGVmYXVsdElucHV0VHlwZTtcbiAgICBwdWJsaWMgaW5wdXRMaW1pdDogbnVtYmVyID0gZGVmYXVsdElucHV0TGltaXQ7XG4gICAgcHJpdmF0ZSBuZXdNZXNzYWdlID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBtZXNzYWdlQ3VycmVudCA9ICcnO1xuICAgIHByaXZhdGUgbXNnQXJyYXkgPSBbXTtcbiAgICBwcml2YXRlIGJvdExpc3RlbmluZ1RpbWVyID0gMDtcbiAgICBwcml2YXRlIGFuaW1fZG9uZSA9IGZhbHNlO1xuICAgIHByaXZhdGUgcmVsb2FkZWQgPSBmYWxzZTtcbiAgICBwcml2YXRlIHRpbWVyO1xuICAgIHB1YmxpYyBidG5TY3JlZW4gPSAnJztcbiAgICBwdWJsaWMgbmJBdHRhY2htZW50cyA9IDA7XG4gICAgY29uZmlnOiBLb252ZXJzb0ludGVyZmFjZTtcbiAgICBwcml2YXRlIGRheXMgPSBbXTtcbiAgICBwdWJsaWMgY2FsZW5kYXJBdmFpbGFiaWxpdHkgPSB7fTtcbiAgICBwdWJsaWMgY2FsZW5kYXJUZW1wbGF0ZSA9IHtcbiAgICAgICAgbW9ybmluZzoge2FsbDogdHJ1ZSwgbW9uZGF5OiB0cnVlLCB0dWVzZGF5OiB0cnVlLCB3ZWRuZXNkYXk6IHRydWUsIHRodXJzZGF5OiB0cnVlLCBmcmlkYXk6IHRydWV9LFxuICAgICAgICBhZnRlcm5vb246IHthbGw6IHRydWUsIG1vbmRheTogdHJ1ZSwgdHVlc2RheTogdHJ1ZSwgd2VkbmVzZGF5OiB0cnVlLCB0aHVyc2RheTogdHJ1ZSwgZnJpZGF5OiB0cnVlfVxuICAgIH07XG4gICAgcHVibGljIGNhbGVuZGFyS2V5T3ZlcnJpZGUgPSB7XG4gICAgICAgIG1vcm5pbmc6ICdNT1JOSU5HX0FMTCcsXG4gICAgICAgIGFmdGVybm9vbjogJ0FGVEVSTk9PTl9BTEwnLFxuICAgICAgICBtb25kYXk6ICdNT05EQVknLFxuICAgICAgICB0dWVzZGF5OiAnVFVFU0RBWScsXG4gICAgICAgIHdlZG5lc2RheTogJ1dFRE5FU0RBWScsXG4gICAgICAgIHRodXJzZGF5OiAnVEhVUlNEQVknLFxuICAgICAgICBmcmlkYXk6ICdGUklEQVknXG4gICAgfTtcbiAgICBwdWJsaWMgc2hvd1VzZXJJbnB1dENvbnRyb2xzID0gdHJ1ZTtcbiAgICBwdWJsaWMgc2hvd1VzZXJJbnZpdGF0aW9uID0gdHJ1ZTtcblxuICAgIHB1YmxpYyBhbmltYXRpb25UVFggPSBBTklNQVRJT05fVFRYO1xuICAgIHB1YmxpYyBhbmltYXRpb25UdHhBZGQgPSBBTklNQVRJT05fVFRYX0FERDtcbiAgICBwdWJsaWMgYW5pbWF0aW9uU2xpZGVWYWx1ZSA9IEFOSU1BVElPTl9TTElERV9WQUxVRTtcbiAgICBwdWJsaWMgYW5pbWF0aW9uU2xpZGVWYWx1ZUFkZCA9IEFOSU1BVElPTl9TTElERV9WQUxVRV9BREQ7XG4gICAgcHVibGljIGFuaW1hdGlvbkhlaWdodFRUWCA9IEFOSU1BVElPTl9IRUlHSFRfVFRYO1xuXG4gICAgY2hhbmdlTnVtYmVyKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKCgrdGhpcy51c2VySW5wdXQgKyB2YWx1ZSkgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLnVzZXJJbnB1dCA9ICgrdGhpcy51c2VySW5wdXQgKyB2YWx1ZSkudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB0cmFuc2xhdGU6IFRyYW5zbGF0ZVNlcnZpY2UsIHB1YmxpYyBzZXJ2aWNlOiBLb252ZXJzb1NlcnZpY2UsIHB1YmxpYyBhbmltYXRpb25zOiBBbmltYXRpb25zU2VydmljZSxcbiAgICAgICAgICAgICAgICBASW5qZWN0KCdfX05neEtvbnZlcnNvX18nKSBjb25maWc6IEtvbnZlcnNvSW50ZXJmYWNlKSB7XG4gICAgICAgIHNlcnZpY2UubGFuZy5zdWJzY3JpYmUoKHIpID0+IHtcbiAgICAgICAgICAgIGlmIChzZXJ2aWNlLmxvY2FsZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VuZEJ0biA9IHRyYW5zbGF0ZS50cmFuc2xhdGUoc2VydmljZS5sb2NhbGUsICdTRU5EJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZW5kQnRuTXNnID0gdHJhbnNsYXRlLnRyYW5zbGF0ZShzZXJ2aWNlLmxvY2FsZSwgJ1NFTkRfTUVTU0FHRScpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ID0gdHJhbnNsYXRlLnRyYW5zbGF0ZShzZXJ2aWNlLmxvY2FsZSwgJ1NFTEVDVCcpO1xuICAgICAgICAgICAgICAgIHRoaXMuYnRuU2NyZWVuID0gdHJhbnNsYXRlLnRyYW5zbGF0ZShzZXJ2aWNlLmxvY2FsZSwgJ1NDUkVFTlNIT1QnKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuZGF5cyA9IFtcbiAgICAgICAgICAgICAgICAgICAgJ01PTkRBWScsXG4gICAgICAgICAgICAgICAgICAgICdUVUVTREFZJyxcbiAgICAgICAgICAgICAgICAgICAgJ1dFRE5FU0RBWScsXG4gICAgICAgICAgICAgICAgICAgICdUSFVSU0RBWScsXG4gICAgICAgICAgICAgICAgICAgICdGUklEQVknLFxuICAgICAgICAgICAgICAgICAgICAnU0FUVVJEQVknLFxuICAgICAgICAgICAgICAgICAgICAnU1VOREFZJyxcbiAgICAgICAgICAgICAgICAgICAgJ01PTkRBWSdcbiAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcbiAgICB9XG5cbiAgICBuZ09uQ2hhbmdlcygpIHtcbiAgICAgICAgaWYgKHRoaXMuYWZ0ZXJQcm9jZXNzKSB7XG4gICAgICAgICAgICAvL3RoaXMuTGFzdFVzZXJJbnB1dCA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLkxhc3RCb3RBbnN3ZXIudGV4dCA9IHRoaXMuY29uZmlnLkFmdGVyUHJvY2Vzc1NjZW5hcmlvLkJvdE1lc3NhZ2VbdGhpcy5zZXJ2aWNlLmxvY2FsZV07XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmNvbmZpZy5BZnRlclByb2Nlc3NTY2VuYXJpby5Gb3JtRWxlbWVudHNbMF1bMF0ubGFiZWwgPT0gJ0pvdXIgMScpIHtcbiAgICAgICAgICAgICAgICBsZXQgZGF5MSA9IHRoaXMuZGF5c1tuZXcgRGF0ZSgpLmdldERheSgpIC0gMV07XG4gICAgICAgICAgICAgICAgbGV0IGRheTIgPSB0aGlzLmRheXNbbmV3IERhdGUoKS5nZXREYXkoKV07XG4gICAgICAgICAgICAgICAgbGV0IGRheTMgPSB0aGlzLmRheXNbbmV3IERhdGUoKS5nZXREYXkoKSArIDFdO1xuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnLkFmdGVyUHJvY2Vzc1NjZW5hcmlvLkZvcm1FbGVtZW50c1swXVswXS5sYWJlbCA9IGRheTE7XG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWcuQWZ0ZXJQcm9jZXNzU2NlbmFyaW8uRm9ybUVsZW1lbnRzWzFdWzBdLmxhYmVsID0gZGF5MjtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZy5BZnRlclByb2Nlc3NTY2VuYXJpby5Gb3JtRWxlbWVudHNbMl1bMF0ubGFiZWwgPSBkYXkzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblxuICAgICAgICB0aGlzLmNoYW5nZWQgPSBmYWxzZTtcblxuICAgICAgICBpZiAodGhpcy5MYXN0Qm90QW5zd2VyICYmIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0JykgJiYgdGhpcy5MYXN0Qm90QW5zd2VyPy50ZXh0ICYmICF0aGlzLkxhc3RCb3RBbnN3ZXI/LnRleHQ/LmluY2x1ZGVzKCdsb2FkaW5nLWRvdHMnKSkge1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHQnKS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLkxhc3RCb3RBbnN3ZXIgJiYgdGhpcy5MYXN0Qm90QW5zd2VyLnRleHQgJiYgdGhpcy5MYXN0Qm90QW5zd2VyPy50ZXh0Py5pbmNsdWRlcygnPG51bWJlcj4nKSAmJiB0aGlzLkxhc3RCb3RBbnN3ZXI/LnRleHQ/LmluY2x1ZGVzKCc8L251bWJlcj4nKSkge1xuICAgICAgICAgICAgdGhpcy51c2VySW5wdXQgPSAnMSc7XG4gICAgICAgICAgICB0aGlzLmlucHV0VHlwZSA9ICdudW1iZXInO1xuICAgICAgICAgICAgdGhpcy5pbnB1dExpbWl0ID0gOTk5O1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGxhY2VIb2xkZXIgPSB0aGlzLk51bWJlclBsYWNlSG9sZGVyW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuTnVtYmVyUGxhY2VIb2xkZXIubGVuZ3RoKV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQbGFjZUhvbGRlciA9IHRoaXMuUGxhY2VIb2xkZXJbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5QbGFjZUhvbGRlci5sZW5ndGgpXTtcbiAgICAgICAgICAgIHRoaXMuaW5wdXRUeXBlID0gZGVmYXVsdElucHV0VHlwZTtcbiAgICAgICAgICAgIHRoaXMuaW5wdXRMaW1pdCA9IGRlZmF1bHRJbnB1dExpbWl0O1xuICAgICAgICB9XG5cblxuICAgICAgICAvKiAgIGlmICghdGhpcy5hbmltX2RvbmUpIHtcbiAgICAgICAgICAgICAgIGxldCB0MiA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5MYXN0Qm90QW5zd2VyICAmJiAhdGhpcy5MYXN0Qm90QW5zd2VyPy50ZXh0ICYmICF0aGlzLkxhc3RCb3RBbnN3ZXI/LnRleHQ/LmluY2x1ZGVzKCdsb2FkaW5nLWRvdHMnKSAmJiB0aGlzLmFuaW1fZG9uZSkge1xuICAgICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHQyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RyaW5nID0gdGhpcy5MYXN0Qm90QW5zd2VyPy50ZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAuc3BsaXQoJzxici8+Jykuam9pbihgIGApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAuc3BsaXQoJyZlYWN1dGU7Jykuam9pbignw6knKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNwbGl0KCcmZWdyYXZlOycpLmpvaW4oJ8OoJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC88W14+XSo+Py9nbSwgJycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAuc3BsaXQoJyZuYnNwOycpLmpvaW4oJycpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgIHRoaXMubXNnQXJyYXkgPSBzdHJpbmcuc3BsaXQoJycpO1xuICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5tZXNzYWdlQ3VycmVudCAhPT0gc3RyaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5ld01lc3NhZ2UgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlQ3VycmVudCA9IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGF1bmNoTG9vcCgpO1xuICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgIC8vdGhpcy5sb29wZXIoYXJyYXksIHRpbWVyKTtcbiAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuTGFzdEJvdEFuc3dlciAmJiB0aGlzLkxhc3RCb3RBbnN3ZXIudGV4dCkge1xuICAgICAgICAgICAgICAgY29uc3Qgc3RyaW5nID0gdGhpcy5MYXN0Qm90QW5zd2VyPy50ZXh0XG4gICAgICAgICAgICAgICAgICAgLnNwbGl0KCc8YnIvPicpLmpvaW4oYCBgKVxuICAgICAgICAgICAgICAgICAgIC5zcGxpdCgnJmVhY3V0ZTsnKS5qb2luKCfDqScpXG4gICAgICAgICAgICAgICAgICAgLnNwbGl0KCcmZWdyYXZlOycpLmpvaW4oJ8OoJylcbiAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvPFtePl0qPj8vZ20sICcnKVxuICAgICAgICAgICAgICAgICAgIC5zcGxpdCgnJm5ic3A7Jykuam9pbignJyk7XG5cbiAgICAgICAgICAgICAgIHRoaXMubXNnQXJyYXkgPSBzdHJpbmcuc3BsaXQoJycpO1xuICAgICAgICAgICAgICAgaWYgKHRoaXMubWVzc2FnZUN1cnJlbnQgIT09IHN0cmluZyAmJiBzdHJpbmcgIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgdGhpcy5uZXdNZXNzYWdlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2VDdXJyZW50ID0gc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgIHRoaXMubGF1bmNoTG9vcCgpO1xuICAgICAgICAgICAgICAgfVxuICAgICAgICAgICB9Ki9cblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlZCA9IHRydWU7XG4gICAgICAgIH0sIDEwMCk7XG4gICAgfVxuXG4gICAgYmluZENhbGVuZGFyKCRldmVudDogYW55KSB7XG4gICAgICAgIC8vY29uc29sZS5sb2coJ2JpbmRDYWxlbmRhciAkZXZlbnQnLCAkZXZlbnQpXG4gICAgICAgIGRlbGV0ZSAkZXZlbnQuYWxsO1xuICAgICAgICB0aGlzLmNhbGVuZGFyQXZhaWxhYmlsaXR5ID0gJGV2ZW50O1xuICAgIH1cblxuICAgIGdldENhbGVuZGFyKCkge1xuICAgICAgICB0aGlzLnNlbmRDYWxlbmRhci5lbWl0KHRoaXMuY2FsZW5kYXJBdmFpbGFiaWxpdHkpO1xuICAgIH1cblxuICAgIHNraXAoKSB7XG4gICAgICAgIHRoaXMuc2VuZENhbGVuZGFyLmVtaXQobnVsbCk7XG4gICAgfVxuXG4gICAgbGF1bmNoTG9vcCgpIHtcbiAgICAgICAgdGhpcy50aW1lciA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLm1zZ0FycmF5Lmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLm5ld01lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHQnKSkge1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dCcpLmlubmVySFRNTCA9ICcnO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMubmV3TWVzc2FnZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIC8vdGhpcy5tc2dBcnJheSA9IHRoaXMubWVzc2FnZUN1cnJlbnQuc3BsaXQoXCJcIik7XG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVyKTtcbiAgICAgICAgICAgICAgICB0aGlzLmxhdW5jaExvb3AoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMubG9vcGVyKCk7XG4gICAgICAgIH0sIDYwKTtcbiAgICB9XG5cbiAgICBsb29wZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLm1zZ0FycmF5Lmxlbmd0aCA+IDAgJiYgIXRoaXMucmVsb2FkZWQpIHtcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dCcpKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHQnKS5pbm5lckhUTUwgKz0gdGhpcy5tc2dBcnJheS5zaGlmdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaW5wdXRUeXBlID0gZGVmYXVsdElucHV0VHlwZTtcbiAgICAgICAgdGhpcy5pbnB1dExpbWl0ID0gZGVmYXVsdElucHV0TGltaXQ7XG4gICAgICAgIGlmICh0aGlzLlBsYWNlSG9sZGVyKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQbGFjZUhvbGRlciA9IHRoaXMuUGxhY2VIb2xkZXJbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5QbGFjZUhvbGRlci5sZW5ndGgpXTtcbiAgICAgICAgICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRQbGFjZUhvbGRlciA9IHRoaXMuUGxhY2VIb2xkZXJbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5QbGFjZUhvbGRlci5sZW5ndGgpXTtcbiAgICAgICAgICAgIH0sIDMwMDApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXNlcldyaXRpbmcoa2V5OiBhbnkpIHtcbiAgICAgICAgaWYgKGtleS5jb2RlID09PSAnRW50ZXInKSB7XG4gICAgICAgICAgICB0aGlzLmJvdExpc3RlbmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5ib3RMaXN0ZW5pbmdUaW1lciA9IDA7XG4gICAgICAgIH0gZWxzZSBpZiAoa2V5LmNvZGUgPT09ICdCYWNrc3BhY2UnKSB7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYm90TGlzdGVuaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmICh0aGlzLmJvdExpc3RlbmluZ1RpbWVyID09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJvdExpc3RlbmluZ1RpbWVyICs9IDI7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuYm90TGlzdGVuaW5nVGltZXIgPCA1KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ib3RMaXN0ZW5pbmdUaW1lciArPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGVtaXQoJGV2ZW50KSB7XG4gICAgICAgIHRoaXMuZmlyc3RWaXNpdCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJlYWR5U2VuZC5lbWl0KHRydWUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBfc2VuZCgpIHtcbiAgICAgICAgaWYgKHRoaXMuTGFzdEJvdEFuc3dlcj8uZW5kT2ZUb3BpYyAmJiB0aGlzLkxhc3RVc2VySW5wdXQpIHtcbiAgICAgICAgICAgIHRoaXMuTGFzdFVzZXJJbnB1dC5tZXNzYWdlID0gJyc7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmJvdExpc3RlbmluZyA9IGZhbHNlO1xuICAgICAgICBjb25zdCB1c2VyRGF0YTogVXNlcklucHV0ID0ge1xuICAgICAgICAgICAgbWVzc2FnZTogdGhpcy51c2VySW5wdXQsXG4gICAgICAgICAgICBkYXRlOiBuZXcgRGF0ZSgpLnRvTG9jYWxlVGltZVN0cmluZyhuYXZpZ2F0b3IubGFuZ3VhZ2UsIHtcbiAgICAgICAgICAgICAgICBob3VyOiAnMi1kaWdpdCcsXG4gICAgICAgICAgICAgICAgbWludXRlOiAnMi1kaWdpdCdcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuc2VuZC5lbWl0KHVzZXJEYXRhKTtcbiAgICAgICAgdGhpcy51c2VySW5wdXQgPSBudWxsO1xuICAgIH1cblxuICAgIGFzeW5jIHNjcm9sbChzY3JvbGxIZWlnaHQ6IG51bWJlcikge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8bnVtYmVyPigocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgwKTtcbiAgICAgICAgICAgIH0sIDMwMCk7XG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgYnlQYXNzVXNlcklucHV0KGJvdGRhdGE6IHN0cmluZywgaT86IG51bWJlcikge1xuICAgICAgICB0aGlzLnNlbmRCb3RDb21tYW5kLmVtaXQoYm90ZGF0YSk7XG4gICAgfVxufVxuIiwiPCEtLTxkaXYgY2xhc3M9XCJib3QtY29udGFpbmVyXCIgIFtjbGFzc109XCJJc01vYmlsZSA/ICdib3QtbW9iaWxlJyA6ICcnXCIgW3N0eWxlXT1cInsnYmFja2dyb3VuZC1jb2xvcicgOiAnIzEwMDY1MiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7J31cIi0tPlxuXG4gIDwhLS08Y2FudmFzIGNsYXNzPVwib3JiLWNhbnZhc1wiPjwvY2FudmFzPlxuICA8ZGl2IGNsYXNzPVwib3ZlcmxheVwiPlxuICAgIDxkaXYgY2xhc3M9XCJvdmVybGF5X19pbm5lclwiPlxuICAgIDwvZGl2PlxuICA8L2Rpdj4tLT5cbiAgPGRpdiBjbGFzcz1cImJvdC1jb250YWluZXJcIiAgW2NsYXNzXT1cIklzTW9iaWxlID8gJ2JvdC1tb2JpbGUnIDogJydcIiBbc3R5bGVdPVwieydiYWNrZ3JvdW5kLWNvbG9yJyA6ICcjMTAwNjUyIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDsnfVwiXG4gICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS9odG1sXCI+XG4gIDxkaXYgY2xhc3M9XCJib3Qtdmlld1wiPlxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJmaXJzdFZpc2l0ICYmIGZpcnN0VXNhZ2VTdG9yeVwiPlxuICAgICAgPGJvdC1maXJzdC12aXNpdCBbZmlyc3RVc2FnZVN0b3J5XT1cImZpcnN0VXNhZ2VTdG9yeVwiIFthc3NldHNdPVwiYXNzZXRzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgKHJlYWR5KT1cImVtaXQoJGV2ZW50KVwiPjwvYm90LWZpcnN0LXZpc2l0PlxuICAgIDwvbmctY29udGFpbmVyPlxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhZmlyc3RWaXNpdCB8fCAhZmlyc3RVc2FnZVN0b3J5XCI+XG4gICAgICA8YnV0dG9uIChjbGljayk9XCJieVBhc3NVc2VySW5wdXQoJ2V4aXQnLCAwKVwiIGlkPVwiZXhpdC1idG5cIiBzdHlsZT1cImRpc3BsYXk6IG5vbmU7XCI+PC9idXR0b24+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJib3QtYXNzaXN0YW50LXdyYXBwZXJcIiAqbmdJZj1cIkFzc2lzdGFudE1vZGVcIj5cbiAgICAgICAgPCEtLSBUT0RPIGRvIHdlIG5lZWQgaWQsIHJlbW92ZSBpdD8gLS0+XG4gICAgICAgIDwhLS08ZGl2ICpuZ0lmPVwiIWJvdExpc3RlbmluZ1wiIGNsYXNzPVwiYm90LWxvZ29cIiBpZD1cImJvdGxvZ29cIj5cbiAgICAgICAgICA8aW1nIFtzcmNdPVwiYXNzZXRzLkZ1bGxTaXplTG9nb1wiPlxuICAgICAgICA8L2Rpdj4tLT5cbiAgICAgICAgPCEtLTxkaXYgW25nU3R5bGVdPVwieydoZWlnaHQnOiAnNDAlJ31cIiBjbGFzcz1cImJvdC1sb2dvIGJvdC1saXN0ZW5pbmdcIj5cbiAgICAgICAgICA8ZGl2IFtuZ1N0eWxlXT1cInsndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZVkoLTEwdmgpJ31cIiBjbGFzcz1cIm0tY2FybC1ub3RpZmljYXRpb25cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtLWNhcmwtbm90aWZpY2F0aW9uLWN1ZSBtLWN1ZVwiPlxuICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiYm90TGlzdGVuaW5nXCIgY2xhc3M9XCJhLWN1ZS12b2ljZVwiIGlkPVwiYm90XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImEtY3VlLXZvaWNlLWVsIHZvaWNlMVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhLWN1ZS12b2ljZS1lbCB2b2ljZTJcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYS1jdWUtdm9pY2UtZWwgdm9pY2UzXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImEtY3VlLXZvaWNlLWVsIHZvaWNlNFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhLWN1ZS12b2ljZS1lbFwiPjwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImEtY3VlLWljb25cIiBpZD1cImJvdC1pY29uXCI+PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+LS0+XG5cbiAgICAgICAgPGRpdiBbQEZhZGVTbGlkZUluT3V0S29udmVyc29PcGFjaXR5T3V0XT1cImFuaW1hdGlvbnMuRmFkZVNsaWRlSW5PdXQoYW5pbWF0aW9uVFRYLCBhbmltYXRpb25TbGlkZVZhbHVlKVwiIFtuZ1N0eWxlXT1cInsnaGVpZ2h0JzogJzQwJSd9XCIgY2xhc3M9XCJib3RcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlMVwiPjwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGUyXCI+PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZTNcIj48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiAgY2xhc3M9XCJib3QtZGlzY3Vzc2lvbi13cmFwcGVyXCIgc3R5bGU9XCJtaW4taGVpZ2h0OiA2MCU7IG1heC1oZWlnaHQ6IDYwJTsgaGVpZ2h0OiA2MCU7IC8qbWF4LWhlaWdodDogMTIwcHg7Ki9cIj5cbiAgICAgICAgICA8IS0tIFVTRVIgSU5QVVQgLS0+XG4gICAgICAgICAgPGRpdiBbY2xhc3MudXNlci1pbnB1dC1jb250YWluZXItb3V0ZXItaGlkZGVuXT1cIiFzaG93VXNlckludml0YXRpb25cIiBjbGFzcz1cIm92ZXJmbG93LWhpZGRlbiBkLWZsZXggZmxleC1jb2x1bW4gdy0xMDAgcG9zaXRpb24tcmVsYXRpdmUgdXNlci1pbnB1dC1jb250YWluZXItb3V0ZXJcIj5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIoTGFzdFVzZXJJbnB1dCAmJiAhYWZ0ZXJQcm9jZXNzKSB8fCAhc2hvd1VzZXJJbnZpdGF0aW9uXCI+XG4gICAgICAgICAgICAgIDxkaXYgW0BGYWRlU2xpZGVJbk91dEtvbnZlcnNvSGVpZ2h0VGVzdF09XCJhbmltYXRpb25zLkZhZGVTbGlkZUluT3V0KGFuaW1hdGlvbkhlaWdodFRUWCoxLjUsIGFuaW1hdGlvblNsaWRlVmFsdWUpXCIgY2xhc3M9XCJvdmVyZmxvdy1oaWRkZW4gZC1mbGV4IGZsZXgtY29sdW1uIHctMTAwIHVzZXItaW5wdXQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBbQEZhZGVTbGlkZUluT3V0S29udmVyc29UcmFuc2xhdGVPdXRUZXN0XT1cImFuaW1hdGlvbnMuRmFkZVNsaWRlSW5PdXQoYW5pbWF0aW9uVFRYKjEuNSwgYW5pbWF0aW9uU2xpZGVWYWx1ZSlcIiBbY2xhc3MudXNlci1pbnB1dC10b3BdPVwiTGFzdFVzZXJJbnB1dD8ubWVzc2FnZSAhPSAnJ1wiICBjbGFzcz1cInVzZXItaW5wdXRcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYXRhXCIgW3N0eWxlXT1cIntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3IgOiBhc3NldHM/LkNvbG9yU2V0Py5TZWNvbmRhcnlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cIiBbaW5uZXJIVE1MXT1cIkxhc3RVc2VySW5wdXQubWVzc2FnZVwiPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRpbWVcIj57e0xhc3RVc2VySW5wdXQuZGF0ZX19PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPCEtLSBCT1QgQU5TV0VSIC0tPlxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJMYXN0Qm90QW5zd2VyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9zaXRpb24tcmVsYXRpdmUgYm90LWFuc3dlclwiPlxuICAgICAgICAgICAgICA8ZGl2IFtjbGFzcy5tdC00XT1cIiFzaG93VXNlckludml0YXRpb25cIiBjbGFzcz1cImQtZmxleCBmbGV4LWNvbHVtbiB3LTEwMCBwb3NpdGlvbi1yZWxhdGl2ZSBib3QtYW5zd2VyX190ZXh0XCI+XG5cbiAgICAgICAgICAgICAgICA8IS0tIEJPVCBBTlNXRVIgVEVYVCAtLT5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiTGFzdEJvdEFuc3dlci50ZXh0XCI+XG4gICAgICAgICAgICAgICAgICA8IS0tPHNwYW4gKm5nSWY9XCIhTGFzdEJvdEFuc3dlci50ZXh0LmluY2x1ZGVzKCdsb2FkaW5nLWRvdHMnKVwiIGlkPVwidGV4dFwiPjwvc3Bhbj48YnI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cImNoYW5nZWQgJiYgTGFzdEJvdEFuc3dlci50ZXh0LmluY2x1ZGVzKCdsb2FkaW5nLWRvdHMnKVwiIGNsYXNzPVwiZmFkZVwiIFtpbm5lckhUTUxdPVwiTGFzdEJvdEFuc3dlci50ZXh0IHwgc2FmZUh0bWxcIj48L3NwYW4+PGJyPlxuICAgICAgICAgICAgICAgICAgLS0+XG4gICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIUxhc3RCb3RBbnN3ZXI/LnRleHQ/LmluY2x1ZGVzKCdsb2FkaW5nLWRvdHMnKSAmJiBjaGFuZ2VkICYmIHNob3dUZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIFtARmFkZVNsaWRlSW5PdXRLb252ZXJzb1RyYW5zbGF0ZU91dF09XCJhbmltYXRpb25zLkZhZGVTbGlkZUluT3V0KGFuaW1hdGlvblRUWCwgLTEwMClcIiBjbGFzcz1cInctMTAwIGp1c3RpZnktY29udGVudC1jZW50ZXJcIiBbaW5uZXJIVE1MXT1cIkxhc3RCb3RBbnN3ZXIudGV4dCB8IHNhZmVIdG1sXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWFmdGVyUHJvY2Vzc1wiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBpZD1cImxvYWRpbmctY3JlYXRpb25cIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIkxhc3RCb3RBbnN3ZXIubWVkaWFzICYmIExhc3RCb3RBbnN3ZXIubWVkaWFzLmxlbmd0aFxuICAgICAgICAgICAgICAgICYmIExhc3RCb3RBbnN3ZXIubWVkaWFzWzBdLnJlcXVpcmVkX2FjdGlvbnNcbiAgICAgICAgICAgICAgICAmJiBMYXN0Qm90QW5zd2VyLm1lZGlhc1swXS5yZXF1aXJlZF9hY3Rpb25zLmxlbmd0aCA+IDBcbiAgICAgICAgICAgICAgICAmJiAhTGFzdEJvdEFuc3dlcj8udGV4dD8uaW5jbHVkZXMoJ2xvYWRpbmctZG90cycpXCI+XG4gICAgICAgICAgICAgICAgPCEtLSBCT1QgQU5TV0VSIEJVVFRPTlMgLS0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm10MzUgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgdy0xMDAgcG9zaXRpb24tcmVsYXRpdmUgYm90LWFuc3dlcl9fYnV0dG9uc1wiPlxuICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgc3VnZ2VzdCBvZiBMYXN0Qm90QW5zd2VyLm1lZGlhc1swXS5yZXF1aXJlZF9hY3Rpb25zOyBsZXQgaSA9IGluZGV4XCI+XG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJzdWdnZXN0LmZvcm1hdCA9PT0gJ2J1dHRvbidcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgW0BGYWRlU2xpZGVJbk91dEtvbnZlcnNvVHJhbnNsYXRlT3V0XT1cImFuaW1hdGlvbnMuRmFkZVNsaWRlSW5PdXQoYW5pbWF0aW9uVFRYLCAtMTAwKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwic3VnZ2VzdC52YWx1ZT8udGl0bGUgPT0gJ1Rlcm1pbmVyJyAmJiBjaGFuZ2VkIHx8IHN1Z2dlc3QudmFsdWU/LnRpdGxlID09ICdRdWl0JyAmJiBjaGFuZ2VkXCIgW3N0eWxlXT1cIntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvciA6IGFzc2V0cz8uQ29sb3JTZXQ/LlByaW1hcnksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3IgOiBhc3NldHM/LkNvbG9yU2V0Py5QcmltYXJ5XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJvdC1idXR0b24gYm90LWJ1dHRvbi1sZWZ0IHNob3ctYnRuXCIgKGNsaWNrKT1cImJ5UGFzc1VzZXJJbnB1dChzdWdnZXN0Py52YWx1ZT8ub25DbGljaywgaSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBbaW5uZXJIVE1MXT1cInN1Z2dlc3QubGFiZWx8fCBzdWdnZXN0LnZhbHVlPy5kaXNwbGF5ZWRNZXNzYWdlIHx8IHN1Z2dlc3QudmFsdWU/LnRpdGxlIFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtARmFkZVNsaWRlSW5PdXRLb252ZXJzb1RyYW5zbGF0ZU91dF09XCJhbmltYXRpb25zLkZhZGVTbGlkZUluT3V0KGFuaW1hdGlvblRUWCwgLTEwMClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cInN1Z2dlc3QudmFsdWU/LnRpdGxlID09ICdOb3V2ZWxsZSBEZW1hbmRlJyAmJiBjaGFuZ2VkIHx8IHN1Z2dlc3QudmFsdWU/LnRpdGxlID09ICdOZXcgUmVxdWVzdCcgJiYgY2hhbmdlZFwiIFtzdHlsZV09XCJ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3IgOiBhc3NldHM/LkNvbG9yU2V0Py5QcmltYXJ5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yIDogYXNzZXRzPy5Db2xvclNldD8uUHJpbWFyeVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJib3QtYnV0dG9uIGJvdC1idXR0b24tcmlnaHQgc2hvdy1idG5cIiAoY2xpY2spPVwiYnlQYXNzVXNlcklucHV0KHN1Z2dlc3Q/LnZhbHVlPy5vbkNsaWNrLCBpKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtpbm5lckhUTUxdPVwic3VnZ2VzdC5sYWJlbHx8IHN1Z2dlc3QudmFsdWU/LmRpc3BsYXllZE1lc3NhZ2UgfHwgc3VnZ2VzdC52YWx1ZT8udGl0bGUgXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgW0BGYWRlU2xpZGVJbk91dEtvbnZlcnNvVHJhbnNsYXRlT3V0XT1cImFuaW1hdGlvbnMuRmFkZVNsaWRlSW5PdXQoYW5pbWF0aW9uVFRYLCAtMTAwKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwic3VnZ2VzdC52YWx1ZT8udGl0bGUgJiYgc3VnZ2VzdC52YWx1ZT8udGl0bGUgIT0gJ1Rlcm1pbmVyJyAmJiBzdWdnZXN0LnZhbHVlPy50aXRsZSAhPSAnUXVpdCcgJiYgc3VnZ2VzdC52YWx1ZT8udGl0bGUgIT0gJ05vdXZlbGxlIERlbWFuZGUnICYmIHN1Z2dlc3QudmFsdWU/LnRpdGxlICE9ICdOZXcgUmVxdWVzdCcgJiYgY2hhbmdlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW3N0eWxlXT1cIntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvciA6IGFzc2V0cz8uQ29sb3JTZXQ/LlByaW1hcnksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3IgOiBhc3NldHM/LkNvbG9yU2V0Py5QcmltYXJ5XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJvdC1idXR0b24gYm90LWJ1dHRvbi1ncmV5IHNob3ctYnRuXCIgKGNsaWNrKT1cImJ5UGFzc1VzZXJJbnB1dChzdWdnZXN0Py52YWx1ZT8ub25DbGljaywgaSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBbaW5uZXJIVE1MXT1cInN1Z2dlc3QubGFiZWx8fCBzdWdnZXN0LnZhbHVlPy5kaXNwbGF5ZWRNZXNzYWdlIHx8IHN1Z2dlc3QudmFsdWU/LnRpdGxlIFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImRpc2FibGVVc2VySW5wdXRcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3NpdGlvbi1yZWxhdGl2ZSBib3QtYW5zd2VyX19kaXNhYmxlLWlucHV0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgW0BGYWRlU2xpZGVJbk91dEtvbnZlcnNvVHJhbnNsYXRlT3V0XT1cImFuaW1hdGlvbnMuRmFkZVNsaWRlSW5PdXQoYW5pbWF0aW9uVFRYLCAtMTAwKVwiIGNsYXNzPVwiYm90LWlucHV0LWRpc2FibGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aT57eyBzZWxlY3QgfX08L2k+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICA8IS0tIEJPVCBBTlNXRVIgQlVUVE9OUyAtLT5cblxuICAgICAgICAgICAgICA8IS0tPG5nLWNvbnRhaW5lciAqbmdJZj1cImFmdGVyUHJvY2VzcyAmJiBjb25maWcuQWZ0ZXJQcm9jZXNzU2NlbmFyaW8uRm9ybUVsZW1lbnRzLmxlbmd0aCA+IDBcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWZ0ZXItcHJvY2Vzcy1mb3JtXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWZ0ZXItcHJvY2Vzcy1zdWJmb3JtXCIgKm5nRm9yPVwibGV0IGZvcm1FbGVtZW50cyBvZiBjb25maWcuQWZ0ZXJQcm9jZXNzU2NlbmFyaW8uRm9ybUVsZW1lbnRzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGZvcm0gb2YgZm9ybUVsZW1lbnRzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciBbbmdTd2l0Y2hdPVwiZm9ybS50eXBlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ1N3aXRjaENhc2U9XCInY2hlY2tib3gnXCIgW25nU3R5bGVdPVwieydkaXNwbGF5JzogZm9ybT8uZGlzcGxheSA/IGZvcm0uZGlzcGxheTogJ2Jsb2NrJ31cIiBjbGFzcz1cImJvdC1jaGVja2JveFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgW2NoZWNrZWRdPVwiZm9ybT8uY2hlY2tlZCA9PSB0cnVlID8gJ3RydWUnOiAnZmFsc2UnXCIgW2lkXT1cImZvcm0/LmlkXCIgW25hbWVdPVwiZm9ybT8uaWRcIiBbdHlwZV09J2Zvcm0/LnR5cGUnIHZhbHVlPVwiZmFsc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIFtmb3JdPVwiZm9ybT8uaWRcIiBjbGFzcz1cImJvdC1jaGVja2JveC1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHRyYW5zbGF0ZS50cmFuc2xhdGUoc2VydmljZS5sb2NhbGUsIGZvcm0ubGFiZWwpIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFtjbGFzc109XCJmb3JtPy5jbGFzc1wiIFtpZF09XCJmb3JtPy5pZFwiIFtuZ1N0eWxlXT1cInsnZGlzcGxheSc6IGZvcm0/LmRpc3BsYXkgPyBmb3JtLmRpc3BsYXk6ICdibG9jayd9XCIgKm5nU3dpdGNoQ2FzZT1cIid0ZXh0J1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBbcGF0dGVybl09XCJmb3JtPy5wYXR0ZXJuXCIgW3BsYWNlaG9sZGVyXT1cImZvcm0/LnBsYWNlaG9sZGVyXCIgW3R5cGVdPVwiZm9ybT8udHlwZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbdmFsdWVdPVwiZm9ybT8udmFsdWVcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBbY2xhc3NdPVwiZm9ybT8uY2xhc3NcIiAqbmdTd2l0Y2hDYXNlPVwiJ2RpdidcIiBbbmdTdHlsZV09XCJ7J2Rpc3BsYXknOiBmb3JtPy5kaXNwbGF5ID8gZm9ybS5kaXNwbGF5OiAnYmxvY2snfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7eyB0cmFuc2xhdGUudHJhbnNsYXRlKHNlcnZpY2UubG9jYWxlLCBmb3JtPy5jb250ZW50KSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBbY2xhc3NdPVwiZm9ybT8uY2xhc3NcIiBbaWRdPVwiZm9ybT8uaWRcIiAqbmdTd2l0Y2hDYXNlPVwiJ3RleHRhcmVhJ1wiIFtuZ1N0eWxlXT1cInsnZGlzcGxheSc6IGZvcm0/LmRpc3BsYXkgPyBmb3JtLmRpc3BsYXk6ICdibG9jayd9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtwbGFjZWhvbGRlcl09XCJ0cmFuc2xhdGUudHJhbnNsYXRlKHNlcnZpY2UubG9jYWxlLCBmb3JtPy5wbGFjZWhvbGRlcilcIj48L3RleHRhcmVhPlxuICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj4tLT5cblxuICAgICAgICAgICAgICA8Y3VzdG9tLWNoZWNrYm94LWNhbGVuZGFyXG4gICAgICAgICAgICAgICAgW0BGYWRlU2xpZGVJbk91dEtvbnZlcnNvSGVpZ2h0VGVzdF09XCJhbmltYXRpb25zLkZhZGVTbGlkZUluT3V0KGFuaW1hdGlvblRUWCwgYW5pbWF0aW9uU2xpZGVWYWx1ZSlcIlxuICAgICAgICAgICAgICAgICpuZ0lmPVwiYWZ0ZXJQcm9jZXNzXCJcbiAgICAgICAgICAgICAgICBbc3RhdGVdPVwiYWZ0ZXJQcm9jZXNzXCJcbiAgICAgICAgICAgICAgICAoY2FsZW5kYXJDaGFuZ2UpPVwiYmluZENhbGVuZGFyKCRldmVudClcIlxuICAgICAgICAgICAgICAgIFtjYWxlbmRhclRlbXBsYXRlXT1cImNhbGVuZGFyVGVtcGxhdGVcIlxuICAgICAgICAgICAgICAgIFtjb2x1bW5PdmVycmlkZV09XCJjYWxlbmRhcktleU92ZXJyaWRlXCI+XG4gICAgICAgICAgICAgIDwvY3VzdG9tLWNoZWNrYm94LWNhbGVuZGFyPlxuXG4gICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpbnB1dFR5cGUgPT09ICdudW1iZXInXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBbQEZhZGVTbGlkZUluT3V0S29udmVyc29PcGFjaXR5T3V0XT1cImFuaW1hdGlvbnMuRmFkZVNsaWRlSW5PdXQoYW5pbWF0aW9uVFRYLCBhbmltYXRpb25TbGlkZVZhbHVlKVwiIGNsYXNzPVwiYm90LWlucHV0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTxpbnB1dCBbdHlwZV09XCJpbnB1dFR5cGVcIiBbKG5nTW9kZWwpXT1cInVzZXJJbnB1dFwiIChrZXl1cC5lbnRlcik9XCJ1c2VySW5wdXQgJiYgX3NlbmQoKVwiIChrZXl1cCk9XCJ1c2VyV3JpdGluZygkZXZlbnQpXCIgbWluPVwiMlwiIFttYXhdPVwiaW5wdXRMaW1pdFwiXG4gICAgICAgICAgICAgICAgICAgICAgIFtwbGFjZWhvbGRlcl09XCJjdXJyZW50UGxhY2VIb2xkZXJcIj4tLT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1udW1iZXItZGl2XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1udW1iZXItZGl2LWFycm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwiY2hhbmdlTnVtYmVyKDEpXCIgY2xhc3M9XCJhcnJvdy11cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG5iLWljb24gW2ljb25dPVwiJ3VwXzInXCIgW3NpemVdPVwiMS41XCI+PC9uYi1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwiY2hhbmdlTnVtYmVyKC0xKVwiIGNsYXNzPVwiYXJyb3ctZG93blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG5iLWljb24gW2ljb25dPVwiJ2Rvd25fMidcIiBbc2l6ZV09XCIxLjVcIj48L25iLWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgbWluPVwiMVwiIHZhbHVlPVwie3sgdXNlcklucHV0IH19XCI+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJvdC1jb250YWluZXItYnRuXCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJib3QtYnV0dG9uIHNlbmQtYnRuIGlucHV0LW51bWJlci1idG4gc2hvd1VzZXJJbnB1dENvbnRyb2xzXCIgW3N0eWxlXT1cIntcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3IgOiBhc3NldHM/LkNvbG9yU2V0Py5QcmltYXJ5LFxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yIDogYXNzZXRzPy5Db2xvclNldD8uU2Vjb25kYXJ5XG4gICAgICAgICAgICAgICAgICB9XCIgKGNsaWNrKT1cIl9zZW5kKCk7c2hvd1VzZXJJbnB1dENvbnRyb2xzPWZhbHNlO3Nob3dVc2VySW52aXRhdGlvbj0hc2hvd1VzZXJJbnZpdGF0aW9uO1wiIFtkaXNhYmxlZF09XCIhdXNlcklucHV0XCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaW5wdXRUeXBlID09PSAnbnVtYmVyJ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3sgc2VuZEJ0biB9fVxuICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInBvc2l0aW9uLXJlbGF0aXZlIGJvdC1pbnB1dC13cmFwcGVyXCI+XG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiYWZ0ZXJQcm9jZXNzICYmIGNvbmZpZy5BZnRlclByb2Nlc3NTY2VuYXJpby5Gb3JtQnV0dG9ucy5sZW5ndGggPiAwXCI+XG4gICAgICAgICAgICAgIDwhLS08YnV0dG9uIFtjbGFzc109XCJidG4uY2xhc3NcIiAqbmdGb3I9XCJsZXQgYnRuIG9mIGNvbmZpZy5BZnRlclByb2Nlc3NTY2VuYXJpby5Gb3JtQnV0dG9uc1wiIFtuZ1N0eWxlXT1cInsnZGlzcGxheSc6IGJ0bj8uZGlzcGxheSA/IGJ0bi5kaXNwbGF5OiAnYmxvY2snfVwiPlxuICAgICAgICAgICAgICAgIHt7IHRyYW5zbGF0ZS50cmFuc2xhdGUoc2VydmljZS5sb2NhbGUsIGJ0bi5sYWJlbCkgfX1cbiAgICAgICAgICAgICAgPC9idXR0b24+LS0+XG4gICAgICAgICAgICAgIDxidXR0b24gKGNsaWNrKT1cImdldENhbGVuZGFyKClcIiBjbGFzcz1cInByaW1hcnkgcm91bmRlZCB2YWxpZGF0ZS1hZnRlci1idG5cIiBzdHlsZT1cImRpc3BsYXk6IGlubGluZS1ibG9jaztcIj5cbiAgICAgICAgICAgICAgICB7eyB0cmFuc2xhdGUudHJhbnNsYXRlKHNlcnZpY2UubG9jYWxlLCAnVkFMSURBVEVfQVZBSUxBQklMSVRZJykgfX1cbiAgICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInJvdW5kZWQgc2Vjb25kYXJ5IHNraXAtYWZ0ZXItYnRuXCIgc3R5bGU9XCJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XCIgKGNsaWNrKT1cInNraXAoKVwiPlxuICAgICAgICAgICAgICAgIHt7IHRyYW5zbGF0ZS50cmFuc2xhdGUoc2VydmljZS5sb2NhbGUsICdTS0lQJykgfX1cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFhZnRlclByb2Nlc3MgJiYgc2hvd1VzZXJJbnB1dENvbnRyb2xzICYmIGlucHV0VHlwZSAhPT0gJ251bWJlcidcIj5cbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFkaXNhYmxlVXNlcklucHV0ICYmIHNob3dJbnB1dFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXggZmxleC1jb2x1bW4gdy0xMDAgcG9zaXRpb24tcmVhbHRpdmUgYm90LWlucHV0XCIgaWQ9XCJib3QtaW5wdXQtZGl2XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IFtARmFkZVNsaWRlSW5PdXRLb252ZXJzb1RyYW5zbGF0ZU91dF09XCJhbmltYXRpb25zLkZhZGVTbGlkZUluT3V0KGFuaW1hdGlvblRUWCwgYW5pbWF0aW9uU2xpZGVWYWx1ZUFkZClcIiBjbGFzcz1cInctMTAwIGgtMTAwIGQtZmxleCBmbGV4LWNvbHVtbiBwb3NpdGlvbi1hYnNvbHV0ZSBib3QtaW5wdXRfX2NvbnRyb2xzXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImlucHV0VHlwZSA9PT0gJ3RleHQnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIFsobmdNb2RlbCldPVwidXNlcklucHV0XCIgKGtleXVwLmVudGVyKT1cInVzZXJJbnB1dCAmJiBfc2VuZCgpXCIgKGtleXVwKT1cInVzZXJXcml0aW5nKCRldmVudClcIiBbbWF4bGVuZ3RoXT1cImlucHV0TGltaXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW3BsYWNlaG9sZGVyXT1cImN1cnJlbnRQbGFjZUhvbGRlclwiPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpbnB1dFR5cGUgIT09ICdudW1iZXInXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJvdC1jb250YWluZXItYnRuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYm90LWJ1dHRvbiBzZW5kLWJ0blwiIFtzdHlsZV09XCJ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvciA6IGFzc2V0cz8uQ29sb3JTZXQ/LlByaW1hcnksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yIDogYXNzZXRzPy5Db2xvclNldD8uU2Vjb25kYXJ5fVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJfc2VuZCgpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cIiF1c2VySW5wdXRcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaW5wdXRUeXBlICE9PSAnbnVtYmVyJ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHNlbmRCdG5Nc2cgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTxuZy1jb250YWluZXIgKm5nSWY9XCJpbnB1dFR5cGUgPT09ICdudW1iZXInXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgc2VuZEJ0biB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj4tLT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uICpuZ0lmPVwiaW5wdXRUeXBlICE9PSAnbnVtYmVyJyAmJiBJc01vYmlsZVwiIGNsYXNzPVwiYm90LWJ1dHRvbi1zY3JlZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPG5iLWljb24gW2ljb25dPVwiJ3NjYW5fMTEnXCIgW3NpemVdPVwiMS41XCI+PC9uYi1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBidG5TY3JlZW4gfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uICpuZ0lmPVwiaW5wdXRUeXBlICE9PSAnbnVtYmVyJ1wiIGNsYXNzPVwiYm90LWJ1dHRvbi1hdHRhY2hcIiAoY2xpY2spPVwib3BlblVwbG9hZC5lbWl0KHRydWUpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHt7IG5iRmlsZXMgfX1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwibmJGaWxlcyA8PSAxXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgdHJhbnNsYXRlLnRyYW5zbGF0ZShzZXJ2aWNlLmxvY2FsZSwgJ0FUVEFDSE1FTlQnKSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwibmJGaWxlcyA+IDFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyB0cmFuc2xhdGUudHJhbnNsYXRlKHNlcnZpY2UubG9jYWxlLCAnQVRUQUNITUVOVFMnKSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bmItaWNvbiBbaWNvbl09XCInYXR0YWNobWVudCdcIiBbc2l6ZV09XCIxLjVcIj48L25iLWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzPVwiYm90LWNoYXQtd3JhcHBlclwiICpuZ0lmPVwiIUFzc2lzdGFudE1vZGVcIj5cbiAgICAgICAge3tBc3Npc3RhbnRNb2RlfX1cbiAgICAgICAgPGRpdiBjbGFzcz1cImJvdC1kaXNjdXNzaW9uLXdyYXBwZXJcIiAjc2Nyb2xsTWUgW3Njcm9sbFRvcF09XCJzY3JvbGxNZS5zY3JvbGxUbygwLCA5OTk5OTk5KVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3QtY2hhdFwiPlxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgZW50cnkgb2YgZGlzcGxheURhdGFcIj5cbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImVudHJ5LmRhdGVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IFtARmFkZVNsaWRlSW5PdXRLb252ZXJzb1RyYW5zbGF0ZU91dF09XCJhbmltYXRpb25zLkZhZGVTbGlkZUluT3V0KGFuaW1hdGlvblRUWCwgYW5pbWF0aW9uU2xpZGVWYWx1ZSlcIiBjbGFzcz1cInVzZXItaW5wdXRcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYXRhXCIgW3N0eWxlXT1cIntcbiAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvciA6IGFzc2V0cz8uQ29sb3JTZXQ/LlByaW1hcnksXG4gICAgICAgICAgICAgICAgICAgICBjb2xvciA6IGFzc2V0cz8uQ29sb3JTZXQ/LlNlY29uZGFyeVxuICAgICAgICAgICAgICAgICAgICB9XCIgW2lubmVySFRNTF09XCJlbnRyeS5tZXNzYWdlXCI+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGltZVwiPnt7ZW50cnkuZGF0ZX19PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFlbnRyeS5kYXRlXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJvdC1hbnN3ZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJlbnRyeS50ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiY2hhbmdlZFwiIGNsYXNzPVwiXCIgW2lubmVySFRNTF09XCJlbnRyeS50ZXh0IHwgc2FmZUh0bWxcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJlbnRyeS5tZWRpYXMgJiYgZW50cnkubWVkaWFzLmxlbmd0aFxuICAgICAgICAgICAgICAgICAgICYmIGVudHJ5Lm1lZGlhc1swXS5yZXF1aXJlZF9hY3Rpb25zXG4gICAgICAgICAgICAgICAgICAgJiYgZW50cnkubWVkaWFzWzBdLnJlcXVpcmVkX2FjdGlvbnMubGVuZ3RoXCI+XG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IHN1Z2dlc3Qgb2YgZW50cnkubWVkaWFzWzBdLnJlcXVpcmVkX2FjdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwic3VnZ2VzdC5mb3JtYXQgPT09ICdidXR0b24nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uICpuZ0lmPVwiY2hhbmdlZFwiIFtzdHlsZV09XCJ7XG4gICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvciA6IGFzc2V0cz8uQ29sb3JTZXQ/LlByaW1hcnksXG4gICAgICAgICAgICAgICAgICAgICBjb2xvciA6IGFzc2V0cz8uQ29sb3JTZXQ/LlByaW1hcnlcbiAgICAgICAgICAgIH1cIiBjbGFzcz1cImJvdC1idXR0b25cIiAoY2xpY2spPVwiYnlQYXNzVXNlcklucHV0KHN1Z2dlc3Q/LnZhbHVlPy5vbkNsaWNrKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtpbm5lckhUTUxdPVwic3VnZ2VzdC5sYWJlbHx8IHN1Z2dlc3QudmFsdWU/LmRpc3BsYXllZE1lc3NhZ2UgfHwgc3VnZ2VzdC52YWx1ZT8udGl0bGUgXCI+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJib3QtaW5wdXQtd3JhcHBlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3QtaW5wdXRcIiAqbmdJZj1cIiFkaXNhYmxlVXNlcklucHV0ICYmIHNob3dJbnB1dFwiPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgWyhuZ01vZGVsKV09XCJ1c2VySW5wdXRcIiAoa2V5dXAuZW50ZXIpPVwidXNlcklucHV0ICYmIF9zZW5kKClcIiAoa2V5dXApPVwidXNlcldyaXRpbmcoJGV2ZW50KVwiIG1heGxlbmd0aD1cIjIwMFwiXG4gICAgICAgICAgICAgICAgICAgW3BsYWNlaG9sZGVyXT1cImN1cnJlbnRQbGFjZUhvbGRlclwiPlxuICAgICAgICAgICAgPGJ1dHRvbiAqbmdJZj1cImNoYW5nZWRcIiBjbGFzcz1cImJvdC1idXR0b25cIiBbc3R5bGVdPVwie1xuICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yIDogYXNzZXRzPy5Db2xvclNldD8uUHJpbWFyeSxcbiAgICAgICAgICAgICAgICAgICAgIGNvbG9yIDogYXNzZXRzPy5Db2xvclNldD8uU2Vjb25kYXJ5XG4gICAgICAgICAgICB9XCIgKGNsaWNrKT1cIl9zZW5kKClcIiBbZGlzYWJsZWRdPVwiIXVzZXJJbnB1dFwiPnt7IHNlbmRCdG4gfX1cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3QtaW5wdXQtZGlzYWJsZVwiICpuZ0lmPVwiZGlzYWJsZVVzZXJJbnB1dFwiPlxuICAgICAgICAgICAgPGk+e3sgc2VsZWN0IH19PC9pPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImJvdC1sb2dvXCI+XG4gICAgICAgICAgPGltZyBbc3JjXT1cImFzc2V0cy5GdWxsU2l6ZUxvZ29cIj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L25nLWNvbnRhaW5lcj5cblxuICA8L2Rpdj5cbjwvZGl2PlxuIl19