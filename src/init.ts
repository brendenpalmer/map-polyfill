/// <reference path="./weakmap/WeakMap.ts"/>
/// <reference path="../typings/window/window.d.ts"/>

/**
 * Contains the weakmap namespace
 *
 * @author brendenpalmer
 * @license MIT
 * @namespace weakmap
 */

namespace weakmap {
  if (!window.WeakMap) {
    window.WeakMap = WeakMap;
  }
}
