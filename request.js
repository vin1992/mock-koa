// 代理node 原生对象 req
module.exports = {
  get url() {
    return this.req.url;
  },

  set url(val) {
    this.req.url = val;
  }
};
