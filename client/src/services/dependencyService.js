import Vue from "vue";

const url = 'api/v1/dependency/';

export default class DependencyService {
    // Get posts
    static async getDependency(name) {
        console.log(`name = ${name}`);
        return await Vue.axios.get(url + name)
            .then(function (rsp) {
                console.log(rsp.data);
                return  rsp.data;
            });
    }

    // Creat post
    static createPost(text) {
        return  Vue.axios.post(url, {text})
            .then(rsp=>{
                if (rsp.status === 201){
                    console.log('Cool');
                }
            });
    }

    // Delete post
    static deletePost(id) {
        return Vue.axios.delete(`${url}${id}`);
    }
}



