import { Client, Message } from 'discord.js';
import * as config from './config';

interface Run {
	(client: Client, message: Message, args?: string[])
};
export interface Command {
	name: string,
  run: Run,
  perms?: string[],
	cat?: string,
	help?: string,
	aliases?: string[],
	usage?: string,
	ownerOnly?: boolean
};



export let Mitsuha = {
  execCommand: (msg: Message) => {
    if(msg.author.bot) return;
    config.prefixes.forEach((prefix) => {
      if(msg.content.startsWith(prefix)){
        const arr:string[] = msg.content.split(' ');
        const cmd: string = arr[0].split(prefix)[1]
          || arr[0].split(`${prefix}, `)[1]
          || '';
        
      }
    })
  },
}