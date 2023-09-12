<template>
  <div>
    <el-form ref="form" :model="form" :rules="rules" label-width="80px" class="login-box">
      <h3 class="login-title">欢迎登录</h3>
      <el-form-item label="账号" prop="name">
        <el-input v-model="form.name" placeholder="请输入用户名" type="text"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password" placeholder="请输入密码" type="password"></el-input>
      </el-form-item>
      <el-form-item class="login-button">
        <el-button type="primary" @click="onSubmit('form')">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: 'Login',
    data() {
      return {
        form: {
          name: '',
          password: '',
        },
        rules: {
          name: [{
            required: true,
            message: '请输入用户名',
            trigger: 'blur'
          }],
          password: [{
            required: true,
            message: '请输入密码',
            trigger: 'blur'
          }]
        }
      };
    },
    methods: {
      onSubmit(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$router.push("/main");
          } else {
            this.$message.error('请输入用户名或密码');
            return false;
          }
        });
      }
    }
  }
</script>

<style scoped>
  .login-box {
  width: 400px;
  margin: 200px auto;
  border: 1px solid #DCDFE6;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 0 30px #DCDFE6;
  }
  .login-title {
  text-align: center;
  }
  .login-button{
    text-align: center;
  }
</style>
