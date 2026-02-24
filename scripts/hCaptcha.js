async function verifyToken(token, ip) {
  global hcaptcha-secret
  const payload = {
    secret: hcaptcha-secret,
    response: token,
    remoteip: ip,
    sitekey: "4378b196-a7fc-4742-bf06-1dee4ebebc3e",
  };
  const params = new URLSearchParams(payload);
  const res = await fetch(
    "https://api.hcaptcha.com/siteverify",
    { method: "POST", body: params },
    );
  const j = await res.json();
  return j.success ? [true, []] : [false, j["error-codes"] || []];
}
