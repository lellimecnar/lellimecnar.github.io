---
title: Imperial Officer
---

<link rel="stylesheet" type="text/css" href="{{ '/assets/css/imperial-officer.css?v=' | append: site.github.build_revision | relative_url }}" />

## Introduction

After making my [Old Luke costume](/costuming/luke-tfa.html), I decided that I wanted to sew some more Star Wars costumes, so I set out to find another project. I settled on the Imperial Officer uniform because it involved a lot of sewing, and not a lot of non-fabric parts.

I already had the [McCall's M4745 pattern](https://mccallpattern.mccall.com/m4745) that I used to make the under tunic for my Luke costume, so I decided to use that as a starting point.

I decided that since there are so many different types of Imperial Officer uniforms, and they're mostly identical, I'm going to put together some patterns that I can re-use and make as many of the different varieties as I want.

## Officer Variations
The base uniform has the double sided yoke, with the clasp on the wearer's right shoulder, in either black (Staff Officer), white (ISB, Krennic, Thrawn, etc.), or "olive drab" or "fieldgrey" (Line Officer, Tarkin, etc.). The pants match the tunic, except for the white ISB uniforms, in which case, the pants are black. With few exceptions, the pants are all "jodhpur" style.

### Line Officer
<figure>
	{% include officer/tunic.html class="olive" %}
	<figcaption>Olive Tunic</figcaption>
</figure>
<figure>
	{% include officer/trousers.html class="olive" %}
	<figcaption>Olive Jodhpur Trousers</figcaption>
</figure>

#### Rank Bars
<figure class="rankBars">
	<figcaption><strong>Junior Lieutenant</strong></figcaption>
	{% include officer/rank-bar.html rank="RR-BB" %}
	{% include officer/rank-bar.html rank="BB" %}
</figure>
<figure class="rankBars">
	<figcaption><strong>Lieutenant</strong></figcaption>
	{% include officer/rank-bar.html rank="RR-BB" %}
	{% include officer/rank-bar.html rank="BBB" %}
	{% include officer/rank-bar.html rank="BBBB" %}
	{% include officer/rank-bar.html rank="BBBBBB" %}
	{% include officer/rank-bar.html rank="RRB" %}
</figure>
<figure class="rankBars">
	<figcaption><strong>Captain/<wbr/>Commandant</strong></figcaption>
	{% include officer/rank-bar.html rank="RRR-BBB" %}
	{% include officer/rank-bar.html rank="YYYYYY" %}
	{% include officer/rank-bar.html rank="BBBRR" %}
</figure>
<figure class="rankBars">
	<figcaption><strong>Commander</strong></figcaption>
	{% include officer/rank-bar.html rank="RRR-BBB" %}
	{% include officer/rank-bar.html rank="RR" %}
	{% include officer/rank-bar.html rank="BBBBRR" %}
</figure>
<figure class="rankBars">
	<figcaption><strong>Major/<wbr/>Colonel/<wbr/>Commodore</strong></figcaption>
	{% include officer/rank-bar.html rank="RRRR-BBBB" %}
</figure>
<figure class="rankBars">
	<figcaption><strong>General</strong></figcaption>
	{% include officer/rank-bar.html rank="RRRR-BBBB" spacing="wide" %}
	{% include officer/rank-bar.html rank="BBBBBB-RRRRRR" %}
	{% include officer/rank-bar.html rank="YYYYRR" %}
	{% include officer/rank-bar.html rank="RRRRRR" %}
	{% include officer/rank-bar.html rank="YYYYYY" %}
</figure>
<figure class="rankBars">
	<figcaption><strong>Grand General</strong></figcaption>
	{% include officer/rank-bar.html rank="BBBYYY-BBBRRR" %}
</figure>
<figure class="rankBars">
	<figcaption><strong>Vice Admiral</strong></figcaption>
	{% include officer/rank-bar.html rank="RRRRR-BBBBB" %}
</figure>
<figure class="rankBars">
	<figcaption><strong>Admiral</strong></figcaption>
	{% include officer/rank-bar.html rank="RRRRRR-BBBBBB" %}
	{% include officer/rank-bar.html rank="RRRRYY" %}
	{% include officer/rank-bar.html rank="BBRRRR" %}
	{% include officer/rank-bar.html rank="BBBBBB" %}
</figure>
<figure class="rankBars">
	<figcaption><strong>Grand Moff/<wbr/>Governor</strong></figcaption>
	{% include officer/rank-bar.html rank="BBBBBB-RRRYYY" %}
</figure>

### Staff Officer
<figure>
	{% include officer/tunic.html class="black" %}
	<figcaption>Black Tunic</figcaption>
</figure>
<figure>
	{% include officer/trousers.html class="black" %}
	<figcaption>Black Jodhpur Trousers</figcaption>
</figure>

#### Rank Bars
<figure>
	{% include officer/rank-bar.html rank="BBBB" %}
	{% include officer/rank-bar.html rank="BBBBYY" %}
	{% include officer/rank-bar.html rank="RR" %}
	{% include officer/rank-bar.html rank="RRR" %}
</figure>

### Warrant Officer
<figure>
	{% include officer/tunic.html class="black noPockets" %}
	<figcaption>Black Tunic<small>(no cylinder pockets)</small></figcaption>
</figure>
<figure>
	{% include officer/tunic.html class="black straightYoke noPockets" %}
	<figcaption>ANH Variation<small>(straight yoke)</small></figcaption>
</figure>
<figure>
	{% include officer/trousers.html class="black straight jackBoots" %}
	<figcaption>Black Straight Trousers<small>(with jack boots)</small></figcaption>
</figure>

**NOTE:** Warrant Officers have no rank badges.

### ISB Officer
<figure>
	{% include officer/tunic.html class="white" %}
	<figcaption>White Tunic</figcaption>
</figure>
<figure>
	{% include officer/tunic.html class="white straightYoke noPockets" %}
	<figcaption>ANH Variation<small>(straight yoke, no cylinder pockets)</small></figcaption>
</figure>
<figure>
	{% include officer/trousers.html class="black" %}
	<figcaption>Black Jodhpur Trousers</figcaption>
</figure>

#### Rank Bars
<figure class="rankBars">
	<figcaption>Rogue One Variation</figcaption>
	{% include officer/rank-bar.html rank="RRRB" %}
</figure>
<figure class="rankBars">
	<figcaption>ANH Variation</figcaption>
	{% include officer/rank-bar.html rank="RRRBBB" %}
	{% include officer/rank-bar.html rank="BBBRRR" %}
</figure>

### Grand Admiral (Thrawn - Rebels)
<figure>
	{% include officer/tunic.html class="white noCenterDart bellSleeves collarArrows epaulets" %}
	<figcaption>White Tunic<small>(bell curves on sleeves, arrows on collar, epaulets, and no center dart)</small></figcaption>
</figure>
<figure>
	{% include officer/trousers.html class="white straight" %}
	<figcaption>White Straight Trousers</figcaption>
</figure>

<figure class="rankBars">
	<figcaption>Grand Admiral</figcaption>
	{% include officer/rank-bar.html rank="BBBYYY-BBBRRR" %}
</figure>

### Director Krennic
<figure>
	{% include officer/tunic.html class="white" %}
	<figcaption>White Tunic</figcaption>
</figure>
<figure>
	{% include officer/trousers.html class="black" %}
	<figcaption>Black Jodhpur Trousers</figcaption>
</figure>

<figure class="rankBars">
	<figcaption>Director/<wbr/>Admiral/Director</figcaption>
	{% include officer/rank-bar.html rank="RRRRRR-BBBBBB" %}
</figure>

## Materials Required

|  | **Fabric** | **Lining** | **Interfacing** |
|---|---|---|---|
| **Tunic** | 2¾ | 3⅛ | ¾ |
| **Trousers** | 3 | – | 1⅛ |
| **Total** | **5¾** | **3⅛** | **3⅛** |

*[ISB]: Imperial Security Bureau
*[IOC]: Imperial Officer Corps

<script type="text/javascript" src="{{ '/assets/js/imperial-officer.js?v=' | append: site.github.build_revision | relative_url }}"></script>

{% include comments.html %}
