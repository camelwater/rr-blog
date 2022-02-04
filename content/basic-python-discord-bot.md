---
title: Creating a simple Discord Bot
subTitle: in Python
description: Discord bots are great; they've completely revolutionized the way people use Discord. Although it can seem difficult to begin creating one, it's actually quite simple if you know what is necessary and important. 
date: January 27, 2022
img: discord-bot.png
topics: [Discord, Python, pycord]
---

![Discord bot](/assets/images/discord-bot.png "Discord bot")

You've seen them everywhere; there's no escaping them. Any server you've ever joined has them. 

Discord Bots are extremely commonplace nowadays, and you likely use them every time you're on Discord. Every single one of those bots was created by another Discord user (or perhaps a group of users). 

Let's learn how to create a simple one, and from there you might be able to create the next Carlbot or the next Rhythm!

## Setup {#setup}

Before we can begin coding the Discord bot, we must first create it and set it up. To do this, we go to the <a href='https://discord.com/developers/applications' target='_blank'>Discord Developer Portal</a>. Create an account if you do 
not already have one. 

<!-- ![New application](/assets/images/discord-bot/create-new-app.png "Create new application") -->
You want to create a new application (the button in the top right corner). After your application has been created, navigate to the `Bot` tab to set up your bot.

<InfoCardComponent title="Bot Token" previewContent={<>In the "Bot" tab, you will see a "Click to Reveal Token" button. Take note of this Bot Token, as it will become important later.
</>}>

![Bot Token](/assets/images/discord-bot/bot-token.png "Bot Token")

</InfoCardComponent>


Now, this next part is crucial: you must select the necessary scopes and permissions for your bot. Make sure you select both 
the `bot` and `applications.command` scopes, but for the bot permissions, select only what your bot will need. 

<InfoCardComponent title="Message Content" previewContent={<>Message Content is a special situation. Currently, you don't have to worry about messing around with it, but the enforcement of reading Message Content as a privilege will begin being enforced starting April 30, 2022. For more details, read <a href='https://support.discord.com/hc/en-us/articles/360040720412' target='_blank'>Discord's explanation</a>.
</>}>
</InfoCardComponent>

Once you've figured out which permissions your bot needs, generate the invite URL using the URL Generator and add it to your server.

![URL Generation](/assets/images/discord-bot/url-generator.png "URL Generation")

Now download <a href="https://www.python.org" target="_blank">Python</a> if you don't already have it, and we can start coding!

## Coding our bot

### Getting started

The first thing we need are the packages. The only one you need is `pycord`, which you can install via `pip install py-cord`.

Let's start writing some code.

```py
import discord

TOKEN = "Your bot token" #bot token from before

bot = discord.Bot() #instantiate bot
bot.run(TOKEN) #connect to Discord
```

We can add a message to let us know when our bot is online:

```py
@bot.event
async def on_ready(): #this method is invoked when the bot has successfully connected
  print(f"Logged in as {bot.user}.")
```

Try to run the bot -- you'll see that it doesn't do anything yet. How about we add some commands?

### Adding commands

```py
import discord

TOKEN = "Your bot token" #remember the bot token from before?

bot = discord.Bot() #instantiate bot

@bot.event
async def on_ready(): #this method is invoked when the bot has successfully connected
  print(f"Logged in as {bot.user}.")

@bot.slash_command(
  name="greet",
  description="Say hello!",
  guild_ids=[...guilds] #input your guild id here
)
async def _greet_command(
  ctx: discord.ApplicationContext
):
  await ctx.respond(f"Hello {ctx.author}!") #respond to the user who invoked the command

bot.run(TOKEN) #connect to Discord
```

Now a neat message is printed out when our bot is online, and our bot can respond to us with a nice "Hello" when we use the `/greet` slash command!

You can also make commands accept arguments.

```py
@bot.slash_command(
  name="say_hi",
  description="Say hello to another user",
  guild_ids=[...guilds]
)
async def _hi_command(
  ctx: discord.ApplicationContext,
  user: discord.Member = None #the default value means this is an optional argument
):
  if not user:
    user = ctx.author
  await ctx.respond(f"{ctx.author.mention} says \"Hi\" to {user.mention}")
```

Try using the slash command `/say_hi`! You should be able to specify another user to say "hi" to, and the bot will greet someone else for you. 



