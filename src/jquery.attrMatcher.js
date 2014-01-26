/**
 * http://plnkr.co/edit/Mou8b94hzmuIVjd7b63w?p=preview
 */
(function(global, factory) {
  // CommonJS
  if (typeof module === 'object') {
    module.exports = factory(require('jquery'));
  } else if (typeof global.define === 'function') {
    // AMD
    define(['jquery'], factory);
  } else {
    // jQuery loaded by <script> tag
    factory(global.jQuery);
  }
}(this, function($) {
  'use strict';

  var findSelector = '[{{attr}}="{{search}}"]',
 
  defaults = {
    on: 'mouseenter',
    off: 'mouseleave',
    attr: 'data-matcher',
    onmatch: 'match',
    onunmatch: 'unmatch'
  };
  
  function Matcher(settings) {
    this.settings = settings;
    this.$parent = settings.$parent;
    this.$nodes = settings.$nodes;
    this.findSelector = findSelector.replace(/{{attr}}/, settings.attr);
    
    this.$nodes
          .on(settings.on, this.handle(this, settings.onmatch))
          .on(settings.off, this.handle(this, settings.onleave));
  }
  
  Matcher.prototype.handle = function(self, eventName) {
    return function() {
          var search = $(this).attr(self.settings.attr),
          $matches = self.$parent.find(self.findSelector.replace(/{{search}}/, search));
          
      if ($matches.length) {
        self.$parent.trigger(eventName, [$matches]);
      }
    };
  };
  
  $.fn.attrMatcher = function(options) {
    if (!this.length) {
      return this;
    }
    
    var settings = $.extend(defaults, options || {});
    $.extend(settings, {
      $parent: settings.parent instanceof $ ? settings.parent : this.parent(),
      $nodes: this
    });
    
    new Matcher(settings);
    
    return this;
  };

  // Return jQuery
  return $;
}));