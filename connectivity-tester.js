var settings = {
  providerEndPoints: [
    {
      id: "gigya_cdn",
      label: "Gigya CDN",
      services: [
        { label: "redirect", uri: "http://cdn.gigya.com/JS/gigya.js", type: "ajax", method: "GET" },
        { label: "redirect-secure", uri: "https://cdns.gigya.com/JS/gigya.js", type: "ajax", method: "GET" }
      ]
    },
    {
      id: "gigya_socialize",
      label: "Gigya Socialize",
      services: [
        { label: "us1", uri: "http://socialize.us1.gigya.com/socialize.getUserInfo", type: "ajax", method: "GET"  },
        { label: "us1-secure", uri: "https://socialize.us1.gigya.com/socialize.getUserInfo", type: "ajax", method: "GET"  },
        { label: "eu1", uri: "http://socialize.eu1.gigya.com/socialize.getUserInfo", type: "ajax", method: "GET"  },
        { label: "eu1-secure", uri: "https://socialize.eu1.gigya.com/socialize.getUserInfo", type: "ajax", method: "GET"  },
        { label: "au1", uri: "http://socialize.au1.gigya.com/socialize.getUserInfo", type: "ajax", method: "GET"  },
        { label: "au1-secure", uri: "https://socialize.au1.gigya.com/socialize.getUserInfo", type: "ajax", method: "GET"  }
      ]
    },
    {
      id: "gigya_accounts",
      label: "Gigya Accounts",
      services: [
        { label: "us1", uri: "http://accounts.us1.gigya.com/accounts.getAccountInfo", type: "ajax", method: "GET"  },
        { label: "us1-secure", uri: "https://accounts.us1.gigya.com/accounts.getAccountInfo", type: "ajax", method: "GET"  },
        { label: "eu1", uri: "http://accounts.eu1.gigya.com/accounts.getAccountInfo", type: "ajax", method: "GET"  },
        { label: "eu1-secure", uri: "https://accounts.eu1.gigya.com/accounts.getAccountInfo", type: "ajax", method: "GET"  },
        { label: "au1", uri: "http://accounts.au1.gigya.com/accounts.getAccountInfo", type: "ajax", method: "GET"  },
        { label: "au1-secure", uri: "https://accounts.au1.gigya.com/accounts.getAccountInfo", type: "ajax", method: "GET"  }
        ]
    },
    {
      id: "gigya_ids",
      label: "Gigya Identity Storage",
      services: [
        { label: "us1", uri: "http://ids.us1.gigya.com/ids.getAccountInfo", type: "ajax", method: "GET"  },
        { label: "us1-secure", uri: "https://ids.us1.gigya.com/ids.getAccountInfo", type: "ajax", method: "GET"  },
        { label: "eu1", uri: "http://ids.eu1.gigya.com/ids.getAccountInfo", type: "ajax", method: "GET"  },
        { label: "eu1-secure", uri: "https://ids.eu1.gigya.com/ids.getAccountInfo", type: "ajax", method: "GET"  },
        { label: "au1", uri: "http://ids.au1.gigya.com/ids.getAccountInfo", type: "ajax", method: "GET"  },
        { label: "au1-secure", uri: "https://ids.au1.gigya.com/ids.getAccountInfo", type: "ajax", method: "GET"  }
      ]
    },
    {
      id: "gigya_comments",
      label: "Gigya Comments",
      services: [
        { label: "us1", uri: "http://comments.us1.gigya.com/comments.getStreamInfo", type: "ajax", method: "GET"  },
        { label: "us1-secure", uri: "https://comments.us1.gigya.com/comments.getStreamInfo", type: "ajax", method: "GET"  },
        { label: "eu1", uri: "http://comments.eu1.gigya.com/comments.getStreamInfo", type: "ajax", method: "GET"  },
        { label: "eu1-secure", uri: "https://comments.eu1.gigya.com/comments.getStreamInfo", type: "ajax", method: "GET"  },
        { label: "au1", uri: "http://comments.au1.gigya.com/comments.getStreamInfo", type: "ajax", method: "GET"  },
        { label: "au1-secure", uri: "https://comments.au1.gigya.com/comments.getStreamInfo", type: "ajax", method: "GET"  }
      ]
    },
    {
      id: "gigya_gm",
      label: "Gigya Game Mechanics",
      services: [
        { label: "us1", uri: "http://gm.us1.gigya.com/gm.getChallengeStatus", type: "ajax", method: "GET"  },
        { label: "us1-secure", uri: "https://gm.us1.gigya.com/gm.getChallengeStatus", type: "ajax", method: "GET"  },
        { label: "eu1", uri: "http://gm.eu1.gigya.com/gm.getChallengeStatus", type: "ajax", method: "GET"  },
        { label: "eu1-secure", uri: "https://gm.eu1.gigya.com/gm.getChallengeStatus", type: "ajax", method: "GET"  },
        { label: "au1", uri: "http://gm.au1.gigya.com/gm.getChallengeStatus", type: "ajax", method: "GET"  },
        { label: "au1-secure", uri: "https://gm.au1.gigya.com/gm.getChallengeStatus", type: "ajax", method: "GET"  }
      ]
    },
    {
      id: "gigya_fidm",
      label: "Gigya Federated Identity Management (SAML)",
      services: [
        { label: "us1", uri: "http://fidm.us1.gigya.com/fidm.saml.getConfig", type: "ajax", method: "GET"  },
        { label: "us1-secure", uri: "https://fidm.us1.gigya.com/fidm.saml.getConfig", type: "ajax", method: "GET"  },
        { label: "eu1", uri: "http://fidm.eu1.gigya.com/fidm.saml.getConfig", type: "ajax", method: "GET"  },
        { label: "eu1-secure", uri: "https://fidm.eu1.gigya.com/fidm.saml.getConfig", type: "ajax", method: "GET"  },
        { label: "au1", uri: "http://fidm.au1.gigya.com/fidm.saml.getConfig", type: "ajax", method: "GET"  },
        { label: "au1-secure", uri: "https://fidm.au1.gigya.com/fidm.saml.getConfig", type: "ajax", method: "GET"  }
      ]
    },
    {
      id: "gigya_ds",
      label: "Gigya Data Store",
      services: [
        { label: "us1", uri: "http://ds.us1.gigya.com/ds.search", type: "ajax", method: "GET"  },
        { label: "us1-secure", uri: "https://ds.us1.gigya.com/ds.search", type: "ajax", method: "GET"  },
        { label: "eu1", uri: "http://ds.eu1.gigya.com/ds.search", type: "ajax", method: "GET"  },
        { label: "eu1-secure", uri: "https://ds.eu1.gigya.com/ds.search", type: "ajax", method: "GET"  },
        { label: "au1", uri: "http://ds.au1.gigya.com/ds.search", type: "ajax", method: "GET"  },
        { label: "au1-secure", uri: "https://ds.au1.gigya.com/ds.search", type: "ajax", method: "GET"  }
      ]
    },
    {
      id: "gigya_reports",
      label: "Gigya Reports",
      services: [
        { label: "us1", uri: "http://reports.us1.gigya.com/reports.getSocializeStats", type: "ajax", method: "GET"  },
        { label: "us1-secure", uri: "https://reports.us1.gigya.com/reports.getSocializeStats", type: "ajax", method: "GET"  },
        { label: "eu1", uri: "http://reports.eu1.gigya.com/reports.getSocializeStats", type: "ajax", method: "GET"  },
        { label: "eu1-secure", uri: "https://reports.eu1.gigya.com/reports.getSocializeStats", type: "ajax", method: "GET"  },
        { label: "au1", uri: "http://reports.au1.gigya.com/reports.getSocializeStats", type: "ajax", method: "GET"  },
        { label: "au1-secure", uri: "https://reports.au1.gigya.com/reports.getSocializeStats", type: "ajax", method: "GET"  }
      ]
    },
    {
      id: "gigya_chat",
      label: "Gigya Chat",
      services: [
        { label: "us1", uri: "http://chat.us1.gigya.com/chat.getMessages", type: "ajax", method: "GET"  },
        { label: "us1-secure", uri: "https://chat.us1.gigya.com/chat.getMessages", type: "ajax", method: "GET"  },
        { label: "eu1", uri: "http://chat.eu1.gigya.com/chat.getMessages", type: "ajax", method: "GET"  },
        { label: "eu1-secure", uri: "https://chat.eu1.gigya.com/chat.getMessages", type: "ajax", method: "GET"  },
        { label: "au1", uri: "http://chat.au1.gigya.com/chat.getMessages", type: "ajax", method: "GET"  },
        { label: "au1-secure", uri: "https://chat.au1.gigya.com/chat.getMessages", type: "ajax", method: "GET"  }
      ]
    },
    {
      id: "facebook",
      label: "Facebook",
      services: [
        { label: "www", uri: "http://www.facebook.com", type: "ajax", method: "GET" },
        { label: "Open Graph", uri: "https://graph.facebook.com", type: "ajax", method: "GET" }
      ]
    },
    {
      id: "twitter",
      label: "Twitter",
      services: [
        { label: "www", uri: "http://www.twitter.com", type: "ajax", method: "GET" }//,
        //{ label: "OAuth", uri: "https://api.twitter.com/oauth/request_token", type: "oauth", method: "GET" }
      ]
    },
    {
      id: "googleplus",
      label: "Google+",
      services: [
        { label: "www", uri: "https://plus.google.com", type: "ajax", method: "GET"},
        { label: "People API", uri: "https://www.googleapis.com/plus/v1/people/", type: "ajax", method: "GET" }
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
  var row = $("#serviceRow" + rowId);
  if (!row.length) {
    $("#" + provider.id).append("<div id='" + provider.id + "Row" + rowId + "' class='row'></div>");
  }
  var e = $("#" + provider.id + "_" + serviceId.camelize());
  if (!e.length) {
    $("#" + provider.id + "Row" + rowId).append("<div id='" + provider.id + "_" + serviceId.camelize() + "' class='" + serviceColClass + "'>" + serviceId + "</div>");
    serviceCounts[provider.id]++;
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

function runConnectionTests(elementId) {
  _.forEach(settings.providerEndPoints, function(provider) {
    // Provider
    // Insert Heading into page
    addProviderHeading(elementId, provider);

    _.forEach(provider.services, function(service) {
      // Service
      // Insert Element into page
      addServiceHeading(provider, service.label);

      if (service.type === "ajax") {
        try {
          // Perform a request in a asynchronoous way.
          $.ajax({
            type: service.method,
            dataType: "jsonp",
            url: service.uri,
            timeout: 5000,
            success : function (response, textS, xhr) {
              updateStatus(provider, service.label, "pass", service.uri, null);
            },
            error : function (jqXHR, textStatus, errorThrown) {
              if (textStatus==='timeout') {
                updateStatus(provider, service.label, "fail", service.uri, "timed out");
              }
              else if (jqXHR.status===400 || jqXHR.status===403 || jqXHR.status===404)  {
                updateStatus(provider, service.label, "fail", service.uri, jqXHR.status);
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
    });
  });
}

initPage();
