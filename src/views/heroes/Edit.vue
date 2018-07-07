<template>
    <div>
        <h2 class="sub-header">添加英雄</h2>
        <form>
          <div class="form-group">
            <label for="name">英雄名称</label>
            <input v-model="formData.name" class="form-control" id="name" placeholder="Name">
          </div>
          <div class="form-group">
            <label for="sex">英雄性别</label>
            <input v-model="formData.gender" class="form-control" id="sex" placeholder="Sex">
          </div>
          <button @click.prevent="handleAdd" type="submit" class="btn btn-success">修改英雄</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios';
    export default{
        data() {
            return {
                formData: {
                    name: '',
                    gender: ''
                }
            }
        },
        created() {
            this.heroId = this.$route.params.id; 
            this.loadData();
        },
        methods :{
            loadData() {
                axios.get('http://localhost:3000/heroes/' + this.heroId)
                .then((res) => {
                    if (res.status === 200) {
                        this.formData = res.data;
                    }
                })
            }
        }
    }
</script>

<style>

</style>
