(function ($) {
	const __URL__ = "http://localhost:5500";

	let userArea = $("#usuario");
	let userEdit = $("#editar_usuario");
	let templateUserLlist = $("#template_user_list");
	// let templateChat = $("#template_chat");

	let usuario = {};

	start();

	function start() {
		userArea.find("button").click(editar);
		userArea.find("select").change(cambiarIdioma);
		userEdit.find("button").click(confirmarEdicion);
		cargarIdiomas();
		comprobarSesion();
		cargarListaDeUsuarios();
	}

	// #region Lista de usuarios
	function cargarListaDeUsuarios() {
		__get("/users")
			.then(
				usuarios => {
					usuarios.forEach(
						u => {
							let clon = templateUserLlist.clone();
							clon.attr("id", u.id);
							clon.find("img.user__image").src(u.imagen);
							clon.find("img.user__status").src("");
							clon.find("strong").text(u.nombre);
							clon.find("span").text(u.idioma);
							$("ul").append(clon);
							clon.removeClass("d-none");
						}
					);
				}
			)
			.catch(
				error => {
					console.error("Error al cargar la lista de usuarios:", error);
				}
			);
	}
	// #endregion

	// #region Usuario

	function editar() {
		userEdit.find("#u_nombre").val(usuario.nombre);
		userEdit.find("#u_imagen").val(usuario.imagen);
		userArea.addClass("d-none");
		userEdit.removeClass("d-none");
		return false;
	}

	function confirmarEdicion(e) {
		usuario.nombre = userEdit.find("#u_nombre").val();
		usuario.imagen = userEdit.find("#u_imagen").val();
		actualizarUsuario();
		guardarUsuario();
		userEdit.addClass("d-none");
		userArea.removeClass("d-none");
		e.preventDefault();
	}

	function cargarIdiomas() {
		__get("/languages")
			.then(
				idiomas => {
					idiomas = [
						{code: "ES", language: "Español"},
						{code: "EN", language: "English"}
					];
					idiomas.forEach(
						idioma => {
							userArea.find("select").append(
								`<option value="${idioma.code}">${idioma.language}</option>`
							);
						}
					);
				}
			)
			.catch(
				idiomas => {
					idiomas = [
						{code: "ES", language: "Español"},
						{code: "EN", language: "English"}
					];
					idiomas.forEach(
						idioma => {
							userArea.find("select").append(
								`<option value="${idioma.code}">${idioma.language}</option>`
							);
						}
					);
				}
			);
	}

	function cambiarIdioma() {
		usuario.idioma = userArea.find("select").val();
		guardarUsuario();
	}

	function actualizarUsuario() {
		userArea.find("strong").text(usuario.nombre);
		userArea.find("#userImage").attr("src", usuario.imagen);
		userArea.find("#userStatus").attr("src", "");
		userArea.find("select").val(usuario.idioma);
	}

	function guardarUsuario() {
		localStorage.usuario = JSON.stringify(usuario);
		__patch("/users", usuario)
			.then(
				infoUsuario => {
					usuario = infoUsuario;
					actualizarUsuario(usuario);
				}
			)
			.catch(
				error => console.error("No se pudo guardar los cambios en el usuario:", error)
			);
	}

	function comprobarSesion() {
		if (localStorage.usuario) {
			console.log("Existe el usuario:", localStorage.usuario);
			usuario = JSON.parse(localStorage.usuario);
			actualizarUsuario(usuario);
			// Indicar al servidor que estamos conectados
			__patch("/users", usuario)
				.then(
					infoUsuario => {
						usuario = infoUsuario;
						actualizarUsuario(usuario);
					}
				)
				.catch();
		} else {
			// Solicitar al servidor mi información de usuario
			__post("/users", {})
				.then(
					nuevoUsuario => {
						localStorage.usuario = JSON.stringify(nuevoUsuario);
						usuario = nuevoUsuario;
						actualizarUsuario(usuario);
					}
				)
				.catch(
					error => {
						console.error("Se ha producido un error al crear el usuario:", error);
					}
				);
			// Guardarla en local
		}
	} // End of comprobarSesion()
	// #endregion
	// #region Peticiones
	function __patch(url, data) {
		return $.ajax({
			url: __URL__ + "/api" + url,
			type: "PATCH",
			data: JSON.stringify(data),
			contentType: "application/json; charset=utf-8",
			dataType: "json",
			success: function (response) {
				return response;
			}
		});
	}

	function __post(url, data) {
		return $.ajax({
			url: __URL__ + "/api" + url,
			type: "POST",
			data: JSON.stringify(data),
			contentType: "application/json; charset=utf-8",
			dataType: "json",
			success: function (response) {
				console.log("Response", response);
				return response;
			}
		});
	}

	function __get(url) {
		return $.ajax({
			url: __URL__ + "/api" + url,
			type: "GET",
			success: function(response){
				return response;
			}
		});
	}
	// #endregion
})($);