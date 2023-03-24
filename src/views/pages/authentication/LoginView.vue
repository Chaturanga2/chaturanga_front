<template>
  <div class="container my-5">
    <h1 class="text-center">Connexion</h1>
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card p-4">
          <Form @submit="handleLogin()" >
            <div class="form-group">
              <label for="email">Adresse e-mail</label>
              <ErrorMessage
                name="email" />
              <Field
                :rules="formValidation.checkEmail"
                v-model="userData.email"
                type="email"
                class="form-control"
                id="email"
                placeholder="Entrez votre adresse e-mail"
                name="email" />
            </div>
            <div class="form-group mt-3">
              <label for="password">Mot de passe</label>
              <ErrorMessage
                name="password" />
              <Field
                :rules="formValidation.checkPassword"
                v-model="userData.password"
                type="password"
                class="form-control"
                id="password"
                placeholder="Entrez votre mot de passe"
                name="password" />
            </div>
            <button type="submit" class="btn btn-primary mt-3">Connexion</button>
          </Form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import { Form, Field, ErrorMessage } from 'vee-validate';
import {FormValidationService} from '@/services/FormValidation.service'
import UserService from '@/services/User.service'
import { UserLoginResponse } from '@/types/users';

export default defineComponent({
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
    handleLogin(): void{
      UserService.login(this.userData).then((Response: UserLoginResponse) => {this.$store.dispatch("login", Response)})
    }
  }
})
</script>

<style scoped>
</style>
