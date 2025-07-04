"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function getcoviddata() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch("https://disease.sh/v3/covid-19/countries");
        const data = yield response.json();
        for (const cdata of data) {
            const newelem = document.createElement("div");
            newelem.classList = "c-box";
            newelem.innerHTML = "<div class='ttt'> <p class='sss'>" + cdata.country + "</p>" + "<p class='rrr'>Cases: " + cdata.cases + "</p> </div>";
            const celem = document.getElementById("list");
            celem === null || celem === void 0 ? void 0 : celem.appendChild(newelem);
        }
    });
}
getcoviddata();
