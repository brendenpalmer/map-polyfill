/**
 * Tests for MapConstants.ts
 *
 * @author brendenpalmer
 * @license MIT
 */

describe('Namespace: es6map', function() {
  describe('Class: MapConstants', function() {
    var _MapConstants = es6map.MapConstants;
    var _instance = new _MapConstants();

    it('should be defined', function() {
      expect(_MapConstants).toBeDefined();
    });

    it('should have defined the instance', function() {
      expect(_instance).toBeDefined();
    });

    it('should return the identifier', function() {
      expect(_MapConstants.MAP_KEY_IDENTIFIER).toEqual('MAP_KEY_IDENTIFIER_OZAbzyeCu3_spF91dwX14');
    });

    it('should do nothing if trying to overwrite the identifier', function() {
      _MapConstants.MAP_KEY_IDENTIFIER = 'Another_identifier';
      expect(_MapConstants.MAP_KEY_IDENTIFIER).toEqual('MAP_KEY_IDENTIFIER_OZAbzyeCu3_spF91dwX14');
    });

    it('should return the throwable message', function() {
      expect(_MapConstants.MAP_SET_THROWABLE_MESSAGE).toEqual('Invalid value used as map key');
    });

    it('should do nothing if trying to overwrite the throwable message', function() {
      _MapConstants.MAP_SET_THROWABLE_MESSAGE = 'Throwable Message';
      expect(_MapConstants.MAP_SET_THROWABLE_MESSAGE).toEqual('Invalid value used as map key');
    });
  });
});
