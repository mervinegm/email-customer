import { handleRoute } from "./handle-route";

function goTo(path: any) {
  history.pushState({}, "", path);

  handleRoute(path);
}

function main() {
  const inboxButtonEl: any = document.querySelector(".inbox");
  const sentButtonEl: any = document.querySelector(".sent");
  const mailButton1El: any = document.querySelector(".mm1");
  const mailButton2El: any = document.querySelector(".mm2");

  inboxButtonEl.addEventListener("click", function () {
    goTo("/inbox");

    mailButton1El.addEventListener("click", function () {
      goTo("/inbox/mail1");
    });

    mailButton2El.addEventListener("click", function () {
      goTo("/inbox/mail2");
    });
  });
  sentButtonEl.addEventListener("click", function () {
    goTo("/sent");

    mailButton1El.addEventListener("click", function () {
      goTo("/sent/mail1");
    });

    mailButton2El.addEventListener("click", function () {
      goTo("/sent/mail2");
    });
  });

  window.addEventListener("load", function () {
    handleRoute(this.location.pathname);
  });
}

main();
