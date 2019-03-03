/*CMD
  command: touchbutton
  help: 
  need_reply: 
  auto_retry_time: 

  <<ANSWER

  ANSWER
  keyboard: 
  aliases: 
CMD*/

Bot.sendMessage( user.first_name + ", your choice is: " + params);

// update keyboard now
var buttons = [
    {title: "Go to Google", url: "https://google.com"},
    {title: "delete this button", command: "touchButton delete" },
    {title: "THIS IS NEW TEXT 😀", command: "touchButton setText" },
    {title: "set CUSTOM text for this button", command: "touchButton3" },
]

if(params=="delete"){
   buttons = [
    {title: "Go to Google", url: "https://google.com"},
    {title: "set text for this button", command: "touchButton setText" },
    {title: "set CUSTOM text for this button", command: "touchButton3" },
   ];
}

Bot.editInlineKeyboard(buttons);
