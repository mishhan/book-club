import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | speaker-listing', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders attributes', async function(assert) {
    const speaker = getSpeakers().speaker;
    this.set('speaker', speaker);
    await render(hbs`{{speaker-listing speaker=this.speaker}}`);

    assert.equal(this.element.querySelector('img').src, speaker.avatar, 'image is set');
    assert.equal(this.element.querySelector(`.fullname`).textContent, speaker.fullName, 'fullName is set');
    assert.equal(this.element.querySelector(`.position`).textContent, speaker.position, 'position is set');
  });

  test(`it renders default image if there's no image`, async function(assert) {
    const speaker = getSpeakers().speakerWithOutImage;
    const defalutLink = "assets/avatar.jpg";
    this.set('speaker', speaker);
    await render(hbs`{{speaker-listing speaker=this.speaker}}`);

    assert.ok(this.element.querySelector('img').src.endsWith(defalutLink), 'if no image is provided default link is set')
  });

  function getSpeakers() {
    const speaker = {
      id: 1,
      fullName: 'Bruce Wayne',
      position: 'Batman',
      avatar: 'https://dccomicsextendeduniverse.fandom.com/wiki/Bruce_Wayne?file=Brucey1.png'
    };

    const speakerWithOutImage = {
      id: 2,
      fullName: 'Aang',
      position: 'Avatar'
    };

    return { speaker: speaker, speakerWithOutImage: speakerWithOutImage };
  }
});
