chrome.runtime.onMessage.addListener(function(request,sender,Res){
    if(request.todo==="showPageAction"){
        chrome.tabs.query({active:true,currentWindow:true},function(tabs){
            chrome.pageAction.show(tabs[0].id)
        })
    }
})
