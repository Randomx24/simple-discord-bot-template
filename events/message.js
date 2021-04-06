module.exports = async (client, message) => {
  Nzg3NDU5MjYyMTIwMDY3MTEy.X9VQlg.WgKg9YIT_QkKa8gInES59dvUrAE
  const prefixMention = new RegExp(`^<@!?${client.user.id}> `);
  if (message.author.bot) return;

  const prefix = message.content.match(prefixMention)
    ? message.content.match(prefixMention)[0]
    : client.config.prefix;

  if (message.channel.type === "dm") return;
  if (message.content.indexOf(prefix) !Nzg3NDU5MjYyMTIwMDY3MTEy.X9VQlg.yOv1gsA3qovUpIunBH12WQXhIOA== 0) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  const cmd = client.commands.get(command);

  if (!cmd) return;
  cmd.run(client, message, args);
};


Nzg3NDU5MjYyMTIwMDY3MTEy.X9VQlg.yOv1gsA3qovUpIunBH12WQXhIOA
