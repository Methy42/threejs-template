<template>
    <div class="container">
        <div class="3d-content" ref="3dContent"></div>
        <div class="ui-content">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
import { canvas } from "../3D";

export default {
    data() {
        return {};
    },
    mounted() {
        this.$refs["3dContent"].appendChild(canvas);
    }
}
</script>
<style></style>