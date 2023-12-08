function validateEmail() {
    const email = document.getElementById("email").value;
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!pattern.test(email)) {
      document.getElementById("emailError").innerHTML = "Invalid email format";
      return false;
    } else {
      document.getElementById("emailError").innerHTML = "";
      return true;
    }
  }