<template>
    <div>
        <h2 class="sub-header">英雄列表</h2>
        <a class="btn btn-success" href="add.html">Add</a>
        <div class="table-responsive">
            <table class="table table-striped">
                <thead>
                <tr>
                    <th>#</th>
                    <th>姓名</th>
                    <th>性别</th>
                    <th>操作</th>
                </tr>
                </thead>
                <tbody>
                <tr :key="item.id" v-for="(item, index) in list">
                    <td>{{ index + 1 }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.gender }}</td>
                    <td>
                        <a href="edit.html">编辑</a>
                        &nbsp;&nbsp;
                        <a href="#" @click.prevent="handleDelete(item.id)">删除</a>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        data() {
            return {
                list:[]
            }
        },
        created() {
            this.loadData()
        },
        methods: {
            loadData() {
                axios.get('http://localhost:3000/heroes')
                .then((res) => {
                    console.log(res);
                    if (res.status ===200) {
                        this.list = res.data;
                    }
                })
            },
            handleDelete(id) {
                if (!confirm('确定删除吗？')) {
                        return;
                    }
                axios.delete('http://localhost:3000/heroes/' + id)
                .then((res) => {
                    
                    if (res.status === 200) {
                        this.loadData();
                    } else {
                        alert('删除失败');
                    }
                })
                .catch((err) => {
                    console.log(err);
                })
            }
        }
    }
</script>

<style>

</style>
