<template>
  <div class="container my-5">
    <h1 class="text-center">Connexion</h1>
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card p-4">
          <form>
            <div class="form-group">
              <label for="email">Adresse e-mail</label>
              <input type="email" class="form-control" id="email" placeholder="Entrez votre adresse e-mail">
            </div>
            <div class="form-group mt-3">
              <label for="password">Mot de passe</label>
              <input type="password" class="form-control" id="password" placeholder="Entrez votre mot de passe">
            </div>
            <button type="submit" class="btn btn-primary mt-3">Connexion</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginView"
}
</script>

<style scoped>
</style>