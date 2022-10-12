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
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "div", 41)(10, "button", 42);
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
    i0.ɵɵtextInterpolate1(" ", ctx_r13.userInput, " ");
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
    i0.ɵɵelementStart(1, "button", 43);
    i0.ɵɵlistener("click", function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_10_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r45); const ctx_r44 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r44.getCalendar()); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 44);
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
    i0.ɵɵelementStart(1, "textarea", 47);
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
    i0.ɵɵelementStart(0, "button", 51);
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
    i0.ɵɵelementStart(0, "button", 52);
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
    i0.ɵɵelementStart(1, "div", 41)(2, "button", 48);
    i0.ɵɵlistener("click", function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_11_ng_container_1_ng_container_4_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r62); const ctx_r61 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r61._send()); });
    i0.ɵɵtemplate(3, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_11_ng_container_1_ng_container_4_ng_container_3_Template, 2, 1, "ng-container", 2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_11_ng_container_1_ng_container_4_button_4_Template, 3, 3, "button", 49);
    i0.ɵɵtemplate(5, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_11_ng_container_1_ng_container_4_button_5_Template, 5, 5, "button", 50);
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
    i0.ɵɵelementStart(1, "div", 45)(2, "div", 46);
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
    i0.ɵɵelement(0, "span", 64);
    i0.ɵɵpipe(1, "safeHtml");
} if (rf & 2) {
    const entry_r67 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(1, 1, entry_r67.text), i0.ɵɵsanitizeHtml);
} }
function DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_2_ng_container_2_span_1_Template, 2, 3, "span", 63);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r71 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r71.changed);
} }
function DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_2_ng_container_3_ng_container_1_ng_container_1_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r81 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 66);
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
    i0.ɵɵtemplate(1, DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_2_ng_container_3_ng_container_1_ng_container_1_button_1_Template, 1, 6, "button", 65);
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
    i0.ɵɵelementStart(1, "div", 62);
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
    i0.ɵɵelementStart(0, "button", 69);
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
    i0.ɵɵelementStart(0, "div", 35)(1, "input", 67);
    i0.ɵɵlistener("ngModelChange", function DesktopFullScreenComponent_ng_container_3_div_3_div_7_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r89); const ctx_r88 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r88.userInput = $event); })("keyup.enter", function DesktopFullScreenComponent_ng_container_3_div_3_div_7_Template_input_keyup_enter_1_listener() { i0.ɵɵrestoreView(_r89); const ctx_r90 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r90.userInput && ctx_r90._send()); })("keyup", function DesktopFullScreenComponent_ng_container_3_div_3_div_7_Template_input_keyup_1_listener($event) { i0.ɵɵrestoreView(_r89); const ctx_r91 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r91.userWriting($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(2, DesktopFullScreenComponent_ng_container_3_div_3_div_7_button_2_Template, 2, 7, "button", 68);
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
    i0.ɵɵelementStart(0, "div", 53);
    i0.ɵɵtext(1);
    i0.ɵɵelementStart(2, "div", 54, 55)(4, "div", 56);
    i0.ɵɵtemplate(5, DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_Template, 3, 2, "ng-container", 25);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 57);
    i0.ɵɵtemplate(7, DesktopFullScreenComponent_ng_container_3_div_3_div_7_Template, 3, 3, "div", 58);
    i0.ɵɵtemplate(8, DesktopFullScreenComponent_ng_container_3_div_3_div_8_Template, 3, 1, "div", 59);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "div", 60);
    i0.ɵɵelement(10, "img", 61);
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
DesktopFullScreenComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DesktopFullScreenComponent, selectors: [["bot-full-screen"]], inputs: { AssistantMode: "AssistantMode", assets: "assets", firstVisit: "firstVisit", firstUsageStory: "firstUsageStory", displayData: "displayData", disableUserInput: "disableUserInput", LastUserInput: "LastUserInput", LastBotAnswer: "LastBotAnswer", PlaceHolder: "PlaceHolder", IsMobile: "IsMobile", showInput: "showInput", NumberPlaceHolder: "NumberPlaceHolder", afterProcess: "afterProcess", nbFiles: "nbFiles" }, outputs: { readySend: "readySend", send: "send", sendBotCommand: "sendBotCommand", sendEvent: "sendEvent", sendCalendar: "sendCalendar", openUpload: "openUpload" }, features: [i0.ɵɵNgOnChangesFeature], decls: 4, vars: 7, consts: [["xmlns", "http://www.w3.org/1999/html", 1, "bot-container"], [1, "bot-view"], [4, "ngIf"], [3, "firstUsageStory", "assets", "ready"], ["id", "exit-btn", 2, "display", "none", 3, "click"], ["class", "bot-assistant-wrapper", 4, "ngIf"], ["class", "bot-chat-wrapper", 4, "ngIf"], [1, "bot-assistant-wrapper"], [1, "bot", 3, "ngStyle"], [1, "circle1"], [1, "circle2"], [1, "circle3"], [1, "bot-discussion-wrapper", 2, "min-height", "60%", "max-height", "60%", "height", "60%", "/*max-height", "120px"], [1, "overflow-hidden", "d-flex", "flex-column", "w-100", "position-relative", "user-input-container-outer"], [1, "position-relative", "bot-input-wrapper"], [1, "overflow-hidden", "d-flex", "flex-column", "w-100", "user-input-container"], [1, "user-input"], [1, "data", 3, "innerHTML"], [1, "time"], [1, "position-relative", "bot-answer"], [1, "d-flex", "flex-column", "w-100", "position-relative", "bot-answer__text"], [3, "state", "calendarTemplate", "columnOverride", "calendarChange", 4, "ngIf"], [1, "w-100", "justify-content-center", 3, "innerHTML"], ["id", "loading-creation"], [1, "mt35", "d-flex", "justify-content-center", "w-100", "position-relative", "bot-answer__buttons"], [4, "ngFor", "ngForOf"], ["class", "bot-button bot-button-left show-btn", 3, "style", "innerHTML", "click", 4, "ngIf"], ["class", "bot-button bot-button-right show-btn", 3, "style", "innerHTML", "click", 4, "ngIf"], ["class", "bot-button bot-button-grey show-btn", 3, "style", "innerHTML", "click", 4, "ngIf"], [1, "bot-button", "bot-button-left", "show-btn", 3, "innerHTML", "click"], [1, "bot-button", "bot-button-right", "show-btn", 3, "innerHTML", "click"], [1, "bot-button", "bot-button-grey", "show-btn", 3, "innerHTML", "click"], [1, "position-relative", "bot-answer__disable-input"], [1, "bot-input-disable"], [3, "state", "calendarTemplate", "columnOverride", "calendarChange"], [1, "bot-input"], [1, "input-number-div"], [1, "input-number-div-arrow"], [1, "arrow-up", 3, "click"], [3, "icon", "size"], [1, "arrow-down", 3, "click"], [1, "bot-container-btn"], [1, "bot-button", "send-btn", "input-number-btn", "showUserInputControls", 3, "disabled", "click"], [1, "primary", "rounded", "validate-after-btn", 2, "display", "inline-block", 3, "click"], [1, "rounded", "secondary", "skip-after-btn", 2, "display", "inline-block", 3, "click"], ["id", "bot-input-div", 1, "d-flex", "flex-column", "w-100", "position-realtive", "bot-input"], [1, "w-100", "h-100", "d-flex", "flex-column", "position-absolute", "bot-input__controls"], [3, "ngModel", "maxlength", "placeholder", "ngModelChange", "keyup.enter", "keyup"], [1, "bot-button", "send-btn", 3, "disabled", "click"], ["class", "bot-button-screen", 4, "ngIf"], ["class", "bot-button-attach", 3, "click", 4, "ngIf"], [1, "bot-button-screen"], [1, "bot-button-attach", 3, "click"], [1, "bot-chat-wrapper"], [1, "bot-discussion-wrapper", 3, "scrollTop"], ["scrollMe", ""], [1, "bot-chat"], [1, "bot-input-wrapper"], ["class", "bot-input", 4, "ngIf"], ["class", "bot-input-disable", 4, "ngIf"], [1, "bot-logo"], [3, "src"], [1, "bot-answer"], ["class", "", 3, "innerHTML", 4, "ngIf"], [1, "", 3, "innerHTML"], ["class", "bot-button", 3, "style", "innerHTML", "click", 4, "ngIf"], [1, "bot-button", 3, "innerHTML", "click"], ["type", "text", "maxlength", "200", 3, "ngModel", "placeholder", "ngModelChange", "keyup.enter", "keyup"], ["class", "bot-button", 3, "style", "disabled", "click", 4, "ngIf"], [1, "bot-button", 3, "disabled", "click"]], template: function DesktopFullScreenComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, dependencies: [i4.DefaultValueAccessor, i4.NgControlStatus, i4.MaxLengthValidator, i4.NgModel, i5.NgForOf, i5.NgIf, i5.NgStyle, i6.NowboardIconComponent, i7.FirstVisitComponent, i8.CustomCheckboxCalendarComponent, i9.SafeHtmlPipe], styles: ["@keyframes gradient{0%{background-position:50% 0%}50%{background-position:50% 100%}to{background-position:50% 0%}}@keyframes pulsebot{0%{transform:scale(1)}50%{transform:scale(1.3)}to{transform:scale(1)}}.bot-listening[_ngcontent-%COMP%]{height:100%;background:transparent}.bot-listening[_ngcontent-%COMP%]:before{content:\"\";position:absolute;top:-60vw;left:-80vw;width:150vw;height:150vw;border-radius:50%;background:transparent}.bot-listening[_ngcontent-%COMP%]:after{content:\"\";position:absolute;top:-40vw;left:-50vw;width:90vw;height:90vw;border-radius:50%;background:transparent}@media screen and (min--moz-device-pixel-ratio:0){.m-carl-notification[_ngcontent-%COMP%]{transform:translate(0)!important}}.m-carl-notification[_ngcontent-%COMP%]{position:relative;top:50%}.m-carl-notification[_ngcontent-%COMP%]   .m-cue[_ngcontent-%COMP%]{width:168px;height:168px;margin:0 auto 50px;display:flex;justify-content:center;align-items:center}.m-carl-notification[_ngcontent-%COMP%]   .m-cue[_ngcontent-%COMP%]   .a-cue-icon[_ngcontent-%COMP%]{position:absolute;width:100px;height:100px;transform:translate(5px) translateY(5px);border-radius:50%;background:radial-gradient(circle at 50% 50%,#9D107D 1px,#9D107D 3%,#580b58 60%);box-shadow:0 0 10px 5px #00000040;animation:pulsebot 3.5s ease infinite}.m-carl-notification[_ngcontent-%COMP%]   .m-cue[_ngcontent-%COMP%]   .a-cue-voice[_ngcontent-%COMP%]{transform-origin:center center;height:130px;width:130px;position:absolute;display:flex;justify-content:center;align-items:center}.m-carl-notification[_ngcontent-%COMP%]   .m-cue[_ngcontent-%COMP%]   .a-cue-voice-el[_ngcontent-%COMP%]{position:absolute;width:130px;height:130px;border-radius:50%;background:#fff;opacity:.2;filter:blur(2px)}.voice1[_ngcontent-%COMP%]{background:#9A147F!important}.voice2[_ngcontent-%COMP%]{background:#773691!important}.voice3[_ngcontent-%COMP%]{background:#4E5CA8!important}.voice4[_ngcontent-%COMP%]{background:#ABC1F1!important}.m-carl-notification[_ngcontent-%COMP%]   .m-cue[_ngcontent-%COMP%]   .a-cue-voice-el[_ngcontent-%COMP%]:nth-child(1){animation:hovering 6s ease 0s infinite reverse both}.m-carl-notification[_ngcontent-%COMP%]   .m-cue[_ngcontent-%COMP%]   .a-cue-voice-el[_ngcontent-%COMP%]:nth-child(2){animation:hovering 7s ease 0s infinite both}.m-carl-notification[_ngcontent-%COMP%]   .m-cue[_ngcontent-%COMP%]   .a-cue-voice-el[_ngcontent-%COMP%]:nth-child(3){animation:hovering 8s ease 0s infinite reverse both}.m-carl-notification[_ngcontent-%COMP%]   .m-cue[_ngcontent-%COMP%]   .a-cue-voice-el[_ngcontent-%COMP%]:nth-child(4){animation:hovering 9s ease 0s infinite both}.m-carl-notification[_ngcontent-%COMP%]   .m-cue[_ngcontent-%COMP%]   .a-cue-voice-el[_ngcontent-%COMP%]:nth-child(5){animation:hovering 10s ease 0s infinite reverse both}.m-carl-notification[_ngcontent-%COMP%]   .m-cue[_ngcontent-%COMP%]   .speaking[_ngcontent-%COMP%]{animation:pulse 2s ease 0s infinite}.m-carl-notification[_ngcontent-%COMP%]   .a-caption[_ngcontent-%COMP%]{color:#fff;font-size:1.5em;line-height:1.8em;text-shadow:0px 1px 2px rgba(0,0,0,.26);text-align:center}.m-carl-notification[_ngcontent-%COMP%]   .a-caption.speaking[_ngcontent-%COMP%]{text-shadow:0px 0px 0px;opacity:.4}@keyframes hovering{0%{transform:rotate(0) translate(18px) rotate(0)}to{transform:rotate(360deg) translate(18px) rotate(-360deg)}}@keyframes pulse{0%{transform:scale(1)}10%{transform:scale(1.15)}15%{transform:scale(1.25)}20%{transform:scale(1.05)}30%{transform:scale(1.3)}40%{transform:scale(1)}50%{transform:scale(1.25)}55%{transform:scale(1.1)}60%{transform:scale(1)}65%{transform:scale(1.3)}70%{transform:scale(1.2)}80%{transform:scale(1.15)}90%{transform:scale(1.25)}to{transform:scale(1.05)}}"], data: { animation: [FadeSlideInOut, FadeSlideInOutKonversoOpacityOut, FadeSlideInOutKonversoTranslateOut, FadeSlideInOutKonversoHeight, FadeSlideInOutKonversoTranslateOutTest, FadeSlideInOutKonversoHeightTest] // TODO remove it
     } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DesktopFullScreenComponent, [{
        type: Component,
        args: [{ selector: 'bot-full-screen', animations: [FadeSlideInOut, FadeSlideInOutKonversoOpacityOut, FadeSlideInOutKonversoTranslateOut, FadeSlideInOutKonversoHeight, FadeSlideInOutKonversoTranslateOutTest, FadeSlideInOutKonversoHeightTest] // TODO remove it
                , template: "<!--<div class=\"bot-container\"  [class]=\"IsMobile ? 'bot-mobile' : ''\" [style]=\"{'background-color' : '#100652 0% 0% no-repeat padding-box;'}\"-->\n\n  <!--<canvas class=\"orb-canvas\"></canvas>\n  <div class=\"overlay\">\n    <div class=\"overlay__inner\">\n    </div>\n  </div>-->\n  <div class=\"bot-container\"  [class]=\"IsMobile ? 'bot-mobile' : ''\" [style]=\"{'background-color' : '#100652 0% 0% no-repeat padding-box;'}\"\n     xmlns=\"http://www.w3.org/1999/html\">\n  <div class=\"bot-view\">\n    <ng-container *ngIf=\"firstVisit && firstUsageStory\">\n      <bot-first-visit [firstUsageStory]=\"firstUsageStory\" [assets]=\"assets\"\n                       (ready)=\"emit($event)\"></bot-first-visit>\n    </ng-container>\n    <ng-container *ngIf=\"!firstVisit || !firstUsageStory\">\n      <button (click)=\"byPassUserInput('exit', 0)\" id=\"exit-btn\" style=\"display: none;\"></button>\n\n      <div class=\"bot-assistant-wrapper\" *ngIf=\"AssistantMode\">\n        <!-- TODO do we need id, remove it? -->\n        <!--<div *ngIf=\"!botListening\" class=\"bot-logo\" id=\"botlogo\">\n          <img [src]=\"assets.FullSizeLogo\">\n        </div>-->\n        <!--<div [ngStyle]=\"{'height': '40%'}\" class=\"bot-logo bot-listening\">\n          <div [ngStyle]=\"{'transform': 'translateY(-10vh)'}\" class=\"m-carl-notification\">\n            <div class=\"m-carl-notification-cue m-cue\">\n              <div *ngIf=\"botListening\" class=\"a-cue-voice\" id=\"bot\">\n                <div class=\"a-cue-voice-el voice1\"></div>\n                <div class=\"a-cue-voice-el voice2\"></div>\n                <div class=\"a-cue-voice-el voice3\"></div>\n                <div class=\"a-cue-voice-el voice4\"></div>\n                <div class=\"a-cue-voice-el\"></div>\n              </div>\n              <div class=\"a-cue-icon\" id=\"bot-icon\"></div>\n            </div>\n          </div>\n        </div>-->\n\n        <div [@FadeSlideInOutKonversoOpacityOut]=\"animations.FadeSlideInOut(animationTTX, animationSlideValue)\" [ngStyle]=\"{'height': '40%'}\" class=\"bot\">\n          <div class=\"circle1\"></div>\n          <div class=\"circle2\"></div>\n          <div class=\"circle3\"></div>\n        </div>\n\n        <div  class=\"bot-discussion-wrapper\" style=\"min-height: 60%; max-height: 60%; height: 60%; /*max-height: 120px;*/\">\n          <!-- USER INPUT -->\n          <div [class.user-input-container-outer-hidden]=\"!showUserInvitation\" class=\"overflow-hidden d-flex flex-column w-100 position-relative user-input-container-outer\">\n            <ng-container *ngIf=\"(LastUserInput && !afterProcess) || !showUserInvitation\">\n              <div [@FadeSlideInOutKonversoHeightTest]=\"animations.FadeSlideInOut(animationHeightTTX*1.5, animationSlideValue)\" class=\"overflow-hidden d-flex flex-column w-100 user-input-container\">\n                <div [@FadeSlideInOutKonversoTranslateOutTest]=\"animations.FadeSlideInOut(animationTTX*1.5, animationSlideValue)\" [class.user-input-top]=\"LastUserInput?.message != ''\"  class=\"user-input\">\n                  <div class=\"data\" [style]=\"{\n                          color : assets?.ColorSet?.Secondary\n                        }\" [innerHTML]=\"LastUserInput.message\">\n                  </div>\n                  <span class=\"time\">{{LastUserInput.date}}</span>\n                </div>\n              </div>\n            </ng-container>\n          </div>\n\n          <!-- BOT ANSWER -->\n          <ng-container *ngIf=\"LastBotAnswer\">\n            <div class=\"position-relative bot-answer\">\n              <div [class.mt-4]=\"!showUserInvitation\" class=\"d-flex flex-column w-100 position-relative bot-answer__text\">\n\n                <!-- BOT ANSWER TEXT -->\n                <ng-container *ngIf=\"LastBotAnswer.text\">\n                  <!--<span *ngIf=\"!LastBotAnswer.text.includes('loading-dots')\" id=\"text\"></span><br>\n                  <span *ngIf=\"changed && LastBotAnswer.text.includes('loading-dots')\" class=\"fade\" [innerHTML]=\"LastBotAnswer.text | safeHtml\"></span><br>\n                  -->\n                  <ng-container *ngIf=\"!LastBotAnswer?.text?.includes('loading-dots') && changed && showText\">\n                    <span [@FadeSlideInOutKonversoTranslateOut]=\"animations.FadeSlideInOut(animationTTX, -100)\" class=\"w-100 justify-content-center\" [innerHTML]=\"LastBotAnswer.text | safeHtml\"></span>\n                  </ng-container>\n                  <ng-container *ngIf=\"!afterProcess\">\n                    <span id=\"loading-creation\"></span>\n                  </ng-container>\n                </ng-container>\n              </div>\n\n              <ng-container *ngIf=\"LastBotAnswer.medias && LastBotAnswer.medias.length\n                && LastBotAnswer.medias[0].required_actions\n                && LastBotAnswer.medias[0].required_actions.length > 0\n                && !LastBotAnswer?.text?.includes('loading-dots')\">\n                <!-- BOT ANSWER BUTTONS -->\n                <div class=\"mt35 d-flex justify-content-center w-100 position-relative bot-answer__buttons\">\n                  <ng-container *ngFor=\"let suggest of LastBotAnswer.medias[0].required_actions; let i = index\">\n                    <ng-container *ngIf=\"suggest.format === 'button'\">\n                        <button\n                          [@FadeSlideInOutKonversoTranslateOut]=\"animations.FadeSlideInOut(animationTTX, -100)\"\n                          *ngIf=\"suggest.value?.title == 'Terminer' && changed || suggest.value?.title == 'Quit' && changed\" [style]=\"{\n                            borderColor : assets?.ColorSet?.Primary,\n                            color : assets?.ColorSet?.Primary\n                          }\"\n                          class=\"bot-button bot-button-left show-btn\" (click)=\"byPassUserInput(suggest?.value?.onClick, i)\"\n                          [innerHTML]=\"suggest.label|| suggest.value?.displayedMessage || suggest.value?.title \">\n                        </button>\n                        <button\n                          [@FadeSlideInOutKonversoTranslateOut]=\"animations.FadeSlideInOut(animationTTX, -100)\"\n                          *ngIf=\"suggest.value?.title == 'Nouvelle Demande' && changed || suggest.value?.title == 'New Request' && changed\" [style]=\"{\n                            borderColor : assets?.ColorSet?.Primary,\n                            color : assets?.ColorSet?.Primary\n                          }\"\n                          class=\"bot-button bot-button-right show-btn\" (click)=\"byPassUserInput(suggest?.value?.onClick, i)\"\n                          [innerHTML]=\"suggest.label|| suggest.value?.displayedMessage || suggest.value?.title \">\n                        </button>\n                        <button\n                          [@FadeSlideInOutKonversoTranslateOut]=\"animations.FadeSlideInOut(animationTTX, -100)\"\n                          *ngIf=\"suggest.value?.title && suggest.value?.title != 'Terminer' && suggest.value?.title != 'Quit' && suggest.value?.title != 'Nouvelle Demande' && suggest.value?.title != 'New Request' && changed\"\n                            [style]=\"{\n                            borderColor : assets?.ColorSet?.Primary,\n                            color : assets?.ColorSet?.Primary\n                          }\"\n                          class=\"bot-button bot-button-grey show-btn\" (click)=\"byPassUserInput(suggest?.value?.onClick, i)\"\n                          [innerHTML]=\"suggest.label|| suggest.value?.displayedMessage || suggest.value?.title \">\n                      </button>\n                    </ng-container>\n                  </ng-container>\n                </div>\n\n                <ng-container *ngIf=\"disableUserInput\">\n                  <div class=\"position-relative bot-answer__disable-input\">\n                    <div [@FadeSlideInOutKonversoTranslateOut]=\"animations.FadeSlideInOut(animationTTX, -100)\" class=\"bot-input-disable\">\n                      <i>{{ select }}</i>\n                    </div>\n                  </div>\n                </ng-container>\n              </ng-container>\n              <!-- BOT ANSWER BUTTONS -->\n\n              <!--<ng-container *ngIf=\"afterProcess && config.AfterProcessScenario.FormElements.length > 0\">\n                <div class=\"after-process-form\">\n                  <div class=\"after-process-subform\" *ngFor=\"let formElements of config.AfterProcessScenario.FormElements\">\n                    <ng-container *ngFor=\"let form of formElements\">\n                      <ng-container [ngSwitch]=\"form.type\">\n                        <div *ngSwitchCase=\"'checkbox'\" [ngStyle]=\"{'display': form?.display ? form.display: 'block'}\" class=\"bot-checkbox\">\n                          <input [checked]=\"form?.checked == true ? 'true': 'false'\" [id]=\"form?.id\" [name]=\"form?.id\" [type]='form?.type' value=\"false\">\n                          <label [for]=\"form?.id\" class=\"bot-checkbox-label\">\n                            {{ translate.translate(service.locale, form.label) }}\n                          </label>\n                        </div>\n\n                        <input [class]=\"form?.class\" [id]=\"form?.id\" [ngStyle]=\"{'display': form?.display ? form.display: 'block'}\" *ngSwitchCase=\"'text'\"\n                        [pattern]=\"form?.pattern\" [placeholder]=\"form?.placeholder\" [type]=\"form?.type\"\n                        [value]=\"form?.value\">\n\n                        <div [class]=\"form?.class\" *ngSwitchCase=\"'div'\" [ngStyle]=\"{'display': form?.display ? form.display: 'block'}\">\n                          {{ translate.translate(service.locale, form?.content) }}\n                        </div>\n\n                        <textarea [class]=\"form?.class\" [id]=\"form?.id\" *ngSwitchCase=\"'textarea'\" [ngStyle]=\"{'display': form?.display ? form.display: 'block'}\"\n                        [placeholder]=\"translate.translate(service.locale, form?.placeholder)\"></textarea>\n                      </ng-container>\n                    </ng-container>\n                  </div>\n                </div>\n              </ng-container>-->\n\n              <custom-checkbox-calendar\n                [@FadeSlideInOutKonversoHeightTest]=\"animations.FadeSlideInOut(animationTTX, animationSlideValue)\"\n                *ngIf=\"afterProcess\"\n                [state]=\"afterProcess\"\n                (calendarChange)=\"bindCalendar($event)\"\n                [calendarTemplate]=\"calendarTemplate\"\n                [columnOverride]=\"calendarKeyOverride\">\n              </custom-checkbox-calendar>\n\n              <ng-container *ngIf=\"inputType === 'number'\">\n                <div [@FadeSlideInOutKonversoOpacityOut]=\"animations.FadeSlideInOut(animationTTX, animationSlideValue)\" class=\"bot-input\">\n                                  <!--<input [type]=\"inputType\" [(ngModel)]=\"userInput\" (keyup.enter)=\"userInput && _send()\" (keyup)=\"userWriting($event)\" min=\"2\" [max]=\"inputLimit\"\n                       [placeholder]=\"currentPlaceHolder\">-->\n                  <div class=\"input-number-div\">\n                    <div class=\"input-number-div-arrow\">\n                      <button (click)=\"changeNumber(1)\" class=\"arrow-up\">\n                        <nb-icon [icon]=\"'up_2'\" [size]=\"1.5\"></nb-icon>\n                      </button>\n\n                      <button (click)=\"changeNumber(-1)\" class=\"arrow-down\">\n                        <nb-icon [icon]=\"'down_2'\" [size]=\"1.5\"></nb-icon>\n                      </button>\n                    </div>\n\n                    {{ userInput }}\n                  </div>\n\n                  <div class=\"bot-container-btn\">\n                    <button class=\"bot-button send-btn input-number-btn showUserInputControls\" [style]=\"{\n                      backgroundColor : assets?.ColorSet?.Primary,\n                      color : assets?.ColorSet?.Secondary\n                  }\" (click)=\"_send();showUserInputControls=false;showUserInvitation=!showUserInvitation;\" [disabled]=\"!userInput\">\n\n                      <ng-container *ngIf=\"inputType === 'number'\">\n                        {{ sendBtn }}\n                      </ng-container>\n                    </button>\n                  </div>\n                </div>\n              </ng-container>\n            </div>\n          </ng-container>\n\n          <div class=\"position-relative bot-input-wrapper\">\n            <ng-container *ngIf=\"afterProcess && config.AfterProcessScenario.FormButtons.length > 0\">\n              <!--<button [class]=\"btn.class\" *ngFor=\"let btn of config.AfterProcessScenario.FormButtons\" [ngStyle]=\"{'display': btn?.display ? btn.display: 'block'}\">\n                {{ translate.translate(service.locale, btn.label) }}\n              </button>-->\n              <button (click)=\"getCalendar()\" class=\"primary rounded validate-after-btn\" style=\"display: inline-block;\">\n                {{ translate.translate(service.locale, 'VALIDATE_AVAILABILITY') }}\n              </button>\n\n              <button class=\"rounded secondary skip-after-btn\" style=\"display: inline-block;\" (click)=\"skip()\">\n                {{ translate.translate(service.locale, 'SKIP') }}\n              </button>\n            </ng-container>\n\n            <ng-container *ngIf=\"!afterProcess && showUserInputControls && inputType !== 'number'\">\n              <ng-container *ngIf=\"!disableUserInput && showInput\">\n                <div class=\"d-flex flex-column w-100 position-realtive bot-input\" id=\"bot-input-div\">\n                  <div [@FadeSlideInOutKonversoTranslateOut]=\"animations.FadeSlideInOut(animationTTX, animationSlideValueAdd)\" class=\"w-100 h-100 d-flex flex-column position-absolute bot-input__controls\">\n\n                    <ng-container *ngIf=\"inputType === 'text'\">\n                      <textarea [(ngModel)]=\"userInput\" (keyup.enter)=\"userInput && _send()\" (keyup)=\"userWriting($event)\" [maxlength]=\"inputLimit\"\n                        [placeholder]=\"currentPlaceHolder\"></textarea>\n                    </ng-container>\n\n                    <ng-container *ngIf=\"inputType !== 'number'\">\n                      <div class=\"bot-container-btn\">\n                        <button class=\"bot-button send-btn\" [style]=\"{\n                          backgroundColor : assets?.ColorSet?.Primary,\n                          color : assets?.ColorSet?.Secondary}\"\n                          (click)=\"_send()\"\n                          [disabled]=\"!userInput\">\n\n                          <ng-container *ngIf=\"inputType !== 'number'\">\n                            {{ sendBtnMsg }}\n                          </ng-container>\n\n                          <!--<ng-container *ngIf=\"inputType === 'number'\">\n                            {{ sendBtn }}\n                          </ng-container>-->\n                        </button>\n\n                        <button *ngIf=\"inputType !== 'number' && IsMobile\" class=\"bot-button-screen\">\n                          <nb-icon [icon]=\"'scan_11'\" [size]=\"1.5\"></nb-icon>\n                          {{ btnScreen }}\n                        </button>\n\n                        <button *ngIf=\"inputType !== 'number'\" class=\"bot-button-attach\" (click)=\"openUpload.emit(true)\">\n                          {{ nbFiles }}\n\n                          <ng-container *ngIf=\"nbFiles <= 1\">\n                            {{ translate.translate(service.locale, 'ATTACHMENT') }}\n                          </ng-container>\n\n                          <ng-container *ngIf=\"nbFiles > 1\">\n                            {{ translate.translate(service.locale, 'ATTACHMENTS') }}\n                          </ng-container>\n\n                          <nb-icon [icon]=\"'attachment'\" [size]=\"1.5\"></nb-icon>\n                        </button>\n                      </div>\n                    </ng-container>\n\n                  </div>\n                </div>\n              </ng-container>\n            </ng-container>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"bot-chat-wrapper\" *ngIf=\"!AssistantMode\">\n        {{AssistantMode}}\n        <div class=\"bot-discussion-wrapper\" #scrollMe [scrollTop]=\"scrollMe.scrollTo(0, 9999999)\">\n          <div class=\"bot-chat\">\n            <ng-container *ngFor=\"let entry of displayData\">\n              <ng-container *ngIf=\"entry.date\">\n                <div [@FadeSlideInOutKonversoTranslateOut]=\"animations.FadeSlideInOut(animationTTX, animationSlideValue)\" class=\"user-input\">\n                  <div class=\"data\" [style]=\"{\n                     backgroundColor : assets?.ColorSet?.Primary,\n                     color : assets?.ColorSet?.Secondary\n                    }\" [innerHTML]=\"entry.message\">\n                  </div>\n                  <span class=\"time\">{{entry.date}}</span>\n                </div>\n              </ng-container>\n              <ng-container *ngIf=\"!entry.date\">\n                <div class=\"bot-answer\">\n                  <ng-container *ngIf=\"entry.text\">\n                    <span *ngIf=\"changed\" class=\"\" [innerHTML]=\"entry.text | safeHtml\"></span>\n                  </ng-container>\n                  <ng-container *ngIf=\"entry.medias && entry.medias.length\n                   && entry.medias[0].required_actions\n                   && entry.medias[0].required_actions.length\">\n                    <ng-container *ngFor=\"let suggest of entry.medias[0].required_actions\">\n                      <ng-container *ngIf=\"suggest.format === 'button'\">\n                        <button *ngIf=\"changed\" [style]=\"{\n                     borderColor : assets?.ColorSet?.Primary,\n                     color : assets?.ColorSet?.Primary\n            }\" class=\"bot-button\" (click)=\"byPassUserInput(suggest?.value?.onClick)\"\n                                [innerHTML]=\"suggest.label|| suggest.value?.displayedMessage || suggest.value?.title \"></button>\n                      </ng-container>\n                    </ng-container>\n                  </ng-container>\n\n                </div>\n              </ng-container>\n            </ng-container>\n          </div>\n        </div>\n        <div class=\"bot-input-wrapper\">\n          <div class=\"bot-input\" *ngIf=\"!disableUserInput && showInput\">\n            <input type=\"text\" [(ngModel)]=\"userInput\" (keyup.enter)=\"userInput && _send()\" (keyup)=\"userWriting($event)\" maxlength=\"200\"\n                   [placeholder]=\"currentPlaceHolder\">\n            <button *ngIf=\"changed\" class=\"bot-button\" [style]=\"{\n                     backgroundColor : assets?.ColorSet?.Primary,\n                     color : assets?.ColorSet?.Secondary\n            }\" (click)=\"_send()\" [disabled]=\"!userInput\">{{ sendBtn }}\n            </button>\n          </div>\n          <div class=\"bot-input-disable\" *ngIf=\"disableUserInput\">\n            <i>{{ select }}</i>\n          </div>\n        </div>\n        <div class=\"bot-logo\">\n          <img [src]=\"assets.FullSizeLogo\">\n        </div>\n      </div>\n    </ng-container>\n\n  </div>\n</div>\n", styles: ["@keyframes gradient{0%{background-position:50% 0%}50%{background-position:50% 100%}to{background-position:50% 0%}}@keyframes pulsebot{0%{transform:scale(1)}50%{transform:scale(1.3)}to{transform:scale(1)}}.bot-listening{height:100%;background:transparent}.bot-listening:before{content:\"\";position:absolute;top:-60vw;left:-80vw;width:150vw;height:150vw;border-radius:50%;background:transparent}.bot-listening:after{content:\"\";position:absolute;top:-40vw;left:-50vw;width:90vw;height:90vw;border-radius:50%;background:transparent}@media screen and (min--moz-device-pixel-ratio:0){.m-carl-notification{transform:translate(0)!important}}.m-carl-notification{position:relative;top:50%}.m-carl-notification .m-cue{width:168px;height:168px;margin:0 auto 50px;display:flex;justify-content:center;align-items:center}.m-carl-notification .m-cue .a-cue-icon{position:absolute;width:100px;height:100px;transform:translate(5px) translateY(5px);border-radius:50%;background:radial-gradient(circle at 50% 50%,#9D107D 1px,#9D107D 3%,#580b58 60%);box-shadow:0 0 10px 5px #00000040;animation:pulsebot 3.5s ease infinite}.m-carl-notification .m-cue .a-cue-voice{transform-origin:center center;height:130px;width:130px;position:absolute;display:flex;justify-content:center;align-items:center}.m-carl-notification .m-cue .a-cue-voice-el{position:absolute;width:130px;height:130px;border-radius:50%;background:#fff;opacity:.2;filter:blur(2px)}.voice1{background:#9A147F!important}.voice2{background:#773691!important}.voice3{background:#4E5CA8!important}.voice4{background:#ABC1F1!important}.m-carl-notification .m-cue .a-cue-voice-el:nth-child(1){animation:hovering 6s ease 0s infinite reverse both}.m-carl-notification .m-cue .a-cue-voice-el:nth-child(2){animation:hovering 7s ease 0s infinite both}.m-carl-notification .m-cue .a-cue-voice-el:nth-child(3){animation:hovering 8s ease 0s infinite reverse both}.m-carl-notification .m-cue .a-cue-voice-el:nth-child(4){animation:hovering 9s ease 0s infinite both}.m-carl-notification .m-cue .a-cue-voice-el:nth-child(5){animation:hovering 10s ease 0s infinite reverse both}.m-carl-notification .m-cue .speaking{animation:pulse 2s ease 0s infinite}.m-carl-notification .a-caption{color:#fff;font-size:1.5em;line-height:1.8em;text-shadow:0px 1px 2px rgba(0,0,0,.26);text-align:center}.m-carl-notification .a-caption.speaking{text-shadow:0px 0px 0px;opacity:.4}@keyframes hovering{0%{transform:rotate(0) translate(18px) rotate(0)}to{transform:rotate(360deg) translate(18px) rotate(-360deg)}}@keyframes pulse{0%{transform:scale(1)}10%{transform:scale(1.15)}15%{transform:scale(1.25)}20%{transform:scale(1.05)}30%{transform:scale(1.3)}40%{transform:scale(1)}50%{transform:scale(1.25)}55%{transform:scale(1.1)}60%{transform:scale(1)}65%{transform:scale(1.3)}70%{transform:scale(1.2)}80%{transform:scale(1.15)}90%{transform:scale(1.25)}to{transform:scale(1.05)}}\n"] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVza3RvcC1mdWxsLXNjcmVlbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9rb252ZXJzby9zcmMvbGliL2Rlc2t0b3AtZnVsbC1zY3JlZW4vZGVza3RvcC1mdWxsLXNjcmVlbi5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9rb252ZXJzby9zcmMvbGliL2Rlc2t0b3AtZnVsbC1zY3JlZW4vZGVza3RvcC1mdWxsLXNjcmVlbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFxQixNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFJaEcsT0FBTyxFQUVILGNBQWMsRUFDZCxnQ0FBZ0MsRUFDaEMsa0NBQWtDLEVBQ2xDLDRCQUE0QixFQUMvQixNQUFNLDBCQUEwQixDQUFDO0FBWWxDLG9CQUFvQjtBQUNwQixPQUFPLEVBQUMsT0FBTyxFQUFhLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFDLE1BQU0scUJBQXFCLENBQUM7Ozs7Ozs7Ozs7Ozs7SUNiL0UsNkJBQW9EO0lBQ2xELDBDQUN3QztJQUF2QiwrTEFBUyxlQUFBLG1CQUFZLENBQUEsSUFBQztJQUFDLGlCQUFrQjtJQUM1RCwwQkFBZTs7O0lBRkksZUFBbUM7SUFBbkMsd0RBQW1DLHlCQUFBOzs7O0lBbUM5Qyw2QkFBOEU7SUFDNUUsK0JBQXdMLGNBQUE7SUFFcEwsMEJBR007SUFDTixnQ0FBbUI7SUFBQSxZQUFzQjtJQUFBLGlCQUFPLEVBQUEsRUFBQTtJQUd0RCwwQkFBZTs7O0lBVFIsZUFBNEc7SUFBNUcsaUpBQTRHO0lBQ0csZUFBcUQ7SUFBckQsNEdBQXFEO0lBQWxLLGlKQUE0RztJQUM3RixlQUVWO0lBRlUsa0pBRVY7SUFBQywyRUFBbUM7SUFFekIsZUFBc0I7SUFBdEIsK0NBQXNC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UUFBUTtrQkFBaEIsS0FBSztZQUNHLFNBQVM7a0JBQWpCLEtBQUs7WUFDRyxpQkFBaUI7a0JBQXpCLEtBQUs7WUFDRyxZQUFZO2tCQUFwQixLQUFLO1lBQ0csT0FBTztrQkFBZixLQUFLO1lBRUksU0FBUztrQkFBbEIsTUFBTTtZQUNHLElBQUk7a0JBQWIsTUFBTTtZQUNHLGNBQWM7a0JBQXZCLE1BQU07WUFDRyxTQUFTO2tCQUFsQixNQUFNO1lBQ0csWUFBWTtrQkFBckIsTUFBTTtZQUNHLFVBQVU7a0JBQW5CLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbmplY3QsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RGVmYXVsdEFzc2V0cywgS29udmVyc29JbnRlcmZhY2UsIE9wZW5DaGF0Qm90UmVzcG9uc2UsIFVzZXJJbnB1dH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlL0tvbnZlcnNvSW50ZXJmYWNlJztcbmltcG9ydCB7S29udmVyc29TZXJ2aWNlfSBmcm9tICcuLi9rb252ZXJzby5zZXJ2aWNlJztcbmltcG9ydCB7VHJhbnNsYXRlU2VydmljZX0gZnJvbSAnLi4vdHJhbnNsYXRlLnNlcnZpY2UnO1xuaW1wb3J0IHtcbiAgICBBbmltYXRpb25zU2VydmljZSxcbiAgICBGYWRlU2xpZGVJbk91dCxcbiAgICBGYWRlU2xpZGVJbk91dEtvbnZlcnNvT3BhY2l0eU91dCxcbiAgICBGYWRlU2xpZGVJbk91dEtvbnZlcnNvVHJhbnNsYXRlT3V0LFxuICAgIEZhZGVTbGlkZUluT3V0S29udmVyc29IZWlnaHRcbn0gZnJvbSAnbmd4LW5vd2JyYWlucy1hbmltYXRpb25zJztcblxuZGVjbGFyZSB2YXIgUElYSTogYW55O1xuY29uc3QgZGVmYXVsdElucHV0VHlwZSA9ICd0ZXh0JztcbmNvbnN0IGRlZmF1bHRJbnB1dExpbWl0ID0gMzAwO1xuY29uc3QgQU5JTUFUSU9OX1RUWCA9IDc1MDtcbmNvbnN0IEFOSU1BVElPTl9UVFhfQUREID0gMjUwO1xuY29uc3QgQU5JTUFUSU9OX1NMSURFX1ZBTFVFID0gLTUwO1xuY29uc3QgQU5JTUFUSU9OX1NMSURFX1ZBTFVFX0FERCA9IC0yNTtcbmNvbnN0IEFOSU1BVElPTl9IRUlHSFRfVFRYID0gMTI1MDtcblxuXG4vKiBUT0RPIHJlbW92ZSBpdCAqL1xuaW1wb3J0IHthbmltYXRlLCBrZXlmcmFtZXMsIHN0eWxlLCB0cmFuc2l0aW9uLCB0cmlnZ2VyfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcblxuY29uc3QgQU5JTUFUSU9OX1RZUEVfQ1VCSUNfQkVaSUVSID0gJ2N1YmljLWJlemllcigwLjM5LCAwLjU4LCAwLjU3LCAxKSc7XG5cbi8qIFRPRE8gKi9cbi8qIG1vdmUgdGhlIGFuaW1hdGlvbnMgdG8gbmd4LW5vd2JyYWlucy1hbmltYXRpb25zICovXG5leHBvcnQgY29uc3QgRmFkZVNsaWRlSW5PdXRLb252ZXJzb1RyYW5zbGF0ZU91dFRlc3QgPSB0cmlnZ2VyKCdGYWRlU2xpZGVJbk91dEtvbnZlcnNvVHJhbnNsYXRlT3V0VGVzdCcsIFtcbiAgICB0cmFuc2l0aW9uKCc6ZW50ZXInLCBbXG4gICAgICAgIHN0eWxlKHtvcGFjaXR5OiAwLCB0b3A6ICd7e3BlcmNlbnRfc3RhcnR9fSUnfSksXG4gICAgICAgIGFuaW1hdGUoYHt7dHR4fX1tcyAke0FOSU1BVElPTl9UWVBFX0NVQklDX0JFWklFUn1gLCBzdHlsZSh7b3BhY2l0eTogMSwgdG9wOiAnMCUnfSkpXG4gICAgXSksXG4gICAgdHJhbnNpdGlvbignOmxlYXZlJywgW1xuICAgICAgICBzdHlsZSh7b3BhY2l0eTogMX0pLFxuICAgICAgICBhbmltYXRlKCd7e3R0eH19bXMgZWFzZS1pbi1vdXQnLCBzdHlsZSh7b3BhY2l0eTogMH0pKVxuICAgIF0pXG5dKTtcblxuZXhwb3J0IGNvbnN0IEZhZGVTbGlkZUluT3V0S29udmVyc29IZWlnaHRUZXN0ID0gdHJpZ2dlcignRmFkZVNsaWRlSW5PdXRLb252ZXJzb0hlaWdodFRlc3QnLCBbXG4gICAgdHJhbnNpdGlvbignOmVudGVyJywgW1xuICAgICAgICBzdHlsZSh7aGVpZ2h0OiAwfSksXG4gICAgICAgIGFuaW1hdGUoYHt7dHR4fX1tcyAke0FOSU1BVElPTl9UWVBFX0NVQklDX0JFWklFUn1gLCBzdHlsZSh7aGVpZ2h0OiAnKid9KSlcbiAgICBdKSxcbiAgICB0cmFuc2l0aW9uKCc6bGVhdmUnLCBbXG4gICAgICAgIHN0eWxlKHtvcGFjaXR5OiAxfSksXG4gICAgICAgIGFuaW1hdGUoJ3t7dHR4fX1tcyBlYXNlLWluLW91dCcsIHN0eWxlKHtvcGFjaXR5OiAwfSkpXG4gICAgXSlcbl0pO1xuXG5leHBvcnQgY29uc3QgRmFkZVNsaWRlSW5PdXRLb252ZXJzb0hlaWdodE91dFRlc3QgPSB0cmlnZ2VyKCdGYWRlU2xpZGVJbk91dEtvbnZlcnNvSGVpZ2h0T3V0VGVzdCcsIFtcbiAgICB0cmFuc2l0aW9uKCc6ZW50ZXInLCBbXG4gICAgICAgIHN0eWxlKHtoZWlnaHQ6ICcqJ30pLFxuICAgICAgICBhbmltYXRlKGB7e3R0eH19bXMgJHtBTklNQVRJT05fVFlQRV9DVUJJQ19CRVpJRVJ9YCwgc3R5bGUoe2hlaWdodDogMH0pKVxuICAgIF0pXG5dKTtcblxuLyogVE9ETyByZW1vdmUgaXQgKi9cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdib3QtZnVsbC1zY3JlZW4nLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9kZXNrdG9wLWZ1bGwtc2NyZWVuLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9kZXNrdG9wLWZ1bGwtc2NyZWVuLmNvbXBvbmVudC5jc3MnXSxcbiAgICAvL2FuaW1hdGlvbnM6IFtGYWRlU2xpZGVJbk91dCwgRmFkZVNsaWRlSW5PdXRLb252ZXJzb09wYWNpdHlPdXQsIEZhZGVTbGlkZUluT3V0S29udmVyc29UcmFuc2xhdGVPdXQsIEZhZGVTbGlkZUluT3V0S29udmVyc29IZWlnaHRdXG4gICAgYW5pbWF0aW9uczogW0ZhZGVTbGlkZUluT3V0LCBGYWRlU2xpZGVJbk91dEtvbnZlcnNvT3BhY2l0eU91dCwgRmFkZVNsaWRlSW5PdXRLb252ZXJzb1RyYW5zbGF0ZU91dCwgRmFkZVNsaWRlSW5PdXRLb252ZXJzb0hlaWdodCwgRmFkZVNsaWRlSW5PdXRLb252ZXJzb1RyYW5zbGF0ZU91dFRlc3QsIEZhZGVTbGlkZUluT3V0S29udmVyc29IZWlnaHRUZXN0XSAvLyBUT0RPIHJlbW92ZSBpdFxufSlcbmV4cG9ydCBjbGFzcyBEZXNrdG9wRnVsbFNjcmVlbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0IHtcbiAgICBASW5wdXQoKSBBc3Npc3RhbnRNb2RlOiBib29sZWFuID0gZmFsc2U7XG4gICAgQElucHV0KCkgYXNzZXRzOiBEZWZhdWx0QXNzZXRzO1xuICAgIEBJbnB1dCgpIGZpcnN0VmlzaXQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBASW5wdXQoKSBmaXJzdFVzYWdlU3Rvcnk6IHN0cmluZ1tdO1xuICAgIEBJbnB1dCgpIGRpc3BsYXlEYXRhOiAoVXNlcklucHV0IHwgT3BlbkNoYXRCb3RSZXNwb25zZSlbXTtcbiAgICBASW5wdXQoKSBkaXNhYmxlVXNlcklucHV0OiBib29sZWFuO1xuICAgIEBJbnB1dCgpIExhc3RVc2VySW5wdXQ6IFVzZXJJbnB1dDtcbiAgICBASW5wdXQoKSBMYXN0Qm90QW5zd2VyOiBPcGVuQ2hhdEJvdFJlc3BvbnNlO1xuICAgIEBJbnB1dCgpIFBsYWNlSG9sZGVyOiBzdHJpbmdbXTtcbiAgICBASW5wdXQoKSBJc01vYmlsZTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIHNob3dJbnB1dDogYm9vbGVhbjtcbiAgICBASW5wdXQoKSBOdW1iZXJQbGFjZUhvbGRlcjogc3RyaW5nW107XG4gICAgQElucHV0KCkgYWZ0ZXJQcm9jZXNzID0gZmFsc2U7XG4gICAgQElucHV0KCkgbmJGaWxlcyA9IDA7XG5cbiAgICBAT3V0cHV0KCkgcmVhZHlTZW5kOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KGZhbHNlKTtcbiAgICBAT3V0cHV0KCkgc2VuZDogRXZlbnRFbWl0dGVyPFVzZXJJbnB1dD4gPSBuZXcgRXZlbnRFbWl0dGVyPFVzZXJJbnB1dD4obnVsbCk7XG4gICAgQE91dHB1dCgpIHNlbmRCb3RDb21tYW5kOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPihudWxsKTtcbiAgICBAT3V0cHV0KCkgc2VuZEV2ZW50OiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPihudWxsKTtcbiAgICBAT3V0cHV0KCkgc2VuZENhbGVuZGFyOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PihudWxsKTtcbiAgICBAT3V0cHV0KCkgb3BlblVwbG9hZDogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPihmYWxzZSk7XG4gICAgcHVibGljIHVzZXJJbnB1dDogc3RyaW5nO1xuICAgIHB1YmxpYyBjdXJyZW50UGxhY2VIb2xkZXI6IHN0cmluZyA9ICcnO1xuICAgIHB1YmxpYyBzZW5kQnRuID0gJyc7XG4gICAgcHVibGljIHNlbmRCdG5Nc2cgPSAnJztcbiAgICBwdWJsaWMgc2VsZWN0ID0gJyc7XG4gICAgcHVibGljIGNoYW5nZWQgPSBmYWxzZTtcbiAgICBwdWJsaWMgYm90TGlzdGVuaW5nID0gZmFsc2U7XG4gICAgcHVibGljIHNob3dXcmFwcGVyID0gdHJ1ZTtcbiAgICBwdWJsaWMgc2hvd1RleHQgPSB0cnVlO1xuICAgIHB1YmxpYyBpbnB1dFR5cGU6IHN0cmluZyA9IGRlZmF1bHRJbnB1dFR5cGU7XG4gICAgcHVibGljIGlucHV0TGltaXQ6IG51bWJlciA9IGRlZmF1bHRJbnB1dExpbWl0O1xuICAgIHByaXZhdGUgbmV3TWVzc2FnZSA9IGZhbHNlO1xuICAgIHByaXZhdGUgbWVzc2FnZUN1cnJlbnQgPSAnJztcbiAgICBwcml2YXRlIG1zZ0FycmF5ID0gW107XG4gICAgcHJpdmF0ZSBib3RMaXN0ZW5pbmdUaW1lciA9IDA7XG4gICAgcHJpdmF0ZSBhbmltX2RvbmUgPSBmYWxzZTtcbiAgICBwcml2YXRlIHJlbG9hZGVkID0gZmFsc2U7XG4gICAgcHJpdmF0ZSB0aW1lcjtcbiAgICBwdWJsaWMgYnRuU2NyZWVuID0gJyc7XG4gICAgcHVibGljIG5iQXR0YWNobWVudHMgPSAwO1xuICAgIGNvbmZpZzogS29udmVyc29JbnRlcmZhY2U7XG4gICAgcHJpdmF0ZSBkYXlzID0gW107XG4gICAgcHVibGljIGNhbGVuZGFyQXZhaWxhYmlsaXR5ID0ge307XG4gICAgcHVibGljIGNhbGVuZGFyVGVtcGxhdGUgPSB7XG4gICAgICAgIG1vcm5pbmc6IHthbGw6IHRydWUsIG1vbmRheTogdHJ1ZSwgdHVlc2RheTogdHJ1ZSwgd2VkbmVzZGF5OiB0cnVlLCB0aHVyc2RheTogdHJ1ZSwgZnJpZGF5OiB0cnVlfSxcbiAgICAgICAgYWZ0ZXJub29uOiB7YWxsOiB0cnVlLCBtb25kYXk6IHRydWUsIHR1ZXNkYXk6IHRydWUsIHdlZG5lc2RheTogdHJ1ZSwgdGh1cnNkYXk6IHRydWUsIGZyaWRheTogdHJ1ZX1cbiAgICB9O1xuICAgIHB1YmxpYyBjYWxlbmRhcktleU92ZXJyaWRlID0ge1xuICAgICAgICBtb3JuaW5nOiAnTU9STklOR19BTEwnLFxuICAgICAgICBhZnRlcm5vb246ICdBRlRFUk5PT05fQUxMJyxcbiAgICAgICAgbW9uZGF5OiAnTU9OREFZJyxcbiAgICAgICAgdHVlc2RheTogJ1RVRVNEQVknLFxuICAgICAgICB3ZWRuZXNkYXk6ICdXRURORVNEQVknLFxuICAgICAgICB0aHVyc2RheTogJ1RIVVJTREFZJyxcbiAgICAgICAgZnJpZGF5OiAnRlJJREFZJ1xuICAgIH07XG4gICAgcHVibGljIHNob3dVc2VySW5wdXRDb250cm9scyA9IHRydWU7XG4gICAgcHVibGljIHNob3dVc2VySW52aXRhdGlvbiA9IHRydWU7XG5cbiAgICBwdWJsaWMgYW5pbWF0aW9uVFRYID0gQU5JTUFUSU9OX1RUWDtcbiAgICBwdWJsaWMgYW5pbWF0aW9uVHR4QWRkID0gQU5JTUFUSU9OX1RUWF9BREQ7XG4gICAgcHVibGljIGFuaW1hdGlvblNsaWRlVmFsdWUgPSBBTklNQVRJT05fU0xJREVfVkFMVUU7XG4gICAgcHVibGljIGFuaW1hdGlvblNsaWRlVmFsdWVBZGQgPSBBTklNQVRJT05fU0xJREVfVkFMVUVfQUREO1xuICAgIHB1YmxpYyBhbmltYXRpb25IZWlnaHRUVFggPSBBTklNQVRJT05fSEVJR0hUX1RUWDtcblxuICAgIGNoYW5nZU51bWJlcih2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIGlmICgoK3RoaXMudXNlcklucHV0ICsgdmFsdWUpID4gMCkge1xuICAgICAgICAgICAgdGhpcy51c2VySW5wdXQgPSAoK3RoaXMudXNlcklucHV0ICsgdmFsdWUpLnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgdHJhbnNsYXRlOiBUcmFuc2xhdGVTZXJ2aWNlLCBwdWJsaWMgc2VydmljZTogS29udmVyc29TZXJ2aWNlLCBwdWJsaWMgYW5pbWF0aW9uczogQW5pbWF0aW9uc1NlcnZpY2UsXG4gICAgICAgICAgICAgICAgQEluamVjdCgnX19OZ3hLb252ZXJzb19fJykgY29uZmlnOiBLb252ZXJzb0ludGVyZmFjZSkge1xuICAgICAgICBzZXJ2aWNlLmxhbmcuc3Vic2NyaWJlKChyKSA9PiB7XG4gICAgICAgICAgICBpZiAoc2VydmljZS5sb2NhbGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbmRCdG4gPSB0cmFuc2xhdGUudHJhbnNsYXRlKHNlcnZpY2UubG9jYWxlLCAnU0VORCcpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VuZEJ0bk1zZyA9IHRyYW5zbGF0ZS50cmFuc2xhdGUoc2VydmljZS5sb2NhbGUsICdTRU5EX01FU1NBR0UnKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdCA9IHRyYW5zbGF0ZS50cmFuc2xhdGUoc2VydmljZS5sb2NhbGUsICdTRUxFQ1QnKTtcbiAgICAgICAgICAgICAgICB0aGlzLmJ0blNjcmVlbiA9IHRyYW5zbGF0ZS50cmFuc2xhdGUoc2VydmljZS5sb2NhbGUsICdTQ1JFRU5TSE9UJyk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmRheXMgPSBbXG4gICAgICAgICAgICAgICAgICAgICdNT05EQVknLFxuICAgICAgICAgICAgICAgICAgICAnVFVFU0RBWScsXG4gICAgICAgICAgICAgICAgICAgICdXRURORVNEQVknLFxuICAgICAgICAgICAgICAgICAgICAnVEhVUlNEQVknLFxuICAgICAgICAgICAgICAgICAgICAnRlJJREFZJyxcbiAgICAgICAgICAgICAgICAgICAgJ1NBVFVSREFZJyxcbiAgICAgICAgICAgICAgICAgICAgJ1NVTkRBWScsXG4gICAgICAgICAgICAgICAgICAgICdNT05EQVknXG4gICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5jb25maWcgPSBjb25maWc7XG4gICAgfVxuXG4gICAgbmdPbkNoYW5nZXMoKSB7XG4gICAgICAgIGlmICh0aGlzLmFmdGVyUHJvY2Vzcykge1xuICAgICAgICAgICAgLy90aGlzLkxhc3RVc2VySW5wdXQgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5MYXN0Qm90QW5zd2VyLnRleHQgPSB0aGlzLmNvbmZpZy5BZnRlclByb2Nlc3NTY2VuYXJpby5Cb3RNZXNzYWdlW3RoaXMuc2VydmljZS5sb2NhbGVdO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5jb25maWcuQWZ0ZXJQcm9jZXNzU2NlbmFyaW8uRm9ybUVsZW1lbnRzWzBdWzBdLmxhYmVsID09ICdKb3VyIDEnKSB7XG4gICAgICAgICAgICAgICAgbGV0IGRheTEgPSB0aGlzLmRheXNbbmV3IERhdGUoKS5nZXREYXkoKSAtIDFdO1xuICAgICAgICAgICAgICAgIGxldCBkYXkyID0gdGhpcy5kYXlzW25ldyBEYXRlKCkuZ2V0RGF5KCldO1xuICAgICAgICAgICAgICAgIGxldCBkYXkzID0gdGhpcy5kYXlzW25ldyBEYXRlKCkuZ2V0RGF5KCkgKyAxXTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZy5BZnRlclByb2Nlc3NTY2VuYXJpby5Gb3JtRWxlbWVudHNbMF1bMF0ubGFiZWwgPSBkYXkxO1xuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnLkFmdGVyUHJvY2Vzc1NjZW5hcmlvLkZvcm1FbGVtZW50c1sxXVswXS5sYWJlbCA9IGRheTI7XG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWcuQWZ0ZXJQcm9jZXNzU2NlbmFyaW8uRm9ybUVsZW1lbnRzWzJdWzBdLmxhYmVsID0gZGF5MztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cbiAgICAgICAgdGhpcy5jaGFuZ2VkID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKHRoaXMuTGFzdEJvdEFuc3dlciAmJiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dCcpICYmIHRoaXMuTGFzdEJvdEFuc3dlcj8udGV4dCAmJiAhdGhpcy5MYXN0Qm90QW5zd2VyPy50ZXh0Py5pbmNsdWRlcygnbG9hZGluZy1kb3RzJykpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0JykuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5MYXN0Qm90QW5zd2VyICYmIHRoaXMuTGFzdEJvdEFuc3dlci50ZXh0ICYmIHRoaXMuTGFzdEJvdEFuc3dlcj8udGV4dD8uaW5jbHVkZXMoJzxudW1iZXI+JykgJiYgdGhpcy5MYXN0Qm90QW5zd2VyPy50ZXh0Py5pbmNsdWRlcygnPC9udW1iZXI+JykpIHtcbiAgICAgICAgICAgIHRoaXMudXNlcklucHV0ID0gJzEnO1xuICAgICAgICAgICAgdGhpcy5pbnB1dFR5cGUgPSAnbnVtYmVyJztcbiAgICAgICAgICAgIHRoaXMuaW5wdXRMaW1pdCA9IDk5OTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBsYWNlSG9sZGVyID0gdGhpcy5OdW1iZXJQbGFjZUhvbGRlcltNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLk51bWJlclBsYWNlSG9sZGVyLmxlbmd0aCldO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGxhY2VIb2xkZXIgPSB0aGlzLlBsYWNlSG9sZGVyW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuUGxhY2VIb2xkZXIubGVuZ3RoKV07XG4gICAgICAgICAgICB0aGlzLmlucHV0VHlwZSA9IGRlZmF1bHRJbnB1dFR5cGU7XG4gICAgICAgICAgICB0aGlzLmlucHV0TGltaXQgPSBkZWZhdWx0SW5wdXRMaW1pdDtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgLyogICBpZiAoIXRoaXMuYW5pbV9kb25lKSB7XG4gICAgICAgICAgICAgICBsZXQgdDIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuTGFzdEJvdEFuc3dlciAgJiYgIXRoaXMuTGFzdEJvdEFuc3dlcj8udGV4dCAmJiAhdGhpcy5MYXN0Qm90QW5zd2VyPy50ZXh0Py5pbmNsdWRlcygnbG9hZGluZy1kb3RzJykgJiYgdGhpcy5hbmltX2RvbmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0Mik7XG4gICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0cmluZyA9IHRoaXMuTGFzdEJvdEFuc3dlcj8udGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNwbGl0KCc8YnIvPicpLmpvaW4oYCBgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNwbGl0KCcmZWFjdXRlOycpLmpvaW4oJ8OpJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zcGxpdCgnJmVncmF2ZTsnKS5qb2luKCfDqCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvPFtePl0qPj8vZ20sICcnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNwbGl0KCcmbmJzcDsnKS5qb2luKCcnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1zZ0FycmF5ID0gc3RyaW5nLnNwbGl0KCcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubWVzc2FnZUN1cnJlbnQgIT09IHN0cmluZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXdNZXNzYWdlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZUN1cnJlbnQgPSBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxhdW5jaExvb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAvL3RoaXMubG9vcGVyKGFycmF5LCB0aW1lcik7XG4gICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLkxhc3RCb3RBbnN3ZXIgJiYgdGhpcy5MYXN0Qm90QW5zd2VyLnRleHQpIHtcbiAgICAgICAgICAgICAgIGNvbnN0IHN0cmluZyA9IHRoaXMuTGFzdEJvdEFuc3dlcj8udGV4dFxuICAgICAgICAgICAgICAgICAgIC5zcGxpdCgnPGJyLz4nKS5qb2luKGAgYClcbiAgICAgICAgICAgICAgICAgICAuc3BsaXQoJyZlYWN1dGU7Jykuam9pbignw6knKVxuICAgICAgICAgICAgICAgICAgIC5zcGxpdCgnJmVncmF2ZTsnKS5qb2luKCfDqCcpXG4gICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoLzxbXj5dKj4/L2dtLCAnJylcbiAgICAgICAgICAgICAgICAgICAuc3BsaXQoJyZuYnNwOycpLmpvaW4oJycpO1xuXG4gICAgICAgICAgICAgICB0aGlzLm1zZ0FycmF5ID0gc3RyaW5nLnNwbGl0KCcnKTtcbiAgICAgICAgICAgICAgIGlmICh0aGlzLm1lc3NhZ2VDdXJyZW50ICE9PSBzdHJpbmcgJiYgc3RyaW5nICE9PSAnJykge1xuICAgICAgICAgICAgICAgICAgIHRoaXMubmV3TWVzc2FnZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlQ3VycmVudCA9IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICB0aGlzLmxhdW5jaExvb3AoKTtcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgfSovXG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZWQgPSB0cnVlO1xuICAgICAgICB9LCAxMDApO1xuICAgIH1cblxuICAgIGJpbmRDYWxlbmRhcigkZXZlbnQ6IGFueSkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKCdiaW5kQ2FsZW5kYXIgJGV2ZW50JywgJGV2ZW50KVxuICAgICAgICBkZWxldGUgJGV2ZW50LmFsbDtcbiAgICAgICAgdGhpcy5jYWxlbmRhckF2YWlsYWJpbGl0eSA9ICRldmVudDtcbiAgICB9XG5cbiAgICBnZXRDYWxlbmRhcigpIHtcbiAgICAgICAgdGhpcy5zZW5kQ2FsZW5kYXIuZW1pdCh0aGlzLmNhbGVuZGFyQXZhaWxhYmlsaXR5KTtcbiAgICB9XG5cbiAgICBza2lwKCkge1xuICAgICAgICB0aGlzLnNlbmRDYWxlbmRhci5lbWl0KG51bGwpO1xuICAgIH1cblxuICAgIGxhdW5jaExvb3AoKSB7XG4gICAgICAgIHRoaXMudGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5tc2dBcnJheS5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5uZXdNZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0JykpIHtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHQnKS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLm5ld01lc3NhZ2UgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAvL3RoaXMubXNnQXJyYXkgPSB0aGlzLm1lc3NhZ2VDdXJyZW50LnNwbGl0KFwiXCIpO1xuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcik7XG4gICAgICAgICAgICAgICAgdGhpcy5sYXVuY2hMb29wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmxvb3BlcigpO1xuICAgICAgICB9LCA2MCk7XG4gICAgfVxuXG4gICAgbG9vcGVyKCkge1xuICAgICAgICBpZiAodGhpcy5tc2dBcnJheS5sZW5ndGggPiAwICYmICF0aGlzLnJlbG9hZGVkKSB7XG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHQnKSkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0JykuaW5uZXJIVE1MICs9IHRoaXMubXNnQXJyYXkuc2hpZnQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmlucHV0VHlwZSA9IGRlZmF1bHRJbnB1dFR5cGU7XG4gICAgICAgIHRoaXMuaW5wdXRMaW1pdCA9IGRlZmF1bHRJbnB1dExpbWl0O1xuICAgICAgICBpZiAodGhpcy5QbGFjZUhvbGRlcikge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGxhY2VIb2xkZXIgPSB0aGlzLlBsYWNlSG9sZGVyW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuUGxhY2VIb2xkZXIubGVuZ3RoKV07XG4gICAgICAgICAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UGxhY2VIb2xkZXIgPSB0aGlzLlBsYWNlSG9sZGVyW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuUGxhY2VIb2xkZXIubGVuZ3RoKV07XG4gICAgICAgICAgICB9LCAzMDAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVzZXJXcml0aW5nKGtleTogYW55KSB7XG4gICAgICAgIGlmIChrZXkuY29kZSA9PT0gJ0VudGVyJykge1xuICAgICAgICAgICAgdGhpcy5ib3RMaXN0ZW5pbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuYm90TGlzdGVuaW5nVGltZXIgPSAwO1xuICAgICAgICB9IGVsc2UgaWYgKGtleS5jb2RlID09PSAnQmFja3NwYWNlJykge1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmJvdExpc3RlbmluZyA9IHRydWU7XG4gICAgICAgICAgICBpZiAodGhpcy5ib3RMaXN0ZW5pbmdUaW1lciA9PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ib3RMaXN0ZW5pbmdUaW1lciArPSAyO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmJvdExpc3RlbmluZ1RpbWVyIDwgNSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYm90TGlzdGVuaW5nVGltZXIgKz0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBlbWl0KCRldmVudCkge1xuICAgICAgICB0aGlzLmZpcnN0VmlzaXQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yZWFkeVNlbmQuZW1pdCh0cnVlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgX3NlbmQoKSB7XG4gICAgICAgIGlmICh0aGlzLkxhc3RCb3RBbnN3ZXI/LmVuZE9mVG9waWMgJiYgdGhpcy5MYXN0VXNlcklucHV0KSB7XG4gICAgICAgICAgICB0aGlzLkxhc3RVc2VySW5wdXQubWVzc2FnZSA9ICcnO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5ib3RMaXN0ZW5pbmcgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgdXNlckRhdGE6IFVzZXJJbnB1dCA9IHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IHRoaXMudXNlcklucHV0LFxuICAgICAgICAgICAgZGF0ZTogbmV3IERhdGUoKS50b0xvY2FsZVRpbWVTdHJpbmcobmF2aWdhdG9yLmxhbmd1YWdlLCB7XG4gICAgICAgICAgICAgICAgaG91cjogJzItZGlnaXQnLFxuICAgICAgICAgICAgICAgIG1pbnV0ZTogJzItZGlnaXQnXG4gICAgICAgICAgICB9KVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnNlbmQuZW1pdCh1c2VyRGF0YSk7XG4gICAgICAgIHRoaXMudXNlcklucHV0ID0gbnVsbDtcbiAgICB9XG5cbiAgICBhc3luYyBzY3JvbGwoc2Nyb2xsSGVpZ2h0OiBudW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPG51bWJlcj4oKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoMCk7XG4gICAgICAgICAgICB9LCAzMDApO1xuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIGJ5UGFzc1VzZXJJbnB1dChib3RkYXRhOiBzdHJpbmcsIGk/OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5zZW5kQm90Q29tbWFuZC5lbWl0KGJvdGRhdGEpO1xuICAgIH1cbn1cbiIsIjwhLS08ZGl2IGNsYXNzPVwiYm90LWNvbnRhaW5lclwiICBbY2xhc3NdPVwiSXNNb2JpbGUgPyAnYm90LW1vYmlsZScgOiAnJ1wiIFtzdHlsZV09XCJ7J2JhY2tncm91bmQtY29sb3InIDogJyMxMDA2NTIgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94Oyd9XCItLT5cblxuICA8IS0tPGNhbnZhcyBjbGFzcz1cIm9yYi1jYW52YXNcIj48L2NhbnZhcz5cbiAgPGRpdiBjbGFzcz1cIm92ZXJsYXlcIj5cbiAgICA8ZGl2IGNsYXNzPVwib3ZlcmxheV9faW5uZXJcIj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+LS0+XG4gIDxkaXYgY2xhc3M9XCJib3QtY29udGFpbmVyXCIgIFtjbGFzc109XCJJc01vYmlsZSA/ICdib3QtbW9iaWxlJyA6ICcnXCIgW3N0eWxlXT1cInsnYmFja2dyb3VuZC1jb2xvcicgOiAnIzEwMDY1MiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7J31cIlxuICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkvaHRtbFwiPlxuICA8ZGl2IGNsYXNzPVwiYm90LXZpZXdcIj5cbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZmlyc3RWaXNpdCAmJiBmaXJzdFVzYWdlU3RvcnlcIj5cbiAgICAgIDxib3QtZmlyc3QtdmlzaXQgW2ZpcnN0VXNhZ2VTdG9yeV09XCJmaXJzdFVzYWdlU3RvcnlcIiBbYXNzZXRzXT1cImFzc2V0c1wiXG4gICAgICAgICAgICAgICAgICAgICAgIChyZWFkeSk9XCJlbWl0KCRldmVudClcIj48L2JvdC1maXJzdC12aXNpdD5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWZpcnN0VmlzaXQgfHwgIWZpcnN0VXNhZ2VTdG9yeVwiPlxuICAgICAgPGJ1dHRvbiAoY2xpY2spPVwiYnlQYXNzVXNlcklucHV0KCdleGl0JywgMClcIiBpZD1cImV4aXQtYnRuXCIgc3R5bGU9XCJkaXNwbGF5OiBub25lO1wiPjwvYnV0dG9uPlxuXG4gICAgICA8ZGl2IGNsYXNzPVwiYm90LWFzc2lzdGFudC13cmFwcGVyXCIgKm5nSWY9XCJBc3Npc3RhbnRNb2RlXCI+XG4gICAgICAgIDwhLS0gVE9ETyBkbyB3ZSBuZWVkIGlkLCByZW1vdmUgaXQ/IC0tPlxuICAgICAgICA8IS0tPGRpdiAqbmdJZj1cIiFib3RMaXN0ZW5pbmdcIiBjbGFzcz1cImJvdC1sb2dvXCIgaWQ9XCJib3Rsb2dvXCI+XG4gICAgICAgICAgPGltZyBbc3JjXT1cImFzc2V0cy5GdWxsU2l6ZUxvZ29cIj5cbiAgICAgICAgPC9kaXY+LS0+XG4gICAgICAgIDwhLS08ZGl2IFtuZ1N0eWxlXT1cInsnaGVpZ2h0JzogJzQwJSd9XCIgY2xhc3M9XCJib3QtbG9nbyBib3QtbGlzdGVuaW5nXCI+XG4gICAgICAgICAgPGRpdiBbbmdTdHlsZV09XCJ7J3RyYW5zZm9ybSc6ICd0cmFuc2xhdGVZKC0xMHZoKSd9XCIgY2xhc3M9XCJtLWNhcmwtbm90aWZpY2F0aW9uXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibS1jYXJsLW5vdGlmaWNhdGlvbi1jdWUgbS1jdWVcIj5cbiAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cImJvdExpc3RlbmluZ1wiIGNsYXNzPVwiYS1jdWUtdm9pY2VcIiBpZD1cImJvdFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhLWN1ZS12b2ljZS1lbCB2b2ljZTFcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYS1jdWUtdm9pY2UtZWwgdm9pY2UyXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImEtY3VlLXZvaWNlLWVsIHZvaWNlM1wiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhLWN1ZS12b2ljZS1lbCB2b2ljZTRcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYS1jdWUtdm9pY2UtZWxcIj48L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhLWN1ZS1pY29uXCIgaWQ9XCJib3QtaWNvblwiPjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2Pi0tPlxuXG4gICAgICAgIDxkaXYgW0BGYWRlU2xpZGVJbk91dEtvbnZlcnNvT3BhY2l0eU91dF09XCJhbmltYXRpb25zLkZhZGVTbGlkZUluT3V0KGFuaW1hdGlvblRUWCwgYW5pbWF0aW9uU2xpZGVWYWx1ZSlcIiBbbmdTdHlsZV09XCJ7J2hlaWdodCc6ICc0MCUnfVwiIGNsYXNzPVwiYm90XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZTFcIj48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlMlwiPjwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGUzXCI+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgIGNsYXNzPVwiYm90LWRpc2N1c3Npb24td3JhcHBlclwiIHN0eWxlPVwibWluLWhlaWdodDogNjAlOyBtYXgtaGVpZ2h0OiA2MCU7IGhlaWdodDogNjAlOyAvKm1heC1oZWlnaHQ6IDEyMHB4OyovXCI+XG4gICAgICAgICAgPCEtLSBVU0VSIElOUFVUIC0tPlxuICAgICAgICAgIDxkaXYgW2NsYXNzLnVzZXItaW5wdXQtY29udGFpbmVyLW91dGVyLWhpZGRlbl09XCIhc2hvd1VzZXJJbnZpdGF0aW9uXCIgY2xhc3M9XCJvdmVyZmxvdy1oaWRkZW4gZC1mbGV4IGZsZXgtY29sdW1uIHctMTAwIHBvc2l0aW9uLXJlbGF0aXZlIHVzZXItaW5wdXQtY29udGFpbmVyLW91dGVyXCI+XG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiKExhc3RVc2VySW5wdXQgJiYgIWFmdGVyUHJvY2VzcykgfHwgIXNob3dVc2VySW52aXRhdGlvblwiPlxuICAgICAgICAgICAgICA8ZGl2IFtARmFkZVNsaWRlSW5PdXRLb252ZXJzb0hlaWdodFRlc3RdPVwiYW5pbWF0aW9ucy5GYWRlU2xpZGVJbk91dChhbmltYXRpb25IZWlnaHRUVFgqMS41LCBhbmltYXRpb25TbGlkZVZhbHVlKVwiIGNsYXNzPVwib3ZlcmZsb3ctaGlkZGVuIGQtZmxleCBmbGV4LWNvbHVtbiB3LTEwMCB1c2VyLWlucHV0LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgW0BGYWRlU2xpZGVJbk91dEtvbnZlcnNvVHJhbnNsYXRlT3V0VGVzdF09XCJhbmltYXRpb25zLkZhZGVTbGlkZUluT3V0KGFuaW1hdGlvblRUWCoxLjUsIGFuaW1hdGlvblNsaWRlVmFsdWUpXCIgW2NsYXNzLnVzZXItaW5wdXQtdG9wXT1cIkxhc3RVc2VySW5wdXQ/Lm1lc3NhZ2UgIT0gJydcIiAgY2xhc3M9XCJ1c2VyLWlucHV0XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGF0YVwiIFtzdHlsZV09XCJ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yIDogYXNzZXRzPy5Db2xvclNldD8uU2Vjb25kYXJ5XG4gICAgICAgICAgICAgICAgICAgICAgICB9XCIgW2lubmVySFRNTF09XCJMYXN0VXNlcklucHV0Lm1lc3NhZ2VcIj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0aW1lXCI+e3tMYXN0VXNlcklucHV0LmRhdGV9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDwhLS0gQk9UIEFOU1dFUiAtLT5cbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiTGFzdEJvdEFuc3dlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvc2l0aW9uLXJlbGF0aXZlIGJvdC1hbnN3ZXJcIj5cbiAgICAgICAgICAgICAgPGRpdiBbY2xhc3MubXQtNF09XCIhc2hvd1VzZXJJbnZpdGF0aW9uXCIgY2xhc3M9XCJkLWZsZXggZmxleC1jb2x1bW4gdy0xMDAgcG9zaXRpb24tcmVsYXRpdmUgYm90LWFuc3dlcl9fdGV4dFwiPlxuXG4gICAgICAgICAgICAgICAgPCEtLSBCT1QgQU5TV0VSIFRFWFQgLS0+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIkxhc3RCb3RBbnN3ZXIudGV4dFwiPlxuICAgICAgICAgICAgICAgICAgPCEtLTxzcGFuICpuZ0lmPVwiIUxhc3RCb3RBbnN3ZXIudGV4dC5pbmNsdWRlcygnbG9hZGluZy1kb3RzJylcIiBpZD1cInRleHRcIj48L3NwYW4+PGJyPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJjaGFuZ2VkICYmIExhc3RCb3RBbnN3ZXIudGV4dC5pbmNsdWRlcygnbG9hZGluZy1kb3RzJylcIiBjbGFzcz1cImZhZGVcIiBbaW5uZXJIVE1MXT1cIkxhc3RCb3RBbnN3ZXIudGV4dCB8IHNhZmVIdG1sXCI+PC9zcGFuPjxicj5cbiAgICAgICAgICAgICAgICAgIC0tPlxuICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFMYXN0Qm90QW5zd2VyPy50ZXh0Py5pbmNsdWRlcygnbG9hZGluZy1kb3RzJykgJiYgY2hhbmdlZCAmJiBzaG93VGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBbQEZhZGVTbGlkZUluT3V0S29udmVyc29UcmFuc2xhdGVPdXRdPVwiYW5pbWF0aW9ucy5GYWRlU2xpZGVJbk91dChhbmltYXRpb25UVFgsIC0xMDApXCIgY2xhc3M9XCJ3LTEwMCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCIgW2lubmVySFRNTF09XCJMYXN0Qm90QW5zd2VyLnRleHQgfCBzYWZlSHRtbFwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFhZnRlclByb2Nlc3NcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gaWQ9XCJsb2FkaW5nLWNyZWF0aW9uXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJMYXN0Qm90QW5zd2VyLm1lZGlhcyAmJiBMYXN0Qm90QW5zd2VyLm1lZGlhcy5sZW5ndGhcbiAgICAgICAgICAgICAgICAmJiBMYXN0Qm90QW5zd2VyLm1lZGlhc1swXS5yZXF1aXJlZF9hY3Rpb25zXG4gICAgICAgICAgICAgICAgJiYgTGFzdEJvdEFuc3dlci5tZWRpYXNbMF0ucmVxdWlyZWRfYWN0aW9ucy5sZW5ndGggPiAwXG4gICAgICAgICAgICAgICAgJiYgIUxhc3RCb3RBbnN3ZXI/LnRleHQ/LmluY2x1ZGVzKCdsb2FkaW5nLWRvdHMnKVwiPlxuICAgICAgICAgICAgICAgIDwhLS0gQk9UIEFOU1dFUiBCVVRUT05TIC0tPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtdDM1IGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIHctMTAwIHBvc2l0aW9uLXJlbGF0aXZlIGJvdC1hbnN3ZXJfX2J1dHRvbnNcIj5cbiAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IHN1Z2dlc3Qgb2YgTGFzdEJvdEFuc3dlci5tZWRpYXNbMF0ucmVxdWlyZWRfYWN0aW9uczsgbGV0IGkgPSBpbmRleFwiPlxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwic3VnZ2VzdC5mb3JtYXQgPT09ICdidXR0b24nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtARmFkZVNsaWRlSW5PdXRLb252ZXJzb1RyYW5zbGF0ZU91dF09XCJhbmltYXRpb25zLkZhZGVTbGlkZUluT3V0KGFuaW1hdGlvblRUWCwgLTEwMClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cInN1Z2dlc3QudmFsdWU/LnRpdGxlID09ICdUZXJtaW5lcicgJiYgY2hhbmdlZCB8fCBzdWdnZXN0LnZhbHVlPy50aXRsZSA9PSAnUXVpdCcgJiYgY2hhbmdlZFwiIFtzdHlsZV09XCJ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3IgOiBhc3NldHM/LkNvbG9yU2V0Py5QcmltYXJ5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yIDogYXNzZXRzPy5Db2xvclNldD8uUHJpbWFyeVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJib3QtYnV0dG9uIGJvdC1idXR0b24tbGVmdCBzaG93LWJ0blwiIChjbGljayk9XCJieVBhc3NVc2VySW5wdXQoc3VnZ2VzdD8udmFsdWU/Lm9uQ2xpY2ssIGkpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW2lubmVySFRNTF09XCJzdWdnZXN0LmxhYmVsfHwgc3VnZ2VzdC52YWx1ZT8uZGlzcGxheWVkTWVzc2FnZSB8fCBzdWdnZXN0LnZhbHVlPy50aXRsZSBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICBbQEZhZGVTbGlkZUluT3V0S29udmVyc29UcmFuc2xhdGVPdXRdPVwiYW5pbWF0aW9ucy5GYWRlU2xpZGVJbk91dChhbmltYXRpb25UVFgsIC0xMDApXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJzdWdnZXN0LnZhbHVlPy50aXRsZSA9PSAnTm91dmVsbGUgRGVtYW5kZScgJiYgY2hhbmdlZCB8fCBzdWdnZXN0LnZhbHVlPy50aXRsZSA9PSAnTmV3IFJlcXVlc3QnICYmIGNoYW5nZWRcIiBbc3R5bGVdPVwie1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yIDogYXNzZXRzPy5Db2xvclNldD8uUHJpbWFyeSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvciA6IGFzc2V0cz8uQ29sb3JTZXQ/LlByaW1hcnlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYm90LWJ1dHRvbiBib3QtYnV0dG9uLXJpZ2h0IHNob3ctYnRuXCIgKGNsaWNrKT1cImJ5UGFzc1VzZXJJbnB1dChzdWdnZXN0Py52YWx1ZT8ub25DbGljaywgaSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBbaW5uZXJIVE1MXT1cInN1Z2dlc3QubGFiZWx8fCBzdWdnZXN0LnZhbHVlPy5kaXNwbGF5ZWRNZXNzYWdlIHx8IHN1Z2dlc3QudmFsdWU/LnRpdGxlIFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtARmFkZVNsaWRlSW5PdXRLb252ZXJzb1RyYW5zbGF0ZU91dF09XCJhbmltYXRpb25zLkZhZGVTbGlkZUluT3V0KGFuaW1hdGlvblRUWCwgLTEwMClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cInN1Z2dlc3QudmFsdWU/LnRpdGxlICYmIHN1Z2dlc3QudmFsdWU/LnRpdGxlICE9ICdUZXJtaW5lcicgJiYgc3VnZ2VzdC52YWx1ZT8udGl0bGUgIT0gJ1F1aXQnICYmIHN1Z2dlc3QudmFsdWU/LnRpdGxlICE9ICdOb3V2ZWxsZSBEZW1hbmRlJyAmJiBzdWdnZXN0LnZhbHVlPy50aXRsZSAhPSAnTmV3IFJlcXVlc3QnICYmIGNoYW5nZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtzdHlsZV09XCJ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3IgOiBhc3NldHM/LkNvbG9yU2V0Py5QcmltYXJ5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yIDogYXNzZXRzPy5Db2xvclNldD8uUHJpbWFyeVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJib3QtYnV0dG9uIGJvdC1idXR0b24tZ3JleSBzaG93LWJ0blwiIChjbGljayk9XCJieVBhc3NVc2VySW5wdXQoc3VnZ2VzdD8udmFsdWU/Lm9uQ2xpY2ssIGkpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW2lubmVySFRNTF09XCJzdWdnZXN0LmxhYmVsfHwgc3VnZ2VzdC52YWx1ZT8uZGlzcGxheWVkTWVzc2FnZSB8fCBzdWdnZXN0LnZhbHVlPy50aXRsZSBcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJkaXNhYmxlVXNlcklucHV0XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9zaXRpb24tcmVsYXRpdmUgYm90LWFuc3dlcl9fZGlzYWJsZS1pbnB1dFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IFtARmFkZVNsaWRlSW5PdXRLb252ZXJzb1RyYW5zbGF0ZU91dF09XCJhbmltYXRpb25zLkZhZGVTbGlkZUluT3V0KGFuaW1hdGlvblRUWCwgLTEwMClcIiBjbGFzcz1cImJvdC1pbnB1dC1kaXNhYmxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGk+e3sgc2VsZWN0IH19PC9pPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPCEtLSBCT1QgQU5TV0VSIEJVVFRPTlMgLS0+XG5cbiAgICAgICAgICAgICAgPCEtLTxuZy1jb250YWluZXIgKm5nSWY9XCJhZnRlclByb2Nlc3MgJiYgY29uZmlnLkFmdGVyUHJvY2Vzc1NjZW5hcmlvLkZvcm1FbGVtZW50cy5sZW5ndGggPiAwXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFmdGVyLXByb2Nlc3MtZm9ybVwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFmdGVyLXByb2Nlc3Mtc3ViZm9ybVwiICpuZ0Zvcj1cImxldCBmb3JtRWxlbWVudHMgb2YgY29uZmlnLkFmdGVyUHJvY2Vzc1NjZW5hcmlvLkZvcm1FbGVtZW50c1wiPlxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBmb3JtIG9mIGZvcm1FbGVtZW50c1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgW25nU3dpdGNoXT1cImZvcm0udHlwZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiAqbmdTd2l0Y2hDYXNlPVwiJ2NoZWNrYm94J1wiIFtuZ1N0eWxlXT1cInsnZGlzcGxheSc6IGZvcm0/LmRpc3BsYXkgPyBmb3JtLmRpc3BsYXk6ICdibG9jayd9XCIgY2xhc3M9XCJib3QtY2hlY2tib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFtjaGVja2VkXT1cImZvcm0/LmNoZWNrZWQgPT0gdHJ1ZSA/ICd0cnVlJzogJ2ZhbHNlJ1wiIFtpZF09XCJmb3JtPy5pZFwiIFtuYW1lXT1cImZvcm0/LmlkXCIgW3R5cGVdPSdmb3JtPy50eXBlJyB2YWx1ZT1cImZhbHNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBbZm9yXT1cImZvcm0/LmlkXCIgY2xhc3M9XCJib3QtY2hlY2tib3gtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyB0cmFuc2xhdGUudHJhbnNsYXRlKHNlcnZpY2UubG9jYWxlLCBmb3JtLmxhYmVsKSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBbY2xhc3NdPVwiZm9ybT8uY2xhc3NcIiBbaWRdPVwiZm9ybT8uaWRcIiBbbmdTdHlsZV09XCJ7J2Rpc3BsYXknOiBmb3JtPy5kaXNwbGF5ID8gZm9ybS5kaXNwbGF5OiAnYmxvY2snfVwiICpuZ1N3aXRjaENhc2U9XCIndGV4dCdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW3BhdHRlcm5dPVwiZm9ybT8ucGF0dGVyblwiIFtwbGFjZWhvbGRlcl09XCJmb3JtPy5wbGFjZWhvbGRlclwiIFt0eXBlXT1cImZvcm0/LnR5cGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW3ZhbHVlXT1cImZvcm0/LnZhbHVlXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgW2NsYXNzXT1cImZvcm0/LmNsYXNzXCIgKm5nU3dpdGNoQ2FzZT1cIidkaXYnXCIgW25nU3R5bGVdPVwieydkaXNwbGF5JzogZm9ybT8uZGlzcGxheSA/IGZvcm0uZGlzcGxheTogJ2Jsb2NrJ31cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge3sgdHJhbnNsYXRlLnRyYW5zbGF0ZShzZXJ2aWNlLmxvY2FsZSwgZm9ybT8uY29udGVudCkgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgW2NsYXNzXT1cImZvcm0/LmNsYXNzXCIgW2lkXT1cImZvcm0/LmlkXCIgKm5nU3dpdGNoQ2FzZT1cIid0ZXh0YXJlYSdcIiBbbmdTdHlsZV09XCJ7J2Rpc3BsYXknOiBmb3JtPy5kaXNwbGF5ID8gZm9ybS5kaXNwbGF5OiAnYmxvY2snfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwidHJhbnNsYXRlLnRyYW5zbGF0ZShzZXJ2aWNlLmxvY2FsZSwgZm9ybT8ucGxhY2Vob2xkZXIpXCI+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+LS0+XG5cbiAgICAgICAgICAgICAgPGN1c3RvbS1jaGVja2JveC1jYWxlbmRhclxuICAgICAgICAgICAgICAgIFtARmFkZVNsaWRlSW5PdXRLb252ZXJzb0hlaWdodFRlc3RdPVwiYW5pbWF0aW9ucy5GYWRlU2xpZGVJbk91dChhbmltYXRpb25UVFgsIGFuaW1hdGlvblNsaWRlVmFsdWUpXCJcbiAgICAgICAgICAgICAgICAqbmdJZj1cImFmdGVyUHJvY2Vzc1wiXG4gICAgICAgICAgICAgICAgW3N0YXRlXT1cImFmdGVyUHJvY2Vzc1wiXG4gICAgICAgICAgICAgICAgKGNhbGVuZGFyQ2hhbmdlKT1cImJpbmRDYWxlbmRhcigkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICBbY2FsZW5kYXJUZW1wbGF0ZV09XCJjYWxlbmRhclRlbXBsYXRlXCJcbiAgICAgICAgICAgICAgICBbY29sdW1uT3ZlcnJpZGVdPVwiY2FsZW5kYXJLZXlPdmVycmlkZVwiPlxuICAgICAgICAgICAgICA8L2N1c3RvbS1jaGVja2JveC1jYWxlbmRhcj5cblxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaW5wdXRUeXBlID09PSAnbnVtYmVyJ1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgW0BGYWRlU2xpZGVJbk91dEtvbnZlcnNvT3BhY2l0eU91dF09XCJhbmltYXRpb25zLkZhZGVTbGlkZUluT3V0KGFuaW1hdGlvblRUWCwgYW5pbWF0aW9uU2xpZGVWYWx1ZSlcIiBjbGFzcz1cImJvdC1pbnB1dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS08aW5wdXQgW3R5cGVdPVwiaW5wdXRUeXBlXCIgWyhuZ01vZGVsKV09XCJ1c2VySW5wdXRcIiAoa2V5dXAuZW50ZXIpPVwidXNlcklucHV0ICYmIF9zZW5kKClcIiAoa2V5dXApPVwidXNlcldyaXRpbmcoJGV2ZW50KVwiIG1pbj1cIjJcIiBbbWF4XT1cImlucHV0TGltaXRcIlxuICAgICAgICAgICAgICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwiY3VycmVudFBsYWNlSG9sZGVyXCI+LS0+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtbnVtYmVyLWRpdlwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtbnVtYmVyLWRpdi1hcnJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gKGNsaWNrKT1cImNoYW5nZU51bWJlcigxKVwiIGNsYXNzPVwiYXJyb3ctdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxuYi1pY29uIFtpY29uXT1cIid1cF8yJ1wiIFtzaXplXT1cIjEuNVwiPjwvbmItaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gKGNsaWNrKT1cImNoYW5nZU51bWJlcigtMSlcIiBjbGFzcz1cImFycm93LWRvd25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxuYi1pY29uIFtpY29uXT1cIidkb3duXzInXCIgW3NpemVdPVwiMS41XCI+PC9uYi1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICB7eyB1c2VySW5wdXQgfX1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm90LWNvbnRhaW5lci1idG5cIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJvdC1idXR0b24gc2VuZC1idG4gaW5wdXQtbnVtYmVyLWJ0biBzaG93VXNlcklucHV0Q29udHJvbHNcIiBbc3R5bGVdPVwie1xuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvciA6IGFzc2V0cz8uQ29sb3JTZXQ/LlByaW1hcnksXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3IgOiBhc3NldHM/LkNvbG9yU2V0Py5TZWNvbmRhcnlcbiAgICAgICAgICAgICAgICAgIH1cIiAoY2xpY2spPVwiX3NlbmQoKTtzaG93VXNlcklucHV0Q29udHJvbHM9ZmFsc2U7c2hvd1VzZXJJbnZpdGF0aW9uPSFzaG93VXNlckludml0YXRpb247XCIgW2Rpc2FibGVkXT1cIiF1c2VySW5wdXRcIj5cblxuICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpbnB1dFR5cGUgPT09ICdudW1iZXInXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7eyBzZW5kQnRuIH19XG4gICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9zaXRpb24tcmVsYXRpdmUgYm90LWlucHV0LXdyYXBwZXJcIj5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJhZnRlclByb2Nlc3MgJiYgY29uZmlnLkFmdGVyUHJvY2Vzc1NjZW5hcmlvLkZvcm1CdXR0b25zLmxlbmd0aCA+IDBcIj5cbiAgICAgICAgICAgICAgPCEtLTxidXR0b24gW2NsYXNzXT1cImJ0bi5jbGFzc1wiICpuZ0Zvcj1cImxldCBidG4gb2YgY29uZmlnLkFmdGVyUHJvY2Vzc1NjZW5hcmlvLkZvcm1CdXR0b25zXCIgW25nU3R5bGVdPVwieydkaXNwbGF5JzogYnRuPy5kaXNwbGF5ID8gYnRuLmRpc3BsYXk6ICdibG9jayd9XCI+XG4gICAgICAgICAgICAgICAge3sgdHJhbnNsYXRlLnRyYW5zbGF0ZShzZXJ2aWNlLmxvY2FsZSwgYnRuLmxhYmVsKSB9fVxuICAgICAgICAgICAgICA8L2J1dHRvbj4tLT5cbiAgICAgICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwiZ2V0Q2FsZW5kYXIoKVwiIGNsYXNzPVwicHJpbWFyeSByb3VuZGVkIHZhbGlkYXRlLWFmdGVyLWJ0blwiIHN0eWxlPVwiZGlzcGxheTogaW5saW5lLWJsb2NrO1wiPlxuICAgICAgICAgICAgICAgIHt7IHRyYW5zbGF0ZS50cmFuc2xhdGUoc2VydmljZS5sb2NhbGUsICdWQUxJREFURV9BVkFJTEFCSUxJVFknKSB9fVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwicm91bmRlZCBzZWNvbmRhcnkgc2tpcC1hZnRlci1idG5cIiBzdHlsZT1cImRpc3BsYXk6IGlubGluZS1ibG9jaztcIiAoY2xpY2spPVwic2tpcCgpXCI+XG4gICAgICAgICAgICAgICAge3sgdHJhbnNsYXRlLnRyYW5zbGF0ZShzZXJ2aWNlLmxvY2FsZSwgJ1NLSVAnKSB9fVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWFmdGVyUHJvY2VzcyAmJiBzaG93VXNlcklucHV0Q29udHJvbHMgJiYgaW5wdXRUeXBlICE9PSAnbnVtYmVyJ1wiPlxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWRpc2FibGVVc2VySW5wdXQgJiYgc2hvd0lucHV0XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBmbGV4LWNvbHVtbiB3LTEwMCBwb3NpdGlvbi1yZWFsdGl2ZSBib3QtaW5wdXRcIiBpZD1cImJvdC1pbnB1dC1kaXZcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgW0BGYWRlU2xpZGVJbk91dEtvbnZlcnNvVHJhbnNsYXRlT3V0XT1cImFuaW1hdGlvbnMuRmFkZVNsaWRlSW5PdXQoYW5pbWF0aW9uVFRYLCBhbmltYXRpb25TbGlkZVZhbHVlQWRkKVwiIGNsYXNzPVwidy0xMDAgaC0xMDAgZC1mbGV4IGZsZXgtY29sdW1uIHBvc2l0aW9uLWFic29sdXRlIGJvdC1pbnB1dF9fY29udHJvbHNcIj5cblxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaW5wdXRUeXBlID09PSAndGV4dCdcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgWyhuZ01vZGVsKV09XCJ1c2VySW5wdXRcIiAoa2V5dXAuZW50ZXIpPVwidXNlcklucHV0ICYmIF9zZW5kKClcIiAoa2V5dXApPVwidXNlcldyaXRpbmcoJGV2ZW50KVwiIFttYXhsZW5ndGhdPVwiaW5wdXRMaW1pdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwiY3VycmVudFBsYWNlSG9sZGVyXCI+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImlucHV0VHlwZSAhPT0gJ251bWJlcidcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm90LWNvbnRhaW5lci1idG5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJib3QtYnV0dG9uIHNlbmQtYnRuXCIgW3N0eWxlXT1cIntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yIDogYXNzZXRzPy5Db2xvclNldD8uUHJpbWFyeSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3IgOiBhc3NldHM/LkNvbG9yU2V0Py5TZWNvbmRhcnl9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cIl9zZW5kKClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiIXVzZXJJbnB1dFwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpbnB1dFR5cGUgIT09ICdudW1iZXInXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgc2VuZEJ0bk1zZyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tPG5nLWNvbnRhaW5lciAqbmdJZj1cImlucHV0VHlwZSA9PT0gJ251bWJlcidcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBzZW5kQnRuIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPi0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gKm5nSWY9XCJpbnB1dFR5cGUgIT09ICdudW1iZXInICYmIElzTW9iaWxlXCIgY2xhc3M9XCJib3QtYnV0dG9uLXNjcmVlblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bmItaWNvbiBbaWNvbl09XCInc2Nhbl8xMSdcIiBbc2l6ZV09XCIxLjVcIj48L25iLWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGJ0blNjcmVlbiB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gKm5nSWY9XCJpbnB1dFR5cGUgIT09ICdudW1iZXInXCIgY2xhc3M9XCJib3QtYnV0dG9uLWF0dGFjaFwiIChjbGljayk9XCJvcGVuVXBsb2FkLmVtaXQodHJ1ZSlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge3sgbmJGaWxlcyB9fVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJuYkZpbGVzIDw9IDFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyB0cmFuc2xhdGUudHJhbnNsYXRlKHNlcnZpY2UubG9jYWxlLCAnQVRUQUNITUVOVCcpIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJuYkZpbGVzID4gMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHRyYW5zbGF0ZS50cmFuc2xhdGUoc2VydmljZS5sb2NhbGUsICdBVFRBQ0hNRU5UUycpIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxuYi1pY29uIFtpY29uXT1cIidhdHRhY2htZW50J1wiIFtzaXplXT1cIjEuNVwiPjwvbmItaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJib3QtY2hhdC13cmFwcGVyXCIgKm5nSWY9XCIhQXNzaXN0YW50TW9kZVwiPlxuICAgICAgICB7e0Fzc2lzdGFudE1vZGV9fVxuICAgICAgICA8ZGl2IGNsYXNzPVwiYm90LWRpc2N1c3Npb24td3JhcHBlclwiICNzY3JvbGxNZSBbc2Nyb2xsVG9wXT1cInNjcm9sbE1lLnNjcm9sbFRvKDAsIDk5OTk5OTkpXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImJvdC1jaGF0XCI+XG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBlbnRyeSBvZiBkaXNwbGF5RGF0YVwiPlxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZW50cnkuZGF0ZVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgW0BGYWRlU2xpZGVJbk91dEtvbnZlcnNvVHJhbnNsYXRlT3V0XT1cImFuaW1hdGlvbnMuRmFkZVNsaWRlSW5PdXQoYW5pbWF0aW9uVFRYLCBhbmltYXRpb25TbGlkZVZhbHVlKVwiIGNsYXNzPVwidXNlci1pbnB1dFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRhdGFcIiBbc3R5bGVdPVwie1xuICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yIDogYXNzZXRzPy5Db2xvclNldD8uUHJpbWFyeSxcbiAgICAgICAgICAgICAgICAgICAgIGNvbG9yIDogYXNzZXRzPy5Db2xvclNldD8uU2Vjb25kYXJ5XG4gICAgICAgICAgICAgICAgICAgIH1cIiBbaW5uZXJIVE1MXT1cImVudHJ5Lm1lc3NhZ2VcIj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0aW1lXCI+e3tlbnRyeS5kYXRlfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWVudHJ5LmRhdGVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm90LWFuc3dlclwiPlxuICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImVudHJ5LnRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJjaGFuZ2VkXCIgY2xhc3M9XCJcIiBbaW5uZXJIVE1MXT1cImVudHJ5LnRleHQgfCBzYWZlSHRtbFwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImVudHJ5Lm1lZGlhcyAmJiBlbnRyeS5tZWRpYXMubGVuZ3RoXG4gICAgICAgICAgICAgICAgICAgJiYgZW50cnkubWVkaWFzWzBdLnJlcXVpcmVkX2FjdGlvbnNcbiAgICAgICAgICAgICAgICAgICAmJiBlbnRyeS5tZWRpYXNbMF0ucmVxdWlyZWRfYWN0aW9ucy5sZW5ndGhcIj5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgc3VnZ2VzdCBvZiBlbnRyeS5tZWRpYXNbMF0ucmVxdWlyZWRfYWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJzdWdnZXN0LmZvcm1hdCA9PT0gJ2J1dHRvbidcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gKm5nSWY9XCJjaGFuZ2VkXCIgW3N0eWxlXT1cIntcbiAgICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yIDogYXNzZXRzPy5Db2xvclNldD8uUHJpbWFyeSxcbiAgICAgICAgICAgICAgICAgICAgIGNvbG9yIDogYXNzZXRzPy5Db2xvclNldD8uUHJpbWFyeVxuICAgICAgICAgICAgfVwiIGNsYXNzPVwiYm90LWJ1dHRvblwiIChjbGljayk9XCJieVBhc3NVc2VySW5wdXQoc3VnZ2VzdD8udmFsdWU/Lm9uQ2xpY2spXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2lubmVySFRNTF09XCJzdWdnZXN0LmxhYmVsfHwgc3VnZ2VzdC52YWx1ZT8uZGlzcGxheWVkTWVzc2FnZSB8fCBzdWdnZXN0LnZhbHVlPy50aXRsZSBcIj48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImJvdC1pbnB1dC13cmFwcGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImJvdC1pbnB1dFwiICpuZ0lmPVwiIWRpc2FibGVVc2VySW5wdXQgJiYgc2hvd0lucHV0XCI+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBbKG5nTW9kZWwpXT1cInVzZXJJbnB1dFwiIChrZXl1cC5lbnRlcik9XCJ1c2VySW5wdXQgJiYgX3NlbmQoKVwiIChrZXl1cCk9XCJ1c2VyV3JpdGluZygkZXZlbnQpXCIgbWF4bGVuZ3RoPVwiMjAwXCJcbiAgICAgICAgICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwiY3VycmVudFBsYWNlSG9sZGVyXCI+XG4gICAgICAgICAgICA8YnV0dG9uICpuZ0lmPVwiY2hhbmdlZFwiIGNsYXNzPVwiYm90LWJ1dHRvblwiIFtzdHlsZV09XCJ7XG4gICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3IgOiBhc3NldHM/LkNvbG9yU2V0Py5QcmltYXJ5LFxuICAgICAgICAgICAgICAgICAgICAgY29sb3IgOiBhc3NldHM/LkNvbG9yU2V0Py5TZWNvbmRhcnlcbiAgICAgICAgICAgIH1cIiAoY2xpY2spPVwiX3NlbmQoKVwiIFtkaXNhYmxlZF09XCIhdXNlcklucHV0XCI+e3sgc2VuZEJ0biB9fVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImJvdC1pbnB1dC1kaXNhYmxlXCIgKm5nSWY9XCJkaXNhYmxlVXNlcklucHV0XCI+XG4gICAgICAgICAgICA8aT57eyBzZWxlY3QgfX08L2k+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYm90LWxvZ29cIj5cbiAgICAgICAgICA8aW1nIFtzcmNdPVwiYXNzZXRzLkZ1bGxTaXplTG9nb1wiPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmctY29udGFpbmVyPlxuXG4gIDwvZGl2PlxuPC9kaXY+XG4iXX0=