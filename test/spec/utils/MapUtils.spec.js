/**
 * Tests for MapUtils.ts
 *
 * @author brendenpalmer
 * @license MIT
 */

describe('Namespace: es6map', function() {
  describe('Class: MapUtils', function() {
    var _MapUtils = es6map.MapUtils;
    var _MapSequencer = es6map.MapSequencer;
    var _constants = es6map.MapConstants;
    var _instance = new _MapUtils();

    it('should be defined', function() {
      expect(_MapUtils).toBeDefined();
    });

    it('should have defined the instance', function() {
      expect(_instance).toBeDefined();
    });

    describe('When defining a property', function() {
      var _test = {};

      it('should define the unique identifier on the object and returns its value', function() {
        spyOn(Object, 'defineProperty').and.callThrough();
        expect(_MapUtils.defineProperty(_test)).toEqual(_MapSequencer.getInstance().identifier - 1);
        expect(Object.defineProperty).toHaveBeenCalled();
      });

      it('should return the already defined value on the object', function() {
        spyOn(Object, 'defineProperty').and.callThrough();
        expect(_MapUtils.defineProperty(_test)).toEqual(_MapSequencer.getInstance().identifier - 1);
        expect(Object.defineProperty).not.toHaveBeenCalled();
      });

      it('should throw an error', function() {
        spyOn(_MapUtils, 'isValidObject').and.callFake(function() {
          return true;
        });

        expect(function() {
          _MapUtils.defineProperty('1');
        }).toThrow();
      });

      it('should throw an error', function() {
        expect(function() {
          _MapUtils.defineProperty('1');
        }).toThrow();
      });
    });

    describe('When getting a property', function() {
      var _test = {};

      it('should define the unique identifier on the object and returns its value', function() {
        expect(_MapUtils.defineProperty(_test)).toEqual(_MapSequencer.getInstance().identifier - 1);
        expect(_MapUtils.getProperty(_test)).toEqual(_MapSequencer.getInstance().identifier - 1);
      });

      it('should return the already defined value on the object', function() {
        expect(_MapUtils.defineProperty(_test)).toEqual(_MapSequencer.getInstance().identifier - 1);
        expect(_MapUtils.getProperty(_test)).toEqual(_MapSequencer.getInstance().identifier - 1);
      });

      it('should return undefined', function() {
        spyOn(_MapUtils, 'isValidObject').and.callFake(function() {
          return false;
        });

        expect(_MapUtils.getProperty({})).toEqual(undefined);
      });

      it('should return undefined', function() {
        expect(_MapUtils.getProperty('1')).toEqual(undefined);
      });
    });

    describe('When getting whether or not an object is valid', function() {
      it('should return true for objects', function() {
        expect(_MapUtils.isValidObject({})).toEqual(true);
      });

      it('should return true for functions', function() {
        expect(_MapUtils.isValidObject(function() {})).toEqual(true);
      });

      it('should return false for numbers', function() {
        expect(_MapUtils.isValidObject(1)).toEqual(false);
      });

      it('should return false for strings', function() {
        expect(_MapUtils.isValidObject('test')).toEqual(false);
      });
    });
  });
});
