<template>
	<div id="app">
		<div class="userBar">
			<User/>
		</div>
		<div class="usersList">
			<UsersList/>
		</div>
		<div class="chat">
			<Chat/>
		</div>
	</div>
</template>

<script>
import axios from 'axios'
import UsersList from "./components/UsersList"
import User from "./components/User"
import Chat from "./components/Chat"

const __SERVER_PORT__ = 5000;
const __SERVER_URL__ = "http://10.100.188.232:" + __SERVER_PORT__;

export default {
	name: 'App',
	components: {
		UsersList, User, Chat
	},
	data() {
		return {
			languages: [{ id: "es", name: "Español", img: "" }]
		}
	},
	created() {
		// Cargar lista de idiomas
		getLanguages()
		.then(
			languages => {
				this.languages = languages;
			}
		);
  }
}	// End of export

function getLanguages() {
	let url = __SERVER_URL__ + "/api/idiomas/";
	return axios.get(url)
	.then(
		response => response.data
	)
	.catch(
		error => {
			console.error("Error al cargar los idiomas:", error);
			return error;
		}
	);
}
</script>

<style>

</style>
