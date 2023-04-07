<template>
    <footer>
        <div class="container d-flex justify-content-center">
            <nav class="nav">
                <router-link class="nav-link" :to="{name: 'HOME'}">Accueil</router-link>
                <router-link class="nav-link" :to="{name: 'CHESS_RULES'}">Règles</router-link>
                <!--                <router-link class="nav-link" :to="{name: 'ABOUT'}">À propos</router-link>-->
                <!--                <router-link class="nav-link" :to="{name: 'CONTACT'}">Contact</router-link>-->
            </nav>
        </div>
    </footer>
</template>

<style>
footer {
    background-color: #f2f2f2;
}

</style>
