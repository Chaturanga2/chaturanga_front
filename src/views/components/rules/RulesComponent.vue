<template>
    <div >
        <div class="d-flex align-items-center justify-content-start" v-for="(rule, index) in $parent.rules" :key="index">
            <img :src="rule.img"  alt=""/>
            <div> {{ rule.name }} : {{ rule.description }}</div>
        </div>


    </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
    name: "RulesComponent"
});
</script>

<style scoped>

</style>
