/// <reference path="./IMap.ts"/>
/// <reference path="../utils/MapUtils.ts"/>
/// <reference path="../iterator/MapIterator.ts"/>

/**
 * Contains the es6map namespace
 *
 * @author brendenpalmer
 * @license MIT
 * @namespace weakmap
 */

namespace es6map {
  /**
   * A class used as a polyfill for the native
   * WeakMap object. Intended to be used as a
   * collection of key / value pairs
   *
   * @class
   */
  export class Map implements IMap {
    private map: Object = {};
    public keyArray: any[] = [];

    /**
     * The constructor for a Map
     *
     * @param  {Array<Array<*>>} iterable An array of
     * arrays. The array's elements are key value pairs.
     * @constructor
     */
    constructor(iterable: Array<Array<any>> = []) {
      for (let keyValue of iterable) {
        if (keyValue && keyValue.length >= 2) {
          this.set(keyValue[0], keyValue[1]);
        }
      }
    }

    /**
     * Gets the value tied to a particular
     * object used as the key for the
     * current Map instance
     *
     * @name get
     * @param {*} key The key
     * @returns {*} The value
     */
    public get(key: any): any {
      if (this.has(key) === true) {
        let _value: string = MapUtils.getProperty(key);

        if (_value === void 0) {
          _value = String(key);
        }

        return this.map[_value];
      } else {
        return void 0;
      }
    }

    /**
     * Whether or not the current Map has
     * a particular key
     *
     * @name has
     * @param {*} The key
     * @returns {boolean} Whether or not the WeakMap
     * has a particular key
     */
    public has(key: any): boolean {
      let _value: string = MapUtils.getProperty(key);

      if (_value === void 0) {
        _value = String(key);
      }

      return _value !== void 0 && typeof this.map[_value] !== 'undefined';
    }

    /**
     * Deletes a key from the current Map
     *
     * @name delete
     * @param {*} key The key to delete
     * @returns {boolean} Whether or not the deletion
     * was successful
     */
    public delete(key: any): boolean {
      if (this.has(key) === true) {
        let _value: string = MapUtils.getProperty(key);

        if (_value === void 0) {
          _value = String(key);
        }

        this.keyArray.splice(this.keyArray.indexOf(key), 1);
        delete this.map[_value];
        return true;
      } else {
        return false;
      }
    }

    /**
     * Sets a value for a particular key
     *
     * @name set
     * @param {*} key The key
     * @param {*} The value
     */
    public set(key: any, value: any): void {
      this.delete(key);
      let _key: string;

      try {
        _key = String(MapUtils.defineProperty(key));
      } catch (e) {
        _key = String(key);
      }

      this.keyArray.push(key);
      this.map[_key] = value;
    }

    /**
     * Returns a MapIterator for entries
     *
     * @name entries
     * @return {MapIterator} The MapIterator
     */
    public entries(): MapIterator {
      return new MapIterator(this, 'entries');
    }

    /**
     * Returns a MapIterator for keys
     *
     * @name keys
     * @return {MapIterator} The MapIterator
     */
    public keys(): MapIterator {
      return new MapIterator(this, 'keys');
    }

    /**
     * Returns a MapIterator for values
     *
     * @name values
     * @return {MapIterator} The MapIterator
     */
    public values(): MapIterator {
      return new MapIterator(this, 'values');
    }

    /**
     * Executes the callback for each key tied to the map
     *
     * @name forEach
     * @param {Function} callback The callback function
     * @param {any}      thisArg  The context in which to
     * call the callback function
     */
    public forEach(callback: Function, thisArg?: any): void {
      for (let key of this.keyArray) {
        if (thisArg) {
          callback.call(thisArg, this.get(key), key, this);
        } else {
          callback(this.get(key), key, this);
        }
      }
    }

    /**
     * Clears the Map
     *
     * @name clear
     */
    public clear(): void {
      this.map = {};
      this.keyArray = [];
    }
  }
}
