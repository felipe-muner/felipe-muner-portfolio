import axios from "axios";

class Class2 {
  constructor(server) {
    this.server = server;
  }
  async func3() {
    return axios.get(this.server + "/link3");
  }
  async func4(state) {
    return axios.post(this.server + "/link4", { state });
  }
}

export default Class2;
