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

function initListeners() {
  $("nav a").click(function (e) {
    let aID = e.currentTarget.id;
    let contentID = aID + "Content";
    $("#app").html(eval(contentID));
  });
}
$(document).ready(function () {
  initListeners();
  // $("#app").html(homeContent);
});
