import Vue from 'vue';
import Component from 'vue-class-component';
import { appConstants } from '@/modules/utils/app.constants';

import { PublicService } from '../../services';
import { AuthService } from '@/modules/shared/services';

@Component({})
export default class LoginComponent extends Vue {
  publicService = new PublicService();
  email = '';
  password = '';
  hasLoginError = false;
  hasError = false;

  mounted () {
  }

  onSubmit () {
    this.resetErrors();

    this.publicService
      .login({ email: this.email, password: this.password })
      .then((res) => {
        if (res.status === 200) {
          const token = res.headers[appConstants.TOKEN_HEADER_KEY];

          this.processLogin(token);
        } else {
          this.hasError = true;
        }
      })
      .catch((err) => {
        if (err.response && err.response.status === 401) {
          this.hasLoginError = true;
        } else {
          this.hasError = true;
        }
      });
  }

  /**
   * Process login of user by initializing session from token
   * @param token JWT token sent by api
   */
  processLogin (token: string) {
    AuthService.initUserSession(token);

    this.$router.push(`/${appConstants.appRoutes.appRoot}`);
  }

  resetErrors () {
    this.hasError = false;
    this.hasLoginError = false;
  }
}
