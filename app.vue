<script lang="ts" setup>
const {data, loading, error} = await useAsyncQuery(gql`
    query getPosts {
        posts {
            title,
            content
        },
        users {
            username
        }
    }    
  `);
console.log(loading)
const posts = data.value.posts;
const users = data.value.users;

</script>

<template>
  <div>
    <NuxtRouteAnnouncer/>
    <h1>Posts:</h1>
    <div v-if="posts" v-for="post in posts">
      <h2>{{ post.title }}</h2>
      <p>{{post.content}}</p>
    </div>
    <p v-if="loading">Loading posts...</p>
    <p v-if="posts.length < 1">There are no posts.</p>
    <ul v-if="users" v-for="user in users">
      <li>{{user.username}}</li>
    </ul>
  </div>
</template>
