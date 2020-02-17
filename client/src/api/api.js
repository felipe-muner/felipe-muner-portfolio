import Class1 from "./Class1";
import Class2 from "./Class2";
import config from "./config";

export default {
  class1: new Class1(config.server),
  class2: new Class2(config.server)
};
