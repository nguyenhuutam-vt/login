

async function loginData() {
    const form = {
        username : document.querySelector("#username"),
        password :document.querySelector("#password"),
        login:document.querySelector("#login")
    }
    return   fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          
            username: form.username.value,
            password: form.password.value,
          // expiresInMins: 60, // optional
        }),
      })
      .then(res => res.json()).then((data)=>{
        
            localStorage.setItem("login", JSON.stringify(data.token))
            window.location.assign(`../demo5.html`)
          
      }
      
      )
      
      
  }
 
  async function logoutData(){
    localStorage.removeItem('login')
    // window.location.assign("./login/login.html")
  }




