var bootLogo = document.getElementById('nintendo-logo-bootup');
var bootLogo2 = document.getElementById('switch-logo-bootup');
var clicksToFeaturedNews = 0;
var clicksToWakeUp = 0;
var lastSelectedIcon;
var lastSettingClicked = document.getElementById('support-health');
var lastSettingContent  = document.getElementById('support-container');
var currentScreenshot;
var toggleScreenshotfooter = true;
var lastSelectedEshopPage = document.getElementById('search-eshop-page');
var lastSelectedEshopText = document.getElementById("magnifying-glass-container");
var input = document.getElementById("code-search-bar");
var lastSelectedProfileSetting = document.getElementById("profile-page-navigation-main-text");
var lastSelectedProfileTab = document.getElementById("profile-page-profile-tab-container");
var lastFriendSuggestions = document.getElementById("phone-icon");
var lastSocialMediaOpened = document.getElementById("phone-container");
var LastImagesText;
var imagesText;
var selectedFeaturedNews, NotselectedFeaturedNews1, selectedFeaturedNews2, selectedFeaturedNewsPosition;
lastSelectedEshopText.style.animation = "selected 0.8s alternate ease-out infinite";
lastFriendSuggestions.style.borderBottom = ".35vw solid rgba(28, 255, 212, 1)";
lastSettingClicked.style.color = "#80ffd4";
lastSettingClicked.style.borderLeft = ".3vw solid #80ffd4";

bootLogo.addEventListener("animationend", () => {
    
    document.getElementById("switch-logo-bootup").style.animation = "fadeIn 2s";
  });

bootLogo2.addEventListener("animationend", () => {
    
    document.getElementById("wakeup-screen").style.display = "block";
    document.getElementById("bootup-background").style.display = "none";
  });

function expandWakeupWindow() {
  clicksToWakeUp++;
  if(clicksToWakeUp == 1)
  {
    document.getElementById("wakeup-screen").style.backgroundColor = "rgb(43, 43, 43)";
    document.getElementById("left-side-wakeup-screen").style.display = "none";
    document.getElementById("right-side-wakeup-screen").style.left = "0";
    document.getElementById("a-button").style.visibility = "hidden";
    document.getElementById("continue-text").style.visibility = "hidden";
    document.getElementById("MyClockDisplay").style.visibility = "hidden";
    document.getElementById("AMPM").style.visibility = "hidden";
    document.getElementById("wifi-icon").style.visibility = "hidden";
    document.getElementById("battery-icon").style.visibility = "hidden";
    document.getElementById("three-times-text").style.visibility = "visible";
    document.getElementById("white-circle-1").style.visibility = "visible";
    document.getElementById("white-circle-2").style.visibility = "visible";
    document.getElementById("white-circle-3").style.visibility = "visible";
    document.getElementById("b-button").style.visibility = "visible";
    document.getElementById("back-text").style.visibility = "visible";
  }
  else if (clicksToWakeUp == 2)
  {
    document.getElementById("white-circle-1").style.backgroundColor = "white";
  }
  else if (clicksToWakeUp == 3)
  {
    document.getElementById("white-circle-2").style.backgroundColor = "white";
  }
  else if (clicksToWakeUp == 4)
  {
    document.getElementById("white-circle-3").style.backgroundColor = "white";
    document.getElementById("wakeup-screen").style.display = "none";
    document.getElementById("home-background").style.display = "block";
  }
}

function shrinkWakeupWindow()
{
  clicksToWakeUp = 0;
  document.getElementById("white-circle-1").style.backgroundColor = "#3B3B3B";
  document.getElementById("white-circle-2").style.backgroundColor = "#3B3B3B";
  document.getElementById("white-circle-3").style.backgroundColor = "#3B3B3B";
  document.getElementById("left-side-wakeup-screen").style.display = "block";
  document.getElementById("right-side-wakeup-screen").style.left = "30%";
  document.getElementById("three-times-text").style.visibility = "hidden";
  document.getElementById("white-circle-1").style.visibility = "hidden";
  document.getElementById("white-circle-2").style.visibility = "hidden";
  document.getElementById("white-circle-3").style.visibility = "hidden";
  document.getElementById("a-button").style.visibility = "visible";
  document.getElementById("continue-text").style.visibility = "visible";
  document.getElementById("b-button").style.visibility = "hidden";
  document.getElementById("back-text").style.visibility = "hidden";
  document.getElementById("MyClockDisplay").style.visibility = "visible";
  document.getElementById("AMPM").style.visibility = "visible";
  document.getElementById("wifi-icon").style.visibility = "visible";
  document.getElementById("battery-icon").style.visibility = "visible";
}

