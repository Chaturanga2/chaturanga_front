<template>
    <div>
        <h1>My account</h1>
        <div class="card">
            <div class="row">
            <div class="col-md-4">
                <img :src="user.image" class="card-img-top" alt="User profile picture">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                <h5 class="card-title">{{ user.firstName }} {{ user.lastName }}</h5>
                <p class="card-text">{{ user.email }}</p>
                <button class="btn btn-primary" @click="editUser">Edit</button>
                </div>
            </div>
            </div>
        </div>
        <h2>Mes informations</h2>
        <div>
        <p><strong>Nom:</strong> {{ user.username }}</p>
        <p><strong>Email:</strong> {{ user.email }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MyInformation',
    props: {
        user: {
        type: Object,
        required: true,
        },
    },
};
</script>
  