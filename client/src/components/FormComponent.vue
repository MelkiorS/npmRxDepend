<template>
    <div class="container">
        <h1>Package dependency</h1>
        <p class="error" v-if="error">{{ error }}</p>
        <div class="create-post">
            <label for="package-name">Package name</label>
            <input type="text" id="package-name" v-model="packageName">
            <button @click="checkDependency">Check</button>
        </div>
        <div class="post-container">
      <!--      <div class="post"
                 v-for="post in posts"
                 :key="post._id"
                 @dblclick="deletePost(post._id)">
                <p class="text">{{ post.text }}</p>
            </div>-->
        </div>
    </div>
</template>

<script>
    import DependencyService from "../services/dependencyService";
    export default {
        name: 'FormComponent',
        data() {
            return {
                dependencies: [],
                error: '',
                packageName: '',
                version:'latest'
            }
        },
        async created(){
            try {
                // this.posts = await PostService.getPosts();
                // console.log(this.posts);
            } catch (e) {
                this.error = e.message;
            }
        },
        methods: {
            async checkDependency() {
               this.dependencies = await DependencyService.getDependency(this.packageName);
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    div.container {
        max-width: 800px;
        margin: 0 auto;
    }

    p.error {
        border: 1px solid #ff5b5f;
        background-color: #ffc5c1;
        padding: 10px;
        margin-bottom: 15px;
    }

    div.post {
        position: relative;
        border: 1px solid #5bd658;
        background-color: #bcffb8;
        padding: 10px 10px 30px 10px;
        margin-bottom: 15px;
    }

    div.created-at{
        position: absolute;
        top: 0;
        left: 0;
        padding: 5px 15px 5px 15px;
        background-color: darkgreen;
        color: white;
        font-size: 13px;
    }

    p.text {
        font-size: 22px;
        font-weight: 700;
        margin-bottom: 0;
    }
</style>
