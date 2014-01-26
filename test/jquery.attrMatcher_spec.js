'use strict';
if (typeof define !== 'function') {
  var define = require('amdefine')(module);
}
require('./helper');

define(function(require, exports, module) {
  var $       = require('../src/jquery.attrMatcher'),
      should  = require('should'),
      assert  = require('assert'),
      sinon   = require('sinon');

  describe('jquery.attrMatcher - setup', function() {
    it('should be defined on jQuery.fn', function() {
      $.fn.should.have.property('attrMatcher');
      $.fn.attrMatcher.should.be.an.Function;
    });
  });

  describe('jquery.attrMatcher - finds', function() {
    it('returns element if length is "falsy"', function() {
      var $node = $('#non-existing');

      $node.attrMatcher().length.should.equal(0);
    });

    it('triggers "match" event', function() {
      var $parent = $('table tbody'),
          $trs    = $parent.find('tr'),
          spy     = sinon.spy($.fn, 'trigger');

      $trs.attrMatcher({
        parent: $parent,
        attr: 'data-highlight'
      });
       
      $trs.first().trigger('mouseenter');

      assert($.fn.trigger.calledWithMatch('match', Object));
    });

    it('triggers "match" event that adds highlight class to matched elements', function() {
      var $parent = $('table tbody'),
          $trs    = $parent.find('tr');

      $parent.on('match', function(e, $matches) {
         $matches.addClass('highlight');
       });

      $trs.attrMatcher({
         attr: 'data-highlight'
      });
       
      $trs.first().trigger('mouseenter');

      $parent.find('.highlight').length.should.equal(3);
    });
  });
});