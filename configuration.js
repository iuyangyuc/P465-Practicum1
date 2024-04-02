const hosts_local = {
    arithmetic_servoce: "http://localhost:4000",
    primes_service: "http://localhost:8085",
    ciphers_service: "http://localhost:4006",
    quotation_service: "http://localhost:4004"
};

const hosts_remote = {
   arithmetic_servoce: "https://arithmetic-service.onrender.com",
   primes_service: "https://primes-service.onrender.com",
   ciphers_service: "https://ciphers-service-hbahramian.onrender.com",
   quotation_service: "?"
};

const mode = 0;

function getHosts() {
    return (mode == 0) ? hosts_local : hosts_remote;
}

let configuration = {loggedIn: false, hosts: getHosts(), token: ""};

function displayLogin() {
    let loginDiv = document.getElementById("login");
        if(configuration.loggedIn) {
            loginDiv.innerHTML = `<h4>You are logged in.</h4>`;
        } else {
            loginDiv.innerHTML = `<form>
                <input id="username" placeholder="Enter your username" required/>
            <input id="password" placeholder="Enter your password" required/>
            <button type="button" onclick="login()">Login</button>
            </form>`;
        }
}

async function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let customer = {username: username, password: password}
    let request = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(customer)
      };
      try {
        let response = await fetch(getHosts().primes_service + "/login", request);
        if(response.status == 200) {  
            const token = await response.text();
            configuration.token = token;
            configuration.loggedIn = true;
            displayLogin();

        } else {
            console.log(`response status:${response.status}`);
            configuration.loggedIn = false;
            displayLogin();
            alert("Something went wrong!");
        }
      }
      catch(error) {
        console.log(error);
        configuration.loggedIn = false;
        displayLogin();
        alert("Something went wrong!");
      }    

}