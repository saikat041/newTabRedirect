// More checking can be done here
function isvalidUrl(url){
    return url.startsWith("http://") || url.startsWith("https://");
}

chrome.storage.sync.get(['redirectAddress'], function(result) {

    let redirectAddress = "https://www.google.com";  // default value
    let newRedirectAddress = result.redirectAddress;

    if(newRedirectAddress && isvalidUrl(newRedirectAddress)){
        redirectAddress = newRedirectAddress;
    }

    window.location = redirectAddress;

  });

