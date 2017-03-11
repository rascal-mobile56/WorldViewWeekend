/**
 * @file
 * This file handles all the main javascript features and functions for
 * Worldview Weekend's Mobile Application.
 *
 * @author RJ Johnston, JIGG Media Corp
 */
/* begin page init */
$(function() {
  $( "[data-role='navbar']" ).navbar();
  $( "[data-role='header'], [data-role='footer']" ).toolbar();
});

$(document).on("pageinit", function () {
  
updateRadioListIS(0);
        updateTodayVideoIS(0);
        updateNewsListIS(0);
        updatePeopleListIS(0);
        updateShowsVideoList();
        updateShowsAudioList();
}); /* end pageinit */


/*********************************
 *
 * START PAGE LOAD
 *
 ********************************/

$(document).on("pagecontainershow", "#video-list", function () {});
$(document).on( "pagecontainershow", "#radio-list", function() {
  // Each of the four pages in this demo has a data-title attribute
  // which value is equal to the text of the nav button
  // For example, on first page: <div data-role="page" data-title="Info">
  var current = $( ".ui-page-active" ).jqmData( "title" );
  // Change the heading
  //$( "[data-role='header'] h1" ).text( current );
  // Remove active class from nav buttons
  $( "[data-role='navbar'] a.ui-btn-active" ).removeClass( "ui-btn-active" );
  // Add active class to current nav button
  $( "[data-role='navbar'] a" ).each(function() {
    if ( $( this ).text() === current ) {
      $( this ).addClass( "ui-btn-active" );
    }
  });

});

/** PAGESHOW ACTIONS //--
 *|
 *| dont mess with unless you know what youre doing!!! --//
 *|
 ***/
$(document).on("pagebeforeshow", "#radio-list", function(e) {
  $("#header").removeClass('hide');
  $("body").removeClass('background-grad');
  getAds("radio");
// radio list functions
});
$(document).on("pagebeforeshow", "#video-list", function(e) {
  loaderOn("video-list");
  $("#header").removeClass('hide');
  $("body").removeClass('background-grad');
  getVideoAds("video");
  loaderOff("video-list");
// video list functions
});
$(document).on("pagebeforeshow", "#news-list", function (e) {
  $("#header").removeClass('hide');
  $("body").removeClass('background-grad');
  $(".swiper-container-news").addClass('hide');
  getNewsFeature("news");
  $(".swiper-container-news").removeClass('hide');
// news list functions
});
$(document).on("pagebeforeshow", "#news-article", function (e) {
  $("#header").removeClass('hide');
  $("body").removeClass('background-grad');
  $(".swiper-container-news .swiper-wrapper").empty();
// news article functions
});
$(document).on("pagebeforeshow", "#people-list", function (e) {
  $("#header").removeClass('hide');
  $("body").removeClass('background-grad');
  getPeopleFeature("people");
  getPeopleFeature("people");
// people list functions
});
$(document).on("pagebeforeshow", "#person-audio", function (e) {
  $("#header").removeClass('hide');
  $("body").removeClass('background-grad');
});
$(document).on("pagebeforeshow", "#person-video", function (e) {
  $("#header").removeClass('hide');
  $("body").removeClass('background-grad');
});
$(document).on("pagebeforeshow", "#shows-list", function (e) {
  //analytics.sendAppView('Radio Show List', successCallback, errorCallback);
  $("#header").removeClass('hide');
  $("body").removeClass('background-grad');
// shows list functions
});
$(document).on("pagebeforeshow", "#shows-video-list", function (e) {
  //analytics.sendAppView('Video Show List', successCallback, errorCallback);
  $("#header").removeClass('hide');
  $("body").removeClass('background-grad');
// shows video list functions
});
$(document).on("pagebeforeshow", "#show-audio", function (e) {
  $("#header").removeClass('hide');
  $("body").removeClass('background-grad');
});
$(document).on("pagebeforeshow", "#show-video", function (e) {
  $("#header").removeClass('hide');
  $("body").removeClass('background-grad');
});
$(document).on("pagebeforeshow", "#player-page", function (e) {
  // player functions
});
$(document).on("pagebeforeshow", "#library", function (e) {
  //analytics.sendAppView('Radio Show List', successCallback, errorCallback);
  updateLibraryList();
  $("#header").removeClass('hide');
  $("body").removeClass('background-grad');
});
$(document).on("pagebeforeshow", "#library-items", function (e) {
  $("#header").removeClass('hide');
  $("body").removeClass('background-grad');
});
$(document).on("pageshow", "#account-page", function (e) {
  //analytics.sendAppView('Account page', successCallback, errorCallback);
  //window.analytics.trackEvent('Mobile App', 'View', 'Account');
  $("#header").addClass('hide');
  $("body").addClass('background-grad');
});
$(document).on("pageshow", "#search-page", function (e) {    
  //analytics.sendAppView('Search page', successCallback, errorCallback);
  //window.analytics.trackEvent('Mobile App', 'View', 'Search');
});
$(document).on("pageshow", "#radio-list", function (e) {    
  //analytics.sendAppView('Today Radio', successCallback, errorCallback);
  //window.analytics.trackEvent('Mobile App', 'View', 'Today Radio');
});
$(document).on("pageshow", "#video-list", function (e) {
  //analytics.sendAppView('Today Video', successCallback, errorCallback);
});
$(document).on("pageshow", "#people-list", function (e) {
  //analytics.sendAppView('People page', successCallback, errorCallback);
});
$(document).on("pageshow", "#news-list", function (e) {
  //analytics.sendAppView('News page', successCallback, errorCallback);
});
$(document).on("pageshow", "#person-audio", function (e) {
  $("#header").removeClass('hide');
  $("body").removeClass('background-grad');
});
$(document).on("pageshow", "#person-video", function (e) {
  $("#header").removeClass('hide');
  $("body").removeClass('background-grad');
});
$(document).on("pageshow", "#person-news", function (e) {
  $("#header").removeClass('hide');
  $("body").removeClass('background-grad');
});


/** SHOWS //--
   *|
   *| dont mess with unless you know what youre doing!!! --//
   *|
   ***/
$(document).on('click', '#shows-list li a', function(e){
  var id = $(this).attr('data-id');
  getShowAuthorAudio(id);
  //analytics.sendAppView(id+' radio show', successCallback, errorCallback);
  var text = id+' radio show';
  window.analytics.trackEvent('Mobile App', 'View', text);
  $( ":mobile-pagecontainer" ).pagecontainer( "change", "#show-audio", {} );
});
$(document).on('click', '#app-head a', function(e){
  $("#header").addClass('hide');
  $("body").addClass('background-grad');
});
$(document).on('click', '#shows-video-list li a', function(e){
  var id = $(this).attr('data-id');
  //analytics.sendAppView(id+' video show', successCallback, errorCallback);
  var text = id+' video show';
  window.analytics.trackEvent('Mobile App', 'View', text);
  getShowAuthorVideo(id);
  $( ":mobile-pagecontainer" ).pagecontainer( "change", "#show-video", {} );
});

/** LIBRARY //--
   *|
   *| dont mess with unless you know what youre doing!!! --//
   *|
   ***/

$(document).on('click', '#library li a', function(e){
  $( ":mobile-pagecontainer" ).pagecontainer( "change", "#library", {} );
});
$(document).on('click', '#library li a', function(e){
  var id = $(this).attr('data-id');
  //$(".swiper-container-news .swiper-wrapper").empty();
  //analytics.sendAppView(id+' news article', successCallback, errorCallback);
  var text = id+' news article';
  //window.analytics.trackEvent('Mobile App', 'View', text);
  getLibraryItems(id);
  $( ":mobile-pagecontainer" ).pagecontainer( "change", "#library-items", {} );
});
$(document).on('click', '#library-items li a', function(e){
  //$("#header").removeClass('hide');
  var id = $(this).attr('data-id');
  var type = $(this).attr('data-type');
  //console.log("data it = " +id);
  //console.log("data type = " +type);
  getResource(id, type);
});
$(document).on('click', '#library-items li a.back-btn', function(e){
  var text = 'Library Section';
  window.analytics.trackEvent('Mobile App', 'View', text);
  updateLibraryList();
});
$(document).on('click', '#library-items li a.bk-btn', function(e){
  var text = 'Library Section';
  window.analytics.trackEvent('Mobile App', 'View', text);
  updateLibraryList();
});

/** NEWS //--
   *|
   *| dont mess with unless you know what youre doing!!! --//
   *|
   ***/
$(document).on('click', 'a#news', function(e){
  //getNewsFeature("news"); /* we do this here because doesn't want to load correctly if not */
  var text = 'News Section';
  window.analytics.trackEvent('Mobile App', 'View', text);
  });
$(document).on('click', '#news-list li a', function(e){
  var id = $(this).attr('data-id');
  $(".swiper-container-news .swiper-wrapper").empty();
  //analytics.sendAppView(id+' news article', successCallback, errorCallback);
  var text = id+' news article';
  window.analytics.trackEvent('Mobile App', 'View', text);
  getNewsArticle(id);
  $( ":mobile-pagecontainer" ).pagecontainer( "change", "#news-article", {} );
});
$(document).on('click', '#news-article li a.back-btn', function(e){
  var text = 'News Section';
  window.analytics.trackEvent('Mobile App', 'View', text);
  getNewsFeature("news");
});
$(document).on('click', '#news-article li a.bk-btn', function(e){
  var text = 'News Section';
  window.analytics.trackEvent('Mobile App', 'View', text);
  getNewsFeature("news");
});
$(document).on('click', '#news-list .swiper-slide .slide a', function(e){
  var id = $(this).attr('data-id');
  $(".swiper-container-news .swiper-wrapper").empty();
  //analytics.sendAppView(id+' feature news article', successCallback, errorCallback);
  var text = id+' feature news article';
  window.analytics.trackEvent('Mobile App', 'View', text);
  getNewsArticle(id);
  $( ":mobile-pagecontainer" ).pagecontainer( "change", "#news-article", {} );
});


/** PLAYERS //--
   *|
   *| dont mess with unless you know what youre doing!!! --//
   *|
   ***/
