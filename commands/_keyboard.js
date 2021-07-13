/*CMD
  command: /keyboard
  help: show inline keyboard
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

Bot.sendInlineKeyboard(
  defaultKeyboard,
   "Please make a choice. After that, another command `/touch` will be started with parameters",
  { on_result: "/onKeyboardSended"}
)
