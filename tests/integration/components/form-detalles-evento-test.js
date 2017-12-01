import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('form-detalles-evento', 'Integration | Component | form detalles evento', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{form-detalles-evento}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#form-detalles-evento}}
      template block text
    {{/form-detalles-evento}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
