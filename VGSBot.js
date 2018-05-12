const Discord = require("discord.js");
const client = new Discord.Client();
const settings = require(`./settings.json`);
client.setMaxListeners(153);


client.login(settings.token);

const clean = text => {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;};

client.on("ready", () => {
  console.log("I am ready!");
  client.user.setPresence({ game: { name: 'VGS Bot Beep Boop', type: 0 } });
});

client.on("reconnecting", () => {
    console.log(`Reconnecting at ${new Date()}`)
});

let special = {
    "0": ":zero:",
    "1": ":one:",
    "2": ":two:",
    "3": ":three:",
    "4": ":four:",
    "5": ":five:",
    "6": ":six:",
    "7": ":seven:",
    "8": ":eight:",
    "9": ":nine:",
    "<": ":arrow_backward:",
    ">": ":arrow_forward:",
    "!": ":exclamation:",
    "?": ":question:",
    "^": ":arrow_up_small:",
    "+": ":heavy_plus_sign:",
    "-": ":heavy_minus_sign:",
    "÷": ":heavy_division_sign:",
    ".": ":radio_button:",
    "#": ":hash:",
    "*": ":asterisk:"
}

client.on('message' , (message) => {

    if(message.author.bot)return

        if(!message.content.toLowerCase().startsWith('v'))return


    const args = message.content.split(" ").slice(1);

  if (message.content.startsWith("veval")) {
    if(message.author.id !== settings.ownerID) return message.reply('No.');
    try {
      const code = args.join(" ");
      let evaled = eval(code);

      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);

      message.channel.send(clean(evaled), {code:"xl"});
    } catch (err) {
      message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
  }

    if(message.content.toLowerCase().startsWith('vhelp')){
        message.channel.send('https://smite.gamepedia.com/Voice_Guided_System');
    };

    if(message.content.toLowerCase().startsWith('vping')) {
        message.channel.send('Pinging...').then(sent => {
            sent.edit(`Pong! Took ${sent.createdTimestamp - message.createdTimestamp}ms`);
    }); }

    if(message.content.toLowerCase().startsWith('vemojify')){
      var emoji = message.content.substring(8).toLowerCase().split("");
    let done = "";

    for (c = 0; c < emoji.length; c++) {
        if (/\s/g.test(emoji[c])) {
            done += "   ";
        } else if (/[abcdefghijklmnopqrstuvwxyz]/g.test(emoji[c])) {
            done += emoji[c].replace(emoji[c], " :regional_indicator_" + emoji[c] + ":");
        } else if (Object.keys(special).indexOf(emoji[c]) > -1) {
            done += emoji[c].replace(emoji[c], " " + special[emoji[c]]);
        } else {
            done += " " + emoji[c] + " "
        }

    }
    message.channel.send(done)
  }else

    if(message.content.toLowerCase().startsWith('vpurge')){
      if(message.member.hasPermission("MANAGE_MESSAGES")) {
      let numberofmessages = message.content.substring(6);
      let messagecount = parseInt(numberofmessages) +1;
      if(messagecount > 100 || messagecount < 2) {
        return message.reply('Please provide a number between 1 and 99');
      }
  message.channel.fetchMessages({limit:messagecount}).then(messages => message.channel.bulkDelete(messages));
  console.log('deleted ' + messagecount + ` (${messagecount - 1}) messages in ${message.guild.name} --> #${message.channel.name}.`)
    } else{
      message.channel.send('You do not have the permissions to use this command.');
    }
    }else

    if(message.content.toLowerCase().startsWith('vavatar')){
      let user = message.mentions.users.first() ? message.mentions.users.first() : message.author
  let ava = user.displayAvatarURL
  let embed = {
      color:0x542437,
      description:"Here is "+user.username+"'s avatar: *[url]("+ava+")*",
      image:{url:ava}
  }
  message.channel.send("", {embed});
  }else

    if(message.content.toLowerCase().startsWith('vcommands')){
      var commands = '\`\`\` COMMANDS:\n All VGS commands can be found using <vhelp>\n vvvgs :: Good shit\n vnut :: The bot nuts\n vemojify :: Turn any text into emojis\n vavatar :: Shows avatar of person mentioned\n vpurge <# of messages> :: Deletes the set number of messages(Mods Only)\n vping :: Pongs yourself \n vvkys :: When you\'re not happy with someone \n vvkms :: When you\'re not happy with yourself\`\`\`'
      message.channel.send(commands);

    }

    if(message.content.toLowerCase().startsWith('vvvgs')){
        message.channel.send('👌👀👌👀👌👀👌👀👌👀 good shit go౦ԁ sHit👌 thats ✔ some good👌👌shit right👌👌there👌👌👌 right✔there ✔✔if i do ƽaү so my self 💯 i say so 💯 thats what im talking about right there right there (chorus: ʳᶦᵍʰᵗ ᵗʰᵉʳᵉ) mMMMMᎷМ💯 👌👌 👌НO0ОଠOOOOOОଠଠOoooᵒᵒᵒᵒᵒᵒᵒᵒᵒ👌 👌👌 👌 💯 👌 👀 👀 👀 👌👌Good shit');
    }else

    if(message.content.toLowerCase().startsWith('vnut')){
        message.channel.send('<:Kreygasm:344168305235329034>');
    }else


    if(message.content.toLowerCase().startsWith('vaa')){
        message.channel.send('Attack!');
    }else

    if(message.content.toLowerCase().startsWith('va1')) {
        message.channel.send('Attack left lane!');
    }else

    if(message.content.toLowerCase().startsWith('va2')) {
        message.channel.send('Attack middle lane!');
    }else

    if(message.content.toLowerCase().startsWith('va3')) {
        message.channel.send('Attack right lane!');
    }else

    if(message.content.toLowerCase().startsWith('vaf')) {
        message.channel.send('Attack Fire Giant!');
    }else

    if(message.content.toLowerCase().startsWith('vam')) {
        message.channel.send('Attack the Titan!');
    }else

    if(message.content.toLowerCase().startsWith('vag')) {
        message.channel.send('Attack the Gold Fury!');
    }else

    if(message.content.toLowerCase().startsWith('vdd')) {
        message.channel.send('Defend!');
    }else

    if(message.content.toLowerCase().startsWith('vd1')) {
        message.channel.send('Defend left lane!');
    }else

    if(message.content.toLowerCase().startsWith('vd2')) {
        message.channel.send('Defend middle lane!');
    }else

    if(message.content.toLowerCase().startsWith('vd3')) {
        message.channel.send('Defend right lane!');
    }else

    if(message.content.toLowerCase().startsWith('vdm')) {
        message.channel.send('Defend the Titan!');
    }else

    if(message.content.toLowerCase().startsWith('vgg')) {
        message.channel.send('Gank!');
    }else

    if(message.content.toLowerCase().startsWith('vg1')) {
        message.channel.send('Gank left lane!');
    }else

    if(message.content.toLowerCase().startsWith('vg2')) {
        message.channel.send('Gank middle lane!');
    }else

    if(message.content.toLowerCase().startsWith('vg3')) {
        message.channel.send('Gank right lane!');
    }else

    if(message.content.toLowerCase().startsWith('vff')) {
        message.channel.send('Enemy missing!');
    }else

    if(message.content.toLowerCase().startsWith('vf1')) {
        message.channel.send('Enemy missing left!');
    }else

    if(message.content.toLowerCase().startsWith('vf2')) {
        message.channel.send('Enemy missing middle!');
    }else

    if(message.content.toLowerCase().startsWith('vf3')) {
        message.channel.send('Enemy missing right!');
    }else

    if(message.content.toLowerCase().startsWith('vrr')) {
        message.channel.send('Retreat!');
    }else

    if(message.content.toLowerCase().startsWith('vr1')) {
        message.channel.send('Retreat left lane!');
    }else

    if(message.content.toLowerCase().startsWith('vr2')) {
        message.channel.send('Retreat middle lane!');
    }else

    if(message.content.toLowerCase().startsWith('vr3')) {
        message.channel.send('Retreat right lane!');
    }else

    if(message.content.toLowerCase().startsWith('vej')) {
        message.channel.send('<plays joke>');
    }else

    if(message.content.toLowerCase().startsWith('vel')) {
        message.channel.send('<plays laugh>');
    }else

    if(message.content.toLowerCase().startsWith('vet')) {
        message.channel.send('<plays taunt>');
    }else

    if(message.content.toLowerCase().startsWith('vtt')) {
        message.channel.send('Enemies have returned!');
    }else

    if(message.content.toLowerCase().startsWith('vt1')) {
        message.channel.send('Enemies have returned left!');
    }else

    if(message.content.toLowerCase().startsWith('vt2')) {
        message.channel.send('Enemies have returned middle!');
    }else

    if(message.content.toLowerCase().startsWith('vt3')) {
        message.channel.send('Enemies have returned right!');
    }else

    if(message.content.toLowerCase().startsWith('vii')) {
        message.channel.send('Enemies incoming!');
    }else

    if(message.content.toLowerCase().startsWith('vi1')) {
        message.channel.send('Enemies incoming left!');
    }else

    if(message.content.toLowerCase().startsWith('vi2')) {
        message.channel.send('Enemies incoming middle!');
    }else

    if(message.content.toLowerCase().startsWith('vi3')) {
        message.channel.send('Enemies incoming right!');
    }else

    if(message.content.toLowerCase().startsWith('vvb')) {
        message.channel.send('Be right back!');
    }else

    if(message.content.toLowerCase() === 'vvk') {
        message.channel.send('Stepping away for a moment.');
    }else

    if(message.content.toLowerCase().startsWith('vvkys')) {
        message.channel.send('Kill Yourself!');
    }else

    if(message.content.toLowerCase().startsWith('vvkms')) {
        message.channel.send('Kill Myself!');
    }else

    if(message.content.toLowerCase().startsWith('vvt')) {
        message.channel.send('Thanks!');
    }else

    if(message.content.toLowerCase().startsWith('vva')) {
        message.channel.send('Ok!');
    }else

    if(message.content.toLowerCase().startsWith('vvx')) {
        message.channel.send('Cancel that!');
    }else

    if(message.content.toLowerCase().startsWith('vvy')) {
        message.channel.send('Yes!');
    }else

    if(message.content.toLowerCase().startsWith('vvn')) {
        message.channel.send('No!');
    }else

    if(message.content.toLowerCase().startsWith('vvs')) {
        message.channel.send('Sorry!');
    }else

    if(message.content.toLowerCase().startsWith('vvw')) {
        message.channel.send('Wait!');
    }else

    if(message.content.toLowerCase().startsWith('vvgb')) {
        message.channel.send('Bye!');
    }else

    if(message.content.toLowerCase().startsWith('vvgg')) {
        message.channel.send('Good game!');
    }else

    if(message.content.toLowerCase().startsWith('vvgl')) {
        message.channel.send('Good luck.');
    }else

    if(message.content.toLowerCase().startsWith('vvgq')) {
        message.channel.send('Quiet.');
    }else

    if(message.content.toLowerCase().startsWith('vvgh')) {
        message.channel.send('Hi!');
    }else

    if(message.content.toLowerCase().startsWith('vvm')) {
        message.channel.send('Out of mana.');
    }else

    if(message.content.toLowerCase().startsWith('vvgn')) {
        message.channel.send('Nice job!');
    }else

    if(message.content.toLowerCase().startsWith('vvgo')) {
        message.channel.send('Oops!');
    }else

    if(message.content.toLowerCase().startsWith('vvgt')) {
        message.channel.send('That\'s too bad!');
    }else

    if(message.content.toLowerCase().startsWith('vvgw')) {
        message.channel.send('You\'re welcome!');
    }else

    if(message.content.toLowerCase().startsWith('vvgs')) {
        message.channel.send('Curses!');
    }else

    if(message.content.toLowerCase().startsWith('vvvb')) {
        message.channel.send('Behind us.');
    }else

    if(message.content.toLowerCase().startsWith('vvvf')) {
        message.channel.send('Follow Me!');
    }else

    if(message.content.toLowerCase().startsWith('vvvs')) {
        message.channel.send('Stay here.');
    }else

    if(message.content.toLowerCase().startsWith('vvvt')) {
        message.channel.send('It\'s a trap!');
    }else

    if(message.content.toLowerCase().startsWith('vvvg')) {
        message.channel.send('Group up.');
    }else

    if(message.content.toLowerCase().startsWith('vvve')) {
        message.channel.send('On my way.');
    }else

    if(message.content.toLowerCase().startsWith('vvvr')) {
        message.channel.send('Ultimate is ready!');
    }else

    if(message.content.toLowerCase().startsWith('vvvd')) {
        message.channel.send('Ultimate is down!');
    }else

    if(message.content.toLowerCase().startsWith('vvvj')) {
        message.channel.send('Going into the jungle.');
    }else

    if(message.content.toLowerCase().startsWith('vhh')) {
        message.channel.send('Help!');
    }else

    if(message.content.toLowerCase().startsWith('vh1')) {
        message.channel.send('Help left lane!');
    }else

    if(message.content.toLowerCase().startsWith('vh2')) {
        message.channel.send('Help middle lane!');
    }else

    if(message.content.toLowerCase().startsWith('vh3')) {
        message.channel.send('Help right lane!');
    }else

    if(message.content.toLowerCase().startsWith('vcc')) {
        message.channel.send('Be careful!');
    }else

    if(message.content.toLowerCase().startsWith('vc1')) {
        message.channel.send('Be careful left!');
    }else

    if(message.content.toLowerCase().startsWith('vc2')) {
        message.channel.send('Be careful middle!');
    }else

    if(message.content.toLowerCase().startsWith('vc3')) {
        message.channel.send('Be careful right!');
    }else

    if(message.content.toLowerCase().startsWith('vbjj')) {
        message.channel.send('Enemies in the jungle!');
    }else

    if(message.content.toLowerCase().startsWith('vbj1')) {
        message.channel.send('Enemies in the left Jungle!');
    }else

    if(message.content.toLowerCase().startsWith('vbj3')) {
        message.channel.send('Enemies in the right Jungle!');
    }else

    if(message.content.toLowerCase().startsWith('vba')) {
        message.channel.send('Enemy Ultimate Incoming!');
    }else

    if(message.content.toLowerCase().startsWith('vbd')) {
        message.channel.send('Enemy Ultimate Down!');
    }else

    if(message.content.toLowerCase().startsWith('vrj')) {
        message.channel.send('Retreat from the Jungle!');
    }else

    if(message.content.toLowerCase().startsWith('vrs')) {
        message.channel.send('Save yourself!');
    }else

    if(message.content.toLowerCase().startsWith('vvp')) {
        message.channel.send('Please?');
    }else

    if(message.content.toLowerCase() === 'vvgf') {
        message.channel.send('Have Fun!');
    }else

    if(message.content.toLowerCase().startsWith('vvgfy')) {
        message.channel.send('Go Fuck Yourself!');
    }else

    if(message.content.toLowerCase().startsWith('vvvw')) {
        message.channel.send('Place a Ward for Teleport.');
    }else

    if(message.content.toLowerCase().startsWith('vvvx')) {
        message.channel.send('Spread Out!');
    }else

    if(message.content.toLowerCase().startsWith('vvvp')) {
        message.channel.send('Split Push!');
    }else

    if(message.content.toLowerCase().startsWith('vqq')) {
        message.channel.send('Ward Here.');
    }else

    if(message.content.toLowerCase().startsWith('vqn')) {
        message.channel.send('We need Wards.');
    }else

    if(message.content.toLowerCase().startsWith('vqf')) {
        message.channel.send('Ward Fire Giant.');
    }else

    if(message.content.toLowerCase().startsWith('vqg')) {
        message.channel.send('Ward Gold Fury.');
    }else

    if(message.content.toLowerCase().startsWith('vq1')) {
        message.channel.send('Ward Left.');
    }else

    if(message.content.toLowerCase().startsWith('vq2')) {
        message.channel.send('Ward Middle.');
    }else

    if(message.content.toLowerCase().startsWith('vq3')) {
        message.channel.send('Ward Right.');
    }else

    if(message.content.toLowerCase().startsWith('vhs')) {
        message.channel.send('Need healing!');
    }else

    if(message.content.toLowerCase().startsWith('vcj')) {
        message.channel.send('Be careful in the Jungle!');
    }else

    if(message.content.toLowerCase().startsWith('vsbb')) {
        message.channel.send('I’m going for jungle buff.');
    }else

    if(message.content.toLowerCase().startsWith('vsbt')) {
        message.channel.send('Take this jungle buff.');
    }else

    if(message.content.toLowerCase().startsWith('vsbn')) {
        message.channel.send('I need the jungle buff.');
    }else

    if(message.content.toLowerCase().startsWith('vss')) {
        message.channel.send('I’m building stacks.');
    }else

    if(message.content.toLowerCase().startsWith('vsqq')) {
        message.channel.send('I will ward.');
    }else

    if(message.content.toLowerCase().startsWith('vsq1')) {
        message.channel.send('I will ward left.');
    }else

    if(message.content.toLowerCase().startsWith('vsq2')) {
        message.channel.send('I will ward middle.');
    }else

    if(message.content.toLowerCase().startsWith('vsq3')) {
        message.channel.send('I will ward right.');
    }else

    if(message.content.toLowerCase().startsWith('vat1')) {
        message.channel.send('Attack Left Tower!');
    }else

    if(message.content.toLowerCase().startsWith('vat2')) {
        message.channel.send('Attack Middle Tower!');
    }else

    if(message.content.toLowerCase().startsWith('vat3')) {
        message.channel.send('Attack Right Tower!');
    }else

    if(message.content.toLowerCase().startsWith('ver')) {
        message.channel.send('You Rock!');
    }else

    if(message.content.toLowerCase().startsWith('vea')) {
        message.channel.send('Awesome!');
    }else

    if(message.content.toLowerCase().startsWith('vew')) {
        message.channel.send('Woohoo!');
    }else

    if(message.content.toLowerCase().startsWith('vvc')) {
        message.channel.send('Completed!');
    }else

    if(message.content.toLowerCase().startsWith('veg')) {
        message.channel.send('I\'m the greatest!');
    }else

    if(message.content.toLowerCase().startsWith('vvgr')) {
        message.channel.send('No Problem!');
    }else

    if(message.content.toLowerCase().startsWith('vb1')) {
        message.channel.send('Enemies in left lane!');
    }else

    if(message.content.toLowerCase().startsWith('vb2')) {
        message.channel.send('Enemies in middle lane!');
    }else

    if(message.content.toLowerCase().startsWith('vb3')) {
        message.channel.send('Enemies in right lane!');
    }else

    if(message.content.toLowerCase().startsWith('vbb')) {
        message.channel.send('Enemies have returned to base.');
    }else

    if(message.content.toLowerCase().startsWith('vbe')) {
        message.channel.send('Enemies behind us!');
    }else

    if(message.content.toLowerCase().startsWith('vbf')) {
        message.channel.send('Enemies at the Fire Giant!');
    }else

    if(message.content.toLowerCase().startsWith('vbg')) {
        message.channel.send('Enemies at the Gold Fury!');
    }else

    if(message.content.toLowerCase().startsWith('vbm')) {
        message.channel.send('Enemies at our Titan!');
    }else

    if(message.content.toLowerCase().startsWith('vbs')) {
        message.channel.send('Enemy spotted!');
    }else

    if(message.content.toLowerCase().startsWith('vcb')) {
        message.channel.send('Return to base!');
    }else

    if(message.content.toLowerCase().startsWith('vdf')) {
        message.channel.send('Defend the Fire Giant!');
    }else

    if(message.content.toLowerCase().startsWith('vdg')) {
        message.channel.send('Defend the Gold Fury!');
    }else

    if(message.content.toLowerCase().startsWith('vsa1')) {
        message.channel.send('I\'ll Attack left lane!');
    }else

    if(message.content.toLowerCase().startsWith('vsa2')) {
        message.channel.send('I\'ll Attack middle lane!');
    }else

    if(message.content.toLowerCase().startsWith('vsa3')) {
        message.channel.send('I\'ll Attack right lane!');
    }else

    if(message.content.toLowerCase().startsWith('vsaa')) {
        message.channel.send('I\'ll Attack!');
    }else

    if(message.content.toLowerCase().startsWith('vsaf')) {
        message.channel.send('I\'ll Attack Fire Giant!');
    }else

    if(message.content.toLowerCase().startsWith('vsag')) {
        message.channel.send('I\'ll Attack the Gold Fury!');
    }else

    if(message.content.toLowerCase().startsWith('vsd1')) {
        message.channel.send('I\'ll defend left lane!');
    }else

    if(message.content.toLowerCase().startsWith('vsd2')) {
        message.channel.send('I\'ll defend middle lane!');
    }else

    if(message.content.toLowerCase().startsWith('vsd3')) {
        message.channel.send('I\'ll defend right lane!');
    }else

    if(message.content.toLowerCase().startsWith('vsdd')) {
        message.channel.send('I\'ll defend!');
    }else

    if(message.content.toLowerCase().startsWith('vsdf')) {
        message.channel.send('I\'ll defend the Fire Giant!');
    }else

    if(message.content.toLowerCase().startsWith('vsdg')) {
        message.channel.send('I\'ll defend the Gold Fury!');
    }else

    if(message.content.toLowerCase().startsWith('vsdm')) {
        message.channel.send('I\'ll defend the Titan!');
    }else

    if(message.content.toLowerCase().startsWith('vsg1')) {
        message.channel.send('I\'ll gank left lane!');
    }else

    if(message.content.toLowerCase().startsWith('vsg2')) {
        message.channel.send('I\'ll gank middle lane!');
    }else

    if(message.content.toLowerCase().startsWith('vsg3')) {
        message.channel.send('I\'ll gank right lane!');
    }else

    if(message.content.toLowerCase().startsWith('vsgg')) {
        message.channel.send('I\'ll gank!');
    }else

    if(message.content.toLowerCase().startsWith('vso')) {
        message.channel.send('I\'m on it!');
    }else

    if(message.content.toLowerCase().startsWith('vsr')) {
        message.channel.send('Falling back!');
    }else

    if(message.content.toLowerCase().startsWith('vstt')) {
        message.channel.send('I have returned!');
    }else

    if(message.content.toLowerCase().startsWith('vst1')) {
        message.channel.send('I\'m returning left lane!');
    }else

    if(message.content.toLowerCase().startsWith('vst2')) {
        message.channel.send('I\'m returning middle lane!');
    }else

    if(message.content.toLowerCase().startsWith('vst3')) {
        message.channel.send('I\'m returning right lane!');
    }else

    if(message.content.toLowerCase().startsWith('vstb')) {
        message.channel.send('I\'m returning to base!');
    }else

    if(message.content.toLowerCase().startsWith('vvva')) {
        message.channel.send('Set up an ambush here!');
    }else

    if(message.content.toLowerCase().startsWith('vvvc')) {
        message.channel.send('Chase the enemy!');
    }else;

});
