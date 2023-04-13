import { __awaiter } from 'tslib';
import * as i0 from '@angular/core';
import { EventEmitter, Injectable, Inject, Component, Pipe, Input, Output, NgModule, Optional, SkipSelf } from '@angular/core';
import * as i1 from '@angular/common/http';
import { HttpHeaders, HttpClientModule } from '@angular/common/http';
import { BehaviorSubject, debounceTime } from 'rxjs';
import * as i3 from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as i4 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i5 from 'nowboard-icon';
import { NowboardIconService, NowboardIconModule } from 'nowboard-icon';
import striptags from 'striptags';
import * as i3$1 from 'ngx-nowbrains-animations';
import { FadeSlideInOut, FadeSlideInOutKonversoOpacityOut, FadeSlideInOutKonversoTranslateOut, FadeSlideInOutKonversoHeight } from 'ngx-nowbrains-animations';
import { trigger, transition, style, animate } from '@angular/animations';
import * as i1$2 from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as i1$1 from '@angular/platform-browser';

/***********************************************************
 **  @project
 **  @file
 **  @author Brice Daupiard <brice.daupiard@nowbrains.com>
 **  @Date 29/03/2022
 **  @Description
 ***********************************************************/
const objectToString = Object.prototype.toString;
const isArrayPolyfill = (object) => {
    return objectToString.call(object) === '[object Array]';
};
const isFunction = (object) => {
    return typeof object === 'function';
};
const typeStr = (obj) => {
    return isArray(obj) ? 'array' : typeof obj;
};
const escapeRegExp = (str) => {
    return str.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&');
};
const hasProperty = (obj, propName) => {
    return obj != null && typeof obj === 'object' && (propName in obj);
};
const primitiveHasOwnProperty = (primitive, propName) => {
    return (primitive != null
        && typeof primitive !== 'object'
        && primitive.hasOwnProperty
        && primitive.hasOwnProperty(propName));
};
const isArray = Array.isArray || isArrayPolyfill;
const regExpTest = RegExp.prototype.test;
const testRegExp = (regEx, str) => {
    return regExpTest.call(regEx, str);
};
const nonSpaceRe = /\S/;
const isWhitespace = (str) => {
    return !testRegExp(nonSpaceRe, str);
};
const entityMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    '\'': '&#39;',
    '/': '&#x2F;',
    '`': '&#x60;',
    '=': '&#x3D;'
};
const escapeHtml = (str) => {
    return String(str).replace(/[&<>"'`=\/]/g, (s) => {
        return entityMap[s];
    });
};
const whiteRe = /\s*/;
const spaceRe = /\s+/;
const equalsRe = /\s*=/;
const curlyRe = /\s*\}/;
const tagRe = /#|\^|\/|>|\{|&|=|!/;
const squashTokens = (tokens) => {
    const squashedTokens = [];
    let token, lastToken;
    for (let i = 0, numTokens = tokens.length; i < numTokens; ++i) {
        token = tokens[i];
        if (token) {
            if (token[0] === 'text' && lastToken && lastToken[0] === 'text') {
                lastToken[1] += token[1];
                lastToken[3] = token[3];
            }
            else {
                squashedTokens.push(token);
                lastToken = token;
            }
        }
    }
    return squashedTokens;
};
const nestTokens = (tokens) => {
    const nestedTokens = [];
    let collector = nestedTokens;
    const sections = [];
    let token, section;
    for (let i = 0, numTokens = tokens.length; i < numTokens; ++i) {
        token = tokens[i];
        switch (token[0]) {
            case '#':
            case '^':
                collector.push(token);
                sections.push(token);
                collector = token[4] = [];
                break;
            case '/':
                section = sections.pop();
                section[5] = token[2];
                collector = sections.length > 0 ? sections[sections.length - 1][4] : nestedTokens;
                break;
            default:
                collector.push(token);
        }
    }
    return nestedTokens;
};
const parseTemplate = (template, tags) => {
    if (!template) {
        return [];
    }
    let lineHasNonSpace = false;
    let sections = []; // Stack to hold section tokens
    let tokens = []; // Buffer to hold the tokens
    let spaces = []; // Indices of whitespace tokens on the current line
    let hasTag = false; // Is there a {{tag}} on the current line?
    let nonSpace = false; // Is there a non-space char on the current line?
    let indentation = ''; // Tracks indentation for tags that use it
    let tagIndex = 0; // Stores a count of number of tags encountered on a line
    // Strips all whitespace tokens array for the current line
    // if there was a {{#tag}} on it and otherwise only space.
    const stripSpace = () => {
        if (hasTag && !nonSpace) {
            while (spaces.length) {
                delete tokens[spaces.pop()];
            }
        }
        else {
            spaces = [];
        }
        hasTag = false;
        nonSpace = false;
    };
    const compileTags = (tagsToCompile) => {
        if (typeof tagsToCompile === 'string') {
            tagsToCompile = tagsToCompile.split(spaceRe, 2);
        }
        if (!isArray(tagsToCompile) || tagsToCompile.length !== 2) {
            throw new Error('Invalid tags: ' + tagsToCompile);
        }
        const openingTagRe = new RegExp(escapeRegExp(tagsToCompile[0]) + '\\s*');
        const closingTagRe = new RegExp('\\s*' + escapeRegExp(tagsToCompile[1]));
        const closingCurlyRe = new RegExp('\\s*' + escapeRegExp('}' + tagsToCompile[1]));
        return { openingTagRe, closingTagRe, closingCurlyRe };
    };
    let { openingTagRe, closingTagRe, closingCurlyRe } = compileTags(tags || BARBE.tags);
    const scanner = new Scanner(template);
    let start, type, value, chr, token, openSection;
    while (!scanner.eos()) {
        start = scanner.pos;
        // Match any text between tags.
        value = scanner.scanUntil(openingTagRe);
        if (value) {
            for (let i = 0, valueLength = value.length; i < valueLength; ++i) {
                chr = value.charAt(i);
                if (isWhitespace(chr)) {
                    spaces.push(tokens.length);
                    indentation += chr;
                }
                else {
                    nonSpace = true;
                    lineHasNonSpace = true;
                    indentation += ' ';
                }
                tokens.push(['text', chr, start, start + 1]);
                start += 1;
                // Check for whitespace on the current line.
                if (chr === '\n') {
                    stripSpace();
                    indentation = '';
                    tagIndex = 0;
                    lineHasNonSpace = false;
                }
            }
        }
        // Match the opening tag.
        if (!scanner.scan(openingTagRe)) {
            break;
        }
        hasTag = true;
        // Get the tag type.
        type = scanner.scan(tagRe) || 'name';
        scanner.scan(whiteRe);
        // Get the tag value.
        if (type === '=') {
            value = scanner.scanUntil(equalsRe);
            scanner.scan(equalsRe);
            scanner.scanUntil(closingTagRe);
        }
        else if (type === '{') {
            value = scanner.scanUntil(closingCurlyRe);
            scanner.scan(curlyRe);
            scanner.scanUntil(closingTagRe);
            type = '&';
        }
        else {
            value = scanner.scanUntil(closingTagRe);
        }
        // Match the closing tag.
        if (!scanner.scan(closingTagRe)) {
            throw new Error('Unclosed tag at ' + scanner.pos);
        }
        if (type === '>') {
            token = [type, value, start, scanner.pos, indentation, tagIndex, lineHasNonSpace];
        }
        else {
            token = [type, value, start, scanner.pos];
        }
        tagIndex++;
        tokens.push(token);
        if (type === '#' || type === '^') {
            sections.push(token);
        }
        else if (type === '/') {
            // Check section nesting.
            openSection = sections.pop();
            if (!openSection) {
                throw new Error('Unopened section "' + value + '" at ' + start);
            }
            if (openSection[1] !== value) {
                throw new Error('Unclosed section "' + openSection[1] + '" at ' + start);
            }
        }
        else if (type === 'name' || type === '{' || type === '&') {
            nonSpace = true;
        }
        else if (type === '=') {
            // Set the tags for the next time around.
            compileTags(value);
        }
    }
    stripSpace();
    // Make sure there are no open sections when we're done.
    openSection = sections.pop();
    if (openSection) {
        throw new Error('Unclosed section "' + openSection[1] + '" at ' + scanner.pos);
    }
    return nestTokens(squashTokens(tokens));
};
class Scanner {
    constructor(str) {
        this.pos = 0;
        this.string = str;
        this.tail = str;
    }
    eos() {
        return this.tail === '';
    }
    scan(regExp) {
        const match = this.tail.match(regExp);
        if (!match || match.index !== 0) {
            return '';
        }
        const str = match[0];
        this.tail = this.tail.substring(str.length);
        this.pos += str.length;
        return str;
    }
    scanUntil(regExp) {
        const index = this.tail.search(regExp);
        let match;
        switch (index) {
            case -1:
                match = this.tail;
                this.tail = '';
                break;
            case 0:
                match = '';
                break;
            default:
                match = this.tail.substring(0, index);
                this.tail = this.tail.substring(index);
        }
        this.pos += match.length;
        return match;
    }
}
class Context {
    constructor(view, parentContext) {
        this.view = view;
        this.cache = { '.': this.view };
        this.parent = parentContext;
    }
    push(view) {
        return new Context(view, this);
    }
    lookup(name) {
        const cache = this.cache;
        let value;
        if (cache.hasOwnProperty(name)) {
            value = cache[name];
        }
        else {
            let context = this;
            let intermediateValue = false;
            let names = false;
            let index = false;
            let lookupHit = false;
            while (context) {
                if (name.indexOf('.') > 0) {
                    intermediateValue = context.view;
                    names = name.split('.');
                    index = 0;
                    while (intermediateValue != null && index < names.length) {
                        if (index === (names.length - 1)) {
                            lookupHit = (hasProperty(intermediateValue, names[index])
                                || primitiveHasOwnProperty(intermediateValue, names[index]));
                        }
                        intermediateValue = intermediateValue[names[index++]];
                    }
                }
                else {
                    intermediateValue = context.view[name];
                    lookupHit = hasProperty(context.view, name);
                }
                if (lookupHit) {
                    value = intermediateValue;
                    break;
                }
                context = context.parent;
            }
            cache[name] = value;
        }
        if (isFunction(value)) {
            value = value.call(this.view);
        }
        return value;
    }
}
class Cache {
    constructor() {
        this._cache = {};
    }
    set(key, value) {
        this._cache[key] = value;
    }
    get(key) {
        return this._cache[key];
    }
    clear() {
        this._cache = {};
    }
}
class Writer {
    constructor() {
        this.templateCache = new Cache();
    }
    clearCache() {
        if (typeof this.templateCache !== 'undefined') {
            this.templateCache.clear();
        }
    }
    parse(template, tags) {
        const cache = this.templateCache;
        const cacheKey = template + ':' + (tags || BARBE.tags).join(':');
        const isCacheEnabled = typeof cache !== 'undefined';
        let tokens = isCacheEnabled ? cache.get(cacheKey) : undefined;
        if (tokens === undefined) {
            tokens = parseTemplate(template, tags);
            isCacheEnabled && cache.set(cacheKey, tokens);
        }
        return tokens;
    }
    render(template, view, partials, config) {
        const tags = this.getConfigTags(config);
        const tokens = this.parse(template, tags);
        const context = (view instanceof Context) ? view : new Context(view, undefined);
        return this.renderTokens(tokens, context, partials, template, config);
    }
    getConfigTags(config) {
        if (isArray(config)) {
            return config;
        }
        else if (config && typeof config === 'object') {
            return config.tags;
        }
        else {
            return undefined;
        }
    }
    rawValue(token) {
        return token[1];
    }
    ;
    renderTokens(tokens, context, partials, originalTemplate, config) {
        let buffer = '';
        let token;
        let symbol;
        let value;
        for (let i = 0, numTokens = tokens.length; i < numTokens; ++i) {
            value = undefined;
            token = tokens[i];
            symbol = token[0];
            if (symbol === '#') {
                value = this.renderSection(token, context, partials, originalTemplate, config);
            }
            else if (symbol === '^') {
                value = this.renderInverted(token, context, partials, originalTemplate, config);
            }
            else if (symbol === '>') {
                value = this.renderPartial(token, context, partials, config);
            }
            else if (symbol === '&') {
                value = this.unescapedValue(token, context);
            }
            else if (symbol === 'name') {
                value = this.escapedValue(token, context, config);
            }
            else if (symbol === 'text') {
                value = this.rawValue(token);
            }
            if (value !== undefined) {
                buffer += value;
            }
        }
        return buffer;
    }
    renderSection(token, context, partials, originalTemplate, config) {
        const self = this;
        let buffer = '';
        let value = context.lookup(token[1]);
        const subRender = (template) => {
            return self.render(template, context, partials, config);
        };
        if (!value) {
            return;
        }
        if (isArray(value)) {
            for (var j = 0, valueLength = value.length; j < valueLength; ++j) {
                buffer += this.renderTokens(token[4], context.push(value[j]), partials, originalTemplate, config);
            }
        }
        else if (typeof value === 'object' || typeof value === 'string' || typeof value === 'number') {
            buffer += this.renderTokens(token[4], context.push(value), partials, originalTemplate, config);
        }
        else if (isFunction(value)) {
            if (typeof originalTemplate !== 'string') {
                throw new Error('Cannot use higher-order sections without the original template');
            }
            // Extract the portion of the original template that the section contains.
            value = value.call(context.view, originalTemplate.slice(token[3], token[5]), subRender);
            if (value != null) {
                buffer += value;
            }
        }
        else {
            buffer += this.renderTokens(token[4], context, partials, originalTemplate, config);
        }
        return buffer;
    }
    renderInverted(token, context, partials, originalTemplate, config) {
        const value = context.lookup(token[1]);
        if (!value || (isArray(value) && value.length === 0)) {
            return this.renderTokens(token[4], context, partials, originalTemplate, config);
        }
    }
    ;
    indentPartial(partial, indentation, lineHasNonSpace) {
        const filteredIndentation = indentation.replace(/[^ \t]/g, '');
        const partialByNl = partial.split('\n');
        for (let i = 0; i < partialByNl.length; i++) {
            if (partialByNl[i].length && (i > 0 || !lineHasNonSpace)) {
                partialByNl[i] = filteredIndentation + partialByNl[i];
            }
        }
        return partialByNl.join('\n');
    }
    ;
    renderPartial(token, context, partials, config) {
        if (!partials) {
            return;
        }
        const tags = this.getConfigTags(config);
        const value = isFunction(partials) ? partials(token[1]) : partials[token[1]];
        if (value !== null) {
            const lineHasNonSpace = token[6];
            const tagIndex = token[5];
            const indentation = token[4];
            let indentedValue = value;
            if (tagIndex === 0 && indentation) {
                indentedValue = this.indentPartial(value, indentation, lineHasNonSpace);
            }
            const tokens = this.parse(indentedValue, tags);
            return this.renderTokens(tokens, context, partials, indentedValue, config);
        }
    }
    unescapedValue(token, context) {
        const value = context.lookup(token[1]);
        if (value !== null) {
            return value;
        }
    }
    getConfigEscape(config) {
        return config && typeof config === 'object' && !isArray(config) ? config.escape : undefined;
    }
    escapedValue(token, context, config) {
        const escape = this.getConfigEscape(config) || BARBE.escape;
        const value = context.lookup(token[1]);
        if (value != null) {
            return (typeof value === 'number' && escape === BARBE.escape) ? String(value) : escape(value);
        }
    }
}
class BARBE {
    constructor() {
        this.name = 'MY F**KING MUSTACHE LIBRARY FOR ANGULAR';
        this.version = 'ECLATER';
        this._Writer = new Writer();
    }
    get templateCache() {
        return this._Writer.templateCache;
    }
    set templateCache(cache) {
        this._Writer.templateCache = cache;
    }
    parse(template, tags) {
        return this._Writer.parse(template, tags);
    }
    render(template, view, partials, config) {
        if (typeof template !== 'string') {
            throw new TypeError('Invalid template! Template should be a "string" ' +
                'but "' + typeStr(template) + '" was given as the first ' +
                'argument for mustache#render(template, view, partials)');
        }
        return this._Writer.render(template, view, partials, config);
    }
    ;
    clearCache() {
        this._Writer.clearCache();
    }
}
BARBE.tags = ['{{', '}}'];
BARBE.escape = escapeHtml;
BARBE.Scanner = Scanner;
BARBE.Context = Context;
BARBE.Writer = Writer;

const barbe = new BARBE();
class KonversoService {
    constructor(config, http) {
        this.http = http;
        this.authentication = new EventEmitter();
        this.firstVisit = false;
        this.AssistantMode = false;
        this.readyState = false;
        this.lang = new BehaviorSubject('');
        this.customData = new BehaviorSubject(null);
        this.emulationTrigger = new BehaviorSubject(null);
        this.token = new BehaviorSubject(null);
        // tslint:disable-next-line:variable-name
        this._token = this.token.asObservable();
        this.localModalAttachments = {};
        this.buildHeaders();
        this.initInstance(config);
    }
    /**
     * Send Query To backend server and get a response
     * @param query
     */
    send(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                if (query && query.replace(new RegExp(' ', 'g'), '')) {
                    if (this.header) {
                        const preparedData = this.buildQuery(query);
                        const options = {
                            headers: this.header
                        };
                        this.http.post(this.endpoint + '?t=' + new Date().getTime(), preparedData, options)
                            .subscribe((data) => {
                            resolve(data);
                        });
                    }
                    else {
                        reject(new Error('Header is not set, please provide a token though user setting or though module configuration'));
                    }
                }
                else {
                    reject(new Error('Current input is empty, please try again'));
                }
            });
        });
    }
    /**
     * Emulate user entry Query To backend server and get a response
     * @param query
     */
    sendTriggerEmulation(query) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.send(query).catch((err) => {
                console.log('error trigger emulation', err);
            });
            if (response) {
                this.emulationTrigger.next(Object.assign({ input: query }, response));
            }
        });
    }
    /**
     * @private
     * Generate Header for backend call
     */
    buildHeaders() {
        this._token.subscribe((token) => {
            const bearer = 'Bearer ' + token;
            this.header = new HttpHeaders({
                Authorization: bearer
            });
        });
    }
    /**
     * @param config
     * @private
     * Initialize Data for User Instance
     */
    initInstance(config) {
        this._auth = !!config.auth;
        if (config.endpoint) {
            this.endpoint = config.endpoint;
            if (config.AssistantMode) {
                this.AssistantMode = config.AssistantMode;
            }
            if (config.defaultAssets) {
                this.assets = config.defaultAssets;
                if (config.defaultAssets.ColorSet) {
                    this.ColorSet = config.defaultAssets.ColorSet;
                }
            }
            if (config.auth) {
                this.authentication.subscribe((user) => {
                    var _a, _b;
                    if (!user.lang && config.lang) {
                        user.lang = config.lang;
                    }
                    this.locale = user === null || user === void 0 ? void 0 : user.lang;
                    this.lang.next(this.locale);
                    if (config.InputPlaceHolder && config.InputPlaceHolder[this.locale]) {
                        this.PlaceHolder = config.InputPlaceHolder[this.locale];
                    }
                    if (config.InputNumberPlaceHolder && config.InputNumberPlaceHolder[this.locale]) {
                        this.NumberPlaceHolder = config.InputNumberPlaceHolder[this.locale];
                    }
                    if (config.CustomWelcome && config.BotInitMessage.Welcome && config.BotInitMessage.Welcome[this.locale]) {
                        this.Welcome = barbe.render(config.BotInitMessage.Welcome[this.locale], user);
                    }
                    if (user === null || user === void 0 ? void 0 : user.token) {
                        this.token.next(user === null || user === void 0 ? void 0 : user.token);
                    }
                    if (user === null || user === void 0 ? void 0 : user.firstVisit) {
                        this.firstVisit = true;
                        delete user.firstVisit;
                        if (((_a = config === null || config === void 0 ? void 0 : config.BotInitMessage) === null || _a === void 0 ? void 0 : _a.FirstUsage) &&
                            this.locale &&
                            ((_b = config === null || config === void 0 ? void 0 : config.BotInitMessage) === null || _b === void 0 ? void 0 : _b.FirstUsage[this.locale])) {
                            this.firstUsageStory = [];
                            for (const history of config.BotInitMessage.FirstUsage[this.locale]) {
                                this.firstUsageStory.push(barbe.render(history, user));
                            }
                        }
                    }
                    this.user = user;
                    this.readyState = true;
                });
            }
            else if (config.lang) {
                this.locale = config.lang;
                this.lang.next(this.locale);
                if (config.InputPlaceHolder && config.InputPlaceHolder[this.locale]) {
                    this.PlaceHolder = config.InputPlaceHolder[this.locale];
                }
                if (config.InputNumberPlaceHolder && config.InputNumberPlaceHolder[this.locale]) {
                    this.NumberPlaceHolder = config.InputNumberPlaceHolder[this.locale];
                }
                if (config.CustomWelcome && config.BotInitMessage.Welcome && config.BotInitMessage.Welcome[this.locale]) {
                    this.Welcome = config.BotInitMessage.Welcome[this.locale];
                }
                this.user = {
                    userId: this.guid(),
                    lang: config.lang
                };
                this.readyState = true;
            }
            if (config.token) {
                this.token.next(config.token);
            }
        }
        else {
            return new Error('Please provide endpoint');
        }
    }
    /**
     * @param query
     * @private
     * prepare set data to push to backend server
     */
    buildQuery(query) {
        // @ts-ignore
        const custom = this.customData.getValue();
        return Object.assign(Object.assign(Object.assign({}, custom), this.user), { query: query.replace(/\s+/g, ' ').trim(), isSending: true });
    }
    /**
     * @private
     * Generate Random uniq Id for Konverso Instance
     */
    guid() {
        let random = () => {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        };
        return random() + random() + '-' + random() + '-' + random() + '-' + random() + '-' + random() + random() + random();
    }
}
KonversoService.ɵfac = function KonversoService_Factory(t) { return new (t || KonversoService)(i0.ɵɵinject('__NgxKonverso__'), i0.ɵɵinject(i1.HttpClient)); };
KonversoService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: KonversoService, factory: KonversoService.ɵfac });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(KonversoService, [{
            type: Injectable
        }], function () {
        return [{ type: undefined, decorators: [{
                        type: Inject,
                        args: ['__NgxKonverso__']
                    }] }, { type: i1.HttpClient }];
    }, null);
})();

