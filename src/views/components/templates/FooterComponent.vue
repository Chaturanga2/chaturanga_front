<template>
  <footer>
    <div class="container">
      <nav>
        <ul>
          <li><a href="#">Accueil</a></li>
          <li><a href="#">À propos</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </div>
  </footer>
</template>

<style>
  footer {
    background-color: #f2f2f2;
    padding: 20px;
    text-align: center;
  }

  nav {
    display: inline-block;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #333;
    text-decoration: none;
    transition: color 0.2s;
  }

  a:hover {
    color: #666;
  }
</style>
