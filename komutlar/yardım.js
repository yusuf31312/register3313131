const Discord = require('discord.js')

const ayarlar = require('../ayarlar.json')

let prefix = ayarlar.prefix

exports.run = async (client, message, args) => { 

  

  const nameles = new Discord.MessageEmbed()

  .setColor("BLACK")

  .setTitle('  Register Botu Menüsü')

  .addField("\<a:nlem:818060352508002336> .e",`Kişiyi Erkek Şekilde Kayıt Eder`)
  
  .addField("\<a:nlem:818060352508002336> .k",`Kişiyi Bayan Şekilde Kayıt Eder`)
  
  .addField("\<a:nlem:818060352508002336> .ktop",`Kayıt Edenlerin Toplam Kayıt Listesini Atar`)
  
  .addField("\<a:nlem:818060352508002336> .kstat",`Kişisel Kayıtlarınızı Gösterir`)

  .addField("\<a:nlem:818060352508002336> .cv",`Kişinin Sicilini Gösterir`)
  
  .addField("\<a:nlem:818060352508002336> .sıfırla",`Kişinin Davetlerini Sıfırlar (Yetkililer İçindir)`)
  
 message.channel.send(nameles)

}

exports.conf = {

  enabled: true,

  guildOnly: false,

  permLevel: 0,

  aliases: ['help', 'h', 'y', 'yardım']

}

exports.help = {

  name: 'yardım',

  description: 'Yardım Menüsünü Açar',

  usage: 'yardım'

}