const BotMessageSample = {
    query: null,
    userId: null,
    timestamp: 1617369777.976196,
    text: null,
    infoURL: '',
    context: [],
    suggestions: []
};

/***********************************************************
 **  @project ngx-konverso                              **
 **  @file DotLoader                                         **
 **  @author Brice Daupiard <brice.daupiard@smartiiz.com>  **
 **  @Date 07/04/2021                                         **
 ***********************************************************/
const DotLoaderTemplate = (color) => `<div class="loading-dots">
<div class="loading-dots--dot" style="background-color: ${color}"></div>
  <div class="loading-dots--dot" style="background-color: ${color}"></div>
  <div class="loading-dots--dot" style="background-color: ${color}"></div>
  </div>`;

class TranslateService {
    constructor() {
        this.lang = {
            'fr': {
                'GO': `C'est parti`,
                'SEND_MESSAGE': 'Envoyer mon message',
                'SELECT': 'Vous devez sélectionner une réponse',
                'SCREENSHOT': "Capture d'écran",
                'SEND': 'Valider le nombre de personnes touchées',
                'MONDAY': 'Lundi',
                "TUESDAY": 'Mardi',
                "WEDNESDAY": 'Mercredi',
                "THURSDAY": 'Jeudi',
                "FRIDAY": 'Vendredi',
                "SATURDAY": 'Samedi',
                "SUNDAY": 'Dimanche',
                "OTHER": "Autre",
                "FREE_FIELD": 'Champ libre',
                "VALIDATE": 'Valider',
                "SKIP": 'Passer',
                "MORNING": "Matin",
                "AFTERNOON": "Après-midi",
                "MORNING_ALL": 'Matin (tous)',
                "AFTERNOON_ALL": 'Après-midi (tous)',
                "ATTACHMENT": 'pièce jointe',
                "ATTACHMENTS": 'pièces jointes',
                "VALIDATE_AVAILABILITY": "Valider mes préférences de rappel",
                SEND_ME_YOUR_ATTACHMENTS: "Ajouter une des pièces jointes",
                DROP_PHOTO: "Cliquez pour sélectionner vos fichiers",
                I_FINISHED: "Ajouter"
            },
            'en': {
                'GO': `Let's go`,
                'SEND_MESSAGE': 'Send my message',
                'SELECT': 'You must select an answer',
                'SCREENSHOT': 'Screenshot',
                'SEND': 'Validate impacted people number',
                "MONDAY": 'Monday',
                "TUESDAY": 'Tuesday',
                "WEDNESDAY": 'Wednesday',
                "THURSDAY": 'Thursday',
                "FRIDAY": 'Friday',
                "SATURDAY": 'Saturday',
                "SUNDAY": 'Sunday',
                "OTHER": 'Other',
                "FREE_FIELD": 'Free field',
                "VALIDATE": 'Validate',
                "SKIP": 'Skip',
                "MORNING": "Morning",
                "AFTERNOON": "Afternoon",
                "MORNING_ALL": 'Morning (all)',
                "AFTERNOON_ALL": 'Afternoon (all)',
                "ATTACHMENT": 'attachment',
                "ATTACHMENTS": 'attachments',
                "VALIDATE_AVAILABILITY": "Validate my reminder preferences",
                SEND_ME_YOUR_ATTACHMENTS: "Add attachments",
                DROP_PHOTO: "Click to select your files",
                I_FINISHED: "Add"
            }
        };
    }
    translate(l, word) {
        return this.lang[l][word];
    }
}
TranslateService.ɵfac = function TranslateService_Factory(t) { return new (t || TranslateService)(); };
TranslateService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: TranslateService, factory: TranslateService.ɵfac, providedIn: 'root' });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TranslateService, [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], function () { return []; }, null);
})();

function ModalAddAttachmentsComponent_div_16_Template(rf, ctx) {
    if (rf & 1) {
        const _r4 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "div", 14)(1, "div", 15);
        i0.ɵɵelement(2, "div", 16);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "nb-icon", 17);
        i0.ɵɵlistener("click", function ModalAddAttachmentsComponent_div_16_Template_nb_icon_click_3_listener() { const restoredCtx = i0.ɵɵrestoreView(_r4); const d_r1 = restoredCtx.$implicit; const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.deleteFile(d_r1)); });
        i0.ɵɵelementEnd()();
    }
    if (rf & 2) {
        const index_r2 = ctx.index;
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("id", "img-preview-" + index_r2);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("icon", "delete_1")("size", 1.5);
    }
}
class ModalAddAttachmentsComponent {
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
        console.log(this.documentList);
        if (this.documentList.length > 0) {
            this.documentList.forEach((f) => __awaiter(this, void 0, void 0, function* () {
                this.documentList.push(f);
                let index = this.documentList.indexOf(f);
                yield this.setPreview(index, f);
            }));
        }
        this.input.onchange = ($event) => {
            console.log($event);
            console.log(this.documentList);
            // @ts-ignore
            Array.from($event.target.files).forEach((f) => __awaiter(this, void 0, void 0, function* () {
                // this.documentList.push(f);
                let index = this.documentList.indexOf(f);
                yield this.setPreview(index, f);
            }));
            console.log(this.documentList, 'apres le foreach');
        };
    }
    setPreview(index, blob) {
        return __awaiter(this, void 0, void 0, function* () {
            setTimeout(() => {
                const image = document.getElementById('img-preview-' + index);
                image.style.background = 'url(' + URL.createObjectURL(blob) + ')';
                image.style.backgroundSize = 'cover';
                image.style.backgroundPosition = 'center center';
            }, 500);
        });
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
ModalAddAttachmentsComponent.ɵfac = function ModalAddAttachmentsComponent_Factory(t) { return new (t || ModalAddAttachmentsComponent)(i0.ɵɵdirectiveInject(MAT_DIALOG_DATA), i0.ɵɵdirectiveInject(KonversoService), i0.ɵɵdirectiveInject(TranslateService), i0.ɵɵdirectiveInject(i3.MatDialogRef)); };
ModalAddAttachmentsComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ModalAddAttachmentsComponent, selectors: [["modal-add-attachments"]], decls: 19, vars: 9, consts: [[1, "position-relative", "modal-attachments-content"], ["mat-dialog-close", "", 1, "close-dialog-icon", "close-dialog-icon-15", 3, "click"], [3, "icon", "size"], [1, "bot", "bot-no-anim"], [1, "circle1"], [1, "circle2"], [1, "circle3"], [1, "mt30", "nb-title-l", "title"], [1, "mt30", "mb15", "file", 3, "click"], [1, "nb-text-s", "file-message"], [1, "mb10", "nb-text-s-1", "file-format"], [1, "d-flex-ai-c", "flex-flow-wrap", "file-div-container", "custom-scrollbar"], ["class", "mb10 mr5 d-flex-ai-c", 4, "ngFor", "ngForOf"], [1, "mt15", "full-width", "rounded", "primary", "btn-send", 3, "disabled", "click"], [1, "mb10", "mr5", "d-flex-ai-c"], [1, "file-name-div", "d-flex-ai-c", "mr5"], [1, "pj-preview", "cursor-pointer", 3, "id"], [1, "mr0", "file-icon", 3, "icon", "size", "click"]], template: function ModalAddAttachmentsComponent_Template(rf, ctx) {
        if (rf & 1) {
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
        }
        if (rf & 2) {
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
        }
    }, dependencies: [i4.NgForOf, i5.NowboardIconComponent], styles: [".modal-attachments-content[_ngcontent-%COMP%]   .bot-no-anim[_ngcontent-%COMP%]{margin:auto;height:120px;animation:none;-webkit-animation:none}.modal-attachments-content[_ngcontent-%COMP%]   .circle3[_ngcontent-%COMP%]{width:120px;height:120px}.modal-attachments-content[_ngcontent-%COMP%]   .circle2[_ngcontent-%COMP%]{width:90px;height:90px}.modal-attachments-content[_ngcontent-%COMP%]   .circle1[_ngcontent-%COMP%]{width:60px;height:60px}.modal-attachments-content[_ngcontent-%COMP%]   .file-names[_ngcontent-%COMP%]{margin:0!important}.modal-attachments-content[_ngcontent-%COMP%]   .file-names[_ngcontent-%COMP%]   .file-name-div[_ngcontent-%COMP%]{margin-bottom:0;width:auto;max-width:initial}.modal-attachments-content[_ngcontent-%COMP%]   .file-names[_ngcontent-%COMP%]   .file-name-div[_ngcontent-%COMP%]   .file-name[_ngcontent-%COMP%]{width:120px}.file-div-container[_ngcontent-%COMP%]{max-height:20vh;overflow-y:auto}"] });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ModalAddAttachmentsComponent, [{
            type: Component,
            args: [{ selector: 'modal-add-attachments', template: "<div class=\"position-relative modal-attachments-content\">\n\n    <div class=\"close-dialog-icon close-dialog-icon-15\" mat-dialog-close (click)=\"close()\">\n        <nb-icon [icon]=\"'close'\" [size]=\"1\"></nb-icon>\n    </div>\n\n    <div class=\"bot bot-no-anim\">\n        <div class=\"circle1\"></div>\n        <div class=\"circle2\"></div>\n        <div class=\"circle3\"></div>\n    </div>\n\n    <div class=\"mt30 nb-title-l title\">\n        {{ translate.translate(service.locale, 'SEND_ME_YOUR_ATTACHMENTS' ) }}\n    </div>\n\n    <div class=\"mt30 mb15 file\" (click)=\"this.input.click()\">\n        <nb-icon [icon]=\"'image'\" [size]=\"1.5\"></nb-icon>\n        <div class=\"nb-text-s file-message\">\n          {{translate.translate(service.locale, 'DROP_PHOTO' ) }}\n        </div>\n        <div class=\"mb10 nb-text-s-1 file-format\">\n          Format .jpeg / .png / .svg\n        </div>\n\n    </div>\n\n    <!-- <ng-container *ngFor=\"let d of documentList; let index = index\">\n        <div class=\"mb15 file-names\">\n            <div class=\"file-name-div\">\n                <div class=\"mr10 tar file-name\">\n                    {{ d.name }}\n                </div>\n                <nb-icon (click)=\"deleteFile(d)\" [icon]=\"'delete_1'\" [size]=\"1.5\" class=\"mr0 file-icon\"></nb-icon>\n            </div>\n        </div>\n    </ng-container> -->\n\n    <div class=\"d-flex-ai-c flex-flow-wrap file-div-container custom-scrollbar\">\n        <div class=\"mb10 mr5 d-flex-ai-c\" *ngFor=\"let d of documentList; let index = index\">\n          <div class=\"file-name-div d-flex-ai-c mr5\">\n            <div class=\"pj-preview cursor-pointer\" [id]=\"'img-preview-'+index\"></div>\n          </div>\n    \n          <nb-icon (click)=\"deleteFile(d)\" [icon]=\"'delete_1'\" [size]=\"1.5\" class=\"mr0 file-icon\"></nb-icon>\n        </div>  \n    </div>\n\n    <button (click)=\"sendAttachments()\" [disabled]=\"!this.documentList || !this.documentList[0]?.name\" class=\"mt15 full-width rounded primary btn-send\">\n        {{translate.translate(service.locale, 'I_FINISHED' ) }}\n    </button>\n</div>\n", styles: [".modal-attachments-content .bot-no-anim{margin:auto;height:120px;animation:none;-webkit-animation:none}.modal-attachments-content .circle3{width:120px;height:120px}.modal-attachments-content .circle2{width:90px;height:90px}.modal-attachments-content .circle1{width:60px;height:60px}.modal-attachments-content .file-names{margin:0!important}.modal-attachments-content .file-names .file-name-div{margin-bottom:0;width:auto;max-width:initial}.modal-attachments-content .file-names .file-name-div .file-name{width:120px}.file-div-container{max-height:20vh;overflow-y:auto}\n"] }]
        }], function () {
        return [{ type: undefined, decorators: [{
                        type: Inject,
                        args: [MAT_DIALOG_DATA]
                    }] }, { type: KonversoService }, { type: TranslateService }, { type: i3.MatDialogRef }];
    }, null);
})();

class SafeHtmlPipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(value) {
        return this.sanitizer.bypassSecurityTrustHtml(value);
    }
}
SafeHtmlPipe.ɵfac = function SafeHtmlPipe_Factory(t) { return new (t || SafeHtmlPipe)(i0.ɵɵdirectiveInject(i1$1.DomSanitizer, 16)); };
SafeHtmlPipe.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "safeHtml", type: SafeHtmlPipe, pure: true });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SafeHtmlPipe, [{
            type: Pipe,
            args: [{
                    name: 'safeHtml'
                }]
        }], function () { return [{ type: i1$1.DomSanitizer }]; }, null);
})();

const _c0$2 = function (a0, a1) { return { backgroundColor: a0, borderColor: a1 }; };
function FirstVisitComponent_span_8_Template(rf, ctx) {
    if (rf & 1) {
        const _r4 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "span", 9);
        i0.ɵɵlistener("click", function FirstVisitComponent_span_8_Template_span_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r4); const pos_r2 = restoredCtx.index; const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.goTo(pos_r2)); });
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const pos_r2 = ctx.index;
        const ctx_r0 = i0.ɵɵnextContext();
        i0.ɵɵstyleMap(pos_r2 === ctx_r0.position ? i0.ɵɵpureFunction2(2, _c0$2, ctx_r0.assets == null ? null : ctx_r0.assets.ColorSet == null ? null : ctx_r0.assets.ColorSet.Primary, ctx_r0.assets == null ? null : ctx_r0.assets.ColorSet == null ? null : ctx_r0.assets.ColorSet.Primary) : i0.ɵɵpureFunction2(5, _c0$2, ctx_r0.assets == null ? null : ctx_r0.assets.ColorSet == null ? null : ctx_r0.assets.ColorSet.Secondary, ctx_r0.assets == null ? null : ctx_r0.assets.ColorSet == null ? null : ctx_r0.assets.ColorSet.Primary));
    }
}
const _c1$1 = function (a1) { return { backgroundColor: "#171F26", color: a1 }; };
class FirstVisitComponent {
    constructor(translate, service) {
        this.service = service;
        this.ready = new EventEmitter();
        this.position = 0;
        this.current = '';
        this.go = '';
        service.lang.subscribe((r) => {
            if (service.locale) {
                this.go = translate.translate(service.locale, 'GO');
            }
        });
    }
    ngOnInit() {
        this.current = this.firstUsageStory[this.position];
        const clear = setInterval(() => {
            if (this.position < (this.firstUsageStory.length - 1)) {
                this.current = this.firstUsageStory[++this.position];
            }
            else {
                clearInterval(clear);
            }
        }, 5000);
    }
    goTo(pos) {
        this.position = pos;
        this.current = this.firstUsageStory[this.position];
    }
    start() {
        //console.log('OOOKKKK')
        this.ready.emit(true);
    }
}
FirstVisitComponent.ɵfac = function FirstVisitComponent_Factory(t) { return new (t || FirstVisitComponent)(i0.ɵɵdirectiveInject(TranslateService), i0.ɵɵdirectiveInject(KonversoService)); };
FirstVisitComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FirstVisitComponent, selectors: [["bot-first-visit"]], inputs: { firstUsageStory: "firstUsageStory", assets: "assets" }, outputs: { ready: "ready" }, decls: 12, vars: 9, consts: [[1, "bot-logo-init-wrapper"], [1, "m-carl-notification"], [1, "m-carl-notification-cue", "m-cue"], ["id", "bot-icon", 1, "a-cue-icon"], [1, "bot-init-text", 3, "innerHTML"], [1, "bot-init-bullet-step"], ["class", "bot-init-dot", 3, "style", "click", 4, "ngFor", "ngForOf"], [1, "bot-init-button-wrapper"], ["mat-button", "", 1, "bot-button", "button-lg", 3, "click"], [1, "bot-init-dot", 3, "click"]], template: function FirstVisitComponent_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵelementStart(1, "div", 0)(2, "div", 1)(3, "div", 2);
            i0.ɵɵelement(4, "div", 3);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelement(5, "div", 4);
            i0.ɵɵpipe(6, "safeHtml");
            i0.ɵɵelementStart(7, "div", 5);
            i0.ɵɵtemplate(8, FirstVisitComponent_span_8_Template, 1, 8, "span", 6);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "div", 7)(10, "button", 8);
            i0.ɵɵlistener("click", function FirstVisitComponent_Template_button_click_10_listener() { return ctx.start(); });
            i0.ɵɵtext(11);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(6, 5, ctx.current), i0.ɵɵsanitizeHtml);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngForOf", ctx.firstUsageStory);
            i0.ɵɵadvance(2);
            i0.ɵɵstyleMap(i0.ɵɵpureFunction1(7, _c1$1, ctx.assets == null ? null : ctx.assets.ColorSet == null ? null : ctx.assets.ColorSet.Secondary));
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(ctx.go);
        }
    }, dependencies: [i4.NgForOf, SafeHtmlPipe], styles: ["@keyframes pulsebot{0%{transform:scale(1)}50%{transform:scale(1.3)}to{transform:scale(1)}}.bot-listening[_ngcontent-%COMP%]{height:100%;background:transparent}.bot-listening[_ngcontent-%COMP%]:before{content:\"\";position:absolute;top:-60vw;left:-80vw;width:150vw;height:150vw;border-radius:50%;background:transparent}.bot-listening[_ngcontent-%COMP%]:after{content:\"\";position:absolute;top:-40vw;left:-50vw;width:90vw;height:90vw;border-radius:50%;background:transparent}.m-carl-notification[_ngcontent-%COMP%]{position:relative;top:50%}.m-carl-notification[_ngcontent-%COMP%]   .m-cue[_ngcontent-%COMP%]{width:168px;height:168px;margin:0 auto 50px;display:flex;justify-content:center;align-items:center}.m-carl-notification[_ngcontent-%COMP%]   .m-cue[_ngcontent-%COMP%]   .a-cue-icon[_ngcontent-%COMP%]{position:absolute;width:100px;height:100px;transform:translate(5px) translateY(5px);border-radius:50%;background:radial-gradient(circle at 50% 50%,#9D107D 1px,#9D107D 3%,#580b58 60%);box-shadow:0 0 10px 5px #00000040;animation:pulsebot 3.5s ease infinite}.m-carl-notification[_ngcontent-%COMP%]   .m-cue[_ngcontent-%COMP%]   .a-cue-voice[_ngcontent-%COMP%]{transform-origin:center center;height:190px;width:190px;position:absolute;display:flex;justify-content:center;align-items:center}.m-carl-notification[_ngcontent-%COMP%]   .m-cue[_ngcontent-%COMP%]   .a-cue-voice-el[_ngcontent-%COMP%]{position:absolute;width:150px;height:150px;border-radius:50%;background:#fff;opacity:.2;filter:blur(2px)}.voice1[_ngcontent-%COMP%]{background:#9A147F!important}.voice2[_ngcontent-%COMP%]{background:#773691!important}.voice3[_ngcontent-%COMP%]{background:#4E5CA8!important}.voice4[_ngcontent-%COMP%]{background:#ABC1F1!important}.m-carl-notification[_ngcontent-%COMP%]   .m-cue[_ngcontent-%COMP%]   .a-cue-voice-el[_ngcontent-%COMP%]:nth-child(1){animation:hovering 6s ease 0s infinite reverse both}.m-carl-notification[_ngcontent-%COMP%]   .m-cue[_ngcontent-%COMP%]   .a-cue-voice-el[_ngcontent-%COMP%]:nth-child(2){animation:hovering 7s ease 0s infinite both}.m-carl-notification[_ngcontent-%COMP%]   .m-cue[_ngcontent-%COMP%]   .a-cue-voice-el[_ngcontent-%COMP%]:nth-child(3){animation:hovering 8s ease 0s infinite reverse both}.m-carl-notification[_ngcontent-%COMP%]   .m-cue[_ngcontent-%COMP%]   .a-cue-voice-el[_ngcontent-%COMP%]:nth-child(4){animation:hovering 9s ease 0s infinite both}.m-carl-notification[_ngcontent-%COMP%]   .m-cue[_ngcontent-%COMP%]   .a-cue-voice-el[_ngcontent-%COMP%]:nth-child(5){animation:hovering 10s ease 0s infinite reverse both}.m-carl-notification[_ngcontent-%COMP%]   .m-cue[_ngcontent-%COMP%]   .speaking[_ngcontent-%COMP%]{animation:pulse 2s ease 0s infinite}.m-carl-notification[_ngcontent-%COMP%]   .a-caption[_ngcontent-%COMP%]{color:#fff;font-size:1.5em;line-height:1.8em;text-shadow:0px 1px 2px rgba(0,0,0,.26);text-align:center}.m-carl-notification[_ngcontent-%COMP%]   .a-caption.speaking[_ngcontent-%COMP%]{text-shadow:0px 0px 0px;opacity:.4}@keyframes hovering{0%{transform:rotate(0) translate(18px) rotate(0)}to{transform:rotate(360deg) translate(18px) rotate(-360deg)}}@keyframes pulse{0%{transform:scale(1)}10%{transform:scale(1.15)}15%{transform:scale(1.25)}20%{transform:scale(1.05)}30%{transform:scale(1.3)}40%{transform:scale(1)}50%{transform:scale(1.25)}55%{transform:scale(1.1)}60%{transform:scale(1)}65%{transform:scale(1.3)}70%{transform:scale(1.2)}80%{transform:scale(1.15)}90%{transform:scale(1.25)}to{transform:scale(1.05)}}"] });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FirstVisitComponent, [{
            type: Component,
            args: [{ selector: 'bot-first-visit', template: "<ng-container>\n  <div class=\"bot-logo-init-wrapper\">\n    <!--<img [src]=\"assets.FullSizeLogo\">-->\n    <div class=\"m-carl-notification\">\n      <div class=\"m-carl-notification-cue m-cue\">\n        <div class=\"a-cue-icon\" id=\"bot-icon\"></div>\n      </div>\n    </div>\n  </div>\n  <div class=\"bot-init-text\" [innerHTML]=\"current | safeHtml\"></div>\n  <div class=\"bot-init-bullet-step\">\n      <span *ngFor=\"let elem of firstUsageStory ; let pos = index\" class=\"bot-init-dot\"\n            [style]=\"pos === position ? {\n              backgroundColor : assets?.ColorSet?.Primary,\n              borderColor :assets?.ColorSet?.Primary\n              }:{\n                backgroundColor :assets?.ColorSet?.Secondary,\n                borderColor :assets?.ColorSet?.Primary\n                }\" (click)=\"goTo(pos)\">\n      </span>\n  </div>\n  <div class=\"bot-init-button-wrapper\">\n    <button mat-button class=\"bot-button button-lg\" [style]=\"{\n      backgroundColor : '#171F26',\n      color : assets?.ColorSet?.Secondary\n    }\" (click)=\"start()\">{{ go }}</button>\n  </div>\n\n</ng-container>\n", styles: ["@keyframes pulsebot{0%{transform:scale(1)}50%{transform:scale(1.3)}to{transform:scale(1)}}.bot-listening{height:100%;background:transparent}.bot-listening:before{content:\"\";position:absolute;top:-60vw;left:-80vw;width:150vw;height:150vw;border-radius:50%;background:transparent}.bot-listening:after{content:\"\";position:absolute;top:-40vw;left:-50vw;width:90vw;height:90vw;border-radius:50%;background:transparent}.m-carl-notification{position:relative;top:50%}.m-carl-notification .m-cue{width:168px;height:168px;margin:0 auto 50px;display:flex;justify-content:center;align-items:center}.m-carl-notification .m-cue .a-cue-icon{position:absolute;width:100px;height:100px;transform:translate(5px) translateY(5px);border-radius:50%;background:radial-gradient(circle at 50% 50%,#9D107D 1px,#9D107D 3%,#580b58 60%);box-shadow:0 0 10px 5px #00000040;animation:pulsebot 3.5s ease infinite}.m-carl-notification .m-cue .a-cue-voice{transform-origin:center center;height:190px;width:190px;position:absolute;display:flex;justify-content:center;align-items:center}.m-carl-notification .m-cue .a-cue-voice-el{position:absolute;width:150px;height:150px;border-radius:50%;background:#fff;opacity:.2;filter:blur(2px)}.voice1{background:#9A147F!important}.voice2{background:#773691!important}.voice3{background:#4E5CA8!important}.voice4{background:#ABC1F1!important}.m-carl-notification .m-cue .a-cue-voice-el:nth-child(1){animation:hovering 6s ease 0s infinite reverse both}.m-carl-notification .m-cue .a-cue-voice-el:nth-child(2){animation:hovering 7s ease 0s infinite both}.m-carl-notification .m-cue .a-cue-voice-el:nth-child(3){animation:hovering 8s ease 0s infinite reverse both}.m-carl-notification .m-cue .a-cue-voice-el:nth-child(4){animation:hovering 9s ease 0s infinite both}.m-carl-notification .m-cue .a-cue-voice-el:nth-child(5){animation:hovering 10s ease 0s infinite reverse both}.m-carl-notification .m-cue .speaking{animation:pulse 2s ease 0s infinite}.m-carl-notification .a-caption{color:#fff;font-size:1.5em;line-height:1.8em;text-shadow:0px 1px 2px rgba(0,0,0,.26);text-align:center}.m-carl-notification .a-caption.speaking{text-shadow:0px 0px 0px;opacity:.4}@keyframes hovering{0%{transform:rotate(0) translate(18px) rotate(0)}to{transform:rotate(360deg) translate(18px) rotate(-360deg)}}@keyframes pulse{0%{transform:scale(1)}10%{transform:scale(1.15)}15%{transform:scale(1.25)}20%{transform:scale(1.05)}30%{transform:scale(1.3)}40%{transform:scale(1)}50%{transform:scale(1.25)}55%{transform:scale(1.1)}60%{transform:scale(1)}65%{transform:scale(1.3)}70%{transform:scale(1.2)}80%{transform:scale(1.15)}90%{transform:scale(1.25)}to{transform:scale(1.05)}}\n"] }]
        }], function () { return [{ type: TranslateService }, { type: KonversoService }]; }, { firstUsageStory: [{
                type: Input
            }], assets: [{
                type: Input
            }], ready: [{
                type: Output
            }] });
})();

