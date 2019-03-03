/*CMD
  command: changebuttontext
  help: 
  need_reply: true
  auto_retry_time: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

message_id = Bot.getProperty("LastMessageID");
newTitle = message;
var buttons = [
    {title: "Go to Google", url: "https://google.com"},
    {title: "delete this button", command: "touchButton delete" },
    {title: "set text for this button", command: "touchButton setText" },
    {title: newTitle, command: "touchButton3" },
]
if(message_id){
  Bot.editInlineKeyboard(buttons, message_id);
  Bot.sendMessage("Done")
}else{
  Bot.sendMessage("Not worked. Try agan later");
}