function expandFeaturedNews(onClickFeaturedNews) {
  clicksToFeaturedNews++;
  selectedFeaturedNews = onClickFeaturedNews;
  document.getElementById("wakeup-screen").style.backgroundColor = "black";

  if(selectedFeaturedNews.id == "first-thumbnail") {
    NotselectedFeaturedNews1 = document.getElementById("second-thumbnail");
    NotselectedFeaturedNews2 = document.getElementById("third-thumbnail");
    selectedFeaturedNewsPosition = "20%";
  }

  if(selectedFeaturedNews.id == "second-thumbnail") {
    NotselectedFeaturedNews1 = document.getElementById("first-thumbnail");
    NotselectedFeaturedNews2 = document.getElementById("third-thumbnail");
    selectedFeaturedNewsPosition = "45%";
  }

  if(selectedFeaturedNews.id == "third-thumbnail") {
    NotselectedFeaturedNews1 = document.getElementById("first-thumbnail");
    NotselectedFeaturedNews2 = document.getElementById("second-thumbnail");
    selectedFeaturedNewsPosition = "70%";
  }

  if (clicksToFeaturedNews == 1) {
    document.getElementById("left-side-wakeup-b-button").onclick = function() {shrinkFeaturedNews()};
    document.getElementById("left-side-wakeup-back-text").onclick = function() {shrinkFeaturedNews()};
    document.getElementById("left-side-wakeup-screen").style.right = "0";
    document.getElementById("right-side-wakeup-screen").style.display = "none";
    NotselectedFeaturedNews1.style.visibility = "hidden";
    NotselectedFeaturedNews2.style.visibility = "hidden";
    document.getElementById("y-button-icon").style.visibility = "hidden";
    document.getElementById("featured-news-text").style.visibility = "hidden";
    document.getElementById("left-side-wakeup-three-times-text").style.visibility = "visible";
    document.getElementById("left-side-wakeup-white-circle-1").style.visibility = "visible";
    document.getElementById("left-side-wakeup-white-circle-2").style.visibility = "visible";
    document.getElementById("left-side-wakeup-white-circle-3").style.visibility = "visible";
    document.getElementById("left-side-wakeup-b-button").style.visibility = "visible";
    document.getElementById("left-side-wakeup-back-text").style.visibility = "visible";

    selectedFeaturedNews.style.top = "50%";
  }

  if (clicksToFeaturedNews == 2) {
    document.getElementById("left-side-wakeup-white-circle-1").style.backgroundColor = "white";
  }

  if (clicksToFeaturedNews == 3) {
    document.getElementById("left-side-wakeup-white-circle-2").style.backgroundColor = "white";
  }

  if (clicksToFeaturedNews == 4) {
    document.getElementById("left-side-wakeup-white-circle-3").style.backgroundColor = "white";
    document.getElementById("wakeup-screen").style.display = "none";
    document.getElementById("home-background").style.display = "block";
    openNews();
    shrinkAllFeaturedNews();
  }
}

function expandAllFeaturedNews() {
  clicksToFeaturedNews++;
  if (clicksToFeaturedNews == 1) {
    document.getElementById("left-side-wakeup-b-button").onclick = function() {shrinkAllFeaturedNews()};
    document.getElementById("left-side-wakeup-back-text").onclick = function() {shrinkAllFeaturedNews()};
    document.getElementById("left-side-wakeup-screen").style.right = "0";
    document.getElementById("right-side-wakeup-screen").style.display = "none";
    document.getElementById("right-side-wakeup-screen").style.left = "100%";
    document.getElementById("a-button").style.visibility = "hidden";
    document.getElementById("continue-text").style.visibility = "hidden";
    document.getElementById("MyClockDisplay").style.visibility = "hidden";
    document.getElementById("AMPM").style.visibility = "hidden";
    document.getElementById("wifi-icon").style.visibility = "hidden";
    document.getElementById("battery-icon").style.visibility = "hidden";
    document.getElementById("home-icon").style.visibility = "hidden";
    document.getElementById("y-button-icon").style.visibility = "hidden";
    document.getElementById("featured-news-text").style.visibility = "hidden";
    document.getElementById("left-side-wakeup-three-times-text").style.visibility = "visible";
    document.getElementById("left-side-wakeup-white-circle-1").style.visibility = "visible";
    document.getElementById("left-side-wakeup-white-circle-2").style.visibility = "visible";
    document.getElementById("left-side-wakeup-white-circle-3").style.visibility = "visible";
    document.getElementById("left-side-wakeup-b-button").style.visibility = "visible";
    document.getElementById("left-side-wakeup-back-text").style.visibility = "visible";

    document.getElementById("first-thumbnail").style.top = "50%";
    document.getElementById("first-thumbnail").style.left = "27.5%";
    document.getElementById("second-thumbnail").style.top = "50%";
    document.getElementById("third-thumbnail").style.top = "50%";
    document.getElementById("third-thumbnail").style.left = "72.5%";
  }
}

