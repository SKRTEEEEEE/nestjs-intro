import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({whitelist:true})) //whitelist:true, para que no se pase ningun valor que no se espera. Si le pasamos mas valores de los esperados, NO nos va a dar un error, sino que simplemente no los va a tomar en cuenta y los va a eliminar.
  
  //swagger base
  const config = new DocumentBuilder()
    .setTitle('Testing NestJS')
    .setDescription('First API with NestJS')
    .setVersion('1.0')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  //cors base
  app.enableCors({
    origin: "https://profile-skrt.vercel.app"
  })

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
