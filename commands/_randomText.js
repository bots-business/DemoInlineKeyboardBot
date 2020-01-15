/*CMD
  command: /randomText
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let quotesArr = [
  { author: "Mark Twain",
    text: "The first half of life consists of the capacity to enjoy without the chance, the last half consists of the chance without the capacity." },
  { author: "Seneca",
    text: "While we are postponing, life speeds by. "},
  { author: "Galsworthy",
    text: "If you do not think about the future, you cannot have one."},
  { author: "Aristotle",
    text: "The roots of education are bitter, but the fruit is sweet."},
  { author: "Herbert Spencer",
    text: "The great aim of education is not knowledge but action."},
  { author: "William James 'Will' Durant",
    text: "Education is a progressive discovery of our own ignorance."},
  { author: "Oscar Wilde",
    text: "Always forgive your enemies; nothing annoys them so much. "},
  { author: "Oscar Wilde",
    text: "I am not young enough to know everything. "},
  { author: "Mark Twain",
    text: "A banker is a fellow who lends you his umbrella when the sun is shining, but wants it back the minute it begins to rain."},
  { author: "Aesop",
    text: "It is with our passions, as it is with fire and water, they are good servants but bad masters." }
]

message_id = User.getProperty("message_for_editing");

randomIndex = Libs.Random.randomInt(0, 9);
quote = quotesArr[randomIndex];

Bot.editMessage(quote.text, message_id);

editKeyboardButtonTitle(
    'this quote by: "' + quote.author + '"',
    "randomBtn"
)

Bot.editInlineKeyboard(defaultKeyboard, message_id)
