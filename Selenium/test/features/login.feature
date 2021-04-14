@LoginBanco
Feature: Login banco
    Como usuario del banco online
    yo quiero visitar el sitio web del banco
    para yo poder hacer login y entrar a mi cuenta

Scenario: Visitar la pagina de login
    Then yo deberia ver una caja de texto para ingresar a mi email
    And yo deberia ver una caja de texto para ingresar la password
    And yo deberia ver un boton para sign
    And yo deberia ver un login header con el texto "Login banco online"
    And yo deberia ver un label de direccion email con el texto "Email address"

