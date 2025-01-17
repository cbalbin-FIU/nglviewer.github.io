
var grey = [ 0.8, 0.8, 0.8 ];
var darkgrey = [ 0.6, 0.6, 0.6 ];

var shape = new NGL.Shape( "shape", {
    labelParams: { attachment: "middle-center" },
    sphereDetail: 4,
    radialSegments: 100
} );
shape.addEllipsoid( [ 0, 0, 0 ], grey, 4, [ 0, 3, 0 ], [ 0, 0, 1 ], "Face" );
shape.addSphere( [ -2, 1, -1 ], darkgrey, 0.3, "Right eye" );
shape.addSphere( [  2, 1, -1 ], darkgrey, 0.3, "Left eye" );
shape.addSphere( [ 0, 0, -1 ], darkgrey, 0.5, "Nose" );
shape.addEllipsoid( [ -1, -1, -1 ], darkgrey, 1.3, [ 0, 1, 0 ], [ 0, 0, 0.3 ], "Right cheek" );
shape.addEllipsoid( [  1, -1, -1 ], darkgrey, 1.3, [ 0, 1, 0 ], [ 0, 0, 0.3 ], "Left cheek" );
shape.addCone( [ 2.5, 1.7, 0 ], [ 4, 3, 0 ], darkgrey, 0.8, "Left ear" );
shape.addCone( [ -2.5, 1.7, 0 ], [ -4, 3, 0 ], darkgrey, 0.8, "Right ear" );
shape.addCylinder( [ -1, -1, -1 ], [ -4.3, -0.2, -1.2 ], darkgrey, 0.1, "Whisker" );
shape.addCylinder( [ -1, -1, -1 ], [ -4.5, -1.2, -1.2 ], darkgrey, 0.1, "Whisker" );
shape.addCylinder( [ -1, -1, -1 ], [ -4.2, -2.2, -1.2 ], darkgrey, 0.1, "Whisker" );
shape.addCylinder( [  1, -1, -1 ], [  4.3, -0.2, -1.2 ], darkgrey, 0.1, "Whisker" );
shape.addCylinder( [  1, -1, -1 ], [  4.5, -1.2, -1.2 ], darkgrey, 0.1, "Whisker" );
shape.addCylinder( [  1, -1, -1 ], [  4.2, -2.2, -1.2 ], darkgrey, 0.1, "Whisker" );
shape.addLabel( [ 0, 4, -1 ], [ 0.2, 0.5, 0.8 ], 2.5, "Thank you!" );

var shapeComp = stage.addComponentFromObject( shape, {
    visible: false,
    name: "cat"
} );
shapeComp.addRepresentation( "buffer" );


var catOri = [16.44,0,-0.35,0,0,16.44,0,0,0.35,0,16.44,0,0,-0.9,0.6,1];

function catView(){
    stage.animationControls.orient( catOri, 0 );
    stage.setRock( [ 0, 1, 0 ], 0.005, 0.3 );
}

