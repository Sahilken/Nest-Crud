import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentSchema } from './schema/student.schema';
import { StudentService } from './student/student.service';
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/anime', {
      // dbName: 'studentdb',
    }),
    MongooseModule.forFeature([{ name: 'Student', schema: StudentSchema }]),
  ],
  controllers: [AppController],
  providers: [AppService, StudentService],
})
export class AppModule {}