function shrinkAllFeaturedNews() {
  clicksToFeaturedNews = 0;
  document.getElementById("left-side-wakeup-screen").style.zIndex = "1";
  document.getElementById("right-side-wakeup-screen").style.display = "block";
  document.getElementById("left-side-wakeup-white-circle-1").style.backgroundColor = "#3B3B3B";
  document.getElementById("left-side-wakeup-white-circle-2").style.backgroundColor = "#3B3B3B";
  document.getElementById("left-side-wakeup-white-circle-3").style.backgroundColor = "#3B3B3B";
  document.getElementById("left-side-wakeup-screen").style.right = "70%";
  document.getElementById("right-side-wakeup-screen").style.left = "30%";
  document.getElementById("a-button").style.visibility = "visible";
  document.getElementById("continue-text").style.visibility = "visible";
  document.getElementById("MyClockDisplay").style.visibility = "visible";
  document.getElementById("AMPM").style.visibility = "visible";
  document.getElementById("wifi-icon").style.visibility = "visible";
  document.getElementById("battery-icon").style.visibility = "visible";
  document.getElementById("home-icon").style.visibility = "visible";
  document.getElementById("y-button-icon").style.visibility = "visible";
  document.getElementById("featured-news-text").style.visibility = "visible";
  document.getElementById("left-side-wakeup-three-times-text").style.visibility = "hidden";
  document.getElementById("left-side-wakeup-white-circle-1").style.visibility = "hidden";
  document.getElementById("left-side-wakeup-white-circle-2").style.visibility = "hidden";
  document.getElementById("left-side-wakeup-white-circle-3").style.visibility = "hidden";
  document.getElementById("left-side-wakeup-b-button").style.visibility = "hidden";
  document.getElementById("left-side-wakeup-back-text").style.visibility = "hidden";

  document.getElementById("first-thumbnail").style.top = "20%";
  document.getElementById("first-thumbnail").style.left = "50%";
  document.getElementById("second-thumbnail").style.top = "45%";
  document.getElementById("third-thumbnail").style.top = "70%";
  document.getElementById("third-thumbnail").style.left = "50%";

  document.getElementById("first-thumbnail").style.visibility = "visible";
  document.getElementById("second-thumbnail").style.visibility = "visible";
  document.getElementById("third-thumbnail").style.visibility = "visible";
}

function shrinkFeaturedNews() {
  clicksToFeaturedNews = 0;
  document.getElementById("left-side-wakeup-screen").style.zIndex = "1";
  document.getElementById("right-side-wakeup-screen").style.display = "block";
  document.getElementById("left-side-wakeup-white-circle-1").style.backgroundColor = "#3B3B3B";
  document.getElementById("left-side-wakeup-white-circle-2").style.backgroundColor = "#3B3B3B";
  document.getElementById("left-side-wakeup-white-circle-3").style.backgroundColor = "#3B3B3B";
  document.getElementById("left-side-wakeup-screen").style.right = "70%";
  document.getElementById("right-side-wakeup-screen").style.left = "30%";
  document.getElementById("a-button").style.visibility = "visible";
  document.getElementById("continue-text").style.visibility = "visible";
  document.getElementById("MyClockDisplay").style.visibility = "visible";
  document.getElementById("AMPM").style.visibility = "visible";
  document.getElementById("wifi-icon").style.visibility = "visible";
  document.getElementById("battery-icon").style.visibility = "visible";
  document.getElementById("home-icon").style.visibility = "visible";
  NotselectedFeaturedNews1.style.visibility = "visible";
  NotselectedFeaturedNews2.style.visibility = "visible";
  document.getElementById("y-button-icon").style.visibility = "visible";
  document.getElementById("featured-news-text").style.visibility = "visible";
  document.getElementById("left-side-wakeup-three-times-text").style.visibility = "hidden";
  document.getElementById("left-side-wakeup-white-circle-1").style.visibility = "hidden";
  document.getElementById("left-side-wakeup-white-circle-2").style.visibility = "hidden";
  document.getElementById("left-side-wakeup-white-circle-3").style.visibility = "hidden";
  document.getElementById("left-side-wakeup-b-button").style.visibility = "hidden";
  document.getElementById("left-side-wakeup-back-text").style.visibility = "hidden";

  selectedFeaturedNews.style.top = selectedFeaturedNewsPosition;
}

function showTime(){
  var date = new Date();
  var h = date.getHours(); // 0 - 23
  var m = date.getMinutes(); // 0 - 59
  var s = date.getSeconds(); // 0 - 59
  var session = "AM";
  
  if(h == 0){
      h = 12;
  }
  
  if(h > 12){
      h = h - 12;
      session = "PM";
  }
  
  h = (h < 10) ? "0" + h : h;
  m = (m < 10) ? "0" + m : m;
  s = (s < 10) ? "0" + s : s;
  
  var time = h + ":" + m;
  document.getElementById("MyClockDisplay").innerText = time;
  document.getElementById("AMPM").innerText = session;
  document.getElementById("MyClockDisplay").textContent = time;
  document.getElementById("MyClockDisplay-home").innerText = time;
  document.getElementById("AMPM-home").innerText = session;
  document.getElementById("MyClockDisplay-home").textContent = time;
  
  setTimeout(showTime, 1000);
  
}

function selectedIcon(icon) {
  imagesText = icon.alt;
  if (icon == lastSelectedIcon)
  {
    goIntoPage(icon);
  }
  else if (lastSelectedIcon == null)
  {
    icon.style.animation = "selected 0.8s alternate ease-out infinite";
    document.getElementById(imagesText).style.visibility = "visible";
    lastSelectedIcon = icon;
    LastImagesText = lastSelectedIcon.alt;
  }
  else
  {
    lastSelectedIcon.style.animation = null;
    lastSelectedIcon.style.border = "0.35vw solid rgb(43, 43, 43)";
    document.getElementById(LastImagesText).style.visibility = "hidden";
    icon.style.animation = "selected 0.8s alternate ease-out infinite";
    document.getElementById(imagesText).style.visibility = "visible";
    lastSelectedIcon = icon;
    LastImagesText = lastSelectedIcon.alt;
  }
}

