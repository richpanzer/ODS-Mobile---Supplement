var jQT = new $.jQTouch({
    icon: '<?php echo PATH_WEB; ?>jqtouch.png',
    addGlossToIcon: false,
    startupScreen: '<?php echo PATH_WEB; ?>jqt_startup.png',
    statusBar: 'black',
    preloadImages: [
        '<?php echo JQTHEME; ?>img/back_button.png',
        '<?php echo JQTHEME; ?>img/back_button_clicked.png',
        '<?php echo JQTHEME; ?>img/button_clicked.png',
        '<?php echo JQTHEME; ?>img/grayButton.png',
        '<?php echo JQTHEME; ?>img/whiteButton.png',
        '<?php echo JQTHEME; ?>img/loading.gif'
        ]
});

$(function(){
    jQT.addAnimation({
        name: 'reveal',
        selector: '.revealme'
    });
});