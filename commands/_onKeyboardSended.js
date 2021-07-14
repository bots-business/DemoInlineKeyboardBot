/*CMD
  command: /onKeyboardSended
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

// You can view all result via:
// Bot.inspect(options);

let message_for_editing = options.result.message_id;
User.setProperty("message_for_editing", message_for_editing, "integer");

Bot.sendMessage("Created message_id: " + message_for_editing);


