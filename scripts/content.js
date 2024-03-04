


const defaultSettings={
    enableComments: true,enableWordComments:false,enableLineCut:true,
    enableShowHelp: true,enableShowLineNumbers: false
  }



let commentLines="```"
var scriptTag = document.createElement("script");
chrome.storage.local.get(defaultSettings, function(data) {
    scriptTag.src = chrome.runtime.getURL('scripts/injected_code.js');
    localStorage.setItem("SplunkCommentSettings",JSON.stringify(data))
    document.head.appendChild(scriptTag);
});


window.addEventListener("message", function(event) {
  // We only accept messages from ourselves
  if(event.data.type=="save_snippet"){
    let newSnippet = {name: event.data.name, code: event.data.code};
    chrome.storage.local.get(['snippets'], function(result) {
      // console.log(result.snippets)
      let snippets = result.snippets || {};
      snippets[newSnippet.name] = newSnippet.code;

      chrome.storage.local.set({snippets: snippets}, function() {
        // console.log({status: 'success', message: 'Data stored successfully'});
      });
    });
  }else if (event.data.type=="get_snippets"){
    chrome.storage.local.get(['snippets'], function(result) {
      event.source.postMessage({type: "retrieve_snippets",snippets: result.snippets}, event.origin);
    });
  }else if(event.data.type=="delete_snippet"){
    // console.log("deleting snippet")
    chrome.storage.local.get(['snippets'], function(result) {
      let snippets = result.snippets || {};
      delete snippets[event.data.name];
      chrome.storage.local.set({snippets: snippets}, function() {
        // console.log({status: 'success', message: 'Data stored successfully'});
      });
    });
  }
});