function goIntoPage(page) {
  switch (page.id) {
    case "switch-online-icon":
      openNintendoSwitchOnline();
      break;
    case "news-icon":
      openNews();
      break;
    case "eShop-icon":
      openEshop();
      break;
    case "album-icon":
      openAlbum();
      break;
    case "controllers-icon":
      openControllersPage();
      break;
    case "settings-icon":
      openSettings();
      break;
    case "sleepmode-icon":
      sleepmodePage();
      break;
    case "mario-profile":
      openProfilePage();
      break;
    case "yoshi-profile":
      openProfilePageYoshi();
      break;
    case "fox-profile":
      openProfilePagefox();
      break;
  }
}

function openNintendoSwitchOnline() {
  document.getElementById("nintendo-switch-online-page-container").style.display = "block";
}

function closeNintendoSwitchOnline() {
  document.getElementById("nintendo-switch-online-page-container").style.display = "none";
}

function openProfilePage() {
  document.getElementById("profile-page-container").style.display = "block";
  document.getElementById("profile-page-mario-profile").src = "images/mario-profile.jpg";
  document.getElementById("profile-page-name").innerHTML = "Mario's Page";
  document.getElementById("profile-tab-mario-pic").src = "images/mario-profile.jpg";
  document.getElementById("mario-profile-tab-name").innerHTML = "Mario";
  document.getElementById("profile-pencil-icon").style.marginLeft = "41.8%";
  document.getElementById("user-settings-mario-text").innerHTML = "Mario";
  document.getElementById("user-settings-edit-icon-picture").src = "images/mario-profile.jpg";
  document.getElementById("user-settings-tab-text-3").innerHTML = "(itsAme@mario.com)";
  document.getElementById("profile-page-right-body-container").scrollTop = 0;
}

function openProfilePageYoshi() {
  document.getElementById("profile-page-container").style.display = "block";
  document.getElementById("profile-page-mario-profile").src = "images/yoshi-profile.png";
  document.getElementById("profile-page-name").innerHTML = "Yoshi's Page";
  document.getElementById("profile-tab-mario-pic").src = "images/yoshi-profile.png";
  document.getElementById("mario-profile-tab-name").innerHTML = "Yoshi";
  document.getElementById("profile-pencil-icon").style.marginLeft = "41.8%";
  document.getElementById("user-settings-mario-text").innerHTML = "Yoshi";
  document.getElementById("user-settings-edit-icon-picture").src = "images/yoshi-profile.png";
  document.getElementById("user-settings-tab-text-3").innerHTML = "(Yoshi@dino.com)";
  document.getElementById("profile-page-right-body-container").scrollTop = 0;
}

function openProfilePagefox() {
  document.getElementById("profile-page-container").style.display = "block";
  document.getElementById("profile-page-mario-profile").src = "images/fox-profile.png";
  document.getElementById("profile-page-name").innerHTML = "Fox McCloud's Page";
  document.getElementById("profile-tab-mario-pic").src = "images/fox-profile.png";
  document.getElementById("mario-profile-tab-name").innerHTML = "Fox McCloud";
  document.getElementById("profile-pencil-icon").style.marginLeft = "28%";
  document.getElementById("user-settings-mario-text").innerHTML = "Fox McCloud";
  document.getElementById("user-settings-edit-icon-picture").src = "images/fox-profile.png";
  document.getElementById("user-settings-tab-text-3").innerHTML = "(StarFox@arwing.com)";
  document.getElementById("profile-page-right-body-container").scrollTop = 0;
}

function closeProfilePage() {
  document.getElementById("profile-page-container").style.display = "none";
}

function selectedProfileNavigationText(text) {
  console.log(text);
  lastSelectedProfileSetting.style.color = "white";
  lastSelectedProfileSetting.style.borderLeft = ".3vw solid rgba(0, 0, 0, 0)";
  text.style.color = "#80ffd4";
  text.style.borderLeft = ".3vw solid #80ffd4";
  lastSelectedProfileSetting = text;
}

function selectedFriendSuggestions(FriendSuggestions) {
  lastFriendSuggestions.style.borderBottom = ".35vw solid rgba(28, 255, 212, 0)";
  FriendSuggestions.style.borderBottom = ".35vw solid rgba(28, 255, 212, 1)";
  lastFriendSuggestions = FriendSuggestions;
}

function openFacebookFriends() {
  lastSocialMediaOpened.style.display = "none";
  document.getElementById("facebook-container").style.display = "block";
  lastSocialMediaOpened = document.getElementById("facebook-container");
}

function openDSFriends() {
  lastSocialMediaOpened.style.display = "none";
  document.getElementById("ds-container").style.display = "block";
  lastSocialMediaOpened = document.getElementById("ds-container");
}

