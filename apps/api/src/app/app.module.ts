import { Module } from '@nestjs/common';
import { GlobalModule } from '../global/global.mudule';
import { UserModule } from '../user/user.module';
import { AuthModule } from '../auth/auth.module';
import { CourseModule } from '../course/course.module';
import { UserProgressModule } from '../user-progress/user-progress.module';
import { ToolModule } from 'src/tool/tool.module';

@Module({
  imports: [
    GlobalModule,
    UserModule,
    AuthModule,
    CourseModule,
    UserProgressModule,
    ToolModule,
  ],
})
export class AppModule {}