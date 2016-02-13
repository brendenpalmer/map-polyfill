/**
 * Tests for MapIterator.ts
 *
 * @author brendenpalmer
 * @license MIT
 */

describe('Namespace: es6map', function() {
  describe('Class: MapIterator', function() {
    var _iterableTest1 = {};
    var _iterableTest2 = {};
    var _iterable = [
      [_iterableTest1, '1'],
      [_iterableTest2, '2']
    ];
    var _MapIterator = es6map.MapIterator;
    var _Map = es6map.Map;
    var _constants = es6map.MapIteratorConstants;
    var _mapInstance = new _Map([[1, 1], [2, 2]]);
    var _entries = new _MapIterator(_mapInstance, 'entries');
    var _keys = new _MapIterator(_mapInstance, 'keys');
    var _values = new _MapIterator(_mapInstance, 'values');

    it('should be defined', function() {
      expect(_MapIterator).toBeDefined();
    });

    it('should have defined the instances', function() {
      expect(_entries).toBeDefined();
      expect(_values).toBeDefined();
      expect(_keys).toBeDefined();
    });

    it('should get the next value for entres', function () {
      expect(_entries.next()).toEqual(jasmine.objectContaining({
        value: [1, 1],
        done: false
      }));

      expect(_entries.next()).toEqual(jasmine.objectContaining({
        value: [2, 2],
        done: false
      }));

      expect(_entries.next()).toEqual(jasmine.objectContaining({
        value: void 0,
        done: true
      }));
    });

    it('should get the next value for keys', function () {
      expect(_keys.next()).toEqual(jasmine.objectContaining({
        value: 1,
        done: false
      }));

      expect(_keys.next()).toEqual(jasmine.objectContaining({
        value: 2,
        done: false
      }));

      expect(_keys.next()).toEqual(jasmine.objectContaining({
        value: void 0,
        done: true
      }));
    });

    it('should get the next value for values', function () {
      expect(_values.next()).toEqual(jasmine.objectContaining({
        value: 1,
        done: false
      }));

      expect(_values.next()).toEqual(jasmine.objectContaining({
        value: 2,
        done: false
      }));

      expect(_values.next()).toEqual(jasmine.objectContaining({
        value: void 0,
        done: true
      }));
    });
  });
});
