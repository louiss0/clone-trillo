import * as DOMSelectors from "./ts/utils/selector";

// ! Im selecting by id
const app = DOMSelectors.selectElementByClassOrId("#app")

if (app) {
    app.textContent = "Hello World"
}

