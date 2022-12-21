/*
 * Copyright (c) 2022. DungCW
 */

import { Photo } from './photo';

export interface Member {
  id: number;
  userName: string;
  photoUrl: string;
  city: string;
  country: string;
  age: number;
  gender: string;
  interests: string;
  introduction: string;
  knownAs: string;
  lookingFor: string;
  created: Date;
  lastActive: Date;
  photos: Photo[];
}
