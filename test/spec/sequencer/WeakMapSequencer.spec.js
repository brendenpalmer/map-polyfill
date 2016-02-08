/**
 * Tests for WeakMapSequencer.ts
 *
 * @author brendenpalmer
 * @license MIT
 */

describe('Namespace: weakmap', function() {
  describe('Class: WeakMapSequencer', function() {
    var _WeakMapSequencer = weakmap.WeakMapSequencer;
    var _instance = _WeakMapSequencer.getInstance();

    it('should be defined', function() {
      expect(_WeakMapSequencer).toBeDefined();
    });

    it('should have defined the instance', function() {
      expect(_instance).toBeDefined();
    });

    it('should throw an error', function() {
      expect(function() {
        new _WeakMapSequencer();
      }).toThrow('Get the instance of the WeakMapSequencer using the getInstance method.');
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