function CustomCheckboxCalendarComponent_div_2_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 6);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const row_r3 = ctx.$implicit;
        const ctx_r0 = i0.ɵɵnextContext();
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", ctx_r0.columnOverride[row_r3] ? ctx_r0.translate.translate(ctx_r0.service.locale, ctx_r0.columnOverride[row_r3]) : ctx_r0.translate.translate(ctx_r0.service.locale, row_r3), " ");
    }
}
const _c0$1 = function (a0) { return { width: a0 }; };
function CustomCheckboxCalendarComponent_ng_container_5_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementContainerStart(0);
        i0.ɵɵelementStart(1, "div", 7);
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementContainerEnd();
    }
    if (rf & 2) {
        const c_r4 = ctx.$implicit;
        const ctx_r1 = i0.ɵɵnextContext();
        i0.ɵɵadvance(1);
        i0.ɵɵstyleMap(i0.ɵɵpureFunction1(3, _c0$1, "calc(100% / " + ctx_r1.column.length + ")"));
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", ctx_r1.columnOverride[c_r4] ? ctx_r1.translate.translate(ctx_r1.service.locale, ctx_r1.columnOverride[c_r4]) : c_r4 === "all" ? "" : ctx_r1.translate.translate(ctx_r1.service.locale, c_r4), " ");
    }
}
function CustomCheckboxCalendarComponent_ng_container_6_ng_container_1_ng_container_2_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementContainerStart(0);
        i0.ɵɵelementStart(1, "div", 10);
        i0.ɵɵelement(2, "input", 11)(3, "label", 12);
        i0.ɵɵelementEnd();
        i0.ɵɵelementContainerEnd();
    }
    if (rf & 2) {
        const c_r8 = ctx.$implicit;
        const row_r5 = i0.ɵɵnextContext(2).$implicit;
        const ctx_r7 = i0.ɵɵnextContext();
        i0.ɵɵadvance(1);
        i0.ɵɵstyleMap(i0.ɵɵpureFunction1(5, _c0$1, "calc(100% / " + ctx_r7.column.length + ")"));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("name", row_r5 + "_" + c_r8)("formControlName", c_r8);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("for", row_r5 + "_" + c_r8);
    }
}
function CustomCheckboxCalendarComponent_ng_container_6_ng_container_1_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementContainerStart(0);
        i0.ɵɵelementStart(1, "form", 9);
        i0.ɵɵtemplate(2, CustomCheckboxCalendarComponent_ng_container_6_ng_container_1_ng_container_2_Template, 4, 7, "ng-container", 5);
        i0.ɵɵelementEnd();
        i0.ɵɵelementContainerEnd();
    }
    if (rf & 2) {
        const row_r5 = i0.ɵɵnextContext().$implicit;
        const ctx_r6 = i0.ɵɵnextContext();
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("formGroup", ctx_r6.form[row_r5]);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx_r6.column);
    }
}
function CustomCheckboxCalendarComponent_ng_container_6_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementContainerStart(0);
        i0.ɵɵtemplate(1, CustomCheckboxCalendarComponent_ng_container_6_ng_container_1_Template, 3, 2, "ng-container", 8);
        i0.ɵɵelementContainerEnd();
    }
    if (rf & 2) {
        const row_r5 = ctx.$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", row_r5 !== "");
    }
}
class CustomCheckboxCalendarComponent {
    constructor(_formBuilder, 
    //public animations : AnimationsService,
    translate, service) {
        this._formBuilder = _formBuilder;
        this.translate = translate;
        this.service = service;
        this.calendarTemplate = {
            morning: { monday: false, tuhesday: false }
        };
        this.columnOverride = {};
        this.calendarChange = new EventEmitter(true);
        this.state = true;
        this.form = {};
        this.column = [];
        this.rows = [''];
        this.checked = {};
        this.calendar_value = {};
    }
    ngOnInit() {
        const formGroup = {};
        for (const part in this.calendarTemplate) {
            if (!formGroup[part]) {
                formGroup[part] = {}; // morning
            }
            this.rows.push(part);
            for (const day in this.calendarTemplate[part]) {
                // @ts-ignore
                formGroup[part][day] = [this.calendarTemplate[part][day]]; //morgin/monday
                this.column.push(day);
            }
            this.column = [...new Set(this.column)];
        }
        for (const part in formGroup) {
            this.form[part] = this._formBuilder.group(formGroup[part]);
            this.observer(part);
            this.process(this.form[part].value, part);
        }
    }
    observer(part) {
        // @ts-ignore
        this.form[part].valueChanges.pipe(debounceTime(200)).subscribe(changes => this.process(changes, part));
    }
    process(changes, part) {
        if (changes.all !== this.checked[part]) {
            const keys = Object.keys(this.form[part].controls);
            for (const k of keys) {
                this.form[part].controls[k].patchValue(changes.all, { emitEvent: false, onlySelf: true });
                if (!this.calendar_value[k])
                    this.calendar_value[k] = {};
                if (!this.calendar_value[k][part])
                    this.calendar_value[k][part] = changes.all;
                else
                    this.calendar_value[k][part] = changes.all;
                this.calendar_value[k][part] = changes.all;
            }
            this.checked[part] = changes.all;
        }
        else {
            const keys = Object.keys(changes).filter((e) => e !== 'all');
            let counter = keys.length;
            for (const k of keys) {
                if (!this.calendar_value[k])
                    this.calendar_value[k] = {};
                if (!this.calendar_value[k][part])
                    this.calendar_value[k][part] = changes[k];
                else
                    this.calendar_value[k][part] = changes[k];
                if (!changes[k]) {
                    counter--;
                }
            }
            if (counter === keys.length) {
                this.form[part].controls['all'].patchValue(true, { emitEvent: false, onlySelf: true });
                this.checked[part] = true;
            }
            else {
                this.checked[part] = false;
                this.form[part].controls['all'].patchValue(false, { emitEvent: false, onlySelf: true });
            }
        }
        this.calendarChange.emit(this.calendar_value);
    }
}
CustomCheckboxCalendarComponent.ɵfac = function CustomCheckboxCalendarComponent_Factory(t) { return new (t || CustomCheckboxCalendarComponent)(i0.ɵɵdirectiveInject(i1$2.FormBuilder), i0.ɵɵdirectiveInject(TranslateService), i0.ɵɵdirectiveInject(KonversoService)); };
CustomCheckboxCalendarComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CustomCheckboxCalendarComponent, selectors: [["custom-checkbox-calendar"]], inputs: { calendarTemplate: "calendarTemplate", columnOverride: "columnOverride", state: "state" }, outputs: { calendarChange: "calendarChange" }, decls: 7, vars: 3, consts: [[1, "checkbox-calendar"], [1, "column-title"], ["class", "calendar-row", 4, "ngFor", "ngForOf"], [1, "column-value"], [1, "calendar-row-wrapper"], [4, "ngFor", "ngForOf"], [1, "calendar-row"], [1, "calendar-head"], [4, "ngIf"], [1, "calendar-row-wrapper", 3, "formGroup"], [1, "calendar-checkbox"], ["type", "checkbox", 3, "name", "formControlName"], [1, "bot-checkbox-label", 3, "for"]], template: function CustomCheckboxCalendarComponent_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1);
            i0.ɵɵtemplate(2, CustomCheckboxCalendarComponent_div_2_Template, 2, 1, "div", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "div", 3)(4, "div", 4);
            i0.ɵɵtemplate(5, CustomCheckboxCalendarComponent_ng_container_5_Template, 3, 5, "ng-container", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(6, CustomCheckboxCalendarComponent_ng_container_6_Template, 2, 1, "ng-container", 5);
            i0.ɵɵelementEnd()();
        }
        if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.rows);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngForOf", ctx.column);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx.rows);
        }
    }, dependencies: [i1$2.ɵNgNoValidate, i1$2.CheckboxControlValueAccessor, i1$2.NgControlStatus, i1$2.NgControlStatusGroup, i1$2.FormGroupDirective, i1$2.FormControlName, i4.NgForOf, i4.NgIf], styles: [".checkbox-calendar[_ngcontent-%COMP%]{display:flex}.checkbox-calendar[_ngcontent-%COMP%]   .column-value[_ngcontent-%COMP%]{display:inline-flex;flex-direction:column;width:100%}.checkbox-calendar[_ngcontent-%COMP%]   .column-value[_ngcontent-%COMP%]   .calendar-row-wrapper[_ngcontent-%COMP%]{display:flex;width:100%}.checkbox-calendar[_ngcontent-%COMP%]   .column-title[_ngcontent-%COMP%]{display:inline-flex;flex-direction:column;min-height:50px;width:30%}.calendar-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]{width:24px;height:24px}.calendar-head[_ngcontent-%COMP%], .calendar-row[_ngcontent-%COMP%], .calendar-checkbox[_ngcontent-%COMP%]{margin-top:10px;min-height:44px;padding:10px;text-align:center;font-size:.875rem;margin-right:0!important}"] });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CustomCheckboxCalendarComponent, [{
            type: Component,
            args: [{ selector: 'custom-checkbox-calendar', template: "<div class=\"checkbox-calendar\">\n    <div class=\"column-title\">\n      <div *ngFor=\"let row of rows\" class=\"calendar-row\">\n        {{  (columnOverride[row] ? translate.translate(service.locale, columnOverride[row]) : translate.translate(service.locale,row))}}\n      </div>\n    </div>\n    <div class=\"column-value\">\n      <div class=\"calendar-row-wrapper\">\n        <ng-container *ngFor=\"let c of column\">\n          <div class=\"calendar-head\"\n               [style]=\"{width : 'calc(100% / '+column.length+')'}\">\n               {{ columnOverride[c] ? translate.translate(service.locale, columnOverride[c]) : (c === 'all' ? '' : translate.translate(service.locale , c) )}} \n            </div>\n        </ng-container>\n      </div>\n  \n      <ng-container *ngFor=\"let row of rows;\">\n        <ng-container *ngIf=\"row !== ''\">\n          <form [formGroup]=\"form[row]\" class=\"calendar-row-wrapper\">\n            <ng-container *ngFor=\"let c of column\">\n  \n              <div class=\"calendar-checkbox\" [style]=\"{width : 'calc(100% / '+column.length+')'}\">\n                <input type=\"checkbox\" [name]=\"row + '_' + c\" [formControlName]=\"c\">\n                <label class=\"bot-checkbox-label\" [for]=\"row + '_' + c\"></label>\n              </div>\n  \n            </ng-container>\n          </form>\n        </ng-container>\n  \n      </ng-container>\n    </div>\n  \n  </div>\n  ", styles: [".checkbox-calendar{display:flex}.checkbox-calendar .column-value{display:inline-flex;flex-direction:column;width:100%}.checkbox-calendar .column-value .calendar-row-wrapper{display:flex;width:100%}.checkbox-calendar .column-title{display:inline-flex;flex-direction:column;min-height:50px;width:30%}.calendar-checkbox input[type=checkbox]{width:24px;height:24px}.calendar-head,.calendar-row,.calendar-checkbox{margin-top:10px;min-height:44px;padding:10px;text-align:center;font-size:.875rem;margin-right:0!important}\n"] }]
        }], function () { return [{ type: i1$2.FormBuilder }, { type: TranslateService }, { type: KonversoService }]; }, { calendarTemplate: [{
                type: Input
            }], columnOverride: [{
                type: Input
            }], calendarChange: [{
                type: Output
            }], state: [{
                type: Input
            }] });
})();

