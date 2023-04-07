<template>
  <div class="container">
      <h1 class="text-center">{{ t('home.welcome') }}</h1>
      <div class="col text-center py-5 mt-5">
          <img src="../../../assets/board.png" class="rounded w-50 h-50" alt="">
      </div>
    <div class="col col-md-10 text-center card-body mx-auto">
      <h2>{{ t('home.whoAreWe') }}</h2>
      <p class="mb-4">{{ t('home.ourGoal') }}</p>
      <h2>{{ t('home.howToPlay') }}</h2>
      <p class="mb-4">{{ t('home.instructions.firstInfos') }}
        <br>
        {{ t('home.instructions.secondInfos') }}
      </p>
      <button class="btn btn-lg btn-danger mb-3 mt-3 ">{{ t('home.playNow') }}</button>
      <p>{{ t('home.toChessRules') }} <router-link to="/ChessRules">{{ t("routes.rules") }}</router-link></p>
    </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useTranslation } from '@/utilities/useTranslation';

export default defineComponent({
  setup() {
    const { t } = useTranslation();
    return { t }
  },
  name: 'HomeView',
});
</script>

<style scoped></style>
