Para envio de e-mail via PHP, como está em site estático, é necessário conter os aquivos:
sendmail.php
sendmail.php
sendmail.php

Contribuição Eduardo Decussi

Necessário instalar o PHPMailer via composer.

Para isso siga os passos abaixo, dentro do diretorio public_html

1 - Downloading Composer
$ curl -sS https://getcomposer.org/installer -o composer-setup.php

2 - Installing Composer
$ php composer-setup.php --filename=composer.phar; rm composer-setup.php; chmod +x composer.phar

3 - Installing PHPMailer
$ ./composer.phar install
