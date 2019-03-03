/*CMD
  command: /keyboard
  help: show inline keyboard
  need_reply: false
  auto_retry_time: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var buttons = [
    [ {title: "Go to Google", url: "https://google.com"},
      {title: "delete this button", command: "touchButton delete" } ],
    [ {title: "set text for this button", command: "touchButton setText" } ],
    [ {title: "set CUSTOM text for this button", command: "touchButton3" } ]
]
Bot.sendInlineKeyboard(buttons, "Please make a choice. After that, another command `/touch` will be started with parameters")