/* audio */
$(document).on('click', '#radio-list li a.ui-btn', function(e){
  var id = $(this).attr('data-id');
  var text = id+' radio program';
  window.analytics.trackEvent('Mobile App', 'View', text);
  getAudioPlayer(id);
  //analytics.sendAppView(id+' radio broadcast', successCallback, errorCallback);
  $("#header").addClass('hide');
  $("body").addClass('background-grad');
  $( ":mobile-pagecontainer" ).pagecontainer( "change", "#player-page", {} );
});
/* video */
$(document).on('click', '#video-list li a.ui-btn', function(e){
  var id = $(this).attr('data-id');
  var text = id+' video program';
  window.analytics.trackEvent('Mobile App', 'View', text);
  getVideoPlayer(id);
  //analytics.sendAppView(id+' video broadcast', successCallback, errorCallback);
  $("#header").addClass('hide');
  $("body").addClass('background-grad');
  $( ":mobile-pagecontainer" ).pagecontainer( "change", "#player-page", {} );
});
$(document).on('click', 'a.player-play', function(e){
  $('.player-pause').show();
  $('.player-play').hide();
  $("#media-player").addClass("loader");
  playAudio();
});
$(document).on('click', 'a.player-pause', function(e){
  $('.player-pause').hide();
  $('.player-play').show();
  pauseAudio();
});
$(document).on('click', 'a.player-stop', function(e){
  $('.player-stop').hide();
  $('.player-play').show();
  stopAllMedia();
});

/** PEOPLE //--
   *|
   *| dont mess with unless you know what youre doing!!! --//
   *|
   ***/
$(document).on('click', 'a#people', function(e){
  var text = 'People Section';
  window.analytics.trackEvent('Mobile App', 'View', text);
  //getPeopleFeature("people");
  });
$(document).on('click', '#person-news li a.back-btn', function(e){
  getPeopleFeature("people");
  var text = 'People Section';
  window.analytics.trackEvent('Mobile App', 'View', text);
});
$(document).on('click', '#person-news li a.bk-btn', function(e){
  getPeopleFeature("people");
  var text = 'People Section';
  window.analytics.trackEvent('Mobile App', 'View', text);
});
$(document).on('click', '#people-list li a', function(e){
  var id = $(this).attr('data-id');
  var page = "news";
  var text = id+' person news section';
  window.analytics.trackEvent('Mobile App', 'View', text);
  getPersonNews(id);
  //var page = getPersonContent(id);
  //alert("Page: "+page);
  //analytics.sendAppView(id+' person news details', successCallback, errorCallback);
  $( ":mobile-pagecontainer" ).pagecontainer( "change", "#person-"+page, {} );
});
$(document).on('click', '#people-list .swiper-slide .slide a', function(e){
  var id = $(this).attr('data-id');
  $(".swiper-container-people .swiper-wrapper").empty();
  var page = "news";
  var text = id+' person news section';
  window.analytics.trackEvent('Mobile App', 'View', text);
  getPersonNews(id);
  //var page = getPersonContent(id);
  //alert("Page: "+page);
  //analytics.sendAppView(id+' feature person view', successCallback, errorCallback);
  $( ":mobile-pagecontainer" ).pagecontainer( "change", "#person-"+page, {} );
});
$(document).on('click', '#person-audio li.show-button a', function(e){
  var id = $(this).attr('data-id');
  var text = id+' person audio section';
  window.analytics.trackEvent('Mobile App', 'View', text);
  getAudioPlayer(id);
  //analytics.sendAppView(id+' person radio broadcast', successCallback, errorCallback);
  $("#header").addClass('hide');
  $("body").addClass('background-grad');
  $( ":mobile-pagecontainer" ).pagecontainer( "change", "#player-page", {} );
});
$(document).on('click', '#person-audio li a.bk-btn', function(e){
  getPeopleFeature("people");
});
/* person video */
$(document).on('click', '#person-video li.show-button a', function(e){
  var id = $(this).attr('data-id');
  var text = id+' person video section';
  window.analytics.trackEvent('Mobile App', 'View', text);
  getVideoPlayer(id);
  //analytics.sendAppView(id+' person video broadcast', successCallback, errorCallback);
  $("#header").addClass('hide');
  $("body").addClass('background-grad');
  $( ":mobile-pagecontainer" ).pagecontainer( "change", "#player-page", {} );
});
$(document).on('click', '#person-video li a.bk-btn', function(e){
  getPeopleFeature("people");
  //getPeopleFeature("people");
});
/* person news */
$(document).on('click', '#person-news li.show-button a', function(e){
  var id = $(this).attr('data-id');
  var text = id+' person news article';
  window.analytics.trackEvent('Mobile App', 'View', text);
  //analytics.sendAppView(id+' person news article', successCallback, errorCallback);
  getNewsArticle(id);
  $( ":mobile-pagecontainer" ).pagecontainer( "change", "#news-article", {} );
});
$(document).on('click', '#person-news li a.bk-btn', function(e){
  //don't new getPeopleFeature() because handled elsewhere
  });
/* person footers */
$(document).on('click', '#audio-video-news-bottom li a', function(e){
  var dataid = $(this).attr('data-id');
  var href = $(this).attr('href');

  if (href == '#person-audio') {
    var text = dataid+' person audio section';
    window.analytics.trackEvent('Mobile App', 'View', text);
    //analytics.sendAppView(dataid+' person radio', successCallback, errorCallback);
    getPersonAudio(dataid);
    $( ":mobile-pagecontainer" ).pagecontainer( "change", "#person-audio", {} );
  } else if (href == '#person-video') {
    var text = dataid+' person video section';
    window.analytics.trackEvent('Mobile App', 'View', text);
    //analytics.sendAppView(dataid+' person video', successCallback, errorCallback);
    getPersonVideo(dataid);
    $( ":mobile-pagecontainer" ).pagecontainer( "change", "#person-video", {} );
  } else if (href == '#person-news') {
    var text = dataid+' person news section';
    window.analytics.trackEvent('Mobile App', 'View', text);
    //analytics.sendAppView(dataid+' person news', successCallback, errorCallback);
    getPersonNews(dataid);
    $( ":mobile-pagecontainer" ).pagecontainer( "change", "#person-news", {} );
  }
//$("#header").addClass('hide');
//$("body").addClass('background-grad');
});


/** SHOWS //--
   *|
   *| dont mess with unless you know what youre doing!!! --//
   *|
   ***/
$(document).on('click', '#show-video li.show-button a', function(e){
  var id = $(this).attr('data-id');
  //analytics.sendAppView(id+' video broadcast', successCallback, errorCallback);
  getVideoPlayer(id);
  $("#header").addClass('hide');
  $("body").addClass('background-grad');
  $( ":mobile-pagecontainer" ).pagecontainer( "change", "#player-page", {} );
});
$(document).on('click', '#show-video li a.bk-btn', function(e){
  });
/* show audio */
$(document).on('click', '#show-audio li.show-button a', function(e){
  var id = $(this).attr('data-id');
  //analytics.sendAppView(id+' radio broadcast', successCallback, errorCallback);
  getAudioPlayer(id);
  $("#header").addClass('hide');
  $("body").addClass('background-grad');
  $( ":mobile-pagecontainer" ).pagecontainer( "change", "#player-page", {} );
});
$(document).on('click', '#show-audio li a.bk-btn', function(e){
  });

$(document).on('click', '#logout', function(e){
  memberLogOut();
});
$(document).on('click', '#refresh', function(e){
  refreshPage();
  getAds("radio");
});

/** SEARCH //--
   *|
   *| dont mess with unless you know what youre doing!!! --//
   *|
   ***/
$(document).on('click', '#search-page', function(e){
  $("#header").addClass('hide');
  $("body").addClass('background-grad');
//$( ":mobile-pagecontainer" ).pagecontainer( "change", "#search-page", {} );
});
$(document).on('click', '#search-page li a', function(e){
  $("#header").removeClass('hide');
  var id = $(this).attr('data-id');
  var type = $(this).attr('data-type');
  getResource(id, type);
});

/* get search resource based on type */
function getResource(id, type)
{
  $("#header").addClass('hide');
  $("body").addClass('background-grad');

  if (type == "Audio") {
    getAudioPlayer(id);
    $( ":mobile-pagecontainer" ).pagecontainer( "change", "#player-page", {} );
  }
  if (type == "Video") {
      //console.log("video with id "+id);
    getVideoPlayer(id);
    $( ":mobile-pagecontainer" ).pagecontainer( "change", "#player-page", {} );
  }
  if (type == "Article") {
    getNewsArticle(id);
    $( ":mobile-pagecontainer" ).pagecontainer( "change", "#news-article", {} );
  }
}

/** FORMS //--
   *|
   *| dont mess with unless you know what youre doing!!! --//
   *|
   ***/
/* login form submit handler */
$( "#srlogin" ).submit(function( event ) {

  // Stop form from submitting normally
  event.preventDefault();

  // Get some values from elements on the page:
  var $form = $( this ),
  mail = $form.find( "input[name='name']" ).val(),
  pass = $form.find( "input[name='password']" ).val(),
  url = $form.attr( "action" );

  // Send the data using post
  var posting = $.post( url, {
    name: mail,
    password: pass
  } );

  // Put the results in a div
  posting.done(function( data ) {

    //if no data
    if (data == 0) {
      $( "#loginresult" ).empty().append( '<span class="text">Email and Password combination unrecognized. Please try again or contact support@worldviewweekend.com</span>' );
      $.jStorage.set("member", 0);
      $( ":mobile-pagecontainer" ).pagecontainer( "change", "#account-page", {} );
    } else {
      //otherwise lets do something
      $.jStorage.set("member", 1);

      var length = memberData(data);
      //console.log(length);

      var account_length = "";
      account_length += '<div id="details-box length"><span class="text">YOU HAVE BEEN A MEMBER FOR</span>';
      account_length += '<p>'+length+'</p></div>';
      $( "#details-box .length" ).empty().append(account_length);

      $("#unauthenticated").addClass("hide");
      $("#authenticated").removeClass("hide");
      //$("#radio-list .radio-list").listview("refresh");
      refreshPage();
      $( ":mobile-pagecontainer" ).pagecontainer( "change", "#radio-list", {} );
      getAds("radio");

    }
  });
});

/** SEARCH //--
   *|
   *| dont mess with unless you know what youre doing!!! --//
   *|
   ***/
