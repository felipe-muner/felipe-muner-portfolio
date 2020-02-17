import axios from "axios";

class Class1 {
  constructor(server) {
    this.server = server;
  }
  async func1() {
    return axios.get(this.server + "/link1");
  }
  async func2(state) {
    return axios.post(this.server + "/link2", { state });
  }
}

export default Class1;
