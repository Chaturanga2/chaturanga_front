<template>
  <div>
    <section class="page_404">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="col-sm-10 col-sm-offset-1 text-center">
              <div class="four_zero_four_bg">
                <h1 class="text-center">{{ t("errors.pageNotFound.404") }}</h1>
              </div>
              <div class="contant_box_404">
                <h3 class="h2">{{ t("errors.pageNotFound.title") }}</h3>
                <p>{{ t("errors.pageNotFound.message") }}</p>
                <router-link :to="{ name: 'HOME' }" class="link_404">
                  {{ t("routes.home") }}
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">

import { defineComponent } from "vue";
import { PATHS_NAME } from "../constants";
import { useTranslation } from "@/utilities/useTranslation";
export default defineComponent({
  setup() {
    const { t } = useTranslation();
        return { t };
    },
  name: "PageNotFoundView",
  data() {
    return {PATHS_NAME}
  }
});

</script>

<style scoped>
.page_404 {
  padding: 40px 0;
  background: #fff;
  font-family: "Arvo", serif;
}

.page_404 img {
  width: 100%;
}

.four_zero_four_bg {
  background-image: url("https://miro.medium.com/max/1400/0*XycmunXRNXM09UW9.gif");
  height: 400px;
  background-position: center;
}

.four_zero_four_bg h1 {
  font-size: 80px;
}

.four_zero_four_bg h3 {
  font-size: 80px;
}

.link_404 {
  color: #fff !important;
  padding: 10px 20px;
  background: #39ac31;
  margin: 20px 0;
  display: inline-block;
}

</style>
