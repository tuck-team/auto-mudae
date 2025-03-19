# Chillet

A Discord bot for automating interactions with the Mudae bot.

## Features

- Auto-rolling for characters at configurable intervals
- Auto-claiming characters you want
- Auto-collecting kakera
- Daily command automation ($daily, $dk, etc.)
- Easy configuration via Discord commands
- Supports both text commands and slash commands

## Setup

1. **Create a Discord Bot**
   - Go to [Discord Developer Portal](https://discord.com/developers/applications)
   - Click "New Application" and give it a name
   - Go to the "Bot" tab and click "Add Bot"
   - Under "Privileged Gateway Intents", enable ALL intents (particularly Message Content Intent)
   - Copy your bot token (keep this secret!)
   - Copy your Application ID (under the "General Information" tab)

2. **Invite your bot to your server**
   - Go to OAuth2 > URL Generator
   - Select the following scopes: `bot`, `applications.commands`
   - Select the following bot permissions: `Read Messages/View Channels`, `Send Messages`, `Read Message History`, `Add Reactions`
   - Copy the generated URL and open it in your browser to invite the bot

3. **Configure the bot**
   - Edit the config.json file and add your bot token and Application ID (as clientId)
   - Start the bot with `npm start`
   - In Discord, use the `!setchannel` command in the channel where you want the bot to operate

4. **Register Slash Commands (Optional)**
   - Run `npm run register` to register slash commands
   - This will make slash commands available in your server

## Usage

The bot supports both prefix commands and slash commands:

### Text Commands (prefix: !)
- `!help` - Show available commands

### Slash Commands
The same commands are available as slash commands with the `/` prefix.

## Running the Bot

1. Install dependencies:
   ```
   npm install
   ```

2. Start the bot:
   ```
   npm start
   ```

3. (Optional) Register slash commands:
   ```
   npm run register
   ```

## Disclaimer

Using automation with Discord bots might violate Discord's Terms of Service or Mudae's rules. Use at your own risk.
