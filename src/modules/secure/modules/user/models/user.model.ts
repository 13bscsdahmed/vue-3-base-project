export interface ProfileModel {
  _id: string;
  email: string;
  name: string;
  userType: string;
  gender: string;
  isVerifed: boolean;
  isConnected: boolean;
  isActive: boolean;
  isDeleted: boolean;
  isProfileCompleted: boolean;
  countryCode?: string;
  dateOfBirth?: string;
  timeZone?: string;
  signUpDate: number;
  gameAccountConnectedDate?: string;
  iat: number;
  exp: number;
};

export interface UserModel {
  profile?: ProfileModel
};