function DesktopFullScreenComponent_ng_container_2_Template(rf, ctx) {
    if (rf & 1) {
        const _r3 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementContainerStart(0);
        i0.ɵɵelementStart(1, "bot-first-visit", 3);
        i0.ɵɵlistener("ready", function DesktopFullScreenComponent_ng_container_2_Template_bot_first_visit_ready_1_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.emit($event)); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementContainerEnd();
    }
    if (rf & 2) {
        const ctx_r0 = i0.ɵɵnextContext();
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("firstUsageStory", ctx_r0.firstUsageStory)("assets", ctx_r0.assets);
    }
}
const _c0 = function (a0) { return { color: a0 }; };
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_7_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementContainerStart(0);
        i0.ɵɵelementStart(1, "div", 15)(2, "div", 16);
        i0.ɵɵelement(3, "div", 17);
        i0.ɵɵelementStart(4, "span", 18);
        i0.ɵɵtext(5);
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementContainerEnd();
    }
    if (rf & 2) {
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
    }
}
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_3_div_1_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 23);
        i0.ɵɵelement(1, "span", 24);
        i0.ɵɵpipe(2, "safeHtml");
        i0.ɵɵelement(3, "br");
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r14 = i0.ɵɵnextContext(5);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(2, 1, ctx_r14.LastBotAnswer.text), i0.ɵɵsanitizeHtml);
    }
}
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_3_ng_container_2_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementContainerStart(0);
        i0.ɵɵelement(1, "span", 25);
        i0.ɵɵpipe(2, "safeHtml");
        i0.ɵɵelementContainerEnd();
    }
    if (rf & 2) {
        const ctx_r15 = i0.ɵɵnextContext(5);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("@FadeSlideInOutKonversoTranslateOut", ctx_r15.animations.FadeSlideInOut(ctx_r15.animationTTX, -100))("innerHTML", i0.ɵɵpipeBind1(2, 2, ctx_r15.LastBotAnswer.text), i0.ɵɵsanitizeHtml);
    }
}
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_3_ng_container_3_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementContainerStart(0);
        i0.ɵɵelement(1, "span", 26);
        i0.ɵɵelementContainerEnd();
    }
}
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_3_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementContainerStart(0);
        i0.ɵɵtemplate(1, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_3_div_1_Template, 4, 3, "div", 22);
        i0.ɵɵtemplate(2, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_3_ng_container_2_Template, 3, 4, "ng-container", 2);
        i0.ɵɵtemplate(3, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_3_ng_container_3_Template, 2, 0, "ng-container", 2);
        i0.ɵɵelementContainerEnd();
    }
    if (rf & 2) {
        const ctx_r10 = i0.ɵɵnextContext(4);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx_r10.LastBotAnswer == null ? null : ctx_r10.LastBotAnswer.text == null ? null : ctx_r10.LastBotAnswer.text.includes("loading-dots"));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !(ctx_r10.LastBotAnswer == null ? null : ctx_r10.LastBotAnswer.text == null ? null : ctx_r10.LastBotAnswer.text.includes("loading-dots")) && ctx_r10.changed && ctx_r10.showText);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx_r10.afterProcess);
    }
}
const _c1 = function (a0, a1) { return { borderColor: a0, color: a1 }; };
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_4_ng_container_2_ng_container_1_button_1_Template(rf, ctx) {
    if (rf & 1) {
        const _r27 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "button", 32);
        i0.ɵɵlistener("click", function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_4_ng_container_2_ng_container_1_button_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r27); const ctx_r26 = i0.ɵɵnextContext(2); const suggest_r19 = ctx_r26.$implicit; const i_r20 = ctx_r26.index; const ctx_r25 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r25.byPassUserInput(suggest_r19 == null ? null : suggest_r19.value == null ? null : suggest_r19.value.onClick, i_r20)); });
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const suggest_r19 = i0.ɵɵnextContext(2).$implicit;
        const ctx_r22 = i0.ɵɵnextContext(5);
        i0.ɵɵstyleMap(i0.ɵɵpureFunction2(4, _c1, ctx_r22.assets == null ? null : ctx_r22.assets.ColorSet == null ? null : ctx_r22.assets.ColorSet.Primary, ctx_r22.assets == null ? null : ctx_r22.assets.ColorSet == null ? null : ctx_r22.assets.ColorSet.Primary));
        i0.ɵɵproperty("@FadeSlideInOutKonversoTranslateOut", ctx_r22.animations.FadeSlideInOut(ctx_r22.animationTTX, -100))("innerHTML", suggest_r19.label || (suggest_r19.value == null ? null : suggest_r19.value.displayedMessage) || (suggest_r19.value == null ? null : suggest_r19.value.title), i0.ɵɵsanitizeHtml);
    }
}
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_4_ng_container_2_ng_container_1_button_2_Template(rf, ctx) {
    if (rf & 1) {
        const _r31 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "button", 33);
        i0.ɵɵlistener("click", function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_4_ng_container_2_ng_container_1_button_2_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r31); const ctx_r30 = i0.ɵɵnextContext(2); const suggest_r19 = ctx_r30.$implicit; const i_r20 = ctx_r30.index; const ctx_r29 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r29.byPassUserInput(suggest_r19 == null ? null : suggest_r19.value == null ? null : suggest_r19.value.onClick, i_r20)); });
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const suggest_r19 = i0.ɵɵnextContext(2).$implicit;
        const ctx_r23 = i0.ɵɵnextContext(5);
        i0.ɵɵstyleMap(i0.ɵɵpureFunction2(4, _c1, ctx_r23.assets == null ? null : ctx_r23.assets.ColorSet == null ? null : ctx_r23.assets.ColorSet.Primary, ctx_r23.assets == null ? null : ctx_r23.assets.ColorSet == null ? null : ctx_r23.assets.ColorSet.Primary));
        i0.ɵɵproperty("@FadeSlideInOutKonversoTranslateOut", ctx_r23.animations.FadeSlideInOut(ctx_r23.animationTTX, -100))("innerHTML", suggest_r19.label || (suggest_r19.value == null ? null : suggest_r19.value.displayedMessage) || (suggest_r19.value == null ? null : suggest_r19.value.title), i0.ɵɵsanitizeHtml);
    }
}
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_4_ng_container_2_ng_container_1_button_3_Template(rf, ctx) {
    if (rf & 1) {
        const _r35 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "button", 34);
        i0.ɵɵlistener("click", function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_4_ng_container_2_ng_container_1_button_3_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r35); const ctx_r34 = i0.ɵɵnextContext(2); const suggest_r19 = ctx_r34.$implicit; const i_r20 = ctx_r34.index; const ctx_r33 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r33.byPassUserInput(suggest_r19 == null ? null : suggest_r19.value == null ? null : suggest_r19.value.onClick, i_r20)); });
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const suggest_r19 = i0.ɵɵnextContext(2).$implicit;
        const ctx_r24 = i0.ɵɵnextContext(5);
        i0.ɵɵstyleMap(i0.ɵɵpureFunction2(4, _c1, ctx_r24.assets == null ? null : ctx_r24.assets.ColorSet == null ? null : ctx_r24.assets.ColorSet.Primary, ctx_r24.assets == null ? null : ctx_r24.assets.ColorSet == null ? null : ctx_r24.assets.ColorSet.Primary));
        i0.ɵɵproperty("@FadeSlideInOutKonversoTranslateOut", ctx_r24.animations.FadeSlideInOut(ctx_r24.animationTTX, -100))("innerHTML", suggest_r19.label || (suggest_r19.value == null ? null : suggest_r19.value.displayedMessage) || (suggest_r19.value == null ? null : suggest_r19.value.title), i0.ɵɵsanitizeHtml);
    }
}
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_4_ng_container_2_ng_container_1_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementContainerStart(0);
        i0.ɵɵtemplate(1, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_4_ng_container_2_ng_container_1_button_1_Template, 1, 7, "button", 29);
        i0.ɵɵtemplate(2, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_4_ng_container_2_ng_container_1_button_2_Template, 1, 7, "button", 30);
        i0.ɵɵtemplate(3, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_4_ng_container_2_ng_container_1_button_3_Template, 1, 7, "button", 31);
        i0.ɵɵelementContainerEnd();
    }
    if (rf & 2) {
        const suggest_r19 = i0.ɵɵnextContext().$implicit;
        const ctx_r21 = i0.ɵɵnextContext(5);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", (suggest_r19.value == null ? null : suggest_r19.value.title) == "Terminer" && ctx_r21.changed || (suggest_r19.value == null ? null : suggest_r19.value.title) == "Quit" && ctx_r21.changed);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", (suggest_r19.value == null ? null : suggest_r19.value.title) == "Nouvelle Demande" && ctx_r21.changed || (suggest_r19.value == null ? null : suggest_r19.value.title) == "New Request" && ctx_r21.changed);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", (suggest_r19.value == null ? null : suggest_r19.value.title) && (suggest_r19.value == null ? null : suggest_r19.value.title) != "Terminer" && (suggest_r19.value == null ? null : suggest_r19.value.title) != "Quit" && (suggest_r19.value == null ? null : suggest_r19.value.title) != "Nouvelle Demande" && (suggest_r19.value == null ? null : suggest_r19.value.title) != "New Request" && ctx_r21.changed);
    }
}
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_4_ng_container_2_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementContainerStart(0);
        i0.ɵɵtemplate(1, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_4_ng_container_2_ng_container_1_Template, 4, 3, "ng-container", 2);
        i0.ɵɵelementContainerEnd();
    }
    if (rf & 2) {
        const suggest_r19 = ctx.$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", suggest_r19.format === "button");
    }
}
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_4_ng_container_3_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementContainerStart(0);
        i0.ɵɵelementStart(1, "div", 35)(2, "div", 36)(3, "i");
        i0.ɵɵtext(4);
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementContainerEnd();
    }
    if (rf & 2) {
        const ctx_r18 = i0.ɵɵnextContext(5);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("@FadeSlideInOutKonversoTranslateOut", ctx_r18.animations.FadeSlideInOut(ctx_r18.animationTTX, -100));
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx_r18.select);
    }
}
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_4_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementContainerStart(0);
        i0.ɵɵelementStart(1, "div", 27);
        i0.ɵɵtemplate(2, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_4_ng_container_2_Template, 2, 1, "ng-container", 28);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(3, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_4_ng_container_3_Template, 5, 2, "ng-container", 2);
        i0.ɵɵelementContainerEnd();
    }
    if (rf & 2) {
        const ctx_r11 = i0.ɵɵnextContext(4);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx_r11.LastBotAnswer.medias[0].required_actions);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx_r11.disableUserInput);
    }
}
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_custom_checkbox_calendar_5_Template(rf, ctx) {
    if (rf & 1) {
        const _r39 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "custom-checkbox-calendar", 37);
        i0.ɵɵlistener("calendarChange", function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_custom_checkbox_calendar_5_Template_custom_checkbox_calendar_calendarChange_0_listener($event) { i0.ɵɵrestoreView(_r39); const ctx_r38 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r38.bindCalendar($event)); });
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r12 = i0.ɵɵnextContext(4);
        i0.ɵɵproperty("@FadeSlideInOutKonversoHeightTest", ctx_r12.animations.FadeSlideInOut(ctx_r12.animationTTX, ctx_r12.animationSlideValue))("state", ctx_r12.afterProcess)("calendarTemplate", ctx_r12.calendarTemplate)("columnOverride", ctx_r12.calendarKeyOverride);
    }
}
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_6_ng_container_11_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementContainerStart(0);
        i0.ɵɵtext(1);
        i0.ɵɵelementContainerEnd();
    }
    if (rf & 2) {
        const ctx_r40 = i0.ɵɵnextContext(5);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", ctx_r40.sendBtn, " ");
    }
}
const _c2 = function (a0, a1) { return { backgroundColor: a0, color: a1 }; };
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_6_Template(rf, ctx) {
    if (rf & 1) {
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
    }
    if (rf & 2) {
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
    }
}
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementContainerStart(0);
        i0.ɵɵelementStart(1, "div", 19)(2, "div", 20);
        i0.ɵɵtemplate(3, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_3_Template, 4, 3, "ng-container", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(4, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_4_Template, 4, 2, "ng-container", 2);
        i0.ɵɵtemplate(5, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_custom_checkbox_calendar_5_Template, 1, 4, "custom-checkbox-calendar", 21);
        i0.ɵɵtemplate(6, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_6_Template, 12, 13, "ng-container", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementContainerEnd();
    }
    if (rf & 2) {
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
    }
}
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_10_Template(rf, ctx) {
    if (rf & 1) {
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
    }
    if (rf & 2) {
        const ctx_r8 = i0.ɵɵnextContext(3);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1(" ", ctx_r8.translate.translate(ctx_r8.service.locale, "VALIDATE_AVAILABILITY"), " ");
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1(" ", ctx_r8.translate.translate(ctx_r8.service.locale, "SKIP"), " ");
    }
}
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_11_ng_container_1_div_1_ng_container_2_Template(rf, ctx) {
    if (rf & 1) {
        const _r55 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementContainerStart(0);
        i0.ɵɵelementStart(1, "textarea", 52);
        i0.ɵɵlistener("paste", function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_11_ng_container_1_div_1_ng_container_2_Template_textarea_paste_1_listener($event) { i0.ɵɵrestoreView(_r55); const ctx_r54 = i0.ɵɵnextContext(6); return i0.ɵɵresetView(ctx_r54.onPaste($event)); })("ngModelChange", function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_11_ng_container_1_div_1_ng_container_2_Template_textarea_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r55); const ctx_r56 = i0.ɵɵnextContext(6); return i0.ɵɵresetView(ctx_r56.userInput = $event); })("keyup.enter", function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_11_ng_container_1_div_1_ng_container_2_Template_textarea_keyup_enter_1_listener() { i0.ɵɵrestoreView(_r55); const ctx_r57 = i0.ɵɵnextContext(6); return i0.ɵɵresetView(ctx_r57.userInput && ctx_r57._send()); })("keyup", function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_11_ng_container_1_div_1_ng_container_2_Template_textarea_keyup_1_listener($event) { i0.ɵɵrestoreView(_r55); const ctx_r58 = i0.ɵɵnextContext(6); return i0.ɵɵresetView(ctx_r58.userWriting($event)); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementContainerEnd();
    }
    if (rf & 2) {
        const ctx_r52 = i0.ɵɵnextContext(6);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngModel", ctx_r52.userInput)("maxlength", ctx_r52.inputLimit)("placeholder", ctx_r52.currentPlaceHolder);
    }
}
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_11_ng_container_1_div_1_ng_container_3_ng_container_3_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementContainerStart(0);
        i0.ɵɵtext(1);
        i0.ɵɵelementContainerEnd();
    }
    if (rf & 2) {
        const ctx_r59 = i0.ɵɵnextContext(7);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", ctx_r59.sendBtnMsg, " ");
    }
}
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_11_ng_container_1_div_1_ng_container_3_button_4_ng_container_2_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementContainerStart(0);
        i0.ɵɵtext(1);
        i0.ɵɵelementContainerEnd();
    }
    if (rf & 2) {
        const ctx_r61 = i0.ɵɵnextContext(8);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", ctx_r61.translate.translate(ctx_r61.service.locale, "ATTACHMENT"), " ");
    }
}
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_11_ng_container_1_div_1_ng_container_3_button_4_ng_container_3_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementContainerStart(0);
        i0.ɵɵtext(1);
        i0.ɵɵelementContainerEnd();
    }
    if (rf & 2) {
        const ctx_r62 = i0.ɵɵnextContext(8);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", ctx_r62.translate.translate(ctx_r62.service.locale, "ATTACHMENTS"), " ");
    }
}
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_11_ng_container_1_div_1_ng_container_3_button_4_Template(rf, ctx) {
    if (rf & 1) {
        const _r64 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "button", 55);
        i0.ɵɵlistener("click", function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_11_ng_container_1_div_1_ng_container_3_button_4_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r64); const ctx_r63 = i0.ɵɵnextContext(7); return i0.ɵɵresetView(ctx_r63.openUpload.emit(true)); });
        i0.ɵɵtext(1);
        i0.ɵɵtemplate(2, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_11_ng_container_1_div_1_ng_container_3_button_4_ng_container_2_Template, 2, 1, "ng-container", 2);
        i0.ɵɵtemplate(3, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_11_ng_container_1_div_1_ng_container_3_button_4_ng_container_3_Template, 2, 1, "ng-container", 2);
        i0.ɵɵelement(4, "nb-icon", 42);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r60 = i0.ɵɵnextContext(7);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", ctx_r60.nbFiles, " ");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx_r60.nbFiles <= 1);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx_r60.nbFiles > 1);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("icon", "attachment")("size", 1.5);
    }
}
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_11_ng_container_1_div_1_ng_container_3_Template(rf, ctx) {
    if (rf & 1) {
        const _r66 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementContainerStart(0);
        i0.ɵɵelementStart(1, "div", 45)(2, "button", 53);
        i0.ɵɵlistener("click", function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_11_ng_container_1_div_1_ng_container_3_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r66); const ctx_r65 = i0.ɵɵnextContext(6); return i0.ɵɵresetView(ctx_r65._send()); });
        i0.ɵɵtemplate(3, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_11_ng_container_1_div_1_ng_container_3_ng_container_3_Template, 2, 1, "ng-container", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(4, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_11_ng_container_1_div_1_ng_container_3_button_4_Template, 5, 5, "button", 54);
        i0.ɵɵelementEnd();
        i0.ɵɵelementContainerEnd();
    }
    if (rf & 2) {
        const ctx_r53 = i0.ɵɵnextContext(6);
        i0.ɵɵadvance(2);
        i0.ɵɵstyleMap(i0.ɵɵpureFunction2(5, _c2, ctx_r53.assets == null ? null : ctx_r53.assets.ColorSet == null ? null : ctx_r53.assets.ColorSet.Primary, ctx_r53.assets == null ? null : ctx_r53.assets.ColorSet == null ? null : ctx_r53.assets.ColorSet.Secondary));
        i0.ɵɵproperty("disabled", !ctx_r53.userInput);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx_r53.inputType !== "number");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx_r53.inputType !== "number");
    }
}
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_11_ng_container_1_div_1_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 50)(1, "div", 51);
        i0.ɵɵtemplate(2, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_11_ng_container_1_div_1_ng_container_2_Template, 2, 3, "ng-container", 2);
        i0.ɵɵtemplate(3, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_11_ng_container_1_div_1_ng_container_3_Template, 5, 8, "ng-container", 2);
        i0.ɵɵelementEnd()();
    }
    if (rf & 2) {
        const ctx_r51 = i0.ɵɵnextContext(5);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("@FadeSlideInOutKonversoTranslateOut", ctx_r51.animations.FadeSlideInOut(ctx_r51.animationTTX, ctx_r51.animationSlideValueAdd));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx_r51.inputType === "text");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx_r51.inputType !== "number");
    }
}
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_11_ng_container_1_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementContainerStart(0);
        i0.ɵɵtemplate(1, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_11_ng_container_1_div_1_Template, 4, 3, "div", 49);
        i0.ɵɵelementContainerEnd();
    }
    if (rf & 2) {
        const ctx_r50 = i0.ɵɵnextContext(4);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !(ctx_r50.LastBotAnswer == null ? null : ctx_r50.LastBotAnswer.text == null ? null : ctx_r50.LastBotAnswer.text.includes("loading-dots")));
    }
}
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_11_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementContainerStart(0);
        i0.ɵɵtemplate(1, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_11_ng_container_1_Template, 2, 1, "ng-container", 2);
        i0.ɵɵelementContainerEnd();
    }
    if (rf & 2) {
        const ctx_r9 = i0.ɵɵnextContext(3);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx_r9.disableUserInput && ctx_r9.showInput);
    }
}
const _c3 = function () { return { "height": "40%" }; };
function DesktopFullScreenComponent_ng_container_3_div_2_Template(rf, ctx) {
    if (rf & 1) {
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
    }
    if (rf & 2) {
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
    }
}
function DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_1_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementContainerStart(0);
        i0.ɵɵelementStart(1, "div", 16);
        i0.ɵɵelement(2, "div", 17);
        i0.ɵɵelementStart(3, "span", 18);
        i0.ɵɵtext(4);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementContainerEnd();
    }
    if (rf & 2) {
        const entry_r71 = i0.ɵɵnextContext().$implicit;
        const ctx_r72 = i0.ɵɵnextContext(3);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("@FadeSlideInOutKonversoTranslateOut", ctx_r72.animations.FadeSlideInOut(ctx_r72.animationTTX, ctx_r72.animationSlideValue));
        i0.ɵɵadvance(1);
        i0.ɵɵstyleMap(i0.ɵɵpureFunction2(5, _c2, ctx_r72.assets == null ? null : ctx_r72.assets.ColorSet == null ? null : ctx_r72.assets.ColorSet.Primary, ctx_r72.assets == null ? null : ctx_r72.assets.ColorSet == null ? null : ctx_r72.assets.ColorSet.Secondary));
        i0.ɵɵproperty("innerHTML", entry_r71.message, i0.ɵɵsanitizeHtml);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(entry_r71.date);
    }
}
function DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_2_ng_container_2_span_1_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelement(0, "span", 67);
        i0.ɵɵpipe(1, "safeHtml");
    }
    if (rf & 2) {
        const entry_r71 = i0.ɵɵnextContext(3).$implicit;
        i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(1, 1, entry_r71.text), i0.ɵɵsanitizeHtml);
    }
}
function DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_2_ng_container_2_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementContainerStart(0);
        i0.ɵɵtemplate(1, DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_2_ng_container_2_span_1_Template, 2, 3, "span", 66);
        i0.ɵɵelementContainerEnd();
    }
    if (rf & 2) {
        const ctx_r75 = i0.ɵɵnextContext(5);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx_r75.changed);
    }
}
function DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_2_ng_container_3_ng_container_1_ng_container_1_button_1_Template(rf, ctx) {
    if (rf & 1) {
        const _r85 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "button", 69);
        i0.ɵɵlistener("click", function DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_2_ng_container_3_ng_container_1_ng_container_1_button_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r85); const suggest_r80 = i0.ɵɵnextContext(2).$implicit; const ctx_r83 = i0.ɵɵnextContext(6); return i0.ɵɵresetView(ctx_r83.byPassUserInput(suggest_r80 == null ? null : suggest_r80.value == null ? null : suggest_r80.value.onClick)); });
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const suggest_r80 = i0.ɵɵnextContext(2).$implicit;
        const ctx_r82 = i0.ɵɵnextContext(6);
        i0.ɵɵstyleMap(i0.ɵɵpureFunction2(3, _c1, ctx_r82.assets == null ? null : ctx_r82.assets.ColorSet == null ? null : ctx_r82.assets.ColorSet.Primary, ctx_r82.assets == null ? null : ctx_r82.assets.ColorSet == null ? null : ctx_r82.assets.ColorSet.Primary));
        i0.ɵɵproperty("innerHTML", suggest_r80.label || (suggest_r80.value == null ? null : suggest_r80.value.displayedMessage) || (suggest_r80.value == null ? null : suggest_r80.value.title), i0.ɵɵsanitizeHtml);
    }
}
function DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_2_ng_container_3_ng_container_1_ng_container_1_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementContainerStart(0);
        i0.ɵɵtemplate(1, DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_2_ng_container_3_ng_container_1_ng_container_1_button_1_Template, 1, 6, "button", 68);
        i0.ɵɵelementContainerEnd();
    }
    if (rf & 2) {
        const ctx_r81 = i0.ɵɵnextContext(7);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx_r81.changed);
    }
}
function DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_2_ng_container_3_ng_container_1_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementContainerStart(0);
        i0.ɵɵtemplate(1, DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_2_ng_container_3_ng_container_1_ng_container_1_Template, 2, 1, "ng-container", 2);
        i0.ɵɵelementContainerEnd();
    }
    if (rf & 2) {
        const suggest_r80 = ctx.$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", suggest_r80.format === "button");
    }
}
function DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_2_ng_container_3_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementContainerStart(0);
        i0.ɵɵtemplate(1, DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_2_ng_container_3_ng_container_1_Template, 2, 1, "ng-container", 28);
        i0.ɵɵelementContainerEnd();
    }
    if (rf & 2) {
        const entry_r71 = i0.ɵɵnextContext(2).$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", entry_r71.medias[0].required_actions);
    }
}
function DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_2_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementContainerStart(0);
        i0.ɵɵelementStart(1, "div", 65);
        i0.ɵɵtemplate(2, DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_2_ng_container_2_Template, 2, 1, "ng-container", 2);
        i0.ɵɵtemplate(3, DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_2_ng_container_3_Template, 2, 1, "ng-container", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementContainerEnd();
    }
    if (rf & 2) {
        const entry_r71 = i0.ɵɵnextContext().$implicit;
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", entry_r71.text);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", entry_r71.medias && entry_r71.medias.length && entry_r71.medias[0].required_actions && entry_r71.medias[0].required_actions.length);
    }
}
function DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementContainerStart(0);
        i0.ɵɵtemplate(1, DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_1_Template, 5, 8, "ng-container", 2);
        i0.ɵɵtemplate(2, DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_2_Template, 4, 2, "ng-container", 2);
        i0.ɵɵelementContainerEnd();
    }
    if (rf & 2) {
        const entry_r71 = ctx.$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", entry_r71.date);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !entry_r71.date);
    }
}
function DesktopFullScreenComponent_ng_container_3_div_3_div_7_button_2_Template(rf, ctx) {
    if (rf & 1) {
        const _r91 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "button", 72);
        i0.ɵɵlistener("click", function DesktopFullScreenComponent_ng_container_3_div_3_div_7_button_2_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r91); const ctx_r90 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r90._send()); });
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r89 = i0.ɵɵnextContext(4);
        i0.ɵɵstyleMap(i0.ɵɵpureFunction2(4, _c2, ctx_r89.assets == null ? null : ctx_r89.assets.ColorSet == null ? null : ctx_r89.assets.ColorSet.Primary, ctx_r89.assets == null ? null : ctx_r89.assets.ColorSet == null ? null : ctx_r89.assets.ColorSet.Secondary));
        i0.ɵɵproperty("disabled", !ctx_r89.userInput);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1("", ctx_r89.sendBtn, " ");
    }
}
function DesktopFullScreenComponent_ng_container_3_div_3_div_7_Template(rf, ctx) {
    if (rf & 1) {
        const _r93 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "div", 38)(1, "input", 70);
        i0.ɵɵlistener("ngModelChange", function DesktopFullScreenComponent_ng_container_3_div_3_div_7_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r93); const ctx_r92 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r92.userInput = $event); })("keyup.enter", function DesktopFullScreenComponent_ng_container_3_div_3_div_7_Template_input_keyup_enter_1_listener() { i0.ɵɵrestoreView(_r93); const ctx_r94 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r94.userInput && ctx_r94._send()); })("keyup", function DesktopFullScreenComponent_ng_container_3_div_3_div_7_Template_input_keyup_1_listener($event) { i0.ɵɵrestoreView(_r93); const ctx_r95 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r95.userWriting($event)); });
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(2, DesktopFullScreenComponent_ng_container_3_div_3_div_7_button_2_Template, 2, 7, "button", 71);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r69 = i0.ɵɵnextContext(3);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngModel", ctx_r69.userInput)("placeholder", ctx_r69.currentPlaceHolder);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx_r69.changed);
    }
}
function DesktopFullScreenComponent_ng_container_3_div_3_div_8_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 36)(1, "i");
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd()();
    }
    if (rf & 2) {
        const ctx_r70 = i0.ɵɵnextContext(3);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx_r70.select);
    }
}
function DesktopFullScreenComponent_ng_container_3_div_3_Template(rf, ctx) {
    if (rf & 1) {
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
    }
    if (rf & 2) {
        const _r67 = i0.ɵɵreference(3);
        const ctx_r5 = i0.ɵɵnextContext(2);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", ctx_r5.AssistantMode, " ");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("scrollTop", _r67.scrollTo(0, 9999999));
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngForOf", ctx_r5.displayData);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", !ctx_r5.disableUserInput && ctx_r5.showInput);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx_r5.disableUserInput);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("src", ctx_r5.assets.FullSizeLogo, i0.ɵɵsanitizeUrl);
    }
}
function DesktopFullScreenComponent_ng_container_3_Template(rf, ctx) {
    if (rf & 1) {
        const _r97 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementContainerStart(0);
        i0.ɵɵelementStart(1, "button", 4);
        i0.ɵɵlistener("click", function DesktopFullScreenComponent_ng_container_3_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r97); const ctx_r96 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r96.byPassUserInput("exit", 0)); });
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(2, DesktopFullScreenComponent_ng_container_3_div_2_Template, 12, 9, "div", 5);
        i0.ɵɵtemplate(3, DesktopFullScreenComponent_ng_container_3_div_3_Template, 11, 6, "div", 6);
        i0.ɵɵelementContainerEnd();
    }
    if (rf & 2) {
        const ctx_r1 = i0.ɵɵnextContext();
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx_r1.AssistantMode);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx_r1.AssistantMode);
    }
}
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
const FadeSlideInOutKonversoTranslateOutTest = trigger('FadeSlideInOutKonversoTranslateOutTest', [
    transition(':enter', [
        style({ opacity: 0, top: '{{percent_start}}%' }),
        animate(`{{ttx}}ms ${ANIMATION_TYPE_CUBIC_BEZIER}`, style({ opacity: 1, top: '0%' }))
    ]),
    transition(':leave', [
        style({ opacity: 1 }),
        animate('{{ttx}}ms ease-in-out', style({ opacity: 0 }))
    ])
]);
const FadeSlideInOutKonversoHeightTest = trigger('FadeSlideInOutKonversoHeightTest', [
    transition(':enter', [
        style({ height: 0 }),
        animate(`{{ttx}}ms ${ANIMATION_TYPE_CUBIC_BEZIER}`, style({ height: '*' }))
    ]),
    transition(':leave', [
        style({ opacity: 1 }),
        animate('{{ttx}}ms ease-in-out', style({ opacity: 0 }))
    ])
]);
const FadeSlideInOutKonversoHeightOutTest = trigger('FadeSlideInOutKonversoHeightOutTest', [
    transition(':enter', [
        style({ height: '*' }),
        animate(`{{ttx}}ms ${ANIMATION_TYPE_CUBIC_BEZIER}`, style({ height: 0 }))
    ])
]);
/* TODO remove it */
class DesktopFullScreenComponent {
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
        this.addFiles = new EventEmitter();
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
        var _a, _b, _c, _d, _e, _f, _g;
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
        if (this.LastBotAnswer && document.getElementById('text') && ((_a = this.LastBotAnswer) === null || _a === void 0 ? void 0 : _a.text) && !((_c = (_b = this.LastBotAnswer) === null || _b === void 0 ? void 0 : _b.text) === null || _c === void 0 ? void 0 : _c.includes('loading-dots'))) {
            document.getElementById('text').innerHTML = '';
        }
        if (this.LastBotAnswer && this.LastBotAnswer.text && ((_e = (_d = this.LastBotAnswer) === null || _d === void 0 ? void 0 : _d.text) === null || _e === void 0 ? void 0 : _e.includes('<number>')) && ((_g = (_f = this.LastBotAnswer) === null || _f === void 0 ? void 0 : _f.text) === null || _g === void 0 ? void 0 : _g.includes('</number>'))) {
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
    onPaste(e) {
        return __awaiter(this, void 0, void 0, function* () {
            const items = (e.clipboardData || e.originalEvent.clipboardData).items;
            let list = [];
            let blob;
            for (const item of items) {
                // if (item.type.indexOf('image') === 0) {
                if (item.kind == 'file') {
                    blob = item.getAsFile();
                    list.push(blob);
                }
            }
            this.addFiles.emit(list);
            setTimeout(() => {
                list.forEach((d) => {
                    if (this.userInput.includes(d === null || d === void 0 ? void 0 : d.name)) {
                        // @ts-ignore
                        this.userInput = this.userInput.replace(d.name, '');
                    }
                    else {
                        let name = d.name.slice(0, d.name.lastIndexOf('.'));
                        // @ts-ignore
                        this.userInput = this.userInput.replace(d.name, '');
                    }
                });
            }, 100);
        });
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
        var _a;
        if (((_a = this.LastBotAnswer) === null || _a === void 0 ? void 0 : _a.endOfTopic) && this.LastUserInput) {
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
    scroll(scrollHeight) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(0);
                }, 300);
            });
        });
    }
    byPassUserInput(botdata, i) {
        this.sendBotCommand.emit(botdata);
    }
}
DesktopFullScreenComponent.ɵfac = function DesktopFullScreenComponent_Factory(t) { return new (t || DesktopFullScreenComponent)(i0.ɵɵdirectiveInject(TranslateService), i0.ɵɵdirectiveInject(KonversoService), i0.ɵɵdirectiveInject(i3$1.AnimationsService), i0.ɵɵdirectiveInject('__NgxKonverso__')); };
DesktopFullScreenComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DesktopFullScreenComponent, selectors: [["bot-full-screen"]], inputs: { AssistantMode: "AssistantMode", assets: "assets", firstVisit: "firstVisit", firstUsageStory: "firstUsageStory", displayData: "displayData", disableUserInput: "disableUserInput", LastUserInput: "LastUserInput", LastBotAnswer: "LastBotAnswer", PlaceHolder: "PlaceHolder", IsMobile: "IsMobile", showInput: "showInput", NumberPlaceHolder: "NumberPlaceHolder", afterProcess: "afterProcess", nbFiles: "nbFiles" }, outputs: { readySend: "readySend", send: "send", sendBotCommand: "sendBotCommand", sendEvent: "sendEvent", sendCalendar: "sendCalendar", openUpload: "openUpload", addFiles: "addFiles" }, features: [i0.ɵɵNgOnChangesFeature], decls: 4, vars: 7, consts: [["xmlns", "http://www.w3.org/1999/html", 1, "bot-container"], [1, "bot-view"], [4, "ngIf"], [3, "firstUsageStory", "assets", "ready"], ["id", "exit-btn", 2, "display", "none", 3, "click"], ["class", "bot-assistant-wrapper", 4, "ngIf"], ["class", "bot-chat-wrapper", 4, "ngIf"], [1, "bot-assistant-wrapper"], [1, "bot", 3, "ngStyle"], [1, "circle1"], [1, "circle2"], [1, "circle3"], [1, "bot-discussion-wrapper", 2, "min-height", "60%", "max-height", "60%", "height", "60%", "/*max-height", "120px"], [1, "overflow-hidden", "d-flex", "flex-column", "w-100", "position-relative", "user-input-container-outer"], [1, "position-relative", "bot-input-wrapper"], [1, "overflow-hidden", "d-flex", "flex-column", "w-100", "user-input-container"], [1, "user-input"], [1, "data", 3, "innerHTML"], [1, "time"], [1, "position-relative", "bot-answer"], [1, "d-flex", "flex-column", "w-100", "position-relative", "bot-answer__text"], [3, "state", "calendarTemplate", "columnOverride", "calendarChange", 4, "ngIf"], ["class", "w-100 tac", 4, "ngIf"], [1, "w-100", "tac"], [1, "tac", 3, "innerHTML"], [1, "w-100", "justify-content-center", 3, "innerHTML"], ["id", "loading-creation"], [1, "mt35", "d-flex", "justify-content-center", "w-100", "position-relative", "bot-answer__buttons"], [4, "ngFor", "ngForOf"], ["class", "bot-button bot-button-left show-btn", 3, "style", "innerHTML", "click", 4, "ngIf"], ["class", "bot-button bot-button-right show-btn", 3, "style", "innerHTML", "click", 4, "ngIf"], ["class", "bot-button bot-button-grey show-btn", 3, "style", "innerHTML", "click", 4, "ngIf"], [1, "bot-button", "bot-button-left", "show-btn", 3, "innerHTML", "click"], [1, "bot-button", "bot-button-right", "show-btn", 3, "innerHTML", "click"], [1, "bot-button", "bot-button-grey", "show-btn", 3, "innerHTML", "click"], [1, "position-relative", "bot-answer__disable-input"], [1, "bot-input-disable"], [3, "state", "calendarTemplate", "columnOverride", "calendarChange"], [1, "bot-input"], [1, "input-number-div"], [1, "input-number-div-arrow"], [1, "arrow-up", "mt5", 3, "click"], [3, "icon", "size"], [1, "arrow-down", 3, "click"], ["type", "number", "min", "1", "oninput", "validity.valid||(value='1');", "onkeypress", "return event.charCode >= 48 && event.charCode <= 57", 1, "nb-impact-input", 3, "ngModel", "ngModelChange", "keyup"], [1, "bot-container-btn"], [1, "bot-button", "send-btn", "input-number-btn", "showUserInputControls", 3, "disabled", "click"], [1, "primary", "rounded", "validate-after-btn", 2, "display", "inline-block", 3, "click"], [1, "rounded", "secondary", "skip-after-btn", 2, "display", "inline-block", 3, "click"], ["class", "d-flex flex-column w-100 position-realtive bot-input", "id", "bot-input-div", 4, "ngIf"], ["id", "bot-input-div", 1, "d-flex", "flex-column", "w-100", "position-realtive", "bot-input"], [1, "w-100", "h-100", "d-flex", "flex-column", "position-absolute", "bot-input__controls"], [3, "ngModel", "maxlength", "placeholder", "paste", "ngModelChange", "keyup.enter", "keyup"], [1, "bot-button", "send-btn", 3, "disabled", "click"], ["class", "bot-button-attach", 3, "click", 4, "ngIf"], [1, "bot-button-attach", 3, "click"], [1, "bot-chat-wrapper"], [1, "bot-discussion-wrapper", 3, "scrollTop"], ["scrollMe", ""], [1, "bot-chat"], [1, "bot-input-wrapper"], ["class", "bot-input", 4, "ngIf"], ["class", "bot-input-disable", 4, "ngIf"], [1, "bot-logo"], [3, "src"], [1, "bot-answer"], ["class", "", 3, "innerHTML", 4, "ngIf"], [1, "", 3, "innerHTML"], ["class", "bot-button", 3, "style", "innerHTML", "click", 4, "ngIf"], [1, "bot-button", 3, "innerHTML", "click"], ["type", "text", "maxlength", "200", 3, "ngModel", "placeholder", "ngModelChange", "keyup.enter", "keyup"], ["class", "bot-button", 3, "style", "disabled", "click", 4, "ngIf"], [1, "bot-button", 3, "disabled", "click"]], template: function DesktopFullScreenComponent_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1);
            i0.ɵɵtemplate(2, DesktopFullScreenComponent_ng_container_2_Template, 2, 2, "ng-container", 2);
            i0.ɵɵtemplate(3, DesktopFullScreenComponent_ng_container_3_Template, 4, 2, "ng-container", 2);
            i0.ɵɵelementEnd()();
        }
        if (rf & 2) {
            i0.ɵɵstyleMap(i0.ɵɵpureFunction0(6, _c4));
            i0.ɵɵclassMap(ctx.IsMobile ? "bot-mobile" : "");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.firstVisit && ctx.firstUsageStory);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx.firstVisit || !ctx.firstUsageStory);
        }
    }, dependencies: [i1$2.DefaultValueAccessor, i1$2.NumberValueAccessor, i1$2.NgControlStatus, i1$2.MaxLengthValidator, i1$2.MinValidator, i1$2.NgModel, i4.NgForOf, i4.NgIf, i4.NgStyle, i5.NowboardIconComponent, FirstVisitComponent, CustomCheckboxCalendarComponent, SafeHtmlPipe], styles: ["@keyframes gradient{0%{background-position:50% 0%}50%{background-position:50% 100%}to{background-position:50% 0%}}@keyframes pulsebot{0%{transform:scale(1)}50%{transform:scale(1.3)}to{transform:scale(1)}}.bot-listening[_ngcontent-%COMP%]{height:100%;background:transparent}.bot-listening[_ngcontent-%COMP%]:before{content:\"\";position:absolute;top:-60vw;left:-80vw;width:150vw;height:150vw;border-radius:50%;background:transparent}.bot-listening[_ngcontent-%COMP%]:after{content:\"\";position:absolute;top:-40vw;left:-50vw;width:90vw;height:90vw;border-radius:50%;background:transparent}@media screen and (min--moz-device-pixel-ratio:0){.m-carl-notification[_ngcontent-%COMP%]{transform:translate(0)!important}}.m-carl-notification[_ngcontent-%COMP%]{position:relative;top:50%}.m-carl-notification[_ngcontent-%COMP%]   .m-cue[_ngcontent-%COMP%]{width:168px;height:168px;margin:0 auto 50px;display:flex;justify-content:center;align-items:center}.m-carl-notification[_ngcontent-%COMP%]   .m-cue[_ngcontent-%COMP%]   .a-cue-icon[_ngcontent-%COMP%]{position:absolute;width:100px;height:100px;transform:translate(5px) translateY(5px);border-radius:50%;background:radial-gradient(circle at 50% 50%,#9D107D 1px,#9D107D 3%,#580b58 60%);box-shadow:0 0 10px 5px #00000040;animation:pulsebot 3.5s ease infinite}.m-carl-notification[_ngcontent-%COMP%]   .m-cue[_ngcontent-%COMP%]   .a-cue-voice[_ngcontent-%COMP%]{transform-origin:center center;height:130px;width:130px;position:absolute;display:flex;justify-content:center;align-items:center}.m-carl-notification[_ngcontent-%COMP%]   .m-cue[_ngcontent-%COMP%]   .a-cue-voice-el[_ngcontent-%COMP%]{position:absolute;width:130px;height:130px;border-radius:50%;background:#fff;opacity:.2;filter:blur(2px)}.voice1[_ngcontent-%COMP%]{background:#9A147F!important}.voice2[_ngcontent-%COMP%]{background:#773691!important}.voice3[_ngcontent-%COMP%]{background:#4E5CA8!important}.voice4[_ngcontent-%COMP%]{background:#ABC1F1!important}.m-carl-notification[_ngcontent-%COMP%]   .m-cue[_ngcontent-%COMP%]   .a-cue-voice-el[_ngcontent-%COMP%]:nth-child(1){animation:hovering 6s ease 0s infinite reverse both}.m-carl-notification[_ngcontent-%COMP%]   .m-cue[_ngcontent-%COMP%]   .a-cue-voice-el[_ngcontent-%COMP%]:nth-child(2){animation:hovering 7s ease 0s infinite both}.m-carl-notification[_ngcontent-%COMP%]   .m-cue[_ngcontent-%COMP%]   .a-cue-voice-el[_ngcontent-%COMP%]:nth-child(3){animation:hovering 8s ease 0s infinite reverse both}.m-carl-notification[_ngcontent-%COMP%]   .m-cue[_ngcontent-%COMP%]   .a-cue-voice-el[_ngcontent-%COMP%]:nth-child(4){animation:hovering 9s ease 0s infinite both}.m-carl-notification[_ngcontent-%COMP%]   .m-cue[_ngcontent-%COMP%]   .a-cue-voice-el[_ngcontent-%COMP%]:nth-child(5){animation:hovering 10s ease 0s infinite reverse both}.m-carl-notification[_ngcontent-%COMP%]   .m-cue[_ngcontent-%COMP%]   .speaking[_ngcontent-%COMP%]{animation:pulse 2s ease 0s infinite}.m-carl-notification[_ngcontent-%COMP%]   .a-caption[_ngcontent-%COMP%]{color:#fff;font-size:1.5em;line-height:1.8em;text-shadow:0px 1px 2px rgba(0,0,0,.26);text-align:center}.m-carl-notification[_ngcontent-%COMP%]   .a-caption.speaking[_ngcontent-%COMP%]{text-shadow:0px 0px 0px;opacity:.4}@keyframes hovering{0%{transform:rotate(0) translate(18px) rotate(0)}to{transform:rotate(360deg) translate(18px) rotate(-360deg)}}@keyframes pulse{0%{transform:scale(1)}10%{transform:scale(1.15)}15%{transform:scale(1.25)}20%{transform:scale(1.05)}30%{transform:scale(1.3)}40%{transform:scale(1)}50%{transform:scale(1.25)}55%{transform:scale(1.1)}60%{transform:scale(1)}65%{transform:scale(1.3)}70%{transform:scale(1.2)}80%{transform:scale(1.15)}90%{transform:scale(1.25)}to{transform:scale(1.05)}}input[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}input[type=number][_ngcontent-%COMP%]{-moz-appearance:textfield}.nb-impact-input[_ngcontent-%COMP%]{background:none;margin-top:0}"], data: { animation: [FadeSlideInOut, FadeSlideInOutKonversoOpacityOut, FadeSlideInOutKonversoTranslateOut, FadeSlideInOutKonversoHeight, FadeSlideInOutKonversoTranslateOutTest, FadeSlideInOutKonversoHeightTest] // TODO remove it
    } });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DesktopFullScreenComponent, [{
            type: Component,
            args: [{ selector: 'bot-full-screen', animations: [FadeSlideInOut, FadeSlideInOutKonversoOpacityOut, FadeSlideInOutKonversoTranslateOut, FadeSlideInOutKonversoHeight, FadeSlideInOutKonversoTranslateOutTest, FadeSlideInOutKonversoHeightTest] // TODO remove it
                    ,
                    template: "<!--<div class=\"bot-container\"  [class]=\"IsMobile ? 'bot-mobile' : ''\" [style]=\"{'background-color' : '#100652 0% 0% no-repeat padding-box;'}\"-->\n\n  <!--<canvas class=\"orb-canvas\"></canvas>\n  <div class=\"overlay\">\n    <div class=\"overlay__inner\">\n    </div>\n  </div>-->\n  <div class=\"bot-container\"  [class]=\"IsMobile ? 'bot-mobile' : ''\" [style]=\"{'background-color' : '#100652 0% 0% no-repeat padding-box;'}\"\n     xmlns=\"http://www.w3.org/1999/html\">\n  <div class=\"bot-view\">\n    <ng-container *ngIf=\"firstVisit && firstUsageStory\">\n      <bot-first-visit [firstUsageStory]=\"firstUsageStory\" [assets]=\"assets\"\n                       (ready)=\"emit($event)\"></bot-first-visit>\n    </ng-container>\n    <ng-container *ngIf=\"!firstVisit || !firstUsageStory\">\n      <button (click)=\"byPassUserInput('exit', 0)\" id=\"exit-btn\" style=\"display: none;\"></button>\n\n      <div class=\"bot-assistant-wrapper\" *ngIf=\"AssistantMode\">\n        <!-- TODO do we need id, remove it? -->\n        <!--<div *ngIf=\"!botListening\" class=\"bot-logo\" id=\"botlogo\">\n          <img [src]=\"assets.FullSizeLogo\">\n        </div>-->\n        <!--<div [ngStyle]=\"{'height': '40%'}\" class=\"bot-logo bot-listening\">\n          <div [ngStyle]=\"{'transform': 'translateY(-10vh)'}\" class=\"m-carl-notification\">\n            <div class=\"m-carl-notification-cue m-cue\">\n              <div *ngIf=\"botListening\" class=\"a-cue-voice\" id=\"bot\">\n                <div class=\"a-cue-voice-el voice1\"></div>\n                <div class=\"a-cue-voice-el voice2\"></div>\n                <div class=\"a-cue-voice-el voice3\"></div>\n                <div class=\"a-cue-voice-el voice4\"></div>\n                <div class=\"a-cue-voice-el\"></div>\n              </div>\n              <div class=\"a-cue-icon\" id=\"bot-icon\"></div>\n            </div>\n          </div>\n        </div>-->\n\n        <div [@FadeSlideInOutKonversoOpacityOut]=\"animations.FadeSlideInOut(animationTTX, animationSlideValue)\" [ngStyle]=\"{'height': '40%'}\" class=\"bot\">\n          <div class=\"circle1\"></div>\n          <div class=\"circle2\"></div>\n          <div class=\"circle3\"></div>\n        </div>\n\n        <div  class=\"bot-discussion-wrapper\" style=\"min-height: 60%; max-height: 60%; height: 60%; /*max-height: 120px;*/\">\n          <!-- USER INPUT -->\n          <div [class.user-input-container-outer-hidden]=\"!showUserInvitation\" class=\"overflow-hidden d-flex flex-column w-100 position-relative user-input-container-outer\">\n            <ng-container *ngIf=\"(LastUserInput && !afterProcess) || !showUserInvitation\">\n              <div [@FadeSlideInOutKonversoHeightTest]=\"animations.FadeSlideInOut(animationHeightTTX*1.5, animationSlideValue)\" class=\"overflow-hidden d-flex flex-column w-100 user-input-container\">\n                <div [@FadeSlideInOutKonversoTranslateOutTest]=\"animations.FadeSlideInOut(animationTTX*1.5, animationSlideValue)\" [class.user-input-top]=\"LastUserInput?.message != ''\"  class=\"user-input\">\n                  <div class=\"data\" [style]=\"{\n                          color : assets?.ColorSet?.Secondary\n                        }\" [innerHTML]=\"LastUserInput.message\">\n                  </div>\n                  <span class=\"time\">{{LastUserInput.date}}</span>\n                </div>\n              </div>\n            </ng-container>\n          </div>\n\n          <!-- BOT ANSWER -->\n          <ng-container *ngIf=\"LastBotAnswer\">\n            <div class=\"position-relative bot-answer\">\n              <div [class.mt-4]=\"!showUserInvitation\" class=\"d-flex flex-column w-100 position-relative bot-answer__text\">\n\n                <!-- BOT ANSWER TEXT -->\n                <ng-container *ngIf=\"LastBotAnswer.text\">\n                  <!--<span *ngIf=\"!LastBotAnswer.text.includes('loading-dots')\" id=\"text\"></span><br>-->\n                  <div *ngIf=\"LastBotAnswer?.text?.includes('loading-dots')\"  class=\"w-100 tac\">\n                    <span class=\"tac\" [innerHTML]=\"LastBotAnswer.text | safeHtml\"></span><br>\n                  </div>\n                  \n                  <ng-container *ngIf=\"!LastBotAnswer?.text?.includes('loading-dots') && changed && showText\">\n                    <span [@FadeSlideInOutKonversoTranslateOut]=\"animations.FadeSlideInOut(animationTTX, -100)\" class=\"w-100 justify-content-center\" [innerHTML]=\"LastBotAnswer.text | safeHtml\"></span>\n                  </ng-container>\n                  <ng-container *ngIf=\"!afterProcess\">\n                    <span id=\"loading-creation\"></span>\n                  </ng-container>\n                </ng-container>\n              </div>\n\n              <ng-container *ngIf=\"LastBotAnswer.medias && LastBotAnswer.medias.length\n                && LastBotAnswer.medias[0].required_actions\n                && LastBotAnswer.medias[0].required_actions.length > 0\n                && !LastBotAnswer?.text?.includes('loading-dots')\">\n                <!-- BOT ANSWER BUTTONS -->\n                <div class=\"mt35 d-flex justify-content-center w-100 position-relative bot-answer__buttons\">\n                  <ng-container *ngFor=\"let suggest of LastBotAnswer.medias[0].required_actions; let i = index\">\n                    <ng-container *ngIf=\"suggest.format === 'button'\">\n                        <button\n                          [@FadeSlideInOutKonversoTranslateOut]=\"animations.FadeSlideInOut(animationTTX, -100)\"\n                          *ngIf=\"suggest.value?.title == 'Terminer' && changed || suggest.value?.title == 'Quit' && changed\" [style]=\"{\n                            borderColor : assets?.ColorSet?.Primary,\n                            color : assets?.ColorSet?.Primary\n                          }\"\n                          class=\"bot-button bot-button-left show-btn\" (click)=\"byPassUserInput(suggest?.value?.onClick, i)\"\n                          [innerHTML]=\"suggest.label|| suggest.value?.displayedMessage || suggest.value?.title \">\n                        </button>\n                        <button\n                          [@FadeSlideInOutKonversoTranslateOut]=\"animations.FadeSlideInOut(animationTTX, -100)\"\n                          *ngIf=\"suggest.value?.title == 'Nouvelle Demande' && changed || suggest.value?.title == 'New Request' && changed\" [style]=\"{\n                            borderColor : assets?.ColorSet?.Primary,\n                            color : assets?.ColorSet?.Primary\n                          }\"\n                          class=\"bot-button bot-button-right show-btn\" (click)=\"byPassUserInput(suggest?.value?.onClick, i)\"\n                          [innerHTML]=\"suggest.label|| suggest.value?.displayedMessage || suggest.value?.title \">\n                        </button>\n                        <button\n                          [@FadeSlideInOutKonversoTranslateOut]=\"animations.FadeSlideInOut(animationTTX, -100)\"\n                          *ngIf=\"suggest.value?.title && suggest.value?.title != 'Terminer' && suggest.value?.title != 'Quit' && suggest.value?.title != 'Nouvelle Demande' && suggest.value?.title != 'New Request' && changed\"\n                            [style]=\"{\n                            borderColor : assets?.ColorSet?.Primary,\n                            color : assets?.ColorSet?.Primary\n                          }\"\n                          class=\"bot-button bot-button-grey show-btn\" (click)=\"byPassUserInput(suggest?.value?.onClick, i)\"\n                          [innerHTML]=\"suggest.label|| suggest.value?.displayedMessage || suggest.value?.title \">\n                      </button>\n                    </ng-container>\n                  </ng-container>\n                </div>\n\n                <ng-container *ngIf=\"disableUserInput\">\n                  <div class=\"position-relative bot-answer__disable-input\">\n                    <div [@FadeSlideInOutKonversoTranslateOut]=\"animations.FadeSlideInOut(animationTTX, -100)\" class=\"bot-input-disable\">\n                      <i>{{ select }}</i>\n                    </div>\n                  </div>\n                </ng-container>\n              </ng-container>\n              <!-- BOT ANSWER BUTTONS -->\n\n              <!--<ng-container *ngIf=\"afterProcess && config.AfterProcessScenario.FormElements.length > 0\">\n                <div class=\"after-process-form\">\n                  <div class=\"after-process-subform\" *ngFor=\"let formElements of config.AfterProcessScenario.FormElements\">\n                    <ng-container *ngFor=\"let form of formElements\">\n                      <ng-container [ngSwitch]=\"form.type\">\n                        <div *ngSwitchCase=\"'checkbox'\" [ngStyle]=\"{'display': form?.display ? form.display: 'block'}\" class=\"bot-checkbox\">\n                          <input [checked]=\"form?.checked == true ? 'true': 'false'\" [id]=\"form?.id\" [name]=\"form?.id\" [type]='form?.type' value=\"false\">\n                          <label [for]=\"form?.id\" class=\"bot-checkbox-label\">\n                            {{ translate.translate(service.locale, form.label) }}\n                          </label>\n                        </div>\n\n                        <input [class]=\"form?.class\" [id]=\"form?.id\" [ngStyle]=\"{'display': form?.display ? form.display: 'block'}\" *ngSwitchCase=\"'text'\"\n                        [pattern]=\"form?.pattern\" [placeholder]=\"form?.placeholder\" [type]=\"form?.type\"\n                        [value]=\"form?.value\">\n\n                        <div [class]=\"form?.class\" *ngSwitchCase=\"'div'\" [ngStyle]=\"{'display': form?.display ? form.display: 'block'}\">\n                          {{ translate.translate(service.locale, form?.content) }}\n                        </div>\n\n                        <textarea [class]=\"form?.class\" [id]=\"form?.id\" *ngSwitchCase=\"'textarea'\" [ngStyle]=\"{'display': form?.display ? form.display: 'block'}\"\n                        [placeholder]=\"translate.translate(service.locale, form?.placeholder)\"></textarea>\n                      </ng-container>\n                    </ng-container>\n                  </div>\n                </div>\n              </ng-container>-->\n\n              <custom-checkbox-calendar\n                [@FadeSlideInOutKonversoHeightTest]=\"animations.FadeSlideInOut(animationTTX, animationSlideValue)\"\n                *ngIf=\"afterProcess\"\n                [state]=\"afterProcess\"\n                (calendarChange)=\"bindCalendar($event)\"\n                [calendarTemplate]=\"calendarTemplate\"\n                [columnOverride]=\"calendarKeyOverride\">\n              </custom-checkbox-calendar>\n\n              <ng-container *ngIf=\"inputType === 'number'\">\n                <div [@FadeSlideInOutKonversoOpacityOut]=\"animations.FadeSlideInOut(animationTTX, animationSlideValue)\" class=\"bot-input\">\n                                  <!--<input [type]=\"inputType\" [(ngModel)]=\"userInput\" (keyup.enter)=\"userInput && _send()\" (keyup)=\"userWriting($event)\" min=\"2\" [max]=\"inputLimit\"\n                       [placeholder]=\"currentPlaceHolder\">-->\n                  <div class=\"input-number-div\">\n                    <div class=\"input-number-div-arrow\">\n                      <button (click)=\"changeNumber(1)\" class=\"arrow-up mt5\">\n                        <nb-icon [icon]=\"'up_2'\" [size]=\"1.5\"></nb-icon>\n                      </button>\n\n                      <button (click)=\"changeNumber(-1)\" class=\"arrow-down\">\n                        <nb-icon [icon]=\"'down_2'\" [size]=\"1.5\"></nb-icon>\n                      </button>\n                    </div>\n\n                    <input [(ngModel)]=\"impact\" (keyup)=\"changeNumberInput(impact)\" class=\"nb-impact-input\" \n                    type=\"number\" min=\"1\"\n                    oninput=\"validity.valid||(value='1');\"\n                    onkeypress=\"return event.charCode >= 48 && event.charCode <= 57\"\n                    >\n                  </div>\n\n                  <div class=\"bot-container-btn\">\n                    <button class=\"bot-button send-btn input-number-btn showUserInputControls\" [style]=\"{\n                      backgroundColor : assets?.ColorSet?.Primary,\n                      color : assets?.ColorSet?.Secondary\n                  }\" (click)=\"_send();showUserInputControls=false;showUserInvitation=!showUserInvitation;\" \n                  [disabled]=\"!userInput || inputType === 'number' && impact < 1\">\n\n                      <ng-container *ngIf=\"inputType === 'number'\">\n                        {{ sendBtn }}\n                      </ng-container>\n                    </button>\n                  </div>\n                </div>\n              </ng-container>\n            </div>\n          </ng-container>\n\n          <div class=\"position-relative bot-input-wrapper\">\n            <ng-container *ngIf=\"afterProcess && config.AfterProcessScenario.FormButtons.length > 0\">\n              <!--<button [class]=\"btn.class\" *ngFor=\"let btn of config.AfterProcessScenario.FormButtons\" [ngStyle]=\"{'display': btn?.display ? btn.display: 'block'}\">\n                {{ translate.translate(service.locale, btn.label) }}\n              </button>-->\n              <button (click)=\"getCalendar()\" class=\"primary rounded validate-after-btn\" style=\"display: inline-block;\">\n                {{ translate.translate(service.locale, 'VALIDATE_AVAILABILITY') }}\n              </button>\n\n              <button class=\"rounded secondary skip-after-btn\" style=\"display: inline-block;\" (click)=\"skip()\">\n                {{ translate.translate(service.locale, 'SKIP') }}\n              </button>\n            </ng-container>\n\n            <ng-container *ngIf=\"!afterProcess && showUserInputControls && inputType !== 'number'\">\n              <ng-container *ngIf=\"!disableUserInput && showInput\">\n                <div *ngIf=\"!LastBotAnswer?.text?.includes('loading-dots')\" class=\"d-flex flex-column w-100 position-realtive bot-input\" id=\"bot-input-div\">\n                  <div [@FadeSlideInOutKonversoTranslateOut]=\"animations.FadeSlideInOut(animationTTX, animationSlideValueAdd)\" class=\"w-100 h-100 d-flex flex-column position-absolute bot-input__controls\">\n\n                    <ng-container *ngIf=\"inputType === 'text'\">\n                      <textarea (paste)=\"onPaste($event)\" [(ngModel)]=\"userInput\" (keyup.enter)=\"userInput && _send()\" (keyup)=\"userWriting($event)\" [maxlength]=\"inputLimit\"\n                        [placeholder]=\"currentPlaceHolder\"></textarea>\n                    </ng-container>\n\n                    <ng-container *ngIf=\"inputType !== 'number'\">\n                      <div class=\"bot-container-btn\">\n                        <button class=\"bot-button send-btn\" [style]=\"{\n                          backgroundColor : assets?.ColorSet?.Primary,\n                          color : assets?.ColorSet?.Secondary}\"\n                          (click)=\"_send()\"\n                          [disabled]=\"!userInput\">\n\n                          <ng-container *ngIf=\"inputType !== 'number'\">\n                            {{ sendBtnMsg }}\n                          </ng-container>\n\n                          <!--<ng-container *ngIf=\"inputType === 'number'\">\n                            {{ sendBtn }}\n                          </ng-container>-->\n                        </button>\n\n                        <!-- <button *ngIf=\"inputType !== 'number' && IsMobile\" class=\"bot-button-screen\">\n                          <nb-icon [icon]=\"'scan_11'\" [size]=\"1.5\"></nb-icon>\n                          {{ btnScreen }}\n                        </button> -->\n\n                        <button *ngIf=\"inputType !== 'number'\" class=\"bot-button-attach\" (click)=\"openUpload.emit(true)\">\n                          {{ nbFiles }}\n\n                          <ng-container *ngIf=\"nbFiles <= 1\">\n                            {{ translate.translate(service.locale, 'ATTACHMENT') }}\n                          </ng-container>\n\n                          <ng-container *ngIf=\"nbFiles > 1\">\n                            {{ translate.translate(service.locale, 'ATTACHMENTS') }}\n                          </ng-container>\n\n                          <nb-icon [icon]=\"'attachment'\" [size]=\"1.5\"></nb-icon>\n                        </button>\n                      </div>\n                    </ng-container>\n\n                  </div>\n                </div>\n              </ng-container>\n            </ng-container>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"bot-chat-wrapper\" *ngIf=\"!AssistantMode\">\n        {{AssistantMode}}\n        <div class=\"bot-discussion-wrapper\" #scrollMe [scrollTop]=\"scrollMe.scrollTo(0, 9999999)\">\n          <div class=\"bot-chat\">\n            <ng-container *ngFor=\"let entry of displayData\">\n              <ng-container *ngIf=\"entry.date\">\n                <div [@FadeSlideInOutKonversoTranslateOut]=\"animations.FadeSlideInOut(animationTTX, animationSlideValue)\" class=\"user-input\">\n                  <div class=\"data\" [style]=\"{\n                     backgroundColor : assets?.ColorSet?.Primary,\n                     color : assets?.ColorSet?.Secondary\n                    }\" [innerHTML]=\"entry.message\">\n                  </div>\n                  <span class=\"time\">{{entry.date}}</span>\n                </div>\n              </ng-container>\n              <ng-container *ngIf=\"!entry.date\">\n                <div class=\"bot-answer\">\n                  <ng-container *ngIf=\"entry.text\">\n                    <span *ngIf=\"changed\" class=\"\" [innerHTML]=\"entry.text | safeHtml\"></span>\n                  </ng-container>\n                  <ng-container *ngIf=\"entry.medias && entry.medias.length\n                   && entry.medias[0].required_actions\n                   && entry.medias[0].required_actions.length\">\n                    <ng-container *ngFor=\"let suggest of entry.medias[0].required_actions\">\n                      <ng-container *ngIf=\"suggest.format === 'button'\">\n                        <button *ngIf=\"changed\" [style]=\"{\n                     borderColor : assets?.ColorSet?.Primary,\n                     color : assets?.ColorSet?.Primary\n            }\" class=\"bot-button\" (click)=\"byPassUserInput(suggest?.value?.onClick)\"\n                                [innerHTML]=\"suggest.label|| suggest.value?.displayedMessage || suggest.value?.title \"></button>\n                      </ng-container>\n                    </ng-container>\n                  </ng-container>\n\n                </div>\n              </ng-container>\n            </ng-container>\n          </div>\n        </div>\n        <div class=\"bot-input-wrapper\">\n          <div class=\"bot-input\" *ngIf=\"!disableUserInput && showInput\">\n            <input type=\"text\" [(ngModel)]=\"userInput\" (keyup.enter)=\"userInput && _send()\" (keyup)=\"userWriting($event)\" maxlength=\"200\"\n                   [placeholder]=\"currentPlaceHolder\">\n            <button *ngIf=\"changed\" class=\"bot-button\" [style]=\"{\n                     backgroundColor : assets?.ColorSet?.Primary,\n                     color : assets?.ColorSet?.Secondary\n            }\" (click)=\"_send()\" [disabled]=\"!userInput\">{{ sendBtn }}\n            </button>\n          </div>\n          <div class=\"bot-input-disable\" *ngIf=\"disableUserInput\">\n            <i>{{ select }}</i>\n          </div>\n        </div>\n        <div class=\"bot-logo\">\n          <img [src]=\"assets.FullSizeLogo\">\n        </div>\n      </div>\n    </ng-container>\n\n  </div>\n</div>\n", styles: ["@keyframes gradient{0%{background-position:50% 0%}50%{background-position:50% 100%}to{background-position:50% 0%}}@keyframes pulsebot{0%{transform:scale(1)}50%{transform:scale(1.3)}to{transform:scale(1)}}.bot-listening{height:100%;background:transparent}.bot-listening:before{content:\"\";position:absolute;top:-60vw;left:-80vw;width:150vw;height:150vw;border-radius:50%;background:transparent}.bot-listening:after{content:\"\";position:absolute;top:-40vw;left:-50vw;width:90vw;height:90vw;border-radius:50%;background:transparent}@media screen and (min--moz-device-pixel-ratio:0){.m-carl-notification{transform:translate(0)!important}}.m-carl-notification{position:relative;top:50%}.m-carl-notification .m-cue{width:168px;height:168px;margin:0 auto 50px;display:flex;justify-content:center;align-items:center}.m-carl-notification .m-cue .a-cue-icon{position:absolute;width:100px;height:100px;transform:translate(5px) translateY(5px);border-radius:50%;background:radial-gradient(circle at 50% 50%,#9D107D 1px,#9D107D 3%,#580b58 60%);box-shadow:0 0 10px 5px #00000040;animation:pulsebot 3.5s ease infinite}.m-carl-notification .m-cue .a-cue-voice{transform-origin:center center;height:130px;width:130px;position:absolute;display:flex;justify-content:center;align-items:center}.m-carl-notification .m-cue .a-cue-voice-el{position:absolute;width:130px;height:130px;border-radius:50%;background:#fff;opacity:.2;filter:blur(2px)}.voice1{background:#9A147F!important}.voice2{background:#773691!important}.voice3{background:#4E5CA8!important}.voice4{background:#ABC1F1!important}.m-carl-notification .m-cue .a-cue-voice-el:nth-child(1){animation:hovering 6s ease 0s infinite reverse both}.m-carl-notification .m-cue .a-cue-voice-el:nth-child(2){animation:hovering 7s ease 0s infinite both}.m-carl-notification .m-cue .a-cue-voice-el:nth-child(3){animation:hovering 8s ease 0s infinite reverse both}.m-carl-notification .m-cue .a-cue-voice-el:nth-child(4){animation:hovering 9s ease 0s infinite both}.m-carl-notification .m-cue .a-cue-voice-el:nth-child(5){animation:hovering 10s ease 0s infinite reverse both}.m-carl-notification .m-cue .speaking{animation:pulse 2s ease 0s infinite}.m-carl-notification .a-caption{color:#fff;font-size:1.5em;line-height:1.8em;text-shadow:0px 1px 2px rgba(0,0,0,.26);text-align:center}.m-carl-notification .a-caption.speaking{text-shadow:0px 0px 0px;opacity:.4}@keyframes hovering{0%{transform:rotate(0) translate(18px) rotate(0)}to{transform:rotate(360deg) translate(18px) rotate(-360deg)}}@keyframes pulse{0%{transform:scale(1)}10%{transform:scale(1.15)}15%{transform:scale(1.25)}20%{transform:scale(1.05)}30%{transform:scale(1.3)}40%{transform:scale(1)}50%{transform:scale(1.25)}55%{transform:scale(1.1)}60%{transform:scale(1)}65%{transform:scale(1.3)}70%{transform:scale(1.2)}80%{transform:scale(1.15)}90%{transform:scale(1.25)}to{transform:scale(1.05)}}input::-webkit-outer-spin-button,input::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}input[type=number]{-moz-appearance:textfield}.nb-impact-input{background:none;margin-top:0}\n"] }]
        }], function () {
        return [{ type: TranslateService }, { type: KonversoService }, { type: i3$1.AnimationsService }, { type: undefined, decorators: [{
                        type: Inject,
                        args: ['__NgxKonverso__']
                    }] }];
    }, { AssistantMode: [{
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
            }], addFiles: [{
                type: Output
            }] });
})();

