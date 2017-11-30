import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('form-registro-evento', 'Integration | Component | form registro evento', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{form-registro-evento}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#form-registro-evento}}
      template block text
    {{/form-registro-evento}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
