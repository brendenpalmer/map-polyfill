/**
 * Tests for MapSequencer.ts
 *
 * @author brendenpalmer
 * @license MIT
 */

describe('Namespace: es6map', function() {
  describe('Class: MapSequencer', function() {
    var _MapSequencer = es6map.MapSequencer;
    var _instance = _MapSequencer.getInstance();

    it('should be defined', function() {
      expect(_MapSequencer).toBeDefined();
    });

    it('should have defined the instance', function() {
      expect(_instance).toBeDefined();
    });

    it('should throw an error', function() {
      expect(function() {
        new _MapSequencer();
      }).toThrow('Get the instance of the MapSequencer using the getInstance method.');
    });

    describe('When getting the next value in the sequencer', function() {
      it('should return the correct value', function() {
        for (var i = 0; i < 99; i++) {
          expect(_instance.next()).toEqual(i + 2);
        }
      });
    });
  });
});
