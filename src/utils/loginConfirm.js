import {
  accesstoken
} from "@/api";
export default async function loginConfirm(vm) {
  const {
    result,
    value
  } = await vm.$prompt(
    "请输入Access Token",
    "提示", {
      validator(val) {
        console.log(val);
        return {
          valid: /.{36}/.test(val),
          message: "请输入正确Access Token"
        };
      }
    }
  );
  if (result) {
    let res = await accesstoken(value);
    if (res) {
      res.accesstoken = value;
      vm.setUserInfo(res);
      window.window.sessionStorage.user = JSON.stringify(res);
      return true
    } else {
      vm.$toast.message("Access Token不正确");
      return false
    }
  } else {
    // 关闭弹窗
    return false
  }
}
