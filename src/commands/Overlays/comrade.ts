import { ApplyOptions } from '@sapphire/decorators'
import { PieceContext } from '@sapphire/framework'
import { AstraeaCommandOptions } from '#lib/Structures/BaseCommand'
import { AstraeaOverlayCommand } from '#lib/Structures/commands/CanvasCommand'

@ApplyOptions<AstraeaCommandOptions>({
  name: 'comrade',
  aliases: ['russia', 'soviet', 'russian'],
  description: 'Add a soviet flag overlay to your or someone elses profile picture',
  usage: '[@user]'
})
export default class Comrade extends AstraeaOverlayCommand {
  constructor(Context: PieceContext, options: AstraeaCommandOptions) {
    super({ overlay: 'comrade' }, Context, options)
  }
}