/* search form submit handler */
$( "#search" ).submit(function( event ) {
  loaderOn('search-page');
  // Stop form from submitting normally
  event.preventDefault();

  // Get some values from elements on the page:
  var $form = $( this ),
  query = $form.find( "input[name='search']" ).val(),
  //pass = $form.find( "input[name='password']" ).val(),
  url = $form.attr( "action" );
  var search = url + query;

  //analytics.sendAppView('Search for '+ query, successCallback, errorCallback);

  $.ajax({
    type: 'GET',
    url: search,
    dataType: 'json',
    success: function (data) {

      var radio = toArray(data.nodes);
      var radio_list = "";
      var member = checkMember();

      //console.log(radio);

      $.each(radio, function (i) {
        radio_list += '<li data-id="' + this[0][0] + '" data-type="' + this[0][1] + '"><a href="" data-id="' + this[0][0] + '" data-type="' + this[0][1] + '">';
        if ( this[0][5] == '') {
          radio_list += '<img src="img/default-photo.png" />';
        } else {
          radio_list += '<img src="' + this[0][5] + '" />';
        }
        radio_list += '<h3>' + this[0][4] + '</h3>';
        radio_list += '<p>' + this[0][3] + '</p><div class="meta">';
        radio_list += '<span class="date">' + this[0][7] + '</span>';
        if ( this[0][6] != '') {
          radio_list += '<span class="sep">|</span>';
        }
        if ( this[0][6] == 'Public') {
          radio_list += '<span class="premium-lock unlock"><i class="fa fa-unlock"></i> Public Content</span>';
        } else if (member == 1) {
          radio_list += '<span class="premium-lock unlock"><i class="fa fa-lock"></i> Premium Content</span>';
        }else {
          radio_list += '<span class="premium-lock lock"><i class="fa fa-lock"></i> Premium Content</span>';
        }
        radio_list += '</div></a></li>';
      });

      $("#no-results").addClass('hide');
      $("#search-page .search-page").empty();
      $("#search-page .search-page").append(radio_list).promise().done(function () {
        $(this).listview().listview("refresh");
      });
      loaderOff('search-page');
    },
    error: function () {
      loaderRefresh('search-page');
    }
  });
});

/** PRIMARY FUNCTIONS ********
 *
 *****************************/

var todayRadioLastPage = -1;
/**
 *  Today Radio List
 */
function updateRadioListIS(r)
{
  if(r <= todayRadioLastPage) return;
  else todayRadioLastPage = r;

  $("ul.radio-list a.more-link-" + r).parents("li").html("<p class=\"load-ind\">Loading...</p>");
  if (r == 0)
    loaderOn('radio-list');
  $.ajax({
    type: 'GET',
    url: 'https://www.worldviewweekend.com/m/today/radio&page=' + r,
    dataType: 'json',
    success: function (data) {

      var radio = toArray(data.nodes);
      var radio_list = "";
      var member = checkMember();

      $.each(radio, function (i) {
        radio_list += '<li data-id="' + this[0][6] + '"><a href="" data-id="' + this[0][6] + '">';
        radio_list += '<img src="' + this[0][5] + '">';
        radio_list += '<h3>' + this[0][0] + '</h3>';
        radio_list += '<p>' + this[0][1] + '</p><div class="meta">';
        radio_list += '<span class="date">' + this[0][3] + '</span>';
        if ( this[0][4] != '') {
          radio_list += '<span class="sep">|</span>';
        }
        if ( this[0][4] == 'Public') {
          radio_list += '<span class="premium-lock unlock"><i class="fa fa-unlock"></i> Public Content</span>';
        } else if (member == 1) {
          radio_list += '<span class="premium-lock unlock"><i class="fa fa-lock"></i> Premium Content</span>';
        }else {
          radio_list += '<span class="premium-lock lock"><i class="fa fa-lock"></i> Premium Content</span>';
        }
        radio_list += '</div></a></li>';
      });

      /*if(radio.length > 0) {
        radio_list += '<li style="margin: 0; padding: 10px 0; text-align: center;"><p><a href="' + (r+1) + '" class="more-link-' + (r+1) + '" onclick="updateRadioListIS(' + (r+1) + '); return false;">View more news...</a></p></li>';
      }
      else {
        radio_list += '<li style="margin: 0; padding: 10px 0; text-align: center;"><p>No more news.</p></li>';
      }

      $("p.load-ind").parent().remove();*/

      $("#radio-list .radio-list").append(radio_list).find("li.new-entry").fadeIn(750).removeClass("new-entry").end().promise().done(function () {
        $(this).listview().listview("refresh");
      });
      if (r == 0)
        loaderOff('radio-list');
    },
    error: function () {
      loaderRefresh('radio-list');
    }
  });
}


var todayVideoLastPage = -1;
/**
 *  Today Video List
 */
function updateTodayVideoIS(v)
{
  if(v <= todayVideoLastPage) return;
  else todayVideoLastPage = v;

  $("ul.video-list a.more-link-" + v).parents("li").html("<p class=\"load-ind\">Loading...</p>");
  if (v == 0)
    loaderOn('video-list');
  $.ajax({
    type: 'GET',
    url: 'https://www.worldviewweekend.com/m/today/video&page=' + v,
    dataType: 'json',
    success: function (data) {

      var video = toArray(data.nodes);
      var video_list = "";
      var member = checkMember();

      $.each(video, function (i) {
        video_list += '<li data-id="' + this[0][6] + '"><a href="" data-id="' + this[0][6] + '">';
        video_list += '<img src="' + this[0][5] + '">';
        video_list += '<h3>' + this[0][0] + '</h3>';
        video_list += '<p>' + this[0][1] + '</p><div class="meta">';
        video_list += '<span class="date">' + this[0][3] + '</span>';
        if ( this[0][4] != '') {
          video_list += '<span class="sep">|</span>';
        }
        if ( this[0][4] == 'Public') {
          video_list += '<span class="premium-lock unlock"><i class="fa fa-unlock"></i> Public Content</span>';
        } else if (member == 1) {
          video_list += '<span class="premium-lock unlock"><i class="fa fa-lock"></i> Premium Content</span>';
        }else {
          video_list += '<span class="premium-lock lock"><i class="fa fa-lock"></i> Premium Content</span>';
        }
        video_list += '</div></a></li>';
      });

      /*if(video.length > 0) {
        video_list += '<li style="margin: 0; padding: 10px 0; text-align: center;"><p><a href="' + (v+1) + '" class="more-link-' + (v+1) + '" onclick="updateTodayVideoIS(' + (v+1) + '); return false;">View more news...</a></p></li>';
      }
      else {
        video_list += '<li style="margin: 0; padding: 10px 0; text-align: center;"><p>No more news.</p></li>';
      }

      $("p.load-ind").parent().remove();*/

      $("#video-list .video-list").append(video_list).find("li.new-entry").fadeIn(750).removeClass("new-entry").end().promise().done(function () {
        $(this).listview().listview("refresh");
      });
      if (v == 0)
        loaderOff('video-list');
    },
    error: function () {
      loaderRefresh('video-list');
    }
  });
}

/**
 *  Library List
 */


/* library shows data */
function updateLibraryList() {
  loaderOn('library');
  $.ajax({
    type: 'GET',
    url: 'https://www.worldviewweekend.com/m/library/all',
    dataType: 'json',
    success: function (data) {

      var library = toArray(data.nodes);
      var library_list = "";
      
      //console.log('Library array: ' + library);  
      
      $.each(library, function (i) {
          //console.log('each library event: ' + this[0][0]);  
        library_list += '<li data-id="' + this[0][1] + '"><a href="" data-id="' + this[0][1] + '">';
        library_list += '<h3>' + this[0][0] + '</h3>';        
        library_list += '</div></a></li>';
      });

      $("#library .library").empty();
      $("#library .library").append(library_list).promise().done(function () {
        $(this).listview().listview("refresh");
      });
      loaderOff('library');
    },
    error: function () {
      loaderRefresh('library');
    }
  });
}
/* ********** KS ********** */

/**
 * AJAX Loaders
 */
function loaderOn(id) {
  $("#" + id + " .ui-content").addClass("loader");
  $("#" + id + "  ul").addClass("hide");
  $(".mejs-container").addClass("hide");
  $("#player").addClass("hide");
  $("#account-signup").addClass("hide");
}

function loaderOff(id) {
  $("#" + id + " .ui-content").removeClass("loader");
  $("#" + id + "  ul").removeClass("hide");
  $(".mejs-container").removeClass("hide");
  $("#player").removeClass("hide");
  $("#account-signup").removeClass("hide");
}

function loaderRefresh(id) {
  $("#" + id + " .ui-content").removeClass("loader");
  $(".loader-refresh").removeClass("hide");
}

function loaderWithBackgroundOn(id) {
  $("#" + id + " .ui-content").addClass("loader-with-background");
  /*@todo need to inject ajax loader image somehow now that we're using background image*/
  $("#" + id + "  ul").addClass("hide");
}

function loaderWithBackgroundOff(id) {
  $("#" + id + " .ui-content").removeClass("loader-with-background");
  /*@todo need to remove ajax loader image somehow now that we're using background image*/
  $("#" + id + "  ul").removeClass("hide");
}


var peopleLastPage = -1;
/**
 *  Update People view content list
 *
 */
function updatePeopleListIS(p)
{
  if(p <= peopleLastPage) return;
  else peopleLastPage = p;

  $("ul.people-list a.more-link-" + p).parents("li").html("<p class=\"load-ind\">Loading...</p>");
  if (p == 0)
    loaderOn('people-list');
  $.ajax({
    type: 'GET',
    url: 'https://www.worldviewweekend.com/m/people/all&page=' + p,
    dataType: 'json',
    success: function (data) {

      var people = toArray(data.nodes);
      var people_list = "";

      $.each(people, function (i) {
        people_list += '<li data-id="' + this[0][1] + '" class="new-entry" style="display: none;"><a href="" data-id="' + this[0][1] + '">';
        if ( this[0][4] != '') {
          people_list += '<img src="' + this[0][4] + '">';
        } else {
          people_list += '<img src="img/default-photo.png" />';
        }
        people_list += '<h3>' + this[0][0] + '</h3>';
        people_list += '<p><br/></p>';// + this[0][5] + '<br/></p>';

        people_list += '<div class="meta"><span class="date">News</span>';
        //alert(this[0][1]);
        if ( this[0][2] != '') {
          people_list += '<span class="sep">|</span>';
          people_list += '<span class="date">'+this[0][2]+'</span>';
        }
        if ( this[0][2] && this[0][3] != '') {
          people_list += '<span class="sep">|</span>';
        } else {
          people_list += '<span class="sep"><br/></span>';
        }
        if ( this[0][3] != '') {
          people_list += '<span class="date">'+this[0][3]+'</span>';
        }

        people_list += '</div></a></li>';
      });

      if(people.length > 0) {
        people_list += '<li style="margin: 0; padding: 10px 0; text-align: center;"><p><a href="' + (p+1) + '" class="more-link-' + (p+1) + '" onclick="updatePeopleListIS(' + (p+1) + '); return false;">View more people...</a></p></li>';
      }
      else {
        people_list += '<li style="margin: 0; padding: 10px 0; text-align: center;"><p>No more people.</p></li>';
      }

      $("p.load-ind").parent().remove();
      $("#people-list .people-list").append(people_list).find("li.new-entry").fadeIn(750).removeClass("new-entry").end().promise().done(function () {
        $(this).listview().listview("refresh");
      });
      if (p == 0)
        loaderOff('people-list');
    },
    error: function () {
      loaderRefresh('people-list');
    }
  });
}

