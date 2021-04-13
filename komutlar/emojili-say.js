const Discord = require("discord.js");
const mapping = {
            '0': `<a:969_0:815697460344258660>`,
            '1': `<a:969_1:815682371575611412>`,
            '2': `<a:969_2:815697485653606420>`,
            '3': `<a:969_3:815682359860789279>`,
            '4': `<a:969_4:815682367213666324>`,
            '5': `<a:969_5:815682364298625075>`,
            '6': `<a:969_6:815682361294979092>`,
            '7': `<a:969_7:815682383768584252>`,
            '8': `<a:969_8:815682376423309352>`,
            '9': `<a:969_9:815682385609883658>`};

"abcdefghijklmnopqrstuvwxyz".split("").forEach(c => {
  mapping[c] = mapping[c.toUpperCase()] = `:regional_indicator_${c}:`;
});

exports.run = function(client, message, args) {

  
  let toplam = message.guild.memberCount;
  let sunucu = 
      `${toplam}`
      .split("")
      .map(c => mapping[c] || c)
      .join("")
  let onlinesayi = message.guild.members.cache.filter(
    only => only.presence.status != "offline"
  ).size;
  let online =
      `${onlinesayi}`
      .split("")
      .map(c => mapping[c] || c)
      .join("")
  let tag = message.guild.members.cache.filter(m => m.user.username.includes("☆")).size;
  let tagdakiler = 
      `${tag}`
      .split("")
      .map(c => mapping[c] || c)
      .join("")
  const voiceChannels = message.guild.channels.cache.filter(c => c.type === 'voice');
  let count = 0;
  for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
  let ses =
      `${count}`
      .split("")
      .map(c => mapping[c] || c)
      .join("")
  let boost = message.guild.premiumSubscriptionCount
  let boostcuk = `${boost}`.split("").map(a => mapping[a] || '0')
  .join("")
  const say = new Discord.MessageEmbed()
  .setDescription(`${client.emojis.cache.get('817830708373880873')} **Kullanıcı Sayısı;** ${sunucu} \n${client.emojis.cache.get('817830708373880873')} **Aktif Kullanıcı Sayısı;** ${online} \n${client.emojis.cache.get('817830708373880873')} **Taglı Kullanıcı Sayısı;** ${tagdakiler} \n${client.emojis.cache.get('817830708373880873')} **Sesli Bulunan Kullanıcı Sayısı;** ${ses}\n${client.emojis.cache.get('817830708373880873')} **Boost Sayısı;** ${boostcuk}`);
  
  message.channel.send(say)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["onlinesayi"],
  permLevel: 0
};

exports.help = {
  name: "say",
  usage: "Sunucudaki Online Kişileri Sayar",
  desscription: "say"
};