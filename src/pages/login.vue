<template>
  <div>
    <Header title="登录"/>
    <mu-form ref="form" :model="validateForm" class="mu-demo-form">
      <mu-form-item
        label="Access Token"
        help-text="请输入Access Token"
        prop="accesstoken"
        :rules="accesstokenRules"
      >
        <mu-text-field v-model="validateForm.accesstoken" prop="accesstoken"></mu-text-field>
      </mu-form-item>
      <mu-form-item>
        <mu-button full-width color="primary" @click="submit">提交</mu-button>
      </mu-form-item>
    </mu-form>
    <mu-alert color="warning" v-if="showMsg">
      <mu-icon left value="priority_high"></mu-icon>this is warning alert
    </mu-alert>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Header from "@/components/Header";
import { accesstoken } from "@/api";
import { setTimeout } from "timers";
export default {
  data() {
    return {
      redirectUrl: "",
      accesstokenRules: [
        { validate: val => !!val, message: "必须输入Access Token" },
        { validate: val => val.length === 36, message: "Access Token长度为36" }
      ],
      validateForm: {
        accesstoken: ""
      },
      showMsg: false
    };
  },
  created() {
    this.redirectUrl = this.$route.query.redirectUrl;
  },
  components: {
    Header
  },
  methods: {
    ...mapActions(["setUserInfo"]),
    async submit() {
      try {
        let result = await this.$refs.form.validate();
        if (result) {
          let res = await accesstoken(this.validateForm.accesstoken);
          if (res) {
            res.accesstoken = this.validateForm.accesstoken;
            this.setUserInfo(res);
            window.window.sessionStorage.user = JSON.stringify(res);
            if (this.redirectUrl) this.$router.push(this.redirectUrl);
            else this.$router.push("/");
          } else {
            this.$toast.warning("Access Token不正确");
          }
        } else {
          this.$toast.warning("Access Token不正确");
        }
      } catch (e) {
        this.$toast.warning("Access Token不正确");
      }
    }
  }
};
</script>

<style scoped>
.mu-demo-form {
  margin-top: 50px;
  padding: 0 16px;
  width: 100%;
  max-width: 460px;
}
.mu-button {
  margin: 10px 0;
}
</style>
