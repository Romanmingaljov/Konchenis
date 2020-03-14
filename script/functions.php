<?php
    function switch_var(){
        $var = $_GET['page'];
        if(!empty($_GET['page'])){
            switch ($var) {
                case 'main':
                    require('./page/main.html');
                    break;
                case 'structure':
                    require('./page/structure.html');
                    break;
                case 'theory':
                    require('./page/theory.html');
                    break;
                case 'exercise':
                    require('./page/exercise.html');
                    break;
                case 'docs':
                    require('./page/docs.html');
                    break;
                case 'galery':
                    require('./page/galery.html');
                    break;
                case 'video':
                    require('./page/video.html');
                    break;
                case 'backform':
                    require('./page/backform.html');
                    break;
                default:
                    require('./page/404.html');
            }
        }
    }
?>

<? ?>