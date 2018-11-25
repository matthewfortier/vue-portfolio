<template>
    <div class="home page">
        <div class="hero">
            <p>Hello, I'm Matt. I am a Front-End
                <br>Developer with a passion for creating beautiful
                <br>user experiences using modern frameworks and tools.
            </p>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src

export default {
    name: 'home',
    components: {}
};
</script>

<style lang="scss">
.home {
    .hero {
        p {
            font-size: 48px;
            padding: 100px 0px;
        }
    }
}
</style>
