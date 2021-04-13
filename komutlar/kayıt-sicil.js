const Discord = require("discord.js")
const db = require('quick.db');
exports.run = async(client, message, args) => {    
 if(!message.member.roles.cache.some(r => ["812209936309551135"].includes(r.id))) //
    return message.reply("Bu Komutu Kullanmak İçin Yeterli Yetkin Bulunmamakta !").then(x => x.delete({timeout: 5000}));
  //------------------------------------------------KAYITLAR-----------------------------------------------\\   iht 
 let adam = message.mentions.users.first()
if(!adam) {
  let cezapuan = db.fetch(`cezaPuan.${message.author.id}`);
  let jailsorgu = db.fetch(`jailSorgu.${message.author.id}`);
  let mutesorgu = db.fetch(`muteSorgu.${message.author.id}`);
  let smutealma = db.fetch(`smuteAlma.${message.author.id}`);
  let jailsebep = db.fetch(`jailreason.${message.author.id}`)

  if(cezapuan === null) cezapuan = "0" 
  if(cezapuan === undefined) cezapuan = "0" 
  if(smutealma === null) smutealma = "0" 
  if(smutealma === undefined) smutealma = "0" 
  if(jailsorgu === null) jailsorgu = "0"
  if(jailsorgu === undefined) jailsorgu = "0"
  if(mutesorgu === null) mutesorgu = "0"
  if(mutesorgu === undefined) mutesorgu = "0"
  const kaytlar = new Discord.MessageEmbed()
 .setThumbnail(message.author.avatarURL())     
    .setTitle(`${message.author.username|| message.mentions.members.first}`) 
    .setDescription(`• Jaile Girme Sayısı: \`${jailsorgu}\`
• Mutelenme Sayısı: \`${mutesorgu}\`
• Ses Mutelenme Sayısı: \`${smutealma}\`
• Toplam Ceza Puanın: \`${cezapuan}\`

`)
   .setColor("0x2f3136")
  return message.channel.send(kaytlar)
};
if(adam) {
 let cezapuan2 = await db.fetch(`cezaPuan.${adam.id}`) 
 let jailsorgu2 = await db.fetch(`jailSorgu.${adam.id}`)
 let mutesorgu2 = db.fetch(`muteSorgu.${adam.id}`); 
  let smutealma2 = db.fetch(`smuteAlma.${message.author.id}`);
  let jailsebep2 = db.fetch(`jailreason.${adam.id}`)
  if(cezapuan2 === null) cezapuan2 = "0" 
  if(cezapuan2 === undefined) cezapuan2 = "0" 
  if(smutealma2 === null) smutealma2 = "0" 
  if(smutealma2 === undefined) smutealma2 = "0" 
  if(jailsorgu2 === null) jailsorgu2 = "0"    
  if(jailsorgu2 === undefined) jailsorgu2 = "0"
  if(mutesorgu2 === null) mutesorgu2 = "0"
  if(mutesorgu2 === undefined) mutesorgu2 = "0"
  const kaytlar2 = new Discord.MessageEmbed()
 .setThumbnail(adam.avatarURL())     
    .setTitle(`${adam.username}`) 
    .setDescription(`• Jaile Girme Sayısı:  \`${jailsorgu2}\`
• Mutelenme Sayısı:  \`${mutesorgu2}\`
• Ses Mutelenme Sayısı: \`${smutealma2}\`
• Toplam Ceza Puanları: \`${cezapuan2}\`

`)
    .setColor("0x2f3136")
  return message.channel.send(kaytlar2)
}}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['cv'],
  permLevel: 0,
  kategori: ``
};

exports.help = {
  name: 'cv',
  description: '',
  usage: ''
};