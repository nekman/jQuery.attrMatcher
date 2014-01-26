#jQuery.attrMatcher

Searches for matching ```attributes``` and triggers a ```match``` event when it has finds 
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
     attr: 'data-highlight'
  });
```

Try the example here: http://jsfiddle.net/4M6nh/