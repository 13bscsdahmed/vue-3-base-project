export interface PluckApiReponseModel <T> {
  success: boolean;
  message: string;
  data: T;
};
