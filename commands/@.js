/*CMD
  command: @
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let defaultKeyboard = [
    [ { title: "Go to Google", url: "https://google.com"} ],

    [
       { title: "Delete this button", command: "touchButton delete", name: "deletedBtn" },
       { title: "Set text for this button", command: "touchButton setText", name: "changedBtn" }
    ],

    [ { title: "Set random text for this button", command: "/randomText", name: "randomBtn" } ],

    [ { title: "Set CUSTOM text for this button", command: "changeButtonText", name: "customBtn" } ],

    [ { title: "Show alert on top", command: "/alert top" },
      { title: "Show alert", command: "/alert" }  ]
]

// edit button with new title
function editKeyboardButtonTitle(newTitle, buttonName){
   var btn;
   for(var row_index in defaultKeyboard){
     for(var btn_index in defaultKeyboard[row_index]){
       btn = defaultKeyboard[row_index][btn_index]
       if(btn.name == buttonName){
         btn.title = newTitle;
         defaultKeyboard[row_index][btn_index] = btn;
         return
       }
     }
   }
}

// remove button
function removeKeyboardButton(buttonName){
   var keyboard, row, btn;
   keyboard = [];
   row = [];
   for(var row_index in defaultKeyboard){
     for(var btn_index in defaultKeyboard[row_index]){
       btn = defaultKeyboard[row_index][btn_index]
       if(btn.name!=buttonName){
         row.push(btn)
       }
     }
     
     keyboard.push(row);
     row = [];
   }
   defaultKeyboard = keyboard;
}
