/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 3000;
  const globalPrefix = 'api';
  const options = new DocumentBuilder()
    .setTitle('Giggly Goals API')
    .setDescription('The API that powers Giggly Goals')
    .setVersion('1.0')
    .addServer(`http://localhost:${port}/${globalPrefix}`, 'Local environment')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document);

  app.setGlobalPrefix(globalPrefix);
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
