import { Controller, Get, Post } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {
    return "Hello world";
  }

  @Get(':id')
  getMessage() {
    return "Hello world";
  }

  @Post()
  createMessage() {
    return "Hello world";
  }
}
