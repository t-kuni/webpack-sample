<template>
    <div class="example">{{ msg }}</div>
</template>

<script>
    export default {
        data() {
            return {
                msg: 'Hello Vue Component!'
            }
        }
    }
</script>

<style>
    .example {
        color: red;
    }
</style>