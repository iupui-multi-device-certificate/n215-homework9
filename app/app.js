// import { homeContent } from "../app/views/home.js";
// import { adoptContent } from "../app/views/adopt.js";
// import { blogContent } from "../app/views/blog.js";
// import { aboutContent } from "../app/views/about.js";

import { blogModel } from "../app/models/blogModel.js";
import { blogView } from "../app/views/blogView.js";

const blogContent = blogView(blogModel);

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
