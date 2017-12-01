---
title: Reference
---

<link rel="stylesheet" type="text/css" href="{{ '/assets/css/imperial-officer.css?v=' | append: site.github.build_revision | relative_url }}" />

## Line Officer
<figure>
	{% include officer/tunic.html class="olive" %}
	<figcaption>Olive Tunic</figcaption>
</figure>
<figure>
	{% include officer/trousers.html class="olive" %}
	<figcaption>Olive Jodhpur Trousers</figcaption>
</figure>

### Rank Bars - Rogue One

<table class="Officer__table Officer__table--rank">
	<tr>
		<th>Science Officer</th>
		<td>{% include officer/rank-bar.html rank="YYYYR" %}</td>
	</tr>
	<tr>
		<th>Junior Lieutenant</th>
		<td>{% include officer/rank-bar.html rank="BB" %}</td>
	</tr>
	<tr>
		<th>Lieutenant</th>
		<td>{% include officer/rank-bar.html rank="RRB" %}</td>
	</tr>
</table>
<table class="Officer__table Officer__table--rank">
	<tr>
		<th>Captain</th>
		<td>{% include officer/rank-bar.html rank="BBBRR" %}</td>
	</tr>
	<tr>
		<th>General</th>
		<td>
			{% include officer/rank-bar.html rank="RRRRRR" %}
			{% include officer/rank-bar.html rank="YYYYYY" %}
		</td>
	</tr>
	<tr>
		<th>Admiral</th>
		<td>{% include officer/rank-bar.html rank="BBBBBB" %}</td>
	</tr>
</table>

### Rank Bars - A New Hope
<table class="Officer__table Officer__table--rank">
	<tr>
		<th>Chief</th>
		<td>{% include officer/rank-bar.html rank="YYYYRR" %}</td>
	</tr>
	<tr>
		<th>Lieutenant</th>
		<td>{% include officer/rank-bar.html rank="BBBBBB" %}</td>
	</tr>
	<tr>
		<th>Captain</th>
		<td>{% include officer/rank-bar.html rank="YYYYYY" %}</td>
	</tr>
</table>
<table class="Officer__table Officer__table--rank">
	<tr>
		<th>General</th>
		<td>{% include officer/rank-bar.html rank="RRRRRR" %}</td>
	</tr>
	<tr>
		<th>Admiral</th>
		<td>{% include officer/rank-bar.html rank="BBRRRR" %}</td>
	</tr>
	<tr>
		<th>Grand Moff</th>
		<td>{% include officer/rank-bar.html rank="BBBBBB-RRRYYY" %}</td>
	</tr>
</table>

### Rank Bars - Empire Strikes Back
<table class="Officer__table Officer__table--rank">
	<tr>
		<th>Lieutenant</th>
		<td>{% include officer/rank-bar.html rank="RR-BB" %}</td>
	</tr>
	<tr>
		<th>Captain</th>
		<td>{% include officer/rank-bar.html rank="RRR-BBB" class="wide" %}</td>
	</tr>
</table>
<table class="Officer__table Officer__table--rank">
	<tr>
		<th>General</th>
		<td>{% include officer/rank-bar.html rank="RRRR-BBBB" class="wide" %}</td>
	</tr>
	<tr>
		<th>Admiral</th>
		<td>{% include officer/rank-bar.html rank="RRRRRR-BBBBBB" %}</td>
	</tr>
</table>

## Staff Officer
<figure>
	{% include officer/tunic.html class="black" %}
	<figcaption>Black Tunic</figcaption>
</figure>
<figure>
	{% include officer/trousers.html class="black" %}
	<figcaption>Black Jodhpur Trousers</figcaption>
</figure>

### Rank Bars - Rogue One
<table class="Officer__table Officer__table--rank">
	<tr>
		<th>Lieutenant</th>
		<td>{% include officer/rank-bar.html rank="BBB" %}</td>
	</tr>
