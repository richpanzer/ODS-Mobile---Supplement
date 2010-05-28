<!doctype html>
<html lang="en">
<html>
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="initial-scale=1.0; maximum-scale=1.0; user-scalable=0;" />
        <title>jQTouch &beta;</title>
        <style type="text/css" media="screen">@import "<?php echo JQTOUCH; ?>jqtouch.min.css";</style>
        <style type="text/css" media="screen">@import "<?php echo PATH_THEME; ?>theme.min.css";</style>
        <script src="jqtouch/jquery.1.3.2.min.js" type="text/javascript" charset="utf-8"></script>
        <script src="jqtouch/jqtouch.min.js" type="application/x-javascript" charset="utf-8"></script>
        <script type="text/javascript" charset="utf-8">
            var jQT = new $.jQTouch({
                icon: '<?php echo PATH_WEB; ?>jqtouch.png',
                addGlossToIcon: false,
                startupScreen: '<?php echo PATH_WEB; ?>jqt_startup.png',
                statusBar: 'black',
                preloadImages: [
                    '<?php echo PATH_WEB; ?>themes/jqt/img/back_button.png',
                    '<?php echo PATH_WEB; ?>themes/jqt/img/back_button_clicked.png',
                    '<?php echo PATH_WEB; ?>themes/jqt/img/button_clicked.png',
                    '<?php echo PATH_WEB; ?>themes/jqt/img/grayButton.png',
                    '<?php echo PATH_WEB; ?>themes/jqt/img/whiteButton.png',
                    '<?php echo PATH_WEB; ?>themes/jqt/img/loading.gif'
                    ]
            });

            $(function(){
                jQT.addAnimation({
                    name: 'reveal',
                    selector: '.revealme'
                });
            });
        </script>
        <style type="text/css" media="screen">
            .reveal.in {
            	-webkit-animation-name: dontmove;
            	z-index: 0;
            }

            .reveal.out {
            	-webkit-animation-name: revealout;
            	z-index: 10;
            }

            .reveal.out.reverse {
            	z-index: 0;
            	-webkit-animation-name: dontmove;
            }

            .reveal.in.reverse {
            	z-index: 10;
            	-webkit-animation-name: revealin;
            }


            @-webkit-keyframes revealin {
                from { -webkit-transform: translateX(100%); }
                to { -webkit-transform: translateX(0); }
            }

            @-webkit-keyframes revealout {
                from { -webkit-transform: translateX(0); }
                to { -webkit-transform: translateX(100%); }
            }
        </style>
    </head>