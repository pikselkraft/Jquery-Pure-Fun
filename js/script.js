
$(document).ready(function() { 

    /**
     * Gestion du menu
     */
    var layout   = $('#layout'),
        menu     = $('#menu'),
        menuLink = $('#menuLink');

    menuLink.on("click", function(e) {
        e.preventDefault();
        layout.toggleClass( "active" );
        menu.toggleClass( "active" );
        menuLink.toggleClass( "active" );
    });

    /**
     * Animationd des titres et remplacement du texte html
     */
    $(".header h1").text("Guide de la librairie Jquery");
    $(".header h1").css({opacity: 0});
    $(".header h1").animate({opacity: 1}, 2000);

    var soustitre = $(".header h2");
    soustitre.text("Sous titre jQuery");
    soustitre.css({opacity: 0});
    soustitre.animate({opacity: 1}, 2000);

    $(".afficheCode").hide();
    $("#afficheCode").on("click", function(e) {
        $(this).hide();
        $(".afficheCode").show();
    });

    
     /**
     * Affichage/cache image et modification du texte du button
     */
    $("#imageButton").toggle();
    var activeImage = false;
    $("#afficherImage").on("click", function(e) {
        e.preventDefault();
        $("#imageButton").toggle();

        activeImage == false ? $(this).text("Cacher l'image") : $(this).text("Afficher l'image");
        activeImage == false ? activeImage = true : activeImage = false;
    });

    /**
     * Changement de couleur du background -> recuperation de la valeur de l'input
     */
    $("#changeCouleur").on("click", function(e) {
        
        var couleur = $("#couleur").val();
        $('body').css({backgroundColor: couleur});
    });


    /**
     * affichage d'une liste en json
     */
    var listeContact = {
        "Json"  : "0623996633",
        "Json1" : "0623472872",
        "Json2" : "0655222872"
    }
    var i = 0;

    $.each( listeContact, function( prenom, mobile) {
                var entree = prenom + " : " + mobile;
                $('<li></li>', {text: entree}).appendTo( $('#contactList'))
                .css({opacity: 0})
                .delay( 200*i )
                .animate({opacity: 1}, 1000);
                i++;
    });

    /**
     * Animaion de la galerie
     */

    var gallery = $("#gallery-small img");

    gallery.css({opacity: 0});

    gallery.each(function(i) {
        $(this).animate({opacity: 1}, 1500*i);
    });

    var galleryTitre = $("#gallery-small h3");
    galleryTitre.css({opacity: 0});
    gallery.on("mouseenter", function() {
        $( this ).animate({opacity: 0.4}, 600);
        $( this ).next().animate({opacity: 1}, 600);
    }).on("mouseleave", function() {
        $( this ).animate({opacity: 1}, 600);
        $( this ).next().animate({opacity: 0}, 600);
    });

    $(".content-subhead").css({color: '#000'});


    /**
     * Evenement on click -> affichage/cache de l'élément lireSuite
     */
    $(".lireSuite").hide();
    $("#lireSuite").on("click", function(e) {
        $(this).hide();
        $(".lireSuite").show();
    });
});
