/// <reference path="./IMapIterator.ts"/>
/// <reference path="../map/Map.ts"/>

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
   * MapIterator object.
   *
   * @class
   */
  export class MapIterator implements IMapIterator {
    private index: number = 0;
    private map: Map = null
    private type: string;
    private done: boolean = false;

    /**
     * The constructor for MapIterator
     *
     * @param  {Map}    map  The map
     * @param  {string} type The type of iterator
     */
    constructor(map: Map, type: string) {
      this.map = map;
      this.type = type;
    }

    /**
     * Gets the next value
     *
     * @name next
     * @return {*} The next value
     */
    public next(): any {
      let _value: any;
      if (this.map.keyArray.length > this.index) {
        if (this.type === 'entries') {
          _value = [this.map.keyArray[this.index], this.map.get(this.map.keyArray[this.index])];
        } else if (this.type === 'keys') {
          _value = this.map.keyArray[this.index];
        } else if (this.type === 'values') {
          _value = this.map.get(this.map.keyArray[this.index]);
        }

        this.index++;
      } else {
        this.done = true;
      }

      return {
        value: _value,
        done: this.done
      };
    }
  }
}
