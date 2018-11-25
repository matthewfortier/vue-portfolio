<template>
    <div id="app">
        <div class="nav">
            <router-link tag="span" to="/">Matthew Fortier.</router-link>
            <div class="menu">
                <ul>
                    <li>About</li>
                    <router-link tag="li" to="/blog">Blog</router-link>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
        <transition
            name="router-anim"
            enter-active-class="animated slideInUp"
            leave-active-class="animated fadeOut"
        >
            <router-view/>
        </transition>
    </div>
</template>

<style lang="scss">
@import url('./assets/fonts/fakt/fakt.css');
@import url('https://fonts.googleapis.com/css?family=Libre+Baskerville');
@import url('https://cdn.jsdelivr.net/npm/animate.css@3.5.1');

@font-face {
    font-family: 'Circular';
    src: url('./assets/fonts/circular-medium.ttf') format('truetype');
}

html,
body {
    margin: 0;
    padding: 0;
    //background-color: #101015;
    //background-color: black;

    font-family: 'Circular';
    //font-size: 62.5%;
}

#app {
    max-width: 74rem;
    margin: 0 auto;
}

.page {
    position: absolute;
    width: inherit;
    z-index: 0;
    padding: 0 60px;
    max-width: calc(74rem - 120px);
    overflow-y: auto;
}

.nav {
    position: relative;
    display: flex;
    align-items: center;
    padding: 2rem 60px;
    z-index: 1;
    background-color: white;

    span {
        font-size: 18px;
        cursor: pointer;
        user-select: none;
    }

    ul {
        list-style-type: none;
        padding: 0;
        margin: 0;

        li {
            display: inline;
            margin-left: 50px;
            font-size: 16px;
            cursor: pointer;
            user-select: none;
        }
    }
}

.post-html {
    p,
    blockquote,
    li {
        font-family: 'Fakt';
        font-size: 21px;
    }

    h2 {
        font-size: 24px;
        margin-top: 31px;
    }
}

@keyframes side-bounce {
    80% {
        transform: translateX(0);
    }
    90% {
        transform: translateX(5px);
    }
    100% {
        transform: translateX(0);
    }
}
</style>
