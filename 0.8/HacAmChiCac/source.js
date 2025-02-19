(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Sources = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BadgeColor = void 0;
var BadgeColor;
(function (BadgeColor) {
    BadgeColor["BLUE"] = "default";
    BadgeColor["GREEN"] = "success";
    BadgeColor["GREY"] = "info";
    BadgeColor["YELLOW"] = "warning";
    BadgeColor["RED"] = "danger";
})(BadgeColor = exports.BadgeColor || (exports.BadgeColor = {}));

},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeSectionType = void 0;
var HomeSectionType;
(function (HomeSectionType) {
    HomeSectionType["singleRowNormal"] = "singleRowNormal";
    HomeSectionType["singleRowLarge"] = "singleRowLarge";
    HomeSectionType["doubleRow"] = "doubleRow";
    HomeSectionType["featured"] = "featured";
})(HomeSectionType = exports.HomeSectionType || (exports.HomeSectionType = {}));

},{}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],5:[function(require,module,exports){
"use strict";
/**
 * Request objects hold information for a particular source (see sources for example)
 * This allows us to to use a generic api to make the calls against any source
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.urlEncodeObject = exports.convertTime = exports.Source = void 0;
/**
* @deprecated Use {@link PaperbackExtensionBase}
*/
class Source {
    constructor(cheerio) {
        this.cheerio = cheerio;
    }
    /**
     * @deprecated use {@link Source.getSearchResults getSearchResults} instead
     */
    searchRequest(query, metadata) {
        return this.getSearchResults(query, metadata);
    }
    /**
     * @deprecated use {@link Source.getSearchTags} instead
     */
    async getTags() {
        // @ts-ignore
        return this.getSearchTags?.();
    }
}
exports.Source = Source;
// Many sites use '[x] time ago' - Figured it would be good to handle these cases in general
function convertTime(timeAgo) {
    let time;
    let trimmed = Number((/\d*/.exec(timeAgo) ?? [])[0]);
    trimmed = (trimmed == 0 && timeAgo.includes('a')) ? 1 : trimmed;
    if (timeAgo.includes('minutes')) {
        time = new Date(Date.now() - trimmed * 60000);
    }
    else if (timeAgo.includes('hours')) {
        time = new Date(Date.now() - trimmed * 3600000);
    }
    else if (timeAgo.includes('days')) {
        time = new Date(Date.now() - trimmed * 86400000);
    }
    else if (timeAgo.includes('year') || timeAgo.includes('years')) {
        time = new Date(Date.now() - trimmed * 31556952000);
    }
    else {
        time = new Date(Date.now());
    }
    return time;
}
exports.convertTime = convertTime;
/**
 * When a function requires a POST body, it always should be defined as a JsonObject
 * and then passed through this function to ensure that it's encoded properly.
 * @param obj
 */
function urlEncodeObject(obj) {
    let ret = {};
    for (const entry of Object.entries(obj)) {
        ret[encodeURIComponent(entry[0])] = encodeURIComponent(entry[1]);
    }
    return ret;
}
exports.urlEncodeObject = urlEncodeObject;

},{}],6:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentRating = exports.SourceIntents = void 0;
var SourceIntents;
(function (SourceIntents) {
    SourceIntents[SourceIntents["MANGA_CHAPTERS"] = 1] = "MANGA_CHAPTERS";
    SourceIntents[SourceIntents["MANGA_TRACKING"] = 2] = "MANGA_TRACKING";
    SourceIntents[SourceIntents["HOMEPAGE_SECTIONS"] = 4] = "HOMEPAGE_SECTIONS";
    SourceIntents[SourceIntents["COLLECTION_MANAGEMENT"] = 8] = "COLLECTION_MANAGEMENT";
    SourceIntents[SourceIntents["CLOUDFLARE_BYPASS_REQUIRED"] = 16] = "CLOUDFLARE_BYPASS_REQUIRED";
    SourceIntents[SourceIntents["SETTINGS_UI"] = 32] = "SETTINGS_UI";
})(SourceIntents = exports.SourceIntents || (exports.SourceIntents = {}));
/**
 * A content rating to be attributed to each source.
 */
