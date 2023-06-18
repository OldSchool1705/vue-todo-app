<template>
  <div class="container">
    <nav>
      <router-link class="btn btn-primary mr-5" to="/">Home</router-link>
      <router-link class="btn btn-primary" to="/tasks">Tasks</router-link>
    </nav>
    <router-view />
  </div>
</template>
