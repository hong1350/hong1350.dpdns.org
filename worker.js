import { homepage } from "./scripts/homepage.js"

export default {
  async fetch(request, env) {
    var needToResponse = homepage()
    return new Response(needToResponse)
  }
}