import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateUser(email: string, pass: string): Promise<any> {
    try {
      const user = await this.usersService.findOneByEmail(email);

      const isMatch = await bcrypt.compare(pass, user.password);

      if (user && isMatch) {
        const { password, ...result } = user;
        return result;
      }
      return null;
    } catch (e) {
      console.log(e);
    }
  }
}
