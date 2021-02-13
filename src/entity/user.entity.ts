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
  email: string;

  @Column()
  @IsString()
  password: string;

  @Column()
  @IsString()
  name: string;

  @Column({ type: 'boolean', default: false })
  @IsBoolean()
  isValid: boolean;

  @Column()
  @IsOptional()
  @IsString()
  nickname?: string;

  @Column({ type: 'enum', enum: Status })
  @IsEnum(Status)
  @IsOptional()
  status?: Status;

  @Column()
  @IsString()
  token?: string;

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