/* provide show author id to return audio */
function getPersonAudio(id) {
  loaderOn('person-audio');
  $("#feature-image").empty();

  $.ajax({
    type: 'GET',
    url: 'https://www.worldviewweekend.com/m/person/'+ id +'/audio',
    dataType: 'json',
    success: function (data) {

      var show = toArray(data.nodes);
      var show_list = "";
      var member = checkMember();

      var header ="";
      var footer = '<div id="footer"><ul id="audio-video-news-bottom">';
      footer += '<li><a href="#person-news" data-id="' + id + '" data-prefetch="true" data-transition="fade">News</a></li>';
      footer += '<li><a href="#person-audio" class="active" data-id="' + id + '" data-prefetch="true" data-transition="fade">Audio</a></li>';
      footer += '<li><a href="#person-video" data-id="' + id + '" data-prefetch="true" data-transition="fade">Video</a></li>';
      footer += '</ul></div>';

      /* check for results */
      if (show == "") {
        var an = $.jStorage.get("authorname");
        //build header
        header += '<div id="feature-image"><style>#person-feature .header-image {background: url("../img/people-feature-bkg.png") no-repeat scroll 0 0 / 100% auto transparent; background-size:100%;}</style></div>';
        header += '<div id="person-feature">';
        header += '<div class="header-image"><header><h3>' + an + '</h3>';
        header += '<div class="article-author"></div>';
        header += '<div class="article-date">AUDIO</div>';
        header += '</div></header></div>';

        loadNoResults("person-audio", "person-news", header, footer);
        loaderOff('person-audio');
      } else {
        //build header
        header += '<div id="feature-image"><style>#person-feature .header-image {background: url(\''+ show[0][0][5] +'\');background-size:100%;}</style></div>';
        header += '<div id="person-feature">';
        header += '<div class="header-image"><header><h3>' + show[0][0][7] + '</h3>';
        header += '<div class="article-author"></div>';
        header += '<div class="article-date">AUDIO</div>';// + this[0][3] + '</div>';
        header += '</div></header></div>';

        $.each(show, function(i) {
          show_list += '<li data-id="' + this[0][6] + '" class="show-button">';
          show_list += '<a href="" data-id="' + this[0][6] + '"><img src="' + this[0][5] + '">';
          show_list += '<h3>' + this[0][0] + '</h3>';
          show_list += '<p>' + this[0][1] + '<br/></p><div class="meta">';
          show_list += '<span class="date">' + this[0][3] + '</span>';
          if ( this[0][4] != '') {
            show_list += '<span class="sep">|</span>';
          }
          if ( this[0][4] == 'Public') {
            show_list += '<span class="premium-lock unlock"><i class="fa fa-unlock"></i> Public Content</span>';
          } else if (member == 1) {
            show_list += '<span class="premium-lock unlock"><i class="fa fa-lock"></i> Premium Content</span>';
          }else {
            show_list += '<span class="premium-lock lock"><i class="fa fa-lock"></i> Premium Content</span>';
          }
          show_list += '</div></a></li>';
        });

        var return_show = header + show_list + footer;
        $("#person-audio .person-audio").empty();
        $("#person-audio ul.person-audio").append(return_show).promise().done(function () {
          $(this).listview().listview("refresh");
        });
        loaderOff('person-audio');
      }
    },
    error: function () {
      loaderRefresh('person-audio');
    }
  });
}


/* provide show author id to return audio */
function getPersonVideo(id) {
  loaderOn('person-video');
  $("#feature-image").empty();
  var show_list = "";

  $.ajax({
    type: 'GET',
    url: 'https://www.worldviewweekend.com/m/person/'+ id +'/video',
    dataType: 'json',
    success: function (data) {

      var show = toArray(data.nodes);
      var show_list = "";
      var member = checkMember();

      var header ="";
      var footer = '<div id="footer"><ul id="audio-video-news-bottom">';
      footer += '<li><a href="#person-news" data-id="' + id + '" data-prefetch="true" data-transition="fade">News</a></li>';
      footer += '<li><a href="#person-audio" data-id="' + id + '" data-prefetch="true" data-transition="fade">Audio</a></li>';
      footer += '<li><a href="#person-video" class="active" data-id="' + id + '" data-prefetch="true" data-transition="fade">Video</a></li>';
      footer += '</ul></div>';

      /* check for results */
      if (show == "") {
        var an = $.jStorage.get("authorname");
        //build header
        header += '<div id="feature-image"><style>#person-feature .header-image {background: url("../img/people-feature-bkg.png") no-repeat scroll 0 0 / 100% auto transparent; background-size:100%;}</style></div>';
        header += '<div id="person-feature">';
        header += '<div class="header-image"><header><h3>' + an + '</h3>';
        header += '<div class="article-author"></div>';
        header += '<div class="article-date">VIDEO</div>';
        header += '</div></header></div>';

        loadNoResults("person-video", "person-news", header, footer);
        loaderOff('person-video');
      } else {
        //build header
        header += '<div id="feature-image"><style>#person-feature .header-image {background: url(\''+ show[0][0][5] +'\');background-size:100%;}</style></div>';
        header += '<div id="person-feature">';
        header += '<div class="header-image"><header><h3>' + show[0][0][7] + '</h3>';
        header += '<div class="article-author"></div>';
        header += '<div class="article-date">VIDEO</div>';// + this[0][3] + '</div>';
        header += '</div></header></div>';

        $.each(show, function(i) {
          show_list += '<li data-id="' + this[0][6] + '" class="show-button">';
          show_list += '<a href="" data-id="' + this[0][6] + '"><img src="' + this[0][5] + '">';
          show_list += '<h3>' + this[0][0] + '</h3>';
          show_list += '<p>' + this[0][1] + '<br/></p><div class="meta">';
          show_list += '<span class="date">' + this[0][3] + '</span>';
          if ( this[0][4] != '') {
            show_list += '<span class="sep">|</span>';
          }
          if ( this[0][4] == 'Public') {
            show_list += '<span class="premium-lock unlock"><i class="fa fa-unlock"></i> Public Content</span>';
          } else if (member == 1) {
            show_list += '<span class="premium-lock unlock"><i class="fa fa-lock"></i> Premium Content</span>';
          }else {
            show_list += '<span class="premium-lock lock"><i class="fa fa-lock"></i> Premium Content</span>';
          }
          show_list += '</div></a></li>';
        });

        var return_show = header + show_list + footer;
        $("#person-video .person-video").empty();
        $("#person-video ul.person-video").append(return_show).promise().done(function () {
          $(this).listview().listview("refresh");
        });
        loaderOff('person-video');
      }
    },
    error: function() {
      loaderRefresh('person-video');
    }
  });
}


/**
 *  Determine Persons Content
 */
function getPersonContent(id)
{
  var n = "";
  var a = "";
  var v = "";

  //news check
  $.ajax({
    type: 'GET',
    url: 'https://www.worldviewweekend.com/m/person/'+id+'/news',
    dataType: 'json',
    success: function (data) {
      n = toArray(data.nodes);
      //alert(news_content);
    }});
    //audio check
    $.ajax({
      type: 'GET',
      url: 'https://www.worldviewweekend.com/m/person/'+id+'/audio',
      dataType: 'json',
      success: function (data) {
        a = toArray(data.nodes);
    }});
    //video check
    $.ajax({
      type: 'GET',
      url: 'https://www.worldviewweekend.com/m/person/'+id+'/video',
      dataType: 'json',
      success: function (data) {
        v = toArray(data.nodes);
    }});

    //alert("pausing");
    //@todo remove, this was simply testing different methods to delay
    window.setTimeout(function() {
        //alert("Hello World!");
    }, 500);

    //default to news = 3
    var section = 3;
    //alert("section: "+section);
    //alert("news contents: "+n);

    //@todo this did work EXCEPT, only worked when the alerts were displayed.
    //The ajax calls arent returning results before reaching here without a pause.
    //will look into later or have JS dev look at. - RJ
    if (n == "") {
      //audio
      section = 1;
      if (a == "") {
        //video
        section = 2;
      }
    }

    switch (section) {
    case 3:
        //alert("alert in switch: "+section);
        getPersonNews(id);
        section = "news";
        break;
    case 1:
        //alert("alert in switch: "+section);
        getPersonAudio(id);
        section = "audio";
        break;
    case 2:
        //alert("alert in switch: "+section);
        getPersonVideo(id);
        section = "video";
        break;
    }

    return section;
}


