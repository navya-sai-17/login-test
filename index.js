<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>My Cool Website</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      text-align: center;
      background-color: #f0f0f0;
      transition: background-color 0.5s ease;
    }

    header {
      background-color: #6200ea;
      color: white;
      padding: 20px 0;
    }

    main {
      padding: 40px;
    }

    button {
      padding: 10px 20px;
      font-size: 16px;
      background-color: #03dac5;
      border: none;
      color: white;
      cursor: pointer;
      border-radius: 5px;
    }

    button:hover {
      opacity: 0.8;
    }
  </style>
</head>
<body>
  <header>
    <h1>Welcome to My New Website</h1>
  </header>
  <main>
    <p>This site is powered by HTML, CSS, and JavaScript—all in one file!</p>
    <button onclick="changeColor()">Click Me!</button>
  </main>

  <script>
    function changeColor() {
      const body = document.querySelector("body");
      const colors = ["#f0f0f0", "#ffe082", "#80d8ff", "#b9f6ca", "#ff8a80"];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      body.style.backgroundColor = randomColor;
    }
  </script>
</body>
</html>
