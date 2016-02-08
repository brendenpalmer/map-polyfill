/// <reference path="../constants/MapConstants.ts"/>
/// <reference path="../sequencer/MapSequencer.ts"/>

/**
 * Contains the es6map namespace
 *
 * @author brendenpalmer
 * @license MIT
 * @namespace weakmap
 */

namespace es6map {
  /**
   * A utility class intended to be used in conjunction
   * with the Map class
   *
   * @class
   */
  export class MapUtils {
    /**
     * Defines a unique property that's un-enumerable
     * if the unique property does not already exist.
     * Otherwise, it doesn't do anything and simply
     * returns the value of the property that's already
     * set on the object.
     *
     * @name defineProperty
     * @param {*} object The object
     * @returns {number} The value set
     */
    public static defineProperty(object: any): number {
      let _value: number;

      // throw a type error if the object is not valid
      if (MapUtils.isValidObject(object) === false) {
        throw new TypeError(MapConstants.MAP_SET_THROWABLE_MESSAGE);
      }

      if (typeof object[MapConstants.MAP_KEY_IDENTIFIER] === 'undefined') {
        _value = MapSequencer.getInstance().next();

        try {
          Object.defineProperty(object, MapConstants.MAP_KEY_IDENTIFIER, {
            enumerable: false,
            configurable: false,
            get: () => {
              return _value;
            }
          });
        } catch (e) {
          // throw a type error if Object.defineProperty threw an error
          throw new TypeError(MapConstants.MAP_SET_THROWABLE_MESSAGE);
        }
      } else {
        _value = object[MapConstants.MAP_KEY_IDENTIFIER];
      }

      return _value;
    }

    /**
     * Gets the value tied to an object
     *
     * @name getProperty
     * @param {*} object The object
     * @returns {number} The unique identifier tied to
     * an object
     */
    public static getProperty(object: any): number {
      if (MapUtils.isValidObject(object) === true) {
        return object[MapConstants.MAP_KEY_IDENTIFIER];
      } else {
        return void 0;
      }
    }

    /**
     * Whether or not an object is valid
     *
     * @name isValidObject
     * @param {*} object The object to check
     * @returns {boolean} Whether or not the object is value
     */
    private static isValidObject(object: any): boolean {
      return object === Object(object);
    }
  }
}
