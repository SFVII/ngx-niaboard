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
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_3_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 23);
    i0.ɵɵelement(1, "span", 24);
    i0.ɵɵpipe(2, "safeHtml");
    i0.ɵɵelement(3, "br");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r14 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(2, 1, ctx_r14.LastBotAnswer.text), i0.ɵɵsanitizeHtml);
} }
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "span", 25);
    i0.ɵɵpipe(2, "safeHtml");
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r15 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("@FadeSlideInOutKonversoTranslateOut", ctx_r15.animations.FadeSlideInOut(ctx_r15.animationTTX, -100))("innerHTML", i0.ɵɵpipeBind1(2, 2, ctx_r15.LastBotAnswer.text), i0.ɵɵsanitizeHtml);
} }
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_3_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "span", 26);
    i0.ɵɵelementContainerEnd();
} }
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_3_div_1_Template, 4, 3, "div", 22);
    i0.ɵɵtemplate(2, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_3_ng_container_2_Template, 3, 4, "ng-container", 2);
    i0.ɵɵtemplate(3, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_3_ng_container_3_Template, 2, 0, "ng-container", 2);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r10 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r10.LastBotAnswer == null ? null : ctx_r10.LastBotAnswer.text == null ? null : ctx_r10.LastBotAnswer.text.includes("loading-dots"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !(ctx_r10.LastBotAnswer == null ? null : ctx_r10.LastBotAnswer.text == null ? null : ctx_r10.LastBotAnswer.text.includes("loading-dots")) && ctx_r10.changed && ctx_r10.showText);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r10.afterProcess);
} }
const _c1 = function (a0, a1) { return { borderColor: a0, color: a1 }; };
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_4_ng_container_2_ng_container_1_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r27 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 32);
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
    i0.ɵɵelementStart(0, "button", 33);
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
    i0.ɵɵelementStart(0, "button", 34);
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
    i0.ɵɵtemplate(1, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_4_ng_container_2_ng_container_1_button_1_Template, 1, 7, "button", 29);
    i0.ɵɵtemplate(2, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_4_ng_container_2_ng_container_1_button_2_Template, 1, 7, "button", 30);
    i0.ɵɵtemplate(3, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_4_ng_container_2_ng_container_1_button_3_Template, 1, 7, "button", 31);
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
    i0.ɵɵelementStart(1, "div", 35)(2, "div", 36)(3, "i");
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
    i0.ɵɵelementStart(1, "div", 27);
    i0.ɵɵtemplate(2, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_4_ng_container_2_Template, 2, 1, "ng-container", 28);
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
    i0.ɵɵelementStart(0, "custom-checkbox-calendar", 37);
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
    i0.ɵɵelementStart(1, "div", 38)(2, "div", 39)(3, "div", 40)(4, "button", 41);
    i0.ɵɵlistener("click", function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_6_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r42); const ctx_r41 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r41.changeNumber(1)); });
    i0.ɵɵelement(5, "nb-icon", 42);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "button", 43);
    i0.ɵɵlistener("click", function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_6_Template_button_click_6_listener() { i0.ɵɵrestoreView(_r42); const ctx_r43 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r43.changeNumber(-1)); });
    i0.ɵɵelement(7, "nb-icon", 42);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "input", 44);
    i0.ɵɵlistener("ngModelChange", function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_6_Template_input_ngModelChange_8_listener($event) { i0.ɵɵrestoreView(_r42); const ctx_r44 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r44.impact = $event); })("keyup", function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_6_Template_input_keyup_8_listener() { i0.ɵɵrestoreView(_r42); const ctx_r45 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r45.changeNumberInput(ctx_r45.impact)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "div", 45)(10, "button", 46);
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
    i0.ɵɵtemplate(3, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_3_Template, 4, 3, "ng-container", 2);
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
    i0.ɵɵelementStart(1, "button", 47);
    i0.ɵɵlistener("click", function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_10_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r48); const ctx_r47 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r47.getCalendar()); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 48);
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
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_11_ng_container_1_div_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r55 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "textarea", 52);
    i0.ɵɵlistener("ngModelChange", function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_11_ng_container_1_div_1_ng_container_2_Template_textarea_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r55); const ctx_r54 = i0.ɵɵnextContext(6); return i0.ɵɵresetView(ctx_r54.userInput = $event); })("keyup.enter", function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_11_ng_container_1_div_1_ng_container_2_Template_textarea_keyup_enter_1_listener() { i0.ɵɵrestoreView(_r55); const ctx_r56 = i0.ɵɵnextContext(6); return i0.ɵɵresetView(ctx_r56.userInput && ctx_r56._send()); })("keyup", function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_11_ng_container_1_div_1_ng_container_2_Template_textarea_keyup_1_listener($event) { i0.ɵɵrestoreView(_r55); const ctx_r57 = i0.ɵɵnextContext(6); return i0.ɵɵresetView(ctx_r57.userWriting($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r52 = i0.ɵɵnextContext(6);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r52.userInput)("maxlength", ctx_r52.inputLimit)("placeholder", ctx_r52.currentPlaceHolder);
} }
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_11_ng_container_1_div_1_ng_container_3_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r58 = i0.ɵɵnextContext(7);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r58.sendBtnMsg, " ");
} }
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_11_ng_container_1_div_1_ng_container_3_button_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r60 = i0.ɵɵnextContext(8);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r60.translate.translate(ctx_r60.service.locale, "ATTACHMENT"), " ");
} }
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_11_ng_container_1_div_1_ng_container_3_button_4_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r61 = i0.ɵɵnextContext(8);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r61.translate.translate(ctx_r61.service.locale, "ATTACHMENTS"), " ");
} }
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_11_ng_container_1_div_1_ng_container_3_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r63 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 55);
    i0.ɵɵlistener("click", function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_11_ng_container_1_div_1_ng_container_3_button_4_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r63); const ctx_r62 = i0.ɵɵnextContext(7); return i0.ɵɵresetView(ctx_r62.openUpload.emit(true)); });
    i0.ɵɵtext(1);
    i0.ɵɵtemplate(2, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_11_ng_container_1_div_1_ng_container_3_button_4_ng_container_2_Template, 2, 1, "ng-container", 2);
    i0.ɵɵtemplate(3, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_11_ng_container_1_div_1_ng_container_3_button_4_ng_container_3_Template, 2, 1, "ng-container", 2);
    i0.ɵɵelement(4, "nb-icon", 42);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r59 = i0.ɵɵnextContext(7);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r59.nbFiles, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r59.nbFiles <= 1);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r59.nbFiles > 1);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("icon", "attachment")("size", 1.5);
} }
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_11_ng_container_1_div_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r65 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 45)(2, "button", 53);
    i0.ɵɵlistener("click", function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_11_ng_container_1_div_1_ng_container_3_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r65); const ctx_r64 = i0.ɵɵnextContext(6); return i0.ɵɵresetView(ctx_r64._send()); });
    i0.ɵɵtemplate(3, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_11_ng_container_1_div_1_ng_container_3_ng_container_3_Template, 2, 1, "ng-container", 2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_11_ng_container_1_div_1_ng_container_3_button_4_Template, 5, 5, "button", 54);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r53 = i0.ɵɵnextContext(6);
    i0.ɵɵadvance(2);
    i0.ɵɵstyleMap(i0.ɵɵpureFunction2(5, _c2, ctx_r53.assets == null ? null : ctx_r53.assets.ColorSet == null ? null : ctx_r53.assets.ColorSet.Primary, ctx_r53.assets == null ? null : ctx_r53.assets.ColorSet == null ? null : ctx_r53.assets.ColorSet.Secondary));
    i0.ɵɵproperty("disabled", !ctx_r53.userInput);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r53.inputType !== "number");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r53.inputType !== "number");
} }
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_11_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 50)(1, "div", 51);
    i0.ɵɵtemplate(2, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_11_ng_container_1_div_1_ng_container_2_Template, 2, 3, "ng-container", 2);
    i0.ɵɵtemplate(3, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_11_ng_container_1_div_1_ng_container_3_Template, 5, 8, "ng-container", 2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r51 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("@FadeSlideInOutKonversoTranslateOut", ctx_r51.animations.FadeSlideInOut(ctx_r51.animationTTX, ctx_r51.animationSlideValueAdd));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r51.inputType === "text");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r51.inputType !== "number");
} }
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_11_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_11_ng_container_1_div_1_Template, 4, 3, "div", 49);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r50 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !(ctx_r50.LastBotAnswer == null ? null : ctx_r50.LastBotAnswer.text == null ? null : ctx_r50.LastBotAnswer.text.includes("loading-dots")));
} }
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_11_ng_container_1_Template, 2, 1, "ng-container", 2);
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
    i0.ɵɵtemplate(1, DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_2_ng_container_3_ng_container_1_Template, 2, 1, "ng-container", 28);
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
    i0.ɵɵelementStart(0, "div", 38)(1, "input", 70);
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
    i0.ɵɵelementStart(0, "div", 36)(1, "i");
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
    i0.ɵɵtemplate(5, DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_Template, 3, 2, "ng-container", 28);
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
const defaultInputLimit = 500;
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
        console.log(value);
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
DesktopFullScreenComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DesktopFullScreenComponent, selectors: [["bot-full-screen"]], inputs: { AssistantMode: "AssistantMode", assets: "assets", firstVisit: "firstVisit", firstUsageStory: "firstUsageStory", displayData: "displayData", disableUserInput: "disableUserInput", LastUserInput: "LastUserInput", LastBotAnswer: "LastBotAnswer", PlaceHolder: "PlaceHolder", IsMobile: "IsMobile", showInput: "showInput", NumberPlaceHolder: "NumberPlaceHolder", afterProcess: "afterProcess", nbFiles: "nbFiles" }, outputs: { readySend: "readySend", send: "send", sendBotCommand: "sendBotCommand", sendEvent: "sendEvent", sendCalendar: "sendCalendar", openUpload: "openUpload" }, features: [i0.ɵɵNgOnChangesFeature], decls: 4, vars: 7, consts: [["xmlns", "http://www.w3.org/1999/html", 1, "bot-container"], [1, "bot-view"], [4, "ngIf"], [3, "firstUsageStory", "assets", "ready"], ["id", "exit-btn", 2, "display", "none", 3, "click"], ["class", "bot-assistant-wrapper", 4, "ngIf"], ["class", "bot-chat-wrapper", 4, "ngIf"], [1, "bot-assistant-wrapper"], [1, "bot", 3, "ngStyle"], [1, "circle1"], [1, "circle2"], [1, "circle3"], [1, "bot-discussion-wrapper", 2, "min-height", "60%", "max-height", "60%", "height", "60%", "/*max-height", "120px"], [1, "overflow-hidden", "d-flex", "flex-column", "w-100", "position-relative", "user-input-container-outer"], [1, "position-relative", "bot-input-wrapper"], [1, "overflow-hidden", "d-flex", "flex-column", "w-100", "user-input-container"], [1, "user-input"], [1, "data", 3, "innerHTML"], [1, "time"], [1, "position-relative", "bot-answer"], [1, "d-flex", "flex-column", "w-100", "position-relative", "bot-answer__text"], [3, "state", "calendarTemplate", "columnOverride", "calendarChange", 4, "ngIf"], ["class", "w-100 tac", 4, "ngIf"], [1, "w-100", "tac"], [1, "tac", 3, "innerHTML"], [1, "w-100", "justify-content-center", 3, "innerHTML"], ["id", "loading-creation"], [1, "mt35", "d-flex", "justify-content-center", "w-100", "position-relative", "bot-answer__buttons"], [4, "ngFor", "ngForOf"], ["class", "bot-button bot-button-left show-btn", 3, "style", "innerHTML", "click", 4, "ngIf"], ["class", "bot-button bot-button-right show-btn", 3, "style", "innerHTML", "click", 4, "ngIf"], ["class", "bot-button bot-button-grey show-btn", 3, "style", "innerHTML", "click", 4, "ngIf"], [1, "bot-button", "bot-button-left", "show-btn", 3, "innerHTML", "click"], [1, "bot-button", "bot-button-right", "show-btn", 3, "innerHTML", "click"], [1, "bot-button", "bot-button-grey", "show-btn", 3, "innerHTML", "click"], [1, "position-relative", "bot-answer__disable-input"], [1, "bot-input-disable"], [3, "state", "calendarTemplate", "columnOverride", "calendarChange"], [1, "bot-input"], [1, "input-number-div"], [1, "input-number-div-arrow"], [1, "arrow-up", "mt5", 3, "click"], [3, "icon", "size"], [1, "arrow-down", 3, "click"], ["type", "number", "min", "1", "oninput", "return event.charCode >= 48 && event.charCode <= 57 && (validity.valid||(value='1'))", 1, "nb-impact-input", 3, "ngModel", "ngModelChange", "keyup"], [1, "bot-container-btn"], [1, "bot-button", "send-btn", "input-number-btn", "showUserInputControls", 3, "disabled", "click"], [1, "primary", "rounded", "validate-after-btn", 2, "display", "inline-block", 3, "click"], [1, "rounded", "secondary", "skip-after-btn", 2, "display", "inline-block", 3, "click"], ["class", "d-flex flex-column w-100 position-realtive bot-input", "id", "bot-input-div", 4, "ngIf"], ["id", "bot-input-div", 1, "d-flex", "flex-column", "w-100", "position-realtive", "bot-input"], [1, "w-100", "h-100", "d-flex", "flex-column", "position-absolute", "bot-input__controls"], [3, "ngModel", "maxlength", "placeholder", "ngModelChange", "keyup.enter", "keyup"], [1, "bot-button", "send-btn", 3, "disabled", "click"], ["class", "bot-button-attach", 3, "click", 4, "ngIf"], [1, "bot-button-attach", 3, "click"], [1, "bot-chat-wrapper"], [1, "bot-discussion-wrapper", 3, "scrollTop"], ["scrollMe", ""], [1, "bot-chat"], [1, "bot-input-wrapper"], ["class", "bot-input", 4, "ngIf"], ["class", "bot-input-disable", 4, "ngIf"], [1, "bot-logo"], [3, "src"], [1, "bot-answer"], ["class", "", 3, "innerHTML", 4, "ngIf"], [1, "", 3, "innerHTML"], ["class", "bot-button", 3, "style", "innerHTML", "click", 4, "ngIf"], [1, "bot-button", 3, "innerHTML", "click"], ["type", "text", "maxlength", "200", 3, "ngModel", "placeholder", "ngModelChange", "keyup.enter", "keyup"], ["class", "bot-button", 3, "style", "disabled", "click", 4, "ngIf"], [1, "bot-button", 3, "disabled", "click"]], template: function DesktopFullScreenComponent_Template(rf, ctx) { if (rf & 1) {
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
                , template: "<!--<div class=\"bot-container\"  [class]=\"IsMobile ? 'bot-mobile' : ''\" [style]=\"{'background-color' : '#100652 0% 0% no-repeat padding-box;'}\"-->\n\n  <!--<canvas class=\"orb-canvas\"></canvas>\n  <div class=\"overlay\">\n    <div class=\"overlay__inner\">\n    </div>\n  </div>-->\n  <div class=\"bot-container\"  [class]=\"IsMobile ? 'bot-mobile' : ''\" [style]=\"{'background-color' : '#100652 0% 0% no-repeat padding-box;'}\"\n     xmlns=\"http://www.w3.org/1999/html\">\n  <div class=\"bot-view\">\n    <ng-container *ngIf=\"firstVisit && firstUsageStory\">\n      <bot-first-visit [firstUsageStory]=\"firstUsageStory\" [assets]=\"assets\"\n                       (ready)=\"emit($event)\"></bot-first-visit>\n    </ng-container>\n    <ng-container *ngIf=\"!firstVisit || !firstUsageStory\">\n      <button (click)=\"byPassUserInput('exit', 0)\" id=\"exit-btn\" style=\"display: none;\"></button>\n\n      <div class=\"bot-assistant-wrapper\" *ngIf=\"AssistantMode\">\n        <!-- TODO do we need id, remove it? -->\n        <!--<div *ngIf=\"!botListening\" class=\"bot-logo\" id=\"botlogo\">\n          <img [src]=\"assets.FullSizeLogo\">\n        </div>-->\n        <!--<div [ngStyle]=\"{'height': '40%'}\" class=\"bot-logo bot-listening\">\n          <div [ngStyle]=\"{'transform': 'translateY(-10vh)'}\" class=\"m-carl-notification\">\n            <div class=\"m-carl-notification-cue m-cue\">\n              <div *ngIf=\"botListening\" class=\"a-cue-voice\" id=\"bot\">\n                <div class=\"a-cue-voice-el voice1\"></div>\n                <div class=\"a-cue-voice-el voice2\"></div>\n                <div class=\"a-cue-voice-el voice3\"></div>\n                <div class=\"a-cue-voice-el voice4\"></div>\n                <div class=\"a-cue-voice-el\"></div>\n              </div>\n              <div class=\"a-cue-icon\" id=\"bot-icon\"></div>\n            </div>\n          </div>\n        </div>-->\n\n        <div [@FadeSlideInOutKonversoOpacityOut]=\"animations.FadeSlideInOut(animationTTX, animationSlideValue)\" [ngStyle]=\"{'height': '40%'}\" class=\"bot\">\n          <div class=\"circle1\"></div>\n          <div class=\"circle2\"></div>\n          <div class=\"circle3\"></div>\n        </div>\n\n        <div  class=\"bot-discussion-wrapper\" style=\"min-height: 60%; max-height: 60%; height: 60%; /*max-height: 120px;*/\">\n          <!-- USER INPUT -->\n          <div [class.user-input-container-outer-hidden]=\"!showUserInvitation\" class=\"overflow-hidden d-flex flex-column w-100 position-relative user-input-container-outer\">\n            <ng-container *ngIf=\"(LastUserInput && !afterProcess) || !showUserInvitation\">\n              <div [@FadeSlideInOutKonversoHeightTest]=\"animations.FadeSlideInOut(animationHeightTTX*1.5, animationSlideValue)\" class=\"overflow-hidden d-flex flex-column w-100 user-input-container\">\n                <div [@FadeSlideInOutKonversoTranslateOutTest]=\"animations.FadeSlideInOut(animationTTX*1.5, animationSlideValue)\" [class.user-input-top]=\"LastUserInput?.message != ''\"  class=\"user-input\">\n                  <div class=\"data\" [style]=\"{\n                          color : assets?.ColorSet?.Secondary\n                        }\" [innerHTML]=\"LastUserInput.message\">\n                  </div>\n                  <span class=\"time\">{{LastUserInput.date}}</span>\n                </div>\n              </div>\n            </ng-container>\n          </div>\n\n          <!-- BOT ANSWER -->\n          <ng-container *ngIf=\"LastBotAnswer\">\n            <div class=\"position-relative bot-answer\">\n              <div [class.mt-4]=\"!showUserInvitation\" class=\"d-flex flex-column w-100 position-relative bot-answer__text\">\n\n                <!-- BOT ANSWER TEXT -->\n                <ng-container *ngIf=\"LastBotAnswer.text\">\n                  <!--<span *ngIf=\"!LastBotAnswer.text.includes('loading-dots')\" id=\"text\"></span><br>-->\n                  <div *ngIf=\"LastBotAnswer?.text?.includes('loading-dots')\"  class=\"w-100 tac\">\n                    <span class=\"tac\" [innerHTML]=\"LastBotAnswer.text | safeHtml\"></span><br>\n                  </div>\n                  \n                  <ng-container *ngIf=\"!LastBotAnswer?.text?.includes('loading-dots') && changed && showText\">\n                    <span [@FadeSlideInOutKonversoTranslateOut]=\"animations.FadeSlideInOut(animationTTX, -100)\" class=\"w-100 justify-content-center\" [innerHTML]=\"LastBotAnswer.text | safeHtml\"></span>\n                  </ng-container>\n                  <ng-container *ngIf=\"!afterProcess\">\n                    <span id=\"loading-creation\"></span>\n                  </ng-container>\n                </ng-container>\n              </div>\n\n              <ng-container *ngIf=\"LastBotAnswer.medias && LastBotAnswer.medias.length\n                && LastBotAnswer.medias[0].required_actions\n                && LastBotAnswer.medias[0].required_actions.length > 0\n                && !LastBotAnswer?.text?.includes('loading-dots')\">\n                <!-- BOT ANSWER BUTTONS -->\n                <div class=\"mt35 d-flex justify-content-center w-100 position-relative bot-answer__buttons\">\n                  <ng-container *ngFor=\"let suggest of LastBotAnswer.medias[0].required_actions; let i = index\">\n                    <ng-container *ngIf=\"suggest.format === 'button'\">\n                        <button\n                          [@FadeSlideInOutKonversoTranslateOut]=\"animations.FadeSlideInOut(animationTTX, -100)\"\n                          *ngIf=\"suggest.value?.title == 'Terminer' && changed || suggest.value?.title == 'Quit' && changed\" [style]=\"{\n                            borderColor : assets?.ColorSet?.Primary,\n                            color : assets?.ColorSet?.Primary\n                          }\"\n                          class=\"bot-button bot-button-left show-btn\" (click)=\"byPassUserInput(suggest?.value?.onClick, i)\"\n                          [innerHTML]=\"suggest.label|| suggest.value?.displayedMessage || suggest.value?.title \">\n                        </button>\n                        <button\n                          [@FadeSlideInOutKonversoTranslateOut]=\"animations.FadeSlideInOut(animationTTX, -100)\"\n                          *ngIf=\"suggest.value?.title == 'Nouvelle Demande' && changed || suggest.value?.title == 'New Request' && changed\" [style]=\"{\n                            borderColor : assets?.ColorSet?.Primary,\n                            color : assets?.ColorSet?.Primary\n                          }\"\n                          class=\"bot-button bot-button-right show-btn\" (click)=\"byPassUserInput(suggest?.value?.onClick, i)\"\n                          [innerHTML]=\"suggest.label|| suggest.value?.displayedMessage || suggest.value?.title \">\n                        </button>\n                        <button\n                          [@FadeSlideInOutKonversoTranslateOut]=\"animations.FadeSlideInOut(animationTTX, -100)\"\n                          *ngIf=\"suggest.value?.title && suggest.value?.title != 'Terminer' && suggest.value?.title != 'Quit' && suggest.value?.title != 'Nouvelle Demande' && suggest.value?.title != 'New Request' && changed\"\n                            [style]=\"{\n                            borderColor : assets?.ColorSet?.Primary,\n                            color : assets?.ColorSet?.Primary\n                          }\"\n                          class=\"bot-button bot-button-grey show-btn\" (click)=\"byPassUserInput(suggest?.value?.onClick, i)\"\n                          [innerHTML]=\"suggest.label|| suggest.value?.displayedMessage || suggest.value?.title \">\n                      </button>\n                    </ng-container>\n                  </ng-container>\n                </div>\n\n                <ng-container *ngIf=\"disableUserInput\">\n                  <div class=\"position-relative bot-answer__disable-input\">\n                    <div [@FadeSlideInOutKonversoTranslateOut]=\"animations.FadeSlideInOut(animationTTX, -100)\" class=\"bot-input-disable\">\n                      <i>{{ select }}</i>\n                    </div>\n                  </div>\n                </ng-container>\n              </ng-container>\n              <!-- BOT ANSWER BUTTONS -->\n\n              <!--<ng-container *ngIf=\"afterProcess && config.AfterProcessScenario.FormElements.length > 0\">\n                <div class=\"after-process-form\">\n                  <div class=\"after-process-subform\" *ngFor=\"let formElements of config.AfterProcessScenario.FormElements\">\n                    <ng-container *ngFor=\"let form of formElements\">\n                      <ng-container [ngSwitch]=\"form.type\">\n                        <div *ngSwitchCase=\"'checkbox'\" [ngStyle]=\"{'display': form?.display ? form.display: 'block'}\" class=\"bot-checkbox\">\n                          <input [checked]=\"form?.checked == true ? 'true': 'false'\" [id]=\"form?.id\" [name]=\"form?.id\" [type]='form?.type' value=\"false\">\n                          <label [for]=\"form?.id\" class=\"bot-checkbox-label\">\n                            {{ translate.translate(service.locale, form.label) }}\n                          </label>\n                        </div>\n\n                        <input [class]=\"form?.class\" [id]=\"form?.id\" [ngStyle]=\"{'display': form?.display ? form.display: 'block'}\" *ngSwitchCase=\"'text'\"\n                        [pattern]=\"form?.pattern\" [placeholder]=\"form?.placeholder\" [type]=\"form?.type\"\n                        [value]=\"form?.value\">\n\n                        <div [class]=\"form?.class\" *ngSwitchCase=\"'div'\" [ngStyle]=\"{'display': form?.display ? form.display: 'block'}\">\n                          {{ translate.translate(service.locale, form?.content) }}\n                        </div>\n\n                        <textarea [class]=\"form?.class\" [id]=\"form?.id\" *ngSwitchCase=\"'textarea'\" [ngStyle]=\"{'display': form?.display ? form.display: 'block'}\"\n                        [placeholder]=\"translate.translate(service.locale, form?.placeholder)\"></textarea>\n                      </ng-container>\n                    </ng-container>\n                  </div>\n                </div>\n              </ng-container>-->\n\n              <custom-checkbox-calendar\n                [@FadeSlideInOutKonversoHeightTest]=\"animations.FadeSlideInOut(animationTTX, animationSlideValue)\"\n                *ngIf=\"afterProcess\"\n                [state]=\"afterProcess\"\n                (calendarChange)=\"bindCalendar($event)\"\n                [calendarTemplate]=\"calendarTemplate\"\n                [columnOverride]=\"calendarKeyOverride\">\n              </custom-checkbox-calendar>\n\n              <ng-container *ngIf=\"inputType === 'number'\">\n                <div [@FadeSlideInOutKonversoOpacityOut]=\"animations.FadeSlideInOut(animationTTX, animationSlideValue)\" class=\"bot-input\">\n                                  <!--<input [type]=\"inputType\" [(ngModel)]=\"userInput\" (keyup.enter)=\"userInput && _send()\" (keyup)=\"userWriting($event)\" min=\"2\" [max]=\"inputLimit\"\n                       [placeholder]=\"currentPlaceHolder\">-->\n                  <div class=\"input-number-div\">\n                    <div class=\"input-number-div-arrow\">\n                      <button (click)=\"changeNumber(1)\" class=\"arrow-up mt5\">\n                        <nb-icon [icon]=\"'up_2'\" [size]=\"1.5\"></nb-icon>\n                      </button>\n\n                      <button (click)=\"changeNumber(-1)\" class=\"arrow-down\">\n                        <nb-icon [icon]=\"'down_2'\" [size]=\"1.5\"></nb-icon>\n                      </button>\n                    </div>\n\n                    <input [(ngModel)]=\"impact\" (keyup)=\"changeNumberInput(impact)\" class=\"nb-impact-input\" \n                    type=\"number\" min=\"1\"\n                    oninput=\"return event.charCode >= 48 && event.charCode <= 57 && (validity.valid||(value='1'))\"\n                    >\n                  </div>\n\n                  <div class=\"bot-container-btn\">\n                    <button class=\"bot-button send-btn input-number-btn showUserInputControls\" [style]=\"{\n                      backgroundColor : assets?.ColorSet?.Primary,\n                      color : assets?.ColorSet?.Secondary\n                  }\" (click)=\"_send();showUserInputControls=false;showUserInvitation=!showUserInvitation;\" \n                  [disabled]=\"!userInput || inputType === 'number' && impact < 1\">\n\n                      <ng-container *ngIf=\"inputType === 'number'\">\n                        {{ sendBtn }}\n                      </ng-container>\n                    </button>\n                  </div>\n                </div>\n              </ng-container>\n            </div>\n          </ng-container>\n\n          <div class=\"position-relative bot-input-wrapper\">\n            <ng-container *ngIf=\"afterProcess && config.AfterProcessScenario.FormButtons.length > 0\">\n              <!--<button [class]=\"btn.class\" *ngFor=\"let btn of config.AfterProcessScenario.FormButtons\" [ngStyle]=\"{'display': btn?.display ? btn.display: 'block'}\">\n                {{ translate.translate(service.locale, btn.label) }}\n              </button>-->\n              <button (click)=\"getCalendar()\" class=\"primary rounded validate-after-btn\" style=\"display: inline-block;\">\n                {{ translate.translate(service.locale, 'VALIDATE_AVAILABILITY') }}\n              </button>\n\n              <button class=\"rounded secondary skip-after-btn\" style=\"display: inline-block;\" (click)=\"skip()\">\n                {{ translate.translate(service.locale, 'SKIP') }}\n              </button>\n            </ng-container>\n\n            <ng-container *ngIf=\"!afterProcess && showUserInputControls && inputType !== 'number'\">\n              <ng-container *ngIf=\"!disableUserInput && showInput\">\n                <div *ngIf=\"!LastBotAnswer?.text?.includes('loading-dots')\" class=\"d-flex flex-column w-100 position-realtive bot-input\" id=\"bot-input-div\">\n                  <div [@FadeSlideInOutKonversoTranslateOut]=\"animations.FadeSlideInOut(animationTTX, animationSlideValueAdd)\" class=\"w-100 h-100 d-flex flex-column position-absolute bot-input__controls\">\n\n                    <ng-container *ngIf=\"inputType === 'text'\">\n                      <textarea [(ngModel)]=\"userInput\" (keyup.enter)=\"userInput && _send()\" (keyup)=\"userWriting($event)\" [maxlength]=\"inputLimit\"\n                        [placeholder]=\"currentPlaceHolder\"></textarea>\n                    </ng-container>\n\n                    <ng-container *ngIf=\"inputType !== 'number'\">\n                      <div class=\"bot-container-btn\">\n                        <button class=\"bot-button send-btn\" [style]=\"{\n                          backgroundColor : assets?.ColorSet?.Primary,\n                          color : assets?.ColorSet?.Secondary}\"\n                          (click)=\"_send()\"\n                          [disabled]=\"!userInput\">\n\n                          <ng-container *ngIf=\"inputType !== 'number'\">\n                            {{ sendBtnMsg }}\n                          </ng-container>\n\n                          <!--<ng-container *ngIf=\"inputType === 'number'\">\n                            {{ sendBtn }}\n                          </ng-container>-->\n                        </button>\n\n                        <!-- <button *ngIf=\"inputType !== 'number' && IsMobile\" class=\"bot-button-screen\">\n                          <nb-icon [icon]=\"'scan_11'\" [size]=\"1.5\"></nb-icon>\n                          {{ btnScreen }}\n                        </button> -->\n\n                        <button *ngIf=\"inputType !== 'number'\" class=\"bot-button-attach\" (click)=\"openUpload.emit(true)\">\n                          {{ nbFiles }}\n\n                          <ng-container *ngIf=\"nbFiles <= 1\">\n                            {{ translate.translate(service.locale, 'ATTACHMENT') }}\n                          </ng-container>\n\n                          <ng-container *ngIf=\"nbFiles > 1\">\n                            {{ translate.translate(service.locale, 'ATTACHMENTS') }}\n                          </ng-container>\n\n                          <nb-icon [icon]=\"'attachment'\" [size]=\"1.5\"></nb-icon>\n                        </button>\n                      </div>\n                    </ng-container>\n\n                  </div>\n                </div>\n              </ng-container>\n            </ng-container>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"bot-chat-wrapper\" *ngIf=\"!AssistantMode\">\n        {{AssistantMode}}\n        <div class=\"bot-discussion-wrapper\" #scrollMe [scrollTop]=\"scrollMe.scrollTo(0, 9999999)\">\n          <div class=\"bot-chat\">\n            <ng-container *ngFor=\"let entry of displayData\">\n              <ng-container *ngIf=\"entry.date\">\n                <div [@FadeSlideInOutKonversoTranslateOut]=\"animations.FadeSlideInOut(animationTTX, animationSlideValue)\" class=\"user-input\">\n                  <div class=\"data\" [style]=\"{\n                     backgroundColor : assets?.ColorSet?.Primary,\n                     color : assets?.ColorSet?.Secondary\n                    }\" [innerHTML]=\"entry.message\">\n                  </div>\n                  <span class=\"time\">{{entry.date}}</span>\n                </div>\n              </ng-container>\n              <ng-container *ngIf=\"!entry.date\">\n                <div class=\"bot-answer\">\n                  <ng-container *ngIf=\"entry.text\">\n                    <span *ngIf=\"changed\" class=\"\" [innerHTML]=\"entry.text | safeHtml\"></span>\n                  </ng-container>\n                  <ng-container *ngIf=\"entry.medias && entry.medias.length\n                   && entry.medias[0].required_actions\n                   && entry.medias[0].required_actions.length\">\n                    <ng-container *ngFor=\"let suggest of entry.medias[0].required_actions\">\n                      <ng-container *ngIf=\"suggest.format === 'button'\">\n                        <button *ngIf=\"changed\" [style]=\"{\n                     borderColor : assets?.ColorSet?.Primary,\n                     color : assets?.ColorSet?.Primary\n            }\" class=\"bot-button\" (click)=\"byPassUserInput(suggest?.value?.onClick)\"\n                                [innerHTML]=\"suggest.label|| suggest.value?.displayedMessage || suggest.value?.title \"></button>\n                      </ng-container>\n                    </ng-container>\n                  </ng-container>\n\n                </div>\n              </ng-container>\n            </ng-container>\n          </div>\n        </div>\n        <div class=\"bot-input-wrapper\">\n          <div class=\"bot-input\" *ngIf=\"!disableUserInput && showInput\">\n            <input type=\"text\" [(ngModel)]=\"userInput\" (keyup.enter)=\"userInput && _send()\" (keyup)=\"userWriting($event)\" maxlength=\"200\"\n                   [placeholder]=\"currentPlaceHolder\">\n            <button *ngIf=\"changed\" class=\"bot-button\" [style]=\"{\n                     backgroundColor : assets?.ColorSet?.Primary,\n                     color : assets?.ColorSet?.Secondary\n            }\" (click)=\"_send()\" [disabled]=\"!userInput\">{{ sendBtn }}\n            </button>\n          </div>\n          <div class=\"bot-input-disable\" *ngIf=\"disableUserInput\">\n            <i>{{ select }}</i>\n          </div>\n        </div>\n        <div class=\"bot-logo\">\n          <img [src]=\"assets.FullSizeLogo\">\n        </div>\n      </div>\n    </ng-container>\n\n  </div>\n</div>\n", styles: ["@keyframes gradient{0%{background-position:50% 0%}50%{background-position:50% 100%}to{background-position:50% 0%}}@keyframes pulsebot{0%{transform:scale(1)}50%{transform:scale(1.3)}to{transform:scale(1)}}.bot-listening{height:100%;background:transparent}.bot-listening:before{content:\"\";position:absolute;top:-60vw;left:-80vw;width:150vw;height:150vw;border-radius:50%;background:transparent}.bot-listening:after{content:\"\";position:absolute;top:-40vw;left:-50vw;width:90vw;height:90vw;border-radius:50%;background:transparent}@media screen and (min--moz-device-pixel-ratio:0){.m-carl-notification{transform:translate(0)!important}}.m-carl-notification{position:relative;top:50%}.m-carl-notification .m-cue{width:168px;height:168px;margin:0 auto 50px;display:flex;justify-content:center;align-items:center}.m-carl-notification .m-cue .a-cue-icon{position:absolute;width:100px;height:100px;transform:translate(5px) translateY(5px);border-radius:50%;background:radial-gradient(circle at 50% 50%,#9D107D 1px,#9D107D 3%,#580b58 60%);box-shadow:0 0 10px 5px #00000040;animation:pulsebot 3.5s ease infinite}.m-carl-notification .m-cue .a-cue-voice{transform-origin:center center;height:130px;width:130px;position:absolute;display:flex;justify-content:center;align-items:center}.m-carl-notification .m-cue .a-cue-voice-el{position:absolute;width:130px;height:130px;border-radius:50%;background:#fff;opacity:.2;filter:blur(2px)}.voice1{background:#9A147F!important}.voice2{background:#773691!important}.voice3{background:#4E5CA8!important}.voice4{background:#ABC1F1!important}.m-carl-notification .m-cue .a-cue-voice-el:nth-child(1){animation:hovering 6s ease 0s infinite reverse both}.m-carl-notification .m-cue .a-cue-voice-el:nth-child(2){animation:hovering 7s ease 0s infinite both}.m-carl-notification .m-cue .a-cue-voice-el:nth-child(3){animation:hovering 8s ease 0s infinite reverse both}.m-carl-notification .m-cue .a-cue-voice-el:nth-child(4){animation:hovering 9s ease 0s infinite both}.m-carl-notification .m-cue .a-cue-voice-el:nth-child(5){animation:hovering 10s ease 0s infinite reverse both}.m-carl-notification .m-cue .speaking{animation:pulse 2s ease 0s infinite}.m-carl-notification .a-caption{color:#fff;font-size:1.5em;line-height:1.8em;text-shadow:0px 1px 2px rgba(0,0,0,.26);text-align:center}.m-carl-notification .a-caption.speaking{text-shadow:0px 0px 0px;opacity:.4}@keyframes hovering{0%{transform:rotate(0) translate(18px) rotate(0)}to{transform:rotate(360deg) translate(18px) rotate(-360deg)}}@keyframes pulse{0%{transform:scale(1)}10%{transform:scale(1.15)}15%{transform:scale(1.25)}20%{transform:scale(1.05)}30%{transform:scale(1.3)}40%{transform:scale(1)}50%{transform:scale(1.25)}55%{transform:scale(1.1)}60%{transform:scale(1)}65%{transform:scale(1.3)}70%{transform:scale(1.2)}80%{transform:scale(1.15)}90%{transform:scale(1.25)}to{transform:scale(1.05)}}input::-webkit-outer-spin-button,input::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}input[type=number]{-moz-appearance:textfield}.nb-impact-input{background:none;margin-top:0}\n"] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVza3RvcC1mdWxsLXNjcmVlbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9rb252ZXJzby9zcmMvbGliL2Rlc2t0b3AtZnVsbC1zY3JlZW4vZGVza3RvcC1mdWxsLXNjcmVlbi5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9rb252ZXJzby9zcmMvbGliL2Rlc2t0b3AtZnVsbC1zY3JlZW4vZGVza3RvcC1mdWxsLXNjcmVlbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFxQixNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFJaEcsT0FBTyxFQUVILGNBQWMsRUFDZCxnQ0FBZ0MsRUFDaEMsa0NBQWtDLEVBQ2xDLDRCQUE0QixFQUMvQixNQUFNLDBCQUEwQixDQUFDO0FBWWxDLG9CQUFvQjtBQUNwQixPQUFPLEVBQUMsT0FBTyxFQUFhLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFDLE1BQU0scUJBQXFCLENBQUM7Ozs7Ozs7Ozs7Ozs7SUNiL0UsNkJBQW9EO0lBQ2xELDBDQUN3QztJQUF2QiwrTEFBUyxlQUFBLG1CQUFZLENBQUEsSUFBQztJQUFDLGlCQUFrQjtJQUM1RCwwQkFBZTs7O0lBRkksZUFBbUM7SUFBbkMsd0RBQW1DLHlCQUFBOzs7O0lBbUM5Qyw2QkFBOEU7SUFDNUUsK0JBQXdMLGNBQUE7SUFFcEwsMEJBR007SUFDTixnQ0FBbUI7SUFBQSxZQUFzQjtJQUFBLGlCQUFPLEVBQUEsRUFBQTtJQUd0RCwwQkFBZTs7O0lBVFIsZUFBNEc7SUFBNUcsaUpBQTRHO0lBQ0csZUFBcUQ7SUFBckQsNEdBQXFEO0lBQWxLLGlKQUE0RztJQUM3RixlQUVWO0lBRlUsa0pBRVY7SUFBQywyRUFBbUM7SUFFekIsZUFBc0I7SUFBdEIsK0NBQXNC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Y0FJZixDQUFDLGNBQWMsRUFBRSxnQ0FBZ0MsRUFBRSxrQ0FBa0MsRUFBRSw0QkFBNEIsRUFBRSxzQ0FBc0MsRUFBRSxnQ0FBZ0MsQ0FBQyxDQUFDLGlCQUFpQjs7O3NCQXVGL00sTUFBTTt1QkFBQyxpQkFBaUI7d0JBcEY1QixhQUFhO2tCQUFyQixLQUFLO1lBQ0csTUFBTTtrQkFBZCxLQUFLO1lBQ0csVUFBVTtrQkFBbEIsS0FBSztZQUNHLGVBQWU7a0JBQXZCLEtBQUs7WUFDRyxXQUFXO2tCQUFuQixLQUFLO1lBQ0csZ0JBQWdCO2tCQUF4QixLQUFLO1lBQ0csYUFBYTtrQkFBckIsS0FBSztZQUNHLGFBQWE7a0JBQXJCLEtBQUs7WUFDRyxXQUFXO2tCQUFuQixLQUFLO1lBQ0csUUFBUTtrQkFBaEIsS0FBSztZQUNHLFNBQVM7a0JBQWpCLEtBQUs7WUFDRyxpQkFBaUI7a0JBQXpCLEtBQUs7WUFDRyxZQUFZO2tCQUFwQixLQUFLO1lBQ0csT0FBTztrQkFBZixLQUFLO1lBRUksU0FBUztrQkFBbEIsTUFBTTtZQUNHLElBQUk7a0JBQWIsTUFBTTtZQUNHLGNBQWM7a0JBQXZCLE1BQU07WUFDRyxTQUFTO2tCQUFsQixNQUFNO1lBQ0csWUFBWTtrQkFBckIsTUFBTTtZQUNHLFVBQVU7a0JBQW5CLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbmplY3QsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RGVmYXVsdEFzc2V0cywgS29udmVyc29JbnRlcmZhY2UsIE9wZW5DaGF0Qm90UmVzcG9uc2UsIFVzZXJJbnB1dH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlL0tvbnZlcnNvSW50ZXJmYWNlJztcbmltcG9ydCB7S29udmVyc29TZXJ2aWNlfSBmcm9tICcuLi9rb252ZXJzby5zZXJ2aWNlJztcbmltcG9ydCB7VHJhbnNsYXRlU2VydmljZX0gZnJvbSAnLi4vdHJhbnNsYXRlLnNlcnZpY2UnO1xuaW1wb3J0IHtcbiAgICBBbmltYXRpb25zU2VydmljZSxcbiAgICBGYWRlU2xpZGVJbk91dCxcbiAgICBGYWRlU2xpZGVJbk91dEtvbnZlcnNvT3BhY2l0eU91dCxcbiAgICBGYWRlU2xpZGVJbk91dEtvbnZlcnNvVHJhbnNsYXRlT3V0LFxuICAgIEZhZGVTbGlkZUluT3V0S29udmVyc29IZWlnaHRcbn0gZnJvbSAnbmd4LW5vd2JyYWlucy1hbmltYXRpb25zJztcblxuZGVjbGFyZSB2YXIgUElYSTogYW55O1xuY29uc3QgZGVmYXVsdElucHV0VHlwZSA9ICd0ZXh0JztcbmNvbnN0IGRlZmF1bHRJbnB1dExpbWl0ID0gNTAwO1xuY29uc3QgQU5JTUFUSU9OX1RUWCA9IDc1MDtcbmNvbnN0IEFOSU1BVElPTl9UVFhfQUREID0gMjUwO1xuY29uc3QgQU5JTUFUSU9OX1NMSURFX1ZBTFVFID0gLTUwO1xuY29uc3QgQU5JTUFUSU9OX1NMSURFX1ZBTFVFX0FERCA9IC0yNTtcbmNvbnN0IEFOSU1BVElPTl9IRUlHSFRfVFRYID0gMTI1MDtcblxuXG4vKiBUT0RPIHJlbW92ZSBpdCAqL1xuaW1wb3J0IHthbmltYXRlLCBrZXlmcmFtZXMsIHN0eWxlLCB0cmFuc2l0aW9uLCB0cmlnZ2VyfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcblxuY29uc3QgQU5JTUFUSU9OX1RZUEVfQ1VCSUNfQkVaSUVSID0gJ2N1YmljLWJlemllcigwLjM5LCAwLjU4LCAwLjU3LCAxKSc7XG5cbi8qIFRPRE8gKi9cbi8qIG1vdmUgdGhlIGFuaW1hdGlvbnMgdG8gbmd4LW5vd2JyYWlucy1hbmltYXRpb25zICovXG5leHBvcnQgY29uc3QgRmFkZVNsaWRlSW5PdXRLb252ZXJzb1RyYW5zbGF0ZU91dFRlc3QgPSB0cmlnZ2VyKCdGYWRlU2xpZGVJbk91dEtvbnZlcnNvVHJhbnNsYXRlT3V0VGVzdCcsIFtcbiAgICB0cmFuc2l0aW9uKCc6ZW50ZXInLCBbXG4gICAgICAgIHN0eWxlKHtvcGFjaXR5OiAwLCB0b3A6ICd7e3BlcmNlbnRfc3RhcnR9fSUnfSksXG4gICAgICAgIGFuaW1hdGUoYHt7dHR4fX1tcyAke0FOSU1BVElPTl9UWVBFX0NVQklDX0JFWklFUn1gLCBzdHlsZSh7b3BhY2l0eTogMSwgdG9wOiAnMCUnfSkpXG4gICAgXSksXG4gICAgdHJhbnNpdGlvbignOmxlYXZlJywgW1xuICAgICAgICBzdHlsZSh7b3BhY2l0eTogMX0pLFxuICAgICAgICBhbmltYXRlKCd7e3R0eH19bXMgZWFzZS1pbi1vdXQnLCBzdHlsZSh7b3BhY2l0eTogMH0pKVxuICAgIF0pXG5dKTtcblxuZXhwb3J0IGNvbnN0IEZhZGVTbGlkZUluT3V0S29udmVyc29IZWlnaHRUZXN0ID0gdHJpZ2dlcignRmFkZVNsaWRlSW5PdXRLb252ZXJzb0hlaWdodFRlc3QnLCBbXG4gICAgdHJhbnNpdGlvbignOmVudGVyJywgW1xuICAgICAgICBzdHlsZSh7aGVpZ2h0OiAwfSksXG4gICAgICAgIGFuaW1hdGUoYHt7dHR4fX1tcyAke0FOSU1BVElPTl9UWVBFX0NVQklDX0JFWklFUn1gLCBzdHlsZSh7aGVpZ2h0OiAnKid9KSlcbiAgICBdKSxcbiAgICB0cmFuc2l0aW9uKCc6bGVhdmUnLCBbXG4gICAgICAgIHN0eWxlKHtvcGFjaXR5OiAxfSksXG4gICAgICAgIGFuaW1hdGUoJ3t7dHR4fX1tcyBlYXNlLWluLW91dCcsIHN0eWxlKHtvcGFjaXR5OiAwfSkpXG4gICAgXSlcbl0pO1xuXG5leHBvcnQgY29uc3QgRmFkZVNsaWRlSW5PdXRLb252ZXJzb0hlaWdodE91dFRlc3QgPSB0cmlnZ2VyKCdGYWRlU2xpZGVJbk91dEtvbnZlcnNvSGVpZ2h0T3V0VGVzdCcsIFtcbiAgICB0cmFuc2l0aW9uKCc6ZW50ZXInLCBbXG4gICAgICAgIHN0eWxlKHtoZWlnaHQ6ICcqJ30pLFxuICAgICAgICBhbmltYXRlKGB7e3R0eH19bXMgJHtBTklNQVRJT05fVFlQRV9DVUJJQ19CRVpJRVJ9YCwgc3R5bGUoe2hlaWdodDogMH0pKVxuICAgIF0pXG5dKTtcblxuLyogVE9ETyByZW1vdmUgaXQgKi9cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdib3QtZnVsbC1zY3JlZW4nLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9kZXNrdG9wLWZ1bGwtc2NyZWVuLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9kZXNrdG9wLWZ1bGwtc2NyZWVuLmNvbXBvbmVudC5jc3MnXSxcbiAgICAvL2FuaW1hdGlvbnM6IFtGYWRlU2xpZGVJbk91dCwgRmFkZVNsaWRlSW5PdXRLb252ZXJzb09wYWNpdHlPdXQsIEZhZGVTbGlkZUluT3V0S29udmVyc29UcmFuc2xhdGVPdXQsIEZhZGVTbGlkZUluT3V0S29udmVyc29IZWlnaHRdXG4gICAgYW5pbWF0aW9uczogW0ZhZGVTbGlkZUluT3V0LCBGYWRlU2xpZGVJbk91dEtvbnZlcnNvT3BhY2l0eU91dCwgRmFkZVNsaWRlSW5PdXRLb252ZXJzb1RyYW5zbGF0ZU91dCwgRmFkZVNsaWRlSW5PdXRLb252ZXJzb0hlaWdodCwgRmFkZVNsaWRlSW5PdXRLb252ZXJzb1RyYW5zbGF0ZU91dFRlc3QsIEZhZGVTbGlkZUluT3V0S29udmVyc29IZWlnaHRUZXN0XSAvLyBUT0RPIHJlbW92ZSBpdFxufSlcbmV4cG9ydCBjbGFzcyBEZXNrdG9wRnVsbFNjcmVlbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0IHtcbiAgICBASW5wdXQoKSBBc3Npc3RhbnRNb2RlOiBib29sZWFuID0gZmFsc2U7XG4gICAgQElucHV0KCkgYXNzZXRzOiBEZWZhdWx0QXNzZXRzO1xuICAgIEBJbnB1dCgpIGZpcnN0VmlzaXQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBASW5wdXQoKSBmaXJzdFVzYWdlU3Rvcnk6IHN0cmluZ1tdO1xuICAgIEBJbnB1dCgpIGRpc3BsYXlEYXRhOiAoVXNlcklucHV0IHwgT3BlbkNoYXRCb3RSZXNwb25zZSlbXTtcbiAgICBASW5wdXQoKSBkaXNhYmxlVXNlcklucHV0OiBib29sZWFuO1xuICAgIEBJbnB1dCgpIExhc3RVc2VySW5wdXQ6IFVzZXJJbnB1dDtcbiAgICBASW5wdXQoKSBMYXN0Qm90QW5zd2VyOiBPcGVuQ2hhdEJvdFJlc3BvbnNlO1xuICAgIEBJbnB1dCgpIFBsYWNlSG9sZGVyOiBzdHJpbmdbXTtcbiAgICBASW5wdXQoKSBJc01vYmlsZTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIHNob3dJbnB1dDogYm9vbGVhbjtcbiAgICBASW5wdXQoKSBOdW1iZXJQbGFjZUhvbGRlcjogc3RyaW5nW107XG4gICAgQElucHV0KCkgYWZ0ZXJQcm9jZXNzID0gZmFsc2U7XG4gICAgQElucHV0KCkgbmJGaWxlcyA9IDA7XG5cbiAgICBAT3V0cHV0KCkgcmVhZHlTZW5kOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KGZhbHNlKTtcbiAgICBAT3V0cHV0KCkgc2VuZDogRXZlbnRFbWl0dGVyPFVzZXJJbnB1dD4gPSBuZXcgRXZlbnRFbWl0dGVyPFVzZXJJbnB1dD4obnVsbCk7XG4gICAgQE91dHB1dCgpIHNlbmRCb3RDb21tYW5kOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPihudWxsKTtcbiAgICBAT3V0cHV0KCkgc2VuZEV2ZW50OiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPihudWxsKTtcbiAgICBAT3V0cHV0KCkgc2VuZENhbGVuZGFyOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PihudWxsKTtcbiAgICBAT3V0cHV0KCkgb3BlblVwbG9hZDogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPihmYWxzZSk7XG4gICAgcHVibGljIHVzZXJJbnB1dDogc3RyaW5nO1xuICAgIHB1YmxpYyBjdXJyZW50UGxhY2VIb2xkZXI6IHN0cmluZyA9ICcnO1xuICAgIHB1YmxpYyBzZW5kQnRuID0gJyc7XG4gICAgcHVibGljIHNlbmRCdG5Nc2cgPSAnJztcbiAgICBwdWJsaWMgc2VsZWN0ID0gJyc7XG4gICAgcHVibGljIGNoYW5nZWQgPSBmYWxzZTtcbiAgICBwdWJsaWMgYm90TGlzdGVuaW5nID0gZmFsc2U7XG4gICAgcHVibGljIHNob3dXcmFwcGVyID0gdHJ1ZTtcbiAgICBwdWJsaWMgc2hvd1RleHQgPSB0cnVlO1xuICAgIHB1YmxpYyBpbnB1dFR5cGU6IHN0cmluZyA9IGRlZmF1bHRJbnB1dFR5cGU7XG4gICAgcHVibGljIGlucHV0TGltaXQ6IG51bWJlciA9IGRlZmF1bHRJbnB1dExpbWl0O1xuICAgIHByaXZhdGUgbmV3TWVzc2FnZSA9IGZhbHNlO1xuICAgIHByaXZhdGUgbWVzc2FnZUN1cnJlbnQgPSAnJztcbiAgICBwcml2YXRlIG1zZ0FycmF5ID0gW107XG4gICAgcHJpdmF0ZSBib3RMaXN0ZW5pbmdUaW1lciA9IDA7XG4gICAgcHJpdmF0ZSBhbmltX2RvbmUgPSBmYWxzZTtcbiAgICBwcml2YXRlIHJlbG9hZGVkID0gZmFsc2U7XG4gICAgcHJpdmF0ZSB0aW1lcjtcbiAgICBwdWJsaWMgYnRuU2NyZWVuID0gJyc7XG4gICAgcHVibGljIG5iQXR0YWNobWVudHMgPSAwO1xuICAgIGNvbmZpZzogS29udmVyc29JbnRlcmZhY2U7XG4gICAgcHJpdmF0ZSBkYXlzID0gW107XG4gICAgcHVibGljIGNhbGVuZGFyQXZhaWxhYmlsaXR5ID0ge307XG4gICAgcHVibGljIGNhbGVuZGFyVGVtcGxhdGUgPSB7XG4gICAgICAgIG1vcm5pbmc6IHthbGw6IHRydWUsIG1vbmRheTogdHJ1ZSwgdHVlc2RheTogdHJ1ZSwgd2VkbmVzZGF5OiB0cnVlLCB0aHVyc2RheTogdHJ1ZSwgZnJpZGF5OiB0cnVlfSxcbiAgICAgICAgYWZ0ZXJub29uOiB7YWxsOiB0cnVlLCBtb25kYXk6IHRydWUsIHR1ZXNkYXk6IHRydWUsIHdlZG5lc2RheTogdHJ1ZSwgdGh1cnNkYXk6IHRydWUsIGZyaWRheTogdHJ1ZX1cbiAgICB9O1xuICAgIHB1YmxpYyBjYWxlbmRhcktleU92ZXJyaWRlID0ge1xuICAgICAgICBtb3JuaW5nOiAnTU9STklOR19BTEwnLFxuICAgICAgICBhZnRlcm5vb246ICdBRlRFUk5PT05fQUxMJyxcbiAgICAgICAgbW9uZGF5OiAnTU9OREFZJyxcbiAgICAgICAgdHVlc2RheTogJ1RVRVNEQVknLFxuICAgICAgICB3ZWRuZXNkYXk6ICdXRURORVNEQVknLFxuICAgICAgICB0aHVyc2RheTogJ1RIVVJTREFZJyxcbiAgICAgICAgZnJpZGF5OiAnRlJJREFZJ1xuICAgIH07XG4gICAgcHVibGljIHNob3dVc2VySW5wdXRDb250cm9scyA9IHRydWU7XG4gICAgcHVibGljIHNob3dVc2VySW52aXRhdGlvbiA9IHRydWU7XG5cbiAgICBwdWJsaWMgYW5pbWF0aW9uVFRYID0gQU5JTUFUSU9OX1RUWDtcbiAgICBwdWJsaWMgYW5pbWF0aW9uVHR4QWRkID0gQU5JTUFUSU9OX1RUWF9BREQ7XG4gICAgcHVibGljIGFuaW1hdGlvblNsaWRlVmFsdWUgPSBBTklNQVRJT05fU0xJREVfVkFMVUU7XG4gICAgcHVibGljIGFuaW1hdGlvblNsaWRlVmFsdWVBZGQgPSBBTklNQVRJT05fU0xJREVfVkFMVUVfQUREO1xuICAgIHB1YmxpYyBhbmltYXRpb25IZWlnaHRUVFggPSBBTklNQVRJT05fSEVJR0hUX1RUWDtcbiAgICBcbiAgICBwdWJsaWMgaW1wYWN0ID0gMTtcblxuICAgIGNoYW5nZU51bWJlcih2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIC8vIHRoaXMuaW1wYWN0ID0gdmFsdWU7XG4gICAgICAgIGlmICgoK3RoaXMudXNlcklucHV0ICsgdmFsdWUpID49IDEpIHtcbiAgICAgICAgICAgIHRoaXMudXNlcklucHV0ID0gKCt0aGlzLnVzZXJJbnB1dCArIHZhbHVlKS50b1N0cmluZygpO1xuICAgICAgICAgICAgdGhpcy5pbXBhY3QgPSAoK3RoaXMudXNlcklucHV0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNoYW5nZU51bWJlcklucHV0KHZhbHVlOiBhbnkpIHtcbiAgICAgICAgY29uc29sZS5sb2codmFsdWUpO1xuICAgICAgICBpZiAodmFsdWUgPj0gMSkge1xuICAgICAgICAgICAgdGhpcy51c2VySW5wdXQgPSB2YWx1ZS50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IocHVibGljIHRyYW5zbGF0ZTogVHJhbnNsYXRlU2VydmljZSwgcHVibGljIHNlcnZpY2U6IEtvbnZlcnNvU2VydmljZSwgcHVibGljIGFuaW1hdGlvbnM6IEFuaW1hdGlvbnNTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIEBJbmplY3QoJ19fTmd4S29udmVyc29fXycpIGNvbmZpZzogS29udmVyc29JbnRlcmZhY2UpIHtcbiAgICAgICAgc2VydmljZS5sYW5nLnN1YnNjcmliZSgocikgPT4ge1xuICAgICAgICAgICAgaWYgKHNlcnZpY2UubG9jYWxlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZW5kQnRuID0gdHJhbnNsYXRlLnRyYW5zbGF0ZShzZXJ2aWNlLmxvY2FsZSwgJ1NFTkQnKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbmRCdG5Nc2cgPSB0cmFuc2xhdGUudHJhbnNsYXRlKHNlcnZpY2UubG9jYWxlLCAnU0VORF9NRVNTQUdFJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3QgPSB0cmFuc2xhdGUudHJhbnNsYXRlKHNlcnZpY2UubG9jYWxlLCAnU0VMRUNUJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5idG5TY3JlZW4gPSB0cmFuc2xhdGUudHJhbnNsYXRlKHNlcnZpY2UubG9jYWxlLCAnU0NSRUVOU0hPVCcpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5kYXlzID0gW1xuICAgICAgICAgICAgICAgICAgICAnTU9OREFZJyxcbiAgICAgICAgICAgICAgICAgICAgJ1RVRVNEQVknLFxuICAgICAgICAgICAgICAgICAgICAnV0VETkVTREFZJyxcbiAgICAgICAgICAgICAgICAgICAgJ1RIVVJTREFZJyxcbiAgICAgICAgICAgICAgICAgICAgJ0ZSSURBWScsXG4gICAgICAgICAgICAgICAgICAgICdTQVRVUkRBWScsXG4gICAgICAgICAgICAgICAgICAgICdTVU5EQVknLFxuICAgICAgICAgICAgICAgICAgICAnTU9OREFZJ1xuICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xuICAgIH1cblxuICAgIG5nT25DaGFuZ2VzKCkge1xuICAgICAgICBpZiAodGhpcy5hZnRlclByb2Nlc3MpIHtcbiAgICAgICAgICAgIC8vdGhpcy5MYXN0VXNlcklucHV0ID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuTGFzdEJvdEFuc3dlci50ZXh0ID0gdGhpcy5jb25maWcuQWZ0ZXJQcm9jZXNzU2NlbmFyaW8uQm90TWVzc2FnZVt0aGlzLnNlcnZpY2UubG9jYWxlXTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuY29uZmlnLkFmdGVyUHJvY2Vzc1NjZW5hcmlvLkZvcm1FbGVtZW50c1swXVswXS5sYWJlbCA9PSAnSm91ciAxJykge1xuICAgICAgICAgICAgICAgIGxldCBkYXkxID0gdGhpcy5kYXlzW25ldyBEYXRlKCkuZ2V0RGF5KCkgLSAxXTtcbiAgICAgICAgICAgICAgICBsZXQgZGF5MiA9IHRoaXMuZGF5c1tuZXcgRGF0ZSgpLmdldERheSgpXTtcbiAgICAgICAgICAgICAgICBsZXQgZGF5MyA9IHRoaXMuZGF5c1tuZXcgRGF0ZSgpLmdldERheSgpICsgMV07XG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWcuQWZ0ZXJQcm9jZXNzU2NlbmFyaW8uRm9ybUVsZW1lbnRzWzBdWzBdLmxhYmVsID0gZGF5MTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZy5BZnRlclByb2Nlc3NTY2VuYXJpby5Gb3JtRWxlbWVudHNbMV1bMF0ubGFiZWwgPSBkYXkyO1xuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnLkFmdGVyUHJvY2Vzc1NjZW5hcmlvLkZvcm1FbGVtZW50c1syXVswXS5sYWJlbCA9IGRheTM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG4gICAgICAgIHRoaXMuY2hhbmdlZCA9IGZhbHNlO1xuXG4gICAgICAgIGlmICh0aGlzLkxhc3RCb3RBbnN3ZXIgJiYgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHQnKSAmJiB0aGlzLkxhc3RCb3RBbnN3ZXI/LnRleHQgJiYgIXRoaXMuTGFzdEJvdEFuc3dlcj8udGV4dD8uaW5jbHVkZXMoJ2xvYWRpbmctZG90cycpKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dCcpLmlubmVySFRNTCA9ICcnO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuTGFzdEJvdEFuc3dlciAmJiB0aGlzLkxhc3RCb3RBbnN3ZXIudGV4dCAmJiB0aGlzLkxhc3RCb3RBbnN3ZXI/LnRleHQ/LmluY2x1ZGVzKCc8bnVtYmVyPicpICYmIHRoaXMuTGFzdEJvdEFuc3dlcj8udGV4dD8uaW5jbHVkZXMoJzwvbnVtYmVyPicpKSB7XG4gICAgICAgICAgICB0aGlzLnVzZXJJbnB1dCA9ICcxJztcbiAgICAgICAgICAgIHRoaXMuaW5wdXRUeXBlID0gJ251bWJlcic7XG4gICAgICAgICAgICB0aGlzLmlucHV0TGltaXQgPSA5OTk7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQbGFjZUhvbGRlciA9IHRoaXMuTnVtYmVyUGxhY2VIb2xkZXJbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5OdW1iZXJQbGFjZUhvbGRlci5sZW5ndGgpXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBsYWNlSG9sZGVyID0gdGhpcy5QbGFjZUhvbGRlcltNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLlBsYWNlSG9sZGVyLmxlbmd0aCldO1xuICAgICAgICAgICAgdGhpcy5pbnB1dFR5cGUgPSBkZWZhdWx0SW5wdXRUeXBlO1xuICAgICAgICAgICAgdGhpcy5pbnB1dExpbWl0ID0gZGVmYXVsdElucHV0TGltaXQ7XG4gICAgICAgIH1cblxuXG4gICAgICAgIC8qICAgaWYgKCF0aGlzLmFuaW1fZG9uZSkge1xuICAgICAgICAgICAgICAgbGV0IHQyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLkxhc3RCb3RBbnN3ZXIgICYmICF0aGlzLkxhc3RCb3RBbnN3ZXI/LnRleHQgJiYgIXRoaXMuTGFzdEJvdEFuc3dlcj8udGV4dD8uaW5jbHVkZXMoJ2xvYWRpbmctZG90cycpICYmIHRoaXMuYW5pbV9kb25lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodDIpO1xuICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzdHJpbmcgPSB0aGlzLkxhc3RCb3RBbnN3ZXI/LnRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zcGxpdCgnPGJyLz4nKS5qb2luKGAgYClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zcGxpdCgnJmVhY3V0ZTsnKS5qb2luKCfDqScpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAuc3BsaXQoJyZlZ3JhdmU7Jykuam9pbignw6gnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoLzxbXj5dKj4/L2dtLCAnJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zcGxpdCgnJm5ic3A7Jykuam9pbignJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tc2dBcnJheSA9IHN0cmluZy5zcGxpdCgnJyk7XG4gICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm1lc3NhZ2VDdXJyZW50ICE9PSBzdHJpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmV3TWVzc2FnZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2VDdXJyZW50ID0gc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXVuY2hMb29wKCk7XG4gICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgLy90aGlzLmxvb3BlcihhcnJheSwgdGltZXIpO1xuICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5MYXN0Qm90QW5zd2VyICYmIHRoaXMuTGFzdEJvdEFuc3dlci50ZXh0KSB7XG4gICAgICAgICAgICAgICBjb25zdCBzdHJpbmcgPSB0aGlzLkxhc3RCb3RBbnN3ZXI/LnRleHRcbiAgICAgICAgICAgICAgICAgICAuc3BsaXQoJzxici8+Jykuam9pbihgIGApXG4gICAgICAgICAgICAgICAgICAgLnNwbGl0KCcmZWFjdXRlOycpLmpvaW4oJ8OpJylcbiAgICAgICAgICAgICAgICAgICAuc3BsaXQoJyZlZ3JhdmU7Jykuam9pbignw6gnKVxuICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC88W14+XSo+Py9nbSwgJycpXG4gICAgICAgICAgICAgICAgICAgLnNwbGl0KCcmbmJzcDsnKS5qb2luKCcnKTtcblxuICAgICAgICAgICAgICAgdGhpcy5tc2dBcnJheSA9IHN0cmluZy5zcGxpdCgnJyk7XG4gICAgICAgICAgICAgICBpZiAodGhpcy5tZXNzYWdlQ3VycmVudCAhPT0gc3RyaW5nICYmIHN0cmluZyAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICB0aGlzLm5ld01lc3NhZ2UgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZUN1cnJlbnQgPSBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgdGhpcy5sYXVuY2hMb29wKCk7XG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgIH0qL1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgfSwgMTAwKTtcbiAgICB9XG5cbiAgICBiaW5kQ2FsZW5kYXIoJGV2ZW50OiBhbnkpIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZygnYmluZENhbGVuZGFyICRldmVudCcsICRldmVudClcbiAgICAgICAgZGVsZXRlICRldmVudC5hbGw7XG4gICAgICAgIHRoaXMuY2FsZW5kYXJBdmFpbGFiaWxpdHkgPSAkZXZlbnQ7XG4gICAgfVxuXG4gICAgZ2V0Q2FsZW5kYXIoKSB7XG4gICAgICAgIHRoaXMuc2VuZENhbGVuZGFyLmVtaXQodGhpcy5jYWxlbmRhckF2YWlsYWJpbGl0eSk7XG4gICAgfVxuXG4gICAgc2tpcCgpIHtcbiAgICAgICAgdGhpcy5zZW5kQ2FsZW5kYXIuZW1pdChudWxsKTtcbiAgICB9XG5cbiAgICBsYXVuY2hMb29wKCkge1xuICAgICAgICB0aGlzLnRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMubXNnQXJyYXkubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMudGltZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMubmV3TWVzc2FnZSkge1xuICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0JykuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5uZXdNZXNzYWdlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgLy90aGlzLm1zZ0FycmF5ID0gdGhpcy5tZXNzYWdlQ3VycmVudC5zcGxpdChcIlwiKTtcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMudGltZXIpO1xuICAgICAgICAgICAgICAgIHRoaXMubGF1bmNoTG9vcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5sb29wZXIoKTtcbiAgICAgICAgfSwgNjApO1xuICAgIH1cblxuICAgIGxvb3BlcigpIHtcbiAgICAgICAgaWYgKHRoaXMubXNnQXJyYXkubGVuZ3RoID4gMCAmJiAhdGhpcy5yZWxvYWRlZCkge1xuICAgICAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0JykpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dCcpLmlubmVySFRNTCArPSB0aGlzLm1zZ0FycmF5LnNoaWZ0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pbnB1dFR5cGUgPSBkZWZhdWx0SW5wdXRUeXBlO1xuICAgICAgICB0aGlzLmlucHV0TGltaXQgPSBkZWZhdWx0SW5wdXRMaW1pdDtcbiAgICAgICAgaWYgKHRoaXMuUGxhY2VIb2xkZXIpIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBsYWNlSG9sZGVyID0gdGhpcy5QbGFjZUhvbGRlcltNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLlBsYWNlSG9sZGVyLmxlbmd0aCldO1xuICAgICAgICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFBsYWNlSG9sZGVyID0gdGhpcy5QbGFjZUhvbGRlcltNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLlBsYWNlSG9sZGVyLmxlbmd0aCldO1xuICAgICAgICAgICAgfSwgMzAwMCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1c2VyV3JpdGluZyhrZXk6IGFueSkge1xuICAgICAgICBpZiAoa2V5LmNvZGUgPT09ICdFbnRlcicpIHtcbiAgICAgICAgICAgIHRoaXMuYm90TGlzdGVuaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmJvdExpc3RlbmluZ1RpbWVyID0gMDtcbiAgICAgICAgfSBlbHNlIGlmIChrZXkuY29kZSA9PT0gJ0JhY2tzcGFjZScpIHtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5ib3RMaXN0ZW5pbmcgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKHRoaXMuYm90TGlzdGVuaW5nVGltZXIgPT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuYm90TGlzdGVuaW5nVGltZXIgKz0gMjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5ib3RMaXN0ZW5pbmdUaW1lciA8IDUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJvdExpc3RlbmluZ1RpbWVyICs9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZW1pdCgkZXZlbnQpIHtcbiAgICAgICAgdGhpcy5maXJzdFZpc2l0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMucmVhZHlTZW5kLmVtaXQodHJ1ZSk7XG4gICAgfVxuXG4gICAgcHVibGljIF9zZW5kKCkge1xuICAgICAgICBpZiAodGhpcy5MYXN0Qm90QW5zd2VyPy5lbmRPZlRvcGljICYmIHRoaXMuTGFzdFVzZXJJbnB1dCkge1xuICAgICAgICAgICAgdGhpcy5MYXN0VXNlcklucHV0Lm1lc3NhZ2UgPSAnJztcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYm90TGlzdGVuaW5nID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IHVzZXJEYXRhOiBVc2VySW5wdXQgPSB7XG4gICAgICAgICAgICBtZXNzYWdlOiB0aGlzLnVzZXJJbnB1dCxcbiAgICAgICAgICAgIGRhdGU6IG5ldyBEYXRlKCkudG9Mb2NhbGVUaW1lU3RyaW5nKG5hdmlnYXRvci5sYW5ndWFnZSwge1xuICAgICAgICAgICAgICAgIGhvdXI6ICcyLWRpZ2l0JyxcbiAgICAgICAgICAgICAgICBtaW51dGU6ICcyLWRpZ2l0J1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5zZW5kLmVtaXQodXNlckRhdGEpO1xuICAgICAgICB0aGlzLnVzZXJJbnB1dCA9IG51bGw7XG4gICAgfVxuXG4gICAgYXN5bmMgc2Nyb2xsKHNjcm9sbEhlaWdodDogbnVtYmVyKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxudW1iZXI+KChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKDApO1xuICAgICAgICAgICAgfSwgMzAwKTtcbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBieVBhc3NVc2VySW5wdXQoYm90ZGF0YTogc3RyaW5nLCBpPzogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuc2VuZEJvdENvbW1hbmQuZW1pdChib3RkYXRhKTtcbiAgICB9XG59XG4iLCI8IS0tPGRpdiBjbGFzcz1cImJvdC1jb250YWluZXJcIiAgW2NsYXNzXT1cIklzTW9iaWxlID8gJ2JvdC1tb2JpbGUnIDogJydcIiBbc3R5bGVdPVwieydiYWNrZ3JvdW5kLWNvbG9yJyA6ICcjMTAwNjUyIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDsnfVwiLS0+XG5cbiAgPCEtLTxjYW52YXMgY2xhc3M9XCJvcmItY2FudmFzXCI+PC9jYW52YXM+XG4gIDxkaXYgY2xhc3M9XCJvdmVybGF5XCI+XG4gICAgPGRpdiBjbGFzcz1cIm92ZXJsYXlfX2lubmVyXCI+XG4gICAgPC9kaXY+XG4gIDwvZGl2Pi0tPlxuICA8ZGl2IGNsYXNzPVwiYm90LWNvbnRhaW5lclwiICBbY2xhc3NdPVwiSXNNb2JpbGUgPyAnYm90LW1vYmlsZScgOiAnJ1wiIFtzdHlsZV09XCJ7J2JhY2tncm91bmQtY29sb3InIDogJyMxMDA2NTIgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94Oyd9XCJcbiAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L2h0bWxcIj5cbiAgPGRpdiBjbGFzcz1cImJvdC12aWV3XCI+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImZpcnN0VmlzaXQgJiYgZmlyc3RVc2FnZVN0b3J5XCI+XG4gICAgICA8Ym90LWZpcnN0LXZpc2l0IFtmaXJzdFVzYWdlU3RvcnldPVwiZmlyc3RVc2FnZVN0b3J5XCIgW2Fzc2V0c109XCJhc3NldHNcIlxuICAgICAgICAgICAgICAgICAgICAgICAocmVhZHkpPVwiZW1pdCgkZXZlbnQpXCI+PC9ib3QtZmlyc3QtdmlzaXQ+XG4gICAgPC9uZy1jb250YWluZXI+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFmaXJzdFZpc2l0IHx8ICFmaXJzdFVzYWdlU3RvcnlcIj5cbiAgICAgIDxidXR0b24gKGNsaWNrKT1cImJ5UGFzc1VzZXJJbnB1dCgnZXhpdCcsIDApXCIgaWQ9XCJleGl0LWJ0blwiIHN0eWxlPVwiZGlzcGxheTogbm9uZTtcIj48L2J1dHRvbj5cblxuICAgICAgPGRpdiBjbGFzcz1cImJvdC1hc3Npc3RhbnQtd3JhcHBlclwiICpuZ0lmPVwiQXNzaXN0YW50TW9kZVwiPlxuICAgICAgICA8IS0tIFRPRE8gZG8gd2UgbmVlZCBpZCwgcmVtb3ZlIGl0PyAtLT5cbiAgICAgICAgPCEtLTxkaXYgKm5nSWY9XCIhYm90TGlzdGVuaW5nXCIgY2xhc3M9XCJib3QtbG9nb1wiIGlkPVwiYm90bG9nb1wiPlxuICAgICAgICAgIDxpbWcgW3NyY109XCJhc3NldHMuRnVsbFNpemVMb2dvXCI+XG4gICAgICAgIDwvZGl2Pi0tPlxuICAgICAgICA8IS0tPGRpdiBbbmdTdHlsZV09XCJ7J2hlaWdodCc6ICc0MCUnfVwiIGNsYXNzPVwiYm90LWxvZ28gYm90LWxpc3RlbmluZ1wiPlxuICAgICAgICAgIDxkaXYgW25nU3R5bGVdPVwieyd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlWSgtMTB2aCknfVwiIGNsYXNzPVwibS1jYXJsLW5vdGlmaWNhdGlvblwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm0tY2FybC1ub3RpZmljYXRpb24tY3VlIG0tY3VlXCI+XG4gICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJib3RMaXN0ZW5pbmdcIiBjbGFzcz1cImEtY3VlLXZvaWNlXCIgaWQ9XCJib3RcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYS1jdWUtdm9pY2UtZWwgdm9pY2UxXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImEtY3VlLXZvaWNlLWVsIHZvaWNlMlwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhLWN1ZS12b2ljZS1lbCB2b2ljZTNcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYS1jdWUtdm9pY2UtZWwgdm9pY2U0XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImEtY3VlLXZvaWNlLWVsXCI+PC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYS1jdWUtaWNvblwiIGlkPVwiYm90LWljb25cIj48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj4tLT5cblxuICAgICAgICA8ZGl2IFtARmFkZVNsaWRlSW5PdXRLb252ZXJzb09wYWNpdHlPdXRdPVwiYW5pbWF0aW9ucy5GYWRlU2xpZGVJbk91dChhbmltYXRpb25UVFgsIGFuaW1hdGlvblNsaWRlVmFsdWUpXCIgW25nU3R5bGVdPVwieydoZWlnaHQnOiAnNDAlJ31cIiBjbGFzcz1cImJvdFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGUxXCI+PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZTJcIj48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlM1wiPjwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2ICBjbGFzcz1cImJvdC1kaXNjdXNzaW9uLXdyYXBwZXJcIiBzdHlsZT1cIm1pbi1oZWlnaHQ6IDYwJTsgbWF4LWhlaWdodDogNjAlOyBoZWlnaHQ6IDYwJTsgLyptYXgtaGVpZ2h0OiAxMjBweDsqL1wiPlxuICAgICAgICAgIDwhLS0gVVNFUiBJTlBVVCAtLT5cbiAgICAgICAgICA8ZGl2IFtjbGFzcy51c2VyLWlucHV0LWNvbnRhaW5lci1vdXRlci1oaWRkZW5dPVwiIXNob3dVc2VySW52aXRhdGlvblwiIGNsYXNzPVwib3ZlcmZsb3ctaGlkZGVuIGQtZmxleCBmbGV4LWNvbHVtbiB3LTEwMCBwb3NpdGlvbi1yZWxhdGl2ZSB1c2VyLWlucHV0LWNvbnRhaW5lci1vdXRlclwiPlxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIihMYXN0VXNlcklucHV0ICYmICFhZnRlclByb2Nlc3MpIHx8ICFzaG93VXNlckludml0YXRpb25cIj5cbiAgICAgICAgICAgICAgPGRpdiBbQEZhZGVTbGlkZUluT3V0S29udmVyc29IZWlnaHRUZXN0XT1cImFuaW1hdGlvbnMuRmFkZVNsaWRlSW5PdXQoYW5pbWF0aW9uSGVpZ2h0VFRYKjEuNSwgYW5pbWF0aW9uU2xpZGVWYWx1ZSlcIiBjbGFzcz1cIm92ZXJmbG93LWhpZGRlbiBkLWZsZXggZmxleC1jb2x1bW4gdy0xMDAgdXNlci1pbnB1dC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IFtARmFkZVNsaWRlSW5PdXRLb252ZXJzb1RyYW5zbGF0ZU91dFRlc3RdPVwiYW5pbWF0aW9ucy5GYWRlU2xpZGVJbk91dChhbmltYXRpb25UVFgqMS41LCBhbmltYXRpb25TbGlkZVZhbHVlKVwiIFtjbGFzcy51c2VyLWlucHV0LXRvcF09XCJMYXN0VXNlcklucHV0Py5tZXNzYWdlICE9ICcnXCIgIGNsYXNzPVwidXNlci1pbnB1dFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRhdGFcIiBbc3R5bGVdPVwie1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvciA6IGFzc2V0cz8uQ29sb3JTZXQ/LlNlY29uZGFyeVxuICAgICAgICAgICAgICAgICAgICAgICAgfVwiIFtpbm5lckhUTUxdPVwiTGFzdFVzZXJJbnB1dC5tZXNzYWdlXCI+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGltZVwiPnt7TGFzdFVzZXJJbnB1dC5kYXRlfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8IS0tIEJPVCBBTlNXRVIgLS0+XG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIkxhc3RCb3RBbnN3ZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3NpdGlvbi1yZWxhdGl2ZSBib3QtYW5zd2VyXCI+XG4gICAgICAgICAgICAgIDxkaXYgW2NsYXNzLm10LTRdPVwiIXNob3dVc2VySW52aXRhdGlvblwiIGNsYXNzPVwiZC1mbGV4IGZsZXgtY29sdW1uIHctMTAwIHBvc2l0aW9uLXJlbGF0aXZlIGJvdC1hbnN3ZXJfX3RleHRcIj5cblxuICAgICAgICAgICAgICAgIDwhLS0gQk9UIEFOU1dFUiBURVhUIC0tPlxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJMYXN0Qm90QW5zd2VyLnRleHRcIj5cbiAgICAgICAgICAgICAgICAgIDwhLS08c3BhbiAqbmdJZj1cIiFMYXN0Qm90QW5zd2VyLnRleHQuaW5jbHVkZXMoJ2xvYWRpbmctZG90cycpXCIgaWQ9XCJ0ZXh0XCI+PC9zcGFuPjxicj4tLT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJMYXN0Qm90QW5zd2VyPy50ZXh0Py5pbmNsdWRlcygnbG9hZGluZy1kb3RzJylcIiAgY2xhc3M9XCJ3LTEwMCB0YWNcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0YWNcIiBbaW5uZXJIVE1MXT1cIkxhc3RCb3RBbnN3ZXIudGV4dCB8IHNhZmVIdG1sXCI+PC9zcGFuPjxicj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIUxhc3RCb3RBbnN3ZXI/LnRleHQ/LmluY2x1ZGVzKCdsb2FkaW5nLWRvdHMnKSAmJiBjaGFuZ2VkICYmIHNob3dUZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIFtARmFkZVNsaWRlSW5PdXRLb252ZXJzb1RyYW5zbGF0ZU91dF09XCJhbmltYXRpb25zLkZhZGVTbGlkZUluT3V0KGFuaW1hdGlvblRUWCwgLTEwMClcIiBjbGFzcz1cInctMTAwIGp1c3RpZnktY29udGVudC1jZW50ZXJcIiBbaW5uZXJIVE1MXT1cIkxhc3RCb3RBbnN3ZXIudGV4dCB8IHNhZmVIdG1sXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWFmdGVyUHJvY2Vzc1wiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBpZD1cImxvYWRpbmctY3JlYXRpb25cIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIkxhc3RCb3RBbnN3ZXIubWVkaWFzICYmIExhc3RCb3RBbnN3ZXIubWVkaWFzLmxlbmd0aFxuICAgICAgICAgICAgICAgICYmIExhc3RCb3RBbnN3ZXIubWVkaWFzWzBdLnJlcXVpcmVkX2FjdGlvbnNcbiAgICAgICAgICAgICAgICAmJiBMYXN0Qm90QW5zd2VyLm1lZGlhc1swXS5yZXF1aXJlZF9hY3Rpb25zLmxlbmd0aCA+IDBcbiAgICAgICAgICAgICAgICAmJiAhTGFzdEJvdEFuc3dlcj8udGV4dD8uaW5jbHVkZXMoJ2xvYWRpbmctZG90cycpXCI+XG4gICAgICAgICAgICAgICAgPCEtLSBCT1QgQU5TV0VSIEJVVFRPTlMgLS0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm10MzUgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgdy0xMDAgcG9zaXRpb24tcmVsYXRpdmUgYm90LWFuc3dlcl9fYnV0dG9uc1wiPlxuICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgc3VnZ2VzdCBvZiBMYXN0Qm90QW5zd2VyLm1lZGlhc1swXS5yZXF1aXJlZF9hY3Rpb25zOyBsZXQgaSA9IGluZGV4XCI+XG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJzdWdnZXN0LmZvcm1hdCA9PT0gJ2J1dHRvbidcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgW0BGYWRlU2xpZGVJbk91dEtvbnZlcnNvVHJhbnNsYXRlT3V0XT1cImFuaW1hdGlvbnMuRmFkZVNsaWRlSW5PdXQoYW5pbWF0aW9uVFRYLCAtMTAwKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwic3VnZ2VzdC52YWx1ZT8udGl0bGUgPT0gJ1Rlcm1pbmVyJyAmJiBjaGFuZ2VkIHx8IHN1Z2dlc3QudmFsdWU/LnRpdGxlID09ICdRdWl0JyAmJiBjaGFuZ2VkXCIgW3N0eWxlXT1cIntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvciA6IGFzc2V0cz8uQ29sb3JTZXQ/LlByaW1hcnksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3IgOiBhc3NldHM/LkNvbG9yU2V0Py5QcmltYXJ5XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJvdC1idXR0b24gYm90LWJ1dHRvbi1sZWZ0IHNob3ctYnRuXCIgKGNsaWNrKT1cImJ5UGFzc1VzZXJJbnB1dChzdWdnZXN0Py52YWx1ZT8ub25DbGljaywgaSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBbaW5uZXJIVE1MXT1cInN1Z2dlc3QubGFiZWx8fCBzdWdnZXN0LnZhbHVlPy5kaXNwbGF5ZWRNZXNzYWdlIHx8IHN1Z2dlc3QudmFsdWU/LnRpdGxlIFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtARmFkZVNsaWRlSW5PdXRLb252ZXJzb1RyYW5zbGF0ZU91dF09XCJhbmltYXRpb25zLkZhZGVTbGlkZUluT3V0KGFuaW1hdGlvblRUWCwgLTEwMClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cInN1Z2dlc3QudmFsdWU/LnRpdGxlID09ICdOb3V2ZWxsZSBEZW1hbmRlJyAmJiBjaGFuZ2VkIHx8IHN1Z2dlc3QudmFsdWU/LnRpdGxlID09ICdOZXcgUmVxdWVzdCcgJiYgY2hhbmdlZFwiIFtzdHlsZV09XCJ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3IgOiBhc3NldHM/LkNvbG9yU2V0Py5QcmltYXJ5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yIDogYXNzZXRzPy5Db2xvclNldD8uUHJpbWFyeVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJib3QtYnV0dG9uIGJvdC1idXR0b24tcmlnaHQgc2hvdy1idG5cIiAoY2xpY2spPVwiYnlQYXNzVXNlcklucHV0KHN1Z2dlc3Q/LnZhbHVlPy5vbkNsaWNrLCBpKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtpbm5lckhUTUxdPVwic3VnZ2VzdC5sYWJlbHx8IHN1Z2dlc3QudmFsdWU/LmRpc3BsYXllZE1lc3NhZ2UgfHwgc3VnZ2VzdC52YWx1ZT8udGl0bGUgXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgW0BGYWRlU2xpZGVJbk91dEtvbnZlcnNvVHJhbnNsYXRlT3V0XT1cImFuaW1hdGlvbnMuRmFkZVNsaWRlSW5PdXQoYW5pbWF0aW9uVFRYLCAtMTAwKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwic3VnZ2VzdC52YWx1ZT8udGl0bGUgJiYgc3VnZ2VzdC52YWx1ZT8udGl0bGUgIT0gJ1Rlcm1pbmVyJyAmJiBzdWdnZXN0LnZhbHVlPy50aXRsZSAhPSAnUXVpdCcgJiYgc3VnZ2VzdC52YWx1ZT8udGl0bGUgIT0gJ05vdXZlbGxlIERlbWFuZGUnICYmIHN1Z2dlc3QudmFsdWU/LnRpdGxlICE9ICdOZXcgUmVxdWVzdCcgJiYgY2hhbmdlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW3N0eWxlXT1cIntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvciA6IGFzc2V0cz8uQ29sb3JTZXQ/LlByaW1hcnksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3IgOiBhc3NldHM/LkNvbG9yU2V0Py5QcmltYXJ5XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJvdC1idXR0b24gYm90LWJ1dHRvbi1ncmV5IHNob3ctYnRuXCIgKGNsaWNrKT1cImJ5UGFzc1VzZXJJbnB1dChzdWdnZXN0Py52YWx1ZT8ub25DbGljaywgaSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBbaW5uZXJIVE1MXT1cInN1Z2dlc3QubGFiZWx8fCBzdWdnZXN0LnZhbHVlPy5kaXNwbGF5ZWRNZXNzYWdlIHx8IHN1Z2dlc3QudmFsdWU/LnRpdGxlIFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImRpc2FibGVVc2VySW5wdXRcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3NpdGlvbi1yZWxhdGl2ZSBib3QtYW5zd2VyX19kaXNhYmxlLWlucHV0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgW0BGYWRlU2xpZGVJbk91dEtvbnZlcnNvVHJhbnNsYXRlT3V0XT1cImFuaW1hdGlvbnMuRmFkZVNsaWRlSW5PdXQoYW5pbWF0aW9uVFRYLCAtMTAwKVwiIGNsYXNzPVwiYm90LWlucHV0LWRpc2FibGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aT57eyBzZWxlY3QgfX08L2k+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICA8IS0tIEJPVCBBTlNXRVIgQlVUVE9OUyAtLT5cblxuICAgICAgICAgICAgICA8IS0tPG5nLWNvbnRhaW5lciAqbmdJZj1cImFmdGVyUHJvY2VzcyAmJiBjb25maWcuQWZ0ZXJQcm9jZXNzU2NlbmFyaW8uRm9ybUVsZW1lbnRzLmxlbmd0aCA+IDBcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWZ0ZXItcHJvY2Vzcy1mb3JtXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWZ0ZXItcHJvY2Vzcy1zdWJmb3JtXCIgKm5nRm9yPVwibGV0IGZvcm1FbGVtZW50cyBvZiBjb25maWcuQWZ0ZXJQcm9jZXNzU2NlbmFyaW8uRm9ybUVsZW1lbnRzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGZvcm0gb2YgZm9ybUVsZW1lbnRzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciBbbmdTd2l0Y2hdPVwiZm9ybS50eXBlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ1N3aXRjaENhc2U9XCInY2hlY2tib3gnXCIgW25nU3R5bGVdPVwieydkaXNwbGF5JzogZm9ybT8uZGlzcGxheSA/IGZvcm0uZGlzcGxheTogJ2Jsb2NrJ31cIiBjbGFzcz1cImJvdC1jaGVja2JveFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgW2NoZWNrZWRdPVwiZm9ybT8uY2hlY2tlZCA9PSB0cnVlID8gJ3RydWUnOiAnZmFsc2UnXCIgW2lkXT1cImZvcm0/LmlkXCIgW25hbWVdPVwiZm9ybT8uaWRcIiBbdHlwZV09J2Zvcm0/LnR5cGUnIHZhbHVlPVwiZmFsc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIFtmb3JdPVwiZm9ybT8uaWRcIiBjbGFzcz1cImJvdC1jaGVja2JveC1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHRyYW5zbGF0ZS50cmFuc2xhdGUoc2VydmljZS5sb2NhbGUsIGZvcm0ubGFiZWwpIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFtjbGFzc109XCJmb3JtPy5jbGFzc1wiIFtpZF09XCJmb3JtPy5pZFwiIFtuZ1N0eWxlXT1cInsnZGlzcGxheSc6IGZvcm0/LmRpc3BsYXkgPyBmb3JtLmRpc3BsYXk6ICdibG9jayd9XCIgKm5nU3dpdGNoQ2FzZT1cIid0ZXh0J1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBbcGF0dGVybl09XCJmb3JtPy5wYXR0ZXJuXCIgW3BsYWNlaG9sZGVyXT1cImZvcm0/LnBsYWNlaG9sZGVyXCIgW3R5cGVdPVwiZm9ybT8udHlwZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbdmFsdWVdPVwiZm9ybT8udmFsdWVcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBbY2xhc3NdPVwiZm9ybT8uY2xhc3NcIiAqbmdTd2l0Y2hDYXNlPVwiJ2RpdidcIiBbbmdTdHlsZV09XCJ7J2Rpc3BsYXknOiBmb3JtPy5kaXNwbGF5ID8gZm9ybS5kaXNwbGF5OiAnYmxvY2snfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7eyB0cmFuc2xhdGUudHJhbnNsYXRlKHNlcnZpY2UubG9jYWxlLCBmb3JtPy5jb250ZW50KSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBbY2xhc3NdPVwiZm9ybT8uY2xhc3NcIiBbaWRdPVwiZm9ybT8uaWRcIiAqbmdTd2l0Y2hDYXNlPVwiJ3RleHRhcmVhJ1wiIFtuZ1N0eWxlXT1cInsnZGlzcGxheSc6IGZvcm0/LmRpc3BsYXkgPyBmb3JtLmRpc3BsYXk6ICdibG9jayd9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtwbGFjZWhvbGRlcl09XCJ0cmFuc2xhdGUudHJhbnNsYXRlKHNlcnZpY2UubG9jYWxlLCBmb3JtPy5wbGFjZWhvbGRlcilcIj48L3RleHRhcmVhPlxuICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj4tLT5cblxuICAgICAgICAgICAgICA8Y3VzdG9tLWNoZWNrYm94LWNhbGVuZGFyXG4gICAgICAgICAgICAgICAgW0BGYWRlU2xpZGVJbk91dEtvbnZlcnNvSGVpZ2h0VGVzdF09XCJhbmltYXRpb25zLkZhZGVTbGlkZUluT3V0KGFuaW1hdGlvblRUWCwgYW5pbWF0aW9uU2xpZGVWYWx1ZSlcIlxuICAgICAgICAgICAgICAgICpuZ0lmPVwiYWZ0ZXJQcm9jZXNzXCJcbiAgICAgICAgICAgICAgICBbc3RhdGVdPVwiYWZ0ZXJQcm9jZXNzXCJcbiAgICAgICAgICAgICAgICAoY2FsZW5kYXJDaGFuZ2UpPVwiYmluZENhbGVuZGFyKCRldmVudClcIlxuICAgICAgICAgICAgICAgIFtjYWxlbmRhclRlbXBsYXRlXT1cImNhbGVuZGFyVGVtcGxhdGVcIlxuICAgICAgICAgICAgICAgIFtjb2x1bW5PdmVycmlkZV09XCJjYWxlbmRhcktleU92ZXJyaWRlXCI+XG4gICAgICAgICAgICAgIDwvY3VzdG9tLWNoZWNrYm94LWNhbGVuZGFyPlxuXG4gICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpbnB1dFR5cGUgPT09ICdudW1iZXInXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBbQEZhZGVTbGlkZUluT3V0S29udmVyc29PcGFjaXR5T3V0XT1cImFuaW1hdGlvbnMuRmFkZVNsaWRlSW5PdXQoYW5pbWF0aW9uVFRYLCBhbmltYXRpb25TbGlkZVZhbHVlKVwiIGNsYXNzPVwiYm90LWlucHV0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTxpbnB1dCBbdHlwZV09XCJpbnB1dFR5cGVcIiBbKG5nTW9kZWwpXT1cInVzZXJJbnB1dFwiIChrZXl1cC5lbnRlcik9XCJ1c2VySW5wdXQgJiYgX3NlbmQoKVwiIChrZXl1cCk9XCJ1c2VyV3JpdGluZygkZXZlbnQpXCIgbWluPVwiMlwiIFttYXhdPVwiaW5wdXRMaW1pdFwiXG4gICAgICAgICAgICAgICAgICAgICAgIFtwbGFjZWhvbGRlcl09XCJjdXJyZW50UGxhY2VIb2xkZXJcIj4tLT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1udW1iZXItZGl2XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1udW1iZXItZGl2LWFycm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwiY2hhbmdlTnVtYmVyKDEpXCIgY2xhc3M9XCJhcnJvdy11cCBtdDVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxuYi1pY29uIFtpY29uXT1cIid1cF8yJ1wiIFtzaXplXT1cIjEuNVwiPjwvbmItaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gKGNsaWNrKT1cImNoYW5nZU51bWJlcigtMSlcIiBjbGFzcz1cImFycm93LWRvd25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxuYi1pY29uIFtpY29uXT1cIidkb3duXzInXCIgW3NpemVdPVwiMS41XCI+PC9uYi1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgWyhuZ01vZGVsKV09XCJpbXBhY3RcIiAoa2V5dXApPVwiY2hhbmdlTnVtYmVySW5wdXQoaW1wYWN0KVwiIGNsYXNzPVwibmItaW1wYWN0LWlucHV0XCIgXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIiBtaW49XCIxXCJcbiAgICAgICAgICAgICAgICAgICAgb25pbnB1dD1cInJldHVybiBldmVudC5jaGFyQ29kZSA+PSA0OCAmJiBldmVudC5jaGFyQ29kZSA8PSA1NyAmJiAodmFsaWRpdHkudmFsaWR8fCh2YWx1ZT0nMScpKVwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm90LWNvbnRhaW5lci1idG5cIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJvdC1idXR0b24gc2VuZC1idG4gaW5wdXQtbnVtYmVyLWJ0biBzaG93VXNlcklucHV0Q29udHJvbHNcIiBbc3R5bGVdPVwie1xuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvciA6IGFzc2V0cz8uQ29sb3JTZXQ/LlByaW1hcnksXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3IgOiBhc3NldHM/LkNvbG9yU2V0Py5TZWNvbmRhcnlcbiAgICAgICAgICAgICAgICAgIH1cIiAoY2xpY2spPVwiX3NlbmQoKTtzaG93VXNlcklucHV0Q29udHJvbHM9ZmFsc2U7c2hvd1VzZXJJbnZpdGF0aW9uPSFzaG93VXNlckludml0YXRpb247XCIgXG4gICAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiIXVzZXJJbnB1dCB8fCBpbnB1dFR5cGUgPT09ICdudW1iZXInICYmIGltcGFjdCA8IDFcIj5cblxuICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpbnB1dFR5cGUgPT09ICdudW1iZXInXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7eyBzZW5kQnRuIH19XG4gICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9zaXRpb24tcmVsYXRpdmUgYm90LWlucHV0LXdyYXBwZXJcIj5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJhZnRlclByb2Nlc3MgJiYgY29uZmlnLkFmdGVyUHJvY2Vzc1NjZW5hcmlvLkZvcm1CdXR0b25zLmxlbmd0aCA+IDBcIj5cbiAgICAgICAgICAgICAgPCEtLTxidXR0b24gW2NsYXNzXT1cImJ0bi5jbGFzc1wiICpuZ0Zvcj1cImxldCBidG4gb2YgY29uZmlnLkFmdGVyUHJvY2Vzc1NjZW5hcmlvLkZvcm1CdXR0b25zXCIgW25nU3R5bGVdPVwieydkaXNwbGF5JzogYnRuPy5kaXNwbGF5ID8gYnRuLmRpc3BsYXk6ICdibG9jayd9XCI+XG4gICAgICAgICAgICAgICAge3sgdHJhbnNsYXRlLnRyYW5zbGF0ZShzZXJ2aWNlLmxvY2FsZSwgYnRuLmxhYmVsKSB9fVxuICAgICAgICAgICAgICA8L2J1dHRvbj4tLT5cbiAgICAgICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwiZ2V0Q2FsZW5kYXIoKVwiIGNsYXNzPVwicHJpbWFyeSByb3VuZGVkIHZhbGlkYXRlLWFmdGVyLWJ0blwiIHN0eWxlPVwiZGlzcGxheTogaW5saW5lLWJsb2NrO1wiPlxuICAgICAgICAgICAgICAgIHt7IHRyYW5zbGF0ZS50cmFuc2xhdGUoc2VydmljZS5sb2NhbGUsICdWQUxJREFURV9BVkFJTEFCSUxJVFknKSB9fVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwicm91bmRlZCBzZWNvbmRhcnkgc2tpcC1hZnRlci1idG5cIiBzdHlsZT1cImRpc3BsYXk6IGlubGluZS1ibG9jaztcIiAoY2xpY2spPVwic2tpcCgpXCI+XG4gICAgICAgICAgICAgICAge3sgdHJhbnNsYXRlLnRyYW5zbGF0ZShzZXJ2aWNlLmxvY2FsZSwgJ1NLSVAnKSB9fVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWFmdGVyUHJvY2VzcyAmJiBzaG93VXNlcklucHV0Q29udHJvbHMgJiYgaW5wdXRUeXBlICE9PSAnbnVtYmVyJ1wiPlxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWRpc2FibGVVc2VySW5wdXQgJiYgc2hvd0lucHV0XCI+XG4gICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cIiFMYXN0Qm90QW5zd2VyPy50ZXh0Py5pbmNsdWRlcygnbG9hZGluZy1kb3RzJylcIiBjbGFzcz1cImQtZmxleCBmbGV4LWNvbHVtbiB3LTEwMCBwb3NpdGlvbi1yZWFsdGl2ZSBib3QtaW5wdXRcIiBpZD1cImJvdC1pbnB1dC1kaXZcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgW0BGYWRlU2xpZGVJbk91dEtvbnZlcnNvVHJhbnNsYXRlT3V0XT1cImFuaW1hdGlvbnMuRmFkZVNsaWRlSW5PdXQoYW5pbWF0aW9uVFRYLCBhbmltYXRpb25TbGlkZVZhbHVlQWRkKVwiIGNsYXNzPVwidy0xMDAgaC0xMDAgZC1mbGV4IGZsZXgtY29sdW1uIHBvc2l0aW9uLWFic29sdXRlIGJvdC1pbnB1dF9fY29udHJvbHNcIj5cblxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaW5wdXRUeXBlID09PSAndGV4dCdcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgWyhuZ01vZGVsKV09XCJ1c2VySW5wdXRcIiAoa2V5dXAuZW50ZXIpPVwidXNlcklucHV0ICYmIF9zZW5kKClcIiAoa2V5dXApPVwidXNlcldyaXRpbmcoJGV2ZW50KVwiIFttYXhsZW5ndGhdPVwiaW5wdXRMaW1pdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwiY3VycmVudFBsYWNlSG9sZGVyXCI+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImlucHV0VHlwZSAhPT0gJ251bWJlcidcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm90LWNvbnRhaW5lci1idG5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJib3QtYnV0dG9uIHNlbmQtYnRuXCIgW3N0eWxlXT1cIntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yIDogYXNzZXRzPy5Db2xvclNldD8uUHJpbWFyeSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3IgOiBhc3NldHM/LkNvbG9yU2V0Py5TZWNvbmRhcnl9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cIl9zZW5kKClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiIXVzZXJJbnB1dFwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpbnB1dFR5cGUgIT09ICdudW1iZXInXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgc2VuZEJ0bk1zZyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tPG5nLWNvbnRhaW5lciAqbmdJZj1cImlucHV0VHlwZSA9PT0gJ251bWJlcidcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBzZW5kQnRuIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPi0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gPGJ1dHRvbiAqbmdJZj1cImlucHV0VHlwZSAhPT0gJ251bWJlcicgJiYgSXNNb2JpbGVcIiBjbGFzcz1cImJvdC1idXR0b24tc2NyZWVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxuYi1pY29uIFtpY29uXT1cIidzY2FuXzExJ1wiIFtzaXplXT1cIjEuNVwiPjwvbmItaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge3sgYnRuU2NyZWVuIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj4gLS0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gKm5nSWY9XCJpbnB1dFR5cGUgIT09ICdudW1iZXInXCIgY2xhc3M9XCJib3QtYnV0dG9uLWF0dGFjaFwiIChjbGljayk9XCJvcGVuVXBsb2FkLmVtaXQodHJ1ZSlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge3sgbmJGaWxlcyB9fVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJuYkZpbGVzIDw9IDFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyB0cmFuc2xhdGUudHJhbnNsYXRlKHNlcnZpY2UubG9jYWxlLCAnQVRUQUNITUVOVCcpIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJuYkZpbGVzID4gMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHRyYW5zbGF0ZS50cmFuc2xhdGUoc2VydmljZS5sb2NhbGUsICdBVFRBQ0hNRU5UUycpIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxuYi1pY29uIFtpY29uXT1cIidhdHRhY2htZW50J1wiIFtzaXplXT1cIjEuNVwiPjwvbmItaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJib3QtY2hhdC13cmFwcGVyXCIgKm5nSWY9XCIhQXNzaXN0YW50TW9kZVwiPlxuICAgICAgICB7e0Fzc2lzdGFudE1vZGV9fVxuICAgICAgICA8ZGl2IGNsYXNzPVwiYm90LWRpc2N1c3Npb24td3JhcHBlclwiICNzY3JvbGxNZSBbc2Nyb2xsVG9wXT1cInNjcm9sbE1lLnNjcm9sbFRvKDAsIDk5OTk5OTkpXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImJvdC1jaGF0XCI+XG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBlbnRyeSBvZiBkaXNwbGF5RGF0YVwiPlxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZW50cnkuZGF0ZVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgW0BGYWRlU2xpZGVJbk91dEtvbnZlcnNvVHJhbnNsYXRlT3V0XT1cImFuaW1hdGlvbnMuRmFkZVNsaWRlSW5PdXQoYW5pbWF0aW9uVFRYLCBhbmltYXRpb25TbGlkZVZhbHVlKVwiIGNsYXNzPVwidXNlci1pbnB1dFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRhdGFcIiBbc3R5bGVdPVwie1xuICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yIDogYXNzZXRzPy5Db2xvclNldD8uUHJpbWFyeSxcbiAgICAgICAgICAgICAgICAgICAgIGNvbG9yIDogYXNzZXRzPy5Db2xvclNldD8uU2Vjb25kYXJ5XG4gICAgICAgICAgICAgICAgICAgIH1cIiBbaW5uZXJIVE1MXT1cImVudHJ5Lm1lc3NhZ2VcIj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0aW1lXCI+e3tlbnRyeS5kYXRlfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWVudHJ5LmRhdGVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm90LWFuc3dlclwiPlxuICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImVudHJ5LnRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJjaGFuZ2VkXCIgY2xhc3M9XCJcIiBbaW5uZXJIVE1MXT1cImVudHJ5LnRleHQgfCBzYWZlSHRtbFwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImVudHJ5Lm1lZGlhcyAmJiBlbnRyeS5tZWRpYXMubGVuZ3RoXG4gICAgICAgICAgICAgICAgICAgJiYgZW50cnkubWVkaWFzWzBdLnJlcXVpcmVkX2FjdGlvbnNcbiAgICAgICAgICAgICAgICAgICAmJiBlbnRyeS5tZWRpYXNbMF0ucmVxdWlyZWRfYWN0aW9ucy5sZW5ndGhcIj5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgc3VnZ2VzdCBvZiBlbnRyeS5tZWRpYXNbMF0ucmVxdWlyZWRfYWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJzdWdnZXN0LmZvcm1hdCA9PT0gJ2J1dHRvbidcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gKm5nSWY9XCJjaGFuZ2VkXCIgW3N0eWxlXT1cIntcbiAgICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yIDogYXNzZXRzPy5Db2xvclNldD8uUHJpbWFyeSxcbiAgICAgICAgICAgICAgICAgICAgIGNvbG9yIDogYXNzZXRzPy5Db2xvclNldD8uUHJpbWFyeVxuICAgICAgICAgICAgfVwiIGNsYXNzPVwiYm90LWJ1dHRvblwiIChjbGljayk9XCJieVBhc3NVc2VySW5wdXQoc3VnZ2VzdD8udmFsdWU/Lm9uQ2xpY2spXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2lubmVySFRNTF09XCJzdWdnZXN0LmxhYmVsfHwgc3VnZ2VzdC52YWx1ZT8uZGlzcGxheWVkTWVzc2FnZSB8fCBzdWdnZXN0LnZhbHVlPy50aXRsZSBcIj48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImJvdC1pbnB1dC13cmFwcGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImJvdC1pbnB1dFwiICpuZ0lmPVwiIWRpc2FibGVVc2VySW5wdXQgJiYgc2hvd0lucHV0XCI+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBbKG5nTW9kZWwpXT1cInVzZXJJbnB1dFwiIChrZXl1cC5lbnRlcik9XCJ1c2VySW5wdXQgJiYgX3NlbmQoKVwiIChrZXl1cCk9XCJ1c2VyV3JpdGluZygkZXZlbnQpXCIgbWF4bGVuZ3RoPVwiMjAwXCJcbiAgICAgICAgICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwiY3VycmVudFBsYWNlSG9sZGVyXCI+XG4gICAgICAgICAgICA8YnV0dG9uICpuZ0lmPVwiY2hhbmdlZFwiIGNsYXNzPVwiYm90LWJ1dHRvblwiIFtzdHlsZV09XCJ7XG4gICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3IgOiBhc3NldHM/LkNvbG9yU2V0Py5QcmltYXJ5LFxuICAgICAgICAgICAgICAgICAgICAgY29sb3IgOiBhc3NldHM/LkNvbG9yU2V0Py5TZWNvbmRhcnlcbiAgICAgICAgICAgIH1cIiAoY2xpY2spPVwiX3NlbmQoKVwiIFtkaXNhYmxlZF09XCIhdXNlcklucHV0XCI+e3sgc2VuZEJ0biB9fVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImJvdC1pbnB1dC1kaXNhYmxlXCIgKm5nSWY9XCJkaXNhYmxlVXNlcklucHV0XCI+XG4gICAgICAgICAgICA8aT57eyBzZWxlY3QgfX08L2k+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYm90LWxvZ29cIj5cbiAgICAgICAgICA8aW1nIFtzcmNdPVwiYXNzZXRzLkZ1bGxTaXplTG9nb1wiPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmctY29udGFpbmVyPlxuXG4gIDwvZGl2PlxuPC9kaXY+XG4iXX0=