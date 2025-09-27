const email = document.getElementById("email");
        const password = document.getElementById("password");
        const emailMsg = document.getElementById("emailMsg");
        const passMsg = document.getElementById("passMsg")
        const form = document.getElementById("signupform")
        email.addEventListener("input", () => {
            const value = email.value;
            if (value.length > 3 && value.includes("@") && value.includes(".")) {
                emailMsg.textContent = "All good to go!";
                emailMsg.className = "success";
            }
            else {
                emailMsg.textContent = "Email must be valid (more than 3 chars, contain @ and .)";
                emailMsg.className = "error";
            }
        })
        password.addEventListener("input", () => {
            const value = password.value;
            if (value.length > 8) {
                passMsg.textContent = "All good to go!";
                passMsg.className = "success";
            }
            else {
                passMsg.textContent = "Password must be more than 8 characters.";
                passMsg.className = "error";
            }
        })
        form.addEventListener("submit",(e)=>{
          e.preventDefault();
          const confirmed=confirm("Do you want to sign up?");
          if(confirmed)
          {
            alert("Successful signup!");
          }
          else{
            form.reset();
            emailMsg.textContent="";
            passMsg.textContent="";
          }
        })


        console.log("connected");