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
          <button @click.prevent="handleAdd" type="submit" class="btn btn-success">添加英雄</button>
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
        methods :{
            handleAdd () {
                axios.post('http://localhost:3000/heroes',this.formData)
                .then((res) => {
                    const {status, data} = res;
                    if (status === 201) {
                        this.$router.push({name: 'heroes'});
                    } else {
                        alert('网络繁忙,请稍后再试！')
                    }
                })
            }
        }
    }
</script>

<style>

</style>
