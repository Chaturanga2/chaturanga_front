<template>
    <div class="container-xl px-4 mt-4">
        <!-- Account page navigation-->
        <ul class="nav nav-tabs">
            <li class="nav-item">
                <a @click="nav_index = 0" :class="{'nav-link': true, 'active': nav_index === 0}" href="#">PROFILE</a>
            </li>
            <li class="nav-item">
                <a @click="nav_index = 1" :class="{'nav-link': true, 'active': nav_index === 1}" href="#">AMI(E)S</a>
            </li>
            <li class="nav-item">
                <a @click="nav_index = 2" :class="{'nav-link': true, 'active': nav_index === 2}" href="#">STATS</a>
            </li>
        </ul>
        <hr class="mt-0 mb-4">
        <!-- amis -->
        <div v-if="nav_index === 1" class="row">
            <div class="col-xl-6">
                <div class="card mb-4 mb-xl-0">
                    <div class="card-header">Mes Ami(e)s</div>
                    <div class="card-body text-center m-0 p-0">
                        <div
                            v-for="(friend, index) in friends" :key="`friend-${index}`"
                            class="border d-flex align-items-center justify-content-between p-3">
                            <div>
                                <img :src="friends[0].avatar" alt="">
                                <span class="ms-4 text-uppercase fw-bold">{{ friend.name }}</span>
                            </div>
                            <div>
                                <div class="dropdown">
                                    <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Ami
                                    </button>
                                    <ul class="dropdown-menu">
                                        <li><button class="dropdown-item btn btn-link text-primary">Jouer</button></li>
                                        <li><button class="dropdown-item btn btn-link text-primary">Profile</button></li>
                                        <li><button class="dropdown-item btn btn-link text-danger">Supprimer</button></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-6">
                <div class="card mb-4 mb-xl-0">
                    <div class="card-header">Demandes d'ajout</div>
                    <div class="card-body text-center m-0 p-0">
                        <div
                            v-for="(friend, index) in friendRequests" :key="`friend-request-${index}`"
                            class="border d-flex align-items-center justify-content-between p-3">
                            <div>
                                <img :src="friends[1].avatar" alt="">
                                <span class="ms-4 text-uppercase fw-bold">{{ friend.name }}</span>
                            </div>
                            <div>
                                <div class="dropdown">
                                    <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Demande
                                    </button>
                                    <ul class="dropdown-menu">
                                        <li><button class="dropdown-item btn btn-link text-primary">Profile</button></li>
                                        <li><button class="dropdown-item btn btn-link text-primary">Accepter</button></li>
                                        <li><button class="dropdown-item btn btn-link text-danger">Supprimer</button></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- stats -->
        <div v-else-if="nav_index === 2" class="row">
            <div class="col-xl-4">
                <div class="card mb-4 mb-xl-0">
                    <div class="card-header">Mon profile</div>
                    <div class="card-body text-center">
                        <!-- Profile picture image-->
                        <div style="height: 200px;">
                            <img class="w-75 h-100 rounded-circle mb-2" :src="friends[2].avatar"
                                alt="">
                        </div>
                        <!-- Profile picture help block-->
                        <div class="small font-italic text-muted mb-4">Taille d'image inferieur 5 MB</div>
                        <!-- Profile picture upload button-->
                        <button class="btn btn-primary" type="button">Upload new image</button>
                    </div>
                </div>
            </div>
