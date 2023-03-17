<template>
    <footer>
        <div class="container d-flex justify-content-center">
            <nav class="nav">
                <router-link class="nav-link" :to="{name: 'HOME'}">{{t("routes.home")}}</router-link>
                <router-link class="nav-link" :to="{name: 'CHESS_RULES'}">{{t("routes.rules")}}</router-link>
            </nav>
        </div>
    </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useTranslation } from '../../../utils/useTranslation';

export default defineComponent({
    setup() {
        const { t } = useTranslation()
        return { t };
    },
    name: 'FooterComponent',
});
</script>

<style>
footer {
    background-color: #f2f2f2;
}

</style>
