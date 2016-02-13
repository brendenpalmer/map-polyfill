/**
 * Tests for Map.ts
 *
 * @author brendenpalmer
 * @license MIT
 */

describe('Namespace: es6map', function() {
  describe('Class: Map', function() {
    var _iterableTest1 = {};
    var _iterableTest2 = {};
    var _iterable = [
      [_iterableTest1, '1'],
      [_iterableTest2, '2']
    ];
    var _Map = es6map.Map;
    var _constants = es6map.MapConstants;
    var _instance = new _Map(_iterable);

    it('should be defined', function() {
      expect(_Map).toBeDefined();
    });

    it('should have defined the instance', function() {
      expect(_instance).toBeDefined();
    });

    it('should have set the values from _iterable', function() {
      expect(_instance.get(_iterableTest1)).toEqual('1');
      expect(_instance.get(_iterableTest2)).toEqual('2');
    });

    it('should not call .set if no iterable parameter is passed to the constructor', function() {
      spyOn(_Map.prototype, 'set').and.callThrough();
      var _instance2 = new _Map();
      expect(_Map.prototype.set).not.toHaveBeenCalled();
    });

    describe('When setting a value', function() {
      it('should set, then get the value', function() {
        var _object = {};

        _instance.set(_object, 'test');

        expect(_instance.get(_object)).toEqual('test');
      });

      it('should set, then get the value', function() {
        _instance.set(2, 'Test');

        expect(_instance.get(2)).toEqual('Test');
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

      it('should return false after a key is deleted', function() {
        _instance.set(2, 'Arbitrary Value');
        expect(_instance.has(2)).toEqual(true);

        _instance.delete(2);
        expect(_instance.has(2)).toEqual(false);
      });

      it('should return true if the key exists', function() {
        var _test = {};

        _instance.set(_test, 'Arbitrary Value');
        expect(_instance.has(_test)).toEqual(true);
      });

      it('should return true if the key exists', function() {
        _instance.set(2, 'Arbitrary Value');
        expect(_instance.has(2)).toEqual(true);
      });
    });

    describe('When getting a value', function() {
      var _test = function() {};

      beforeAll(function() {
        _instance.set(_test, 'Arbitrary Value');
        _instance.set('Test Key', 'Arbitrary Value');
      });

      it('should return undefined if no value is set', function() {
        expect(_instance.get({})).toEqual(undefined);
      });

      it('should return undefined if no value is set', function() {
        expect(_instance.get(3)).toEqual(undefined);
      });

      it('should return the correct value', function() {
        expect(_instance.get(_test)).toEqual('Arbitrary Value');
      });

      it('should return the correct value', function() {
        expect(_instance.get('Test Key')).toEqual('Arbitrary Value');
      });
    });

    describe('When deleting a value', function() {
      var _test = function() {};

      beforeAll(function() {
        _instance.set(_test, 'Arbitrary Value');
        _instance.set('Test Key', 'Arbitrary Value');
      });

      it('should return false if the deletion was not successful', function() {
        expect(_instance.delete({})).toEqual(false);
        expect(_instance.delete(4)).toEqual(false);
      });

      it('should return the correct value', function() {
        expect(_instance.delete(_test)).toEqual(true);
      });

      it('should return the correct value', function() {
        expect(_instance.delete('Test Key')).toEqual(true);
      });
    });

    describe('When calling entries', function() {
      var _entries;
      var _test;

      beforeAll(function() {
        _test = {};

        _instance.clear();
        _instance.set(_test, 'Arbitrary Value');
        _instance.set('Test Key', 'Arbitrary Value');

        _entries = _instance.entries();
      });

      it('should return the correct value', function() {
        expect(_entries.next()).toEqual(jasmine.objectContaining({
          value: [jasmine.any(Object), 'Arbitrary Value'],
          done: false
        }));

        expect(_entries.next()).toEqual(jasmine.objectContaining({
          value: ['Test Key', 'Arbitrary Value'],
          done: false
        }));

        expect(_entries.next()).toEqual(jasmine.objectContaining({
          value: undefined,
          done: true
        }));
      });
    });

    describe('When calling keys', function() {
      var _keys;
      var _test;

      beforeAll(function() {
        _test = {};

        _instance.clear();
        _instance.set(_test, 'Arbitrary Value');
        _instance.set('Test Key', 'Arbitrary Value');

        _keys = _instance.keys();
      });

      it('should return the correct value', function() {
        expect(_keys.next()).toEqual(jasmine.objectContaining({
          value: jasmine.any(Object),
          done: false
        }));

        expect(_keys.next()).toEqual(jasmine.objectContaining({
          value: 'Test Key',
          done: false
        }));

        expect(_keys.next()).toEqual(jasmine.objectContaining({
          value: undefined,
          done: true
        }));
      });
    });

    describe('When calling values', function() {
      var _values;
      var _test;

      beforeAll(function() {
        _test = {};

        _instance.clear();
        _instance.set(_test, 'Arbitrary Value');
        _instance.set('Test Key', 'Arbitrary Value');

        _values = _instance.values();
      });

      it('should return the correct value', function() {
        expect(_values.next()).toEqual(jasmine.objectContaining({
          value: 'Arbitrary Value',
          done: false
        }));

        expect(_values.next()).toEqual(jasmine.objectContaining({
          value: 'Arbitrary Value',
          done: false
        }));

        expect(_values.next()).toEqual(jasmine.objectContaining({
          value: undefined,
          done: true
        }));
      });
    });

    describe('When calling forEach', function() {
      var _values;
      var _test;
      var _callback;

      beforeAll(function() {
        _test = {};
        _callback = {
          func: function () {

          }
        };

        _instance.clear();
        _instance.set(_test, 'Arbitrary Value');
        _instance.set('Test Key', 'Arbitrary Value');
      });

      it('should call the callback', function () {
        spyOn(_callback, 'func');

        _instance.forEach(_callback.func);

        expect(_callback.func).toHaveBeenCalled();
        expect(_callback.func.calls.count()).toEqual(2);
      });

      it('should call the callback using .call', function () {
        spyOn(_callback, 'func');
        spyOn(Function.prototype, 'call').and.callThrough();

        _instance.forEach(_callback.func, {});

        expect(Function.prototype.call).toHaveBeenCalled();
        expect(_callback.func).toHaveBeenCalled();
        expect(_callback.func.calls.count()).toEqual(2);
      });
    });
  });
});
