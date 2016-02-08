/**
 * Contains the es6map namespace
 *
 * @author brendenpalmer
 * @license MIT
 * @namespace weakmap
 */

namespace es6map {
  /**
   * A class used to expose constants. Intended to
   * be consumed by whomever requires these.
   *
   * @class
   */
  export class MapConstants {
    /**
     * Used to get and set values for a particular
     * object
     *
     * @name MAP_KEY_IDENTIFIER
     * @returns {string} The unique identifier
     */
    public static get MAP_KEY_IDENTIFIER(): string {
      return 'MAP_KEY_IDENTIFIER_OZAbzyeCu3_spF91dwX14';
    }

    /**
     * The message that will be thrown if an invalid
     * key is used as part of the set method
     *
     * @name MAP_SET_THROWABLE_MESSAGE
     * @returns {string} The unique identifier
     */
    public static get MAP_SET_THROWABLE_MESSAGE(): string {
      return 'Invalid value used as map key';
    }
  }
}
