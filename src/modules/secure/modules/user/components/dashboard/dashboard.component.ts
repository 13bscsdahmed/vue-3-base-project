import Vue from 'vue';
import Component from 'vue-class-component';
import { Getter } from 'vuex-class';

import { storeConstants } from '@/store/store.constants';
import { AuthService } from '@/modules/shared/services';
import { appConstants } from '@/modules/utils/app.constants';
import { ProfileModel } from '../../models';

@Component({
})
export default class DashboardComponent extends Vue {
  @Getter(storeConstants.user.getters.GET_USER_PROFILE) profile: ProfileModel;

  mounted () {
    // TODO: remove log statement
    console.log(this.profile);
  }

  onClickLogout () {
    AuthService.endUserSession();

    this.$router.push(`/${appConstants.appRoutes._public}`);
  }
}