function openWiiUFriends() {
  lastSocialMediaOpened.style.display = "none";
  document.getElementById("wii-u-container").style.display = "block";
  lastSocialMediaOpened = document.getElementById("wii-u-container");
}

function openPhoneFriends() {
  lastSocialMediaOpened.style.display = "none";
  document.getElementById("phone-container").style.display = "block";
  lastSocialMediaOpened = document.getElementById("phone-container");
}

function openTwitterFriends() {
  lastSocialMediaOpened.style.display = "none";
  document.getElementById("twitter-container").style.display = "block";
  lastSocialMediaOpened = document.getElementById("twitter-container");
}

function openProfileTab() {
  lastSelectedProfileTab.style.display = "none";
  document.getElementById("profile-page-right-body-container").scrollTop = 0;
  document.getElementById("profile-page-profile-tab-container").style.display = "block";
  lastSelectedProfileTab = document.getElementById("profile-page-profile-tab-container");
}

function openFriendListTab() {
  lastSelectedProfileTab.style.display = "none";
  document.getElementById("profile-page-right-body-container").scrollTop = 0;
  document.getElementById("profile-page-friend-list-container").style.display = "block";
  lastSelectedProfileTab = document.getElementById("profile-page-friend-list-container");
}

function openTrendingTab() {
  lastSelectedProfileTab.style.display = "none";
  document.getElementById("profile-page-right-body-container").scrollTop = 0;
  document.getElementById("profile-page-trending-container").style.display = "block";
  lastSelectedProfileTab = document.getElementById("profile-page-trending-container");
}

function openOnlinePlayInvitesTab() {
  lastSelectedProfileTab.style.display = "none";
  document.getElementById("profile-page-right-body-container").scrollTop = 0;
  document.getElementById("profile-page-online-play-invites-container").style.display = "block";
  lastSelectedProfileTab = document.getElementById("profile-page-online-play-invites-container");
}

function openFriendSuggestionsTab() {
  lastSelectedProfileTab.style.display = "none";
  document.getElementById("profile-page-right-body-container").scrollTop = 0;
  document.getElementById("profile-page-friend-suggestions-container").style.display = "block";
  lastSelectedProfileTab = document.getElementById("profile-page-friend-suggestions-container");
}

function openAddFriendTab() {
  lastSelectedProfileTab.style.display = "none";
  document.getElementById("profile-page-right-body-container").scrollTop = 0;
  document.getElementById("profile-page-add-friend-container").style.display = "block";
  lastSelectedProfileTab = document.getElementById("profile-page-add-friend-container");
}

function openUserSettingsTab() {
  lastSelectedProfileTab.style.display = "none";
  document.getElementById("profile-page-right-body-container").scrollTop = 0;
  document.getElementById("profile-page-user-settings-container").style.display = "block";
  lastSelectedProfileTab = document.getElementById("profile-page-user-settings-container");
}

function openNews() {
  document.getElementById("news-page-container").style.display = "block";
  document.getElementById("news-page-body-container").scrollTop = 0;
}

function closeNewsPage() {
  document.getElementById("news-page-container").style.display = "none";
}

function openEshop() {
  document.getElementById("eshop-page-container").style.visibility = "visible";
  document.getElementById("strip-1").style.animation = "eShopstrips 0.5s linear forwards";
  document.getElementById("strip-2").style.animation = "eShopstrips 0.5s linear forwards 0.1s";
  document.getElementById("strip-3").style.animation = "eShopstrips 0.5s linear forwards 0.2s";
  document.getElementById("strip-4").style.animation = "eShopstrips 0.5s linear forwards 0.3s";
  document.getElementById("strip-5").style.animation = "eShopstrips 0.5s linear forwards 0.4s";
  document.getElementById("strip-6").style.animation = "eShopstrips 0.5s linear forwards 0.5s";
  document.getElementById("strip-7").style.animation = "eShopstrips 0.5s linear forwards 0.6s";
  document.getElementById("strip-8").style.animation = "eShopstrips 0.5s linear forwards 0.7s";
  document.getElementById("strip-9").style.animation = "eShopstrips 0.5s linear forwards 0.8s";
  document.getElementById("strip-10").style.animation = "eShopstrips 0.5s linear forwards 0.9s";
  document.getElementById("strip-11").style.animation = "eShopstrips 0.5s linear forwards 1s";
  document.getElementById("strip-12").style.animation = "eShopstrips 0.5s linear forwards 1.1s";
  document.getElementById("strip-13").style.animation = "eShopstrips 0.5s linear forwards 1.2s";
  document.getElementById("strip-14").style.animation = "eShopstrips 0.5s linear forwards 1.3s";
  document.getElementById("strip-15").style.animation = "eShopstrips 0.5s linear forwards 1.4s";
  document.getElementById("strip-16").style.animation = "eShopstrips 0.5s linear forwards 1.5s";
  document.getElementById("strip-17").style.animation = "eShopstrips 0.5s linear forwards 1.6s";
  document.getElementById("strip-18").style.animation = "eShopstrips 0.5s linear forwards 1.7s";
  document.getElementById("strip-19").style.animation = "eShopstrips 0.5s linear forwards 1.8s";
  document.getElementById("strip-20").style.animation = "eShopstrips 0.5s linear forwards 1.9s";
  document.getElementById("strip-21").style.animation = "eShopstrips 0.5s linear forwards 2s";
  document.getElementById("strip-22").style.animation = "eShopstrips 0.5s linear forwards 2.1s";
  document.getElementById("strip-23").style.animation = "eShopstrips 0.5s linear forwards 2.2s";
  document.getElementById("strip-24").style.animation = "eShopstrips 0.5s linear forwards 2.3s";
  document.getElementById("eshop-container").style.animation = "eShopVisible 1s linear forwards 3s";
  document.getElementById("eshop-logo").style.animation = "hideeShopLogo 1s linear forwards 2s";
}

