<template>
  <div id="login">
    <div class="container">
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="55px"
        class="demo-ruleForm"
      >
        <el-form-item label="用户名" prop="userName">
          <el-input v-model.number="ruleForm.userName"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="passWord">
          <el-input
            type="password"
            v-model="ruleForm.passWord"
            autocomplete="off"
          ></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >登录</el-button
          >
          <el-button @click="resetForm('ruleForm')">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    var checkUseName = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("用户名不能为空"));
      }
      callback();
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      }
      callback();
    };

    return {
      ruleForm: {
        passWord: "",
        userName: "",
      },
      rules: {
        passWord: [{ validator: validatePass, trigger: "blur" }],
        userName: [{ validator: checkUseName, trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      console.log(this.ruleForm);
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // this.$router.push({ path: "/home" });
          window.title = "";
        //  eslint-disable-next-line no-undef
          this.axios
            .post("api/login", {
              role: "学生",
              useName: this.ruleForm.userName,
              passWord: this.ruleForm.passWord,
            })
            .then((response) => {
              console.log(response);
            })
            .catch((v) => {
              console.log(v);
            });
          this.axios
            .get("api/student/queryStudentSubject")
            .then((response) => {
              console.log(response);
            })
            .catch((v) => {
              console.log(v);
            });
        } else {
          console.log("用户名或密码错误!");
          return false;
        }
        
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style scoped>
#login {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("../assets/loginbg.png");
}
.container {
  width: 350px;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
}
</style>
