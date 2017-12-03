import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('evento-detalles', 'Integration | Component | evento detalles', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{evento-detalles}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#evento-detalles}}
      template block text
    {{/evento-detalles}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