</table>

### Rank Bars - A New Hope
<table class="Officer__table Officer__table--rank">
	<tr>
		<th>Ensign</th>
		<td>{% include officer/rank-bar.html rank="RR" %}</td>
	</tr>
	<tr>
		<th>2nd Lieutenant</th>
		<td>{% include officer/rank-bar.html rank="RRR" class="wide" %}</td>
	</tr>
</table>
<table class="Officer__table Officer__table--rank">
	<tr>
		<th>Lieutenant</th>
		<td>{% include officer/rank-bar.html rank="BBBB" %}</td>
	</tr>
	<tr>
		<th>Commander</th>
		<td>{% include officer/rank-bar.html rank="BBBBYY" %}</td>
	</tr>
</table>

## Warrant Officer
<figure>
	{% include officer/tunic.html class="black noPockets" %}
	<figcaption>Black Tunic<small>(no cylinder pockets)</small></figcaption>
</figure>
<figure>
	{% include officer/tunic.html class="black straightYoke noPockets" %}
	<figcaption>Black Tunic (ANH)<small>(straight yoke)</small></figcaption>
</figure>
<figure>
	{% include officer/trousers.html class="black straight jackBoots" %}
	<figcaption>Black Straight Trousers<small>(with jackboots)</small></figcaption>
</figure>

### Rank Bars
Warrant Officers have no rank bars.

## ISB Officer
<figure>
	{% include officer/tunic.html class="white" %}
	<figcaption>White Tunic</figcaption>
</figure>
<figure>
	{% include officer/tunic.html class="white straightYoke noPockets" %}
	<figcaption>White Tunic (ANH)<small>(straight yoke,<wbr/> no cylinder pockets)</small></figcaption>
</figure>
<figure>
	{% include officer/trousers.html class="black" %}
	<figcaption>Black Jodhpur Trousers</figcaption>
</figure>

### Rank Bars - Rogue One
<table class="Officer__table Officer__table--rank">
	<tr>
		<th>Inspector General</th>
		<td>{% include officer/rank-bar.html rank="RRRB" %}</td>
	</tr>
</table>

### Rank Bars - A New Hope
<table class="Officer__table Officer__table--rank">
	<tr>
		<th>Major</th>
		<td>{% include officer/rank-bar.html rank="BBBRRR" %}</td>
	</tr>
</table>
<table class="Officer__table Officer__table--rank">
	<tr>
		<th>Colonel</th>
		<td>{% include officer/rank-bar.html rank="RRRBBB" %}</td>
	</tr>
</table>

## Grand Admiral Thrawn (Rebels)
<figure>
	{% include officer/tunic.html class="white noCenterDart bellSleeves collarArrows epaulets" %}
	<figcaption>White Tunic<small>(bell curves on sleeves,<wbr/> arrows on collar,<wbr/> epaulets,<wbr/> no center dart)</small></figcaption>
</figure>
<figure>
	{% include officer/trousers.html class="white straight" %}
	<figcaption>White Straight Trousers</figcaption>
</figure>

### Rank Bars
<table class="Officer__table Officer__table--rank">
	<tr>
		<th>Grand Admiral</th>
		<td>{% include officer/rank-bar.html rank="BBBYYY-BBBRRR" %}</td>
	</tr>
</table>

## Director Krennic
<figure>
	{% include officer/tunic.html class="white" %}
	<figcaption>White Tunic</figcaption>
</figure>
<figure>
	{% include officer/trousers.html class="black" %}
	<figcaption>Black Jodhpur Trousers</figcaption>
</figure>

### Rank Bars
<table class="Officer__table Officer__table--rank">
	<tr>
		<th>Admiral (ESB)/<wbr>Director</th>
		<td>{% include officer/rank-bar.html rank="RRRRRR-BBBBBB" %}</td>
	</tr>
</table>

{% include officer/abbreviations.md %}

{% include comments.html %}
