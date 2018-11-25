<template>
    <div class="posts page">
        <ul :style="{ transform: 'translateY('+ translate +'px)' }">
            <div class="post" v-for="post in posts" :key="post.slug" @click="navigate(post.slug)">
                <p class="title">{{ post.title }}</p>
                <p class="description">
                    {{ post.body.slice(0, 250) }}
                    <span class="read">...read more</span>
                </p>
                <p class="date">
                    {{ post.updated || post.created }}
                    <span
                        v-if="post.tags"
                        v-for="tag in post.tags"
                        :key="tag"
                    >{{tag}}</span>
                </p>
            </div>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Posts',
    data() {
        return {
            posts: [],
            translate: 0
        };
    },
    methods: {
        navigate(slug) {
            this.$router.push(`/blog/${slug}`);
        }
    },
    created() {
        this.$fb.db
            .ref('posts')
            .on('child_added', snapshot => this.posts.push(snapshot.val()));
    },
    mounted() {
        document.addEventListener('mousemove', e => {
            // eslint-disable-next-line
            //this.translate = (-e.clientY + 85) * 5;
        });
    }
};
</script>

<style lang="scss" scoped>
.posts {
    ul {
        padding: 0;
        margin: 0;
    }
    .post {
        list-style-type: none;
        padding: 20px 0;
        margin: 0;
        font-size: 1.8rem;
        transition: all 0.2s ease-in-out;
        cursor: pointer;
        border-bottom: 1px solid #eee;

        &:hover p,
        &:hover span {
            color: black !important;
        }

        .description {
            font-size: 14px;
            color: rgba(black, 0.5);
        }

        .title {
            font-size: 18px;
        }

        .date {
            font-size: 14px;
            color: rgba(black, 0.5);
        }

        .read:hover {
            text-decoration: underline;
        }
    }
}
</style>
