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
                    <a href="edit.html">edit</a>
                    &nbsp;&nbsp;
                    <a href="javascript:window.confirm('Are you sure?')">delete</a>
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
                axios('http://localhost:3000/heroes')
                .then((res) => {
                    console.log(res);
                    if (res.status ===200) {
                        this.list = res.data;
                    }
                })
            }
        }
    }
</script>

<style>

</style>
