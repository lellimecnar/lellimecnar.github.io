---
title: Tunic Pattern
---

<link rel="stylesheet" type="text/css" href="{{ '/assets/css/imperial-officer.css?v=' | append: site.github.build_revision | relative_url }}" />

{% include officer/pattern-diagrams.html %}

{% include officer/pattern-intro.md %}

The [McCall's pattern](https://mccallpattern.mccall.com/m4745) has two coat types:

* **A.** single-breasted, upper-thigh length.
* **B.** double-breasted, above-the-knee length.

The Imperial Officer uniform tunic is sort of a hybrid between the two.

## Front
Start by mirroring **#2** across the center line so you end up with one single pattern piece of the entire front. This will be the **front template**, and you will create 9 completely new pattern pieces from this one large piece.

<div style="text-align: center">
	<figure>
		<svg style="width:140px"><use xlink:href="#PatternPiece__2"></use></svg>
		<figcaption>Before</figcaption>
	</figure>

	<figure>
		<svg style="width:230px"><use xlink:href="#PatternPiece__2mirrored"></use></svg>
		<figcaption>Mirrored</figcaption>
	</figure>
</div>

Fold the **front template** down the _center line_, and mark the half-way point on each shoulder. Overlap the **front template** with pattern piece **#3** so that the _center lines_ and the _bottom edges_ of both pieces are aligned. Add another mark to the _bottom edge_ of the **front template** along the right edge of **#3**.

Set **#3** aside.

Draw a dotted line between the two marks (being sure to mirror it on both sides of the front template). This marks the seam line for the double yoke.

>**NOTE:** This dotted line is for reference only, DO NOT CUT ANYTHING ON THIS LINE!!!

<div style="text-align: center">
<figure>
	<svg id="PatternPiece__2-3" style="width: 110px">
		<line class="PatternPiece__yokeLine1" x1="67.28" y1="7.05" x2="52.15" y2="141.32" style="fill:none;stroke:#000;stroke-line-cap:round;stroke-linejoin:round"/>
		<line class="PatternPiece__yokeLine2" x1="67.28" y1="7.05" x2="52.15" y2="141.32" style="fill:none;stroke:#fbfbfb;stroke-line-cap:round;stroke-linejoin:round;stroke-width:3px"/>
		<path
			d="M11.5,141.66,95,141s1.36-20.07,3.11-29,4.48-24.54,4.48-24.54S80,86.82,78.09,66.56C75.43,38.91,96,12.6,96,12.6L38.55,1.5s-1.95,11.69-9,18.11c-4.74,4.35-12.66,5.72-18.09,6Z"
			style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:3px"/>
		<path d="M11.5,25.66" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:3px"/>
		<line class="PatternPiece__yokeMark1" x1="67.28" y1="7.05" x2="66" y2="18.9" style="fill:none;stroke:#235796;stroke-linecap:round;stroke-linejoin:round;stroke-width:5px"/>
		<line class="PatternPiece__yokeMark2" x1="52.15" y1="141.32" x2="53.15" y2="131.27" style="fill:none;stroke:#235796;stroke-linecap:round;stroke-linejoin:round;stroke-width:5px"/>
		<g class="PatternPiece__3overlay">
			<path
				d="M1.5,12.65v129l50.65-.34s-1-29.8,7.45-54.19C66.45,67.4,85.62,55,85.62,55s-4-5.06-3.69-10.09a42,42,0,0,1,4-15.44L38.55,1.5a64.08,64.08,0,0,1-12.17,8.81C20.28,13.56,1.5,12.65,1.5,12.65Z"
				style="fill:#fff;fill-opacity:0.7;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:3px"/>
			<line  x1="11.5" y1="12.71" x2="11.5" y2="141.68" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round"/>
			<text transform="translate(9.17 98.08) rotate(-90)" style="font-size:6.797394275665283px;font-family:MyriadPro-Regular, Myriad Pro">CENTER FRONT</text>
		</g>
	</svg>
	<figcaption>Drawing the dotted line</figcaption>
</figure>
</div>

Unfold the **front template** and lay it flat. Draw two solid lines ⅝" from each side of the dotted line on the **right**. Label the outside line _"cut for center/left side"_, and the inside line _"cut for right side."_ Draw another solid line ⅝" to the **left** of the dotted line on the **left**, and label it _"cut for center."_

<div style="text-align:center">
	<figure>
		<svg class="PatternPieces__frontTemplate PatternPieces__frontTemplate--A" style="width:186px;height:145px">
			{% include officer/front-template.html %}
		</svg>
	</figure>
</div>

Draw a horizontal line (perpendicular to the _center line_) from the center point of the collar to the outer _"cut for center"_ line on the right, and label it _"cut for left side."_

> **FOR "STRAIGHT YOKE" VARIANTS:** Continue the horizontal line from the _center line_ to the solid _"cut for center" line_ on the **left**, and label it _"cut for center."_

<div style="text-align:center">
	<figure>
		<svg class="PatternPieces__frontTemplate PatternPieces__frontTemplate--B" style="width:186px;height:145px">
			{% include officer/front-template.html %}
		</svg>
	</figure>
</div>

### Code Cylinder Pockets
Fold the **front template** down the _center line_ again. Find the vertical midpoint of the sleeve opening, and mark both sides. Unfold the **front template** and draw another dotted line connecting the two marks. This marks the top of where the pockets will be.

> **NOTE:** This dotted line is the _pocket top line_, and again, is for reference only. **DO NOT CUT ANYTHING HERE!!!**

Multiply the seam allowance by 2 (⅝" &times; 2 = 1¼") , and draw two solid horizontal lines that far above and below the dotted _pocket top line_. Label the top line _"cut for bottom"_ and the bottom line _"cut for top."_

> **NOTE:** We double the seam allowance here so we can hide the inner lining seam by offsetting it ⅝" below the top of the pocket opening.

#### Pocket Lining
Draw another horizontal dotted line 4" below the _pocket top line_, and label it _"cut for pocket lining."_

<div style="text-align:center">
	<figure>
		<svg class="PatternPieces__frontTemplate PatternPieces__frontTemplate--C" style="width:186px;height:145px">
			{% include officer/front-template.html %}
		</svg>
	</figure>
</div>

### Center Dart
Draw a **dotted** line on the _center line_ connecting the bottom of the collar to the solid _"cut for top"_ line.

Measure the seam allowance (⅝") from the _center line_ along the collar edge, and draw a solid line to the bottom of the dotted line you just drew. Repeat on the opposite side of the _center line_.

<div style="text-align: center">
	<figure>
		<svg style="width:186px;height:88px" class="PatternPieces__centerDartDiagram">
			<line class="PatternPieces__centerDart--center" x1="92.62" y1="36.39" x2="92.62" y2="60.14" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round"/><line x1="92.62" y1="36.39" x2="92.62" y2="60.14" style="fill:none;stroke:#fbfbfb;stroke-dasharray:2;stroke-width:2px"/>
			<path d="M1.5,11.54l52-10s2.82,16.92,13,26.23c6.86,6.29,18.29,8.35,26.17,8.75v-.09C100.49,36,112,34,118.81,27.73c10.15-9.31,13-26.23,13-26.23l52,10" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:3px"/>
			<line x1="173.38" y1="9.54" x2="164.58" y2="87.62" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:1.9635515213012695,1.9635515213012695"/>
			<line x1="11.88" y1="9.54" x2="20.68" y2="87.62" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:1.9635515213012695,1.9635515213012695"/>
			<line x1="179.17" y1="9.54" x2="170.37" y2="87.62" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round"/>
			<line x1="167.59" y1="9.54" x2="158.79" y2="87.62" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round"/>
			<line x1="6.09" y1="9.54" x2="14.89" y2="87.62" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round"/>
			<line x1="183.76" y1="71.72" x2="2.5" y2="71.72" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:1.9808646440505981,1.9808646440505981"/>
			<line x1="183.76" y1="60.14" x2="1.5" y2="60.14" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round"/>
			<line x1="183.76" y1="83.3" x2="1.5" y2="83.3" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round"/>
			<line class="PatternPieces__centerDart--left" x1="92.6" y1="60.08" x2="86.82" y2="36.65" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round"/>
			<line class="PatternPieces__centerDart--right" x1="92.63" y1="60.08" x2="98.41" y2="36.39" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round"/>
			<line x1="92.62" y1="36.39" x2="176.14" y2="36.39" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round"/>
			<line x1="92.62" y1="36.39" x2="9.12" y2="36.39" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round"/>
		</svg>
		<figcaption>Center Dart</figcaption>
	</figure>
</div>

### Final Front Pieces
Now that you have the **front template** with all of the correct markings, you can follow the interactive diagram below to trace out the 9 individual pattern pieces that you need:

<div style="text-align: center" class="PatternPieces__frontPiecesWrapper">
	<figure style="width: 40%">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 185.26 143.16">
			<g class="PatternPieces__frontTemplate PatternPieces__frontTemplate--final">
				{% include officer/front-template.html %}
			</g>
			<path class="PatternPieces__frontPiece PatternPieces__frontPiece--2a" d="M92.62,25.6v.06c-5.44-.28-13.33-1.7-18.08-6.05-7-6.42-9-18.11-9-18.11L8.12,12.6s16.51,21.12,18,45.4h120.5l3.65-32.4Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:3px"/>
			<rect class="PatternPieces__frontPiece PatternPieces__frontPiece--2b" x="25.13" y="42" width="122.43" height="36.99" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:3px"/>
			<path class="PatternPieces__frontPiece PatternPieces__frontPiece--2c" d="M26,66.56C24.09,86.82,1.5,87.4,1.5,87.4S4.23,103,6,111.94,9.1,141,9.1,141l83.53.69,44.64-.37L148.47,42H23.13A63.21,63.21,0,0,1,26,66.56Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:3px"/>
			<path class="PatternPieces__frontPiece PatternPieces__frontPiece--2d"
				d="M92.62,25.6v.06c-5.44-.28-13.33-1.7-18.08-6.05-7-6.42-9-18.11-9-18.11L8.12,12.6S28.7,38.91,26,66.56C24.09,86.82,1.5,87.4,1.5,87.4S4.23,103,6,111.94,9.1,141,9.1,141l83.53.69,44.64-.37,13-115.69Z"
				style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:3px"/>
			<path class="PatternPieces__frontPiece PatternPieces__frontPiece--2e"
				d="M119.67,1.5s-1.94,11.69-9,18.11C106,24,98.06,25.33,92.62,25.6v.06c-5.44-.28-13.33-1.7-18.08-6.05-7-6.42-9-18.11-9-18.11L32.94,7.81,48,141.29l44.65.37,44.64-.37,15-133.48Z"
				style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:3px"/>
			<path class="PatternPieces__frontPiece PatternPieces__frontPiece--2f" d="M177.14,12.6l-33-6.37.24.82-5.75,51H159.1C160.63,33.72,177.14,12.6,177.14,12.6Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:3px"/>
			<rect class="PatternPieces__frontPiece PatternPieces__frontPiece--2g" x="139.56" y="42" width="20.56" height="36.99" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:3px"/>
			<path class="PatternPieces__frontPiece PatternPieces__frontPiece--2h" d="M140.47,42l-11.2,99.32v0l46.9-.39s1.37-20.07,3.12-29,4.48-24.54,4.48-24.54-22.6-.58-24.54-20.84A63.21,63.21,0,0,1,162.13,42Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:3px"/>
			<path class="PatternPieces__frontPiece PatternPieces__frontPiece--2i"
				d="M159.22,66.56c-2.66-27.65,17.92-54,17.92-54l-33-6.37.24.82L129.27,141.32v0l46.9-.39s1.37-20.07,3.12-29,4.48-24.54,4.48-24.54S161.16,86.82,159.22,66.56Z"
				style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:3px"/>
			<path class="PatternPieces__frontPiece PatternPieces__frontPiece--2j" d="M119.67,1.5s-1.94,11.69-9,18.11C106,24,98.06,25.33,92.62,25.6v.06H35L48,141.29l44.65.37,44.64-.37,15-133.48Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:3px"/>
		</svg>
		<figcaption>Completed Front Template</figcaption>
	</figure>
</div>

> Click on an item below to highlight that piece above.

* **2a** Top Left
* **2b** Left Pocket
* **2c** Bottom Left
* **2d** Front Left Lining
* **2e** Front Yoke _(Use **2j** for "straight yoke" variant)_
* **2f** Top Right
* **2g** Right Pocket
* **2h** Bottom Right
* **2i** Front Right Lining
* **2j** Straight Yoke _(Only for "straight yoke" variant)_
{:id="FrontPiecesList"}

> **FOR "NO POCKET" VARIANTS:** You will only need **#2d**, **#2e**, and **#2i**.
>
> **FOR "STRAIGHT YOKE" VARIANTS:** You will need to use **#2j** instead of **#2e**

## Back
> **NOTE:** If the costume you're making is for one of the _very few_ characters that have a center back seam, you can skip this step, and just use pattern pieces **#3** & **#4** unaltered.

Fold **#3** along the _center line_ and trace a new pattern piece, adding a **&darr;Fold&darr;** indicator to the center line. Label this as "**3** Back _(Fabric: cut 1, Lining: cut 1)_"

No modifications are required for **#4**.

## "Skirt" Pieces

## Sleeves

## Collar

{% include officer/abbreviations.md %}

<script type="text/javascript" src="{{ '/assets/js/imperial-officer.js?v=' | append: site.github.build_revision | relative_url }}"></script>