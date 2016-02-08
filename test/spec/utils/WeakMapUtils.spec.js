/**
 * Tests for WeakMapUtils.ts
 *
 * @author brendenpalmer
 * @license MIT
 */

describe('Namespace: weakmap', function() {
  describe('Class: WeakMapUtils', function() {
    var _WeakMapUtils = weakmap.WeakMapUtils;
    var _WeakMapSequencer = weakmap.WeakMapSequencer;
    var _constants = weakmap.WeakMapConstants;
    var _instance = new _WeakMapUtils();

    it('should be defined', function() {
      expect(_WeakMapUtils).toBeDefined();
    });

    it('should have defined the instance', function() {
      expect(_instance).toBeDefined();
    });

    describe('When defining a property', function() {
      var _test = {};

      it('should define the unique identifier on the object and returns its value', function() {
        spyOn(Object, 'defineProperty').and.callThrough();
        expect(_WeakMapUtils.defineProperty(_test)).toEqual(_WeakMapSequencer.getInstance().identifier - 1);
        expect(Object.defineProperty).toHaveBeenCalled();
      });

      it('should return the already defined value on the object', function() {
        spyOn(Object, 'defineProperty').and.callThrough();
        expect(_WeakMapUtils.defineProperty(_test)).toEqual(_WeakMapSequencer.getInstance().identifier - 1);
        expect(Object.defineProperty).not.toHaveBeenCalled();
      });

      it('should throw an error', function() {
        spyOn(_WeakMapUtils, 'isValidObject').and.callFake(function() {
          return true;
        });

        expect(function() {
          _WeakMapUtils.defineProperty('1');
        }).toThrow();
      });

      it('should throw an error', function() {
        expect(function() {
          _WeakMapUtils.defineProperty('1');
        }).toThrow();
      });
    });

    describe('When getting a property', function() {
      var _test = {};

      it('should define the unique identifier on the object and returns its value', function() {
        expect(_WeakMapUtils.defineProperty(_test)).toEqual(_WeakMapSequencer.getInstance().identifier - 1);
        expect(_WeakMapUtils.getProperty(_test)).toEqual(_WeakMapSequencer.getInstance().identifier - 1);
      });

      it('should return the already defined value on the object', function() {
        expect(_WeakMapUtils.defineProperty(_test)).toEqual(_WeakMapSequencer.getInstance().identifier - 1);
        expect(_WeakMapUtils.getProperty(_test)).toEqual(_WeakMapSequencer.getInstance().identifier - 1);
      });

      it('should return undefined', function() {
        spyOn(_WeakMapUtils, 'isValidObject').and.callFake(function() {
          return false;
        });

        expect(_WeakMapUtils.getProperty({})).toEqual(undefined);
      });

      it('should return undefined', function() {
        expect(_WeakMapUtils.getProperty('1')).toEqual(undefined);
      });
    });

    describe('When getting whether or not an object is valid', function() {
      it('should return true for objects', function() {
        expect(_WeakMapUtils.isValidObject({})).toEqual(true);
      });

      it('should return true for functions', function() {
        expect(_WeakMapUtils.isValidObject(function() {})).toEqual(true);
      });

      it('should return false for numbers', function() {
        expect(_WeakMapUtils.isValidObject(1)).toEqual(false);
      });

      it('should return false for strings', function() {
        expect(_WeakMapUtils.isValidObject('test')).toEqual(false);
      });
    });
  });
});
