/*CMD
  command: touchbutton3
  help: 
  need_reply: false
  auto_retry_time: 
  answer: Please input text for button
  keyboard: 
  aliases: 
CMD*/

if(request.message){
  msg_id =  request.message.message_id
  Bot.setProperty("LastMessageID", msg_id, "integer");
  Bot.runCommand("changeButtonText");
}else{
  Bot.sendMessage("no request message. Seems you do not touch any button");
}