var ContentRating;
(function (ContentRating) {
    ContentRating["EVERYONE"] = "EVERYONE";
    ContentRating["MATURE"] = "MATURE";
    ContentRating["ADULT"] = "ADULT";
})(ContentRating = exports.ContentRating || (exports.ContentRating = {}));

},{}],7:[function(require,module,exports){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./Source"), exports);
__exportStar(require("./ByteArray"), exports);
__exportStar(require("./Badge"), exports);
__exportStar(require("./interfaces"), exports);
__exportStar(require("./SourceInfo"), exports);
__exportStar(require("./HomeSectionType"), exports);
__exportStar(require("./PaperbackExtensionBase"), exports);

},{"./Badge":1,"./ByteArray":2,"./HomeSectionType":3,"./PaperbackExtensionBase":4,"./Source":5,"./SourceInfo":6,"./interfaces":15}],8:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],9:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],10:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],11:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],12:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],13:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],14:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],15:[function(require,module,exports){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./ChapterProviding"), exports);
__exportStar(require("./CloudflareBypassRequestProviding"), exports);
__exportStar(require("./HomePageSectionsProviding"), exports);
__exportStar(require("./MangaProgressProviding"), exports);
__exportStar(require("./MangaProviding"), exports);
__exportStar(require("./RequestManagerProviding"), exports);
__exportStar(require("./SearchResultsProviding"), exports);

},{"./ChapterProviding":8,"./CloudflareBypassRequestProviding":9,"./HomePageSectionsProviding":10,"./MangaProgressProviding":11,"./MangaProviding":12,"./RequestManagerProviding":13,"./SearchResultsProviding":14}],16:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],17:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],18:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],19:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],20:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],21:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],22:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],23:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],24:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],25:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],26:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],27:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],28:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],29:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],30:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],31:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],32:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],33:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],34:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],35:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],36:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],37:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],38:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],39:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],40:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],41:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],42:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],43:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],44:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],45:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],46:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],47:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],48:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],49:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],50:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],51:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],52:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],53:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],54:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],55:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],56:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],57:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],58:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],59:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],60:[function(require,module,exports){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./DynamicUI/Exports/DUIBinding"), exports);
__exportStar(require("./DynamicUI/Exports/DUIForm"), exports);
__exportStar(require("./DynamicUI/Exports/DUIFormRow"), exports);
__exportStar(require("./DynamicUI/Exports/DUISection"), exports);
__exportStar(require("./DynamicUI/Rows/Exports/DUIButton"), exports);
__exportStar(require("./DynamicUI/Rows/Exports/DUIHeader"), exports);
__exportStar(require("./DynamicUI/Rows/Exports/DUIInputField"), exports);
__exportStar(require("./DynamicUI/Rows/Exports/DUILabel"), exports);
__exportStar(require("./DynamicUI/Rows/Exports/DUILink"), exports);
__exportStar(require("./DynamicUI/Rows/Exports/DUIMultilineLabel"), exports);
__exportStar(require("./DynamicUI/Rows/Exports/DUINavigationButton"), exports);
__exportStar(require("./DynamicUI/Rows/Exports/DUIOAuthButton"), exports);
__exportStar(require("./DynamicUI/Rows/Exports/DUISecureInputField"), exports);
__exportStar(require("./DynamicUI/Rows/Exports/DUISelect"), exports);
__exportStar(require("./DynamicUI/Rows/Exports/DUIStepper"), exports);
__exportStar(require("./DynamicUI/Rows/Exports/DUISwitch"), exports);
__exportStar(require("./Exports/ChapterDetails"), exports);
__exportStar(require("./Exports/Chapter"), exports);
__exportStar(require("./Exports/Cookie"), exports);
__exportStar(require("./Exports/HomeSection"), exports);
__exportStar(require("./Exports/IconText"), exports);
__exportStar(require("./Exports/MangaInfo"), exports);
__exportStar(require("./Exports/MangaProgress"), exports);
__exportStar(require("./Exports/PartialSourceManga"), exports);
__exportStar(require("./Exports/MangaUpdates"), exports);
__exportStar(require("./Exports/PBCanvas"), exports);
__exportStar(require("./Exports/PBImage"), exports);
__exportStar(require("./Exports/PagedResults"), exports);
__exportStar(require("./Exports/RawData"), exports);
__exportStar(require("./Exports/Request"), exports);
__exportStar(require("./Exports/SourceInterceptor"), exports);
__exportStar(require("./Exports/RequestManager"), exports);
__exportStar(require("./Exports/Response"), exports);
__exportStar(require("./Exports/SearchField"), exports);
__exportStar(require("./Exports/SearchRequest"), exports);
__exportStar(require("./Exports/SourceCookieStore"), exports);
__exportStar(require("./Exports/SourceManga"), exports);
__exportStar(require("./Exports/SecureStateManager"), exports);
__exportStar(require("./Exports/SourceStateManager"), exports);
__exportStar(require("./Exports/Tag"), exports);
__exportStar(require("./Exports/TagSection"), exports);
__exportStar(require("./Exports/TrackedMangaChapterReadAction"), exports);
__exportStar(require("./Exports/TrackerActionQueue"), exports);

},{"./DynamicUI/Exports/DUIBinding":17,"./DynamicUI/Exports/DUIForm":18,"./DynamicUI/Exports/DUIFormRow":19,"./DynamicUI/Exports/DUISection":20,"./DynamicUI/Rows/Exports/DUIButton":21,"./DynamicUI/Rows/Exports/DUIHeader":22,"./DynamicUI/Rows/Exports/DUIInputField":23,"./DynamicUI/Rows/Exports/DUILabel":24,"./DynamicUI/Rows/Exports/DUILink":25,"./DynamicUI/Rows/Exports/DUIMultilineLabel":26,"./DynamicUI/Rows/Exports/DUINavigationButton":27,"./DynamicUI/Rows/Exports/DUIOAuthButton":28,"./DynamicUI/Rows/Exports/DUISecureInputField":29,"./DynamicUI/Rows/Exports/DUISelect":30,"./DynamicUI/Rows/Exports/DUIStepper":31,"./DynamicUI/Rows/Exports/DUISwitch":32,"./Exports/Chapter":33,"./Exports/ChapterDetails":34,"./Exports/Cookie":35,"./Exports/HomeSection":36,"./Exports/IconText":37,"./Exports/MangaInfo":38,"./Exports/MangaProgress":39,"./Exports/MangaUpdates":40,"./Exports/PBCanvas":41,"./Exports/PBImage":42,"./Exports/PagedResults":43,"./Exports/PartialSourceManga":44,"./Exports/RawData":45,"./Exports/Request":46,"./Exports/RequestManager":47,"./Exports/Response":48,"./Exports/SearchField":49,"./Exports/SearchRequest":50,"./Exports/SecureStateManager":51,"./Exports/SourceCookieStore":52,"./Exports/SourceInterceptor":53,"./Exports/SourceManga":54,"./Exports/SourceStateManager":55,"./Exports/Tag":56,"./Exports/TagSection":57,"./Exports/TrackedMangaChapterReadAction":58,"./Exports/TrackerActionQueue":59}],61:[function(require,module,exports){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./generated/_exports"), exports);
__exportStar(require("./base/index"), exports);
__exportStar(require("./compat/DyamicUI"), exports);

},{"./base/index":7,"./compat/DyamicUI":16,"./generated/_exports":60}],62:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HacAmChiCac = exports.HacAmChiCacInfo = void 0;
const types_1 = require("@paperback/types");
const HacAmChiCacParser_1 = require("./HacAmChiCacParser");
const DOMAIN = "https://hacamchicac.com/";
exports.HacAmChiCacInfo = {
    version: "1.0.0",
    name: "HacAmChiCac",
    icon: "icon.png",
    author: "neihc1002",
    authorWebsite: "https://github.com/neich1002",
    description: "Extension that pulls manga from HacAmChiCac",
    contentRating: types_1.ContentRating.MATURE,
    websiteBaseURL: DOMAIN,
    sourceTags: [
        {
            text: "Recommended",
            type: types_1.BadgeColor.BLUE,
        },
    ],
    intents: types_1.SourceIntents.MANGA_CHAPTERS |
        types_1.SourceIntents.HOMEPAGE_SECTIONS |
        types_1.SourceIntents.CLOUDFLARE_BYPASS_REQUIRED
};
class HacAmChiCac {
    constructor(cheerio) {
        this.cheerio = cheerio;
        this.parser = new HacAmChiCacParser_1.Parser();
        this.stateManager = App.createSourceStateManager();
        this.requestManager = App.createRequestManager({
            requestsPerSecond: 4,
            requestTimeout: 20000,
            interceptor: {
                interceptRequest: async (request) => {
                    request.headers = {
                        ...(request.headers ?? {}),
                        ...{
                            referer: DOMAIN,
                            "user-agent": await this.requestManager.getDefaultUserAgent(),
                        },
                    };
                    return request;
                },
                interceptResponse: async (response) => {
                    return response;
                },
            },
        });
    }
    async getCloudflareBypassRequestAsync() {
        return App.createRequest({
            url: DOMAIN,
            method: "GET",
            headers: {
                referer: `${DOMAIN}/`,
                origin: `${DOMAIN}/`,
                "user-agent": await this.requestManager.getDefaultUserAgent(),
            },
        });
    }
    async DOMHTML(url) {
        const request = App.createRequest({
            url: url,
            method: "GET",
        });
        const resquest = await this.requestManager.schedule(request, 1);
        return this.cheerio.load(resquest.data);
    }
    async getDataApi(url) {
        const request = App.createRequest({
            url: url,
            method: "GET",
        });
        const resquest = await this.requestManager.schedule(request, 1);
        return resquest.data;
    }
    splitStringAndNumber(input) {
        const lastDash = input.lastIndexOf("-"); // Tìm vị trí dấu '-' cuối cùng
        if (lastDash === -1)
            return { stringPart: input, numberPart: null }; // Không có số cuối
        const stringPart = input.substring(0, lastDash); // Lấy phần trước dấu '-'
        const numberPart = input.substring(lastDash + 1); // Lấy phần sau dấu '-'
        return { stringPart, numberPart };
    }
    async getMangaDetails(mangaId) {
        const $ = await this.DOMHTML(`${DOMAIN}${mangaId}`);
        return this.parser.parseMangaDetails($, mangaId);
    }
    async getChapters(mangaId) {
        const $ = await this.DOMHTML(`${DOMAIN}${mangaId}`);
        const chapter = App.createChapter({
            id: mangaId,
            chapNum: 1,
            name: mangaId,
            langCode: "🇻🇳",
        });
        return [chapter];
    }
    async getChapterDetails(mangaId, chapterId) {
        const $ = await this.DOMHTML(`${DOMAIN}${chapterId}`);
        const pages = this.parser.parseChapterDetails($);
        return App.createChapterDetails({
            id: chapterId,
            mangaId: mangaId,
            pages: pages,
        });
    }
    async getSearchResults(query, metadata) {
        let page = metadata?.page ?? 1;
        const url = `${DOMAIN}page/${page}`;
        const search_query = !query.title ? "" : `?s=${query.title}`;
        const param = `${search_query}`;
        const $ = await this.DOMHTML(`${url}${encodeURI(param)}`);
        const tiles = this.parser.parseNewUpdatedSection($);
        //throw new Error(tiles.length.toString())
        metadata = { page: page + 1 };
        return App.createPagedResults({
            results: tiles,
            metadata,
        });
    }
    async getHomePageSections(sectionCallback) {
        const sections = [
            App.createHomeSection({
                id: "featured",
                title: "TRUYỆN HOT",
                containsMoreItems: true,
                type: types_1.HomeSectionType.singleRowNormal,
            }),
            //   App.createHomeSection({
            //     id: "full",
            //     title: "TRUYỆN MỚI CẬP NHẬT",
            //     containsMoreItems: true,
            //     type: HomeSectionType.singleRowNormal,
            //   }),
        ];
        for (const section of sections) {
            switch (section.id) {
                case "featured":
                    // $ = await this.DOMHTML(`${DOMAIN}truyen-tranh-hot`);
                    //   section.items = this.parser
                    //     .parseNewUpdatedSection($, DOMAIN)
                    //     .slice(0, 5);
                    section.items = [];
                    break;
                // case "full":
                //   $ = await this.DOMHTML(`${DOMAIN}`);
                //   section.items = this.parser.parseNewUpdatedSection($, DOMAIN).slice(0.5);
                //   break;
            }
            sectionCallback(section);
        }
        //throw new Error("No items found");
    }
    async getViewMoreItems(homepageSectionId, metadata) {
        let page = metadata?.page ?? 1;
        let url;
        let param = "";
        switch (homepageSectionId) {
            case "full":
                url = `${DOMAIN}`;
                param = `?page=${page}`;
                break;
            case "featured":
                url = `${DOMAIN}truyen-tranh-hot`;
                param = `?page=${page}`;
                break;
            default:
                throw new Error("Requested to getViewMoreItems for a section ID which doesn't exist");
        }
        const $ = await this.DOMHTML(`${url}${encodeURI(param)}`);
        let manga = this.parser.parseViewMoreItems($, homepageSectionId, DOMAIN);
        metadata = { page: page + 1 };
        return App.createPagedResults({
            results: manga,
            metadata,
        });
    }
    getMangaShareUrl(mangaId) {
        return `${DOMAIN}truyen-tranh/${mangaId}`;
    }
}
exports.HacAmChiCac = HacAmChiCac;

},{"./HacAmChiCacParser":63,"@paperback/types":61}],63:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Parser = void 0;
const PROXY_URL = "https://image.duongtran845.workers.dev";
class Parser {
    convertTime(timeAgo) {
        let time;
        let trimmed = Number((/\d*/.exec(timeAgo) ?? [])[0]);
        trimmed = trimmed == 0 && timeAgo.includes("a") ? 1 : trimmed;
        if (timeAgo.includes("giây") || timeAgo.includes("secs")) {
            time = new Date(Date.now() - trimmed * 1000); // => mili giây (1000 ms = 1s)
        }
        else if (timeAgo.includes("phút")) {
            time = new Date(Date.now() - trimmed * 60000);
        }
        else if (timeAgo.includes("giờ")) {
            time = new Date(Date.now() - trimmed * 3600000);
        }
        else if (timeAgo.includes("ngày")) {
            time = new Date(Date.now() - trimmed * 86400000);
        }
        else if (timeAgo.includes("tuần")) {
            time = new Date(Date.now() - trimmed * 86400000 * 7);
        }
        else if (timeAgo.includes("tháng")) {
            time = new Date(Date.now() - trimmed * 86400000 * 7 * 4);
        }
        else if (timeAgo.includes("năm")) {
            time = new Date(Date.now() - trimmed * 31556952000);
        }
        else {
            if (timeAgo.includes(":")) {
                let split = timeAgo.split(" ");
                let H = split[0]; //vd => 21:08
                let D = split[1]; //vd => 25/08
                let fixD = D?.split("/");
                let finalD = fixD?.[1] + "/" + fixD?.[0] + "/" + new Date().getFullYear();
                time = new Date(finalD + " " + H);
            }
            else {
                let split = timeAgo.split("-"); //vd => 05/12/18
                time = new Date(split[1] + "/" + split[0] + "/" + split[2]);
            }
        }
        return time;
    }
    fullImageLink(link, referer) {
        return `${PROXY_URL}?url=${encodeURIComponent(link)}&referer=${encodeURIComponent(referer)}`;
    }
    parseFeaturedSection($, domain = "") {
        const featuredItems = [];
        $("div.item", "div.altcontent1").each((_, manga) => {
            const title = $(".slide-caption > h3 > a", manga).text();
            const id = $("a", manga).attr("href")?.split("/").pop();
            const image = $(".lazy.image-thumb", manga).attr("data-retries");
            const fullImage = this.fullImageLink(image ?? "", domain);
            const subtitle = $(".slide-caption > a", manga).text().trim() +
                " - " +
                $(".slide-caption > .time", manga).text().trim();
            if (!id || !title)
                return;
            featuredItems.push(App.createPartialSourceManga({
                mangaId: String(id),
                image: fullImage,
                title: title,
                subtitle: subtitle,
            }));
        });
        return featuredItems;
    }
    parseNewUpdatedSection($) {
        const featuredItems = [];
        $(".archive-grid-post").each((_, manga) => {
            const title = $(".aft-post-image-link", manga).text();
            const url = $(".aft-post-image-link", manga).attr("href") || "";
            const parts = url.split("/");
            const id = parts[parts.length - 2];
            const image = $(".read-img > img", manga).attr("src");
            if (!id || !title)
                return;
            featuredItems.push(App.createPartialSourceManga({
                mangaId: String(id),
                image: String(image),
                title: title,
            }));
        });
        return featuredItems;
    }
    parseChapterDetails($) {
        const pages = [];
        $(".inner-entry-content img").each((_, obj) => {
            if (!obj.attribs["data-src"])
                return;
            const link = obj.attribs["data-src"];
            pages.push(link);
        });
        return pages;
    }
    parseMangaDetails($, mangaId) {
        const titles = [$(".entry-title").text().trim()];
        // const author = $("ul.list-info > li.author > p.col-xs-8").text();
        // const artist = $("ul.list-info > li.author > p.col-xs-8").text();
        // const image = $(".detail-info .col-image > img").attr("src");
        // const status = $("ul.list-info > li.status > p.col-xs-8").text();
        // const rating = parseFloat($('span[itemprop="ratingValue"]').text());
        // const fullImage = this.fullImageLink(image ?? "", domain);
        return App.createSourceManga({
            id: mangaId,
            mangaInfo: App.createMangaInfo({
                titles,
                image: "",
                desc: "",
                status: "",
            }),
        });
    }
    parseChapterList($) {
        const chapters = [];
        $("div.list-chapter > nav > ul > li.row:not(.heading)").each((_, obj) => {
            const id = String($("div.chapter a", obj).attr("href"))
                .split("/")
                .slice(4)
                .join("/");
            const time = $("div.col-xs-4", obj).text();
            const group = $("div.col-xs-3", obj).text();
            let name = $("div.chapter a", obj).text();
            const chapNum = $("div.chapter a", obj).text().split(" ")[1];
            name = name.includes(":") ? String(name.split(":")[1]).trim() : "";
            const timeFinal = this.convertTime(time);
            chapters.push(App.createChapter({
                id: id,
                chapNum: parseFloat(String(chapNum)),
                name: name,
                langCode: "🇻🇳",
                time: timeFinal,
                group: `${group} lượt xem`,
            }));
        });
        if (chapters.length == 0) {
            throw new Error("No chapters found");
        }
        return chapters;
    }
    parseViewMoreItems($, homepageSectionId, domain = "") {
        switch (homepageSectionId) {
            case "full":
            case "featured":
                return this.parseNewUpdatedSection($, domain);
            // case "full":
            //   return this.parseSearchResults($);
            default:
                throw new Error(`Invalid homepageSectionId: ${homepageSectionId}`);
        }
    }
}
exports.Parser = Parser;

},{}]},{},[62])(62)
});