/* person news list view */
function getPersonNews(id) {
  loaderOn('person-news');
  $("#person-feature").empty();
  $("#feature-image").empty();

  var author = getAuthorName(id);
  //alert(author);

  $.ajax({
    type: 'GET',
    url: 'https://www.worldviewweekend.com/m/person/'+id+'/news',
    dataType: 'json',
    success: function (data) {

      var news = toArray(data.nodes);
      var news_list = "";
      var member = checkMember();

      var header ="";
      var footer = '<div id="footer"><ul id="audio-video-news-bottom">';
      footer += '<li><a href="#person-news" class="active" data-id="' + id + '" data-prefetch="true" data-transition="fade">News</a></li>';
      footer += '<li><a href="#person-audio" data-id="' + id + '" data-prefetch="true" data-transition="fade">Audio</a></li>';
      footer += '<li><a href="#person-video" data-id="' + id + '" data-prefetch="true" data-transition="fade">Video</a></li>';
      footer += '</ul></div>';

      /* check for results */
      if (news == "") {
        var an = $.jStorage.get("authorname");
        //build header
        header += '<div id="feature-image"><style>#person-feature .header-image {background: url("../img/people-feature-bkg.png") no-repeat scroll 0 0 / 100% auto transparent; background-size:100%;}</style></div>';
        header += '<div id="person-feature">';
        header += '<div class="header-image"><header><h3>' + an + '</h3>';
        header += '<div class="article-author"></div>';
        header += '<div class="article-date">NEWS</div>';
        header += '</div></header></div>';

        loadNoResults("person-news", "person-audio", header, footer);
        loaderOff('person-news');
      } else {
        //build header
        header += '<div id="feature-image"><style>#person-feature .header-image {background: url(\''+ news[0][0][5] +'\');background-size:100%;}</style></div>';
        header += '<div id="person-feature">';
        header += '<div class="header-image"><header><h3>' + news[0][0][7] + '</h3>';
        header += '<div class="article-author"></div>';
        header += '<div class="article-date">NEWS</div>';// + this[0][3] + '</div>';
        header += '</div></header></div>';

        $.each(news, function (i) {
          news_list += '<li data-id="' + this[0][6] + '" class="show-button"><a href="" data-id="' + this[0][6] + '">';
          news_list += '<img src="' + this[0][5] + '">';
          news_list += '<h3>' + this[0][0] + '</h3>';
          news_list += '<p>' + this[0][1] + '</p><div class="meta">';
          news_list += '<span class="date">' + this[0][3] + '</span>';
          if ( this[0][4] != '') {
            news_list += '<span class="sep">|</span>';
          }
          if ( this[0][4] == 'Public') {
            news_list += '<span class="premium-lock unlock"><i class="fa fa-unlock"></i> Public Content</span>';
          } else if (member == 1) {
            news_list += '<span class="premium-lock unlock"><i class="fa fa-lock"></i> Premium Content</span>';
          }else {
            news_list += '<span class="premium-lock lock"><i class="fa fa-lock"></i> Premium Content</span>';
          }
          news_list += '</div></a></li>';
        });

        var return_show = header + news_list + footer;
        $("#person-news .person-news").empty();
        $("#person-news ul.person-news").append(return_show).promise().done(function () {
          $(this).listview().listview("refresh");
        });
        loaderOff('person-news');
      }
    },
    error: function () {
      loaderRefresh('person-news');
    }
  });
}


/***
 *  News Section Content
 */
var newsLastPage = -1;
function updateNewsListIS(n) {

  if(n <= newsLastPage) return;
  else newsLastPage = n;

  $("ul.news-list a.more-link-" + n).parents("li").html("<p class=\"load-ind\">Loading...</p>");
  if (n == 0)
    loaderOn('news-list');

  $.ajax({
    type: 'GET',
    url: 'https://www.worldviewweekend.com/m/news/all&page=' + n,
    dataType: 'json',
    success: function (data) {

      var news = toArray(data.nodes);
      var news_list = "";
      var member = checkMember();

      //alert("rebuild news list");

      $.each(news, function (i) {

        news_list += '<li data-id="' + this[0][6] + '" class="new-entry" style="display: none;"><a href="" data-id="' + this[0][6] + '">';
        if ( this[0][5] != '') {
          news_list += '<img src="' + this[0][5] + '">';
        } else {
          news_list += '<img src="img/default-photo.png" />';
        }
        news_list += '<h3>' + this[0][0] + '</h3>';
        news_list += '<p>' + this[0][1] + '</p><div class="meta">';
        news_list += '<span class="date">' + this[0][3] + '</span>';
        if ( this[0][4] != '') {
          news_list += '<span class="sep">|</span>';
        }
        if ( this[0][4] == 'Public') {
          news_list += '<span class="premium-lock unlock"><i class="fa fa-unlock"></i> Public Content</span>';
        } else if (member == 1) {
          news_list += '<span class="premium-lock unlock"><i class="fa fa-lock"></i> Premium Content</span>';
        }else {
          news_list += '<span class="premium-lock lock"><i class="fa fa-lock"></i> Premium Content</span>';
        }
        news_list += '</div></a></li>';

      });

      if(news.length > 0) {
        news_list += '<li style="margin: 0; padding: 10px 0; text-align: center;"><p><a href="' + (n+1) + '" class="more-link-' + (n+1) + '" onclick="updateNewsListIS(' + (n+1) + '); return false;">View more news...</a></p></li>';
      }
      else {
        news_list += '<li style="margin: 0; padding: 10px 0; text-align: center;"><p>No more news.</p></li>';
      }

      $("p.load-ind").parent().remove();
      $("#news-list .news-list").append(news_list).find("li.new-entry").fadeIn(750).removeClass("new-entry").end().promise().done(function () {
        $(this).listview().listview("refresh");
      });
      if (n == 0)
        loaderOff('news-list');
    },
    error: function () {
      loaderRefresh('news-list');
    }
  });
}


/* audio shows data */
function updateShowsAudioList () {
  loaderOn('shows-list');
  $.ajax({
    type: 'GET',
    url: 'https://www.worldviewweekend.com/m/shows/audio',
    dataType: 'json',
    success: function (data) {

      var shows = toArray(data.nodes);
      var shows_list = "";

      $.each(shows, function (i) {
        shows_list += '<li><div id="show-wrapper"><a href="" data-id="' + this[0][4] + '">';
        shows_list += '<img src="' + this[0][6] + '" class="show-cover">';
        shows_list += '<div class="shows-content"><h3>' + this[0][0] + '</h3>';
        shows_list += '</a>';
        if ( this[0][5] != '') {
          shows_list += '<div class="sub">'+this[0][5]+'</div>';
        }

        shows_list += '</div></div></li>';
      });

      $("#shows-list .shows-list").empty();
      $("#shows-list .shows-list").append(shows_list).promise().done(function () {
        $(this).listview().listview("refresh");
      });
      loaderOff('shows-list');
    },
    error: function () {
      loaderRefresh('shows-list');
    }
  });

}

/* video shows data */
function updateShowsVideoList() {
  loaderOn('shows-video-list');
  $.ajax({
    type: 'GET',
    url: 'https://www.worldviewweekend.com/m/shows/video',
    dataType: 'json',
    success: function (data) {

      var shows = toArray(data.nodes);
      var shows_list = "";

      $.each(shows, function (i) {
        shows_list += '<li><div id="show-wrapper"><a href="" data-id="' + this[0][5] + '">';
        shows_list += '<img src="' + this[0][7] + '" class="show-cover">';
        shows_list += '<div class="shows-content"><h3>' + this[0][0] + '</h3>';
        shows_list += '</a>';
        if ( this[0][6] != '') {
          shows_list += '<div class="sub">'+this[0][6]+'</div>';
        }

        shows_list += '</div></div></li>';
      });

      $("#shows-video-list .shows-video-list").empty();
      $("#shows-video-list .shows-video-list").append(shows_list).promise().done(function () {
        $(this).listview().listview("refresh");
      });
      loaderOff('shows-video-list');
    },
    error: function () {
      loaderRefresh('show-video-list');
    }
  });
}

/* provide show author id to return video *
var showAuthorVideoLastPage = -1;
function getShowAuthorVideoIS(id, n)
{
  if(n <= showAuthorVideoLastPage) return;
  else showAuthorVideoLastPage = n;

  $("ul.show-video a.more-link-" + n).parents("li").html("<p class=\"load-ind\">Loading...</p>");
  if (n == 0)
    loaderOn('show-video');

  $("#person-feature").empty();
  $("#feature-image").empty();

  $.ajax({
    type: 'GET',
    url: 'https://www.worldviewweekend.com/m/show/video/'+ id +'&page=' + n,
    dataType: 'json',
    success: function (data) {

      var show = toArray(data.nodes);
      var show_list = "";
      var header ="";
      var member = checkMember();

      if (n == 0) {
        header += '<div id="feature-image"><style>#person-feature .header-image {background: url(\''+ show[0][0][6] +'\');}</style></div>';
        header += '<div id="person-feature">';
        header += '<div class="header-image"><header><h3>' + show[0][0][7] + '</h3>';
        header += '<div class="article-author">by ' + show[0][0][8] + '</div>';
        header += '<div class="article-date"></div>';
        header += '</div></header></div>';
      }

      $.each(show, function(i) {
        show_list += '<li data-id="' + this[0][4] + '" class="new-entry"  style="display: none;">';
        show_list += '<a href="" data-id="' + this[0][4] + '"><img src="' + this[0][3] + '">';
        show_list += '<h3>' + this[0][0] + '</h3>';
        show_list += '<p>' + this[0][1] + '</p><div class="meta">';
        show_list += '<span class="date">' + this[0][5] + '</span>';
        if ( this[0][9] != '') {
          show_list += '<span class="sep">|</span>';
        }
        if ( this[0][9] == 'Public') {
          show_list += '<span class="premium-lock unlock"><i class="fa fa-unlock"></i> Public Content</span>';
        } else if (member == 1) {
          show_list += '<span class="premium-lock unlock"><i class="fa fa-lock"></i> Premium Content</span>';
        }else {
          show_list += '<span class="premium-lock lock"><i class="fa fa-lock"></i> Premium Content</span>';
        }
        show_list += '</div></a></li>';
      });

      if(show.length > 0) {
        show_list += '<li style="margin: 0; padding: 10px 0; text-align: center;"><p><a href="' + (n+1) + '" class="more-link-' + (n+1) + '" onclick="getShowAuthorVideoIS(' + (n+1) + '); return false;">View more episodes...</a></p></li>';
      }
      else {
        show_list += '<li style="margin: 0; padding: 10px 0; text-align: center;"><p>No more episodes.</p></li>';
      }

      var return_show = header + show_list;

      $("p.load-ind").parent().remove();
      $("#show-video .show-video").append(return_show).find("li.new-entry").fadeIn(750).removeClass("new-entry").end().promise().done(function () {
        $(this).listview().listview("refresh");
      });


      //$("#show-video .show-video").empty();
      //list is created, now add it
      loaderOff('show-video');
    },
    error: function () {
      loaderRefresh('show-video');
    }
  });
}*/

