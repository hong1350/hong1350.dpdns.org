import { homepage } from "./scripts/homepage.js"

export default {
  async fetch(request, env) {
    try {
      var needToResponse = homepage();
      const headers = {"Content-Type": "text/html"};
      return new Response(needToResponse, {headers});
    } catch {
      return new Response("发生错误！");
    }
  }
}
