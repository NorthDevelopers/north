import { AstraeaRedditCommand, AstraeaCommandOptions } from '../../lib/Structures/Command'
import { PieceContext } from '@sapphire/framework'
import { ApplyOptions } from '@sapphire/decorators'

@ApplyOptions<AstraeaCommandOptions>({
	name: 'astrophotograhy',
	aliases: ['astronomy', 'astrophotography', 'astro'],
	description: 'Returns a Image from r/astrophotography',
	cooldownLimit: 3,
	cooldownDelay: 2000
})
export default class Astrophotography extends AstraeaCommand {
	public async run (message: Message): Promise<Message> {
		const { post, url }: RedditImage = await this.container.client.ksoft.images.reddit('astrophotography', { removeNSFW: true, span: 'day' })
		const embed = new MessageEmbed()
			.setTitle(post.title)
			.setFooter(`Powered by api.ksoft.si ${post.author} | Upvotes: ${post.upvotes} | Downvotes ${post.downvotes}`)
			.setURL(post.link)
			.setTimestamp()
			.setImage(url)
			.setColor('DARK_GREEN')
		return await message.channel.send(embed)
	}
}
