const { Client, Intents } = require('discord.js');
const open = require('open');

// intents - https://discord.com/developers/docs/topics/gateway#list-of-intents
const client = new Client({
    intents: [Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
});

client.login('OTMwMTI5NTc0NjI3NTEyNDEz.YdxYqw.4YDcOhpEL-uswSlbBDqUdw9ftdE');

client.on('ready', () => {
    console.log("server is running!")
});

client.on('messageCreate', gotMessage);

async function gotMessage(msg) {
    
    // prevents bot from chatting with itself
    if (msg.author.bot) {
        return;
    }
    
    // checks if bot has been mentioned
    if (!msg.mentions.users.has(client.user.id)) {
        return;
    }

    // gets nickname of sender
    let member = await msg.guild.members.fetch(msg.author);
    let nickname = member.nickname;

    // clean message text
    let text = msg.cleanContent.substring(9).toLowerCase();

    // respond to messages
    if (nickname == "Batman") {
        if (text.includes("hello")) {

            let replies = [
                "Hello, sir.",
                "Greetings Master Bruce.",
                "Good day, sir."
            ]
    
            msg.reply(replies[Math.floor(Math.random() * replies.length)]);
        }

        else if (text == "open youtube") {

            open("https://www.youtube.com/");
            msg.reply("Opening YouTube on the Bat Computer, sir.");
        }
        
        else if (text == "open google") {

            open("https://www.google.com/");
            msg.reply("Opening Google on the Bat Computer, sir.");
        }        
        
        else {
            let replies = [
                "Could you rephrase, sir?",
                "Forgive me sir, but I am not sure I understand you.",
                "Come again, sir?"
            ]
    
            msg.reply(replies[Math.floor(Math.random() * replies.length)]);
        }
    }
    else if (nickname == "Robin") {
        if (["hello", "yo", "hi", "sup", "hi guys", "hey alfred", "wassup"].includes(text)) {

            let replies = [
                "What's up my dude!",
                "Yo, Robin.",
                "Hola, mi Amor...",
                "Hows it going my totally radical dude!",
                "Hellellellellello Rererererobebebebin. I thththththinnnnnnk Imimimimim havavavaving a susususustrtrtrokokoke."
            ]
    
            msg.reply(replies[Math.floor(Math.random() * replies.length)]);
        }
        else if (["bye","goodnight","see you later"].includes(text)) {

            let replies = [
                "No don't go!",
                "Please don't leave me!",
                "Why do you wanna let me go!",
                "Stay, stay please!",
                "Come again, I can't bear to live without you."
            ]
    
            msg.reply(replies[Math.floor(Math.random() * replies.length)]);
        } 
        else if (["who killed my grandparents","who killed papas parents","where are my grandparents"].includes(text)) {

            let replies = [
                "They are dead.",
                "I killed them. Don't tell your dad!"
            ]
    
            msg.reply(replies[Math.floor(Math.random() * replies.length)]);
        }
        else {
            let replies = [
                "Water u sayin boi.",
                "I don't understand anything you say.",
                "Are you having a stroke? Do I need to call an ambulance???",
                "Are you ok?"
            ]
    
            msg.reply(replies[Math.floor(Math.random() * replies.length)]);
        }       
    }

    else {

        let replies = [
            "Master Bruce has instructed me to not speak with visitors.",
            "My apologies. I cannot speak with anyone but Mr. Wayne.",
            "I can only speak with Master Bruce.",
            "Unless Master Bruce allows, I cannot speak with any visitors to the Batcave.",
            "I have promised Mr. Wayne that I would refrain speaking with visitors.",
            "I cannot speak with visitors of the Batcave."
        ]

        msg.reply(replies[Math.floor(Math.random() * replies.length)]);
    }

}


