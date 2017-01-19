var defaults = {
  services: {
    timeout: 5000,
    type: "ajax",
    method: "GET"
  }
}

var settings = {
  providerEndPoints: [
    {
      id: "gigya_cdn",
      label: "Gigya CDN",
      services: [
        { label: "cdn", uri: "http://cdn.gigya.com/JS/gigya.js" },
        { label: "cdn-secure", uri: "https://cdns.gigya.com/JS/gigya.js" },
        { label: "cdn1", uri: "http://cdn1.gigya.com/JS/gigya.js" },
        { label: "cdn2", uri: "http://cdn2.gigya.com/JS/gigya.js" },
        { label: "cdn3", uri: "http://cdn3.gigya.com/JS/gigya.js" },
        { label: "cdn4", uri: "http://cdn4.gigya.com/JS/gigya.js" },
        { label: "cdn5", uri: "http://cdn5.gigya.com/JS/gigya.js" }
      ]
    },
    {
      id: "gigya_socialize",
      label: "Gigya Socialize",
      services: [
        { label: "us1", uri: "http://socialize.us1.gigya.com/socialize.getUserInfo" },
        { label: "eu1", uri: "http://socialize.eu1.gigya.com/socialize.getUserInfo" },
        { label: "au1", uri: "http://socialize.au1.gigya.com/socialize.getUserInfo" },
        { label: "us1-secure", uri: "https://socialize.us1.gigya.com/socialize.getUserInfo" },
        { label: "eu1-secure", uri: "https://socialize.eu1.gigya.com/socialize.getUserInfo" },
        { label: "au1-secure", uri: "https://socialize.au1.gigya.com/socialize.getUserInfo" }
      ]
    },
    {
      id: "gigya_accounts",
      label: "Gigya Accounts",
      services: [
        { label: "us1", uri: "http://accounts.us1.gigya.com/accounts.getAccountInfo" },
        { label: "eu1", uri: "http://accounts.eu1.gigya.com/accounts.getAccountInfo" },
        { label: "au1", uri: "http://accounts.au1.gigya.com/accounts.getAccountInfo" },
        { label: "us1-secure", uri: "https://accounts.us1.gigya.com/accounts.getAccountInfo" },
        { label: "eu1-secure", uri: "https://accounts.eu1.gigya.com/accounts.getAccountInfo" },
        { label: "au1-secure", uri: "https://accounts.au1.gigya.com/accounts.getAccountInfo" }
      ]
    },
    {
      id: "gigya_ids",
      label: "Gigya Identity Storage",
      services: [
        { label: "us1", uri: "http://ids.us1.gigya.com/ids.getAccountInfo" },
        { label: "eu1", uri: "http://ids.eu1.gigya.com/ids.getAccountInfo" },
        { label: "au1", uri: "http://ids.au1.gigya.com/ids.getAccountInfo" },
        { label: "us1-secure", uri: "https://ids.us1.gigya.com/ids.getAccountInfo" },
        { label: "eu1-secure", uri: "https://ids.eu1.gigya.com/ids.getAccountInfo" },
        { label: "au1-secure", uri: "https://ids.au1.gigya.com/ids.getAccountInfo" }
      ]
    },
    {
      id: "gigya_comments",
      label: "Gigya Comments",
      services: [
        { label: "us1", uri: "http://comments.us1.gigya.com/comments.getStreamInfo" },
        { label: "eu1", uri: "http://comments.eu1.gigya.com/comments.getStreamInfo" },
        { label: "au1", uri: "http://comments.au1.gigya.com/comments.getStreamInfo" },
        { label: "us1-secure", uri: "https://comments.us1.gigya.com/comments.getStreamInfo" },
        { label: "eu1-secure", uri: "https://comments.eu1.gigya.com/comments.getStreamInfo" },
        { label: "au1-secure", uri: "https://comments.au1.gigya.com/comments.getStreamInfo" }
      ]
    },
    {
      id: "gigya_gm",
      label: "Gigya Game Mechanics",
      services: [
        { label: "us1", uri: "http://gm.us1.gigya.com/gm.getChallengeStatus" },
        { label: "eu1", uri: "http://gm.eu1.gigya.com/gm.getChallengeStatus" },
        { label: "au1", uri: "http://gm.au1.gigya.com/gm.getChallengeStatus" },
        { label: "us1-secure", uri: "https://gm.us1.gigya.com/gm.getChallengeStatus" },
        { label: "eu1-secure", uri: "https://gm.eu1.gigya.com/gm.getChallengeStatus" },
        { label: "au1-secure", uri: "https://gm.au1.gigya.com/gm.getChallengeStatus" }
      ]
    },
    {
      id: "gigya_fidm",
      label: "Gigya Federated Identity Management (SAML)",
      services: [
        { label: "us1", uri: "http://fidm.us1.gigya.com/fidm.saml.getConfig" },
        { label: "eu1", uri: "http://fidm.eu1.gigya.com/fidm.saml.getConfig" },
        { label: "au1", uri: "http://fidm.au1.gigya.com/fidm.saml.getConfig" },
        { label: "us1-secure", uri: "https://fidm.us1.gigya.com/fidm.saml.getConfig" },
        { label: "eu1-secure", uri: "https://fidm.eu1.gigya.com/fidm.saml.getConfig" },
        { label: "au1-secure", uri: "https://fidm.au1.gigya.com/fidm.saml.getConfig" }
      ]
    },
    {
      id: "gigya_ds",
      label: "Gigya Data Store",
      services: [
        { label: "us1", uri: "http://ds.us1.gigya.com/ds.search" },
        { label: "eu1", uri: "http://ds.eu1.gigya.com/ds.search" },
        { label: "au1", uri: "http://ds.au1.gigya.com/ds.search" },
        { label: "us1-secure", uri: "https://ds.us1.gigya.com/ds.search" },
        { label: "eu1-secure", uri: "https://ds.eu1.gigya.com/ds.search" },
        { label: "au1-secure", uri: "https://ds.au1.gigya.com/ds.search" }
      ]
    },
    {
      id: "gigya_reports",
      label: "Gigya Reports",
      services: [
        { label: "us1", uri: "http://reports.us1.gigya.com/reports.getSocializeStats" },
        { label: "eu1", uri: "http://reports.eu1.gigya.com/reports.getSocializeStats" },
        { label: "au1", uri: "http://reports.au1.gigya.com/reports.getSocializeStats" },
        { label: "us1-secure", uri: "https://reports.us1.gigya.com/reports.getSocializeStats" },
        { label: "eu1-secure", uri: "https://reports.eu1.gigya.com/reports.getSocializeStats" },
        { label: "au1-secure", uri: "https://reports.au1.gigya.com/reports.getSocializeStats" }
      ]
    },
    {
      id: "gigya_admin",
      label: "Gigya Admin",
      services: [
        { label: "us1", uri: "http://admin.us1.gigya.com/admin.getSiteConfig" },
        { label: "eu1", uri: "http://admin.eu1.gigya.com/admin.getSiteConfig" },
        { label: "au1", uri: "http://admin.au1.gigya.com/admin.getSiteConfig" },
        { label: "us1-secure", uri: "https://admin.us1.gigya.com/admin.getSiteConfig" },
        { label: "eu1-secure", uri: "https://admin.eu1.gigya.com/admin.getSiteConfig" }//,
        //{ label: "au1-secure", uri: "https://admin.au1.gigya.com/admin.getSiteConfig" }
      ]
    },
    {
      id: "gigya_counters",
      label: "Gigya Counters",
      services: [
        { label: "root", uri: "http://gscounters.gigya.com/gscounters.sendReport" },
        { label: "root-secure", uri: "https://gscounters.gigya.com/gscounters.sendReport" },
        { label: "us1", uri: "http://gscounters.us1.gigya.com/gscounters.sendReport" },
        { label: "eu1", uri: "http://gscounters.eu1.gigya.com/gscounters.sendReport" },
        { label: "au1", uri: "http://gscounters.au1.gigya.com/gscounters.sendReport" },
        { label: "us1-secure", uri: "https://gscounters.us1.gigya.com/gscounters.sendReport" },
        { label: "eu1-secure", uri: "https://gscounters.eu1.gigya.com/gscounters.sendReport" },
        { label: "au1-secure", uri: "https://gscounters.au1.gigya.com/gscounters.sendReport" }
      ]
    },
    {
      id: "gigya_console",
      label: "Gigya Console",
      services: [
        { label: "root", uri: "https://console.gigya.com" }
      ]
    },
    {
      id: "gigya_minify",
      label: "Gigya URL Shorteners",
      services: [
        { label: "fw_to", uri: "http://fw.to", timeout: 10000 },
        { label: "shr_gs", uri: "http://shr.gs", timeout: 10000 },
        { label: "vst_to", uri: "http://vst.to", timeout: 10000 }
      ]
    },
    {
      id: "facebook",
      label: "Facebook",
      services: [
        //{ label: "www", uri: "https://www.facebook.com/login.php", type: "web" },
        { label: "Open Graph", uri: "https://graph.facebook.com" }
      ]
    },
    {
      id: "twitter",
      label: "Twitter",
      services: [
        //{ label: "www", uri: "https://twitter.com/login/", type: "web" },
        { label: "API", uri: "https://api.twitter.com/1.1/search/tweets.json?q=%40twitterapi" }//,
        //{ label: "OAuth", uri: "https://api.twitter.com/oauth/request_token", type: "oauth", method: "GET" }
      ]
    },
    {
      id: "googleplus",
      label: "Google+",
      services: [
        //{ label: "www", uri: "https://plus.google.com/", type: "web" },
        { label: "login", uri: "https://accounts.google.com/ServiceLogin?service=oz&passive=1209600&continue=https://plus.google.com/?gpsrc%3Dgplp0#identifier" },
        { label: "People API", uri: "https://www.googleapis.com/plus/v1/people/" }
      ]
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      services: [
        //{ label: "www", uri: "https://www.linkedin.com/uas/login", type: "web" },
        { label: "People API", uri: "https://api.linkedin.com/v1/people/~?format=json" }
      ]
    }
  ]
};