/* provide show author id to return video */
function getShowAuthorVideo(id)
{
  loaderOn('show-video');
  $("#person-feature").empty();
  $("#feature-image").empty();

  $.ajax({
    type: 'GET',
    url: 'https://www.worldviewweekend.com/m/show/video/'+ id,
    dataType: 'json',
    success: function (data) {

      var show = toArray(data.nodes);
      var show_list = "";
      var header ="";
      var member = checkMember();

      header += '<div id="feature-image"><style>#person-feature .header-image {background: url(\''+ show[0][0][6] +'\');}</style></div>';
      header += '<div id="person-feature">';
      header += '<div class="header-image"><header><h3>' + show[0][0][7] + '</h3>';
      header += '<div class="article-author">by ' + show[0][0][8] + '</div>';
      header += '<div class="article-date"></div>';
      header += '</div></header></div>';

      $.each(show, function(i) {
        show_list += '<li data-id="' + this[0][4] + '" class="show-button">';
        show_list += '<a href="" data-id="' + this[0][4] + '"><img src="' + this[0][3] + '">';
        show_list += '<h3>' + this[0][0] + '</h3>';
        show_list += '<p>' + this[0][1] + '</p><div class="meta">';
        show_list += '<span class="date">' + this[0][5] + '</span>';
        if ( this[0][9] != '') {
          show_list += '<span class="sep">|</span>';
        }
        if ( this[0][9] == 'Public') {
          show_list += '<span class="premium-lock unlock"><i class="fa fa-unlock"></i> Public Content</span>';
        } else if (member == 1) {
          show_list += '<span class="premium-lock unlock"><i class="fa fa-lock"></i> Premium Content</span>';
        }else {
          show_list += '<span class="premium-lock lock"><i class="fa fa-lock"></i> Premium Content</span>';
        }
        show_list += '</div></a></li>';
      });

      var return_show = header + show_list;
      $("#show-video .show-video").empty();
      //list is created, now add it
      $("#show-video ul.show-video").append(return_show).promise().done(function () {
        $(this).listview().listview("refresh");
      });
      loaderOff('show-video');
    },
    error: function () {
      loaderRefresh('show-video');
    }
  });
}

/* provide show author id to return audio */
function getShowAuthorAudio(id)
{
  loaderOn('show-audio');
  $("#person-feature").empty();
  $("#feature-image").empty();

  $.ajax({
    type: 'GET',
    url: 'https://www.worldviewweekend.com/m/show/audio/'+ id,
    dataType: 'json',
    success: function (data) {

      var show = toArray(data.nodes);
      var show_list = "";
      var header ="";
      var member = checkMember();

      header += '<div id="feature-image"><style>#person-feature .header-image {background: url(\''+ show[0][0][8] +'\');}</style></div>';
      header += '<div id="person-feature">';
      header += '<div class="header-image"><header><h3>' + show[0][0][7] + '</h3>';
      header += '<div class="article-author">by ' + show[0][0][6] + '</div>';
      header += '<div class="article-meta"><div class="article-type">RADIO</div>';// + this[0][3] + '</div>';
      header += '<div class="article-count"><br/></div></div>';//' + show[0][0][6] + '</div></div>';
      header += '</div></header></div>';

      $.each(show, function(i) {
        //console.log(this[0]);
        show_list += '<li data-id="' + this[0][4] + '" class="show-button">';
        show_list += '<a href="" data-id="' + this[0][4] + '"><img src="' + this[0][3] + '">';
        show_list += '<h3>' + this[0][0] + '</h3>';
        show_list += '<p>' + this[0][1] + '</p><div class="meta">';
        show_list += '<span class="date">' + this[0][5] + '</span>';
        if ( this[0][9] != '') {
          show_list += '<span class="sep">|</span>';
        }
        if ( this[0][9] == 'Public') {
          show_list += '<span class="premium-lock unlock"><i class="fa fa-unlock"></i> Public Content</span>';
        } else if (member == 1) {
          show_list += '<span class="premium-lock unlock"><i class="fa fa-lock"></i> Premium Content</span>';
        }else {
          show_list += '<span class="premium-lock lock"><i class="fa fa-lock"></i> Premium Content</span>';
        }
        show_list += '</div></a></li>';
      });

      var return_show = header + show_list;

      $("#show-audio .show-audio").empty();
      //list is created, now add it
      $("#show-audio ul.show-audio").append(return_show).promise().done(function () {
        $(this).listview().listview("refresh");
      });
      loaderOff('show-audio');
    },
    error: function () {
      loaderRefresh('show-audio');
    }
  });
}

/* provide show author id to return audio */
function getLibraryItems(id)
{
  loaderOn('library-items');

  $.ajax({
    type: 'GET',
    url: 'https://www.worldviewweekend.com/m/library/'+ id,
    dataType: 'json',
    success: function (data) {

      var items = toArray(data.nodes);
      var library_items = "";
      var member = checkMember();

      $.each(items, function(i) {
        //console.log(this[0]);
        if ( this[0][5] == '' ) {
            this[0][5] = 'img/default-photo.png';
        }
        library_items += '<li data-id="' + this[0][6] + '" data-type="' + this[0][7] + '" class="show-button">';
        library_items += '<a href="" data-id="' + this[0][6] + '" data-type="' + this[0][7] + '"><img src="' + this[0][5] + '">';
        library_items += '<h3>' + this[0][0] + '</h3>';
        library_items += '<p>' + this[0][1] + '</p><div class="meta">';
        library_items += '<span class="date">' + this[0][3] + '</span>';
        if ( this[0][4] != '') {
          library_items += '<span class="sep">|</span>';
        }
        if ( this[0][4] == 'Public') {
          library_items += '<span class="premium-lock unlock"><i class="fa fa-unlock"></i> Public Content</span>';
        } else if (member == 1) {
          library_items += '<span class="premium-lock unlock"><i class="fa fa-lock"></i> Premium Content</span>';
        }else {
          library_items += '<span class="premium-lock lock"><i class="fa fa-lock"></i> Premium Content</span>';
        }
        library_items += '</div></a></li>';
      });

      //var return_show = library_items;

      $("#library-items .library-items").empty();
      //list is created, now add it
      $("#library-items ul.library-items").append(library_items).promise().done(function () {
        $(this).listview().listview("refresh");
      });
      loaderOff('library-items');
    },
    error: function () {
      loaderRefresh('library-items');
    }
  });
}


var audioMedia = null;
var audioUrl = null;
/**
 *  getAudioPlayer()
 *
 *  Audio player page
 */
function getAudioPlayer(id)
{
  stopAllMedia();
  loaderOn('player-page');
  $.ajax({
    type: 'GET',
    url: 'https://www.worldviewweekend.com/m/audio/'+ id,
    dataType: 'json',
    success: function (data) {

      var show = toArray(data.nodes);
      var show_list = "";
      var access = "";

      var i = 0;
      $.each(show, function(i) {
        show_list += '<div id="player">';
        show_list += '<span class="now">NOW PLAYING</span>';
        show_list += '<h3>' + this[0][0] + '</h3>';
        show_list += '<p>' + this[0][1] + '</p><div class="meta">';
        show_list += '<span class="date">' + this[0][3] + '</span>';
        show_list += '</div>';
        show_list += '<div id="media-player">';
        show_list += '<div class="media-play"><a href="#" class="player-play" title="Play" ></a></div>';
        show_list += '<div class="media-pause"><a href="#" class="player-pause" title="Pause" style="display:none"></a></div>';
        show_list += '<div class="media-stop"><a href="#" class="player-stop" title="Stop" style="display:none"></a></div>';
        show_list += '<div class="media-timeline"><label class="media-played"></label><input type="range" name="time-slider" class="time-slider" id="time-slider" value="0" min="0" max="100" data-highlight="true" /><label class="media-duration"></label></div>';
        show_list += '</div>';
        //show_list += '<a onClick="audioMedia.stop();">Stop</a>';

        access = this[0][4];
        audioUrl = this[0][7];

      try{
          audioMedia = new Media(this[0][7], null, null, null);
          audioTimerFirst = 1;
        }
        catch (err)
        {
          alert(err);
        }
        i++;
      });

      var no_list = "";
      no_list += '<div id="no-player">';
      no_list += '<div class="lock"><img src="img/no-player-lock.png" /></div>';
      no_list += '<h3>This content is for Premium members only.</h3>';
      no_list += '<p>Login or sign up to gain access to the Situation Room and over $45,000 in radio programs, TV programs, streaming video specials, eBooks, audio books, conference DVDs, and more.</p>';
      no_list += '</div>';

      //jStorage
      var key = $.jStorage.get("member");

      $("#player-page .player-page").empty();

      if (key == 1 || access == "Public") {
        $("#player-page .player-page").append(show_list).promise().done(function () {});
        $("#player-page #account-signup").empty();
      } else {
        $("#player-page .player-page").append(no_list).promise().done(function () {});
      }

      loaderOff('player-page');
    },
    error: function () {
      loaderRefresh('player-page');
    }
  });

}


var audioTimerID = null;
var isPlaying = 0;

/**
 *  Play functions for audio player
 */
function playAudio()
{
  $("#media-player").addClass("loader");
  $('.player-pause').show();
  $('.player-play').hide();

  $('.time-slider:first').slider({disabled: false});
    
  if(audioMedia !== null)
  audioMedia.play();

  isPlaying = 0;
    
  if(audioTimerID === null)
  {
    audioTimerID = setInterval(audioTimer,1000);
  }
  $("#media-player").removeClass("loader");
}


/**
 *  pauseAudio()
 **/
function pauseAudio()
{
  isPlaying = 0;

  $('.player-pause').hide();
  $('.player-play').show();
    
  $('.time-slider:first').slider({disabled: true});
    
  if(audioMedia !== null)
  	audioMedia.pause();

  if(audioTimerID !== null)
  {
    try
    {
      window.clearInterval(audioTimerID);
    }
    catch(err)
    {}
    audioTimerID = null;
  }
}


/**
 *  stopAudio()
 */
function stopAudio()
{
  try
  {
    if(audioMedia !== null)
    {
      audioMedia.stop();
      audioMedia.getCurrentPosition(audioPosition,audioPosition); //uses a callback method
      $('.player-pause').hide();
      $('.player-play').show();
    }
  }
  catch(err)
  {
    alert(err);
  }

  if(audioTimerID !== null)
  {
    try
    {
      window.clearInterval(audioTimerID);
    }
    catch(err)
    {}
    audioTimerID = null;
  }
}


/**
 *  updateAudioSliderPosition()
 */
function updateAudioSliderPosition(seconds)
{
  var $slider = $('.time-slider:first');

  if (seconds < $slider.attr('min'))
    $slider.val($slider.attr('min'));
  else if (seconds > $slider.attr('max'))
    $slider.val($slider.attr('max'));
  else
    $slider.val(Math.round(seconds));

  $slider.slider('refresh');
}


