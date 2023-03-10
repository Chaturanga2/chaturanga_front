<template>
    <div class="container my-5">
      <h1 class="text-center">Inscription</h1>
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="card p-4">
            <form>
              <div class="form-grou mt-3">
                <label for="name">Nom complet</label>
                <input type="text" class="form-control" id="name" placeholder="Entrez votre nom complet">
              </div>
              <div class="form-group mt-3">
                <label for="email">Adresse e-mail</label>
                <input type="email" class="form-control" id="email" placeholder="Entrez votre adresse e-mail">
              </div>
              <div class="form-group mt-3">
                <label for="password">Mot de passe</label>
                <input type="password" class="form-control" id="password" placeholder="Entrez votre mot de passe">
              </div>
              <div class="form-group mt-3">
                <label for="password_confirmation">Confirmez votre mot de passe</label>
                <input type="password" class="form-control" id="password_confirmation" placeholder="Confirmez votre mot de passe">
              </div>
              <button type="submit" class="btn btn-primary mt-3">S'inscrire</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "RegisterView"
  }
  </script>
  
  <style scoped>
  </style>  