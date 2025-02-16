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
exports.TruyenQQ = exports.isLastPage = exports.TruyenQQInfo = void 0;
const types_1 = require("@paperback/types");
const TruyenQQParser_1 = require("./TruyenQQParser");
const DOMAIN = "https://truyenqqto.com/";
exports.TruyenQQInfo = {
    version: "1.0.0",
    name: "TruyenQQ",
    icon: "icon.png",
    author: "neihc1002",
    authorWebsite: "https://github.com/neich1002",
    description: "Extension that pulls manga from TruyenQQ",
    contentRating: types_1.ContentRating.MATURE,
    websiteBaseURL: DOMAIN,
    sourceTags: [
        {
            text: "Recommended",
            type: types_1.BadgeColor.BLUE,
        },
    ],
    intents: types_1.SourceIntents.MANGA_CHAPTERS | types_1.SourceIntents.HOMEPAGE_SECTIONS,
};
const isLastPage = ($) => {
    return $(".page_redirect a:contains('›')").length > 0;
};
exports.isLastPage = isLastPage;
class TruyenQQ {
    constructor(cheerio) {
        this.cheerio = cheerio;
        this.parser = new TruyenQQParser_1.Parser();
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
    async DOMHTML(url) {
        const request = App.createRequest({
            url: url,
            method: "GET",
        });
        const resquest = await this.requestManager.schedule(request, 1);
        return this.cheerio.load(resquest.data);
    }
    async getMangaDetails(mangaId) {
        const $ = await this.DOMHTML(`${DOMAIN}truyen-tranh/${mangaId}`);
        return this.parser.parseMangaDetails($, mangaId);
    }
    async getChapters(mangaId) {
        const $ = await this.DOMHTML(`${DOMAIN}truyen-tranh/${mangaId}`);
        return this.parser.parseChapterList($);
    }
    async getChapterDetails(mangaId, chapterId) {
        const $ = await this.DOMHTML(`${DOMAIN}truyen-tranh/${chapterId}`);
        const pages = this.parser.parseChapterDetails($);
        return App.createChapterDetails({
            id: chapterId,
            mangaId: mangaId,
            pages: pages,
        });
    }
    async getSearchResults(query, metadata) {
        let page = metadata?.page ?? 1;
        // const search = {
        //   cate: "",
        //   status: "2",
        //   sort: "1",
        // };
        // const tags = query.includedTags?.map(tag => tag.id) ?? [];
        // for (const value of tags) {
        //     const [key, val] = value.split('.');
        //     switch (key) {
        //         case 'cate':
        //             search.cate = String(val);
        //             break;
        //         case 'status':
        //             search.status = String(val);
        //             break;
        //         case 'sort':
        //             search.sort = String(val);
        //             break;
        //     }
        // }
        const url = `${DOMAIN}tim-kiem/trang-${page}.html`;
        const search_query = !query.title ? "?" : `?q=${query.title}`;
        const param = `${search_query}`;
        const $ = await this.DOMHTML(`${url}${encodeURI(param)}`);
        const tiles = this.parser.parseNewUpdatedSection($);
        metadata = (0, exports.isLastPage)($) ? undefined : { page: page + 1 };
        return App.createPagedResults({
            results: tiles,
            metadata,
        });
    }
    async getHomePageSections(sectionCallback) {
        console.log("DocTruyen3Q Running...");
        const sections = [
            App.createHomeSection({
                id: "featured",
                title: "TRUYỆN HAY",
                containsMoreItems: false,
                type: types_1.HomeSectionType.singleRowLarge,
            }),
            App.createHomeSection({
                id: "new_updated",
                title: "TRUYỆN MỚI CẬP NHẬT",
                containsMoreItems: true,
                type: types_1.HomeSectionType.singleRowNormal,
            }),
        ];
        const $ = await this.DOMHTML(DOMAIN);
        for (const section of sections) {
            switch (section.id) {
                case "featured":
                    section.items = this.parser.parseFeaturedSection($);
                    break;
                case "new_updated":
                    section.items = this.parser.parseNewUpdatedSection($);
                    break;
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
            case "viewest":
                url = `${DOMAIN}tim-truyen`;
                param = `?sort=2&page=${page}`;
                break;
            case "hot":
                url = `${DOMAIN}hot`;
                param = `?page=${page}`;
                break;
            case "new_updated":
                url = `${DOMAIN}truyen-moi-cap-nhat/trang-${page}.html`;
                break;
            case "full":
                url = `${DOMAIN}tim-truyen`;
                param = `?status=1&sort=2&page=${page}`;
                break;
            default:
                throw new Error("Requested to getViewMoreItems for a section ID which doesn't exist");
        }
        const $ = await this.DOMHTML(`${url}${encodeURI(param)}`);
        let manga = this.parser.parseViewMoreItems($, homepageSectionId);
        metadata = (0, exports.isLastPage)($) ? undefined : { page: page + 1 };
        return App.createPagedResults({
            results: manga,
            metadata,
        });
    }
    getMangaShareUrl(mangaId) {
        return `${DOMAIN}truyen-tranh/${mangaId}`;
    }
}
exports.TruyenQQ = TruyenQQ;

},{"./TruyenQQParser":63,"@paperback/types":61}],63:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Parser = void 0;
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
    parseFeaturedSection($) {
        const featuredItems = [];
        $("#div_suggest .list_grid > li").each((_, obj) => {
            const title = $(".book_name > h3 > a", obj).text().trim();
            let image = $("a > img", obj).attr("src") ?? $("a > img", obj).attr("data-src");
            image = !image ? "https://i.imgur.com/GYUxEX8.png" : image;
            const mangaId = String($(".book_avatar > a", obj).attr("href")?.split("/")?.slice(4)?.join("/"));
            const subtitle = $(".detail-slide > a", obj).text().trim();
            if (!mangaId || !title)
                return;
            featuredItems.push(App.createPartialSourceManga({
                mangaId,
                image,
                title,
                subtitle,
            }));
        });
        return featuredItems;
    }
    parseNewUpdatedSection($) {
        const featuredItems = [];
        $("#main_homepage li").each((_, obj) => {
            const title = $(".book_name > h3 > a", obj).text().trim();
            let image = $("a > img", obj).attr("src") ?? $("a > img", obj).attr("data-src");
            image = !image ? "https://i.imgur.com/GYUxEX8.png" : image;
            const mangaId = String($(".book_avatar a", obj).attr("href")?.split("/").slice(2).join("/"));
            const subtitle = $(".detail-slide > a", obj).text().trim();
            if (!mangaId || !title)
                return;
            featuredItems.push(App.createPartialSourceManga({
                mangaId,
                image,
                title,
                subtitle,
            }));
        });
        return featuredItems;
    }
    parseChapterDetails($) {
        const pages = [];
        $(".chapter_content img").each((_, obj) => {
            const link = $(obj).attr("src") ?? $(obj).attr("data-src");
            pages.push(String(link));
        });
        return pages;
    }
    parseMangaDetails($, mangaId) {
        const tags = [];
        // $('.info-detail-comic > .category > .detail-info > a').each((_: any, obj: any) => {
        //     const label = $(obj).text().trim();
        //     const id = $(obj).attr('href')?.split('/').pop() ?? label;
        //     tags.push(App.createTag({ label, id }));
        // })
        const titles = [$(".title-manga").text().trim()];
        const image = $(".book_info .book_avatar img").attr("src") ?? "";
        const desc = $(".detail-content > p").text();
        const status = $(".list-info .status > p:nth-child(2)").text();
        const rating = 0;
        return App.createSourceManga({
            id: mangaId,
            mangaInfo: App.createMangaInfo({
                titles,
                image,
                desc,
                status,
                tags: [App.createTagSection({ id: "0", label: "genres", tags: tags })],
                rating,
            }),
        });
    }
    parseChapterList($) {
        const chapters = [];
        $(".works-chapter-list > .works-chapter-item").each((_, obj) => {
            const id = String($("div:nth-child(1) a", obj).attr("href")?.split("/").slice(2).join("/"));
            const chapNum = parseFloat(String($("div:nth-child(1) a", obj).text().trim().split(" ")[1]));
            const name = $("div:nth-child(1) a", obj).text().trim();
            // const time = this.convertTime($("div:nth-child(2)", obj).text().trim());$("div:nth-child(2)", obj).text().trim()
            const time = $(".time-chap", obj).text().trim();
            //const group = $("div:nth-child(3)", obj).text().trim();
            let parts = time.split("/"); // Tách ngày, tháng, năm
            let dateObj = new Date(Number(parts?.[2]), Number(parts?.[1]) - 1, Number(parts?.[0]));
            chapters.push(App.createChapter({
                id,
                chapNum,
                name,
                langCode: "🇻🇳",
                time: dateObj,
                //group: `${group} lượt xem`,
            }));
        });
        if (chapters.length == 0) {
            throw new Error("No chapters found");
        }
        return chapters;
    }
    parseViewMoreItems($, homepageSectionId) {
        switch (homepageSectionId) {
            case "new_updated":
                return this.parseNewUpdatedSection($);
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
