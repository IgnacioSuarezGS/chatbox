<template>
	<div>
		Soy el usuario
	</div>
</template>

<script>
import axios from "axios"

const __LS_PREFIX__ = "chatbox__";
const __SERVER_PORT__ = 5000;
const __SERVER_URL__ = "http://10.100.188.232:" + __SERVER_PORT__;

export default {
	name: "User",
	data() {
		return {
			user: {}
		}
	},
	props: {
		info: Object
	},
	created() {
		if ( this.info ) {
			this.user = this.info;
		}
		else {
			console.log("No me han pasado usuario, lo miro yo");
			// Comprobar si existe el usuario
			let ls = localStorage.getItem(__LS_PREFIX__ + "user");
			if( ls ) {
				// Si existe: recuperar su información	
				getUserInfo( ls )
				.then(
					function( userInfo ) {
						console.log("Usuario recuperado:", userInfo);
						this.info = userInfo;
					}
				)
				.catch(
					error => console.error("Error al recuperar el usuario %s:", ls._id, error)
				);
			}
			else {
				// Si no existe: solicitar al server que lo cree
				let user = {
					name: "Pepe",
					img: "http://placehold.it/100/000/fff?text=Pepe",
					lang: "es"
				};
				createUser(user).then(
					fullUser => {
						this.user = fullUser;
						localStorage.setItem( __LS_PREFIX__ + "user", fullUser._id );
					}
				)
			}
		}
	}
}	// End of export

function getUserInfo(id) {
	let url = __SERVER_URL__ + "/api/usuarios/" + id;
	console.log("Haciendo GET / a ", url);
	return axios.get(url)
	.then(
		response => {
			console.log("Recibido el usuario %s:", id, response.data);
			return response.data;
		}
	)
	.catch(
		error => {
			console.error("Error al recibir el usuario %s:", id, error);
		}
	);
}

function createUser(user) {
	console.log("POST", user);
	let url = __SERVER_URL__ + "/api/usuarios/";
	return axios.post(url, user)
	.then(
		response => {
			console.log("Creado el usuario:", response.data);
			return response.data;
		}
	)
	.catch(
		error => {
			console.error("Error al crear el usuario:", error);
		}
	);
}
</script>

<style scoped>

</style>
