/**
 * Contains the es6map namespace
 *
 * @author brendenpalmer
 * @license MIT
 * @namespace weakmap
 */

namespace es6map {
  /**
   * An interface intended to be used such that
   * the MapIterator class implements all required
   * methods
   *
   * @interface
   */
  export interface IMapIterator {
    next(): any;
  }
}
