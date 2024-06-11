<template>
    <div class="exercise1">
        {{ movieName }}
        <br>
        {{ release }}
        <br>
        {{ release > 2000 ? 'new' : 'old' }}
        <br>
        <input type="text" v-model="message">
        <br>
        {{ message }}
        <br>
        <input type="text" v-on:keyup.ctrl.enter="message">
        <br>
        {{ message }}

    </div>
</template>

<script>
export default {
    data() {
        return {
            movieName: "Starwar",
            release: 1999
        }
    }
}
</script>