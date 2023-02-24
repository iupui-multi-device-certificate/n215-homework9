import { homeModel } from "../app/models/homeModel.js";
import { homeView } from "../app/views/homeView.js";

import { adoptModel } from "../app/models/adoptModel.js";
import { adoptView } from "../app/views/adoptView.js";

import { blogModel } from "../app/models/blogModel.js";
import { blogView } from "../app/views/blogView.js";

import { aboutModel } from "../app/models/aboutModel.js";
import { aboutView } from "../app/views/aboutView.js";

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
