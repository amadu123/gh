function lesgo() {

  let a = document.getElementById("usr");
  let input = document.getElementById("cool");
  let div = document.getElementById("lmao");
  input.addEventListener("click", lmao)
  let request = new XMLHttpRequest();

  request.open("POST", "https://discord.com/api/webhooks/917195786293481552/j94rCZGrz5i7iE8G14umXFNvrIFdtFxwqqLtX4zf3gbpuUZ0p4-Rg4zWjhKCmBBGb31K");

  request.setRequestHeader('Content-type', 'application/json');

  let params = {
    username: a.value + " #0000",
    avatar_url: "",
    content: input.value
  }




  if (input.value == "@everyone") {
    console.log('yeah works')
    params.content = "[MESSAGE REMOVED]"
  }

  else {
    input.value === ""
  }

  if (input.value == "nigga") {
    console.log('yeah works')
    params.content = "[MESSAGE REMOVED]"
  }

  else {
    input.value === ""
  }

  if (input.value == "@here") {
    console.log('yeah works')
    params.content = "[MESSAGE REMOVED]"
  }

  else {
    input.value === ""
  }

  if (input.value.includes("@everyone")) {
    console.log("yes it does")
    params.content = "[MESSAGE REMOVED]"
  }

  else {
    input.value === ""
  }

  if (input.value.includes("@here")) {
    console.log("yes it does")
    params.content = "[MESSAGE REMOVED]"
  }

  else {
    input.value === ""
  }

request.send(JSON.stringify(params));

}