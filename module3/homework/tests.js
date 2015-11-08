QUnit.test( "hello test", function( assert ) {
    assert.ok( 1 == "1", "Passed!" );
});


QUnit.test( "day of week", function( assert ) {
    assert.equal( dayOfWeekNamesOf(new Date(2015,10,1)), "Domingo");
    assert.equal( dayOfWeekNamesOf(new Date(2015,10,2)), "Lunes");
    assert.equal( dayOfWeekNamesOf(new Date(1492,9,12)), "Miércoles");
    assert.equal( dayOfWeekNamesOf(new Date(1492,9,13)), "Jueves");
    assert.equal( dayOfWeekNamesOf(new Date(1492,9,11)), "Martes");
});