// @ts-ignore
class KonversoComponent {
    constructor(service, dialog) {
        this.service = service;
        this.dialog = dialog;
        this._ready = new EventEmitter();
        this.ready = new EventEmitter();
        this.sended = new EventEmitter();
        this.sendCalendar = new EventEmitter();
        this.files = new EventEmitter();
        this.showInput = true;
        this.afterProcess = false;
        this.fileNb = 0;
        this.step = 1;
        this.stepChange = new EventEmitter();
        this.documentList = [];
        this.AssistantMode = false;
        this.disableUserInput = false;
        this._lastBotAnswer = new BehaviorSubject(null);
        if (service._auth) {
            this.service.authentication.subscribe(() => {
                this.ngOnInit();
            });
        }
        this.service.emulationTrigger.subscribe((response) => {
            if (response) {
                if (!this.LastUserInput) {
                    this.LastUserInput = {
                        message: '',
                        date: '',
                        error: null
                    };
                }
                this.LastUserInput.message += ' ' + response.input;
                this.LastUserInput.date = new Date().toISOString();
                this.triggerKbotResponse(response);
            }
        });
        this.catchStep();
    }
    ngOnInit() {
        this.isMobile = this._isMobile();
        this.assets = this.service.assets;
        this.firstVisit = this.service.firstVisit;
        this.firstUsageStory = this.service.firstUsageStory;
        this.AssistantMode = this.service.AssistantMode;
        this.PlaceHolder = this.service.PlaceHolder;
        this.NumberPlaceHolder = this.service.NumberPlaceHolder;
        this.Welcome = this.service.Welcome;
        this.sendBotCommand('exit', false).catch((err) => console.log('fail reset session'));
        this.History = [];
        if (this.service.ColorSet) {
            this.colorSet = this.service.ColorSet;
        }
        this._ready.subscribe((ready) => {
            if (ready) {
                this.firstVisit = false;
                this.service.firstVisit = false;
                this.ready.emit(ready);
            }
        });
        if (this.Welcome) {
            const customWelcome = BotMessageSample;
            customWelcome.text = this.Welcome;
            this._lastBotAnswer.next(customWelcome);
            this.History.push(customWelcome);
        }
    }
    handleSendCalendar($event) {
        this.sendCalendar.emit($event);
    }
    send($event) {
        return __awaiter(this, void 0, void 0, function* () {
            if ($event.message === 'exit') {
                //this.sendBotCommand('exit', false).catch((err: any) => console.log('fail reset session'));
                return false;
            }
            this.sended.emit(true);
            this.LastBotAnswer.text = '<br>' + DotLoaderTemplate(this.service.ColorSet.Primary);
            if (parseInt($event.message) == NaN) {
                this.History.push($event);
            }
            if (this.AssistantMode) {
                if (this.LastUserInput) {
                    if (parseInt($event.message) == NaN) {
                        this.LastUserInput.message += ' ' + $event.message.replace(/\n/g, '<br>');
                        this.LastUserInput.date = $event.date;
                    }
                }
                else {
                    this.LastUserInput = $event || {
                        message: '',
                        date: '',
                        error: null
                    };
                    this.LastUserInput.message = ' ' + $event.message.replace(/\n/g, '<br>');
                    let last = $event.message.split('<br>').length;
                    if (last > 0 && $event.message.split('<br>')[last - 1] == '') {
                        this.LastUserInput.message = $event.message.slice(0, $event.message.lastIndexOf('<br>'));
                    }
                    this.LastUserInput.date = $event.date;
                }
            }
            else {
                this.LastUserInput = $event || {
                    message: '',
                    date: '',
                    error: null
                };
                this.LastUserInput.message = ' ' + $event.message.replace(/\n/g, '<br>');
                let last = $event.message.split('<br>').length;
                if (last > 0 && $event.message.split('<br>')[last - 1] == '') {
                    this.LastUserInput.message = $event.message.slice(0, $event.message.lastIndexOf('<br>'));
                }
                this.LastUserInput.date = $event.date;
            }
            const index = this.History.length - 1;
            const response = yield this.service.send($event.message).catch((err) => {
                //@ts-ignore
                this.History[index].error = true;
            });
            this.triggerKbotResponse(response);
        });
    }
    get LastBotAnswer() {
        return this._lastBotAnswer.getValue();
    }
    sendBotCommand($event, push = true) {
        return __awaiter(this, void 0, void 0, function* () {
            this.LastBotAnswer.text = '<br>' + DotLoaderTemplate(this.service.ColorSet.Primary);
            if ($event === 'yes_response' || $event === 'no_response' || $event == 'exit') {
                this.LastUserInput = null;
            }
            const response = yield this.service.send($event).catch((err) => {
                console.log('We got an error ', err);
            });
            if (response.response.medias && response.response.medias[0] && response.response.medias[0].required_actions &&
                response.response.medias[0].required_actions.length) {
                this.disableUserInput = true;
            }
            else {
                this.disableUserInput = false;
            }
            if (response && response.response && push) {
                this._lastBotAnswer.next(response.response);
                this.History.push(response.response);
            }
            else if (response && response.response && !push) {
                this._lastBotAnswer.next(response.response);
                this.LastUserInput = null;
                this.History.push(response.response);
            }
            else {
                this.LastUserInput = null;
            }
        });
    }
    catchStep() {
        this._lastBotAnswer.subscribe((event) => {
            if (event && event.text && event.text.includes('step')) {
                const step = striptags(event.text);
                this.stepChange.emit(Number(step));
            }
        });
    }
    onFileSelected(event) {
        Array.from(event.target.files).forEach((f) => {
            console.log(this.documentList);
            this.documentList.push(f);
        });
    }
    addFiles() {
        if (this.documentList == undefined) {
            this.documentList = [];
        }
        if (this.fileInput) {
            // this.fileInput.onchange = (event: Event) => {
            //     console.log(event);
            //     this.onFileSelected(event);
            // };
            console.log(this.documentList);
            const dialog = this.dialog.open(ModalAddAttachmentsComponent, {
                panelClass: 'modal-small',
                data: {
                    data: { input: this.fileInput, documentList: this.documentList }
                }
            });
            dialog.afterClosed().subscribe((documentList) => {
                this.documentList = documentList;
                this.files.emit(this.documentList);
            });
        }
        else {
            console.error('Input not found');
        }
    }
    triggerKbotResponse(response) {
        if (response && response.response) {
            if (response.response.medias && response.response.medias[0] && response.response.medias[0].required_actions &&
                response.response.medias[0].required_actions.length) {
                this.disableUserInput = true;
            }
            else {
                this.disableUserInput = false;
            }
            this._lastBotAnswer.next(response.response);
            this.History.push(response.response);
        }
    }
    _isMobile() {
        const isMobile = {
            Android: () => {
                return !!navigator.userAgent.match(/Android/i);
            },
            BlackBerry: () => {
                return !!navigator.userAgent.match(/BlackBerry/i);
            },
            iOS: () => {
                return !!navigator.userAgent.match(/iPhone|iPad|iPod/i);
            },
            Opera: () => {
                return !!navigator.userAgent.match(/Opera Mini/i);
            },
            Windows: () => {
                return !!navigator.userAgent.match(/IEMobile/i) || !!navigator.userAgent.match(/WPDesktop/i);
            },
            any: () => {
                return !!(isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
            }
        };
        return isMobile.any();
    }
    addNewFiles(event) {
        if (this.documentList == undefined) {
            this.documentList = [];
        }
        console.log(event, 'on passe dans addnewfiles par erreur');
        if (event && event.length > 0) {
            this.documentList.push(...event);
            console.log(this.documentList);
        }
    }
}
KonversoComponent.ɵfac = function KonversoComponent_Factory(t) { return new (t || KonversoComponent)(i0.ɵɵdirectiveInject(KonversoService), i0.ɵɵdirectiveInject(i3.MatDialog)); };
KonversoComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: KonversoComponent, selectors: [["ngx-konverso"]], inputs: { showInput: "showInput", afterProcess: "afterProcess", fileNb: "fileNb", fileInput: "fileInput", step: "step" }, outputs: { ready: "ready", sended: "sended", sendCalendar: "sendCalendar", files: "files", stepChange: "stepChange" }, decls: 1, vars: 16, consts: [[3, "assets", "firstVisit", "firstUsageStory", "displayData", "disableUserInput", "LastBotAnswer", "LastUserInput", "AssistantMode", "PlaceHolder", "NumberPlaceHolder", "IsMobile", "showInput", "afterProcess", "nbFiles", "send", "sendBotCommand", "readySend", "sendCalendar", "openUpload", "addFiles"]], template: function KonversoComponent_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "bot-full-screen", 0);
            i0.ɵɵlistener("send", function KonversoComponent_Template_bot_full_screen_send_0_listener($event) { return ctx.send($event); })("sendBotCommand", function KonversoComponent_Template_bot_full_screen_sendBotCommand_0_listener($event) { return ctx.sendBotCommand($event); })("readySend", function KonversoComponent_Template_bot_full_screen_readySend_0_listener($event) { return ctx._ready.emit($event); })("sendCalendar", function KonversoComponent_Template_bot_full_screen_sendCalendar_0_listener($event) { return ctx.handleSendCalendar($event); })("openUpload", function KonversoComponent_Template_bot_full_screen_openUpload_0_listener() { return ctx.addFiles(); })("addFiles", function KonversoComponent_Template_bot_full_screen_addFiles_0_listener($event) { return ctx.addNewFiles($event); });
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0.ɵɵclassMap(ctx.isMobile ? "bot-mobile" : "");
            i0.ɵɵproperty("assets", ctx.assets)("firstVisit", ctx.firstVisit)("firstUsageStory", ctx.firstUsageStory)("displayData", ctx.History)("disableUserInput", ctx.disableUserInput)("LastBotAnswer", ctx.LastBotAnswer)("LastUserInput", ctx.LastUserInput)("AssistantMode", ctx.AssistantMode)("PlaceHolder", ctx.PlaceHolder)("NumberPlaceHolder", ctx.NumberPlaceHolder)("IsMobile", ctx.isMobile)("showInput", ctx.showInput)("afterProcess", ctx.afterProcess)("nbFiles", (ctx.documentList == null ? null : ctx.documentList.length) || 0);
        }
    }, dependencies: [DesktopFullScreenComponent], styles: ["ngx-konverso{overflow:hidden;display:block;min-height:100%;height:100%}  ngx-konverso .hidden-btn{transform:translateY(-100vh)!important;transition:transform .5s ease-in-out!important;animation:fadeout .5s;-moz-animation:fadeout .5s;-webkit-animation:fadeout .5s;-o-animation:fadeout .5s}@keyframes fadeout{0%{opacity:1}to{opacity:0}}@keyframes dot-keyframes{0%{opacity:.4;transform:scale(1)}50%{opacity:1;transform:scale(1.2)}to{opacity:.4;transform:scale(1)}}  ngx-konverso .loading-dots{text-align:center;width:100%}  ngx-konverso .loading-dots--dot{animation:dot-keyframes 1.5s infinite ease-in-out;border-radius:10px;display:inline-block;height:10px;width:10px}  ngx-konverso .loading-dots--dot:nth-child(2){animation-delay:.5s}  ngx-konverso .loading-dots--dot:nth-child(3){animation-delay:1s}  ngx-konverso bot-full-screen,   ngx-konverso bot-first-visit{display:table;min-height:100%;height:100%;width:100%}  ngx-konverso bot-full-screen button:focus,   ngx-konverso bot-full-screen input:focus{outline:none!important}  ngx-konverso bot-full-screen .bot-button>*{position:relative}  ngx-konverso bot-full-screen .button-lg{padding:10px!important;font-size:16px!important}  ngx-konverso bot-full-screen .bot-button{cursor:pointer;opacity:1;border-radius:21.1416px 21.1439px 21.14px;height:40px;padding:8px 19px;position:relative;overflow:hidden;border-width:0;outline:none;margin:0 7.5px;transition:opacity .3s}  ngx-konverso bot-full-screen .bot-button span{display:block;padding:12px 24px}  ngx-konverso bot-full-screen .bot-button:hover,   ngx-konverso bot-full-screen .bot-button:focus{opacity:1}  ngx-konverso bot-full-screen .bot-button:before{content:\"\";position:absolute;top:50%;left:50%;display:block;width:0;padding-top:0;border-radius:100%;background-color:#ecf0f14d;transform:translate(-50%,-50%)}  ngx-konverso bot-full-screen .bot-button:active:before{width:120%;padding-top:120%;transition:width .2s ease-out,padding-top .2s ease-out}  ngx-konverso bot-full-screen .bot-button-left{height:44px;display:inline-block;letter-spacing:0px;margin-right:25px}  ngx-konverso bot-full-screen .bot-button-right{height:44px;letter-spacing:0px;display:inline-block}@keyframes movetop2{0%{opacity:0;margin-top:5%}to{opacity:1;margin-top:0%}}  ngx-konverso bot-full-screen .bot-button-grey{min-height:44px!important;letter-spacing:0px;display:inline-block}  ngx-konverso bot-full-screen .bot-container{width:100%;height:100%;display:table;margin:auto;background-size:contain}@media screen and (max-width: 500px){  ngx-konverso bot-full-screen .bot-container{height:90vh}}  ngx-konverso bot-full-screen .bot-container>.bot-view{background-size:contain;width:auto;margin:auto;height:100%;display:table-cell;vertical-align:middle}  ngx-konverso bot-full-screen .bot-container>.bot-view img{margin:auto}  ngx-konverso bot-full-screen .bot-container>.bot-view bot-first-visit .bot-logo-init-wrapper{padding-top:5%;width:100%;margin:auto;vertical-align:middle}  ngx-konverso bot-full-screen .bot-container>.bot-view bot-first-visit .bot-logo-init-wrapper img{margin-left:auto;margin-right:auto;display:block}  ngx-konverso bot-full-screen .bot-container>.bot-view bot-first-visit .bot-init-text{margin-top:4%;width:100%;min-height:150px;font-size:20px;text-align:center}  ngx-konverso bot-full-screen .bot-container>.bot-view bot-first-visit .bot-init-bullet-step{margin-top:5%;text-align:center}  ngx-konverso bot-full-screen .bot-container>.bot-view bot-first-visit .bot-init-bullet-step .bot-init-dot{border:1px solid;display:inline-block;width:12px;height:12px;margin-left:2.5px;margin-right:2.5px;border-radius:50%}  ngx-konverso bot-full-screen .bot-container>.bot-view bot-first-visit .bot-init-button-wrapper{display:block;width:100%;text-align:center;margin-top:8%;margin-right:auto;margin-left:auto}  ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper{align-items:center;display:flex;flex-direction:column;height:100%;width:100%;position:relative}  ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-logo{width:100%;margin:0 auto auto;vertical-align:middle}  ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-logo img{margin-left:auto;margin-right:auto;display:block;width:150px}  ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-discussion-wrapper{min-width:820px;display:grid;grid-template-columns:1fr;grid-template-rows:.3fr 1fr .7fr;gap:0px 0px;grid-template-areas:\"user-input\" \"bot-answer\" \"bot-input-wrapper\";overflow:auto!important}  ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-discussion-wrapper .bot-answer{width:820px;text-align:center;margin:auto;font-size:18px;grid-area:bot-answer}  ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-discussion-wrapper .bot-answer__text{height:54px}  ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-discussion-wrapper .bot-answer__text>span{position:absolute;top:0;left:0}  ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-discussion-wrapper .bot-answer__buttons{height:44px}  ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-discussion-wrapper .bot-answer__buttons>button{position:relative;top:0}  ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-discussion-wrapper .bot-answer__disable-input{height:27px}  ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-discussion-wrapper .bot-answer__disable-input>div{position:relative;top:0;font-size:1rem}  ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-discussion-wrapper .bot-answer>span{overflow:hidden}  ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-discussion-wrapper .bot-answer>span>p{margin:0;overflow:hidden}  ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-discussion-wrapper .bot-answer .bot-input-disable{width:100%;max-width:600px;margin:35px auto;max-height:200px;text-align:center}  ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-discussion-wrapper .user-input{font-size:15px;margin:auto;display:block;grid-area:user-input}  ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-discussion-wrapper .user-input .data{padding:10px 20px;max-width:550px;width:-moz-fit-content;width:fit-content;position:relative;word-break:break-all;color:#fff;margin:5% auto auto;background:#171F26 0% 0% no-repeat padding-box;border-radius:23px 23px 0}  ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-discussion-wrapper .user-input .time{font-weight:300;position:absolute;width:200px;display:none;margin-left:95%;bottom:-1%;color:#000;font-size:10px}  ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-discussion-wrapper .user-input-container-outer{max-height:300px}  ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-discussion-wrapper .user-input-container-outer-hidden{transition:max-height 1.5s ease-out .15s;max-height:0px!important}  ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-discussion-wrapper .bot-input-wrapper{text-align:center;width:100%;bottom:2%;grid-area:bot-input-wrapper}  ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-discussion-wrapper .bot-input-wrapper .bot-input{height:204px}  ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-discussion-wrapper .bot-input-wrapper textarea{height:139px;text-align:left;display:inline-block;padding:14px;width:100%;border-radius:8px;margin-bottom:15px;resize:none}  ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-discussion-wrapper .bot-input-wrapper .bot-container-btn{align-items:center;display:flex;width:100%}  ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-discussion-wrapper .bot-input-wrapper .bot-button{border-radius:8px;display:inline-block;height:40px;margin-left:0;padding:11px;width:62.5%}  ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-discussion-wrapper .bot-input-wrapper .bot-button-screen{align-items:center;border:none;border-radius:8px;cursor:pointer;display:inline-flex;height:37px;justify-content:center;margin:0 7.5px;padding:8px;width:30%}  ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-discussion-wrapper .bot-input-wrapper .bot-button-attach{align-items:center;border:none;border-radius:8px;cursor:pointer;display:inline-flex;height:37px;justify-content:center;margin:0 7.5px;padding:8px}  ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper{width:100%;display:table;height:100%}  ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-logo{max-width:100px;position:absolute;top:2%;left:2%}  ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-logo img{max-width:100px}  ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-discussion-wrapper{width:100%;position:relative;max-width:600px;height:60%!important;padding:15px 30px;margin:0 auto;overflow-y:scroll;direction:rtl;display:grid;grid-template-columns:1fr;grid-template-rows:.3fr 1fr .7fr;gap:0px 0px;grid-template-areas:\"user-input\" \"bot-answer\" \"bot-input-wrapper\";overflow:auto}  ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-discussion-wrapper::-webkit-scrollbar{width:0!important}  ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-discussion-wrapper .bot-chat{position:absolute;overflow-x:hidden;display:flex;flex-direction:column-reverse;justify-content:flex-end;transform:rotate(180deg);min-height:100%;width:94%}  ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-discussion-wrapper .bot-chat .bot-answer{font-size:15px;padding:10px 20px;border-radius:25px;color:#000;height:60%;background-color:transparent;max-width:550px;width:-moz-fit-content;width:fit-content;position:relative;margin:15px 0;word-break:break-all;transform:rotate(180deg);direction:ltr;grid-area:bot-answer}  ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-discussion-wrapper .bot-chat .bot-answer button{padding:10px;border:1px solid}  ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-discussion-wrapper .bot-chat .user-input{font-size:15px;transform:rotate(180deg);direction:ltr;grid-area:user-input}  ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-discussion-wrapper .bot-chat .user-input .data{padding:10px 20px;max-width:550px;width:-moz-fit-content;width:fit-content;position:relative;word-break:break-all;color:#fff;margin:15px 0 15px auto;background:#171F26 0% 0% no-repeat padding-box;border-radius:23px 23px 0}  ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-discussion-wrapper .bot-chat .user-input .time{font-weight:300;position:absolute;width:200px;display:none;margin-left:95%;bottom:-1%;color:#000;font-size:10px}  ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-input-wrapper{bottom:2%;display:table;width:100%;margin:auto;grid-area:bot-input-wrapper}  ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-input-wrapper .bot-input-disable{width:100%;max-width:600px;margin:auto auto 10px;min-height:100px;max-height:200px;padding:2.5% 2.5% .5% .3%;text-align:center}  ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-input-wrapper .bot-input{width:100%;max-width:600px;margin:auto auto 10px;min-height:100px;max-height:200px;padding:2.5% 2.5% .5%}  ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-input-wrapper .bot-input input{display:inline-block;padding:14px;margin-right:15px}  ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-input-wrapper .bot-input .bot-button{display:inline-block;width:calc(36% - 15px);padding:11px}  ngx-konverso .bot-mobile{font-family:nexa,Roboto;width:96vw!important;height:100vh;display:table;margin:auto;background-size:contain}  ngx-konverso .bot-mobile .bot-view bot-first-visit{position:relative}  ngx-konverso .bot-mobile .bot-view bot-first-visit .bot-logo-init-wrapper{margin-top:2.5vh}  ngx-konverso .bot-mobile .bot-view bot-first-visit .bot-logo-init-wrapper img{margin-left:auto;margin-right:auto;display:block;max-width:150px}  ngx-konverso .bot-mobile .bot-view bot-first-visit .bot-init-text{margin-top:4%;width:100%;min-height:150px;font-size:15px!important;text-align:center}  ngx-konverso .bot-mobile .bot-view bot-first-visit .bot-init-button-wrapper{position:absolute;top:70%}  ngx-konverso .bot-mobile .bot-view .bot-assistant-wrapper .bot-discussion-wrapper .bot-input-wrapper .bot-input-div>div textarea{height:unset!important}  ngx-konverso .bot-mobile .bot-view .bot-assistant-wrapper .bot-answer{width:70vw!important;text-align:center;font-size:15px!important;margin-top:5%!important;margin-left:auto!important;margin-right:auto!important}  ngx-konverso .bot-mobile .bot-view .bot-assistant-wrapper .bot-answer .position-relative{position:relative}  ngx-konverso .bot-mobile .bot-view .bot-assistant-wrapper .bot-input-wrapper{background:none!important;bottom:10vh!important}  ngx-konverso .bot-mobile .bot-view .bot-assistant-wrapper .bot-input-wrapper input{width:90%!important}@keyframes movetop{0%{margin-top:5%}to{margin-top:0%}}.fade[_ngcontent-%COMP%]{animation:fadeinanswer .7s ease-in .2s both!important;-moz-animation:fadeinanswer .7s ease-in .2s both!important;-webkit-animation:fadeinanswer .7s ease-in .2s both!important;-o-animation:fadeinanswer .7s ease-in .2s both!important;display:block}.fade[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{animation:fadeinanswer .7s ease-in .2s both!important;-moz-animation:fadeinanswer .7s ease-in .2s both!important;-webkit-animation:fadeinanswer .7s ease-in .2s both!important;-o-animation:fadeinanswer .7s ease-in .2s both!important}@keyframes fadeinbutton{0%{opacity:0}to{opacity:1}}@keyframes fadeinanswer{0%{opacity:0}to{opacity:1}}"] });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(KonversoComponent, [{
            type: Component,
            args: [{ selector: 'ngx-konverso', template: "<bot-full-screen [class]=\"isMobile ? 'bot-mobile' : ''\"\n                 [assets]=\"assets\"\n                 [firstVisit]=\"firstVisit\"\n                 [firstUsageStory]=\"firstUsageStory\"\n                 (send)=\"send($event)\"\n                 (sendBotCommand)=\"sendBotCommand($event)\"\n                 [displayData]=\"History\"\n                 [disableUserInput]=\"disableUserInput\"\n                 [LastBotAnswer]=\"LastBotAnswer\"\n                 [LastUserInput]=\"LastUserInput\"\n                 [AssistantMode]=\"AssistantMode\"\n                 [PlaceHolder]=\"PlaceHolder\"\n                 [NumberPlaceHolder]=\"NumberPlaceHolder\"\n                 [IsMobile]=\"isMobile\"\n                 (readySend)=\"_ready.emit($event)\"\n                 [showInput]=\"showInput\"\n                 [afterProcess]=\"afterProcess\"\n                 (sendCalendar)=\"handleSendCalendar($event)\"\n                 (openUpload)=\"addFiles()\"\n                 [nbFiles]=\"documentList?.length || 0\"\n                 (addFiles)=\"addNewFiles($event)\"\n></bot-full-screen>\n\n\n", styles: ["::ng-deep ngx-konverso{overflow:hidden;display:block;min-height:100%;height:100%}::ng-deep ngx-konverso .hidden-btn{transform:translateY(-100vh)!important;transition:transform .5s ease-in-out!important;animation:fadeout .5s;-moz-animation:fadeout .5s;-webkit-animation:fadeout .5s;-o-animation:fadeout .5s}@keyframes fadeout{0%{opacity:1}to{opacity:0}}@keyframes dot-keyframes{0%{opacity:.4;transform:scale(1)}50%{opacity:1;transform:scale(1.2)}to{opacity:.4;transform:scale(1)}}::ng-deep ngx-konverso .loading-dots{text-align:center;width:100%}::ng-deep ngx-konverso .loading-dots--dot{animation:dot-keyframes 1.5s infinite ease-in-out;border-radius:10px;display:inline-block;height:10px;width:10px}::ng-deep ngx-konverso .loading-dots--dot:nth-child(2){animation-delay:.5s}::ng-deep ngx-konverso .loading-dots--dot:nth-child(3){animation-delay:1s}::ng-deep ngx-konverso bot-full-screen,::ng-deep ngx-konverso bot-first-visit{display:table;min-height:100%;height:100%;width:100%}::ng-deep ngx-konverso bot-full-screen button:focus,::ng-deep ngx-konverso bot-full-screen input:focus{outline:none!important}::ng-deep ngx-konverso bot-full-screen .bot-button>*{position:relative}::ng-deep ngx-konverso bot-full-screen .button-lg{padding:10px!important;font-size:16px!important}::ng-deep ngx-konverso bot-full-screen .bot-button{cursor:pointer;opacity:1;border-radius:21.1416px 21.1439px 21.14px;height:40px;padding:8px 19px;position:relative;overflow:hidden;border-width:0;outline:none;margin:0 7.5px;transition:opacity .3s}::ng-deep ngx-konverso bot-full-screen .bot-button span{display:block;padding:12px 24px}::ng-deep ngx-konverso bot-full-screen .bot-button:hover,::ng-deep ngx-konverso bot-full-screen .bot-button:focus{opacity:1}::ng-deep ngx-konverso bot-full-screen .bot-button:before{content:\"\";position:absolute;top:50%;left:50%;display:block;width:0;padding-top:0;border-radius:100%;background-color:#ecf0f14d;transform:translate(-50%,-50%)}::ng-deep ngx-konverso bot-full-screen .bot-button:active:before{width:120%;padding-top:120%;transition:width .2s ease-out,padding-top .2s ease-out}::ng-deep ngx-konverso bot-full-screen .bot-button-left{height:44px;display:inline-block;letter-spacing:0px;margin-right:25px}::ng-deep ngx-konverso bot-full-screen .bot-button-right{height:44px;letter-spacing:0px;display:inline-block}@keyframes movetop2{0%{opacity:0;margin-top:5%}to{opacity:1;margin-top:0%}}::ng-deep ngx-konverso bot-full-screen .bot-button-grey{min-height:44px!important;letter-spacing:0px;display:inline-block}::ng-deep ngx-konverso bot-full-screen .bot-container{width:100%;height:100%;display:table;margin:auto;background-size:contain}@media screen and (max-width: 500px){::ng-deep ngx-konverso bot-full-screen .bot-container{height:90vh}}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view{background-size:contain;width:auto;margin:auto;height:100%;display:table-cell;vertical-align:middle}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view img{margin:auto}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view bot-first-visit .bot-logo-init-wrapper{padding-top:5%;width:100%;margin:auto;vertical-align:middle}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view bot-first-visit .bot-logo-init-wrapper img{margin-left:auto;margin-right:auto;display:block}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view bot-first-visit .bot-init-text{margin-top:4%;width:100%;min-height:150px;font-size:20px;text-align:center}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view bot-first-visit .bot-init-bullet-step{margin-top:5%;text-align:center}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view bot-first-visit .bot-init-bullet-step .bot-init-dot{border:1px solid;display:inline-block;width:12px;height:12px;margin-left:2.5px;margin-right:2.5px;border-radius:50%}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view bot-first-visit .bot-init-button-wrapper{display:block;width:100%;text-align:center;margin-top:8%;margin-right:auto;margin-left:auto}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper{align-items:center;display:flex;flex-direction:column;height:100%;width:100%;position:relative}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-logo{width:100%;margin:0 auto auto;vertical-align:middle}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-logo img{margin-left:auto;margin-right:auto;display:block;width:150px}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-discussion-wrapper{min-width:820px;display:grid;grid-template-columns:1fr;grid-template-rows:.3fr 1fr .7fr;gap:0px 0px;grid-template-areas:\"user-input\" \"bot-answer\" \"bot-input-wrapper\";overflow:auto!important}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-discussion-wrapper .bot-answer{width:820px;text-align:center;margin:auto;font-size:18px;grid-area:bot-answer}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-discussion-wrapper .bot-answer__text{height:54px}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-discussion-wrapper .bot-answer__text>span{position:absolute;top:0;left:0}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-discussion-wrapper .bot-answer__buttons{height:44px}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-discussion-wrapper .bot-answer__buttons>button{position:relative;top:0}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-discussion-wrapper .bot-answer__disable-input{height:27px}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-discussion-wrapper .bot-answer__disable-input>div{position:relative;top:0;font-size:1rem}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-discussion-wrapper .bot-answer>span{overflow:hidden}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-discussion-wrapper .bot-answer>span>p{margin:0;overflow:hidden}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-discussion-wrapper .bot-answer .bot-input-disable{width:100%;max-width:600px;margin:35px auto;max-height:200px;text-align:center}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-discussion-wrapper .user-input{font-size:15px;margin:auto;display:block;grid-area:user-input}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-discussion-wrapper .user-input .data{padding:10px 20px;max-width:550px;width:-moz-fit-content;width:fit-content;position:relative;word-break:break-all;color:#fff;margin:5% auto auto;background:#171F26 0% 0% no-repeat padding-box;border-radius:23px 23px 0}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-discussion-wrapper .user-input .time{font-weight:300;position:absolute;width:200px;display:none;margin-left:95%;bottom:-1%;color:#000;font-size:10px}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-discussion-wrapper .user-input-container-outer{max-height:300px}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-discussion-wrapper .user-input-container-outer-hidden{transition:max-height 1.5s ease-out .15s;max-height:0px!important}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-discussion-wrapper .bot-input-wrapper{text-align:center;width:100%;bottom:2%;grid-area:bot-input-wrapper}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-discussion-wrapper .bot-input-wrapper .bot-input{height:204px}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-discussion-wrapper .bot-input-wrapper textarea{height:139px;text-align:left;display:inline-block;padding:14px;width:100%;border-radius:8px;margin-bottom:15px;resize:none}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-discussion-wrapper .bot-input-wrapper .bot-container-btn{align-items:center;display:flex;width:100%}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-discussion-wrapper .bot-input-wrapper .bot-button{border-radius:8px;display:inline-block;height:40px;margin-left:0;padding:11px;width:62.5%}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-discussion-wrapper .bot-input-wrapper .bot-button-screen{align-items:center;border:none;border-radius:8px;cursor:pointer;display:inline-flex;height:37px;justify-content:center;margin:0 7.5px;padding:8px;width:30%}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-discussion-wrapper .bot-input-wrapper .bot-button-attach{align-items:center;border:none;border-radius:8px;cursor:pointer;display:inline-flex;height:37px;justify-content:center;margin:0 7.5px;padding:8px}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper{width:100%;display:table;height:100%}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-logo{max-width:100px;position:absolute;top:2%;left:2%}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-logo img{max-width:100px}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-discussion-wrapper{width:100%;position:relative;max-width:600px;height:60%!important;padding:15px 30px;margin:0 auto;overflow-y:scroll;direction:rtl;display:grid;grid-template-columns:1fr;grid-template-rows:.3fr 1fr .7fr;gap:0px 0px;grid-template-areas:\"user-input\" \"bot-answer\" \"bot-input-wrapper\";overflow:auto}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-discussion-wrapper::-webkit-scrollbar{width:0!important}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-discussion-wrapper .bot-chat{position:absolute;overflow-x:hidden;display:flex;flex-direction:column-reverse;justify-content:flex-end;transform:rotate(180deg);min-height:100%;width:94%}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-discussion-wrapper .bot-chat .bot-answer{font-size:15px;padding:10px 20px;border-radius:25px;color:#000;height:60%;background-color:transparent;max-width:550px;width:-moz-fit-content;width:fit-content;position:relative;margin:15px 0;word-break:break-all;transform:rotate(180deg);direction:ltr;grid-area:bot-answer}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-discussion-wrapper .bot-chat .bot-answer button{padding:10px;border:1px solid}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-discussion-wrapper .bot-chat .user-input{font-size:15px;transform:rotate(180deg);direction:ltr;grid-area:user-input}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-discussion-wrapper .bot-chat .user-input .data{padding:10px 20px;max-width:550px;width:-moz-fit-content;width:fit-content;position:relative;word-break:break-all;color:#fff;margin:15px 0 15px auto;background:#171F26 0% 0% no-repeat padding-box;border-radius:23px 23px 0}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-discussion-wrapper .bot-chat .user-input .time{font-weight:300;position:absolute;width:200px;display:none;margin-left:95%;bottom:-1%;color:#000;font-size:10px}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-input-wrapper{bottom:2%;display:table;width:100%;margin:auto;grid-area:bot-input-wrapper}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-input-wrapper .bot-input-disable{width:100%;max-width:600px;margin:auto auto 10px;min-height:100px;max-height:200px;padding:2.5% 2.5% .5% .3%;text-align:center}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-input-wrapper .bot-input{width:100%;max-width:600px;margin:auto auto 10px;min-height:100px;max-height:200px;padding:2.5% 2.5% .5%}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-input-wrapper .bot-input input{display:inline-block;padding:14px;margin-right:15px}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-input-wrapper .bot-input .bot-button{display:inline-block;width:calc(36% - 15px);padding:11px}::ng-deep ngx-konverso .bot-mobile{font-family:nexa,Roboto;width:96vw!important;height:100vh;display:table;margin:auto;background-size:contain}::ng-deep ngx-konverso .bot-mobile .bot-view bot-first-visit{position:relative}::ng-deep ngx-konverso .bot-mobile .bot-view bot-first-visit .bot-logo-init-wrapper{margin-top:2.5vh}::ng-deep ngx-konverso .bot-mobile .bot-view bot-first-visit .bot-logo-init-wrapper img{margin-left:auto;margin-right:auto;display:block;max-width:150px}::ng-deep ngx-konverso .bot-mobile .bot-view bot-first-visit .bot-init-text{margin-top:4%;width:100%;min-height:150px;font-size:15px!important;text-align:center}::ng-deep ngx-konverso .bot-mobile .bot-view bot-first-visit .bot-init-button-wrapper{position:absolute;top:70%}::ng-deep ngx-konverso .bot-mobile .bot-view .bot-assistant-wrapper .bot-discussion-wrapper .bot-input-wrapper .bot-input-div>div textarea{height:unset!important}::ng-deep ngx-konverso .bot-mobile .bot-view .bot-assistant-wrapper .bot-answer{width:70vw!important;text-align:center;font-size:15px!important;margin-top:5%!important;margin-left:auto!important;margin-right:auto!important}::ng-deep ngx-konverso .bot-mobile .bot-view .bot-assistant-wrapper .bot-answer .position-relative{position:relative}::ng-deep ngx-konverso .bot-mobile .bot-view .bot-assistant-wrapper .bot-input-wrapper{background:none!important;bottom:10vh!important}::ng-deep ngx-konverso .bot-mobile .bot-view .bot-assistant-wrapper .bot-input-wrapper input{width:90%!important}@keyframes movetop{0%{margin-top:5%}to{margin-top:0%}}.fade{animation:fadeinanswer .7s ease-in .2s both!important;-moz-animation:fadeinanswer .7s ease-in .2s both!important;-webkit-animation:fadeinanswer .7s ease-in .2s both!important;-o-animation:fadeinanswer .7s ease-in .2s both!important;display:block}.fade p{animation:fadeinanswer .7s ease-in .2s both!important;-moz-animation:fadeinanswer .7s ease-in .2s both!important;-webkit-animation:fadeinanswer .7s ease-in .2s both!important;-o-animation:fadeinanswer .7s ease-in .2s both!important}@keyframes fadeinbutton{0%{opacity:0}to{opacity:1}}@keyframes fadeinanswer{0%{opacity:0}to{opacity:1}}\n"] }]
        }], function () { return [{ type: KonversoService }, { type: i3.MatDialog }]; }, { ready: [{
                type: Output
            }], sended: [{
                type: Output
            }], sendCalendar: [{
                type: Output
            }], files: [{
                type: Output
            }], showInput: [{
                type: Input
            }], afterProcess: [{
                type: Input
            }], fileNb: [{
                type: Input
            }], fileInput: [{
                type: Input
            }], step: [{
                type: Input
            }], stepChange: [{
                type: Output
            }] });
})();

