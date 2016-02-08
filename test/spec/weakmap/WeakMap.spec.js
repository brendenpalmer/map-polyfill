/**
 * Tests for WeakMap.ts
 *
 * @author brendenpalmer
 * @license MIT
 */

describe('Namespace: weakmap', function() {
  describe('Class: WeakMap', function() {
    var _iterableTest1 = {};
    var _iterableTest2 = {};
    var _iterable = [
      [_iterableTest1, '1'],
      [_iterableTest2, '2']
    ];
    var _WeakMap = weakmap.WeakMap;
    var _constants = weakmap.WeakMapConstants;
    var _instance = new _WeakMap(_iterable);

    it('should be defined', function() {
      expect(_WeakMap).toBeDefined();
    });

    it('should have defined the instance', function() {
      expect(_instance).toBeDefined();
    });

    it('should have set the values from _iterable', function() {
      expect(_instance.get(_iterableTest1)).toEqual('1');
      expect(_instance.get(_iterableTest2)).toEqual('2');
    });

    it('should not call .set if no iterable parameter is passed to the constructor', function () {
      spyOn(_WeakMap.prototype, 'set').and.callThrough();
      var _instance2 = new _WeakMap();
      expect(_WeakMap.prototype.set).not.toHaveBeenCalled();
    });

    describe('When setting a value', function() {
      it('should set, then get the value', function() {
        var _object = {};

        _instance.set(_object, 'test');

        expect(_instance.get(_object)).toEqual('test');
      });

      it('should maintain the same identifier', function() {
        var _object = {};

        _instance.set(_object, 'test');
        var _identifier = _object[_constants.WEAKMAP_KEY_IDENTIFIER];

        _instance.set(_object, 'another test');
        expect(_object[_constants.WEAKMAP_KEY_IDENTIFIER]).toEqual(_identifier);
      });
    });

    describe('When calling the has method', function() {
      it('should return false if the key does not exist', function() {
        expect(_instance.has({})).toEqual(false);
      });

      it('should return false after a key is deleted', function() {
        var _test = {};

        _instance.set(_test, 'Arbitrary Value');
        expect(_instance.has(_test)).toEqual(true);

        _instance.delete(_test);
        expect(_instance.has(_test)).toEqual(false);
      });

      it('should return true if the key exists', function() {
        var _test = {};

        _instance.set(_test, 'Arbitrary Value');
        expect(_instance.has(_test)).toEqual(true);
      });
    });

    describe('When getting a value', function() {
      var _test = function() {};

      beforeAll(function() {
        _instance.set(_test, 'Arbitrary Value');
      });

      it('should return undefined if no value is set', function() {
        expect(_instance.get({})).toEqual(undefined);
      });

      it('should return the correct value', function() {
        expect(_instance.get(_test)).toEqual('Arbitrary Value');
      });
    });

    describe('When deleting a value', function() {
      var _test = function() {};

      beforeAll(function() {
        _instance.set(_test, 'Arbitrary Value');
      });

      it('should return false if the deletion was not successful', function() {
        expect(_instance.delete({})).toEqual(false);
      });

      it('should return the correct value', function() {
        expect(_instance.delete(_test)).toEqual(true);
      });
    });
  });
});
