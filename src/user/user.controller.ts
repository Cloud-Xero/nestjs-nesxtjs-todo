import { Body, Controller, Get, Patch, Req, UseGuards } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from '@prisma/client';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

export class UserController {}

  @Patch()
  updateUser(
    @Req() req: Request,
    @Body() dto: UpdateUserDto,
  ): Promise<Omit<User, 'hashPassword'>> {
    return this.userService.updateUser(req.user.id, dto);
  }
}
