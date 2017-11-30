import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('profile-pic-picker', 'Integration | Component | profile pic picker', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{profile-pic-picker}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#profile-pic-picker}}
      template block text
    {{/profile-pic-picker}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
