#jQuery.attrMatcher

[![Build Status](https://travis-ci.org/nekman/jQuery.attrMatcher.png?branch=master)](https://travis-ci.org/nekman/jQuery.attrMatcher)

[![Coverage Status](https://coveralls.io/repos/nekman/jQuery.attrMatcher/badge.png?branch=master)](https://coveralls.io/r/nekman/jQuery.attrMatcher?branch=master)

Searches for matching ```attributes``` and triggers a ```match``` event when it finds 
elements with matching attributes.

###Example

Adds the ```highlight```class on ```mouseover```-events to ```tr``` with 
the same values in their ```data-highlight```attribute.

```html
<table id="table">
  <tr data-highlight="2014-01-25 14:00">
    <td>2014-01-25 14:00</td>
    <td>Item1</td>
    <td>Data1</td>
  </tr>
  <tr data-highlight="2014-01-25 14:00">
    <td>2014-01-25 14:00</td>
    <td>Item2</td>
    <td>Data2</td>
  </tr>
  <tr data-highlight="2014-01-25 14:10">
    <td>2014-01-25 14:10</td>
    <td>Item3</td>
    <td>Data1</td>
  </tr>
  <tr data-highlight="2014-01-25 14:10">
    <td>2014-01-25 14:10</td>
    <td>Item4</td>
    <td>Data2</td>
  </tr>
</table>
```

```javascript
$('#table')
  .on('match', function(e, $matches) {
    // $matches = jQuery elements with same value in the 'data-highlight' attribute.
    $matches.addClass('highlight');
  })
  .on('unmatch', function(e, $matches) {
    // $matches = jQuery elements with same value in the 'data-highlight' attribute.
    $matches.removeClass('highlight');
  })
  .find('tr')
  .attrMatcher({
     attr: 'data-highlight' //Custom attribute
  });
```

Try the example here: http://jsfiddle.net/APLvK/

###Configuration

```
  on
```
(string | default 'mouseenter') event that tells the plugin to search for matching attributes.

```
  off
```
(string | default 'mouseleave') event that tells the plugin to search for macthing attributes.

```
  attr
```
(string | default 'data-matcher') attribute to search for. <strong>NOTE:</strong> don't specify ```[]``` to the attribute.

```
  onmatch
```
(string | default 'match') custom event that gets triggered from the ```on``` event. Triggers when elements with matching attributes is found.
```
  onunmatch
```
(string | default 'unmatch') custom event that gets triggered from the ```off``` event. Triggers when elements with matching attributes is found.