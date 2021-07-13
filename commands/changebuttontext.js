/*CMD
  command: changeButtonText
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Please input new text
  keyboard: 
  aliases: 
CMD*/

var message_id = User.getProperty("message_for_editing");

var newTitle = message;

editKeyboardButtonTitle(newTitle, "customBtn")

if(message_id){
  Bot.editInlineKeyboard(defaultKeyboard, message_id);
  Bot.sendMessage("Done")
}else{
  Bot.sendMessage("Not worked. Try again later");
}
