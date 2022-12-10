window.onload = async () => {
    try {
      let res = await fetch("api/session/verify", {
        method: "POST",
        headers: {
          "Sode-Auth-Required": "Yes",
        },
      });
  
      let data = await res.json();
      if (!res.ok) {
        throw new Error(data.message);
      } else {
        if (data.status != "200") {
          throw new Error(data.message);
        }
      }
    } catch (error) {
      location.href = "login";
    }
  };
  