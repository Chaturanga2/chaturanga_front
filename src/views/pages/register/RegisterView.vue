<template>
  <div class="container my-5">
    <h1 class="text-center">Inscription</h1>
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card p-4">
          <Form @submit="handleRegistration()" >
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
            <button type="submit" class="btn btn-primary mt-3">Inscription</button>
          </Form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import { Form, Field, ErrorMessage } from 'vee-validate';
import { FormValidationService } from '@/services/FormValidation.service';
//import UserService from '@/services/User.service';
//import { UserRegisterResponse } from '@/types/users';

export default defineComponent({
  name: "RegisterView",

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
    handleRegistration(): void{
      //UserService.register(this.userData).then((response: UserRegisterResponse) => {this.$store.dispatch("register", response)})
      const test = {user: this.userData, token: "Azertty"}
      this.$store.dispatch("register", test)
    }
  }
})
</script>

<style scoped>
</style>
