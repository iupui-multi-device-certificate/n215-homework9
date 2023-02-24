// import { homeContent } from "../app/views/home.js";
// import { aboutContent } from "../app/views/about.js";

import { blogModel } from "../app/models/blogModel.js";
import { blogView } from "../app/views/blogView.js";

import { adoptModel } from "../app/models/adoptModel.js";
import { adoptView } from "../app/views/adoptView.js";

const blogContent = blogView(blogModel);
const adoptContent = adoptView(adoptModel);

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
