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
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_3_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 23);
    i0.ɵɵpipe(1, "safeHtml");
} if (rf & 2) {
    const ctx_r14 = i0.ɵɵnextContext(5);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(1, 1, ctx_r14.LastBotAnswer.text), i0.ɵɵsanitizeHtml);
} }
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_3_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "span", 24);
    i0.ɵɵpipe(2, "safeHtml");
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r15 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("@FadeSlideInOutKonversoTranslateOut", ctx_r15.animations.FadeSlideInOut(ctx_r15.animationTTX, -100))("innerHTML", i0.ɵɵpipeBind1(2, 2, ctx_r15.LastBotAnswer.text), i0.ɵɵsanitizeHtml);
} }
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_3_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "span", 25);
    i0.ɵɵelementContainerEnd();
} }
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_3_span_1_Template, 2, 3, "span", 22);
    i0.ɵɵelement(2, "br");
    i0.ɵɵtemplate(3, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_3_ng_container_3_Template, 3, 4, "ng-container", 2);
    i0.ɵɵtemplate(4, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_3_ng_container_4_Template, 2, 0, "ng-container", 2);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r10 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r10.changed && ctx_r10.LastBotAnswer.text.includes("loading-dots"));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !(ctx_r10.LastBotAnswer == null ? null : ctx_r10.LastBotAnswer.text == null ? null : ctx_r10.LastBotAnswer.text.includes("loading-dots")) && ctx_r10.changed && ctx_r10.showText);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r10.afterProcess);
} }
const _c1 = function (a0, a1) { return { borderColor: a0, color: a1 }; };
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_4_ng_container_2_ng_container_1_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r27 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 31);
    i0.ɵɵlistener("click", function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_4_ng_container_2_ng_container_1_button_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r27); const ctx_r26 = i0.ɵɵnextContext(2); const suggest_r19 = ctx_r26.$implicit; const i_r20 = ctx_r26.index; const ctx_r25 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r25.byPassUserInput(suggest_r19 == null ? null : suggest_r19.value == null ? null : suggest_r19.value.onClick, i_r20)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const suggest_r19 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r22 = i0.ɵɵnextContext(5);
    i0.ɵɵstyleMap(i0.ɵɵpureFunction2(4, _c1, ctx_r22.assets == null ? null : ctx_r22.assets.ColorSet == null ? null : ctx_r22.assets.ColorSet.Primary, ctx_r22.assets == null ? null : ctx_r22.assets.ColorSet == null ? null : ctx_r22.assets.ColorSet.Primary));
    i0.ɵɵproperty("@FadeSlideInOutKonversoTranslateOut", ctx_r22.animations.FadeSlideInOut(ctx_r22.animationTTX, -100))("innerHTML", suggest_r19.label || (suggest_r19.value == null ? null : suggest_r19.value.displayedMessage) || (suggest_r19.value == null ? null : suggest_r19.value.title), i0.ɵɵsanitizeHtml);
} }
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_4_ng_container_2_ng_container_1_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r31 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 32);
    i0.ɵɵlistener("click", function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_4_ng_container_2_ng_container_1_button_2_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r31); const ctx_r30 = i0.ɵɵnextContext(2); const suggest_r19 = ctx_r30.$implicit; const i_r20 = ctx_r30.index; const ctx_r29 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r29.byPassUserInput(suggest_r19 == null ? null : suggest_r19.value == null ? null : suggest_r19.value.onClick, i_r20)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const suggest_r19 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r23 = i0.ɵɵnextContext(5);
    i0.ɵɵstyleMap(i0.ɵɵpureFunction2(4, _c1, ctx_r23.assets == null ? null : ctx_r23.assets.ColorSet == null ? null : ctx_r23.assets.ColorSet.Primary, ctx_r23.assets == null ? null : ctx_r23.assets.ColorSet == null ? null : ctx_r23.assets.ColorSet.Primary));
    i0.ɵɵproperty("@FadeSlideInOutKonversoTranslateOut", ctx_r23.animations.FadeSlideInOut(ctx_r23.animationTTX, -100))("innerHTML", suggest_r19.label || (suggest_r19.value == null ? null : suggest_r19.value.displayedMessage) || (suggest_r19.value == null ? null : suggest_r19.value.title), i0.ɵɵsanitizeHtml);
} }
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_4_ng_container_2_ng_container_1_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r35 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 33);
    i0.ɵɵlistener("click", function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_4_ng_container_2_ng_container_1_button_3_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r35); const ctx_r34 = i0.ɵɵnextContext(2); const suggest_r19 = ctx_r34.$implicit; const i_r20 = ctx_r34.index; const ctx_r33 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r33.byPassUserInput(suggest_r19 == null ? null : suggest_r19.value == null ? null : suggest_r19.value.onClick, i_r20)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const suggest_r19 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r24 = i0.ɵɵnextContext(5);
    i0.ɵɵstyleMap(i0.ɵɵpureFunction2(4, _c1, ctx_r24.assets == null ? null : ctx_r24.assets.ColorSet == null ? null : ctx_r24.assets.ColorSet.Primary, ctx_r24.assets == null ? null : ctx_r24.assets.ColorSet == null ? null : ctx_r24.assets.ColorSet.Primary));
    i0.ɵɵproperty("@FadeSlideInOutKonversoTranslateOut", ctx_r24.animations.FadeSlideInOut(ctx_r24.animationTTX, -100))("innerHTML", suggest_r19.label || (suggest_r19.value == null ? null : suggest_r19.value.displayedMessage) || (suggest_r19.value == null ? null : suggest_r19.value.title), i0.ɵɵsanitizeHtml);
} }
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_4_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_4_ng_container_2_ng_container_1_button_1_Template, 1, 7, "button", 28);
    i0.ɵɵtemplate(2, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_4_ng_container_2_ng_container_1_button_2_Template, 1, 7, "button", 29);
    i0.ɵɵtemplate(3, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_4_ng_container_2_ng_container_1_button_3_Template, 1, 7, "button", 30);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const suggest_r19 = i0.ɵɵnextContext().$implicit;
    const ctx_r21 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (suggest_r19.value == null ? null : suggest_r19.value.title) == "Terminer" && ctx_r21.changed || (suggest_r19.value == null ? null : suggest_r19.value.title) == "Quit" && ctx_r21.changed);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (suggest_r19.value == null ? null : suggest_r19.value.title) == "Nouvelle Demande" && ctx_r21.changed || (suggest_r19.value == null ? null : suggest_r19.value.title) == "New Request" && ctx_r21.changed);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (suggest_r19.value == null ? null : suggest_r19.value.title) && (suggest_r19.value == null ? null : suggest_r19.value.title) != "Terminer" && (suggest_r19.value == null ? null : suggest_r19.value.title) != "Quit" && (suggest_r19.value == null ? null : suggest_r19.value.title) != "Nouvelle Demande" && (suggest_r19.value == null ? null : suggest_r19.value.title) != "New Request" && ctx_r21.changed);
} }
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_4_ng_container_2_ng_container_1_Template, 4, 3, "ng-container", 2);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const suggest_r19 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", suggest_r19.format === "button");
} }
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_4_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 34)(2, "div", 35)(3, "i");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r18 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("@FadeSlideInOutKonversoTranslateOut", ctx_r18.animations.FadeSlideInOut(ctx_r18.animationTTX, -100));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r18.select);
} }
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 26);
    i0.ɵɵtemplate(2, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_4_ng_container_2_Template, 2, 1, "ng-container", 27);
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
    const _r39 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "custom-checkbox-calendar", 36);
    i0.ɵɵlistener("calendarChange", function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_custom_checkbox_calendar_5_Template_custom_checkbox_calendar_calendarChange_0_listener($event) { i0.ɵɵrestoreView(_r39); const ctx_r38 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r38.bindCalendar($event)); });
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
    const ctx_r40 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r40.sendBtn, " ");
} }
const _c2 = function (a0, a1) { return { backgroundColor: a0, color: a1 }; };
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    const _r42 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 37)(2, "div", 38)(3, "div", 39)(4, "button", 40);
    i0.ɵɵlistener("click", function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_6_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r42); const ctx_r41 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r41.changeNumber(1)); });
    i0.ɵɵelement(5, "nb-icon", 41);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "button", 42);
    i0.ɵɵlistener("click", function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_6_Template_button_click_6_listener() { i0.ɵɵrestoreView(_r42); const ctx_r43 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r43.changeNumber(-1)); });
    i0.ɵɵelement(7, "nb-icon", 41);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "input", 43);
    i0.ɵɵlistener("ngModelChange", function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_6_Template_input_ngModelChange_8_listener($event) { i0.ɵɵrestoreView(_r42); const ctx_r44 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r44.impact = $event); })("keyup", function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_6_Template_input_keyup_8_listener() { i0.ɵɵrestoreView(_r42); const ctx_r45 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r45.changeNumberInput(ctx_r45.impact)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "div", 44)(10, "button", 45);
    i0.ɵɵlistener("click", function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_6_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r42); const ctx_r46 = i0.ɵɵnextContext(4); ctx_r46._send(); ctx_r46.showUserInputControls = false; return i0.ɵɵresetView(ctx_r46.showUserInvitation = !ctx_r46.showUserInvitation); });
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
    i0.ɵɵproperty("ngModel", ctx_r13.impact);
    i0.ɵɵadvance(2);
    i0.ɵɵstyleMap(i0.ɵɵpureFunction2(10, _c2, ctx_r13.assets == null ? null : ctx_r13.assets.ColorSet == null ? null : ctx_r13.assets.ColorSet.Primary, ctx_r13.assets == null ? null : ctx_r13.assets.ColorSet == null ? null : ctx_r13.assets.ColorSet.Secondary));
    i0.ɵɵproperty("disabled", !ctx_r13.userInput || ctx_r13.inputType === "number" && ctx_r13.impact < 1);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r13.inputType === "number");
} }
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 19)(2, "div", 20);
    i0.ɵɵtemplate(3, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_3_Template, 5, 3, "ng-container", 2);
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
    const _r48 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "button", 46);
    i0.ɵɵlistener("click", function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_10_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r48); const ctx_r47 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r47.getCalendar()); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 47);
    i0.ɵɵlistener("click", function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_10_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r48); const ctx_r49 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r49.skip()); });
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
    const _r54 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "textarea", 50);
    i0.ɵɵlistener("ngModelChange", function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_11_ng_container_1_ng_container_3_Template_textarea_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r54); const ctx_r53 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r53.userInput = $event); })("keyup.enter", function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_11_ng_container_1_ng_container_3_Template_textarea_keyup_enter_1_listener() { i0.ɵɵrestoreView(_r54); const ctx_r55 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r55.userInput && ctx_r55._send()); })("keyup", function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_11_ng_container_1_ng_container_3_Template_textarea_keyup_1_listener($event) { i0.ɵɵrestoreView(_r54); const ctx_r56 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r56.userWriting($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r51 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r51.userInput)("maxlength", ctx_r51.inputLimit)("placeholder", ctx_r51.currentPlaceHolder);
} }
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_11_ng_container_1_ng_container_4_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r57 = i0.ɵɵnextContext(6);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r57.sendBtnMsg, " ");
} }
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_11_ng_container_1_ng_container_4_button_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 54);
    i0.ɵɵelement(1, "nb-icon", 41);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r58 = i0.ɵɵnextContext(6);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("icon", "scan_11")("size", 1.5);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r58.btnScreen, " ");
} }
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_11_ng_container_1_ng_container_4_button_5_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r60 = i0.ɵɵnextContext(7);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r60.translate.translate(ctx_r60.service.locale, "ATTACHMENT"), " ");
} }
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_11_ng_container_1_ng_container_4_button_5_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r61 = i0.ɵɵnextContext(7);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r61.translate.translate(ctx_r61.service.locale, "ATTACHMENTS"), " ");
} }
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_11_ng_container_1_ng_container_4_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r63 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 55);
    i0.ɵɵlistener("click", function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_11_ng_container_1_ng_container_4_button_5_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r63); const ctx_r62 = i0.ɵɵnextContext(6); return i0.ɵɵresetView(ctx_r62.openUpload.emit(true)); });
    i0.ɵɵtext(1);
    i0.ɵɵtemplate(2, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_11_ng_container_1_ng_container_4_button_5_ng_container_2_Template, 2, 1, "ng-container", 2);
    i0.ɵɵtemplate(3, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_11_ng_container_1_ng_container_4_button_5_ng_container_3_Template, 2, 1, "ng-container", 2);
    i0.ɵɵelement(4, "nb-icon", 41);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r59 = i0.ɵɵnextContext(6);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r59.nbFiles, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r59.nbFiles <= 1);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r59.nbFiles > 1);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("icon", "attachment")("size", 1.5);
} }
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_11_ng_container_1_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    const _r65 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 44)(2, "button", 51);
    i0.ɵɵlistener("click", function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_11_ng_container_1_ng_container_4_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r65); const ctx_r64 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r64._send()); });
    i0.ɵɵtemplate(3, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_11_ng_container_1_ng_container_4_ng_container_3_Template, 2, 1, "ng-container", 2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_11_ng_container_1_ng_container_4_button_4_Template, 3, 3, "button", 52);
    i0.ɵɵtemplate(5, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_11_ng_container_1_ng_container_4_button_5_Template, 5, 5, "button", 53);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r52 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(2);
    i0.ɵɵstyleMap(i0.ɵɵpureFunction2(6, _c2, ctx_r52.assets == null ? null : ctx_r52.assets.ColorSet == null ? null : ctx_r52.assets.ColorSet.Primary, ctx_r52.assets == null ? null : ctx_r52.assets.ColorSet == null ? null : ctx_r52.assets.ColorSet.Secondary));
    i0.ɵɵproperty("disabled", !ctx_r52.userInput);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r52.inputType !== "number");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r52.inputType !== "number" && ctx_r52.IsMobile);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r52.inputType !== "number");
} }
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_11_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 48)(2, "div", 49);
    i0.ɵɵtemplate(3, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_11_ng_container_1_ng_container_3_Template, 2, 3, "ng-container", 2);
    i0.ɵɵtemplate(4, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_11_ng_container_1_ng_container_4_Template, 6, 9, "ng-container", 2);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r50 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("@FadeSlideInOutKonversoTranslateOut", ctx_r50.animations.FadeSlideInOut(ctx_r50.animationTTX, ctx_r50.animationSlideValueAdd));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r50.inputType === "text");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r50.inputType !== "number");
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
    const entry_r70 = i0.ɵɵnextContext().$implicit;
    const ctx_r71 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("@FadeSlideInOutKonversoTranslateOut", ctx_r71.animations.FadeSlideInOut(ctx_r71.animationTTX, ctx_r71.animationSlideValue));
    i0.ɵɵadvance(1);
    i0.ɵɵstyleMap(i0.ɵɵpureFunction2(5, _c2, ctx_r71.assets == null ? null : ctx_r71.assets.ColorSet == null ? null : ctx_r71.assets.ColorSet.Primary, ctx_r71.assets == null ? null : ctx_r71.assets.ColorSet == null ? null : ctx_r71.assets.ColorSet.Secondary));
    i0.ɵɵproperty("innerHTML", entry_r70.message, i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(entry_r70.date);
} }
function DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_2_ng_container_2_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 67);
    i0.ɵɵpipe(1, "safeHtml");
} if (rf & 2) {
    const entry_r70 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(1, 1, entry_r70.text), i0.ɵɵsanitizeHtml);
} }
function DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_2_ng_container_2_span_1_Template, 2, 3, "span", 66);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r74 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r74.changed);
} }
function DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_2_ng_container_3_ng_container_1_ng_container_1_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r84 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 69);
    i0.ɵɵlistener("click", function DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_2_ng_container_3_ng_container_1_ng_container_1_button_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r84); const suggest_r79 = i0.ɵɵnextContext(2).$implicit; const ctx_r82 = i0.ɵɵnextContext(6); return i0.ɵɵresetView(ctx_r82.byPassUserInput(suggest_r79 == null ? null : suggest_r79.value == null ? null : suggest_r79.value.onClick)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const suggest_r79 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r81 = i0.ɵɵnextContext(6);
    i0.ɵɵstyleMap(i0.ɵɵpureFunction2(3, _c1, ctx_r81.assets == null ? null : ctx_r81.assets.ColorSet == null ? null : ctx_r81.assets.ColorSet.Primary, ctx_r81.assets == null ? null : ctx_r81.assets.ColorSet == null ? null : ctx_r81.assets.ColorSet.Primary));
    i0.ɵɵproperty("innerHTML", suggest_r79.label || (suggest_r79.value == null ? null : suggest_r79.value.displayedMessage) || (suggest_r79.value == null ? null : suggest_r79.value.title), i0.ɵɵsanitizeHtml);
} }
function DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_2_ng_container_3_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_2_ng_container_3_ng_container_1_ng_container_1_button_1_Template, 1, 6, "button", 68);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r80 = i0.ɵɵnextContext(7);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r80.changed);
} }
function DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_2_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_2_ng_container_3_ng_container_1_ng_container_1_Template, 2, 1, "ng-container", 2);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const suggest_r79 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", suggest_r79.format === "button");
} }
function DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_2_ng_container_3_ng_container_1_Template, 2, 1, "ng-container", 27);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const entry_r70 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", entry_r70.medias[0].required_actions);
} }
function DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 65);
    i0.ɵɵtemplate(2, DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_2_ng_container_2_Template, 2, 1, "ng-container", 2);
    i0.ɵɵtemplate(3, DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_2_ng_container_3_Template, 2, 1, "ng-container", 2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const entry_r70 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", entry_r70.text);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", entry_r70.medias && entry_r70.medias.length && entry_r70.medias[0].required_actions && entry_r70.medias[0].required_actions.length);
} }
function DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_1_Template, 5, 8, "ng-container", 2);
    i0.ɵɵtemplate(2, DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_2_Template, 4, 2, "ng-container", 2);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const entry_r70 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", entry_r70.date);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !entry_r70.date);
} }
function DesktopFullScreenComponent_ng_container_3_div_3_div_7_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r90 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 72);
    i0.ɵɵlistener("click", function DesktopFullScreenComponent_ng_container_3_div_3_div_7_button_2_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r90); const ctx_r89 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r89._send()); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r88 = i0.ɵɵnextContext(4);
    i0.ɵɵstyleMap(i0.ɵɵpureFunction2(4, _c2, ctx_r88.assets == null ? null : ctx_r88.assets.ColorSet == null ? null : ctx_r88.assets.ColorSet.Primary, ctx_r88.assets == null ? null : ctx_r88.assets.ColorSet == null ? null : ctx_r88.assets.ColorSet.Secondary));
    i0.ɵɵproperty("disabled", !ctx_r88.userInput);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", ctx_r88.sendBtn, " ");
} }
function DesktopFullScreenComponent_ng_container_3_div_3_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r92 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 37)(1, "input", 70);
    i0.ɵɵlistener("ngModelChange", function DesktopFullScreenComponent_ng_container_3_div_3_div_7_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r92); const ctx_r91 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r91.userInput = $event); })("keyup.enter", function DesktopFullScreenComponent_ng_container_3_div_3_div_7_Template_input_keyup_enter_1_listener() { i0.ɵɵrestoreView(_r92); const ctx_r93 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r93.userInput && ctx_r93._send()); })("keyup", function DesktopFullScreenComponent_ng_container_3_div_3_div_7_Template_input_keyup_1_listener($event) { i0.ɵɵrestoreView(_r92); const ctx_r94 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r94.userWriting($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(2, DesktopFullScreenComponent_ng_container_3_div_3_div_7_button_2_Template, 2, 7, "button", 71);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r68 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r68.userInput)("placeholder", ctx_r68.currentPlaceHolder);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r68.changed);
} }
function DesktopFullScreenComponent_ng_container_3_div_3_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 35)(1, "i");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r69 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r69.select);
} }
function DesktopFullScreenComponent_ng_container_3_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 56);
    i0.ɵɵtext(1);
    i0.ɵɵelementStart(2, "div", 57, 58)(4, "div", 59);
    i0.ɵɵtemplate(5, DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_Template, 3, 2, "ng-container", 27);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 60);
    i0.ɵɵtemplate(7, DesktopFullScreenComponent_ng_container_3_div_3_div_7_Template, 3, 3, "div", 61);
    i0.ɵɵtemplate(8, DesktopFullScreenComponent_ng_container_3_div_3_div_8_Template, 3, 1, "div", 62);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "div", 63);
    i0.ɵɵelement(10, "img", 64);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const _r66 = i0.ɵɵreference(3);
    const ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r5.AssistantMode, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("scrollTop", _r66.scrollTo(0, 9999999));
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
    const _r96 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "button", 4);
    i0.ɵɵlistener("click", function DesktopFullScreenComponent_ng_container_3_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r96); const ctx_r95 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r95.byPassUserInput("exit", 0)); });
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
        this.impact = 1;
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
        // this.impact = value;
        if ((+this.userInput + value) >= 1) {
            this.userInput = (+this.userInput + value).toString();
            this.impact = (+this.userInput);
        }
    }
    changeNumberInput(value) {
        if (value >= 1) {
            this.userInput = value.toString();
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
DesktopFullScreenComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DesktopFullScreenComponent, selectors: [["bot-full-screen"]], inputs: { AssistantMode: "AssistantMode", assets: "assets", firstVisit: "firstVisit", firstUsageStory: "firstUsageStory", displayData: "displayData", disableUserInput: "disableUserInput", LastUserInput: "LastUserInput", LastBotAnswer: "LastBotAnswer", PlaceHolder: "PlaceHolder", IsMobile: "IsMobile", showInput: "showInput", NumberPlaceHolder: "NumberPlaceHolder", afterProcess: "afterProcess", nbFiles: "nbFiles" }, outputs: { readySend: "readySend", send: "send", sendBotCommand: "sendBotCommand", sendEvent: "sendEvent", sendCalendar: "sendCalendar", openUpload: "openUpload" }, features: [i0.ɵɵNgOnChangesFeature], decls: 4, vars: 7, consts: [["xmlns", "http://www.w3.org/1999/html", 1, "bot-container"], [1, "bot-view"], [4, "ngIf"], [3, "firstUsageStory", "assets", "ready"], ["id", "exit-btn", 2, "display", "none", 3, "click"], ["class", "bot-assistant-wrapper", 4, "ngIf"], ["class", "bot-chat-wrapper", 4, "ngIf"], [1, "bot-assistant-wrapper"], [1, "bot", 3, "ngStyle"], [1, "circle1"], [1, "circle2"], [1, "circle3"], [1, "bot-discussion-wrapper", 2, "min-height", "60%", "max-height", "60%", "height", "60%", "/*max-height", "120px"], [1, "overflow-hidden", "d-flex", "flex-column", "w-100", "position-relative", "user-input-container-outer"], [1, "position-relative", "bot-input-wrapper"], [1, "overflow-hidden", "d-flex", "flex-column", "w-100", "user-input-container"], [1, "user-input"], [1, "data", 3, "innerHTML"], [1, "time"], [1, "position-relative", "bot-answer"], [1, "d-flex", "flex-column", "w-100", "position-relative", "bot-answer__text"], [3, "state", "calendarTemplate", "columnOverride", "calendarChange", 4, "ngIf"], ["class", "fade", 3, "innerHTML", 4, "ngIf"], [1, "fade", 3, "innerHTML"], [1, "w-100", "justify-content-center", 3, "innerHTML"], ["id", "loading-creation"], [1, "mt35", "d-flex", "justify-content-center", "w-100", "position-relative", "bot-answer__buttons"], [4, "ngFor", "ngForOf"], ["class", "bot-button bot-button-left show-btn", 3, "style", "innerHTML", "click", 4, "ngIf"], ["class", "bot-button bot-button-right show-btn", 3, "style", "innerHTML", "click", 4, "ngIf"], ["class", "bot-button bot-button-grey show-btn", 3, "style", "innerHTML", "click", 4, "ngIf"], [1, "bot-button", "bot-button-left", "show-btn", 3, "innerHTML", "click"], [1, "bot-button", "bot-button-right", "show-btn", 3, "innerHTML", "click"], [1, "bot-button", "bot-button-grey", "show-btn", 3, "innerHTML", "click"], [1, "position-relative", "bot-answer__disable-input"], [1, "bot-input-disable"], [3, "state", "calendarTemplate", "columnOverride", "calendarChange"], [1, "bot-input"], [1, "input-number-div"], [1, "input-number-div-arrow"], [1, "arrow-up", 3, "click"], [3, "icon", "size"], [1, "arrow-down", 3, "click"], ["type", "number", "min", "1", "oninput", "validity.valid||(value='1');", 1, "nb-impact-input", 3, "ngModel", "ngModelChange", "keyup"], [1, "bot-container-btn"], [1, "bot-button", "send-btn", "input-number-btn", "showUserInputControls", 3, "disabled", "click"], [1, "primary", "rounded", "validate-after-btn", 2, "display", "inline-block", 3, "click"], [1, "rounded", "secondary", "skip-after-btn", 2, "display", "inline-block", 3, "click"], ["id", "bot-input-div", 1, "d-flex", "flex-column", "w-100", "position-realtive", "bot-input"], [1, "w-100", "h-100", "d-flex", "flex-column", "position-absolute", "bot-input__controls"], [3, "ngModel", "maxlength", "placeholder", "ngModelChange", "keyup.enter", "keyup"], [1, "bot-button", "send-btn", 3, "disabled", "click"], ["class", "bot-button-screen", 4, "ngIf"], ["class", "bot-button-attach", 3, "click", 4, "ngIf"], [1, "bot-button-screen"], [1, "bot-button-attach", 3, "click"], [1, "bot-chat-wrapper"], [1, "bot-discussion-wrapper", 3, "scrollTop"], ["scrollMe", ""], [1, "bot-chat"], [1, "bot-input-wrapper"], ["class", "bot-input", 4, "ngIf"], ["class", "bot-input-disable", 4, "ngIf"], [1, "bot-logo"], [3, "src"], [1, "bot-answer"], ["class", "", 3, "innerHTML", 4, "ngIf"], [1, "", 3, "innerHTML"], ["class", "bot-button", 3, "style", "innerHTML", "click", 4, "ngIf"], [1, "bot-button", 3, "innerHTML", "click"], ["type", "text", "maxlength", "200", 3, "ngModel", "placeholder", "ngModelChange", "keyup.enter", "keyup"], ["class", "bot-button", 3, "style", "disabled", "click", 4, "ngIf"], [1, "bot-button", 3, "disabled", "click"]], template: function DesktopFullScreenComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, dependencies: [i4.DefaultValueAccessor, i4.NumberValueAccessor, i4.NgControlStatus, i4.MaxLengthValidator, i4.MinValidator, i4.NgModel, i5.NgForOf, i5.NgIf, i5.NgStyle, i6.NowboardIconComponent, i7.FirstVisitComponent, i8.CustomCheckboxCalendarComponent, i9.SafeHtmlPipe], styles: ["@keyframes gradient{0%{background-position:50% 0%}50%{background-position:50% 100%}to{background-position:50% 0%}}@keyframes pulsebot{0%{transform:scale(1)}50%{transform:scale(1.3)}to{transform:scale(1)}}.bot-listening[_ngcontent-%COMP%]{height:100%;background:transparent}.bot-listening[_ngcontent-%COMP%]:before{content:\"\";position:absolute;top:-60vw;left:-80vw;width:150vw;height:150vw;border-radius:50%;background:transparent}.bot-listening[_ngcontent-%COMP%]:after{content:\"\";position:absolute;top:-40vw;left:-50vw;width:90vw;height:90vw;border-radius:50%;background:transparent}@media screen and (min--moz-device-pixel-ratio:0){.m-carl-notification[_ngcontent-%COMP%]{transform:translate(0)!important}}.m-carl-notification[_ngcontent-%COMP%]{position:relative;top:50%}.m-carl-notification[_ngcontent-%COMP%]   .m-cue[_ngcontent-%COMP%]{width:168px;height:168px;margin:0 auto 50px;display:flex;justify-content:center;align-items:center}.m-carl-notification[_ngcontent-%COMP%]   .m-cue[_ngcontent-%COMP%]   .a-cue-icon[_ngcontent-%COMP%]{position:absolute;width:100px;height:100px;transform:translate(5px) translateY(5px);border-radius:50%;background:radial-gradient(circle at 50% 50%,#9D107D 1px,#9D107D 3%,#580b58 60%);box-shadow:0 0 10px 5px #00000040;animation:pulsebot 3.5s ease infinite}.m-carl-notification[_ngcontent-%COMP%]   .m-cue[_ngcontent-%COMP%]   .a-cue-voice[_ngcontent-%COMP%]{transform-origin:center center;height:130px;width:130px;position:absolute;display:flex;justify-content:center;align-items:center}.m-carl-notification[_ngcontent-%COMP%]   .m-cue[_ngcontent-%COMP%]   .a-cue-voice-el[_ngcontent-%COMP%]{position:absolute;width:130px;height:130px;border-radius:50%;background:#fff;opacity:.2;filter:blur(2px)}.voice1[_ngcontent-%COMP%]{background:#9A147F!important}.voice2[_ngcontent-%COMP%]{background:#773691!important}.voice3[_ngcontent-%COMP%]{background:#4E5CA8!important}.voice4[_ngcontent-%COMP%]{background:#ABC1F1!important}.m-carl-notification[_ngcontent-%COMP%]   .m-cue[_ngcontent-%COMP%]   .a-cue-voice-el[_ngcontent-%COMP%]:nth-child(1){animation:hovering 6s ease 0s infinite reverse both}.m-carl-notification[_ngcontent-%COMP%]   .m-cue[_ngcontent-%COMP%]   .a-cue-voice-el[_ngcontent-%COMP%]:nth-child(2){animation:hovering 7s ease 0s infinite both}.m-carl-notification[_ngcontent-%COMP%]   .m-cue[_ngcontent-%COMP%]   .a-cue-voice-el[_ngcontent-%COMP%]:nth-child(3){animation:hovering 8s ease 0s infinite reverse both}.m-carl-notification[_ngcontent-%COMP%]   .m-cue[_ngcontent-%COMP%]   .a-cue-voice-el[_ngcontent-%COMP%]:nth-child(4){animation:hovering 9s ease 0s infinite both}.m-carl-notification[_ngcontent-%COMP%]   .m-cue[_ngcontent-%COMP%]   .a-cue-voice-el[_ngcontent-%COMP%]:nth-child(5){animation:hovering 10s ease 0s infinite reverse both}.m-carl-notification[_ngcontent-%COMP%]   .m-cue[_ngcontent-%COMP%]   .speaking[_ngcontent-%COMP%]{animation:pulse 2s ease 0s infinite}.m-carl-notification[_ngcontent-%COMP%]   .a-caption[_ngcontent-%COMP%]{color:#fff;font-size:1.5em;line-height:1.8em;text-shadow:0px 1px 2px rgba(0,0,0,.26);text-align:center}.m-carl-notification[_ngcontent-%COMP%]   .a-caption.speaking[_ngcontent-%COMP%]{text-shadow:0px 0px 0px;opacity:.4}@keyframes hovering{0%{transform:rotate(0) translate(18px) rotate(0)}to{transform:rotate(360deg) translate(18px) rotate(-360deg)}}@keyframes pulse{0%{transform:scale(1)}10%{transform:scale(1.15)}15%{transform:scale(1.25)}20%{transform:scale(1.05)}30%{transform:scale(1.3)}40%{transform:scale(1)}50%{transform:scale(1.25)}55%{transform:scale(1.1)}60%{transform:scale(1)}65%{transform:scale(1.3)}70%{transform:scale(1.2)}80%{transform:scale(1.15)}90%{transform:scale(1.25)}to{transform:scale(1.05)}}input[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}input[type=number][_ngcontent-%COMP%]{-moz-appearance:textfield}.nb-impact-input[_ngcontent-%COMP%]{background:none;margin-top:0}"], data: { animation: [FadeSlideInOut, FadeSlideInOutKonversoOpacityOut, FadeSlideInOutKonversoTranslateOut, FadeSlideInOutKonversoHeight, FadeSlideInOutKonversoTranslateOutTest, FadeSlideInOutKonversoHeightTest] // TODO remove it
     } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DesktopFullScreenComponent, [{
        type: Component,
        args: [{ selector: 'bot-full-screen', animations: [FadeSlideInOut, FadeSlideInOutKonversoOpacityOut, FadeSlideInOutKonversoTranslateOut, FadeSlideInOutKonversoHeight, FadeSlideInOutKonversoTranslateOutTest, FadeSlideInOutKonversoHeightTest] // TODO remove it
                , template: "<!--<div class=\"bot-container\"  [class]=\"IsMobile ? 'bot-mobile' : ''\" [style]=\"{'background-color' : '#100652 0% 0% no-repeat padding-box;'}\"-->\n\n  <!--<canvas class=\"orb-canvas\"></canvas>\n  <div class=\"overlay\">\n    <div class=\"overlay__inner\">\n    </div>\n  </div>-->\n  <div class=\"bot-container\"  [class]=\"IsMobile ? 'bot-mobile' : ''\" [style]=\"{'background-color' : '#100652 0% 0% no-repeat padding-box;'}\"\n     xmlns=\"http://www.w3.org/1999/html\">\n  <div class=\"bot-view\">\n    <ng-container *ngIf=\"firstVisit && firstUsageStory\">\n      <bot-first-visit [firstUsageStory]=\"firstUsageStory\" [assets]=\"assets\"\n                       (ready)=\"emit($event)\"></bot-first-visit>\n    </ng-container>\n    <ng-container *ngIf=\"!firstVisit || !firstUsageStory\">\n      <button (click)=\"byPassUserInput('exit', 0)\" id=\"exit-btn\" style=\"display: none;\"></button>\n\n      <div class=\"bot-assistant-wrapper\" *ngIf=\"AssistantMode\">\n        <!-- TODO do we need id, remove it? -->\n        <!--<div *ngIf=\"!botListening\" class=\"bot-logo\" id=\"botlogo\">\n          <img [src]=\"assets.FullSizeLogo\">\n        </div>-->\n        <!--<div [ngStyle]=\"{'height': '40%'}\" class=\"bot-logo bot-listening\">\n          <div [ngStyle]=\"{'transform': 'translateY(-10vh)'}\" class=\"m-carl-notification\">\n            <div class=\"m-carl-notification-cue m-cue\">\n              <div *ngIf=\"botListening\" class=\"a-cue-voice\" id=\"bot\">\n                <div class=\"a-cue-voice-el voice1\"></div>\n                <div class=\"a-cue-voice-el voice2\"></div>\n                <div class=\"a-cue-voice-el voice3\"></div>\n                <div class=\"a-cue-voice-el voice4\"></div>\n                <div class=\"a-cue-voice-el\"></div>\n              </div>\n              <div class=\"a-cue-icon\" id=\"bot-icon\"></div>\n            </div>\n          </div>\n        </div>-->\n\n        <div [@FadeSlideInOutKonversoOpacityOut]=\"animations.FadeSlideInOut(animationTTX, animationSlideValue)\" [ngStyle]=\"{'height': '40%'}\" class=\"bot\">\n          <div class=\"circle1\"></div>\n          <div class=\"circle2\"></div>\n          <div class=\"circle3\"></div>\n        </div>\n\n        <div  class=\"bot-discussion-wrapper\" style=\"min-height: 60%; max-height: 60%; height: 60%; /*max-height: 120px;*/\">\n          <!-- USER INPUT -->\n          <div [class.user-input-container-outer-hidden]=\"!showUserInvitation\" class=\"overflow-hidden d-flex flex-column w-100 position-relative user-input-container-outer\">\n            <ng-container *ngIf=\"(LastUserInput && !afterProcess) || !showUserInvitation\">\n              <div [@FadeSlideInOutKonversoHeightTest]=\"animations.FadeSlideInOut(animationHeightTTX*1.5, animationSlideValue)\" class=\"overflow-hidden d-flex flex-column w-100 user-input-container\">\n                <div [@FadeSlideInOutKonversoTranslateOutTest]=\"animations.FadeSlideInOut(animationTTX*1.5, animationSlideValue)\" [class.user-input-top]=\"LastUserInput?.message != ''\"  class=\"user-input\">\n                  <div class=\"data\" [style]=\"{\n                          color : assets?.ColorSet?.Secondary\n                        }\" [innerHTML]=\"LastUserInput.message\">\n                  </div>\n                  <span class=\"time\">{{LastUserInput.date}}</span>\n                </div>\n              </div>\n            </ng-container>\n          </div>\n\n          <!-- BOT ANSWER -->\n          <ng-container *ngIf=\"LastBotAnswer\">\n            <div class=\"position-relative bot-answer\">\n              <div [class.mt-4]=\"!showUserInvitation\" class=\"d-flex flex-column w-100 position-relative bot-answer__text\">\n\n                <!-- BOT ANSWER TEXT -->\n                <ng-container *ngIf=\"LastBotAnswer.text\">\n                  <!--<span *ngIf=\"!LastBotAnswer.text.includes('loading-dots')\" id=\"text\"></span><br>-->\n                  <span *ngIf=\"changed && LastBotAnswer.text.includes('loading-dots')\" class=\"fade\" [innerHTML]=\"LastBotAnswer.text | safeHtml\"></span><br>\n                  \n                  <ng-container *ngIf=\"!LastBotAnswer?.text?.includes('loading-dots') && changed && showText\">\n                    <span [@FadeSlideInOutKonversoTranslateOut]=\"animations.FadeSlideInOut(animationTTX, -100)\" class=\"w-100 justify-content-center\" [innerHTML]=\"LastBotAnswer.text | safeHtml\"></span>\n                  </ng-container>\n                  <ng-container *ngIf=\"!afterProcess\">\n                    <span id=\"loading-creation\"></span>\n                  </ng-container>\n                </ng-container>\n              </div>\n\n              <ng-container *ngIf=\"LastBotAnswer.medias && LastBotAnswer.medias.length\n                && LastBotAnswer.medias[0].required_actions\n                && LastBotAnswer.medias[0].required_actions.length > 0\n                && !LastBotAnswer?.text?.includes('loading-dots')\">\n                <!-- BOT ANSWER BUTTONS -->\n                <div class=\"mt35 d-flex justify-content-center w-100 position-relative bot-answer__buttons\">\n                  <ng-container *ngFor=\"let suggest of LastBotAnswer.medias[0].required_actions; let i = index\">\n                    <ng-container *ngIf=\"suggest.format === 'button'\">\n                        <button\n                          [@FadeSlideInOutKonversoTranslateOut]=\"animations.FadeSlideInOut(animationTTX, -100)\"\n                          *ngIf=\"suggest.value?.title == 'Terminer' && changed || suggest.value?.title == 'Quit' && changed\" [style]=\"{\n                            borderColor : assets?.ColorSet?.Primary,\n                            color : assets?.ColorSet?.Primary\n                          }\"\n                          class=\"bot-button bot-button-left show-btn\" (click)=\"byPassUserInput(suggest?.value?.onClick, i)\"\n                          [innerHTML]=\"suggest.label|| suggest.value?.displayedMessage || suggest.value?.title \">\n                        </button>\n                        <button\n                          [@FadeSlideInOutKonversoTranslateOut]=\"animations.FadeSlideInOut(animationTTX, -100)\"\n                          *ngIf=\"suggest.value?.title == 'Nouvelle Demande' && changed || suggest.value?.title == 'New Request' && changed\" [style]=\"{\n                            borderColor : assets?.ColorSet?.Primary,\n                            color : assets?.ColorSet?.Primary\n                          }\"\n                          class=\"bot-button bot-button-right show-btn\" (click)=\"byPassUserInput(suggest?.value?.onClick, i)\"\n                          [innerHTML]=\"suggest.label|| suggest.value?.displayedMessage || suggest.value?.title \">\n                        </button>\n                        <button\n                          [@FadeSlideInOutKonversoTranslateOut]=\"animations.FadeSlideInOut(animationTTX, -100)\"\n                          *ngIf=\"suggest.value?.title && suggest.value?.title != 'Terminer' && suggest.value?.title != 'Quit' && suggest.value?.title != 'Nouvelle Demande' && suggest.value?.title != 'New Request' && changed\"\n                            [style]=\"{\n                            borderColor : assets?.ColorSet?.Primary,\n                            color : assets?.ColorSet?.Primary\n                          }\"\n                          class=\"bot-button bot-button-grey show-btn\" (click)=\"byPassUserInput(suggest?.value?.onClick, i)\"\n                          [innerHTML]=\"suggest.label|| suggest.value?.displayedMessage || suggest.value?.title \">\n                      </button>\n                    </ng-container>\n                  </ng-container>\n                </div>\n\n                <ng-container *ngIf=\"disableUserInput\">\n                  <div class=\"position-relative bot-answer__disable-input\">\n                    <div [@FadeSlideInOutKonversoTranslateOut]=\"animations.FadeSlideInOut(animationTTX, -100)\" class=\"bot-input-disable\">\n                      <i>{{ select }}</i>\n                    </div>\n                  </div>\n                </ng-container>\n              </ng-container>\n              <!-- BOT ANSWER BUTTONS -->\n\n              <!--<ng-container *ngIf=\"afterProcess && config.AfterProcessScenario.FormElements.length > 0\">\n                <div class=\"after-process-form\">\n                  <div class=\"after-process-subform\" *ngFor=\"let formElements of config.AfterProcessScenario.FormElements\">\n                    <ng-container *ngFor=\"let form of formElements\">\n                      <ng-container [ngSwitch]=\"form.type\">\n                        <div *ngSwitchCase=\"'checkbox'\" [ngStyle]=\"{'display': form?.display ? form.display: 'block'}\" class=\"bot-checkbox\">\n                          <input [checked]=\"form?.checked == true ? 'true': 'false'\" [id]=\"form?.id\" [name]=\"form?.id\" [type]='form?.type' value=\"false\">\n                          <label [for]=\"form?.id\" class=\"bot-checkbox-label\">\n                            {{ translate.translate(service.locale, form.label) }}\n                          </label>\n                        </div>\n\n                        <input [class]=\"form?.class\" [id]=\"form?.id\" [ngStyle]=\"{'display': form?.display ? form.display: 'block'}\" *ngSwitchCase=\"'text'\"\n                        [pattern]=\"form?.pattern\" [placeholder]=\"form?.placeholder\" [type]=\"form?.type\"\n                        [value]=\"form?.value\">\n\n                        <div [class]=\"form?.class\" *ngSwitchCase=\"'div'\" [ngStyle]=\"{'display': form?.display ? form.display: 'block'}\">\n                          {{ translate.translate(service.locale, form?.content) }}\n                        </div>\n\n                        <textarea [class]=\"form?.class\" [id]=\"form?.id\" *ngSwitchCase=\"'textarea'\" [ngStyle]=\"{'display': form?.display ? form.display: 'block'}\"\n                        [placeholder]=\"translate.translate(service.locale, form?.placeholder)\"></textarea>\n                      </ng-container>\n                    </ng-container>\n                  </div>\n                </div>\n              </ng-container>-->\n\n              <custom-checkbox-calendar\n                [@FadeSlideInOutKonversoHeightTest]=\"animations.FadeSlideInOut(animationTTX, animationSlideValue)\"\n                *ngIf=\"afterProcess\"\n                [state]=\"afterProcess\"\n                (calendarChange)=\"bindCalendar($event)\"\n                [calendarTemplate]=\"calendarTemplate\"\n                [columnOverride]=\"calendarKeyOverride\">\n              </custom-checkbox-calendar>\n\n              <ng-container *ngIf=\"inputType === 'number'\">\n                <div [@FadeSlideInOutKonversoOpacityOut]=\"animations.FadeSlideInOut(animationTTX, animationSlideValue)\" class=\"bot-input\">\n                                  <!--<input [type]=\"inputType\" [(ngModel)]=\"userInput\" (keyup.enter)=\"userInput && _send()\" (keyup)=\"userWriting($event)\" min=\"2\" [max]=\"inputLimit\"\n                       [placeholder]=\"currentPlaceHolder\">-->\n                  <div class=\"input-number-div\">\n                    <div class=\"input-number-div-arrow\">\n                      <button (click)=\"changeNumber(1)\" class=\"arrow-up\">\n                        <nb-icon [icon]=\"'up_2'\" [size]=\"1.5\"></nb-icon>\n                      </button>\n\n                      <button (click)=\"changeNumber(-1)\" class=\"arrow-down\">\n                        <nb-icon [icon]=\"'down_2'\" [size]=\"1.5\"></nb-icon>\n                      </button>\n                    </div>\n\n                    <input [(ngModel)]=\"impact\" (keyup)=\"changeNumberInput(impact)\" class=\"nb-impact-input\" \n                    type=\"number\" min=\"1\"\n                    oninput=\"validity.valid||(value='1');\"\n                    >\n                  </div>\n\n                  <div class=\"bot-container-btn\">\n                    <button class=\"bot-button send-btn input-number-btn showUserInputControls\" [style]=\"{\n                      backgroundColor : assets?.ColorSet?.Primary,\n                      color : assets?.ColorSet?.Secondary\n                  }\" (click)=\"_send();showUserInputControls=false;showUserInvitation=!showUserInvitation;\" \n                  [disabled]=\"!userInput || inputType === 'number' && impact < 1\">\n\n                      <ng-container *ngIf=\"inputType === 'number'\">\n                        {{ sendBtn }}\n                      </ng-container>\n                    </button>\n                  </div>\n                </div>\n              </ng-container>\n            </div>\n          </ng-container>\n\n          <div class=\"position-relative bot-input-wrapper\">\n            <ng-container *ngIf=\"afterProcess && config.AfterProcessScenario.FormButtons.length > 0\">\n              <!--<button [class]=\"btn.class\" *ngFor=\"let btn of config.AfterProcessScenario.FormButtons\" [ngStyle]=\"{'display': btn?.display ? btn.display: 'block'}\">\n                {{ translate.translate(service.locale, btn.label) }}\n              </button>-->\n              <button (click)=\"getCalendar()\" class=\"primary rounded validate-after-btn\" style=\"display: inline-block;\">\n                {{ translate.translate(service.locale, 'VALIDATE_AVAILABILITY') }}\n              </button>\n\n              <button class=\"rounded secondary skip-after-btn\" style=\"display: inline-block;\" (click)=\"skip()\">\n                {{ translate.translate(service.locale, 'SKIP') }}\n              </button>\n            </ng-container>\n\n            <ng-container *ngIf=\"!afterProcess && showUserInputControls && inputType !== 'number'\">\n              <ng-container *ngIf=\"!disableUserInput && showInput\">\n                <div class=\"d-flex flex-column w-100 position-realtive bot-input\" id=\"bot-input-div\">\n                  <div [@FadeSlideInOutKonversoTranslateOut]=\"animations.FadeSlideInOut(animationTTX, animationSlideValueAdd)\" class=\"w-100 h-100 d-flex flex-column position-absolute bot-input__controls\">\n\n                    <ng-container *ngIf=\"inputType === 'text'\">\n                      <textarea [(ngModel)]=\"userInput\" (keyup.enter)=\"userInput && _send()\" (keyup)=\"userWriting($event)\" [maxlength]=\"inputLimit\"\n                        [placeholder]=\"currentPlaceHolder\"></textarea>\n                    </ng-container>\n\n                    <ng-container *ngIf=\"inputType !== 'number'\">\n                      <div class=\"bot-container-btn\">\n                        <button class=\"bot-button send-btn\" [style]=\"{\n                          backgroundColor : assets?.ColorSet?.Primary,\n                          color : assets?.ColorSet?.Secondary}\"\n                          (click)=\"_send()\"\n                          [disabled]=\"!userInput\">\n\n                          <ng-container *ngIf=\"inputType !== 'number'\">\n                            {{ sendBtnMsg }}\n                          </ng-container>\n\n                          <!--<ng-container *ngIf=\"inputType === 'number'\">\n                            {{ sendBtn }}\n                          </ng-container>-->\n                        </button>\n\n                        <button *ngIf=\"inputType !== 'number' && IsMobile\" class=\"bot-button-screen\">\n                          <nb-icon [icon]=\"'scan_11'\" [size]=\"1.5\"></nb-icon>\n                          {{ btnScreen }}\n                        </button>\n\n                        <button *ngIf=\"inputType !== 'number'\" class=\"bot-button-attach\" (click)=\"openUpload.emit(true)\">\n                          {{ nbFiles }}\n\n                          <ng-container *ngIf=\"nbFiles <= 1\">\n                            {{ translate.translate(service.locale, 'ATTACHMENT') }}\n                          </ng-container>\n\n                          <ng-container *ngIf=\"nbFiles > 1\">\n                            {{ translate.translate(service.locale, 'ATTACHMENTS') }}\n                          </ng-container>\n\n                          <nb-icon [icon]=\"'attachment'\" [size]=\"1.5\"></nb-icon>\n                        </button>\n                      </div>\n                    </ng-container>\n\n                  </div>\n                </div>\n              </ng-container>\n            </ng-container>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"bot-chat-wrapper\" *ngIf=\"!AssistantMode\">\n        {{AssistantMode}}\n        <div class=\"bot-discussion-wrapper\" #scrollMe [scrollTop]=\"scrollMe.scrollTo(0, 9999999)\">\n          <div class=\"bot-chat\">\n            <ng-container *ngFor=\"let entry of displayData\">\n              <ng-container *ngIf=\"entry.date\">\n                <div [@FadeSlideInOutKonversoTranslateOut]=\"animations.FadeSlideInOut(animationTTX, animationSlideValue)\" class=\"user-input\">\n                  <div class=\"data\" [style]=\"{\n                     backgroundColor : assets?.ColorSet?.Primary,\n                     color : assets?.ColorSet?.Secondary\n                    }\" [innerHTML]=\"entry.message\">\n                  </div>\n                  <span class=\"time\">{{entry.date}}</span>\n                </div>\n              </ng-container>\n              <ng-container *ngIf=\"!entry.date\">\n                <div class=\"bot-answer\">\n                  <ng-container *ngIf=\"entry.text\">\n                    <span *ngIf=\"changed\" class=\"\" [innerHTML]=\"entry.text | safeHtml\"></span>\n                  </ng-container>\n                  <ng-container *ngIf=\"entry.medias && entry.medias.length\n                   && entry.medias[0].required_actions\n                   && entry.medias[0].required_actions.length\">\n                    <ng-container *ngFor=\"let suggest of entry.medias[0].required_actions\">\n                      <ng-container *ngIf=\"suggest.format === 'button'\">\n                        <button *ngIf=\"changed\" [style]=\"{\n                     borderColor : assets?.ColorSet?.Primary,\n                     color : assets?.ColorSet?.Primary\n            }\" class=\"bot-button\" (click)=\"byPassUserInput(suggest?.value?.onClick)\"\n                                [innerHTML]=\"suggest.label|| suggest.value?.displayedMessage || suggest.value?.title \"></button>\n                      </ng-container>\n                    </ng-container>\n                  </ng-container>\n\n                </div>\n              </ng-container>\n            </ng-container>\n          </div>\n        </div>\n        <div class=\"bot-input-wrapper\">\n          <div class=\"bot-input\" *ngIf=\"!disableUserInput && showInput\">\n            <input type=\"text\" [(ngModel)]=\"userInput\" (keyup.enter)=\"userInput && _send()\" (keyup)=\"userWriting($event)\" maxlength=\"200\"\n                   [placeholder]=\"currentPlaceHolder\">\n            <button *ngIf=\"changed\" class=\"bot-button\" [style]=\"{\n                     backgroundColor : assets?.ColorSet?.Primary,\n                     color : assets?.ColorSet?.Secondary\n            }\" (click)=\"_send()\" [disabled]=\"!userInput\">{{ sendBtn }}\n            </button>\n          </div>\n          <div class=\"bot-input-disable\" *ngIf=\"disableUserInput\">\n            <i>{{ select }}</i>\n          </div>\n        </div>\n        <div class=\"bot-logo\">\n          <img [src]=\"assets.FullSizeLogo\">\n        </div>\n      </div>\n    </ng-container>\n\n  </div>\n</div>\n", styles: ["@keyframes gradient{0%{background-position:50% 0%}50%{background-position:50% 100%}to{background-position:50% 0%}}@keyframes pulsebot{0%{transform:scale(1)}50%{transform:scale(1.3)}to{transform:scale(1)}}.bot-listening{height:100%;background:transparent}.bot-listening:before{content:\"\";position:absolute;top:-60vw;left:-80vw;width:150vw;height:150vw;border-radius:50%;background:transparent}.bot-listening:after{content:\"\";position:absolute;top:-40vw;left:-50vw;width:90vw;height:90vw;border-radius:50%;background:transparent}@media screen and (min--moz-device-pixel-ratio:0){.m-carl-notification{transform:translate(0)!important}}.m-carl-notification{position:relative;top:50%}.m-carl-notification .m-cue{width:168px;height:168px;margin:0 auto 50px;display:flex;justify-content:center;align-items:center}.m-carl-notification .m-cue .a-cue-icon{position:absolute;width:100px;height:100px;transform:translate(5px) translateY(5px);border-radius:50%;background:radial-gradient(circle at 50% 50%,#9D107D 1px,#9D107D 3%,#580b58 60%);box-shadow:0 0 10px 5px #00000040;animation:pulsebot 3.5s ease infinite}.m-carl-notification .m-cue .a-cue-voice{transform-origin:center center;height:130px;width:130px;position:absolute;display:flex;justify-content:center;align-items:center}.m-carl-notification .m-cue .a-cue-voice-el{position:absolute;width:130px;height:130px;border-radius:50%;background:#fff;opacity:.2;filter:blur(2px)}.voice1{background:#9A147F!important}.voice2{background:#773691!important}.voice3{background:#4E5CA8!important}.voice4{background:#ABC1F1!important}.m-carl-notification .m-cue .a-cue-voice-el:nth-child(1){animation:hovering 6s ease 0s infinite reverse both}.m-carl-notification .m-cue .a-cue-voice-el:nth-child(2){animation:hovering 7s ease 0s infinite both}.m-carl-notification .m-cue .a-cue-voice-el:nth-child(3){animation:hovering 8s ease 0s infinite reverse both}.m-carl-notification .m-cue .a-cue-voice-el:nth-child(4){animation:hovering 9s ease 0s infinite both}.m-carl-notification .m-cue .a-cue-voice-el:nth-child(5){animation:hovering 10s ease 0s infinite reverse both}.m-carl-notification .m-cue .speaking{animation:pulse 2s ease 0s infinite}.m-carl-notification .a-caption{color:#fff;font-size:1.5em;line-height:1.8em;text-shadow:0px 1px 2px rgba(0,0,0,.26);text-align:center}.m-carl-notification .a-caption.speaking{text-shadow:0px 0px 0px;opacity:.4}@keyframes hovering{0%{transform:rotate(0) translate(18px) rotate(0)}to{transform:rotate(360deg) translate(18px) rotate(-360deg)}}@keyframes pulse{0%{transform:scale(1)}10%{transform:scale(1.15)}15%{transform:scale(1.25)}20%{transform:scale(1.05)}30%{transform:scale(1.3)}40%{transform:scale(1)}50%{transform:scale(1.25)}55%{transform:scale(1.1)}60%{transform:scale(1)}65%{transform:scale(1.3)}70%{transform:scale(1.2)}80%{transform:scale(1.15)}90%{transform:scale(1.25)}to{transform:scale(1.05)}}input::-webkit-outer-spin-button,input::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}input[type=number]{-moz-appearance:textfield}.nb-impact-input{background:none;margin-top:0}\n"] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVza3RvcC1mdWxsLXNjcmVlbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9rb252ZXJzby9zcmMvbGliL2Rlc2t0b3AtZnVsbC1zY3JlZW4vZGVza3RvcC1mdWxsLXNjcmVlbi5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9rb252ZXJzby9zcmMvbGliL2Rlc2t0b3AtZnVsbC1zY3JlZW4vZGVza3RvcC1mdWxsLXNjcmVlbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFxQixNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFJaEcsT0FBTyxFQUVILGNBQWMsRUFDZCxnQ0FBZ0MsRUFDaEMsa0NBQWtDLEVBQ2xDLDRCQUE0QixFQUMvQixNQUFNLDBCQUEwQixDQUFDO0FBWWxDLG9CQUFvQjtBQUNwQixPQUFPLEVBQUMsT0FBTyxFQUFhLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFDLE1BQU0scUJBQXFCLENBQUM7Ozs7Ozs7Ozs7Ozs7SUNiL0UsNkJBQW9EO0lBQ2xELDBDQUN3QztJQUF2QiwrTEFBUyxlQUFBLG1CQUFZLENBQUEsSUFBQztJQUFDLGlCQUFrQjtJQUM1RCwwQkFBZTs7O0lBRkksZUFBbUM7SUFBbkMsd0RBQW1DLHlCQUFBOzs7O0lBbUM5Qyw2QkFBOEU7SUFDNUUsK0JBQXdMLGNBQUE7SUFFcEwsMEJBR007SUFDTixnQ0FBbUI7SUFBQSxZQUFzQjtJQUFBLGlCQUFPLEVBQUEsRUFBQTtJQUd0RCwwQkFBZTs7O0lBVFIsZUFBNEc7SUFBNUcsaUpBQTRHO0lBQ0csZUFBcUQ7SUFBckQsNEdBQXFEO0lBQWxLLGlKQUE0RztJQUM3RixlQUVWO0lBRlUsa0pBRVY7SUFBQywyRUFBbUM7SUFFekIsZUFBc0I7SUFBdEIsK0NBQXNC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dEMsU0FBUzsyQkFDSSxpQkFBaUIsY0FJZixDQUFDLGNBQWMsRUFBRSxnQ0FBZ0MsRUFBRSxrQ0FBa0MsRUFBRSw0QkFBNEIsRUFBRSxzQ0FBc0MsRUFBRSxnQ0FBZ0MsQ0FBQyxDQUFDLGlCQUFpQjs7O3NCQXNGL00sTUFBTTt1QkFBQyxpQkFBaUI7d0JBbkY1QixhQUFhO2tCQUFyQixLQUFLO1lBQ0csTUFBTTtrQkFBZCxLQUFLO1lBQ0csVUFBVTtrQkFBbEIsS0FBSztZQUNHLGVBQWU7a0JBQXZCLEtBQUs7WUFDRyxXQUFXO2tCQUFuQixLQUFLO1lBQ0csZ0JBQWdCO2tCQUF4QixLQUFLO1lBQ0csYUFBYTtrQkFBckIsS0FBSztZQUNHLGFBQWE7a0JBQXJCLEtBQUs7WUFDRyxXQUFXO2tCQUFuQixLQUFLO1lBQ0csUUFBUTtrQkFBaEIsS0FBSztZQUNHLFNBQVM7a0JBQWpCLEtBQUs7WUFDRyxpQkFBaUI7a0JBQXpCLEtBQUs7WUFDRyxZQUFZO2tCQUFwQixLQUFLO1lBQ0csT0FBTztrQkFBZixLQUFLO1lBRUksU0FBUztrQkFBbEIsTUFBTTtZQUNHLElBQUk7a0JBQWIsTUFBTTtZQUNHLGNBQWM7a0JBQXZCLE1BQU07WUFDRyxTQUFTO2tCQUFsQixNQUFNO1lBQ0csWUFBWTtrQkFBckIsTUFBTTtZQUNHLFVBQVU7a0JBQW5CLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbmplY3QsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RGVmYXVsdEFzc2V0cywgS29udmVyc29JbnRlcmZhY2UsIE9wZW5DaGF0Qm90UmVzcG9uc2UsIFVzZXJJbnB1dH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlL0tvbnZlcnNvSW50ZXJmYWNlJztcbmltcG9ydCB7S29udmVyc29TZXJ2aWNlfSBmcm9tICcuLi9rb252ZXJzby5zZXJ2aWNlJztcbmltcG9ydCB7VHJhbnNsYXRlU2VydmljZX0gZnJvbSAnLi4vdHJhbnNsYXRlLnNlcnZpY2UnO1xuaW1wb3J0IHtcbiAgICBBbmltYXRpb25zU2VydmljZSxcbiAgICBGYWRlU2xpZGVJbk91dCxcbiAgICBGYWRlU2xpZGVJbk91dEtvbnZlcnNvT3BhY2l0eU91dCxcbiAgICBGYWRlU2xpZGVJbk91dEtvbnZlcnNvVHJhbnNsYXRlT3V0LFxuICAgIEZhZGVTbGlkZUluT3V0S29udmVyc29IZWlnaHRcbn0gZnJvbSAnbmd4LW5vd2JyYWlucy1hbmltYXRpb25zJztcblxuZGVjbGFyZSB2YXIgUElYSTogYW55O1xuY29uc3QgZGVmYXVsdElucHV0VHlwZSA9ICd0ZXh0JztcbmNvbnN0IGRlZmF1bHRJbnB1dExpbWl0ID0gMzAwO1xuY29uc3QgQU5JTUFUSU9OX1RUWCA9IDc1MDtcbmNvbnN0IEFOSU1BVElPTl9UVFhfQUREID0gMjUwO1xuY29uc3QgQU5JTUFUSU9OX1NMSURFX1ZBTFVFID0gLTUwO1xuY29uc3QgQU5JTUFUSU9OX1NMSURFX1ZBTFVFX0FERCA9IC0yNTtcbmNvbnN0IEFOSU1BVElPTl9IRUlHSFRfVFRYID0gMTI1MDtcblxuXG4vKiBUT0RPIHJlbW92ZSBpdCAqL1xuaW1wb3J0IHthbmltYXRlLCBrZXlmcmFtZXMsIHN0eWxlLCB0cmFuc2l0aW9uLCB0cmlnZ2VyfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcblxuY29uc3QgQU5JTUFUSU9OX1RZUEVfQ1VCSUNfQkVaSUVSID0gJ2N1YmljLWJlemllcigwLjM5LCAwLjU4LCAwLjU3LCAxKSc7XG5cbi8qIFRPRE8gKi9cbi8qIG1vdmUgdGhlIGFuaW1hdGlvbnMgdG8gbmd4LW5vd2JyYWlucy1hbmltYXRpb25zICovXG5leHBvcnQgY29uc3QgRmFkZVNsaWRlSW5PdXRLb252ZXJzb1RyYW5zbGF0ZU91dFRlc3QgPSB0cmlnZ2VyKCdGYWRlU2xpZGVJbk91dEtvbnZlcnNvVHJhbnNsYXRlT3V0VGVzdCcsIFtcbiAgICB0cmFuc2l0aW9uKCc6ZW50ZXInLCBbXG4gICAgICAgIHN0eWxlKHtvcGFjaXR5OiAwLCB0b3A6ICd7e3BlcmNlbnRfc3RhcnR9fSUnfSksXG4gICAgICAgIGFuaW1hdGUoYHt7dHR4fX1tcyAke0FOSU1BVElPTl9UWVBFX0NVQklDX0JFWklFUn1gLCBzdHlsZSh7b3BhY2l0eTogMSwgdG9wOiAnMCUnfSkpXG4gICAgXSksXG4gICAgdHJhbnNpdGlvbignOmxlYXZlJywgW1xuICAgICAgICBzdHlsZSh7b3BhY2l0eTogMX0pLFxuICAgICAgICBhbmltYXRlKCd7e3R0eH19bXMgZWFzZS1pbi1vdXQnLCBzdHlsZSh7b3BhY2l0eTogMH0pKVxuICAgIF0pXG5dKTtcblxuZXhwb3J0IGNvbnN0IEZhZGVTbGlkZUluT3V0S29udmVyc29IZWlnaHRUZXN0ID0gdHJpZ2dlcignRmFkZVNsaWRlSW5PdXRLb252ZXJzb0hlaWdodFRlc3QnLCBbXG4gICAgdHJhbnNpdGlvbignOmVudGVyJywgW1xuICAgICAgICBzdHlsZSh7aGVpZ2h0OiAwfSksXG4gICAgICAgIGFuaW1hdGUoYHt7dHR4fX1tcyAke0FOSU1BVElPTl9UWVBFX0NVQklDX0JFWklFUn1gLCBzdHlsZSh7aGVpZ2h0OiAnKid9KSlcbiAgICBdKSxcbiAgICB0cmFuc2l0aW9uKCc6bGVhdmUnLCBbXG4gICAgICAgIHN0eWxlKHtvcGFjaXR5OiAxfSksXG4gICAgICAgIGFuaW1hdGUoJ3t7dHR4fX1tcyBlYXNlLWluLW91dCcsIHN0eWxlKHtvcGFjaXR5OiAwfSkpXG4gICAgXSlcbl0pO1xuXG5leHBvcnQgY29uc3QgRmFkZVNsaWRlSW5PdXRLb252ZXJzb0hlaWdodE91dFRlc3QgPSB0cmlnZ2VyKCdGYWRlU2xpZGVJbk91dEtvbnZlcnNvSGVpZ2h0T3V0VGVzdCcsIFtcbiAgICB0cmFuc2l0aW9uKCc6ZW50ZXInLCBbXG4gICAgICAgIHN0eWxlKHtoZWlnaHQ6ICcqJ30pLFxuICAgICAgICBhbmltYXRlKGB7e3R0eH19bXMgJHtBTklNQVRJT05fVFlQRV9DVUJJQ19CRVpJRVJ9YCwgc3R5bGUoe2hlaWdodDogMH0pKVxuICAgIF0pXG5dKTtcblxuLyogVE9ETyByZW1vdmUgaXQgKi9cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdib3QtZnVsbC1zY3JlZW4nLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9kZXNrdG9wLWZ1bGwtc2NyZWVuLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9kZXNrdG9wLWZ1bGwtc2NyZWVuLmNvbXBvbmVudC5jc3MnXSxcbiAgICAvL2FuaW1hdGlvbnM6IFtGYWRlU2xpZGVJbk91dCwgRmFkZVNsaWRlSW5PdXRLb252ZXJzb09wYWNpdHlPdXQsIEZhZGVTbGlkZUluT3V0S29udmVyc29UcmFuc2xhdGVPdXQsIEZhZGVTbGlkZUluT3V0S29udmVyc29IZWlnaHRdXG4gICAgYW5pbWF0aW9uczogW0ZhZGVTbGlkZUluT3V0LCBGYWRlU2xpZGVJbk91dEtvbnZlcnNvT3BhY2l0eU91dCwgRmFkZVNsaWRlSW5PdXRLb252ZXJzb1RyYW5zbGF0ZU91dCwgRmFkZVNsaWRlSW5PdXRLb252ZXJzb0hlaWdodCwgRmFkZVNsaWRlSW5PdXRLb252ZXJzb1RyYW5zbGF0ZU91dFRlc3QsIEZhZGVTbGlkZUluT3V0S29udmVyc29IZWlnaHRUZXN0XSAvLyBUT0RPIHJlbW92ZSBpdFxufSlcbmV4cG9ydCBjbGFzcyBEZXNrdG9wRnVsbFNjcmVlbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0IHtcbiAgICBASW5wdXQoKSBBc3Npc3RhbnRNb2RlOiBib29sZWFuID0gZmFsc2U7XG4gICAgQElucHV0KCkgYXNzZXRzOiBEZWZhdWx0QXNzZXRzO1xuICAgIEBJbnB1dCgpIGZpcnN0VmlzaXQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBASW5wdXQoKSBmaXJzdFVzYWdlU3Rvcnk6IHN0cmluZ1tdO1xuICAgIEBJbnB1dCgpIGRpc3BsYXlEYXRhOiAoVXNlcklucHV0IHwgT3BlbkNoYXRCb3RSZXNwb25zZSlbXTtcbiAgICBASW5wdXQoKSBkaXNhYmxlVXNlcklucHV0OiBib29sZWFuO1xuICAgIEBJbnB1dCgpIExhc3RVc2VySW5wdXQ6IFVzZXJJbnB1dDtcbiAgICBASW5wdXQoKSBMYXN0Qm90QW5zd2VyOiBPcGVuQ2hhdEJvdFJlc3BvbnNlO1xuICAgIEBJbnB1dCgpIFBsYWNlSG9sZGVyOiBzdHJpbmdbXTtcbiAgICBASW5wdXQoKSBJc01vYmlsZTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIHNob3dJbnB1dDogYm9vbGVhbjtcbiAgICBASW5wdXQoKSBOdW1iZXJQbGFjZUhvbGRlcjogc3RyaW5nW107XG4gICAgQElucHV0KCkgYWZ0ZXJQcm9jZXNzID0gZmFsc2U7XG4gICAgQElucHV0KCkgbmJGaWxlcyA9IDA7XG5cbiAgICBAT3V0cHV0KCkgcmVhZHlTZW5kOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KGZhbHNlKTtcbiAgICBAT3V0cHV0KCkgc2VuZDogRXZlbnRFbWl0dGVyPFVzZXJJbnB1dD4gPSBuZXcgRXZlbnRFbWl0dGVyPFVzZXJJbnB1dD4obnVsbCk7XG4gICAgQE91dHB1dCgpIHNlbmRCb3RDb21tYW5kOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPihudWxsKTtcbiAgICBAT3V0cHV0KCkgc2VuZEV2ZW50OiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPihudWxsKTtcbiAgICBAT3V0cHV0KCkgc2VuZENhbGVuZGFyOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PihudWxsKTtcbiAgICBAT3V0cHV0KCkgb3BlblVwbG9hZDogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPihmYWxzZSk7XG4gICAgcHVibGljIHVzZXJJbnB1dDogc3RyaW5nO1xuICAgIHB1YmxpYyBjdXJyZW50UGxhY2VIb2xkZXI6IHN0cmluZyA9ICcnO1xuICAgIHB1YmxpYyBzZW5kQnRuID0gJyc7XG4gICAgcHVibGljIHNlbmRCdG5Nc2cgPSAnJztcbiAgICBwdWJsaWMgc2VsZWN0ID0gJyc7XG4gICAgcHVibGljIGNoYW5nZWQgPSBmYWxzZTtcbiAgICBwdWJsaWMgYm90TGlzdGVuaW5nID0gZmFsc2U7XG4gICAgcHVibGljIHNob3dXcmFwcGVyID0gdHJ1ZTtcbiAgICBwdWJsaWMgc2hvd1RleHQgPSB0cnVlO1xuICAgIHB1YmxpYyBpbnB1dFR5cGU6IHN0cmluZyA9IGRlZmF1bHRJbnB1dFR5cGU7XG4gICAgcHVibGljIGlucHV0TGltaXQ6IG51bWJlciA9IGRlZmF1bHRJbnB1dExpbWl0O1xuICAgIHByaXZhdGUgbmV3TWVzc2FnZSA9IGZhbHNlO1xuICAgIHByaXZhdGUgbWVzc2FnZUN1cnJlbnQgPSAnJztcbiAgICBwcml2YXRlIG1zZ0FycmF5ID0gW107XG4gICAgcHJpdmF0ZSBib3RMaXN0ZW5pbmdUaW1lciA9IDA7XG4gICAgcHJpdmF0ZSBhbmltX2RvbmUgPSBmYWxzZTtcbiAgICBwcml2YXRlIHJlbG9hZGVkID0gZmFsc2U7XG4gICAgcHJpdmF0ZSB0aW1lcjtcbiAgICBwdWJsaWMgYnRuU2NyZWVuID0gJyc7XG4gICAgcHVibGljIG5iQXR0YWNobWVudHMgPSAwO1xuICAgIGNvbmZpZzogS29udmVyc29JbnRlcmZhY2U7XG4gICAgcHJpdmF0ZSBkYXlzID0gW107XG4gICAgcHVibGljIGNhbGVuZGFyQXZhaWxhYmlsaXR5ID0ge307XG4gICAgcHVibGljIGNhbGVuZGFyVGVtcGxhdGUgPSB7XG4gICAgICAgIG1vcm5pbmc6IHthbGw6IHRydWUsIG1vbmRheTogdHJ1ZSwgdHVlc2RheTogdHJ1ZSwgd2VkbmVzZGF5OiB0cnVlLCB0aHVyc2RheTogdHJ1ZSwgZnJpZGF5OiB0cnVlfSxcbiAgICAgICAgYWZ0ZXJub29uOiB7YWxsOiB0cnVlLCBtb25kYXk6IHRydWUsIHR1ZXNkYXk6IHRydWUsIHdlZG5lc2RheTogdHJ1ZSwgdGh1cnNkYXk6IHRydWUsIGZyaWRheTogdHJ1ZX1cbiAgICB9O1xuICAgIHB1YmxpYyBjYWxlbmRhcktleU92ZXJyaWRlID0ge1xuICAgICAgICBtb3JuaW5nOiAnTU9STklOR19BTEwnLFxuICAgICAgICBhZnRlcm5vb246ICdBRlRFUk5PT05fQUxMJyxcbiAgICAgICAgbW9uZGF5OiAnTU9OREFZJyxcbiAgICAgICAgdHVlc2RheTogJ1RVRVNEQVknLFxuICAgICAgICB3ZWRuZXNkYXk6ICdXRURORVNEQVknLFxuICAgICAgICB0aHVyc2RheTogJ1RIVVJTREFZJyxcbiAgICAgICAgZnJpZGF5OiAnRlJJREFZJ1xuICAgIH07XG4gICAgcHVibGljIHNob3dVc2VySW5wdXRDb250cm9scyA9IHRydWU7XG4gICAgcHVibGljIHNob3dVc2VySW52aXRhdGlvbiA9IHRydWU7XG5cbiAgICBwdWJsaWMgYW5pbWF0aW9uVFRYID0gQU5JTUFUSU9OX1RUWDtcbiAgICBwdWJsaWMgYW5pbWF0aW9uVHR4QWRkID0gQU5JTUFUSU9OX1RUWF9BREQ7XG4gICAgcHVibGljIGFuaW1hdGlvblNsaWRlVmFsdWUgPSBBTklNQVRJT05fU0xJREVfVkFMVUU7XG4gICAgcHVibGljIGFuaW1hdGlvblNsaWRlVmFsdWVBZGQgPSBBTklNQVRJT05fU0xJREVfVkFMVUVfQUREO1xuICAgIHB1YmxpYyBhbmltYXRpb25IZWlnaHRUVFggPSBBTklNQVRJT05fSEVJR0hUX1RUWDtcbiAgICBcbiAgICBwdWJsaWMgaW1wYWN0ID0gMTtcblxuICAgIGNoYW5nZU51bWJlcih2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIC8vIHRoaXMuaW1wYWN0ID0gdmFsdWU7XG4gICAgICAgIGlmICgoK3RoaXMudXNlcklucHV0ICsgdmFsdWUpID49IDEpIHtcbiAgICAgICAgICAgIHRoaXMudXNlcklucHV0ID0gKCt0aGlzLnVzZXJJbnB1dCArIHZhbHVlKS50b1N0cmluZygpO1xuICAgICAgICAgICAgdGhpcy5pbXBhY3QgPSAoK3RoaXMudXNlcklucHV0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNoYW5nZU51bWJlcklucHV0KHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHZhbHVlID49IDEpIHtcbiAgICAgICAgICAgIHRoaXMudXNlcklucHV0ID0gdmFsdWUudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB0cmFuc2xhdGU6IFRyYW5zbGF0ZVNlcnZpY2UsIHB1YmxpYyBzZXJ2aWNlOiBLb252ZXJzb1NlcnZpY2UsIHB1YmxpYyBhbmltYXRpb25zOiBBbmltYXRpb25zU2VydmljZSxcbiAgICAgICAgICAgICAgICBASW5qZWN0KCdfX05neEtvbnZlcnNvX18nKSBjb25maWc6IEtvbnZlcnNvSW50ZXJmYWNlKSB7XG4gICAgICAgIHNlcnZpY2UubGFuZy5zdWJzY3JpYmUoKHIpID0+IHtcbiAgICAgICAgICAgIGlmIChzZXJ2aWNlLmxvY2FsZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VuZEJ0biA9IHRyYW5zbGF0ZS50cmFuc2xhdGUoc2VydmljZS5sb2NhbGUsICdTRU5EJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZW5kQnRuTXNnID0gdHJhbnNsYXRlLnRyYW5zbGF0ZShzZXJ2aWNlLmxvY2FsZSwgJ1NFTkRfTUVTU0FHRScpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ID0gdHJhbnNsYXRlLnRyYW5zbGF0ZShzZXJ2aWNlLmxvY2FsZSwgJ1NFTEVDVCcpO1xuICAgICAgICAgICAgICAgIHRoaXMuYnRuU2NyZWVuID0gdHJhbnNsYXRlLnRyYW5zbGF0ZShzZXJ2aWNlLmxvY2FsZSwgJ1NDUkVFTlNIT1QnKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuZGF5cyA9IFtcbiAgICAgICAgICAgICAgICAgICAgJ01PTkRBWScsXG4gICAgICAgICAgICAgICAgICAgICdUVUVTREFZJyxcbiAgICAgICAgICAgICAgICAgICAgJ1dFRE5FU0RBWScsXG4gICAgICAgICAgICAgICAgICAgICdUSFVSU0RBWScsXG4gICAgICAgICAgICAgICAgICAgICdGUklEQVknLFxuICAgICAgICAgICAgICAgICAgICAnU0FUVVJEQVknLFxuICAgICAgICAgICAgICAgICAgICAnU1VOREFZJyxcbiAgICAgICAgICAgICAgICAgICAgJ01PTkRBWSdcbiAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcbiAgICB9XG5cbiAgICBuZ09uQ2hhbmdlcygpIHtcbiAgICAgICAgaWYgKHRoaXMuYWZ0ZXJQcm9jZXNzKSB7XG4gICAgICAgICAgICAvL3RoaXMuTGFzdFVzZXJJbnB1dCA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLkxhc3RCb3RBbnN3ZXIudGV4dCA9IHRoaXMuY29uZmlnLkFmdGVyUHJvY2Vzc1NjZW5hcmlvLkJvdE1lc3NhZ2VbdGhpcy5zZXJ2aWNlLmxvY2FsZV07XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmNvbmZpZy5BZnRlclByb2Nlc3NTY2VuYXJpby5Gb3JtRWxlbWVudHNbMF1bMF0ubGFiZWwgPT0gJ0pvdXIgMScpIHtcbiAgICAgICAgICAgICAgICBsZXQgZGF5MSA9IHRoaXMuZGF5c1tuZXcgRGF0ZSgpLmdldERheSgpIC0gMV07XG4gICAgICAgICAgICAgICAgbGV0IGRheTIgPSB0aGlzLmRheXNbbmV3IERhdGUoKS5nZXREYXkoKV07XG4gICAgICAgICAgICAgICAgbGV0IGRheTMgPSB0aGlzLmRheXNbbmV3IERhdGUoKS5nZXREYXkoKSArIDFdO1xuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnLkFmdGVyUHJvY2Vzc1NjZW5hcmlvLkZvcm1FbGVtZW50c1swXVswXS5sYWJlbCA9IGRheTE7XG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWcuQWZ0ZXJQcm9jZXNzU2NlbmFyaW8uRm9ybUVsZW1lbnRzWzFdWzBdLmxhYmVsID0gZGF5MjtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZy5BZnRlclByb2Nlc3NTY2VuYXJpby5Gb3JtRWxlbWVudHNbMl1bMF0ubGFiZWwgPSBkYXkzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblxuICAgICAgICB0aGlzLmNoYW5nZWQgPSBmYWxzZTtcblxuICAgICAgICBpZiAodGhpcy5MYXN0Qm90QW5zd2VyICYmIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0JykgJiYgdGhpcy5MYXN0Qm90QW5zd2VyPy50ZXh0ICYmICF0aGlzLkxhc3RCb3RBbnN3ZXI/LnRleHQ/LmluY2x1ZGVzKCdsb2FkaW5nLWRvdHMnKSkge1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHQnKS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLkxhc3RCb3RBbnN3ZXIgJiYgdGhpcy5MYXN0Qm90QW5zd2VyLnRleHQgJiYgdGhpcy5MYXN0Qm90QW5zd2VyPy50ZXh0Py5pbmNsdWRlcygnPG51bWJlcj4nKSAmJiB0aGlzLkxhc3RCb3RBbnN3ZXI/LnRleHQ/LmluY2x1ZGVzKCc8L251bWJlcj4nKSkge1xuICAgICAgICAgICAgdGhpcy51c2VySW5wdXQgPSAnMSc7XG4gICAgICAgICAgICB0aGlzLmlucHV0VHlwZSA9ICdudW1iZXInO1xuICAgICAgICAgICAgdGhpcy5pbnB1dExpbWl0ID0gOTk5O1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGxhY2VIb2xkZXIgPSB0aGlzLk51bWJlclBsYWNlSG9sZGVyW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuTnVtYmVyUGxhY2VIb2xkZXIubGVuZ3RoKV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQbGFjZUhvbGRlciA9IHRoaXMuUGxhY2VIb2xkZXJbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5QbGFjZUhvbGRlci5sZW5ndGgpXTtcbiAgICAgICAgICAgIHRoaXMuaW5wdXRUeXBlID0gZGVmYXVsdElucHV0VHlwZTtcbiAgICAgICAgICAgIHRoaXMuaW5wdXRMaW1pdCA9IGRlZmF1bHRJbnB1dExpbWl0O1xuICAgICAgICB9XG5cblxuICAgICAgICAvKiAgIGlmICghdGhpcy5hbmltX2RvbmUpIHtcbiAgICAgICAgICAgICAgIGxldCB0MiA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5MYXN0Qm90QW5zd2VyICAmJiAhdGhpcy5MYXN0Qm90QW5zd2VyPy50ZXh0ICYmICF0aGlzLkxhc3RCb3RBbnN3ZXI/LnRleHQ/LmluY2x1ZGVzKCdsb2FkaW5nLWRvdHMnKSAmJiB0aGlzLmFuaW1fZG9uZSkge1xuICAgICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHQyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RyaW5nID0gdGhpcy5MYXN0Qm90QW5zd2VyPy50ZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAuc3BsaXQoJzxici8+Jykuam9pbihgIGApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAuc3BsaXQoJyZlYWN1dGU7Jykuam9pbignw6knKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNwbGl0KCcmZWdyYXZlOycpLmpvaW4oJ8OoJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC88W14+XSo+Py9nbSwgJycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAuc3BsaXQoJyZuYnNwOycpLmpvaW4oJycpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgIHRoaXMubXNnQXJyYXkgPSBzdHJpbmcuc3BsaXQoJycpO1xuICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5tZXNzYWdlQ3VycmVudCAhPT0gc3RyaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5ld01lc3NhZ2UgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlQ3VycmVudCA9IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGF1bmNoTG9vcCgpO1xuICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgIC8vdGhpcy5sb29wZXIoYXJyYXksIHRpbWVyKTtcbiAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuTGFzdEJvdEFuc3dlciAmJiB0aGlzLkxhc3RCb3RBbnN3ZXIudGV4dCkge1xuICAgICAgICAgICAgICAgY29uc3Qgc3RyaW5nID0gdGhpcy5MYXN0Qm90QW5zd2VyPy50ZXh0XG4gICAgICAgICAgICAgICAgICAgLnNwbGl0KCc8YnIvPicpLmpvaW4oYCBgKVxuICAgICAgICAgICAgICAgICAgIC5zcGxpdCgnJmVhY3V0ZTsnKS5qb2luKCfDqScpXG4gICAgICAgICAgICAgICAgICAgLnNwbGl0KCcmZWdyYXZlOycpLmpvaW4oJ8OoJylcbiAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvPFtePl0qPj8vZ20sICcnKVxuICAgICAgICAgICAgICAgICAgIC5zcGxpdCgnJm5ic3A7Jykuam9pbignJyk7XG5cbiAgICAgICAgICAgICAgIHRoaXMubXNnQXJyYXkgPSBzdHJpbmcuc3BsaXQoJycpO1xuICAgICAgICAgICAgICAgaWYgKHRoaXMubWVzc2FnZUN1cnJlbnQgIT09IHN0cmluZyAmJiBzdHJpbmcgIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgdGhpcy5uZXdNZXNzYWdlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2VDdXJyZW50ID0gc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgIHRoaXMubGF1bmNoTG9vcCgpO1xuICAgICAgICAgICAgICAgfVxuICAgICAgICAgICB9Ki9cblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlZCA9IHRydWU7XG4gICAgICAgIH0sIDEwMCk7XG4gICAgfVxuXG4gICAgYmluZENhbGVuZGFyKCRldmVudDogYW55KSB7XG4gICAgICAgIC8vY29uc29sZS5sb2coJ2JpbmRDYWxlbmRhciAkZXZlbnQnLCAkZXZlbnQpXG4gICAgICAgIGRlbGV0ZSAkZXZlbnQuYWxsO1xuICAgICAgICB0aGlzLmNhbGVuZGFyQXZhaWxhYmlsaXR5ID0gJGV2ZW50O1xuICAgIH1cblxuICAgIGdldENhbGVuZGFyKCkge1xuICAgICAgICB0aGlzLnNlbmRDYWxlbmRhci5lbWl0KHRoaXMuY2FsZW5kYXJBdmFpbGFiaWxpdHkpO1xuICAgIH1cblxuICAgIHNraXAoKSB7XG4gICAgICAgIHRoaXMuc2VuZENhbGVuZGFyLmVtaXQobnVsbCk7XG4gICAgfVxuXG4gICAgbGF1bmNoTG9vcCgpIHtcbiAgICAgICAgdGhpcy50aW1lciA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLm1zZ0FycmF5Lmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLm5ld01lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHQnKSkge1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dCcpLmlubmVySFRNTCA9ICcnO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMubmV3TWVzc2FnZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIC8vdGhpcy5tc2dBcnJheSA9IHRoaXMubWVzc2FnZUN1cnJlbnQuc3BsaXQoXCJcIik7XG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVyKTtcbiAgICAgICAgICAgICAgICB0aGlzLmxhdW5jaExvb3AoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMubG9vcGVyKCk7XG4gICAgICAgIH0sIDYwKTtcbiAgICB9XG5cbiAgICBsb29wZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLm1zZ0FycmF5Lmxlbmd0aCA+IDAgJiYgIXRoaXMucmVsb2FkZWQpIHtcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dCcpKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHQnKS5pbm5lckhUTUwgKz0gdGhpcy5tc2dBcnJheS5zaGlmdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaW5wdXRUeXBlID0gZGVmYXVsdElucHV0VHlwZTtcbiAgICAgICAgdGhpcy5pbnB1dExpbWl0ID0gZGVmYXVsdElucHV0TGltaXQ7XG4gICAgICAgIGlmICh0aGlzLlBsYWNlSG9sZGVyKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQbGFjZUhvbGRlciA9IHRoaXMuUGxhY2VIb2xkZXJbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5QbGFjZUhvbGRlci5sZW5ndGgpXTtcbiAgICAgICAgICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRQbGFjZUhvbGRlciA9IHRoaXMuUGxhY2VIb2xkZXJbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5QbGFjZUhvbGRlci5sZW5ndGgpXTtcbiAgICAgICAgICAgIH0sIDMwMDApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXNlcldyaXRpbmcoa2V5OiBhbnkpIHtcbiAgICAgICAgaWYgKGtleS5jb2RlID09PSAnRW50ZXInKSB7XG4gICAgICAgICAgICB0aGlzLmJvdExpc3RlbmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5ib3RMaXN0ZW5pbmdUaW1lciA9IDA7XG4gICAgICAgIH0gZWxzZSBpZiAoa2V5LmNvZGUgPT09ICdCYWNrc3BhY2UnKSB7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYm90TGlzdGVuaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmICh0aGlzLmJvdExpc3RlbmluZ1RpbWVyID09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJvdExpc3RlbmluZ1RpbWVyICs9IDI7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuYm90TGlzdGVuaW5nVGltZXIgPCA1KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ib3RMaXN0ZW5pbmdUaW1lciArPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGVtaXQoJGV2ZW50KSB7XG4gICAgICAgIHRoaXMuZmlyc3RWaXNpdCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJlYWR5U2VuZC5lbWl0KHRydWUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBfc2VuZCgpIHtcbiAgICAgICAgaWYgKHRoaXMuTGFzdEJvdEFuc3dlcj8uZW5kT2ZUb3BpYyAmJiB0aGlzLkxhc3RVc2VySW5wdXQpIHtcbiAgICAgICAgICAgIHRoaXMuTGFzdFVzZXJJbnB1dC5tZXNzYWdlID0gJyc7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmJvdExpc3RlbmluZyA9IGZhbHNlO1xuICAgICAgICBjb25zdCB1c2VyRGF0YTogVXNlcklucHV0ID0ge1xuICAgICAgICAgICAgbWVzc2FnZTogdGhpcy51c2VySW5wdXQsXG4gICAgICAgICAgICBkYXRlOiBuZXcgRGF0ZSgpLnRvTG9jYWxlVGltZVN0cmluZyhuYXZpZ2F0b3IubGFuZ3VhZ2UsIHtcbiAgICAgICAgICAgICAgICBob3VyOiAnMi1kaWdpdCcsXG4gICAgICAgICAgICAgICAgbWludXRlOiAnMi1kaWdpdCdcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuc2VuZC5lbWl0KHVzZXJEYXRhKTtcbiAgICAgICAgdGhpcy51c2VySW5wdXQgPSBudWxsO1xuICAgIH1cblxuICAgIGFzeW5jIHNjcm9sbChzY3JvbGxIZWlnaHQ6IG51bWJlcikge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8bnVtYmVyPigocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgwKTtcbiAgICAgICAgICAgIH0sIDMwMCk7XG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgYnlQYXNzVXNlcklucHV0KGJvdGRhdGE6IHN0cmluZywgaT86IG51bWJlcikge1xuICAgICAgICB0aGlzLnNlbmRCb3RDb21tYW5kLmVtaXQoYm90ZGF0YSk7XG4gICAgfVxufVxuIiwiPCEtLTxkaXYgY2xhc3M9XCJib3QtY29udGFpbmVyXCIgIFtjbGFzc109XCJJc01vYmlsZSA/ICdib3QtbW9iaWxlJyA6ICcnXCIgW3N0eWxlXT1cInsnYmFja2dyb3VuZC1jb2xvcicgOiAnIzEwMDY1MiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7J31cIi0tPlxuXG4gIDwhLS08Y2FudmFzIGNsYXNzPVwib3JiLWNhbnZhc1wiPjwvY2FudmFzPlxuICA8ZGl2IGNsYXNzPVwib3ZlcmxheVwiPlxuICAgIDxkaXYgY2xhc3M9XCJvdmVybGF5X19pbm5lclwiPlxuICAgIDwvZGl2PlxuICA8L2Rpdj4tLT5cbiAgPGRpdiBjbGFzcz1cImJvdC1jb250YWluZXJcIiAgW2NsYXNzXT1cIklzTW9iaWxlID8gJ2JvdC1tb2JpbGUnIDogJydcIiBbc3R5bGVdPVwieydiYWNrZ3JvdW5kLWNvbG9yJyA6ICcjMTAwNjUyIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDsnfVwiXG4gICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS9odG1sXCI+XG4gIDxkaXYgY2xhc3M9XCJib3Qtdmlld1wiPlxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJmaXJzdFZpc2l0ICYmIGZpcnN0VXNhZ2VTdG9yeVwiPlxuICAgICAgPGJvdC1maXJzdC12aXNpdCBbZmlyc3RVc2FnZVN0b3J5XT1cImZpcnN0VXNhZ2VTdG9yeVwiIFthc3NldHNdPVwiYXNzZXRzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgKHJlYWR5KT1cImVtaXQoJGV2ZW50KVwiPjwvYm90LWZpcnN0LXZpc2l0PlxuICAgIDwvbmctY29udGFpbmVyPlxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhZmlyc3RWaXNpdCB8fCAhZmlyc3RVc2FnZVN0b3J5XCI+XG4gICAgICA8YnV0dG9uIChjbGljayk9XCJieVBhc3NVc2VySW5wdXQoJ2V4aXQnLCAwKVwiIGlkPVwiZXhpdC1idG5cIiBzdHlsZT1cImRpc3BsYXk6IG5vbmU7XCI+PC9idXR0b24+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJib3QtYXNzaXN0YW50LXdyYXBwZXJcIiAqbmdJZj1cIkFzc2lzdGFudE1vZGVcIj5cbiAgICAgICAgPCEtLSBUT0RPIGRvIHdlIG5lZWQgaWQsIHJlbW92ZSBpdD8gLS0+XG4gICAgICAgIDwhLS08ZGl2ICpuZ0lmPVwiIWJvdExpc3RlbmluZ1wiIGNsYXNzPVwiYm90LWxvZ29cIiBpZD1cImJvdGxvZ29cIj5cbiAgICAgICAgICA8aW1nIFtzcmNdPVwiYXNzZXRzLkZ1bGxTaXplTG9nb1wiPlxuICAgICAgICA8L2Rpdj4tLT5cbiAgICAgICAgPCEtLTxkaXYgW25nU3R5bGVdPVwieydoZWlnaHQnOiAnNDAlJ31cIiBjbGFzcz1cImJvdC1sb2dvIGJvdC1saXN0ZW5pbmdcIj5cbiAgICAgICAgICA8ZGl2IFtuZ1N0eWxlXT1cInsndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZVkoLTEwdmgpJ31cIiBjbGFzcz1cIm0tY2FybC1ub3RpZmljYXRpb25cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtLWNhcmwtbm90aWZpY2F0aW9uLWN1ZSBtLWN1ZVwiPlxuICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiYm90TGlzdGVuaW5nXCIgY2xhc3M9XCJhLWN1ZS12b2ljZVwiIGlkPVwiYm90XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImEtY3VlLXZvaWNlLWVsIHZvaWNlMVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhLWN1ZS12b2ljZS1lbCB2b2ljZTJcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYS1jdWUtdm9pY2UtZWwgdm9pY2UzXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImEtY3VlLXZvaWNlLWVsIHZvaWNlNFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhLWN1ZS12b2ljZS1lbFwiPjwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImEtY3VlLWljb25cIiBpZD1cImJvdC1pY29uXCI+PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+LS0+XG5cbiAgICAgICAgPGRpdiBbQEZhZGVTbGlkZUluT3V0S29udmVyc29PcGFjaXR5T3V0XT1cImFuaW1hdGlvbnMuRmFkZVNsaWRlSW5PdXQoYW5pbWF0aW9uVFRYLCBhbmltYXRpb25TbGlkZVZhbHVlKVwiIFtuZ1N0eWxlXT1cInsnaGVpZ2h0JzogJzQwJSd9XCIgY2xhc3M9XCJib3RcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlMVwiPjwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGUyXCI+PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZTNcIj48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiAgY2xhc3M9XCJib3QtZGlzY3Vzc2lvbi13cmFwcGVyXCIgc3R5bGU9XCJtaW4taGVpZ2h0OiA2MCU7IG1heC1oZWlnaHQ6IDYwJTsgaGVpZ2h0OiA2MCU7IC8qbWF4LWhlaWdodDogMTIwcHg7Ki9cIj5cbiAgICAgICAgICA8IS0tIFVTRVIgSU5QVVQgLS0+XG4gICAgICAgICAgPGRpdiBbY2xhc3MudXNlci1pbnB1dC1jb250YWluZXItb3V0ZXItaGlkZGVuXT1cIiFzaG93VXNlckludml0YXRpb25cIiBjbGFzcz1cIm92ZXJmbG93LWhpZGRlbiBkLWZsZXggZmxleC1jb2x1bW4gdy0xMDAgcG9zaXRpb24tcmVsYXRpdmUgdXNlci1pbnB1dC1jb250YWluZXItb3V0ZXJcIj5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIoTGFzdFVzZXJJbnB1dCAmJiAhYWZ0ZXJQcm9jZXNzKSB8fCAhc2hvd1VzZXJJbnZpdGF0aW9uXCI+XG4gICAgICAgICAgICAgIDxkaXYgW0BGYWRlU2xpZGVJbk91dEtvbnZlcnNvSGVpZ2h0VGVzdF09XCJhbmltYXRpb25zLkZhZGVTbGlkZUluT3V0KGFuaW1hdGlvbkhlaWdodFRUWCoxLjUsIGFuaW1hdGlvblNsaWRlVmFsdWUpXCIgY2xhc3M9XCJvdmVyZmxvdy1oaWRkZW4gZC1mbGV4IGZsZXgtY29sdW1uIHctMTAwIHVzZXItaW5wdXQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBbQEZhZGVTbGlkZUluT3V0S29udmVyc29UcmFuc2xhdGVPdXRUZXN0XT1cImFuaW1hdGlvbnMuRmFkZVNsaWRlSW5PdXQoYW5pbWF0aW9uVFRYKjEuNSwgYW5pbWF0aW9uU2xpZGVWYWx1ZSlcIiBbY2xhc3MudXNlci1pbnB1dC10b3BdPVwiTGFzdFVzZXJJbnB1dD8ubWVzc2FnZSAhPSAnJ1wiICBjbGFzcz1cInVzZXItaW5wdXRcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYXRhXCIgW3N0eWxlXT1cIntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3IgOiBhc3NldHM/LkNvbG9yU2V0Py5TZWNvbmRhcnlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cIiBbaW5uZXJIVE1MXT1cIkxhc3RVc2VySW5wdXQubWVzc2FnZVwiPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRpbWVcIj57e0xhc3RVc2VySW5wdXQuZGF0ZX19PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPCEtLSBCT1QgQU5TV0VSIC0tPlxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJMYXN0Qm90QW5zd2VyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9zaXRpb24tcmVsYXRpdmUgYm90LWFuc3dlclwiPlxuICAgICAgICAgICAgICA8ZGl2IFtjbGFzcy5tdC00XT1cIiFzaG93VXNlckludml0YXRpb25cIiBjbGFzcz1cImQtZmxleCBmbGV4LWNvbHVtbiB3LTEwMCBwb3NpdGlvbi1yZWxhdGl2ZSBib3QtYW5zd2VyX190ZXh0XCI+XG5cbiAgICAgICAgICAgICAgICA8IS0tIEJPVCBBTlNXRVIgVEVYVCAtLT5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiTGFzdEJvdEFuc3dlci50ZXh0XCI+XG4gICAgICAgICAgICAgICAgICA8IS0tPHNwYW4gKm5nSWY9XCIhTGFzdEJvdEFuc3dlci50ZXh0LmluY2x1ZGVzKCdsb2FkaW5nLWRvdHMnKVwiIGlkPVwidGV4dFwiPjwvc3Bhbj48YnI+LS0+XG4gICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cImNoYW5nZWQgJiYgTGFzdEJvdEFuc3dlci50ZXh0LmluY2x1ZGVzKCdsb2FkaW5nLWRvdHMnKVwiIGNsYXNzPVwiZmFkZVwiIFtpbm5lckhUTUxdPVwiTGFzdEJvdEFuc3dlci50ZXh0IHwgc2FmZUh0bWxcIj48L3NwYW4+PGJyPlxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIUxhc3RCb3RBbnN3ZXI/LnRleHQ/LmluY2x1ZGVzKCdsb2FkaW5nLWRvdHMnKSAmJiBjaGFuZ2VkICYmIHNob3dUZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIFtARmFkZVNsaWRlSW5PdXRLb252ZXJzb1RyYW5zbGF0ZU91dF09XCJhbmltYXRpb25zLkZhZGVTbGlkZUluT3V0KGFuaW1hdGlvblRUWCwgLTEwMClcIiBjbGFzcz1cInctMTAwIGp1c3RpZnktY29udGVudC1jZW50ZXJcIiBbaW5uZXJIVE1MXT1cIkxhc3RCb3RBbnN3ZXIudGV4dCB8IHNhZmVIdG1sXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWFmdGVyUHJvY2Vzc1wiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBpZD1cImxvYWRpbmctY3JlYXRpb25cIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIkxhc3RCb3RBbnN3ZXIubWVkaWFzICYmIExhc3RCb3RBbnN3ZXIubWVkaWFzLmxlbmd0aFxuICAgICAgICAgICAgICAgICYmIExhc3RCb3RBbnN3ZXIubWVkaWFzWzBdLnJlcXVpcmVkX2FjdGlvbnNcbiAgICAgICAgICAgICAgICAmJiBMYXN0Qm90QW5zd2VyLm1lZGlhc1swXS5yZXF1aXJlZF9hY3Rpb25zLmxlbmd0aCA+IDBcbiAgICAgICAgICAgICAgICAmJiAhTGFzdEJvdEFuc3dlcj8udGV4dD8uaW5jbHVkZXMoJ2xvYWRpbmctZG90cycpXCI+XG4gICAgICAgICAgICAgICAgPCEtLSBCT1QgQU5TV0VSIEJVVFRPTlMgLS0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm10MzUgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgdy0xMDAgcG9zaXRpb24tcmVsYXRpdmUgYm90LWFuc3dlcl9fYnV0dG9uc1wiPlxuICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgc3VnZ2VzdCBvZiBMYXN0Qm90QW5zd2VyLm1lZGlhc1swXS5yZXF1aXJlZF9hY3Rpb25zOyBsZXQgaSA9IGluZGV4XCI+XG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJzdWdnZXN0LmZvcm1hdCA9PT0gJ2J1dHRvbidcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgW0BGYWRlU2xpZGVJbk91dEtvbnZlcnNvVHJhbnNsYXRlT3V0XT1cImFuaW1hdGlvbnMuRmFkZVNsaWRlSW5PdXQoYW5pbWF0aW9uVFRYLCAtMTAwKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwic3VnZ2VzdC52YWx1ZT8udGl0bGUgPT0gJ1Rlcm1pbmVyJyAmJiBjaGFuZ2VkIHx8IHN1Z2dlc3QudmFsdWU/LnRpdGxlID09ICdRdWl0JyAmJiBjaGFuZ2VkXCIgW3N0eWxlXT1cIntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvciA6IGFzc2V0cz8uQ29sb3JTZXQ/LlByaW1hcnksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3IgOiBhc3NldHM/LkNvbG9yU2V0Py5QcmltYXJ5XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJvdC1idXR0b24gYm90LWJ1dHRvbi1sZWZ0IHNob3ctYnRuXCIgKGNsaWNrKT1cImJ5UGFzc1VzZXJJbnB1dChzdWdnZXN0Py52YWx1ZT8ub25DbGljaywgaSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBbaW5uZXJIVE1MXT1cInN1Z2dlc3QubGFiZWx8fCBzdWdnZXN0LnZhbHVlPy5kaXNwbGF5ZWRNZXNzYWdlIHx8IHN1Z2dlc3QudmFsdWU/LnRpdGxlIFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtARmFkZVNsaWRlSW5PdXRLb252ZXJzb1RyYW5zbGF0ZU91dF09XCJhbmltYXRpb25zLkZhZGVTbGlkZUluT3V0KGFuaW1hdGlvblRUWCwgLTEwMClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cInN1Z2dlc3QudmFsdWU/LnRpdGxlID09ICdOb3V2ZWxsZSBEZW1hbmRlJyAmJiBjaGFuZ2VkIHx8IHN1Z2dlc3QudmFsdWU/LnRpdGxlID09ICdOZXcgUmVxdWVzdCcgJiYgY2hhbmdlZFwiIFtzdHlsZV09XCJ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3IgOiBhc3NldHM/LkNvbG9yU2V0Py5QcmltYXJ5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yIDogYXNzZXRzPy5Db2xvclNldD8uUHJpbWFyeVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJib3QtYnV0dG9uIGJvdC1idXR0b24tcmlnaHQgc2hvdy1idG5cIiAoY2xpY2spPVwiYnlQYXNzVXNlcklucHV0KHN1Z2dlc3Q/LnZhbHVlPy5vbkNsaWNrLCBpKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtpbm5lckhUTUxdPVwic3VnZ2VzdC5sYWJlbHx8IHN1Z2dlc3QudmFsdWU/LmRpc3BsYXllZE1lc3NhZ2UgfHwgc3VnZ2VzdC52YWx1ZT8udGl0bGUgXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgW0BGYWRlU2xpZGVJbk91dEtvbnZlcnNvVHJhbnNsYXRlT3V0XT1cImFuaW1hdGlvbnMuRmFkZVNsaWRlSW5PdXQoYW5pbWF0aW9uVFRYLCAtMTAwKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwic3VnZ2VzdC52YWx1ZT8udGl0bGUgJiYgc3VnZ2VzdC52YWx1ZT8udGl0bGUgIT0gJ1Rlcm1pbmVyJyAmJiBzdWdnZXN0LnZhbHVlPy50aXRsZSAhPSAnUXVpdCcgJiYgc3VnZ2VzdC52YWx1ZT8udGl0bGUgIT0gJ05vdXZlbGxlIERlbWFuZGUnICYmIHN1Z2dlc3QudmFsdWU/LnRpdGxlICE9ICdOZXcgUmVxdWVzdCcgJiYgY2hhbmdlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW3N0eWxlXT1cIntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvciA6IGFzc2V0cz8uQ29sb3JTZXQ/LlByaW1hcnksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3IgOiBhc3NldHM/LkNvbG9yU2V0Py5QcmltYXJ5XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJvdC1idXR0b24gYm90LWJ1dHRvbi1ncmV5IHNob3ctYnRuXCIgKGNsaWNrKT1cImJ5UGFzc1VzZXJJbnB1dChzdWdnZXN0Py52YWx1ZT8ub25DbGljaywgaSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBbaW5uZXJIVE1MXT1cInN1Z2dlc3QubGFiZWx8fCBzdWdnZXN0LnZhbHVlPy5kaXNwbGF5ZWRNZXNzYWdlIHx8IHN1Z2dlc3QudmFsdWU/LnRpdGxlIFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImRpc2FibGVVc2VySW5wdXRcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3NpdGlvbi1yZWxhdGl2ZSBib3QtYW5zd2VyX19kaXNhYmxlLWlucHV0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgW0BGYWRlU2xpZGVJbk91dEtvbnZlcnNvVHJhbnNsYXRlT3V0XT1cImFuaW1hdGlvbnMuRmFkZVNsaWRlSW5PdXQoYW5pbWF0aW9uVFRYLCAtMTAwKVwiIGNsYXNzPVwiYm90LWlucHV0LWRpc2FibGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aT57eyBzZWxlY3QgfX08L2k+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICA8IS0tIEJPVCBBTlNXRVIgQlVUVE9OUyAtLT5cblxuICAgICAgICAgICAgICA8IS0tPG5nLWNvbnRhaW5lciAqbmdJZj1cImFmdGVyUHJvY2VzcyAmJiBjb25maWcuQWZ0ZXJQcm9jZXNzU2NlbmFyaW8uRm9ybUVsZW1lbnRzLmxlbmd0aCA+IDBcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWZ0ZXItcHJvY2Vzcy1mb3JtXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWZ0ZXItcHJvY2Vzcy1zdWJmb3JtXCIgKm5nRm9yPVwibGV0IGZvcm1FbGVtZW50cyBvZiBjb25maWcuQWZ0ZXJQcm9jZXNzU2NlbmFyaW8uRm9ybUVsZW1lbnRzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGZvcm0gb2YgZm9ybUVsZW1lbnRzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciBbbmdTd2l0Y2hdPVwiZm9ybS50eXBlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ1N3aXRjaENhc2U9XCInY2hlY2tib3gnXCIgW25nU3R5bGVdPVwieydkaXNwbGF5JzogZm9ybT8uZGlzcGxheSA/IGZvcm0uZGlzcGxheTogJ2Jsb2NrJ31cIiBjbGFzcz1cImJvdC1jaGVja2JveFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgW2NoZWNrZWRdPVwiZm9ybT8uY2hlY2tlZCA9PSB0cnVlID8gJ3RydWUnOiAnZmFsc2UnXCIgW2lkXT1cImZvcm0/LmlkXCIgW25hbWVdPVwiZm9ybT8uaWRcIiBbdHlwZV09J2Zvcm0/LnR5cGUnIHZhbHVlPVwiZmFsc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIFtmb3JdPVwiZm9ybT8uaWRcIiBjbGFzcz1cImJvdC1jaGVja2JveC1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHRyYW5zbGF0ZS50cmFuc2xhdGUoc2VydmljZS5sb2NhbGUsIGZvcm0ubGFiZWwpIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFtjbGFzc109XCJmb3JtPy5jbGFzc1wiIFtpZF09XCJmb3JtPy5pZFwiIFtuZ1N0eWxlXT1cInsnZGlzcGxheSc6IGZvcm0/LmRpc3BsYXkgPyBmb3JtLmRpc3BsYXk6ICdibG9jayd9XCIgKm5nU3dpdGNoQ2FzZT1cIid0ZXh0J1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBbcGF0dGVybl09XCJmb3JtPy5wYXR0ZXJuXCIgW3BsYWNlaG9sZGVyXT1cImZvcm0/LnBsYWNlaG9sZGVyXCIgW3R5cGVdPVwiZm9ybT8udHlwZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbdmFsdWVdPVwiZm9ybT8udmFsdWVcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBbY2xhc3NdPVwiZm9ybT8uY2xhc3NcIiAqbmdTd2l0Y2hDYXNlPVwiJ2RpdidcIiBbbmdTdHlsZV09XCJ7J2Rpc3BsYXknOiBmb3JtPy5kaXNwbGF5ID8gZm9ybS5kaXNwbGF5OiAnYmxvY2snfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7eyB0cmFuc2xhdGUudHJhbnNsYXRlKHNlcnZpY2UubG9jYWxlLCBmb3JtPy5jb250ZW50KSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBbY2xhc3NdPVwiZm9ybT8uY2xhc3NcIiBbaWRdPVwiZm9ybT8uaWRcIiAqbmdTd2l0Y2hDYXNlPVwiJ3RleHRhcmVhJ1wiIFtuZ1N0eWxlXT1cInsnZGlzcGxheSc6IGZvcm0/LmRpc3BsYXkgPyBmb3JtLmRpc3BsYXk6ICdibG9jayd9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtwbGFjZWhvbGRlcl09XCJ0cmFuc2xhdGUudHJhbnNsYXRlKHNlcnZpY2UubG9jYWxlLCBmb3JtPy5wbGFjZWhvbGRlcilcIj48L3RleHRhcmVhPlxuICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj4tLT5cblxuICAgICAgICAgICAgICA8Y3VzdG9tLWNoZWNrYm94LWNhbGVuZGFyXG4gICAgICAgICAgICAgICAgW0BGYWRlU2xpZGVJbk91dEtvbnZlcnNvSGVpZ2h0VGVzdF09XCJhbmltYXRpb25zLkZhZGVTbGlkZUluT3V0KGFuaW1hdGlvblRUWCwgYW5pbWF0aW9uU2xpZGVWYWx1ZSlcIlxuICAgICAgICAgICAgICAgICpuZ0lmPVwiYWZ0ZXJQcm9jZXNzXCJcbiAgICAgICAgICAgICAgICBbc3RhdGVdPVwiYWZ0ZXJQcm9jZXNzXCJcbiAgICAgICAgICAgICAgICAoY2FsZW5kYXJDaGFuZ2UpPVwiYmluZENhbGVuZGFyKCRldmVudClcIlxuICAgICAgICAgICAgICAgIFtjYWxlbmRhclRlbXBsYXRlXT1cImNhbGVuZGFyVGVtcGxhdGVcIlxuICAgICAgICAgICAgICAgIFtjb2x1bW5PdmVycmlkZV09XCJjYWxlbmRhcktleU92ZXJyaWRlXCI+XG4gICAgICAgICAgICAgIDwvY3VzdG9tLWNoZWNrYm94LWNhbGVuZGFyPlxuXG4gICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpbnB1dFR5cGUgPT09ICdudW1iZXInXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBbQEZhZGVTbGlkZUluT3V0S29udmVyc29PcGFjaXR5T3V0XT1cImFuaW1hdGlvbnMuRmFkZVNsaWRlSW5PdXQoYW5pbWF0aW9uVFRYLCBhbmltYXRpb25TbGlkZVZhbHVlKVwiIGNsYXNzPVwiYm90LWlucHV0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTxpbnB1dCBbdHlwZV09XCJpbnB1dFR5cGVcIiBbKG5nTW9kZWwpXT1cInVzZXJJbnB1dFwiIChrZXl1cC5lbnRlcik9XCJ1c2VySW5wdXQgJiYgX3NlbmQoKVwiIChrZXl1cCk9XCJ1c2VyV3JpdGluZygkZXZlbnQpXCIgbWluPVwiMlwiIFttYXhdPVwiaW5wdXRMaW1pdFwiXG4gICAgICAgICAgICAgICAgICAgICAgIFtwbGFjZWhvbGRlcl09XCJjdXJyZW50UGxhY2VIb2xkZXJcIj4tLT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1udW1iZXItZGl2XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1udW1iZXItZGl2LWFycm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwiY2hhbmdlTnVtYmVyKDEpXCIgY2xhc3M9XCJhcnJvdy11cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG5iLWljb24gW2ljb25dPVwiJ3VwXzInXCIgW3NpemVdPVwiMS41XCI+PC9uYi1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwiY2hhbmdlTnVtYmVyKC0xKVwiIGNsYXNzPVwiYXJyb3ctZG93blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG5iLWljb24gW2ljb25dPVwiJ2Rvd25fMidcIiBbc2l6ZV09XCIxLjVcIj48L25iLWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBbKG5nTW9kZWwpXT1cImltcGFjdFwiIChrZXl1cCk9XCJjaGFuZ2VOdW1iZXJJbnB1dChpbXBhY3QpXCIgY2xhc3M9XCJuYi1pbXBhY3QtaW5wdXRcIiBcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiIG1pbj1cIjFcIlxuICAgICAgICAgICAgICAgICAgICBvbmlucHV0PVwidmFsaWRpdHkudmFsaWR8fCh2YWx1ZT0nMScpO1wiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm90LWNvbnRhaW5lci1idG5cIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJvdC1idXR0b24gc2VuZC1idG4gaW5wdXQtbnVtYmVyLWJ0biBzaG93VXNlcklucHV0Q29udHJvbHNcIiBbc3R5bGVdPVwie1xuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvciA6IGFzc2V0cz8uQ29sb3JTZXQ/LlByaW1hcnksXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3IgOiBhc3NldHM/LkNvbG9yU2V0Py5TZWNvbmRhcnlcbiAgICAgICAgICAgICAgICAgIH1cIiAoY2xpY2spPVwiX3NlbmQoKTtzaG93VXNlcklucHV0Q29udHJvbHM9ZmFsc2U7c2hvd1VzZXJJbnZpdGF0aW9uPSFzaG93VXNlckludml0YXRpb247XCIgXG4gICAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiIXVzZXJJbnB1dCB8fCBpbnB1dFR5cGUgPT09ICdudW1iZXInICYmIGltcGFjdCA8IDFcIj5cblxuICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpbnB1dFR5cGUgPT09ICdudW1iZXInXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7eyBzZW5kQnRuIH19XG4gICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9zaXRpb24tcmVsYXRpdmUgYm90LWlucHV0LXdyYXBwZXJcIj5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJhZnRlclByb2Nlc3MgJiYgY29uZmlnLkFmdGVyUHJvY2Vzc1NjZW5hcmlvLkZvcm1CdXR0b25zLmxlbmd0aCA+IDBcIj5cbiAgICAgICAgICAgICAgPCEtLTxidXR0b24gW2NsYXNzXT1cImJ0bi5jbGFzc1wiICpuZ0Zvcj1cImxldCBidG4gb2YgY29uZmlnLkFmdGVyUHJvY2Vzc1NjZW5hcmlvLkZvcm1CdXR0b25zXCIgW25nU3R5bGVdPVwieydkaXNwbGF5JzogYnRuPy5kaXNwbGF5ID8gYnRuLmRpc3BsYXk6ICdibG9jayd9XCI+XG4gICAgICAgICAgICAgICAge3sgdHJhbnNsYXRlLnRyYW5zbGF0ZShzZXJ2aWNlLmxvY2FsZSwgYnRuLmxhYmVsKSB9fVxuICAgICAgICAgICAgICA8L2J1dHRvbj4tLT5cbiAgICAgICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwiZ2V0Q2FsZW5kYXIoKVwiIGNsYXNzPVwicHJpbWFyeSByb3VuZGVkIHZhbGlkYXRlLWFmdGVyLWJ0blwiIHN0eWxlPVwiZGlzcGxheTogaW5saW5lLWJsb2NrO1wiPlxuICAgICAgICAgICAgICAgIHt7IHRyYW5zbGF0ZS50cmFuc2xhdGUoc2VydmljZS5sb2NhbGUsICdWQUxJREFURV9BVkFJTEFCSUxJVFknKSB9fVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwicm91bmRlZCBzZWNvbmRhcnkgc2tpcC1hZnRlci1idG5cIiBzdHlsZT1cImRpc3BsYXk6IGlubGluZS1ibG9jaztcIiAoY2xpY2spPVwic2tpcCgpXCI+XG4gICAgICAgICAgICAgICAge3sgdHJhbnNsYXRlLnRyYW5zbGF0ZShzZXJ2aWNlLmxvY2FsZSwgJ1NLSVAnKSB9fVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWFmdGVyUHJvY2VzcyAmJiBzaG93VXNlcklucHV0Q29udHJvbHMgJiYgaW5wdXRUeXBlICE9PSAnbnVtYmVyJ1wiPlxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWRpc2FibGVVc2VySW5wdXQgJiYgc2hvd0lucHV0XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBmbGV4LWNvbHVtbiB3LTEwMCBwb3NpdGlvbi1yZWFsdGl2ZSBib3QtaW5wdXRcIiBpZD1cImJvdC1pbnB1dC1kaXZcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgW0BGYWRlU2xpZGVJbk91dEtvbnZlcnNvVHJhbnNsYXRlT3V0XT1cImFuaW1hdGlvbnMuRmFkZVNsaWRlSW5PdXQoYW5pbWF0aW9uVFRYLCBhbmltYXRpb25TbGlkZVZhbHVlQWRkKVwiIGNsYXNzPVwidy0xMDAgaC0xMDAgZC1mbGV4IGZsZXgtY29sdW1uIHBvc2l0aW9uLWFic29sdXRlIGJvdC1pbnB1dF9fY29udHJvbHNcIj5cblxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaW5wdXRUeXBlID09PSAndGV4dCdcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgWyhuZ01vZGVsKV09XCJ1c2VySW5wdXRcIiAoa2V5dXAuZW50ZXIpPVwidXNlcklucHV0ICYmIF9zZW5kKClcIiAoa2V5dXApPVwidXNlcldyaXRpbmcoJGV2ZW50KVwiIFttYXhsZW5ndGhdPVwiaW5wdXRMaW1pdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwiY3VycmVudFBsYWNlSG9sZGVyXCI+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImlucHV0VHlwZSAhPT0gJ251bWJlcidcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm90LWNvbnRhaW5lci1idG5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJib3QtYnV0dG9uIHNlbmQtYnRuXCIgW3N0eWxlXT1cIntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yIDogYXNzZXRzPy5Db2xvclNldD8uUHJpbWFyeSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3IgOiBhc3NldHM/LkNvbG9yU2V0Py5TZWNvbmRhcnl9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cIl9zZW5kKClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiIXVzZXJJbnB1dFwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpbnB1dFR5cGUgIT09ICdudW1iZXInXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgc2VuZEJ0bk1zZyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tPG5nLWNvbnRhaW5lciAqbmdJZj1cImlucHV0VHlwZSA9PT0gJ251bWJlcidcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBzZW5kQnRuIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPi0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gKm5nSWY9XCJpbnB1dFR5cGUgIT09ICdudW1iZXInICYmIElzTW9iaWxlXCIgY2xhc3M9XCJib3QtYnV0dG9uLXNjcmVlblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bmItaWNvbiBbaWNvbl09XCInc2Nhbl8xMSdcIiBbc2l6ZV09XCIxLjVcIj48L25iLWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGJ0blNjcmVlbiB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gKm5nSWY9XCJpbnB1dFR5cGUgIT09ICdudW1iZXInXCIgY2xhc3M9XCJib3QtYnV0dG9uLWF0dGFjaFwiIChjbGljayk9XCJvcGVuVXBsb2FkLmVtaXQodHJ1ZSlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge3sgbmJGaWxlcyB9fVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJuYkZpbGVzIDw9IDFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyB0cmFuc2xhdGUudHJhbnNsYXRlKHNlcnZpY2UubG9jYWxlLCAnQVRUQUNITUVOVCcpIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJuYkZpbGVzID4gMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHRyYW5zbGF0ZS50cmFuc2xhdGUoc2VydmljZS5sb2NhbGUsICdBVFRBQ0hNRU5UUycpIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxuYi1pY29uIFtpY29uXT1cIidhdHRhY2htZW50J1wiIFtzaXplXT1cIjEuNVwiPjwvbmItaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJib3QtY2hhdC13cmFwcGVyXCIgKm5nSWY9XCIhQXNzaXN0YW50TW9kZVwiPlxuICAgICAgICB7e0Fzc2lzdGFudE1vZGV9fVxuICAgICAgICA8ZGl2IGNsYXNzPVwiYm90LWRpc2N1c3Npb24td3JhcHBlclwiICNzY3JvbGxNZSBbc2Nyb2xsVG9wXT1cInNjcm9sbE1lLnNjcm9sbFRvKDAsIDk5OTk5OTkpXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImJvdC1jaGF0XCI+XG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBlbnRyeSBvZiBkaXNwbGF5RGF0YVwiPlxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZW50cnkuZGF0ZVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgW0BGYWRlU2xpZGVJbk91dEtvbnZlcnNvVHJhbnNsYXRlT3V0XT1cImFuaW1hdGlvbnMuRmFkZVNsaWRlSW5PdXQoYW5pbWF0aW9uVFRYLCBhbmltYXRpb25TbGlkZVZhbHVlKVwiIGNsYXNzPVwidXNlci1pbnB1dFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRhdGFcIiBbc3R5bGVdPVwie1xuICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yIDogYXNzZXRzPy5Db2xvclNldD8uUHJpbWFyeSxcbiAgICAgICAgICAgICAgICAgICAgIGNvbG9yIDogYXNzZXRzPy5Db2xvclNldD8uU2Vjb25kYXJ5XG4gICAgICAgICAgICAgICAgICAgIH1cIiBbaW5uZXJIVE1MXT1cImVudHJ5Lm1lc3NhZ2VcIj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0aW1lXCI+e3tlbnRyeS5kYXRlfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWVudHJ5LmRhdGVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm90LWFuc3dlclwiPlxuICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImVudHJ5LnRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJjaGFuZ2VkXCIgY2xhc3M9XCJcIiBbaW5uZXJIVE1MXT1cImVudHJ5LnRleHQgfCBzYWZlSHRtbFwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImVudHJ5Lm1lZGlhcyAmJiBlbnRyeS5tZWRpYXMubGVuZ3RoXG4gICAgICAgICAgICAgICAgICAgJiYgZW50cnkubWVkaWFzWzBdLnJlcXVpcmVkX2FjdGlvbnNcbiAgICAgICAgICAgICAgICAgICAmJiBlbnRyeS5tZWRpYXNbMF0ucmVxdWlyZWRfYWN0aW9ucy5sZW5ndGhcIj5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgc3VnZ2VzdCBvZiBlbnRyeS5tZWRpYXNbMF0ucmVxdWlyZWRfYWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJzdWdnZXN0LmZvcm1hdCA9PT0gJ2J1dHRvbidcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gKm5nSWY9XCJjaGFuZ2VkXCIgW3N0eWxlXT1cIntcbiAgICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yIDogYXNzZXRzPy5Db2xvclNldD8uUHJpbWFyeSxcbiAgICAgICAgICAgICAgICAgICAgIGNvbG9yIDogYXNzZXRzPy5Db2xvclNldD8uUHJpbWFyeVxuICAgICAgICAgICAgfVwiIGNsYXNzPVwiYm90LWJ1dHRvblwiIChjbGljayk9XCJieVBhc3NVc2VySW5wdXQoc3VnZ2VzdD8udmFsdWU/Lm9uQ2xpY2spXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2lubmVySFRNTF09XCJzdWdnZXN0LmxhYmVsfHwgc3VnZ2VzdC52YWx1ZT8uZGlzcGxheWVkTWVzc2FnZSB8fCBzdWdnZXN0LnZhbHVlPy50aXRsZSBcIj48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImJvdC1pbnB1dC13cmFwcGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImJvdC1pbnB1dFwiICpuZ0lmPVwiIWRpc2FibGVVc2VySW5wdXQgJiYgc2hvd0lucHV0XCI+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBbKG5nTW9kZWwpXT1cInVzZXJJbnB1dFwiIChrZXl1cC5lbnRlcik9XCJ1c2VySW5wdXQgJiYgX3NlbmQoKVwiIChrZXl1cCk9XCJ1c2VyV3JpdGluZygkZXZlbnQpXCIgbWF4bGVuZ3RoPVwiMjAwXCJcbiAgICAgICAgICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwiY3VycmVudFBsYWNlSG9sZGVyXCI+XG4gICAgICAgICAgICA8YnV0dG9uICpuZ0lmPVwiY2hhbmdlZFwiIGNsYXNzPVwiYm90LWJ1dHRvblwiIFtzdHlsZV09XCJ7XG4gICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3IgOiBhc3NldHM/LkNvbG9yU2V0Py5QcmltYXJ5LFxuICAgICAgICAgICAgICAgICAgICAgY29sb3IgOiBhc3NldHM/LkNvbG9yU2V0Py5TZWNvbmRhcnlcbiAgICAgICAgICAgIH1cIiAoY2xpY2spPVwiX3NlbmQoKVwiIFtkaXNhYmxlZF09XCIhdXNlcklucHV0XCI+e3sgc2VuZEJ0biB9fVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImJvdC1pbnB1dC1kaXNhYmxlXCIgKm5nSWY9XCJkaXNhYmxlVXNlcklucHV0XCI+XG4gICAgICAgICAgICA8aT57eyBzZWxlY3QgfX08L2k+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYm90LWxvZ29cIj5cbiAgICAgICAgICA8aW1nIFtzcmNdPVwiYXNzZXRzLkZ1bGxTaXplTG9nb1wiPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmctY29udGFpbmVyPlxuXG4gIDwvZGl2PlxuPC9kaXY+XG4iXX0=