// @ts-ignore
class KonversoModule {
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
KonversoModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [KonversoService, NowboardIconService], imports: [FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        CommonModule,
        NowboardIconModule.forRoot({
            disabled_color: "#5E7290",
            primary: "#001B66"
        }), NowboardIconModule] });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(KonversoModule, [{
            type: NgModule,
            args: [{
                    declarations: [KonversoComponent, DesktopFullScreenComponent, FirstVisitComponent, SafeHtmlPipe, CustomCheckboxCalendarComponent, ModalAddAttachmentsComponent],
                    imports: [
                        FormsModule,
                        ReactiveFormsModule,
                        HttpClientModule,
                        CommonModule,
                        NowboardIconModule.forRoot({
                            disabled_color: "#5E7290",
                            primary: "#001B66"
                        }),
                    ],
                    providers: [KonversoService, NowboardIconService],
                    exports: [KonversoComponent, NowboardIconModule]
                }]
        }], function () {
        return [{ type: KonversoModule, decorators: [{
                        type: Optional
                    }, {
                        type: SkipSelf
                    }] }];
    }, null);
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(KonversoModule, { declarations: [KonversoComponent, DesktopFullScreenComponent, FirstVisitComponent, SafeHtmlPipe, CustomCheckboxCalendarComponent, ModalAddAttachmentsComponent], imports: [FormsModule,
            ReactiveFormsModule,
            HttpClientModule,
            CommonModule, i5.NowboardIconModule], exports: [KonversoComponent, NowboardIconModule] });
})();

/*
 * Public API Surface of konverso
 */

/**
 * Generated bundle index. Do not edit.
 */

export { KonversoComponent, KonversoModule, KonversoService };
//# sourceMappingURL=konverso.mjs.map
