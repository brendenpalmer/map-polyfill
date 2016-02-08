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
   * the Map class implements all required
   * methods
   *
   * @interface
   */
  export interface IMap {
    get(key: Object): any;
    has(key: Object): boolean;
    delete(key: Object): boolean;
    set(key: Object, value: any): void;
  }
}
