/// <reference path="./map/Map.ts"/>
/// <reference path="../typings/window/window.d.ts"/>

/**
 * Contains the weakmap namespace
 *
 * @author brendenpalmer
 * @license MIT
 * @namespace weakmap
 */

namespace es6map {
  if (!window.Map) {
    window.Map = Map;
  }
}
