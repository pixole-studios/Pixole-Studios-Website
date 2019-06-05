function openPage(pageName, iconid) {
  // Hide all elements with class="tabcontent" by default */
  var i, tabcontent, icons, activeIcon;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  // Show the specific tab content
  document.getElementById(pageName).style.display = "block";
  
  icons = document.getElementsByClassName("roundIcon");
  for (i = 0; i < icons.length; i++) {
    icons[i].setAttribute("style","box-shadow: 1px 1px 8px grey")
  }
  
  //Set style for active icon
  activeIcon = document.getElementById(iconid);
  activeIcon.setAttribute("style","box-shadow: 1px 1px 15px black")
}