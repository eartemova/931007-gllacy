var button = document.querySelector(".feedback");
          var popup = document.querySelector(".modal-feedback");
          var close = popup.querySelector(".modal-close");
          var form = popup.querySelector(".feedback-form");
          var fname = popup.querySelector("[name=feedback-name]");
          var email = popup.querySelector("[name=feedback-email]");
          var text = popup.querySelector("[name=feedback-text]");
          var isStorageSupport = true;
          var storage = "";
          try {
            storage = localStorage.getItem("fname");
          } catch (err) {
            isStorageSupport = false;
          }
          button.addEventListener("click", function (evt) {
            evt.preventDefault();
            popup.classList.add("modal-show");
          if (storage) {
            fname.value = storage;
            email.focus();
          } else {
            fname.focus();
          }
          if (storage) {
            email.value = storage;
            text.focus();
          } else {
            email.focus();
          }
        });
          close.addEventListener("click", function (evt) {
            evt.preventDefault();
            popup.classList.remove("modal-show");
            popup.classList.remove("modal-error");
        });
          form.addEventListener("submit", function (evt) {
          if (!fname.value || !email.value || !text.value) {
            evt.preventDefault();
            popup.classList.remove("modal-error");
            popup.offsetWidth = popup.offsetWidth;
            popup.classList.add("modal-error");
          } else {
            if (isStorageSupport) {
              localStorage.setItem("feedback-name", fname.value);
              popup.classList.add("modal-error");
              popup.classList.remove("modal-error");
            }
          }
        });
        window.addEventListener("keydown", function (evt) {
          if (evt.keyCode === 27) {
            evt.preventDefault();
              if (popup.classList.contains("modal-show")) {
                popup.classList.remove("modal-show");
                popup.classList.remove("modal-error");
              }
          }
        });
