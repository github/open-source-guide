(function ($) {

    $.fn.geopattern = function(options) {
      return this.each(function() {
        var container = $(this);
        var sha       = $(this).data('title-sha');
        var s         = getSnap();

        setBGColor(s, sha, container);
        // geoSquares(s, sha);
        // geoCircles(s, sha);
        // geoRings(s, sha);
        // geoHexagons(s, sha);
        // geoOverlappingCircles(s, sha);
        // geoTriangles(s, sha);
        geoXes(s, sha);

        renderPattern(s, container);
      });

      function getSnap() {
        var snap;
        if ($('#geopattern-tmp').length) {
          snap = Snap('#geopattern-tmp');
        }
        else {
          var svg = document.createElementNS('http://www.w3.org/2000/svg', "svg");
          svg.id = "geopattern-tmp";
          snap = Snap(svg);
        }
        return snap;

      }

      function setBGColor(s, sha, container) {
        var hueOffset       = parseInt(sha.substr(14, 3), 16);
        var satOffset       = parseInt(sha.substr(17, 1), 16) / 100;
        var bgRGB           = Snap.getRGB("#933c3c");
        var mappedHueOffset = map(hueOffset, 0, 4095, 0, 1);
        var bgHSL           = Snap.rgb2hsb(bgRGB.r, bgRGB.g, bgRGB.b);
        bgHSL.h             = 1 - mappedHueOffset;

        if (satOffset % 2) {
          bgHSL.s += satOffset;
        }
        else {
          bgHSL.s -= satOffset;
        }
        $(container).css('background-color', Snap.hsb2rgb(bgHSL.h, bgHSL.s, bgHSL.b).hex);
      }

      function geoSquares(s, sha) {
        var squareSize = parseInt(sha.substr(0, 1), 16);
        squareSize = map(squareSize, 0, 15, 10, 70);
        s.attr({
          width:  squareSize * 6 + 'px',
          height: squareSize * 6 + 'px'
        });
        var i = 0;
        for (var y = 0; y < 6; y++) {
          for (var x = 0; x < 6; x++) {
            var val = parseInt(sha.substr(i, 1), 16);
            var square = s.rect(x*squareSize, y*squareSize, squareSize, squareSize);
            square.attr({
              fill: "#000",
              opacity: map(val, 0, 15, 0, 0.2)
            });
            i++;
          };
        };
      }

      function geoCircles(s, sha) {
        var scale = parseInt(sha.substr(0, 2), 16);
        var maxCircleSize = scale * 10;
        s.attr({
          width:  maxCircleSize * 8,
          height: maxCircleSize * 8
        });
        var i = 0;
        for (var y = 0; y < 6; y++) {
          for (var x = 0; x < 6; x++) {
            var val = parseInt(sha.substr(i, 1), 16);
            val = map(val, 0, 15, 1, maxCircleSize);
            var circle = s.circle(
                            x*maxCircleSize + maxCircleSize/2,
                            y*maxCircleSize + maxCircleSize/2,
                            val / 2);
            circle.attr({
              fill: "#000",
              opacity: map(val, 10, maxCircleSize / 2, 0.2, 0.02)
            });
            i++;
          };
        };
      }

      function geoRings(s, sha) {
        var scale = parseInt(sha.substr(1, 1), 16);
        var ringSize = map(scale, 0, 15, 5, 100);
        var strokeWidth = ringSize / 4;
        s.node.setAttribute('width',  (ringSize + strokeWidth) * 6);
        s.node.setAttribute('height', (ringSize + strokeWidth) * 6);
        var i = 0;
        for (var y = 0; y < 6; y++) {
          for (var x = 0; x < 6; x++) {
            var val = parseInt(sha.substr(i, 1), 16);
            var circle = s.circle(
                            x*ringSize + x*strokeWidth + (ringSize + strokeWidth)/2,
                            y*ringSize + y*strokeWidth + (ringSize + strokeWidth)/2,
                            ringSize/2);
            circle.attr({
              fill: "none",
              stroke: "#000",
              'strokeWidth': strokeWidth,
              opacity: map(val, 0, 15, 0.02, 0.16)
            });
            i++;
          };
        };
      }

      function geoHexagons(s, sha) {
        var scale      = parseInt(sha.substr(1, 1), 16);
        var sideLength = map(scale, 0, 15, 5, 120);
        var hexHeight  = sideLength * Math.sqrt(3);
        var hexWidth   = sideLength * 2;
        var hex        = createHexagon(s, sideLength).attr({fill: "#111", stroke: "#000", opacity:0});

        s.node.setAttribute('width',  (hexWidth * 3) + (sideLength * 3));
        s.node.setAttribute('height', hexHeight * 6);

        var i = 0;
        for (var y = 0; y < 6; y++) {
          for (var x = 0; x < 6; x++) {
            var val     = parseInt(sha.substr(i, 1), 16);
            var dy      = x % 2 == 0 ? y*hexHeight : y*hexHeight + hexHeight/2;
            var opacity = map(val, 0, 15, 0.02, 0.18),
            tmpHex = hex.clone();
            tmpHex.attr({
              opacity: opacity,
              transform: "t"+[x*sideLength*1.5 - hexWidth/2,dy - hexHeight/2]
            });

            // Add an extra one at top-right, for tiling.
            if (x == 0) {
              tmpHex = hex.clone();
              tmpHex.attr({
                opacity: opacity,
                transform: "t"+[6*sideLength*1.5 - hexWidth/2,dy - hexHeight/2]
              });
            }

            // Add an extra row at the end that matches the first row, for tiling.
            if (y == 0) {
              var dy = x % 2 == 0 ? 6*hexHeight : 6*hexHeight + hexHeight/2;
              tmpHex = hex.clone();
              tmpHex.attr({
                opacity: opacity,
                transform: "t"+[x*sideLength*1.5 - hexWidth/2,dy - hexHeight/2]
              });
            }

            // Add an extra one at bottom-right, for tiling.
            if (x == 0 && y == 0) {
              tmpHex = hex.clone();
              tmpHex.attr({
                opacity: opacity,
                transform: "t"+[6*sideLength*1.5 - hexWidth/2,5*hexHeight + hexHeight/2]
              });
            }
            i++;
          };
        };
      }

      function geoTriangles(s, sha) {
        var scale          = parseInt(sha.substr(1, 1), 16);
        var sideLength     = map(scale, 0, 15, 5, 120);
        var triangleHeight = sideLength/2 * Math.sqrt(3);
        var triangle       = createTriangle(s, sideLength, triangleHeight).attr({stroke: "#444", opacity:0});
        var rotation       = "r180,"+sideLength/2 +","+triangleHeight/2;

        s.node.setAttribute('width',  sideLength * 3);
        s.node.setAttribute('height', triangleHeight * 6);

        var i = 0;
        for (var y = 0; y < 6; y++) {
          for (var x = 0; x < 6; x++) {
            var val  = parseInt(sha.substr(i, 1), 16);
            var fill = (val % 2 == 0) ? "#ddd" : "#222";
            var rot  = "";
            if (y % 2 == 0) {
              rot = x % 2 == 0 ? rotation : "";
            }
            else {
              rot = x % 2 != 0 ? rotation : "";
            }
            var opacity = map(val, 0, 15, 0.02, 0.15),
            tmpTri = triangle.clone();
            tmpTri.attr({
              opacity: opacity,
              fill: fill,
              transform: "t"+[x*sideLength*0.5 - sideLength/2,triangleHeight*y]+rot
            });

            // Add an extra one at top-right, for tiling.
            if (x == 0) {
              tmpTri = triangle.clone();
              tmpTri.attr({
                opacity: opacity,
                fill: fill,
                transform: "t"+[6*sideLength*0.5 - sideLength/2,triangleHeight*y]+rot
              });
            }
            i++;
          };
        };
      }

      function geoOverlappingCircles(s, sha) {
        var scale    = parseInt(sha.substr(1, 1), 16);
        var diameter = map(scale, 0, 15, 20, 200);
        var radius   = diameter/2;

        s.node.setAttribute('width',  radius * 6);
        s.node.setAttribute('height', radius * 6);

        var i = 0;
        for (var y = 0; y < 6; y++) {
          for (var x = 0; x < 6; x++) {
            var val     = parseInt(sha.substr(i, 1), 16);
            var opacity = map(val, 0, 15, 0.02, 0.1);
            var fill    = (val % 2 == 0) ? "#ddd" : "#222";
            var circle = s.circle(x*radius, y*radius, radius);
            circle.attr({
              fill: fill,
              opacity: opacity
            });

            // Add an extra one at top-right, for tiling.
            if (x == 0) {
              var circle = s.circle(6*radius, y*radius, radius);
              circle.attr({
                fill: fill,
                opacity: opacity
              });
            }

            // // Add an extra row at the end that matches the first row, for tiling.
            if (y == 0) {
              var circle = s.circle(x*radius, 6*radius, radius);
              circle.attr({
                fill: fill,
                opacity: opacity
              });
            }

            // // Add an extra one at bottom-right, for tiling.
            if (x == 0 && y == 0) {
              var circle = s.circle(6*radius, 6*radius, radius);
              circle.attr({
                fill: fill,
                opacity: opacity
              });
            }
            i++;
          };
        };
      }

      function geoXes(s, sha) {
        var squareSize = parseInt(sha.substr(0, 1), 16);
        squareSize     = map(squareSize, 0, 15, 10, 25);
        console.log(squareSize);
        var xShape     = createX(s, squareSize);
        var xSize      = squareSize * 3 * 0.943;

        s.node.setAttribute('width',  xSize * 6);
        s.node.setAttribute('height', xSize * 6);

        var i = 0;
        for (var y = 0; y < 6; y++) {
          for (var x = 0; x < 6; x++) {
            var val     = parseInt(sha.substr(i, 1), 16);
            var opacity = map(val, 0, 15, 0.02, 0.15);
            var fill    = (val % 2 == 0) ? "#ddd" : "#222";
            var xTmp    = xShape.clone();
            xTmp.attr({
              fill: fill,
              opacity: opacity,
              transform: "t"+[x*xSize,y*xSize]+
                         "r45,"+squareSize*1.5+","+squareSize*1.5
            });
            i++;
          };
        };
      }

      function createHexagon(s, sideLength) {
        c = sideLength;
        a = c/2;
        b = Math.sin(Snap.rad(60))*c;
        return s.polyline(0, b, a, 0, a+c, 0, 2*c, b, a+c, 2*b, a, 2*b, 0, b);
      }

      function createTriangle(s, sideLength, height) {
        var halfWidth = sideLength / 2;
        return s.polyline(halfWidth, 0, sideLength, height, 0, height, halfWidth, 0);
      }

      function createX(s, squareSize) {
        var shape = s.group(
          s.rect(squareSize, 0, squareSize, squareSize*3),
          s.rect(0, squareSize, squareSize*3, squareSize)
        );
        shape.attr({
          opacity: 0,
        });
        return shape;
      }

      function renderPattern(s, container) {
        var b64 = 'data:image/svg+xml;base64,'+window.btoa(s.toString());
        var url = 'url("' + b64 + '")';
        $(container).css('background-image', url);
      }

      function map(value, v_min, v_max, d_min, d_max) {
        v_value = parseFloat(value);
        v_range = v_max - v_min;
        d_range = d_max - d_min;
        return (v_value - v_min) * d_range / v_range + d_min;
      }

    };

}(jQuery));
