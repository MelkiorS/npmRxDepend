<template>
    <div class="container">
        <h1>show  NPN package dependency</h1>
        <p class="error" v-if="error">{{ error }}</p>
        <div class="create-post">
            <label for="package-name">package name </label>
            <input type="text" id="package-name" v-model="packageName">
            <button @click="checkDependency">Check</button>
        </div>
        <ul class="post-container">
            <li @click="checkDependDependency(name)" class="dependencies"
                    v-for="(version, name) in dependencies" :key = name>
                    {{ name }}: {{ version }}
            </li>
        </ul>
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
               //TODO for future =)
            } catch (e) {
                this.error = e.message;
            }
        },
        methods: {
            async checkDependency() {
               this.dependencies = await DependencyService.getDependency(this.packageName);
            },
            async checkDependDependency(packageName) {
               this.packageName = packageName;
               this.dependencies = [];
               this.dependencies = await DependencyService.getDependency(this.packageName);
            },

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

    ul {
        list-style-type: none;
    }

    li {
        position: relative;
        border: 1px solid #5bd658;
        background-color: #bcffb8;
        padding: 10px 10px 30px 10px;
        margin-bottom: 15px;
        font-size: 22px;
        font-weight: 700;
        cursor: pointer;
    }

</style>
