const Discord = require("discord.js");
const config = require("./auth.json");

const client = new Discord.Client();

const prefix = "!";
var ongoingtimer = false;

client.on("message", function(message) {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(' ');
  const command = args.shift().toLowerCase();

  if (command === "ping") {
    const timeTaken = Date.now() - message.createdTimestamp;
    message.reply(` pong! \`${timeTaken}ms\``);
  } else if (command === "sum") {
    const numArgs = args.map(x => parseFloat(x));
    const sum = numArgs.reduce((counter, x) => counter += x);
    message.reply(` the result is ${sum}!`);
  } else if (command === "hi") {
    message.reply(" hi!")
  } else if (command === "random") {
    if (args.length < 2) {
      return message.reply(" not enough arguments provided!\n**Format**:```!random <low end> <high end>```Example:```!random 1 5```would return a random number 1 to 5");
    }
    min = Math.ceil(args[0]);
    max = Math.floor(args[1]);
    var randomout = Math.floor(Math.random() * (max - min + 1)) + min;
    const ggEmbed = new Discord.MessageEmbed()
      .setColor('#0099ff')
      .setTitle("Random Number")
      .setDescription(randomout)
    message.reply(ggEmbed);
  } else if (command === "e") {
    message.channel.send("E")
  } else if (command === "rickroll") {
    message.channel.send("https://tenor.com/view/dance-moves-dancing-singer-groovy-gif-17029825")
  } else if (command === "shout") {
    message.delete()
    var thingtosay = args.join(" ")
    const ggEmbed = new Discord.MessageEmbed()
      .setColor('#0099ff')
      .setTitle(thingtosay)
      .setDescription(`Sent by ${message.author}`)
    message.reply(ggEmbed);
  } else if (command === "usebot") {
    message.delete();
    message.channel.send(args.join(" "));
  } else if (command === "message") {
    message.delete();
    let dUser = message.guild.member(message.mentions.users.first());
    dUser.send(args.slice(1).join(" "));
  } else if (command === "notify") {
    message.delete();
    var thingtosay = args.slice(1).join(" ")
    let dUser = message.guild.member(message.mentions.users.first());
    const ggEmbed = new Discord.MessageEmbed()
      .setColor('#0099ff')
      .setTitle(thingtosay)
      .setDescription(`Sent by ${message.author}`)
    dUser.send(ggEmbed);
  } else if (command === "timer") {

    function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function settime() {
      if (args[0] === "speech" && ongoingtimer == false) {
        ongoingtimer = true;
        const timebed1 = new Discord.MessageEmbed()
          .setColor('#0099ff')
          .setTitle("Speech Practice")
          .setDescription(`Requested by ${message.author}\n Starting in 3 seconds.`)
        message.channel.send(timebed1);

        await sleep(3000);

        const timebed2 = new Discord.MessageEmbed()
          .setColor('#0099ff')
          .setTitle("Your 4 minutes starts NOW.")
          .setDescription("Start!")
        message.channel.send(timebed2);

        await sleep(180000);

        const timebed3 = new Discord.MessageEmbed()
          .setColor('#0099ff')
          .setTitle("1 minute left")
        message.channel.send(timebed3);

        await sleep(30000);

        const timebed5 = new Discord.MessageEmbed()
          .setColor('#0099ff')
          .setTitle("30 seconds left")
        message.channel.send(timebed5);

        await sleep(30000);

        const timebed4 = new Discord.MessageEmbed()
          .setColor('#ff1717')
          .setTitle("STOP!")
        message.channel.send(timebed4);
        ongoingtimer = false;
      } else if (args[0] === "impromptu" && ongoingtimer == false) {
        ongoingtimer = true;
        const timebed1 = new Discord.MessageEmbed()
          .setColor('#0099ff')
          .setTitle("Impromptu Practice")
          .setDescription(`Requested by ${message.author}\n Starting in 3 seconds.`)
        message.channel.send(timebed1);

        await sleep(3000);

        //generate prompts here

        const timebed100 = new Discord.MessageEmbed()
          .setColor('#0099ff')
          .setTitle("Your 1 minute to prep starts NOW.")
          .setDescription("Start!")
        message.channel.send(timebed100);

        await sleep(60000);

        const timebed101 = new Discord.MessageEmbed()
          .setColor('#0099ff')
          .setTitle("Stop! STATE YOUR PROMPT and begin in 20 seconds.")
        message.channel.send(timebed101);

        await sleep(20000);

        const timebed102 = new Discord.MessageEmbed()
          .setColor('#0099ff')
          .setTitle("Your 2 minutes starts now.")
          .setDescription("Start!")
        message.channel.send(timebed102);

        await sleep(60000);

        const timebed103 = new Discord.MessageEmbed()
          .setColor('#0099ff')
          .setTitle("1 minute left.")
        message.channel.send(timebed103);

        await sleep(30000);

        const timebed105 = new Discord.MessageEmbed()
          .setColor('#0099ff')
          .setTitle("30 seconds left.")
        message.channel.send(timebed105);

        await sleep(30000);

        const timebed6 = new Discord.MessageEmbed()
          .setColor('#ff1717')
          .setTitle("STOP!")
        message.channel.send(timebed6);
        ongoingtimer = false;
      } else if (args[0] === "set" && ongoingtimer == false) {
        if (args[1] == null){
          const timebed404 = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle("Timer Error")
            .setDescription("You didn't define a time! The syntax is `!timer set time`. Replace `time` with the amount of time you want to set in seconds. \n\nFor example: `!timer set 20` sets a timer for 20 seconds.")
          message.channel.send(timebed404);
        } else {
          ongoingtimer = true;
          const timebed401 = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle("Set timer for " + args[1] + "s.")
            .setDescription(`Started by ${message.author}`)
          message.channel.send(timebed401);

          await sleep(args[1]*1000);

          const timebed402 = new Discord.MessageEmbed()
            .setColor('#ff1717')
            .setTitle("Timer for " + args[1] + "s has ended.")
            .setDescription(`Started by ${message.author}`)
          message.channel.send(timebed402);
          ongoingtimer = false;
        }
      }
      else {
        if (ongoingtimer == true) {
          const ggEmbed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle("Timer Error")
            .setDescription("You've already started a timer!")
          message.channel.send(ggEmbed);
        } else {
          const ggEmbed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle("Timer Error")
            .setDescription("Invalid argument. The proper ones are `set`, `speech`, `impromptu`, and `interview`.")
          message.channel.send(ggEmbed);
        }
      }
    }

    settime();
  } else if (command === "vc") {
    const ytdl = require('ytdl-core-discord');
    async function play(connection, url) {
      if (args[2] === "volume" || args[4] === "volume" || args[2] === "from" || args[4] === "from") {

        var starttime = 0;
        if (args[2] === "from") {
          var timestamp = args[3].split(":");
          starttime = timestamp[0] * 60000 + timestamp[1] * 1000;
        } else if (args[4] === "from") {
          var timestamp = args[5].split(":");
          starttime = timestamp[0] * 60000 + timestamp[1] * 1000;
        }
        if (args[2] === "volume") {
          connection.play(await ytdl(url), { type: 'opus', filter: 'audioonly', volume: args[3], seek: starttime });
        } else if (args[4] === "volume") {
          connection.play(await ytdl(url), { type: 'opus', filter: 'audioonly', volume: args[5], seek: starttime });
        }

      } else {
        connection.play(await ytdl(url), { type: 'opus', volume: 1 });
      }
    }
    if (args[0] === "join") {
      message.channel.send("Joining/updating the voice channel that you're in. If you're not in one join and try again.");
        if (message.member.voice.channel) {
          async function joinvc() {
            const connection = await message.member.voice.channel.join();
            if (args[1] === "mute") {
              message.channel.send("Muted!");
              play(connection, "https://www.youtube.com/watch?v=XIMLoLxmTDw");
            } else if (args[1] === "minecraft") {
              play(connection, "https://www.youtube.com/watch?v=Dk1W2U7jS8U");
            } else if (args[1] === "rickroll") {
              play(connection, "https://www.youtube.com/watch?v=dQw4w9WgXcQ");
            } else if (args[1] === "sovietanthem") {
              play(connection, "https://www.youtube.com/watch?v=GK2GUxOnjDQ");
            } else if (args[1] === "chill") {
              message.channel.send("---\n> You're currently listening to a livestream. Connecting to livestream...");
              play(connection, "https://www.youtube.com/watch?v=5qap5aO4i9A");
              message.channel.send("> Successfully connected to livestream!");
            } else if (args[1] != null) {
              play(connection, args[1]);
            }
          }
          joinvc();
        }
    } else if (args[0] === "leave") {
      message.channel.send("Ok fine I'll leave")
        if (message.member.voice.channel) {
          async function leavevc() {
            const connection = await message.member.voice.channel.join();
            connection.disconnect();
          }
          leavevc();
        }
    } else {
      const ggEmbed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle("VC Error")
        .setDescription("Invalid argument. The proper ones are `join` and `leave`. \n\nThe second argument is optional assuming you are joining the vc but can be either a URL or preset to `sovietanthem`, `minecraft`, `chill`, `rickroll`, or `mute`. If not specified, Gamer Bot will be simply vibe in the vc until you specify a song. \n\n`url` Plays whatever URL specified. Example: `!vc join https://www.youtube.com/watch?v=dQw4w9WgXcQ` \n\n**Presets**\n`minecraft` Relaxing Minecraft music with ambient rain sounds. \n`sovietanthem` Plays the Soviet Anthem \n`chill` Chill lofi straight from ChilledCow.\n `rickroll` Mercilessly rickroll people in VCs\n `mute` Mutes Gamer Bot \n\nYou can also change or mute the song using this same command if Gamer Bot is already in the vc. \n\nExample:\n`!vc join minecraft`\n\n**Optional Switches**\n`volume` Sets the volume from 0-1\n`from` Starts from a timestamp specified. Ex. `4:35` will play at the 4 minute 35 second mark. Due to technical difficulties, the feature is NOT yet avaliable.\n\nExample:\n`!vc join minecraft volume 0.8 from 2:30`")
      message.channel.send(ggEmbed);
    }
  } else if (command === "help") {
    const ggEmbed = new Discord.MessageEmbed()
      .setColor('#0099ff')
      .setTitle("Gamer Bot Commands")
      .setDescription("`!ping` Gets your ping. \n\n`!e` E. \n\n`!sum` Gets the sum of numbers that're seperated by a space. Ex. `!sum 1 2 3` will return 6. \n\n`!message @user something` will send a DM to the user. If you replace message with notify it'll send an embed. \n\n`!shout message` sends an embed with the message.\n\n`!usebot message` sends a message as the bot itself.\n\n`!rickroll` Rickroll in the chat. \n\n`!random min max` Random number between the the specified range.\n\n`!timer` Sets a timer. Enter it for more info.\n\n`!vc` Voicechat commands. Type it for more info.\n\n`!hi` Hi! Welcome to Kurger Bing, how can I help you?")
    message.channel.send(ggEmbed);
  }
  //on error
  else {
    const ggEmbed = new Discord.MessageEmbed()
      .setColor('#0099ff')
      .setTitle("Unrecognized Command")
      .setDescription("Err: Gamer Bot didn't know what you wanted.\nType `!help` for a list of commands.")
    message.reply(ggEmbed);
  }
});

client.login(config.token);
