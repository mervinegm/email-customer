export function handleRoute(route: any) {
  const mainEl: any = document.querySelector(".main");
  const mainTitleEl: any = document.querySelector(".main-title");
  const mainTextEl: any = document.querySelector(".main-text");
  const inboxButtonEl: any = document.querySelector(".inbox");
  const sentButtonEl: any = document.querySelector(".sent");
  const mailButton1El: any = document.querySelector(".mm1");
  const mailButton2El: any = document.querySelector(".mm2");

  const routes = [
    {
      path: /\/inbox/,
      handler: function () {
        inboxButtonEl.style.backgroundColor = "#393939";
        sentButtonEl.style.backgroundColor = "#888888";
        mainEl.style.backgroundColor = "#ffc457";
        mainTitleEl.textContent = "Inbox";
      },
    },
    {
      path: /\/inbox\/./,
      handler: function () {
        mainTitleEl.textContent = "Recibido";
        mainTitleEl.style.fontSize = "40px";
        mainTitleEl.style.fontWeight = "700";
        mailButton1El.style.display = "none";
        mailButton2El.style.display = "none";
        mainTextEl.textContent = route;
      },
    },
    {
      path: /\/sent/,
      handler: function () {
        inboxButtonEl.style.backgroundColor = "#888888";
        sentButtonEl.style.backgroundColor = "#393939";
        mainEl.style.backgroundColor = "#ff9257";
        mainTitleEl.textContent = "Sent";
      },
    },
    {
      path: /\/sent\/./,
      handler: function () {
        mainTitleEl.textContent = "Enviado";
        mainTitleEl.style.fontSize = "40px";
        mainTitleEl.style.fontWeight = "700";
        mailButton1El.style.display = "none";
        mailButton2El.style.display = "none";
        mainTextEl.textContent = route;
      },
    },
  ];

  for (const r of routes) {
    if (r.path.test(route)) {
      r.handler();
    }
  }
}
