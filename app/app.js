//why is Prettier adding a comma after aboutModel but not aboutView??
import {
  homeModel,
  adoptModel,
  blogModel,
  aboutModel,
} from "./models/model.js";

import { homeView, adoptView, blogView, aboutView } from "./views/view.js";

const homeContent = homeView(homeModel);
const blogContent = blogView(blogModel);
const adoptContent = adoptView(adoptModel);
const aboutContent = aboutView(aboutModel);

const changeContent = (contentID) => $("#app").html(eval(contentID));
const setHome = () => $("#app").html(homeContent);

function initListeners() {
  $("nav a").click(function (e) {
    let aID = e.currentTarget.id;
    let contentID = aID + "Content";
    changeContent(contentID);
  });
}
$(document).ready(function () {
  initListeners();
  setHome();
});
