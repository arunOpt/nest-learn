import { NestFactory } from '@nestjs/core';
import { MessagesModule } from './messages/messages.module';
// import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
async function bootstrap() {
  const app = await NestFactory.create(MessagesModule);
  app.useGlobalPipes(new ValidationPipe()); //apply validation pipe globally
  await app.listen(3000);
}
bootstrap();
