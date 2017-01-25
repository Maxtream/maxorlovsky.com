<?php
add_action( 'rest_api_init', function () {
	// Fetch menus
	register_rest_route(
		'max-api',
		'/menu/',
		array(
			'methods'	=> 'GET',
			'callback'	=> function() {
				return wp_get_nav_menu_items(get_query_var('menu', 'main-menu'));
			},
		)
	);

	// Add additional field to posts, to display thumbnail
	register_rest_field( 'post',
        'image',
        array(
            'get_callback'    => function( $object, $field_name, $request ) {
            	return get_the_post_thumbnail( $object['id'], array(250, 130));
            },
            'update_callback' => null,
            'schema'          => null,
        )
    );
});