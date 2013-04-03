/* 
 * Copyright 2013 The Toolkitchen Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style
 * license that can be found in the LICENSE file.
 */
<script>

var assert = chai.assert;

function expectStructure(nodeOrWrapper, nonNullFields) {
  assert(nodeOrWrapper);
  assert.strictEqual(nodeOrWrapper.parentNode, nonNullFields.parentNode || null);
  assert.strictEqual(nodeOrWrapper.previousSibling,
      nonNullFields.previousSibling || null);
  assert.strictEqual(nodeOrWrapper.nextSibling, nonNullFields.nextSibling || null);
  assert.strictEqual(nodeOrWrapper.firstChild, nonNullFields.firstChild || null);
  assert.strictEqual(nodeOrWrapper.lastChild, nonNullFields.lastChild || null);
}

function unwrapAndExpectStructure(node, nonNullFields) {
  for (var p in nonNullFields) {
    nonNullFields[p] = ShadowDOMPolyfill.unwrap(nonNullFields[p]);
  }
  expectStructure(ShadowDOMPolyfill.unwrap(node), nonNullFields);
}

function assertArrayEqual(a, b, msg) {
  assert.equal(a.length, b.length, msg);
  for (var i = 0; i < a.length; i++) {
    assert.equal(a[i], b[i], msg);
  }
}

</script>
<script>mocha.setup({
  ui: 'tdd',
  globals: ['console', 'getInterface']
})</script>
<script src="test.js"></script>
<script src="paralleltrees.js"></script>
<script src="rerender.js"></script>
<script src="reprojection.js"></script>
<script src="custom-element.js"></script>
<script src="HTMLShadowElement.js"></script>
<script src="HTMLContentElement.js"></script>
<script src="HTMLTemplateElement.js"></script>
<script src="Document.js"></script>
<script src="Window.js"></script>
<script src="Element.js"></script>
<script src="ParentNodeInterface.js"></script>
<script src="wrappers.js"></script>
<script src="events.js"></script>
<div id="mocha"></div>
<script>
mocha.run();
</script>