function closeEshop() {
  document.getElementById("eshop-page-container").style.visibility = "hidden";
  document.getElementById("strip-1").style.animation = "";
  document.getElementById("strip-2").style.animation = "";
  document.getElementById("strip-3").style.animation = "";
  document.getElementById("strip-4").style.animation = "";
  document.getElementById("strip-5").style.animation = "";
  document.getElementById("strip-6").style.animation = "";
  document.getElementById("strip-7").style.animation = "";
  document.getElementById("strip-8").style.animation = "";
  document.getElementById("strip-9").style.animation = "";
  document.getElementById("strip-10").style.animation = "";
  document.getElementById("strip-11").style.animation = "";
  document.getElementById("strip-12").style.animation = "";
  document.getElementById("strip-13").style.animation = "";
  document.getElementById("strip-14").style.animation = "";
  document.getElementById("strip-15").style.animation = "";
  document.getElementById("strip-16").style.animation = "";
  document.getElementById("strip-17").style.animation = "";
  document.getElementById("strip-18").style.animation = "";
  document.getElementById("strip-19").style.animation = "";
  document.getElementById("strip-20").style.animation = "";
  document.getElementById("strip-21").style.animation = "";
  document.getElementById("strip-22").style.animation = "";
  document.getElementById("strip-23").style.animation = "";
  document.getElementById("strip-24").style.animation = "";
  document.getElementById("eshop-container").style.animation = "";
  document.getElementById("eshop-logo").style.animation = "";
}

function openSearchPage(selectedText) {
  lastSelectedEshopPage.style.display = "none";
  lastSelectedEshopText.style.animation = "none";
  lastSelectedEshopText.style.color = "rgba(255, 255, 255, .5)";
  lastSelectedEshopText.style.backgroundColor = "rgba(255, 255, 255, 0)";
  selectedText.style.animation = "selected 0.8s alternate ease-out infinite";
  document.getElementById("magnifying-glass").style.opacity = "1";
  selectedText.style.backgroundColor = "rgba(255, 255, 255, .2)";
  document.getElementById("search-eshop-page").style.display = "block";
  lastSelectedEshopPage = document.getElementById("search-eshop-page");
  lastSelectedEshopText = selectedText;
}

function openRecentReleasesPage(selectedText) {
  document.getElementById("magnifying-glass").style.opacity = ".5";
  lastSelectedEshopPage.style.display = "none";
  lastSelectedEshopText.style.animation = "";
  lastSelectedEshopText.style.color = "rgba(255, 255, 255, .5)";
  lastSelectedEshopText.style.backgroundColor = "rgba(255, 255, 255, 0)";
  selectedText.style.animation = "selected 0.8s alternate ease-out infinite";
  selectedText.style.color = "white";
  selectedText.style.backgroundColor = "rgba(255, 255, 255, .2)";
  document.getElementById("recent-releases-page").style.display = "block";
  document.getElementById("eshop-container-right-side").scrollTop = 0;
  lastSelectedEshopPage = document.getElementById("recent-releases-page");
  lastSelectedEshopText = selectedText;
}

function openCurrentOffersPage(selectedText) {
  document.getElementById("magnifying-glass").style.opacity = ".5";
  lastSelectedEshopPage.style.display = "none";
  lastSelectedEshopText.style.animation = "";
  lastSelectedEshopText.style.color = "rgba(255, 255, 255, .5)";
  lastSelectedEshopText.style.backgroundColor = "rgba(255, 255, 255, 0)";
  selectedText.style.animation = "selected 0.8s alternate ease-out infinite";
  selectedText.style.color = "white";
  selectedText.style.backgroundColor = "rgba(255, 255, 255, .2)";
  document.getElementById("current-offers-page").style.display = "block";
  document.getElementById("eshop-container-right-side").scrollTop = 0;
  lastSelectedEshopPage = document.getElementById("current-offers-page");
  lastSelectedEshopText = selectedText;
}

function openChartsPage(selectedText) {
  document.getElementById("magnifying-glass").style.opacity = ".5";
  lastSelectedEshopPage.style.display = "none";
  lastSelectedEshopText.style.animation = "";
  lastSelectedEshopText.style.color = "rgba(255, 255, 255, .5)";
  lastSelectedEshopText.style.backgroundColor = "rgba(255, 255, 255, 0)";
  selectedText.style.animation = "selected 0.8s alternate ease-out infinite";
  selectedText.style.color = "white";
  selectedText.style.backgroundColor = "rgba(255, 255, 255, .2)";
  document.getElementById("charts-page").style.display = "block";
  document.getElementById("eshop-container-right-side").scrollTop = 0;
  lastSelectedEshopPage = document.getElementById("charts-page");
  lastSelectedEshopText = selectedText;
}

