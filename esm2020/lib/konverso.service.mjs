import { EventEmitter, Inject, Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { BARBE } from './MyFuckingMustache';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
const barbe = new BARBE();
export class KonversoService {
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
        this.documents = new EventEmitter();
        this.buildHeaders();
        this.initInstance(config);
    }
    /**
     * Send Query To backend server and get a response
     * @param query
     */
    async send(query) {
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
    }
    /**
     * Emulate user entry Query To backend server and get a response
     * @param query
     */
    async sendTriggerEmulation(query) {
        const response = await this.send(query).catch((err) => {
            console.log('error trigger emulation', err);
        });
        if (response) {
            this.emulationTrigger.next({ input: query, ...response });
        }
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
                    if (!user.lang && config.lang) {
                        user.lang = config.lang;
                    }
                    this.locale = user?.lang;
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
                    if (user?.token) {
                        this.token.next(user?.token);
                    }
                    if (user?.firstVisit) {
                        this.firstVisit = true;
                        delete user.firstVisit;
                        if (config?.BotInitMessage?.FirstUsage &&
                            this.locale &&
                            config?.BotInitMessage?.FirstUsage[this.locale]) {
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
        return {
            ...custom,
            ...this.user,
            query: query.replace(/\s+/g, ' ').trim(),
            isSending: true
        };
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(KonversoService, [{
        type: Injectable
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: ['__NgxKonverso__']
            }] }, { type: i1.HttpClient }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia29udmVyc28uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2tvbnZlcnNvL3NyYy9saWIva29udmVyc28uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsWUFBWSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFL0QsT0FBTyxFQUFhLFdBQVcsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQzdELE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDckMsT0FBTyxFQUFDLEtBQUssRUFBQyxNQUFNLHFCQUFxQixDQUFDOzs7QUFFMUMsTUFBTSxLQUFLLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQztBQUcxQixNQUFNLE9BQU8sZUFBZTtJQXlCeEIsWUFBdUMsTUFBeUIsRUFBVSxJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBeEJuRixtQkFBYyxHQUErQixJQUFJLFlBQVksRUFBZ0IsQ0FBQztRQUU5RSxlQUFVLEdBQUcsS0FBSyxDQUFDO1FBS25CLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBRXRCLGVBQVUsR0FBWSxLQUFLLENBQUM7UUFHNUIsU0FBSSxHQUFHLElBQUksZUFBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQy9CLGVBQVUsR0FBNEMsSUFBSSxlQUFlLENBQXlCLElBQUksQ0FBQyxDQUFDO1FBQ3hHLHFCQUFnQixHQUF5QixJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsRSxVQUFLLEdBQTRCLElBQUksZUFBZSxDQUFTLElBQUksQ0FBQyxDQUFDO1FBQzNFLHlDQUF5QztRQUNqQyxXQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUlwQywwQkFBcUIsR0FBUyxFQUFFLENBQUM7UUFDakMsY0FBUyxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FB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RUFBRSxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUU7WUFDeEMsU0FBUyxFQUFFLElBQUk7U0FDbEIsQ0FBQztJQUNOLENBQUM7SUFFRDs7O09BR0c7SUFDSyxJQUFJO1FBQ1IsSUFBSSxNQUFNLEdBQUcsR0FBRyxFQUFFO1lBQ2QsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQztpQkFDM0MsUUFBUSxDQUFDLEVBQUUsQ0FBQztpQkFDWixTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEIsQ0FBQyxDQUFDO1FBQ0YsT0FBTyxNQUFNLEVBQUUsR0FBRyxNQUFNLEVBQUUsR0FBRyxHQUFHLEdBQUcsTUFBTSxFQUFFLEdBQUcsR0FBRyxHQUFHLE1BQU0sRUFBRSxHQUFHLEdBQUcsR0FBRyxNQUFNLEVBQUUsR0FBRyxHQUFHLEdBQUcsTUFBTSxFQUFFLEdBQUcsTUFBTSxFQUFFLEdBQUcsTUFBTSxFQUFFLENBQUM7SUFDekgsQ0FBQzs7OEVBNUxRLGVBQWUsY0F5QkosaUJBQWlCO3FFQXpCNUIsZUFBZSxXQUFmLGVBQWU7dUZBQWYsZUFBZTtjQUQzQixVQUFVOztzQkEwQk0sTUFBTTt1QkFBQyxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0V2ZW50RW1pdHRlciwgSW5qZWN0LCBJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29sb3JTZXQsIERlZmF1bHRBc3NldHMsIEtvbnZlcnNvSW50ZXJmYWNlLCBLb252ZXJzb1F1ZXJ5LCBLb252ZXJzb1VzZXJ9IGZyb20gJy4uL2ludGVyZmFjZS9Lb252ZXJzb0ludGVyZmFjZSc7XG5pbXBvcnQge0h0dHBDbGllbnQsIEh0dHBIZWFkZXJzfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQge0JlaGF2aW9yU3ViamVjdH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge0JBUkJFfSBmcm9tICcuL015RnVja2luZ011c3RhY2hlJztcblxuY29uc3QgYmFyYmUgPSBuZXcgQkFSQkUoKTtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEtvbnZlcnNvU2VydmljZSB7XG4gICAgcHVibGljIGF1dGhlbnRpY2F0aW9uOiBFdmVudEVtaXR0ZXI8S29udmVyc29Vc2VyPiA9IG5ldyBFdmVudEVtaXR0ZXI8S29udmVyc29Vc2VyPigpO1xuICAgIHB1YmxpYyBhc3NldHM6IERlZmF1bHRBc3NldHM7XG4gICAgcHVibGljIGZpcnN0VmlzaXQgPSBmYWxzZTtcbiAgICBwdWJsaWMgZmlyc3RVc2FnZVN0b3J5OiBzdHJpbmdbXTtcbiAgICBwdWJsaWMgQ29sb3JTZXQ6IENvbG9yU2V0O1xuICAgIHB1YmxpYyBQbGFjZUhvbGRlcjogc3RyaW5nW107XG4gICAgcHVibGljIE51bWJlclBsYWNlSG9sZGVyOiBzdHJpbmdbXTtcbiAgICBwdWJsaWMgQXNzaXN0YW50TW9kZSA9IGZhbHNlO1xuICAgIHB1YmxpYyBXZWxjb21lOiBzdHJpbmc7XG4gICAgcHVibGljIHJlYWR5U3RhdGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwdWJsaWMgbG9jYWxlOiBzdHJpbmc7XG4gICAgcHVibGljIF9hdXRoOiBib29sZWFuO1xuICAgIHB1YmxpYyBsYW5nID0gbmV3IEJlaGF2aW9yU3ViamVjdCgnJyk7XG4gICAgcHVibGljIGN1c3RvbURhdGE6IEJlaGF2aW9yU3ViamVjdDx7IFtrZXk6IHN0cmluZ106IGFueSB9PiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8eyBba2V5OiBzdHJpbmddOiBhbnkgfT4obnVsbCk7XG4gICAgcHVibGljIGVtdWxhdGlvblRyaWdnZXI6IEJlaGF2aW9yU3ViamVjdDxhbnk+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChudWxsKTtcbiAgICBwcml2YXRlIHRva2VuOiBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPihudWxsKTtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dmFyaWFibGUtbmFtZVxuICAgIHByaXZhdGUgX3Rva2VuID0gdGhpcy50b2tlbi5hc09ic2VydmFibGUoKTtcbiAgICBwcml2YXRlIHVzZXI6IEtvbnZlcnNvVXNlcjtcbiAgICBwcml2YXRlIGhlYWRlcjogSHR0cEhlYWRlcnM7XG4gICAgcHJpdmF0ZSBlbmRwb2ludDogc3RyaW5nO1xuICAgIHB1YmxpYyBsb2NhbE1vZGFsQXR0YWNobWVudHMgOiBhbnkgPSB7fTtcbiAgICBwdWJsaWMgZG9jdW1lbnRzOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIGNvbnN0cnVjdG9yKEBJbmplY3QoJ19fTmd4S29udmVyc29fXycpIGNvbmZpZzogS29udmVyc29JbnRlcmZhY2UsIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge1xuICAgICAgICB0aGlzLmJ1aWxkSGVhZGVycygpO1xuICAgICAgICB0aGlzLmluaXRJbnN0YW5jZShjb25maWcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNlbmQgUXVlcnkgVG8gYmFja2VuZCBzZXJ2ZXIgYW5kIGdldCBhIHJlc3BvbnNlXG4gICAgICogQHBhcmFtIHF1ZXJ5XG4gICAgICovXG4gICAgcHVibGljIGFzeW5jIHNlbmQocXVlcnk6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nIHwgYW55PiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBpZiAocXVlcnkgJiYgcXVlcnkucmVwbGFjZShuZXcgUmVnRXhwKCcgJywgJ2cnKSwgJycpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaGVhZGVyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByZXBhcmVkRGF0YSA9IHRoaXMuYnVpbGRRdWVyeShxdWVyeSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbnM6IGFueSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHRoaXMuaGVhZGVyXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaHR0cC5wb3N0KHRoaXMuZW5kcG9pbnQgKyAnP3Q9JyArIG5ldyBEYXRlKCkuZ2V0VGltZSgpLCBwcmVwYXJlZERhdGEsIG9wdGlvbnMpXG4gICAgICAgICAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcignSGVhZGVyIGlzIG5vdCBzZXQsIHBsZWFzZSBwcm92aWRlIGEgdG9rZW4gdGhvdWdoIHVzZXIgc2V0dGluZyBvciB0aG91Z2ggbW9kdWxlIGNvbmZpZ3VyYXRpb24nKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKCdDdXJyZW50IGlucHV0IGlzIGVtcHR5LCBwbGVhc2UgdHJ5IGFnYWluJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFbXVsYXRlIHVzZXIgZW50cnkgUXVlcnkgVG8gYmFja2VuZCBzZXJ2ZXIgYW5kIGdldCBhIHJlc3BvbnNlXG4gICAgICogQHBhcmFtIHF1ZXJ5XG4gICAgICovXG4gICAgcHVibGljIGFzeW5jIHNlbmRUcmlnZ2VyRW11bGF0aW9uKHF1ZXJ5OiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLnNlbmQocXVlcnkpLmNhdGNoKChlcnI6IGFueSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yIHRyaWdnZXIgZW11bGF0aW9uJywgZXJyKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChyZXNwb25zZSkge1xuICAgICAgICAgICAgdGhpcy5lbXVsYXRpb25UcmlnZ2VyLm5leHQoe2lucHV0OiBxdWVyeSwgLi4ucmVzcG9uc2V9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwcml2YXRlXG4gICAgICogR2VuZXJhdGUgSGVhZGVyIGZvciBiYWNrZW5kIGNhbGxcbiAgICAgKi9cbiAgICBwcml2YXRlIGJ1aWxkSGVhZGVycygpIHtcbiAgICAgICAgdGhpcy5fdG9rZW4uc3Vic2NyaWJlKCh0b2tlbjogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBiZWFyZXI6IHN0cmluZyA9ICdCZWFyZXIgJyArIHRva2VuO1xuICAgICAgICAgICAgdGhpcy5oZWFkZXIgPSBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGJlYXJlclxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBjb25maWdcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEluaXRpYWxpemUgRGF0YSBmb3IgVXNlciBJbnN0YW5jZVxuICAgICAqL1xuICAgIHByaXZhdGUgaW5pdEluc3RhbmNlKGNvbmZpZzogS29udmVyc29JbnRlcmZhY2UpIHtcbiAgICAgICAgdGhpcy5fYXV0aCA9ICEhY29uZmlnLmF1dGg7XG4gICAgICAgIGlmIChjb25maWcuZW5kcG9pbnQpIHtcbiAgICAgICAgICAgIHRoaXMuZW5kcG9pbnQgPSBjb25maWcuZW5kcG9pbnQ7XG4gICAgICAgICAgICBpZiAoY29uZmlnLkFzc2lzdGFudE1vZGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLkFzc2lzdGFudE1vZGUgPSBjb25maWcuQXNzaXN0YW50TW9kZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGNvbmZpZy5kZWZhdWx0QXNzZXRzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hc3NldHMgPSBjb25maWcuZGVmYXVsdEFzc2V0cztcbiAgICAgICAgICAgICAgICBpZiAoY29uZmlnLmRlZmF1bHRBc3NldHMuQ29sb3JTZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5Db2xvclNldCA9IGNvbmZpZy5kZWZhdWx0QXNzZXRzLkNvbG9yU2V0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb25maWcuYXV0aCkge1xuICAgICAgICAgICAgICAgIHRoaXMuYXV0aGVudGljYXRpb24uc3Vic2NyaWJlKCh1c2VyOiBLb252ZXJzb1VzZXIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF1c2VyLmxhbmcgJiYgY29uZmlnLmxhbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXIubGFuZyA9IGNvbmZpZy5sYW5nO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9jYWxlID0gdXNlcj8ubGFuZztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYW5nLm5leHQodGhpcy5sb2NhbGUpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb25maWcuSW5wdXRQbGFjZUhvbGRlciAmJiBjb25maWcuSW5wdXRQbGFjZUhvbGRlclt0aGlzLmxvY2FsZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuUGxhY2VIb2xkZXIgPSBjb25maWcuSW5wdXRQbGFjZUhvbGRlclt0aGlzLmxvY2FsZV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbmZpZy5JbnB1dE51bWJlclBsYWNlSG9sZGVyICYmIGNvbmZpZy5JbnB1dE51bWJlclBsYWNlSG9sZGVyW3RoaXMubG9jYWxlXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5OdW1iZXJQbGFjZUhvbGRlciA9IGNvbmZpZy5JbnB1dE51bWJlclBsYWNlSG9sZGVyW3RoaXMubG9jYWxlXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoY29uZmlnLkN1c3RvbVdlbGNvbWUgJiYgY29uZmlnLkJvdEluaXRNZXNzYWdlLldlbGNvbWUgJiYgY29uZmlnLkJvdEluaXRNZXNzYWdlLldlbGNvbWVbdGhpcy5sb2NhbGVdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLldlbGNvbWUgPSBiYXJiZS5yZW5kZXIoY29uZmlnLkJvdEluaXRNZXNzYWdlLldlbGNvbWVbdGhpcy5sb2NhbGVdLCB1c2VyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodXNlcj8udG9rZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG9rZW4ubmV4dCh1c2VyPy50b2tlbik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHVzZXI/LmZpcnN0VmlzaXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmlyc3RWaXNpdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgdXNlci5maXJzdFZpc2l0O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbmZpZz8uQm90SW5pdE1lc3NhZ2U/LkZpcnN0VXNhZ2UgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvY2FsZSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZz8uQm90SW5pdE1lc3NhZ2U/LkZpcnN0VXNhZ2VbdGhpcy5sb2NhbGVdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maXJzdFVzYWdlU3RvcnkgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGhpc3Rvcnkgb2YgY29uZmlnLkJvdEluaXRNZXNzYWdlLkZpcnN0VXNhZ2VbdGhpcy5sb2NhbGVdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmlyc3RVc2FnZVN0b3J5LnB1c2goYmFyYmUucmVuZGVyKGhpc3RvcnksIHVzZXIpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy51c2VyID0gdXNlcjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWFkeVN0YXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY29uZmlnLmxhbmcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvY2FsZSA9IGNvbmZpZy5sYW5nO1xuICAgICAgICAgICAgICAgIHRoaXMubGFuZy5uZXh0KHRoaXMubG9jYWxlKTtcbiAgICAgICAgICAgICAgICBpZiAoY29uZmlnLklucHV0UGxhY2VIb2xkZXIgJiYgY29uZmlnLklucHV0UGxhY2VIb2xkZXJbdGhpcy5sb2NhbGVdKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuUGxhY2VIb2xkZXIgPSBjb25maWcuSW5wdXRQbGFjZUhvbGRlclt0aGlzLmxvY2FsZV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChjb25maWcuSW5wdXROdW1iZXJQbGFjZUhvbGRlciAmJiBjb25maWcuSW5wdXROdW1iZXJQbGFjZUhvbGRlclt0aGlzLmxvY2FsZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5OdW1iZXJQbGFjZUhvbGRlciA9IGNvbmZpZy5JbnB1dE51bWJlclBsYWNlSG9sZGVyW3RoaXMubG9jYWxlXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGNvbmZpZy5DdXN0b21XZWxjb21lICYmIGNvbmZpZy5Cb3RJbml0TWVzc2FnZS5XZWxjb21lICYmIGNvbmZpZy5Cb3RJbml0TWVzc2FnZS5XZWxjb21lW3RoaXMubG9jYWxlXSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLldlbGNvbWUgPSBjb25maWcuQm90SW5pdE1lc3NhZ2UuV2VsY29tZVt0aGlzLmxvY2FsZV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMudXNlciA9IHtcbiAgICAgICAgICAgICAgICAgICAgdXNlcklkOiB0aGlzLmd1aWQoKSxcbiAgICAgICAgICAgICAgICAgICAgbGFuZzogY29uZmlnLmxhbmdcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHRoaXMucmVhZHlTdGF0ZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY29uZmlnLnRva2VuKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50b2tlbi5uZXh0KGNvbmZpZy50b2tlbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKCdQbGVhc2UgcHJvdmlkZSBlbmRwb2ludCcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHF1ZXJ5XG4gICAgICogQHByaXZhdGVcbiAgICAgKiBwcmVwYXJlIHNldCBkYXRhIHRvIHB1c2ggdG8gYmFja2VuZCBzZXJ2ZXJcbiAgICAgKi9cbiAgICBwcml2YXRlIGJ1aWxkUXVlcnkocXVlcnk6IHN0cmluZyk6IEtvbnZlcnNvUXVlcnkge1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGNvbnN0IGN1c3RvbTogYW55ID0gdGhpcy5jdXN0b21EYXRhLmdldFZhbHVlKCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5jdXN0b20sXG4gICAgICAgICAgICAuLi50aGlzLnVzZXIsXG4gICAgICAgICAgICBxdWVyeTogcXVlcnkucmVwbGFjZSgvXFxzKy9nLCAnICcpLnRyaW0oKSxcbiAgICAgICAgICAgIGlzU2VuZGluZzogdHJ1ZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwcml2YXRlXG4gICAgICogR2VuZXJhdGUgUmFuZG9tIHVuaXEgSWQgZm9yIEtvbnZlcnNvIEluc3RhbmNlXG4gICAgICovXG4gICAgcHJpdmF0ZSBndWlkKCkge1xuICAgICAgICBsZXQgcmFuZG9tID0gKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoKDEgKyBNYXRoLnJhbmRvbSgpKSAqIDB4MTAwMDApXG4gICAgICAgICAgICAgICAgLnRvU3RyaW5nKDE2KVxuICAgICAgICAgICAgICAgIC5zdWJzdHJpbmcoMSk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiByYW5kb20oKSArIHJhbmRvbSgpICsgJy0nICsgcmFuZG9tKCkgKyAnLScgKyByYW5kb20oKSArICctJyArIHJhbmRvbSgpICsgJy0nICsgcmFuZG9tKCkgKyByYW5kb20oKSArIHJhbmRvbSgpO1xuICAgIH1cbn1cbiJdfQ==