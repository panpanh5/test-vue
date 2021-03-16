import axios from "axios";
import Vue from "vue";

Vue.use(axios);
function login(params) {
    this.axios.post("/api/login", { data: params }).then((res) => {
        this.$message(res.data.message);
    });
}
export default login
