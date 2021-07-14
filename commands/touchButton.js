/*CMD
  command: touchButton
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER
  keyboard: 
  aliases: 
CMD*/

Bot.sendMessage( user.first_name + ", your choice is: " + params);

// update keyboard now
if(params=="setText"){
  editKeyboardButtonTitle("THIS IS NEW TEXT 😀", "changedBtn")
}

// remove button
if(params=="delete"){
  removeKeyboardButton("deletedBtn")
}

Bot.editInlineKeyboard(defaultKeyboard);
