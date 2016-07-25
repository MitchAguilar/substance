'use strict';

var Strong = require('./Strong');
var AnnotationCommand = require('../../ui/AnnotationCommand');
var AnnotationComponent = require('../../ui/AnnotationComponent');
var AnnotationTool = require('../../ui/AnnotationTool');
var StrongHTMLConverter = require('./StrongHTMLConverter');
var StrongXMLConverter = require('./StrongXMLConverter');

module.exports = {
  name: 'strong',
  configure: function(config) {
    config.addNode(Strong);
    config.addComponent('strong', AnnotationComponent);
    config.addCommand('strong', AnnotationCommand, { nodeType: 'strong' });
    config.addTool('strong', AnnotationTool);
    config.addIcon('strong', { 'fontawesome': 'fa-bold' });
    config.addConverter('html', StrongHTMLConverter);
    config.addConverter('xml', StrongXMLConverter);
    config.addStyle(__dirname, '_strong.scss');
    config.addLabel('strong', {
      en: 'Strong emphasis',
      de: 'Starke Betonung'
    });
  }
};