var results = {};
var providerCount = 0;
var serviceCounts = {};

var numColumns = 12;
var numServiceCols = 3;
var numProviderCols = 3;

var providerColClass = "";
var serviceColClass = "";

function initPage() {
  providerColClass = "col-md-" + (Math.floor(numColumns / numProviderCols));
  serviceColClass = "col-md-" + (Math.floor(numColumns / numServiceCols));
}

function addProviderHeading(containerId, provider) {
  var e = $("#" + provider.id);
  if (!e.length) {
    rowId = Math.floor(providerCount / numProviderCols);
    var row = $("#providerRow" + rowId);
    if (!row.length) {
      $("#" + containerId).append("<div id='providerRow" +  rowId + "' class='row'></div>");
    }
    $("#providerRow" + rowId).append("<div class='" + providerColClass + "'><div id='" + provider.id + "' class='bs-callout bs-test'><h4>" + provider.label + "</h4></div></div>");
    providerCount++;
  }
}

function addServiceHeading(provider, serviceId) {
  if (serviceCounts[provider.id] === undefined) {
    serviceCounts[provider.id] = 0;
  }
  rowId = Math.floor(serviceCounts[provider.id] / numServiceCols);
  var row = $("#" + provider.id + "Row" + rowId);
  if (!row.length) {
    $("#" + provider.id).append("<div id='" + provider.id + "Row" + rowId + "' class='row'></div>");
  }
  var e = $("#" + provider.id + "_" + serviceId.camelize());
  if (!e.length) {
    $("#" + provider.id + "Row" + rowId).append("<div id='" + provider.id + "_" + serviceId.camelize() + "' class='" + serviceColClass + "'><img src='./img/loading.gif' title='loading'/>" + serviceId + "</div>");
    serviceCounts[provider.id]++;
  } else {
    $("#" + provider.id + "_" + serviceId.camelize()).html("<img src='./img/loading.gif' title='loading'/>" + serviceId + "</div>");
  }
}

