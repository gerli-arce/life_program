form_login.onsubmit = async (e)=>{
  e.preventDefault();
  
    let request = {};
    request.username = user.value;
    request.password = password.value;

    let response = await fn_login(request);
    if(response.ok){
        let responsejson = await response.json()
        location.href = "home"
    }else{
        let responsetext = await response.json()
    }
}

async function fn_login(data) {
    var URL = "api/session/login";
    var headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };
    var responseLogin = await fetch(URL, {
      headers: headers,
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((response) => {
        return response;

      })
      .catch((error) => {
        return error;
      });
  
    return responseLogin;
  }
  