
let oldValue;

chrome.storage.sync.get(["redirectAddress"], function(result){
  oldValue = result.redirectAddress;
  document.getElementById("redirectAddress").value = result.redirectAddress;
});

// More checking can be done here
function isvalidUrl(url){
  return url.startsWith("http://") || url.startsWith("https://");
}

function save(){
    let newValue = document.getElementById("redirectAddress").value;

    if(!isvalidUrl(newValue)){
      document.getElementById("redirectAddress").value = oldValue;
      alert("Invalid URL");
    }


    chrome.storage.sync.set({ "redirectAddress": newValue}, function() {
      oldValue = newValue;
      alert("Saved");
      });
}

document.getElementById("save").addEventListener("click", save);
