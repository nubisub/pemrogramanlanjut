<?php
require_once('C:/xampp/htdocs/samlphptest/lib/_autoload.php');
$as = new SimpleSAML_Auth_Simple('example-sql');
$as->requireAuth();
$attributes = $as->getAttributes();
?>

<html>
<head><title>My First Service Provider</title></head>
<body>
<h1>First Website</h1>
<p>Hello User of First Website!</p>
<h2>Your attribute:</h2>
<pre>
<?php
print_r($attributes);
?>
</pre>
<p><a
href="http://localhost/simplesaml/module.php/core/authenticate.php?as=example-sql&logout">logout</a></p>
</body>
</html>