define(function() {
    function _setup(game, progress, complete) {
        if(progress)
            game.load.on('progress', progress);

        game.load.once('complete', function() {
            if(progress)
                game.load.off('progress', progress);

            if(complete)
                complete();
        });
    }

    var resources = {
        /**
         * Items required for the preloader to display
         */
        preload: function(game, progress, complete) {
            if(complete)
                complete();
        },
        /**
         * Items required for the initial startup of the game
         */
        startup: function(game, progress, complete) {
            _setup(game, progress, complete);

            resources.worlds.forEach(function(w) {
                game.load.tilemap(w, w, null, gf.FILE_FORMAT.JSON);
            });

            game.load.start();
        },
        worlds: [
            // Isometric test maps
            // 'maps/iso/Isometric_32x16_nooffset.tmx',
            // 'maps/iso/Isometric_32x16_with_offset_x.tmx',
            // 'maps/iso/Isometric_32x16_with_offset_x_y_even.tmx',
            // 'maps/iso/Isometric_32x16_with_offset_x_y_odd.tmx',
            // 'maps/iso/Isometric_64_32_with_offset_y.tmx',
            // 'maps/iso/Isometric_64_32_with_offset_y_evensize.tmx',
            // 'maps/iso/Isometric_cubes.tmx',
            // 'maps/iso/Isometric_cubes_large.tmx',
            // 'maps/iso/Isometric_cubes_with_objects.tmx',
            // 'maps/iso/Isometric_cubes_large_with_objects.tmx',
            // 'maps/iso/Isometric_land.tmx',

            // Orthogonal test maps
            // 'maps/ortho/formosa_gzip.tmx',
            // 'maps/ortho/formosa_zlib.tmx',
            'maps/ortho/Ortho_1_16__16_large.json',
            'maps/ortho/Ortho_1_16__16_large.tmx',
            // 'maps/ortho/Ortho_1_32__32.tmx',
            // 'maps/ortho/Ortho_1_32__32_objects.tmx'
        ]
    };

    return resources;
});
