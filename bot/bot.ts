import { Client, MessageAttachment, MessageEmbed } from "discord.js";
import Web3 from "web3";
import { fetchJson } from "fetch-json";
require("dotenv").config();

const ABOUT_POLYGON =
  "Polygon is a protocol and a framework for building and connecting Ethereum-compatible blockchain networks";
const AUTHOR = "@aleadorjan";
const EMBED_COLOR_PRIMARY = 0x8444e4;
const EMBED_COLOR_SECONDARY = 0x545454;
const CONSTANT = 10;
const BOT_NAME = "Tweet@Polygon  ";
const BOT_NAME_FOOTER = "ETHGlobal 2022";
const TOKEN_DECIMAL = 18n;
const TOKEN_NAME = "MATIC";
const BOT_NAME_DESCRIPTION = "Tweet@Polygon";
const BOT_TITLE = "Polygon";
const BOT_API_WWW = " using API request";
const URL_ALL_CONTRACTS_JSON =
  "https://static.matic.network/network/testnet/mumbai/index.json";
const URL_RPC = "https://rpc-mainnet.maticvigil.com";
const URL_RPC_TESTNET = "https://rpc-mumbai.maticvigil.com/";
const URL_WALLET = "https://wallet.matic.network/";
const URL_FAUCET = "https://faucet.matic.network";
const URL_POLYGON = "https://polygon.technology";
const URL_HELP = "https://polygon.technology";
const URL_SOCIAL_GITHUB = "https://github.com/maticnetwork/";
const URL_SOCIAL_TWITTER = "https://twitter.com/maticnetwork";
const URL_SOCIAL_CHAT = "https://discord.com/invite/XvpHAxZ";
const URL_SOCIAL_YOUTUBE =
  "https://www.youtube.com/channel/UCvjEq17wWLHFVYwU3OOXPtQ";
const URL_SOCIAL_REDIT = "https://www.reddit.com/r/maticnetwork/";
const URL_SOCIAL_TELEGRAM = "https://t.me/maticnetwork";
const URL_EXPLORER_MATIC = "https://explorer-mumbai.maticvigil.com/";
const URL_EXPLORER = "https://mumbai-explorer.matic.today/";
const URL_DISCORD_INVITE = "";
const URL_DISCORD = "https://discord.js.org/";
const URL_ROADWEB3 =
  "https://vg8il995a1n6thi7133ev8s91e3pmmvnulh16b3ev3tokmtsmk2ikoo.siasky.net/";
const POLYGON_WHITE_PAPER = "https://polygon.technology/lightpaper-polygon.pdf";
const POLYGON_LOGO = "https://i.imgur.com/0sPcwCi.png";
const POLYGON_GLYPH_COLOR_REVERSE = "https://i.imgur.com/0sPcwCi.png";
const POLYGON_LOGO_COLOR = "https://i.imgur.com/0sPcwCi.png";
const POLYGON_LOGO_COLOR_REVERSE = "https://i.imgur.com/0sPcwCi.png";
const IMG_BLOCK = "https://i.imgur.com/cOQzFs0.png";
const IMG_TRANSACTION = "https://i.imgur.com/cJAwyCH.png";
const IMG_MARKET = "https://i.imgur.com/cOQzFs0.png";
const IMG_POLYGONSCAN = "https://i.imgur.com/DLqyG6g.png";
const URL_API_PRICE =
  "https://api-testnet.polygonscan.com/api?module=stats&action=maticprice&apikey=";
const URL_API_BALANCE =
  "https://api-testnet.polygonscan.com/api?module=account&action=balance&address=";
const URL_API_NFT =
  "https://api-testnet.polygonscan.com/api?module=account&action=balance&address=0xA73721242EeAb1B96B79fd6Cdd5ac7182Ad21cEe&apikey=";
console.log(`Starting bot...`);
console.log(`Connecting web3 to ..`);

