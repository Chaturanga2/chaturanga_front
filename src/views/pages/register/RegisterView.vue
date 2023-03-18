<template>
    <div class="container my-5">
        <h1 class="text-center">{{ t("forms.register") }}</h1>
        <div class="row justify-content-center">
            <div class="col-md-6">
                <div class="card p-4">
                    <form>
                        <div class="form-grou mt-3">
                            <label for="name">{{ t("forms.username") }}</label>
                            <input type="text" class="form-control" id="name" placeholder="Entrez votre nom complet">
                        </div>
                        <div class="form-group mt-3">
                            <label for="email">{{ t("forms.email") }}</label>
                            <input 
                                type="email" 
                                class="form-control" 
                                id="email" 
                                :placeholder="t('forms.email', { before: t('forms.placeholder') })"
                            >
                        </div>
                        <div class="form-group mt-3">
                            <label for="password">{{ t("forms.password") }}</label>
                            <input 
                                type="password" 
                                class="form-control" 
                                id="password" 
                                :placeholder="t('forms.password', { before: t('forms.placeholder') })"
                            >
                        </div>
                        <div class="form-group mt-3">
                            <label for="password_confirmation">{{ t('forms.password', { before: t('forms.confirm') }) }}</label>
                            <input type="password" class="form-control" id="password_confirmation" :placeholder="t('forms.password', { before: t('forms.confirm') })">
                        </div>
                        <button type="submit" class="btn btn-primary mt-3">{{ t("forms.register") }}</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">

import {defineComponent} from 'vue';
import {Form, Field, ErrorMessage} from 'vee-validate';
import {FormValidationService} from '@/services/FormValidation.service'
import { useTranslation } from '@/utilities/useTranslation';
import UserService from '@/services/User.service';

export default defineComponent({
    setup() {
        const { t } = useTranslation();
        return { t }
    },
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
