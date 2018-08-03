//Select DOM Items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuBranding = document.querySelector(".menu-branding");
const menuNav = document.querySelector(".menu-nav");
const navItems = document.querySelectorAll(".nav-item");
const modalBg = document.querySelector(".modal_bg");

//Set Intial State of the Menu
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItems.forEach(item => item.classList.add("show"));
    //Set Munu State
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach(item => item.classList.remove("show"));
    //Set Munu State
    showMenu = false;
  }
}

//Open project modal
$(".view_project").click(function() {
  let name = $(this).attr("data");
  $(".projectName").html(name);
  var details = getProjectDetails(name);
  var tech = details[1];
  var techList = "";
  for (let i = 0; i < tech.length; i++) {
    techList += "<li>" + tech[i] + "</li>";
  }

  $(".modal-body #leftModal").html(
    "<h2>Background</h2><p>" + details[0] + "</p>"
  );
  $(".modal-body #rightModal").html(
    "<h2>Technologies/Languages Used</h2><ul>" + techList + "</ul>"
  );
  $(".modal_bg").show();
  $(".modal").show("slow");
});

$(".close_modal").click(function() {
  $(".modal_bg").hide();
  $(".modal").hide("fast");
});

$(".modal_bg").click(function() {
  $(".modal_bg").hide();
  $(".modal").hide("fast");
});

function getProjectDetails(name) {
  var details = new Array();

  switch (name) {
    case "Nationwide Construction Group":
      details[0] =
        "The Nationwide Construction Group website was designed and developed to provide detailed information on the products and services they offer to the general public. While the target demographic is residential customers, the site was also developed for commercial users to interact with the site by means of vendor portals.";
      details[1] = new Array(
        "HTML5",
        "SCSS",
        "CSS",
        "Javascript",
        "JQuery",
        "PHP",
        "MySQL",
        "Bootstrap"
      );
      break;
  }

  return details;
}