function openComingSoonPage(selectedText) {
  document.getElementById("magnifying-glass").style.opacity = ".5";
  lastSelectedEshopPage.style.display = "none";
  lastSelectedEshopText.style.animation = "";
  lastSelectedEshopText.style.color = "rgba(255, 255, 255, .5)";
  lastSelectedEshopText.style.backgroundColor = "rgba(255, 255, 255, 0)";
  selectedText.style.animation = "selected 0.8s alternate ease-out infinite";
  selectedText.style.color = "white";
  selectedText.style.backgroundColor = "rgba(255, 255, 255, .2)";
  document.getElementById("coming-soon-page").style.display = "block";
  document.getElementById("eshop-container-right-side").scrollTop = 0;
  lastSelectedEshopPage = document.getElementById("coming-soon-page");
  lastSelectedEshopText = selectedText;
}

function openRedeemCodePage(selectedText) {
  document.getElementById("magnifying-glass").style.opacity = ".5";
  lastSelectedEshopPage.style.display = "none";
  lastSelectedEshopText.style.animation = "";
  lastSelectedEshopText.style.color = "rgba(255, 255, 255, .5)";
  lastSelectedEshopText.style.backgroundColor = "rgba(255, 255, 255, 0)";
  selectedText.style.animation = "selected 0.8s alternate ease-out infinite";
  selectedText.style.color = "white";
  selectedText.style.backgroundColor = "rgba(255, 255, 255, .2)";
  document.getElementById("redeem-code-page").style.display = "block";
  lastSelectedEshopPage = document.getElementById("redeem-code-page");
  lastSelectedEshopText = selectedText;
}

function openControllersPage() {
  document.getElementById("blur-window").style.visibility = "visible";
}

function closeControllersPage() {
  document.getElementById("blur-window").style.visibility = "hidden";
}

function openPairingNewControllersPage() {
  document.getElementById("controllers-page-popup-window").style.display = "none";
  document.getElementById("pairing-new-controllers-page").style.display = "inline";
}

function closePairingNewControllersPage() {
  document.getElementById("pairing-new-controllers-page").style.display = "none";
  document.getElementById("controllers-page-popup-window").style.display = "block";
}

function OpenotherPairingMethodsPage() {
  document.getElementById("pairing-new-controllers-page").style.display = "none";
  document.getElementById("other-pairing-methods-page").style.display = "inline";
}

function CloseotherPairingMethodsPage() {
  document.getElementById("other-pairing-methods-page").style.display = "none";
  document.getElementById("controllers-page-popup-window").style.display = "block";
}

function openFindControllersPage() {
  document.getElementById("controllers-page-popup-window").style.display = "none";
  document.getElementById("find-controllers-page").style.display = "inline";
}

function closeFindControllersPage() {
  document.getElementById("controllers-page-popup-window").style.display = "block";
  document.getElementById("find-controllers-page").style.display = "none";
}

function openControllersCantBeFoundPage() {
  document.getElementById("controllers-cant-be-found-page").style.display = "block";
}

function closeControllersCantBeFoundPage() {
  document.getElementById("controllers-cant-be-found-page").style.display = "none";
}

function openChangeGripOrderPage() {
  document.getElementById("controllers-page-popup-window").style.display = "none";
  document.getElementById("change-grib-order-page").style.display = "grid";
}

function closeChangeGripOrderPage() {
  document.getElementById("controllers-page-popup-window").style.display = "block";
  document.getElementById("change-grib-order-page").style.display = "none";
}

function openAlbum() {
  document.getElementById("home-background").style.display = "none";
  document.getElementById("album-page-container").style.display = "block";
}

function closealbum() {
  document.getElementById("home-background").style.display = "block";
  document.getElementById("album-page-container").style.display = "none";
}

function enlargeThumbnail(thumbnail) {
  if (thumbnail.id != "screenshot-fullscreen")
  {
    currentScreenshot = thumbnail;
    thumbnail.id = "screenshot-fullscreen";
    document.getElementById("screenshot-footer").style.visibility = "visible";
    toggleScreenshotfooter = true;
  }

  else if (toggleScreenshotfooter == true)
  {
    document.getElementById("screenshot-footer").style.visibility = "hidden";
    toggleScreenshotfooter = false;
  }

  else
  {
    document.getElementById("screenshot-footer").style.visibility = "visible";
    toggleScreenshotfooter = true;
  }
}

function hideScreenshotfooter() {
  document.getElementById("screenshot-footer").style.visibility = "hidden";
  toggleScreenshotfooter = false;
}

function exitScreenshot() {
  currentScreenshot.id = "screenshot-thumbnail";
  document.getElementById("screenshot-footer").style.visibility = "hidden";
}

function openSettings() {
  document.getElementById("home-background").style.display = "none";
  document.getElementById("settings-page-main-container").style.display = "block";
}

