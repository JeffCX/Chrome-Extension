/*
<div>
Spend:
<h3 id='budget'>0</h3>
<input type='text' id='spend'>
<button id='AddSpend'>Add spend</button>
</div>

<div>
limit:
<h3 id='budget'>0</h3>
<input type='text' id='spend'>
<button>Set limit</button>
</div>*/


var budget = document.getElementById("budget")
var spend = document.getElementById("spend")
var AddSpend = document.getElementById("AddSpend")

var notify = {
    type:"basic",
    title:"damn it",
    message : "you spend lots of money"
}

chrome.notifications.create("gan",notify)

chrome.storage.sync.get(["spend"],function(data){
    if(data.spend){
        budget.textContent = data.spend
    }
})

AddSpend.addEventListener("click",()=>{
    
    var data = parseInt(budget.textContent)
    budget.textContent = ""

   budget.textContent = data + parseInt(spend.value)
   spend.value=""

   if(budget.textContent >=500){

       var notify = {
           type:"basic",
           title:"damn it",
           message : "you spend lots of money"
       }

       chrome.notifications.create("gan",notify)
   }

   chrome.storage.sync.set({
       "spend": budget.textContent
   },function(){
    var notify = {
        type:"basic",
        title:"damn it",
        message : "you spend lots of money"
    }
    
    chrome.notifications.create("gan",notify)
        chrome.browserAction.setBadgeText({"text":budget.textContent})
   })


})