import { Bot } from "https://deno.land/x/grammy@v1.23.0/mod.ts";

const bot = new Bot("7095956620:AAFFfi0kzNh7Ahwdf95ywX9aygG4HSih13Y"); 

bot.command("start", (ctx) => ctx.reply("Hello from Deno & grammY!"));

bot.on("message", (ctx) => ctx.reply("How can I help you?"));

bot.start();
