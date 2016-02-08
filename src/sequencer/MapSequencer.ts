/**
 * Contains the es6map namespace
 *
 * @author brendenpalmer
 * @license MIT
 * @namespace weakmap
 */

namespace es6map {
  /**
   * Class used to generate a unique sequence of numbers
   * such that they will never overlap. Used in conjunction
   * with MapUtils to be used as a unique value / identifier
   *
   * @class
   */
  export class MapSequencer {
    private identifier: number;
    private static instance: MapSequencer = null;

    /**
     * The constructor for a MapSequencer
     *
     * @constructor
     */
    constructor() {
      if (MapSequencer.instance !== null) {
        throw 'Get the instance of the MapSequencer using the getInstance method.';
      }

      this.identifier = 0;
    }

    /**
     * Gets an instance of MapSequencer
     *
     * @name getInstance
     * @returns {MapSequencer} The instance
     */
    public static getInstance(): MapSequencer {
      if (MapSequencer.instance === null) {
        MapSequencer.instance = new MapSequencer();
      }

      return MapSequencer.instance;
    }

    /**
     * Gets the next number in the sequence
     *
     * @name next
     * @returns {number} The next number in the sequence
     */
    public next(): number {
      return this.identifier++;
    }
  }
}
