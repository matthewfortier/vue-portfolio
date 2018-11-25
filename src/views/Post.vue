<template>
    <div class="post">
        <div v-if="post" class="post-content">
            <div
                class="hero"
                v-if="post.hero"
                :style="{ backgroundImage: 'url(' + post.hero + ')' }"
            ></div>
            <div class="post-body">
                <div class="post-details">
                    <div class="post-details-image"></div>
                    <div class="post-details-text">
                        <p>Matthew Fortier</p>
                        <p>{{ post.updated || post.created }}</p>
                    </div>
                </div>
                <div class="post-tags">
                    <span v-if="tags" v-for="tag in post.tags" :key="tag">{{ tag }}</span>
                </div>
                <h1 class="post-title">{{ post.title }}</h1>
                <div class="post-html" v-html="body"></div>
                <div class="comments">
                    <vue-disqus shortname="matthewfortier-io" :identifier="post.slug" :url="url"></vue-disqus>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
var marked = require('marked');

export default {
    name: 'Post',
    data() {
        return {
            post: null,
            url: ''
        };
    },
    created() {
        this.$fb.db
            .ref('posts')
            .orderByChild('slug')
            .equalTo(this.$route.params.slug)
            .on('child_added', snapshot => {
                this.post = snapshot.val();
                this.body = marked(this.post.body);
                this.url = `https://matthewfortier.io/blog/${post.slug}`;
            });
    }
};
</script>

<style lang="scss" scoped>
.post {
    width: 100%;
    color: #263238;

    .post-content {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;

        .hero {
            padding: 15%;
            background-size: cover;
            background-position: center;
        }

        .post-title {
            margin-top: 5px;
        }

        .post-tags {
            margin-top: 21px;
            span {
                margin-right: 10px;
                color: #37474f;
                cursor: pointer;
            }
        }

        .post-details {
            margin-top: 21px;
            display: flex;

            .post-details-text {
                margin-left: 20px;

                p {
                    margin: 0;
                    padding: 0;

                    &:nth-child(1) {
                        font-weight: bold;
                    }

                    &:nth-child(2) {
                        color: #37474f;
                    }
                }
            }

            .post-details-image {
                height: 60px;
                width: 60px;
                box-shadow: 0 0 0 2px #f5f5f5, 0 0 0 4px #37474f;
                border-radius: 50px;
                background-image: url('../assets/me.jpg');
                background-size: cover;
                background-position: center;
            }
        }

        .post-body {
            display: flex;
            flex-direction: column;
            justify-content: center;

            max-width: 740px;
            margin: 0 auto;
        }
    }
}
</style>

