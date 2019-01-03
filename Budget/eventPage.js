var contextMenuItem = {
    "id":"spendMoney",
    "title":"SpendMoney",
    "contexts":["selection"]
}

chrome.contextMenus.create(contextMenuItem)

chrome.contextMenus.onClicked.addListener((data)=>{
    if(data.menuItemId=="spendMoney"){
        alert(data.selectionText)
    }
})