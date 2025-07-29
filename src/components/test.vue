<!-- JQuery required (>1.6.4) -->
<script src="//ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>

<!-- Leaflet dependency is not required since it is loaded by the plugin -->
<script src="//unpkg.com/leaflet/dist/leaflet.js"></script>
<link rel="stylesheet" type="text/css" href="//unpkg.com/leaflet/dist/leaflet.css" />

<!-- JS plugin for the Parcelshop Picker Widget MR using JQuery -->
<script src="//widget.mondialrelay.com/parcelshop-picker/jquery.plugin.mondialrelay.parcelshoppicker.min.js"></script>

<div id="Zone_Widget"></div>

<!-- HTML element to display the parcelshop selected, for demo only. Should use hidden instead. -->
<input type="text" id="Target_Widget" />

<script type="text/javascript">
  // Initialiser le widget après le chargement complet de la page
  $(document).ready(function () {
    // Charge le widget dans la DIV d'id "Zone_Widget" avec les paramètres indiqués
    $('#Zone_Widget').MR_ParcelShopPicker({
      //
      // Paramétrage de la liaison avec la page.
      //
      // Selecteur de l'élément dans lequel est envoyé l'ID du Point Relais (ex: input hidden)
      Target: '#Target_Widget',
      //
      // Paramétrage du widget pour obtention des point relais.
      //
      // Le code client Mondial Relay, sur 8 caractères (ajouter des espaces à droite)
      // BDTEST est utilisé pour les tests => un message d'avertissement apparaît
      Brand: 'CC23JWPS',
      // Pays utilisé pour la recherche: code ISO 2 lettres.
      Country: 'FR',
      // Code postal pour lancer une recherche par défaut
      PostCode: '59000',
      //
      // Paramétrage d'affichage du widget.
      //
      // Activer l'affichage Responsive.
      Responsive: true,
      // Afficher les résultats sur une carte?
      ShowResultsOnMap: true,
    })
  })
</script>