<!--            <div class="col-xl-8">-->
<!--                <div class="card mb-4">-->
<!--                    <div class="card-header">detail profile</div>-->
<!--                    <div class="card-body">-->
<!--                        <form>-->
<!--                            <div class="mb-3">-->
<!--                                <label class="small mb-1" for="inputUsername">PSEUDO</label>-->
<!--                                <input class="form-control" id="inputUsername" type="text"-->
<!--                                       placeholder="Enter your username" v-model="bizzz">-->
<!--                            </div>-->
<!--                            <div class="row gx-3 mb-3">-->
<!--                                <div class="col-md-6">-->
<!--                                    <label class="small mb-1" for="inputFirstName">NOM</label>-->
<!--                                    <input class="form-control" id="inputFirstName" type="text"-->
<!--                                           placeholder="Enter your first name" v-model="bazzz">-->
<!--                                </div>-->
<!--                                <div class="col-md-6">-->
<!--                                    <label class="small mb-1" for="inputLastName">PRENOM</label>-->
<!--                                    <input class="form-control" id="inputLastName" type="text"-->
<!--                                           placeholder="Enter your last name" v-model="bozzz">-->
<!--                                </div>-->
<!--                            </div>-->
<!--                            <div class="row gx-3 mb-3">-->
<!--                                <div class="col-md-6">-->
<!--                                    <label class="small mb-1" for="inputOrgName">NIVEAU DU JOUEUR</label>-->
<!--                                    <input class="form-control" id="inputOrgName" type="text"-->
<!--                                           placeholder="Enter your organization name" v-model="DEBUTANT" disabled>-->
<!--                                </div>-->
<!--                                <div class="col-md-6">-->
<!--                                    <label class="small mb-1" for="inputLocation">PAYS</label>-->
<!--                                    <input class="form-control" id="inputLocation" type="text"-->
<!--                                           placeholder="Enter your location" v-model="France">-->
<!--                                </div>-->
<!--                            </div>-->
<!--                            <div class="mb-3">-->
<!--                                <label class="small mb-1" for="inputEmailAddress">ADRESSE EMAIL</label>-->
<!--                                <input class="form-control" id="inputEmailAddress" type="email"-->
<!--                                       placeholder="Enter your email address" v-model="name@example.com">-->
<!--                            </div>-->
<!--                            <div class="row gx-3 mb-3">-->
<!--                                <div class="col-md-6">-->
<!--                                    <label class="small mb-1" for="inputPhone">MOT DE PASSE</label>-->
<!--                                    <input :disabled="true" class="form-control" id="inputPhone" type="tel"-->
<!--                                           placeholder="Enter your phone number" v-model="********">-->
<!--                                </div>-->
<!--                                <div class="col-md-6">-->
<!--                                    <br>-->
<!--                                    <button class="btn btn-outline-primary">MODIFIER LE MOT DE PASSE</button>-->
<!--                                </div>-->
<!--                                <div v-if="false" class="col-md-6">-->
<!--                                    <label class="small mb-1" for="inputBirthday">CONFIRMATION</label>-->
<!--                                    <input class="form-control" id="inputBirthday" type="text" name="birthday"-->
<!--                                           placeholder="Enter your birthday" v-model="********">-->
<!--                                </div>-->
<!--                            </div>-->
<!--                            <div class="row mb-5">-->
<!--                                <div class="col">-->
<!--                                    <label class="small mb-1" for="inputBiography">BIOGRAPHY</label>-->
<!--                                    <textarea class="form-control" name="biography" id="inputBiography"-->
<!--                                              rows="3"></textarea>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                            <button class="btn btn-primary" type="button">Mettre à jour</button>-->
<!--                        </form>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
        </div>
        <!-- profile -->
        <div v-else class="row">
            <div class="col-xl-4">
                <div class="card mb-4 mb-xl-0">
                    <div class="card-header">Mon profile</div>
                    <div class="card-body text-center">
                        <!-- Profile picture image-->
                        <div style="height: 200px;">
                            <img class="w-75 h-100 rounded-circle mb-2"
                                 :src="friends[3].avatar" alt="">
                        </div>
                        <!-- Profile picture help block-->
                        <div class="small font-italic text-muted mb-4">Taille d'image inferieur 5 MB</div>
                        <!-- Profile picture upload button-->
                        <button class="btn btn-primary" type="button">Upload new image</button>
                    </div>
                </div>
            </div>
            <div class="col-xl-8">
                <div class="card mb-4">
                    <div class="card-header">detail profile</div>
                    <div class="card-body">
                        <form>
                            <div class="mb-3">
                                <label class="small mb-1" for="inputUsername">PSEUDO</label>
                                <input class="form-control" id="inputUsername" type="text"
                                       placeholder="Enter your username" v-model="userData.username">
                            </div>
                            <div class="row gx-3 mb-3">
                                <div class="col-md-6">
                                    <label class="small mb-1" for="inputFirstName">NOM</label>
                                    <input class="form-control" id="inputFirstName" type="text"
                                           placeholder="Enter your first name" v-model="userData.first_name">
                                </div>
                                <div class="col-md-6">
                                    <label class="small mb-1" for="inputLastName">PRENOM</label>
                                    <input class="form-control" id="inputLastName" type="text"
                                           placeholder="Enter your last name" v-model="userData.last_name">
                                </div>
                            </div>
                            <div class="row gx-3 mb-3">
                                <div class="col-md-6">
                                    <label class="small mb-1" for="inputOrgName">NIVEAU DU JOUEUR</label>
                                    <input class="form-control" id="inputOrgName" type="text"
                                           placeholder="Enter your organization name" v-model="userData.level" disabled>
                                </div>
                            </div>
                            <div class="mb-3">
                                <label class="small mb-1" for="inputEmailAddress">ADRESSE EMAIL</label>
                                <input class="form-control" id="inputEmailAddress" type="email"
                                       placeholder="Enter your email address" v-model="userData.email">
                            </div>
                            <div class="row gx-3 mb-3">
                                <div class="col-md-6">
                                    <label class="small mb-1" for="inputPhone">MOT DE PASSE</label>
                                    <input :disabled="true" class="form-control" id="inputPhone" type="tel"
                                           placeholder="Enter your phone number" v-model="password">
                                </div>
                                <div class="col-md-6">
                                    <br>
                                    <button class="btn btn-outline-primary">MODIFIER LE MOT DE PASSE</button>
                                </div>
                                <div v-if="false" class="col-md-6">
                                    <label class="small mb-1" for="inputBirthday">CONFIRMATION</label>
                                    <input class="form-control" id="inputBirthday" type="text" name="birthday"
                                           placeholder="Enter your birthday" v-model="userData.confirmation">
                                </div>
                            </div>
                            <div class="row mb-5">
                                <div class="col">
                                    <label class="small mb-1" for="inputBiography">BIOGRAPHY</label>
                                    <textarea v-model="userData.biography" class="form-control" name="biography" id="inputBiography"
                                              rows="3"></textarea>
                                </div>
                            </div>
                            <button @click="updateUser()" class="btn btn-primary" type="button">Mettre à jour</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import UserService from "@/services/User.service";
