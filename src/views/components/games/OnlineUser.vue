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
            <div class="col-xl-8">
                <div class="card mb-4">
                    <div class="card-header">detail profile</div>
                    <div class="card-body">
                        <form>
                            <div class="mb-3">
                                <label class="small mb-1" for="inputUsername">PSEUDO</label>
                                <input class="form-control" id="inputUsername" type="text"
                                       placeholder="Enter your username" value="bizzz">
                            </div>
                            <div class="row gx-3 mb-3">
                                <div class="col-md-6">
                                    <label class="small mb-1" for="inputFirstName">NOM</label>
                                    <input class="form-control" id="inputFirstName" type="text"
                                           placeholder="Enter your first name" value="bazzz">
                                </div>
                                <div class="col-md-6">
                                    <label class="small mb-1" for="inputLastName">PRENOM</label>
                                    <input class="form-control" id="inputLastName" type="text"
                                           placeholder="Enter your last name" value="bozzz">
                                </div>
                            </div>
                            <div class="row gx-3 mb-3">
                                <div class="col-md-6">
                                    <label class="small mb-1" for="inputOrgName">NIVEAU DU JOUEUR</label>
                                    <input class="form-control" id="inputOrgName" type="text"
                                           placeholder="Enter your organization name" value="DEBUTANT" disabled>
                                </div>
                                <div class="col-md-6">
                                    <label class="small mb-1" for="inputLocation">PAYS</label>
                                    <input class="form-control" id="inputLocation" type="text"
                                           placeholder="Enter your location" value="France">
                                </div>
                            </div>
                            <div class="mb-3">
                                <label class="small mb-1" for="inputEmailAddress">ADRESSE EMAIL</label>
                                <input class="form-control" id="inputEmailAddress" type="email"
                                       placeholder="Enter your email address" value="name@example.com">
                            </div>
                            <div class="row gx-3 mb-3">
                                <div class="col-md-6">
                                    <label class="small mb-1" for="inputPhone">MOT DE PASSE</label>
                                    <input :disabled="true" class="form-control" id="inputPhone" type="tel"
                                           placeholder="Enter your phone number" value="********">
                                </div>
                                <div class="col-md-6">
                                    <br>
                                    <button class="btn btn-outline-primary">MODIFIER LE MOT DE PASSE</button>
                                </div>
                                <div v-if="false" class="col-md-6">
                                    <label class="small mb-1" for="inputBirthday">CONFIRMATION</label>
                                    <input class="form-control" id="inputBirthday" type="text" name="birthday"
                                           placeholder="Enter your birthday" value="********">
                                </div>
                            </div>
                            <div class="row mb-5">
                                <div class="col">
                                    <label class="small mb-1" for="inputBiography">BIOGRAPHY</label>
                                    <textarea class="form-control" name="biography" id="inputBiography"
                                              rows="3"></textarea>
                                </div>
                            </div>
                            <button class="btn btn-primary" type="button">Mettre à jour</button>
                        </form>
                    </div>
                </div>
            </div>
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
                        <Form @submit="handleLogin()">
                            <div class="form-group">
                                <label for="email">Adresse e-mail</label>
                                <ErrorMessage
                                    name="email"/>
                                <Field
                                    :rules="formValidation.checkEmail"
                                    v-model="userData.email"
                                    type="email"
                                    class="form-control"
                                    id="email"
                                    placeholder="Entrez votre adresse e-mail"
                                    name="email"/>
                            </div>
                            <div class="form-group mt-3">
                                <label for="password">Mot de passe</label>
                                <ErrorMessage
                                    name="password"/>
                                <Field
                                    :rules="formValidation.checkPassword"
                                    v-model="userData.password"
                                    type="password"
                                    class="form-control"
                                    id="password"
                                    placeholder="Entrez votre mot de passe"
                                    name="password"/>
                            </div>
                            <button type="submit" class="btn btn-primary mt-3">Connexion</button>
                        </Form>
                        <form>
                            <div class="mb-3">
                                <label class="small mb-1" for="inputUsername">PSEUDO</label>
                                <input class="form-control" id="inputUsername" type="text"
                                       placeholder="Enter your username" value="bizzz">
                            </div>
                            <div class="row gx-3 mb-3">
                                <div class="col-md-6">
                                    <label class="small mb-1" for="inputFirstName">NOM</label>
                                    <input class="form-control" id="inputFirstName" type="text"
                                           placeholder="Enter your first name" value="bazzz">
                                </div>
                                <div class="col-md-6">
                                    <label class="small mb-1" for="inputLastName">PRENOM</label>
                                    <input class="form-control" id="inputLastName" type="text"
                                           placeholder="Enter your last name" value="bozzz">
                                </div>
                            </div>
                            <div class="row gx-3 mb-3">
                                <div class="col-md-6">
                                    <label class="small mb-1" for="inputOrgName">NIVEAU DU JOUEUR</label>
                                    <input class="form-control" id="inputOrgName" type="text"
                                           placeholder="Enter your organization name" value="DEBUTANT" disabled>
                                </div>
                                <div class="col-md-6">
                                    <label class="small mb-1" for="inputLocation">PAYS</label>
                                    <input class="form-control" id="inputLocation" type="text"
                                           placeholder="Enter your location" value="France">
                                </div>
                            </div>
                            <div class="mb-3">
                                <label class="small mb-1" for="inputEmailAddress">ADRESSE EMAIL</label>
                                <input class="form-control" id="inputEmailAddress" type="email"
                                       placeholder="Enter your email address" value="name@example.com">
                            </div>
                            <div class="row gx-3 mb-3">
                                <div class="col-md-6">
                                    <label class="small mb-1" for="inputPhone">MOT DE PASSE</label>
                                    <input :disabled="true" class="form-control" id="inputPhone" type="tel"
                                           placeholder="Enter your phone number" value="********">
                                </div>
                                <div class="col-md-6">
                                    <br>
                                    <button class="btn btn-outline-primary">MODIFIER LE MOT DE PASSE</button>
                                </div>
                                <div v-if="false" class="col-md-6">
                                    <label class="small mb-1" for="inputBirthday">CONFIRMATION</label>
                                    <input class="form-control" id="inputBirthday" type="text" name="birthday"
                                           placeholder="Enter your birthday" value="********">
                                </div>
                            </div>
                            <div class="row mb-5">
                                <div class="col">
                                    <label class="small mb-1" for="inputBiography">BIOGRAPHY</label>
                                    <textarea class="form-control" name="biography" id="inputBiography"
                                              rows="3"></textarea>
                                </div>
                            </div>
                            <button class="btn btn-primary" type="button">Mettre à jour</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import socket from "@/socketIo";

export default {
    name: "OnlineUser",
    data() {
        return {
            img: require('@/assets/pions/bishop_b.png'),
            users: [],
        }
    },
    methods: {
        getCell(xIndex, yIndex, cell) {
            if ((xIndex + yIndex) % 2 === 0) {
                return `<div>${cell}</div>`;
            }
            return `<div class=""><img src="${require('@/assets/pions/bishop_w.png')}" alt="bishop_b"></div>`;
        }
    },
    mounted() {
        socket.emit("getAuthUser");
        socket.on("getAuthUser", (users) => {
            console.log("Position data received from server:", users);
            this.users = users;
        });
    }
}
</script>

<style scoped>
.grid-row {
    display: flex;
}

.grid-header {
    width: 80px;
    height: 80px;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
}

.grid-cell {
    width: 80px;
    height: 80px;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f0d9b5;
}

.grid-cell-black {
    background-color: #779556;
    color: white;
}
</style>