const client: Client = new Client();
const web3 = new Web3(process.env.RPC_URL);

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", async (msg) => {
  try {
    if (msg.content.startsWith("!mybalance")) {
      const url =
        URL_API_BALANCE +
        "0xA73721242EeAb1B96B79fd6Cdd5ac7182Ad21cEe" +
        "&apikey=" +
        process.env.API_KEY;
      const data = await fetchJson.get(url);
      let accountBalance = BigInt(data.result);
      const balanceEmbed = new MessageEmbed()
        .setColor(EMBED_COLOR_SECONDARY)
        .setDescription(BOT_NAME)
        .setURL(URL_DISCORD)
        .setAuthor("Author: " + AUTHOR, POLYGON_LOGO_COLOR_REVERSE, URL_HELP)
        .setThumbnail(POLYGON_LOGO_COLOR)
        .addField(
          "Address:",
          `'0xA73721242EeAb1B96B79fd6Cdd5ac7182Ad21cEe'`,
          true
        )
        .addField(
          "Current balance",
          `${accountBalance / 10n ** TOKEN_DECIMAL} ${TOKEN_NAME}`,
          true
        )
        .setImage(IMG_POLYGONSCAN)
        .setFooter(BOT_NAME_FOOTER, POLYGON_GLYPH_COLOR_REVERSE)
        .setTimestamp();
      msg.channel.send(balanceEmbed);
    }
    if (msg.content.startsWith("!balance")) {
      let address = msg.content.slice("!balance".length).trim();
      let queryaddress = address.concat("");
      if (address.startsWith("0x")) {
        address = address.slice(`0x`.length);
      }
      let uuid = Date.now().toString();
      if (address.length != 40) {
        const errorEmbed = new MessageEmbed()
          .setColor(EMBED_COLOR_SECONDARY)
          .setURL(URL_DISCORD)
          .setTitle("Invalid address")
          .setAuthor("Author: " + AUTHOR, POLYGON_LOGO_COLOR_REVERSE, URL_HELP)
          .setFooter("Addresses must follow the H160 address ETH format")
          .setTimestamp();
        msg.channel.send(errorEmbed);
        return;
      }
      const url =
        URL_API_BALANCE + queryaddress + "&apikey=" + process.env.API_KEY;
      const data = await fetchJson.get(url);
      let accountBalance = BigInt(data.result);
      const balanceEmbed = new MessageEmbed()
        .setColor(EMBED_COLOR_SECONDARY)
        .setDescription(BOT_NAME)
        .setURL(URL_DISCORD)
        .setAuthor("Author: " + AUTHOR, POLYGON_LOGO_COLOR_REVERSE, URL_HELP)
        .setThumbnail(POLYGON_LOGO_COLOR)
        .addField("Address:", `${queryaddress}`, true)
        .addField(
          "Current balance",
          `${accountBalance / 10n ** TOKEN_DECIMAL} ${TOKEN_NAME}`,
          true
        )
        .setImage(IMG_POLYGONSCAN)
        .setFooter(BOT_NAME_FOOTER, POLYGON_GLYPH_COLOR_REVERSE)
        .setTimestamp();
      msg.channel.send(balanceEmbed);
    }

    if (msg.content === "!mynft") {
      const url = URL_API_NFT + process.env.API_KEY;
      const data = await fetchJson.get(url);
      const rewardEmbed = new MessageEmbed()
        .setColor(EMBED_COLOR_SECONDARY)
        .setDescription(BOT_NAME)
        .setURL(URL_DISCORD)
        .setAuthor("Author: " + AUTHOR, POLYGON_LOGO_COLOR_REVERSE, URL_HELP)
        .setThumbnail(IMG_BLOCK)
        .addField("TweetID:", `${data.result}`, true)
        .setImage(IMG_POLYGONSCAN)
        .setFooter(BOT_NAME_FOOTER, POLYGON_GLYPH_COLOR_REVERSE)
        .setTimestamp();
      msg.channel.send(rewardEmbed);
    }

    if (msg.content === "!transaction") {
      const url =
        "https://api-testnet.polygonscan.com/api?module=account&action=txlist&address=0xA73721242EeAb1B96B79fd6Cdd5ac7182Ad21cEe&startblock=0&endblock=99999999&page=1&offset=1&sort=asc&apikey=" +
        process.env.API_KEY;
      const data = await fetchJson.get(url);
      console.log(data.result);
      const rewardEmbed = new MessageEmbed()
        .setColor(EMBED_COLOR_SECONDARY)
        .setDescription(BOT_NAME)
        .setURL(URL_DISCORD)
        .setAuthor("Author: " + AUTHOR, POLYGON_LOGO_COLOR_REVERSE, URL_HELP)
        .setThumbnail(IMG_BLOCK)
        .addField("JSON:", JSON.stringify(data.result, null, 2), true)

        .setImage(IMG_POLYGONSCAN)
        .setFooter(BOT_NAME_FOOTER, POLYGON_GLYPH_COLOR_REVERSE)
        .setTimestamp();
      msg.channel.send(rewardEmbed);
    }
    if (msg.content === "!price") {
      const url = URL_API_PRICE + process.env.API_KEY;
      const data = await fetchJson.get(url);
      const priceEmbed = new MessageEmbed()
        .setColor(EMBED_COLOR_SECONDARY)
        .setDescription(BOT_NAME)
        .setURL(URL_DISCORD)
        .setAuthor("Author: " + AUTHOR, POLYGON_LOGO_COLOR_REVERSE, URL_HELP)
        .setThumbnail(IMG_MARKET)
        .addField(
          `Matic BTC ${data.result.maticbtc}`,
          " timestamp: " + `${data.result.maticbtc_timestamp}`,
          false
        )
        .addField(
          `Matic USD ${data.result.maticusd}`,
          " timestamp: " + `${data.result.maticusd_timestamp}`,
          false
        )
        .setImage(IMG_POLYGONSCAN)
        .setFooter(BOT_NAME_FOOTER, POLYGON_GLYPH_COLOR_REVERSE)
        .setTimestamp();
      msg.channel.send(priceEmbed);
    }

    if (msg.content === "!help") {
      const socialEmbed = new MessageEmbed()
        .setColor(EMBED_COLOR_PRIMARY)
        .setURL(URL_DISCORD)
        .setAuthor(
          "author: " + msg.author.username,
          POLYGON_LOGO_COLOR,
          URL_POLYGON
        )
        .setDescription(BOT_NAME)
        .setThumbnail(POLYGON_LOGO)
        .addField("balance of an address", `!balance 0x..`, true)
        .addField("balance of connected account", `!mybalance`, true)
        .addField("links polygon.network", `!social`, true)
        .addField("returns matic price", `!price`, true)
        .addField("last transactions", `!transaction`, true)
        .addField("nft of connected account ", `!mynft`, true)
        .addField(`web link of  ${BOT_NAME}`, ` !web`, true)
        .setTimestamp()
        .setFooter(BOT_NAME_FOOTER, POLYGON_GLYPH_COLOR_REVERSE);
      msg.channel.send(socialEmbed);
    }
    if (msg.content === "!social") {
      const socialEmbed = new MessageEmbed()
        .setColor(EMBED_COLOR_PRIMARY)
        .setURL(URL_DISCORD)
        .setAuthor(
          "author: " + msg.author.username,
          POLYGON_LOGO_COLOR,
          URL_POLYGON
        )
        .setDescription(BOT_NAME)
        .setThumbnail(POLYGON_LOGO)
        .addFields(
          { name: "github", value: URL_SOCIAL_GITHUB, inline: true },
          { name: "twitter", value: URL_SOCIAL_TWITTER, inline: true },
          { name: "chat", value: URL_SOCIAL_CHAT, inline: true },
          { name: "youtube", value: URL_SOCIAL_YOUTUBE, inline: true },
          { name: "redit", value: URL_SOCIAL_REDIT, inline: true },
          { name: "telegram", value: URL_SOCIAL_TELEGRAM, inline: true }
        )
        .setTimestamp()
        .setFooter(BOT_NAME_FOOTER, POLYGON_GLYPH_COLOR_REVERSE);
      msg.channel.send(socialEmbed);
    }
    if (msg.content === "!web3") {
      const web3Embed = new MessageEmbed()
        .setColor(EMBED_COLOR_PRIMARY)
        .setURL(URL_DISCORD)
        .setAuthor(
          "author: " + msg.author.username,
          POLYGON_LOGO_COLOR,
          URL_POLYGON
        )
        .setDescription(BOT_NAME)
        .setThumbnail(POLYGON_LOGO)
        .addFields({
          name: "Click to go web3",
          value: URL_ROADWEB3,
          inline: true,
        })
        .setTimestamp()
        .setFooter(BOT_NAME_FOOTER, POLYGON_GLYPH_COLOR_REVERSE);
      msg.channel.send(web3Embed);
    }
  } catch (e) {
    msg.reply("ERROR");
    console.log(new Date().toISOString(), "ERROR", e.stack || e);
  }
});

client.login(process.env.DISCORD_TOKEN);
