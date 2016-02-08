/**
 * Tests for WeakMapConstants.ts
 *
 * @author brendenpalmer
 * @license MIT
 */

describe('Namespace: weakmap', function() {
  describe('Class: WeakMapConstants', function() {
    var _WeakMapConstants = weakmap.WeakMapConstants;
    var _instance = new _WeakMapConstants();

    it('should be defined', function() {
      expect(_WeakMapConstants).toBeDefined();
    });

    it('should have defined the instance', function() {
      expect(_instance).toBeDefined();
    });

    it('should return the identifier', function() {
      expect(_WeakMapConstants.WEAKMAP_KEY_IDENTIFIER).toEqual('WEAKMAP_KEY_IDENTIFIER_spF91dwX14_OZAbzyeCu3');
    });

    it('should do nothing if trying to overwrite the identifier', function() {
      _WeakMapConstants.WEAKMAP_KEY_IDENTIFIER = 'Another_identifier';
      expect(_WeakMapConstants.WEAKMAP_KEY_IDENTIFIER).toEqual('WEAKMAP_KEY_IDENTIFIER_spF91dwX14_OZAbzyeCu3');
    });

    it('should return the throwable message', function() {
      expect(_WeakMapConstants.WEAKMAP_SET_THROWABLE_MESSAGE).toEqual('Invalid value used as weak map key');
    });

    it('should do nothing if trying to overwrite the throwable message', function() {
      _WeakMapConstants.WEAKMAP_SET_THROWABLE_MESSAGE = 'Throwable Message';
      expect(_WeakMapConstants.WEAKMAP_SET_THROWABLE_MESSAGE).toEqual('Invalid value used as weak map key');
    });
  });
});
