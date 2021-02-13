import {
  IsBoolean,
  IsEmail,
  IsEnum,
  IsInt,
  IsOptional,
  IsString,
} from 'class-validator';
import { Column, Entity } from 'typeorm';
import { Base } from './base.entity';

export enum Status {
  ACTIVE,
  RESERVE,
}

export enum Rank {
  PV, //  이등병
  PV1, //  일병
  CORP, //  상병
  SERG, //  병장
  SSERG, //  하사
  SERG1, //  중사
  FSERG, //  상사
  CSG, //  원사
  WO, //  준위
  SL, //  소위
  FL, //  중위
  CAPT, //  대위
  MAJ, //  소령
  LC, //  중령
  COL, //  대령
  BG, //  준장
  MG, //  소장
  LG, //  중장
  GEN, //  대장
}

@Entity()
export class User extends Base {
  @Column({unique: true})
  @IsEmail()
  email: String;

  @Column()
  @IsString()
  password: String;

  @Column()
  @IsString()
  name: String;

  @Column({ type: 'boolean', default: false })
  @IsBoolean()
  isValid: Boolean;

  @Column()
  @IsOptional()
  @IsString()
  nickname?: String;

  @Column({ type: 'enum', enum: Status })
  @IsEnum(Status)
  @IsOptional()
  status?: Status;

  @Column()
  @IsString()
  token?: String;

  @Column({ type: 'enum', enum: Rank, default: Rank.PV})
  @IsOptional()
  @IsEnum(Rank)
  rank?: Rank;

  @Column({type: 'int'})
  @IsInt()
  division?: number;

  @Column({type: 'int'})
  @IsInt()
  brigade?: number;
}