/**
 *  callback function for getCurrentPosition method of Media
 */
function audioPosition(position)
{
  if(position > -1)
  {
    isPlaying = 1;
    $('.media-played:first').text(Utility.formatTime(position));
    updateAudioSliderPosition(position);
  }
  else
  {
      if (isPlaying)
      {
          $('.media-played:first').text(Utility.formatTime(0));
          
          $('.time-slider:first').val(0);
          $('.time-slider:first').slider({disabled: true});
          $('.time-slider:first').slider('refresh');
          
          $('.player-pause').hide();
          $('.player-play').show();
          
          if(audioTimerID !== null)
          {
              try
              {
                  window.clearInterval(audioTimerID);
              }
              catch(err)
              {}
              audioTimerID = null;
          }
          
          audioMedia.stop();
          
          isPlaying = 0;
      }
  }
}


/**
 * audioSeekPosition()
 */
function audioSeekPosition(position)
{
  if (audioMedia === null)
    return;

  audioMedia.seekTo(position * 1000);
}


//Called to update the audio status
var audioTimerFirst = 1;
/**
 * Audio file timer method
 */
function audioTimer()
{
  try
  {
    audioMedia.getCurrentPosition(audioPosition,audioPosition); //uses a callback method

    if(audioTimerFirst === 1)
    {
        var duration = audioMedia.getDuration();

        if(duration > -1)
        {
            $('.media-duration:first').text(Utility.formatTime(duration));
            $('.time-slider:first').attr('max', Math.round(duration));
            $('.time-slider:first').slider().slider('refresh');
            $('.time-slider:first').on('slidestop', function(event) {
                                       
                                       if (event.target.value == Math.round(audioMedia.getDuration()))
                                       {
                                       audioMedia.stop();
                                       
                                       $('.media-played:first').text(Utility.formatTime(0));
                                       
                                       $('.time-slider:first').val(0);
                                       $('.time-slider:first').slider({disabled: true});
                                       $('.time-slider:first').slider('refresh');
                                       
                                       $('.player-pause').hide();
                                       $('.player-play').show();
                                       
                                       isPlaying = 0;
                                       
                                       return;
                                       }
                                       
                                       audioMedia.play();
                                       
                                       audioSeekPosition(event.target.value);
                                       
                                       if (audioTimerID === null) {
                                       audioTimerID = setInterval(audioTimer,1000);
                                       }
                                       });
            $('.time-slider:first').on('slidestart', function(event) {
                                       if (audioTimerID !== null) {
                                       window.clearInterval(audioTimerID);
                                       audioTimerID = null;
                                       
                                       audioMedia.pause();
                                       }
                                       });
            
            audioTimerFirst = 0;
        }
    }
  }
  catch(err)
  {
    alert(err);
  }
}


var showURL = "";
/**
 * video player page
 */
function getVideoPlayer(id)
{
  stopAllMedia();
  loaderOn('player-page');
  $.ajax({
    type: 'GET',
    url: 'https://www.worldviewweekend.com/m/video/'+ id,
    dataType: 'json',
    success: function (data) {

      var show = toArray(data.nodes);
      var show_list = "";
      var access = "";

      /*$.each(show, function(i) {
        show_list += '<div id="player">';
        show_list += '<span class="now">NOW PLAYING</span>';
        show_list += '<h3>' + this[0][0] + '</h3>';
        show_list += '<p>' + this[0][1] + '</p><div class="meta">';
        show_list += '<span class="date">' + this[0][3] + '</span>';
        show_list += '</div>';
        show_list += '<div class="video-play-container"><img src="./img/audioplayer/play.png" onClick="window.plugins.streamingMedia.playVideo(showURL);" /><a onClick="window.plugins.streamingMedia.playVideo(showURL);" >Click here to play</a></div>';
        show_list += '</div>';
        access = this[0][4];
        showURL = this[0][6];
      });*/

      $.each(show, function(i) {
        show_list += '<div id="player">';
        show_list += '<span class="now">NOW PLAYING</span>';
        show_list += '<h3>' + this[0][0] + '</h3>';
        show_list += '<p>' + this[0][1] + '</p><div class="meta">';
        show_list += '<span class="date">' + this[0][3] + '</span>';
        show_list += '</div>';
        show_list += '<video class="mejs-ted" preload="auto" controls="controls" poster="' + this[0][5] + '" width="100%" title="'+this[0][0]+'">';
        show_list += '<source src="'+this[0][6]+'" type="video/mp4"></video></div>';
        access = this[0][4];
      });

      var no_list = "";
      no_list += '<div id="no-player">';
      no_list += '<div class="lock"><img src="img/no-player-lock.png" /></div>';
      no_list += '<h3>This content is for Premium members only.</h3>';
      no_list += '<p>Login or sign up to gain access to the Situation Room and over $45,000 in radio programs, TV programs, streaming video specials, eBooks, audio books, conference DVDs, and more.</p>';
      no_list += '</div>';

      //jStorage
      var key = $.jStorage.get("member");

      $("#player-page .player-page").empty();

      if (key == 1 || access == "Public") {
        /* initalize video player */
        $('video').mediaelementplayer({
          // if the <video width> is not specified, this is the default
          defaultVideoWidth: 480,
          // if the <video height> is not specified, this is the default
          defaultVideoHeight: 270,
          // if set, overrides <video width>
          videoWidth: -1,
          // if set, overrides <video height>
          videoHeight: -1,
          // width of audio player
          audioWidth: 400,
          // height of audio player
          audioHeight: 30,
          // initial volume when the player starts
          startVolume: 0.8,
          // useful for <audio> player loops
          loop: false,
          // enables Flash and Silverlight to resize to content size
          enableAutosize: true,
          // the order of controls you want on the control bar (and other plugins below)
          features: ['playpause','progress','current','duration','tracks','volume','fullscreen'],
          // Hide controls when playing and mouse is not over the video
          alwaysShowControls: true,
          // force iPad's native controls
          iPadUseNativeControls: true,
          // force iPhone's native controls
          iPhoneUseNativeControls: true,
          // force Android's native controls
          AndroidUseNativeControls: true,
          // forces the hour marker (##:00:00)
          alwaysShowHours: false,
          // show framecount in timecode (##:00:00:00)
          showTimecodeFrameCount: false,
          // used when showTimecodeFrameCount is set to true
          framesPerSecond: 25,
          // turns keyboard support on and off for this instance
          enableKeyboard: true,
          // when this player starts, it will pause other players
          pauseOtherPlayers: true,
          // array of keyboard commands
          keyActions: []
        }); /* end player */

        $("#player-page .player-page").append(show_list).promise().done(function () {});
        $("#player-page #account-signup").empty();
      } else {
        $("#player-page .player-page").append(no_list).promise().done(function () {});
      }
      loaderOff('player-page');
    },
    error: function() {
      loaderOff('player-page');
    }
  });
}


/**
 * search news article result
 */
function getNewsArticle(id)
{
  loaderOn('news-article');
  $.ajax({
    type: 'GET',
    url: 'https://www.worldviewweekend.com/m/news/'+ id,
    dataType: 'json',
    success: function (data) {

      var show = toArray(data.nodes);
      var show_list = "";

      $.each(show, function(i) {
        show_list += '<div id="feature-image"><style>.article .header-image {background: url(\''+this[0][7]+'\');}</style></div>';
        show_list += '<div id="article">';
        show_list += '<div class="header-image"><header><h3>' + this[0][0] + '</h3>';
        show_list += '<div class="article-author">by ' + this[0][2] + '</div>';
        show_list += '<div class="article-date">' + this[0][3] + '</div>';
        show_list += '</div></header>';
        show_list += '<p>' + this[0][1] + '</p>';
        show_list += '</div>';
      });

      $("#news-article .news-article").empty();
      $("#header").removeClass('hide');
      //list is created, now add it
      $("#news-article .news-article").append(show_list).promise().done(function () {
        });
      loaderOff('news-article');
    },
    error: function () {
      loaderRefresh('news-article');
    }
  });
}


var adSwiper = null;
/**
 * getAds()
 */
function getAds(id) {

  $.ajax({
    type: 'GET',
    url: 'https://www.worldviewweekend.com/m/ads/'+ id,
    dataType: 'json',
    success: function (data) {

      var items = toArray(data.nodes);
      var result = "";

      $.each(items, function(i) {
        if (this[0][0] == "imagesystem") {
          result += '<div class="swiper-slide">';
          result += '<div class="slide">';
          result += '<a href="' + this[0][1] + '" onclick="window.open(this.href,\'_system\', \'location=yes\'); return false;"><img src="' + this[0][2] +'" /></a>';
          result += '</div>';
          result += '</div>';
        }
        if (this[0][0] == "image") {
          result += '<div class="swiper-slide">';
          result += '<div class="slide">';
          result += '<a href="' + this[0][1] + '" onclick="window.open(this.href,\'_blank\', \'location=yes\'); return false;"><img src="' + this[0][2] +'" /></a>';
          result += '</div>';
          result += '</div>';
        }
        if (this[0][0] == "iframe") {
          result += '<div class="swiper-slide">';
          result += '<a href="#popupFoundation" data-rel="popup"><img src="' + this[0][2] +'" /></a>';
          result += '<div data-role="popup" id="popupFoundation" data-overlay-theme="b" data-theme="a" data-tolerance="15,15" class="ui-content">';
          result += '<iframe src="' + this[0][1] +'" width="497" height="298" seamless></iframe>';
          result += '</div>';
        }
        if (this[0][0] == "text") {
          result += '<div class="swiper-slide">';
          result += '<div class="slide">';
          result += '<p>' + this[0][3] + '</p>';
          result += '</div>';
          result += '</div>';
        }
      });

      $(".swiper-container-"+id+" .swiper-wrapper").empty();
      $(".swiper-container-"+id+" .swiper-wrapper").append(result).promise().done(function () {});

      if(!(adSwiper === null))
      {
        adSwiper.destroy(true);
        adSwiper = null;
      //adSwiper.reInit();
      //adSwiper.resizeFix();
      }
      //else
      //{
      adSwiper  = $('.swiper-container-'+id).swiper({
        grabCursor: true
      //loop: true
      });
      //}

      adSwiper.reInit();
      adSwiper.resizeFix();
      window.setTimeout(bannerFix,500);

    }
  });
}


var videoAdSwiper = null;
/**
 * getVideoAds()
 */