function closeSettings() {
  document.getElementById("home-background").style.display = "block";
  document.getElementById("settings-page-main-container").style.display = "none";
}

function selectedSettingsOptions(settingClicked) {
  if (lastSettingClicked == null)
  {
    settingClicked.style.color = "#80ffd4";
    settingClicked.style.borderLeft = ".3vw solid #80ffd4";
    lastSettingClicked = settingClicked;
  }

  else
  {
    lastSettingClicked.style.color = "white";
    lastSettingClicked.style.borderLeft = ".3vw solid rgba(0, 0, 0, 0)";
    settingClicked.style.color = "#80ffd4";
    settingClicked.style.borderLeft = ".3vw solid #80ffd4";
    lastSettingClicked = settingClicked;
  }

  selectedSettingsContent(settingClicked);
}

function selectedSettingsContent(content) {
  lastSettingContent.style.display = "none";
  document.getElementById("settings-right-scroll-containers").scrollTop = 0;
  switch (content.id) {
    case "support-health":
      document.getElementById("support-container").style.display = "initial";
      lastSettingContent = document.getElementById('support-container');
      break;
    case "airplane-mode":
      document.getElementById("airplane-mode-container").style.display = "initial";
      lastSettingContent = document.getElementById('airplane-mode-container');
      break;
    case "screen-brightness":
      document.getElementById("screen-brightness-container").style.display = "initial";
      lastSettingContent = document.getElementById('screen-brightness-container');
      break;
    case "screen-lock":
      document.getElementById("screen-lock-container").style.display = "initial";
      lastSettingContent = document.getElementById('screen-lock-container');
      break;
    case "parental-controls":
      document.getElementById("parental-controls-container").style.display = "initial";
      lastSettingContent = document.getElementById('parental-controls-container');
      break;
    case "internet-settings":
      document.getElementById("internet-container").style.display = "initial";
      lastSettingContent = document.getElementById('internet-container');
      break;
    case "data-management":
      document.getElementById("data-management-container").style.display = "initial";
      lastSettingContent = document.getElementById('data-management-container');
      break;
    case "users-settings":
      document.getElementById("users-container").style.display = "initial";
      lastSettingContent = document.getElementById('users-container');
      break;
    case "mii-settings":
      document.getElementById("mii-container").style.display = "initial";
      lastSettingContent = document.getElementById('mii-container');
      break;
    case "amiibo-settings":
      document.getElementById("amiibo-container").style.display = "initial";
      lastSettingContent = document.getElementById('amiibo-container');
      break;
    case "themes-settings":
      document.getElementById("themes-container").style.display = "initial";
      lastSettingContent = document.getElementById('themes-container');
      break;
    case "notifications-settings":
      document.getElementById("notifications-container").style.display = "initial";
      lastSettingContent = document.getElementById('notifications-container');
      break;
    case "sleep-mode-settings":
      document.getElementById("sleep-mode-settings-container").style.display = "initial";
      lastSettingContent = document.getElementById('sleep-mode-settings-container');
      break;
    case "controllers-and-sensors":
      document.getElementById("controllers-and-sensors-container").style.display = "initial";
      lastSettingContent = document.getElementById('controllers-and-sensors-container');
      break;
    case "bluetooth-audio-settings":
      document.getElementById("bluetooth-audio-container").style.display = "initial";
      lastSettingContent = document.getElementById('bluetooth-audio-container');
      break;
    case "tv-settings":
      document.getElementById("tv-settings-container").style.display = "initial";
      lastSettingContent = document.getElementById('tv-settings-container');
      break;
    case "system-option-settings":
      document.getElementById("system-options-container").style.display = "initial";
      lastSettingContent = document.getElementById('system-options-container');
      break;
  }
}

function sleepmodePage() {
  document.getElementById("tinted-window").style.visibility = "visible";
  document.getElementById("popup-window").style.visibility = "visible";
}

function backToHomePage() {
  document.getElementById("tinted-window").style.visibility = "hidden";
  document.getElementById("popup-window").style.visibility = "hidden";
}

function sleep() {
  backToHomePage();
  document.getElementById("sleep").style.visibility = "visible";
  lastSelectedIcon.style.animation = null;
  lastSelectedIcon.style.border = "0.35vw solid rgb(43, 43, 43)";
  document.getElementById(LastImagesText).style.visibility = "hidden";
  lastSelectedIcon = null;
  document.getElementById("game-scroll-container").scrollLeft = 0;
}

function backToWakeUpScreen() {
  document.getElementById("sleep").style.visibility = "hidden";
  document.getElementById("home-background").style.display = "none";
  document.getElementById("wakeup-screen").style.display = "block";
  shrinkWakeupWindow();
}

showTime();

const range = document.querySelector('.range')
const thumb = document.querySelector('.thumb')
const track = document.querySelector('.track-inner')

const updateSlider = (value) => {
  thumb.style.left = `${value}%`
  thumb.style.transform = `translate(-${value}%, -50%)`
  track.style.width = `${value}%`
}

range.oninput = (e) =>
  updateSlider(e.target.value)

updateSlider(100) // Init value

const scrollContainer = document.getElementById("game-scroll-container");

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
});