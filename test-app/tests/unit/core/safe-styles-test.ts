import { module, test } from 'qunit';
import safeStyles from '@frontile/core/utils/safe-styles';

module('Unit | @frontile/core/utils/safeStyles', function () {
  test('it works', function (assert) {
    const result = safeStyles({ height: '10px', overflow: 'hidden' });
    assert.equal(result.toString(), 'height:10px;overflow:hidden');
  });
});