function getStatusImg(status, title) {
  var img = "";
  switch (status) {
    case "pass":
      img = "<img src='img/pass.png' title='" + title + "'/>";
      break;
    case "fail":
      img = "<img src='img/fail.png' title='" + title + "'/>";
      break;
    default:
      img = "<img src='img/info.png' title='" + title + "'/>";
      break
  }
  return img;
}

function updateStatus(provider, serviceId, status, url, code) {
  if (code === null) {
    code = "";
  } else {
    code = "(" + code + ")"
  }
  var e = $("#" + provider.id + "_" + serviceId.camelize());
  e.html(getStatusImg(status, url + " " + code) + " " + serviceId);
  updateResult(provider.id, serviceId, status, code);
}

function updateResult(provider, service, status, code) {
  if (results[provider] === undefined) {
    results[provider] = {};
  }
  rp = results[provider];
  if (rp[service] === undefined) {
    rp[service] = {};
  }
  ps = rp[service] = {
    "status": status,
    "code": code
  };
}

function runConnectionTests(resultsElementId) {
  _.forEach(settings.providerEndPoints, function(provider) {
    // Provider
    // Insert Heading into page
    addProviderHeading(resultsElementId, provider);

    _.forEach(provider.services, function(base_service) {
      // Service
      // Insert Element into page
      var service = _.clone(defaults.services);
      service = _.merge(service, base_service);

      addServiceHeading(provider, service.label);

      if (service.type === "ajax") {
        try {
          // Perform a request in a asynchronoous way.
          $.ajax({
            type: service.method,
            dataType: "jsonp",
            url: service.uri,
            timeout: service.timeout,
            success : function (response, textS, xhr) {
              updateStatus(provider, service.label, "pass", service.uri, null);
            },
            error : function (jqXHR, textStatus, errorThrown) {
              if (textStatus==='timeout') {
                updateStatus(provider, service.label, "fail", service.uri, "timed out");
              }
              else if (jqXHR.status===400 || jqXHR.status===403 || jqXHR.status===404)  {
                updateStatus(provider, service.label, "fail", service.uri, jqXHR.status);
                console.log(service.label + ":" + textStatus + ":" + errorThrown)
              }
              else {
                updateStatus(provider, service.label, "pass", service.uri, jqXHR.status);
              }
            }
          });
        } catch (excepction) {

        }
      }
      else if (service.type === "oauth") {
        // Do an OAUTH request, get a signed token back from the server side endpoint
        var m;
        try {
          $.ajax({
            type: "GET",
            dataType: "json",
            url: "getOAuthParams.php"
          });
        } catch (exception) {

        }
      }
      else if (service.type === "web") {
        var oReq = new XMLHttpRequest();
        oReq.addEventListener("load", function(e) {
          updateStatus(provider, service.label, "pass", service.uri, jqXHR.status);
        }, false);
        oReq.addEventListener("error", function(e) {
          updateStatus(provider, service.label, "fail", service.uri, jqXHR.status);
        }, false);
        oReq.open("GET",service.uri);
        oReq.send(null);
      }
    });
  });
}

function runReport(reportElementId) {
  $('#' + reportElementId).text(JSON.stringify(results, null, "  "));
}

function clearSelection() {
  if (window.getSelection) {
    if (window.getSelection().empty) {  // Chrome
      window.getSelection().empty();
    } else if (window.getSelection().removeAllRanges) {  // Firefox
      window.getSelection().removeAllRanges();
    }
  } else if (document.selection) {  // IE?
    document.selection.empty();
  }
}

function selectText(containerId) {
  clearSelection();
  if (document.selection) {
    var range = document.body.createTextRange();
    range.moveToElementText(document.getElementById(containerId));
    range.select();
  } else if (window.getSelection) {
    var range = document.createRange();
    range.selectNode(document.getElementById(containerId));
    window.getSelection().addRange(range);
  }
}

initPage();
