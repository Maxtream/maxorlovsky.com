<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

require_once dirname(__FILE__).'/../db.php';

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', $db['name']);

/** MySQL database username */
define('DB_USER', $db['user']);

/** MySQL database password */
define('DB_PASSWORD', $db['pass']);

/** MySQL hostname */
define('DB_HOST', $db['host']);

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

define('WP_CONTENT_DIR', dirname(__FILE__) . '/wp-content' );
define('WP_CONTENT_URL', $_SERVER['REQUEST_SCHEME'].'://'.$_SERVER['HTTP_HOST'].'/be/wp-content');

//define('WP_PLUGIN_DIR', dirname(__FILE__) . '/public/wp-plugins' );
//define('WP_PLUGIN_URL', $_SERVER['REQUEST_SCHEME'].'://'.$_SERVER['HTTP_HOST'].'/be/wp-plugins');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '5{)(MtxonE9uGp~tBpUOS/2!53S`p&,?:5RWzSA;)&>P}{A;op6)-_~o/3^P*5Eq');
define('SECURE_AUTH_KEY',  ':0._]|;.(;2Osq41r@HGXQ(; [0&6u<D2-V1VqW@xGe/wo;H pRk3O^n5h{cg1xv');
define('LOGGED_IN_KEY',    'VK{hXU%b{gLf w~FUabUTp.G!=jSHtI4-?V6,<z`Erz5sXF%?>*v!p[E~_lsLSi[');
define('NONCE_KEY',        '+2%9=p9`/ L;-2zvUD.]fi51.4.};aR</_QBX}~mXacGHU+8-1!om8XwQb_H*)_3');
define('AUTH_SALT',        'Yp&+Ll*M(OI^Z}R)/1Y@JO?te4Ds9ODbVW^yX0xe&L&xgsgCEIx)|e{T!Y.0N?J/');
define('SECURE_AUTH_SALT', '0PwPDy%CIgjl[-kh`bCj*uOjlI[vyDOC,;lQ_] c+ab#y<~/6LX1zRWEmm]4MH2]');
define('LOGGED_IN_SALT',   'csYKx<ebM2#Y;)q`8zlv<mQ}`_O74n*;E|/HrHL~*U/$gN.NxlAJ>N8rbQ7 9S|U');
define('NONCE_SALT',       'O*7Njax$o;,G<x(mtlt(W[Couse)r>+G?VdlE_Dm]Z%Cq;T*L{boQ5BB0>b4!tZ{');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');