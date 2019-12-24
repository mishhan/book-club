import Component from '@ember/component';

export default Component.extend({
  tagName: 'div',
  classNames: ['progress-container'],

  didInsertElement() {
    this._super(...arguments);

    // eslint-disable-next-line no-undef
    var bar = new ProgressBar.Line(this.element, {
      strokeWidth: 4,
      easing: 'easeInOut',
      duration: 1400,
      color: '#FFEA82',
      trailColor: '#eee',
      trailWidth: 1,
      svgStyle: {
        width: '100%', 
        height: '100%'
      },
      text: {
        style: {
          color: '#999',
          position: 'absolute',
          right: '0',
          top: '12px',
          padding: 0,
          margin: 0,
          transform: null
        },
        autoStyleContainer: false
      },
      from: { color: '#FF0000' },
      to: { color: '#00FF00' },
      step: (state, bar) => {
        bar.path.setAttribute('stroke', state.color);
        bar.setText(Math.round(bar.value() * 100) + ' %');
      }
    });
    
    bar.animate(this.progress); 
  }
});