function getVideoAds(id)
{
  $.ajax({
    type: 'GET',
    url: 'https://www.worldviewweekend.com/m/ads/'+ id,
    dataType: 'json',
    success: function (data) {

      var items = toArray(data.nodes);
      var result = "";

      $.each(items, function(i) {
        if (this[0][0] == "imagesystem") {
          result += '<div class="swiper-slide">';
          result += '<div class="slide">';
          result += '<a href="' + this[0][1] + '" onclick="window.open(this.href,\'_system\', \'location=yes\'); return false;"><img src="' + this[0][2] +'" /></a>';
          result += '</div>';
          result += '</div>';
        }
        if (this[0][0] == "image") {
          result += '<div class="swiper-slide">';
          result += '<div class="slide">';
          result += '<a href="' + this[0][1] + '" onclick="window.open(this.href,\'_blank\', \'location=yes\'); return false;"><img src="' + this[0][2] +'" /></a>';
          result += '</div>';
          result += '</div>';
        }
        if (this[0][0] == "iframe") {
          result += '<div class="swiper-slide">';
          result += '<a href="#popupFoundation" data-rel="popup"><img src="' + this[0][2] +'" /></a>';
          result += '<div data-role="popup" id="popupFoundation" data-overlay-theme="b" data-theme="a" data-tolerance="15,15" class="ui-content">';
          result += '<iframe src="' + this[0][1] +'" width="497" height="298" seamless></iframe>';
          result += '</div>';
        }
        if (this[0][0] == "text") {
          result += '<div class="swiper-slide">';
          result += '<div class="slide">';
          result += '<p>' + this[0][3] + '</p>';
          result += '</div>';
          result += '</div>';
        }
      });

      $(".swiper-container-"+id+" .swiper-wrapper").empty();
      $(".swiper-container-"+id+" .swiper-wrapper").append(result).promise().done(function () {});

      if(!(videoAdSwiper===null))
      {
        videoAdSwiper.destroy(true);
        videoAdSwiper = null;
      //slider already exists - re-initialize
      //videoAdSwiper.reInit();
      //videoAdSwiper.resizeFix();
      }
      //else
      //{
      videoAdSwiper = $('.swiper-container-'+id).swiper({
        grabCursor: true
      //loop: true
      });
      //}
      videoAdSwiper.reInit();
      videoAdSwiper.resizeFix();
      window.setTimeout(bannerFix,500);
    }
  });
}

var newsSlider = null;
/* news feature function */
function getNewsFeature(id)
{
  $.ajax({
    type: 'GET',
    url: 'https://www.worldviewweekend.com/m/features/'+ id,
    dataType: 'json',
    success: function (data) {
      var items = toArray(data.nodes);
      var result = "";

      $.each(items, function(i) {
        result += '<div class="swiper-slide">';
        result += '<div class="slide">';
        result += '<a href="" data-id="' + this[0][6] + '"><img src="' + this[0][5] +'" class="feature" />';
        result += '<div class="news-feature">' + this[0][0] + '</div></a>';
        result += '<div class="meta">' + this[0][3] + '</div>';
        result += '</div>';
        result += '</div>';
      });

      /* clear and refresh the container*/
      $(".swiper-container-"+id+" .swiper-wrapper").empty();
      $(".swiper-container-"+id+" .swiper-wrapper").append(result).promise().done(function () {});

      /* swiper instance */
      if(!(newsSlider===null))
      {
        newsSlider.destroy(true);
        newsSlider = null;
      //slider already exists - re-initialize
      //newsSlider.reInit();
      //newsSlider.resizeFix();
      }
      //else
      //{
      newsSlider = $('.swiper-container-'+id).swiper({
        //loop:true,
        grabCursor: true,
        slidesPerView: 2
      });
      //}

      newsSlider.reInit();
      newsSlider.resizeFix();

      window.setTimeout(bannerFix,500);
    }
  });
}


var personSwiper = null;
/* news feature function */
function getPeopleFeature(id)
{
  $.ajax({
    type: 'GET',
    url: 'https://www.worldviewweekend.com/m/features/'+ id,
    dataType: 'json',
    success: function (data) {
      var items = toArray(data.nodes);
      var result = "";

      $.each(items, function(i) {
        result += '<div class="swiper-slide">';
        result += '<div class="slide">';
        result += '<a href="" data-id="' + this[0][6] + '"><img src="' + this[0][5] +'" class="feature" />';
        result += '<div class="news-feature">' + this[0][0] + '</div></a>';
        result += '<div class="meta"><span class="date">News</span>';
        if ( this[0][7] != '') {
          result += '<span class="sep"> / </span>';
          result += '<span class="date">'+this[0][7]+'</span>';
        }
        if ( this[0][7] && this[0][8] != '') {
          result += '<span class="sep"> / </span>';
        } else {
          result += '<span class="sep"><br/></span>';
        }
        if ( this[0][8] != '') {
          result += '<span class="date">'+this[0][8]+'</span>';
        }
        result += '</div>';
        result += '</div>';
        result += '</div>';
      });

      /* clear and refresh the container*/
      $(".swiper-container-"+id+" .swiper-wrapper").empty();
      $(".swiper-container-"+id+" .swiper-wrapper").append(result).promise().done(function () {
        //(this).listview("refresh");
        });

      //personSwiper
      if(!(personSwiper===null))
      {
        personSwiper.destroy(true);
        personSwiper = null;
      //slider already exists - re-initialize
      //personSwiper.reInit();
      //personSwiper.resizeFix();
      }
      //else
      //{
      personSwiper = $('.swiper-container-'+id).swiper({
        //loop:true,
        grabCursor: true,
        slidesPerView: 2
      });
      //}

      personSwiper.reInit();
      personSwiper.resizeFix();

      window.setTimeout(bannerFix,500);
    }
  });
}


/**
 *  bannerFix()
 */
function bannerFix()
{
  if(adSwiper !== null)
    adSwiper.resizeFix();
  if(videoAdSwiper !== null)
    videoAdSwiper.resizeFix();
  if(newsSlider !== null)
    newsSlider.resizeFix();
  if(personSwiper !== null)
    personSwiper.resizeFix();
}

/** UTILITY METHODS *******************
 *
 *************************************/

/** // loadNoResults() maint function
 *
 ******************************/
function loadNoResults(id, back, pre, post)
{
  //alert(post);
  var result = "";
  if (pre != "") {
    result += pre;
  }
  result += '<li class="show-button">';
  result += '<div id="no-results"><h3>NO RESULTS</h3></div>';
  //result += '<p><a href="#'+back+'" data-transition="fade" class="back-button ui-btn">Back</a></p></div>';
  result += '</li>';

  if (post != "") {
    result += post;
  }

  $("#"+id+" ."+id+"").empty();
  //list is created, now add it
  $("#"+id+" ul."+id+"").append(result).promise().done(function () {
    $(this).listview().listview("refresh");
  });

  return result;
}

/* refresh page */
function refreshPage()
{
  jQuery.mobile.changePage(window.location.href, {
    allowSamePageTransition: true,
    transition: 'fade',
    reloadPage: true
  });
  $(".loader-refresh").addClass("hide");
}


/** // maint function
 *
 ******************************/
function scale( width, height, padding, border )
{
  var scrWidth = $( window ).width() - 30,
  scrHeight = $( window ).height() - 30,
  ifrPadding = 2 * padding,
  ifrBorder = 2 * border,
  ifrWidth = width + ifrPadding + ifrBorder,
  ifrHeight = height + ifrPadding + ifrBorder,
  h, w;

  if ( ifrWidth < scrWidth && ifrHeight < scrHeight ) {
    w = ifrWidth;
    h = ifrHeight;
  } else if ( ( ifrWidth / scrWidth ) > ( ifrHeight / scrHeight ) ) {
    w = scrWidth;
    h = ( scrWidth / ifrWidth ) * ifrHeight;
  } else {
    h = scrHeight;
    w = ( scrHeight / ifrHeight ) * ifrWidth;
  }

  return {
    'width': w - ( ifrPadding + ifrBorder ),
    'height': h - ( ifrPadding + ifrBorder )
  };
}


/* toArray() main function */
function toArray(obj)
{
  var result = [];
  for (var prop in obj) {
    var value = obj[prop];
    if (typeof value === 'object') {
      result.push(toArray(value));
    } else {
      result.push(value);
    }
  }
  return result;
}


/* not in use/working */
function getAuthorId(id)
{
  var show ="no author id returned";
  $.ajax({
    type: 'GET',
    url: 'https://www.worldviewweekend.com/m/getid/'+ id,
    dataType: 'json',
    success: function (data) {
      show = toArray(data.nodes);
    }
  });
  return show;
}


/**
 * getAuthorName(id)
 *
 * Returns text string of author name
 */
function getAuthorName(id)
{
  var name = "";
  $.ajax({
    type: 'GET',
    url: 'https://www.worldviewweekend.com/m/person/'+ id,
    dataType: 'json',
    success: function (data) {
      var a = toArray(data.nodes);

      $.each(a, function(i) {
        name += this[0][0];
      });

      $.jStorage.set("authorname", name);
      //var key = $.jStorage.get("member");
//alert(name);
      return name;
    }
  });
}


/* utility function to verify the user is a member or not*/
function checkMember()
{
  //$.jStorage.set("member", 1);
  var key = $.jStorage.get("member");
  if (key == 1) {
    return 1;
  } else {
    return 0;
  }
}


/* retrieve member data, display expiration date */
function memberData(id)
{
  $.ajax({
    type: 'GET',
    url: 'https://www.worldviewweekend.com/m/user/' + id,
    dataType: 'json',
    success: function (data) {
      return data;
    }
  });
}


/* logout member */
function memberLogOut()
{
  $.jStorage.deleteKey("member");
  $("#unauthenticated").removeClass("hide");
  $("#authenticated").addClass("hide");
  refreshPage();
  $( ":mobile-pagecontainer" ).pagecontainer( "change", "#radio-list", {} );
  getAds("radio");

//$( ":mobile-pagecontainer" ).pagecontainer( "change", "#account-page", {} );
}


/**
 * stopAllMedia()
 */
function stopAllMedia()
{
  stopAudio();
  try
  {
  //stop any media currently playing
  // if(videoMedia !== null)
  // {
  // videoMedia.stop();
  // videoMedia.release();
  // videoMedia = null;
  // }
  }
  catch(err)
  {}
}