import {User} from "@/types/users";
import {Form, Field, ErrorMessage} from 'vee-validate';
import {FormValidationService} from '@/services/FormValidation.service';
import { useTranslation } from '@/utilities/useTranslation';

export default defineComponent({
    name: "DashboardView",
    data() {
        return {
            userData: {} as User,
            password: '',
            password_confirmation: '',
            nav_index: 0,
            friends: [
                {
                    name: "John Doe",
                    avatar: "https://source.unsplash.com/QAB-WJcbgJk/60x60",
                    status: "online",
                },
                {
                    name: "Claire Robertson",
                    avatar: "https://source.unsplash.com/CS2uCrpNzJY/60x60",
                    status: "online",
                },
                {
                    name: "Marcus Simmons",
                    avatar: "https://source.unsplash.com/Mv9hjnEUHR4/60x60",
                    status: "away",
                },
                {
                    name: "Daisy Weber",
                    avatar: "https://source.unsplash.com/sNut2MqSmds/60x60",
                    status: "offline",
                },
            ],
            friendRequests: [
                {
                    name: "Kathie Burton",
                    avatar: "https://source.unsplash.com/7CA0yHTyJxE/60x60",
                },
                {
                    name: "Lloyd Brown",
                    avatar: "https://source.unsplash.com/44Adi3p7rHs/60x60",
                },
                {
                    name: "Alice Ayala",
                    avatar: "https://source.unsplash.com/0rTuvuxx6XE/60x60",
                },
            ],
        };
    },
    methods: {
        updateUser() {
            if (this.password !== '' && this.password_confirmation === this.password) {
                this.userData.password = this.password;
            }
           UserService.update(this.$store.getters.user_id, this.userData).then((response) => {
               this.$toast.success('Profile mis à jour avec succès');
           });
        },
    },
    mounted() {
        UserService.getUserProfile(this.$store.getters.user_id).then((response: User) => {
            this.userData = response;
        });
    }

});
</script>

<style scoped>

</style>
