[1mdiff --git a/package.json b/package.json[m
[1mindex 4d19feb..61bc49b 100644[m
[1m--- a/package.json[m
[1m+++ b/package.json[m
[36m@@ -3,7 +3,6 @@[m
   "version": "1.0.0",[m
   "description": "ReactJS with Typescript, Hooks, TDD, Clean Architecture, SOLID & Design Patterns",[m
   "author": "fhconte",[m
[31m-  "license": "",[m
   "scripts": {[m
     "start": "webpack-dev-server",[m
     "test": "jest --passWithNoTests --no-cache --runInBand",[m
[1mdiff --git a/src/presentation/pages/login/login-styles.scss b/src/presentation/pages/login/login-styles.scss[m
[1mindex b047b43..6e3822b 100644[m
[1m--- a/src/presentation/pages/login/login-styles.scss[m
[1m+++ b/src/presentation/pages/login/login-styles.scss[m
[36m@@ -48,7 +48,8 @@[m [mbutton {[m
     flex-direction: column;[m
     border-top: 40px solid $primaryDark;[m
     background-color: $primary;[m
[31m-    align-items: center;[m
[32m+[m[32m    align-items: left;[m
[32m+[m[32m    padding: 0 20px;[m
 [m
     h1 {[m
       color: $white;[m
