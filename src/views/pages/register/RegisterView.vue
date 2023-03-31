<template>
    <div style="height: 80vh !important;" class="container d-flex align-items-center justify-content-center">
        <div class="col-12 col-md-10 col-lg-6 bg-white p-5 shadow p-3 mb-5 bg-body rounded">
            <h1 class="h5"> S'inscrire</h1>
            <Form @submit="handelRegister()" class="mt-5">
                <div class="row mb-3">
                    <div class="col-6">
                        <label for="email">Nom <span class="text-danger">*</span></label>
                        <ErrorMessage
                            name="email"/>
                        <Field
                            :rules="FormValidationService.checkEmail"
                            v-model="userData.first_name"
                            type="text"
                            class="form-control"
                            id="first_name"
                            placeholder="Votre nom"
                            name="first_name"
                        />
                    </div>
                    <div class="col-6">
                        <label for="email">Prénom <span class="text-danger">*</span></label>
                        <Field
                            :rules="FormValidationService.checkEmail"
                            v-model="userData.last_name"
                            type="text"
                            class="form-control"
                            id="last_name"
                            placeholder="Votre prénom"
                            name="last_name"
                        />
                    </div>
                </div>

                <div class="row mb-3">
                    <div class="col">
                        <label for="email">Pseudo <span class="text-danger">*</span></label>
                        <ErrorMessage
                            name="email"/>
                        <Field
                            :rules="FormValidationService.checkEmail"
                            v-model="userData.username"
                            type="text"
                            class="form-control"
                            id="username"
                            placeholder="Votre pseudo"
                            name="username"
                        />
                    </div>
                </div>

                <div class="row mb-3">
                    <div class="col">
                        <label for="email">Email <span class="text-danger">*</span></label>
                        <ErrorMessage
                            name="email"/>
                        <Field
                            :rules="FormValidationService.checkEmail"
                            v-model="userData.email"
                            type="email"
                            class="form-control"
                            id="email"
                            placeholder="Votre email"
                            name="email"
                        />
                    </div>
                </div>

                <div class="row mb-3">
                    <div class="col-6">
                        <label for="email">Mot de passe <span class="text-danger">*</span></label>
                        <ErrorMessage
                            name="email"/>
                        <Field
                            :rules="FormValidationService.pa"
                            v-model="userData.password"
                            type="password"
                            class="form-control"
                            id="password"
                            placeholder="Votre mot de passe"
                            name="password"
                        />
                    </div>
                    <div class="col-6">
                        <label for="email">Confirmation  <span class="text-danger">*</span></label>
                        <Field
                            :rules="FormValidationService.checkEmail"
                            v-model="userData.password_confirmation"
                            type="password"
                            class="form-control"
                            id="password_confirmation"
                            placeholder="Votre mot de passe"
                            name="password_confirmation"
                        />
                    </div>
                </div>
                <div class="row mt-5">
                    <button class="btn btn-outline-success"> Enrégistrer </button>
                </div>
            </Form>
        </div>
    </div>
</template>

<script lang="ts">

import {defineComponent} from 'vue';
import {Form, Field, ErrorMessage} from 'vee-validate';
import {FormValidationService} from '@/services/FormValidation.service'
import UserService from '@/services/User.service';

export default defineComponent({
    name: "RegisterView",
    components: {
        Form,
        Field,
        ErrorMessage
    },
    computed: {
        FormValidationService() {
            return FormValidationService
        }
    },
    data() {
        return {
            userData: {
                first_name: '',
                last_name: '',
                username: '',
                email: '',
                password: '',
                password_confirmation: '',
                level: 'DEBUTANT'
            }
        }
    },
    methods: {
        /**
         * @description Handle the registration of the user
         * @returns {Promise<void>}
         */
        async handelRegister(): Promise<void> {
            UserService.registration(this.userData).then(() => {
                this.$router.push({name: "DASHBOARD"});
            }).catch((error) => {
                this.$toast.error(error.response.data.message);
            });
        },
    }
});
</script>

<style scoped>
</style>
