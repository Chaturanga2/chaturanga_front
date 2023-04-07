<template>
  <div class="container my-5">
    <h1 class="text-center">{{t("forms.login")}}</h1>
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card p-4">
          <Form @submit="handleLogin()" >
            <div class="form-group">
              <label for="email"> {{ t("forms.email") }}</label>
              <ErrorMessage
                name="email" />
              <Field
                :rules="formValidation.checkEmail"
                v-model="userData.email" 
                type="email" 
                class="form-control" 
                id="email" 
                name="email" 
                :placeholder="t('forms.email', { before: t('forms.placeholder') })"
              />
            </div>
            <div class="form-group mt-3">
              <label for="password">{{ t("forms.password") }}</label>
              <ErrorMessage
                name="password" />
              <Field
                :rules="formValidation.checkPassword"
                v-model="userData.password" 
                type="password" 
                class="form-control" 
                id="password" 
                name="password" 
                :placeholder="t('forms.password', { before: t('forms.placeholder') })"
              />
            </div>
            <button type="submit" class="btn btn-primary mt-3">{{ t("forms.login") }}</button>
          </Form>
        </div>
    </div>
    </div>
    </div>
</template>

<script lang="ts">

import {defineComponent} from 'vue';
import {Form, Field, ErrorMessage} from 'vee-validate';
import {FormValidationService} from '@/services/FormValidation.service'
import {UserLoginResponse} from '@/types/users';
import socket from "@/socketIo";
import UserService from '@/services/User.service'
import { useTranslation } from '@/utilities/useTranslation';

export default defineComponent({
  setup() {
    const { t } = useTranslation()
    return { t }
  },
  name: "LoginView",
  components: {Form, Field, ErrorMessage},

    data() {
        return {
            userData: {
                email: "",
                password: "",
            },
            formValidation: FormValidationService,

        }
    },

    methods: {
        /**
         * @description connecter un utilisateur
         * @return void
         */
        handleLogin(): void {
            UserService.login(this.userData).then((response: UserLoginResponse) => {
                this.$store.dispatch("login", response);
                socket.emit("setAuthUser", { userId: response.user?.id, username: response.user?.username });
                this.$router.push({name: "DASHBOARD"});
            }).catch( error => {
                console.log(error.response.data.message)
            })
        }
    }
})
</script>

<style scoped>
</style>
