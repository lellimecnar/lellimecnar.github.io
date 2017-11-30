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

<table>
	<thead>
		<tr>
			<th>Character</th>
			<th>Tunic</th>
			<th>Pants</th>
			<th>Rank Bar</th>
			<th>Other Differences</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><strong>Thrawn (Rebels)</strong></td>
			<td>{%- include officer/tunic.html class="white noCenterDart bellSleeves collarArrows epaulets" -%}
				<ul>
					<li>no center dart</li>
					<li>"bell curved" seam on sleeves</li>
				</ul>
			</td>
			<td>{%- include officer/trousers.html class="white straight" -%}</td>
			<td>{%- include officer/rank-bar.html rank="BBBYYY-BBBRRR" -%}</td>
			<td>
				<ul>
					<li>Golden epaulets</li>
					<li>arrows on collar</li>
				</ul>
			</td>
		</tr>
		<tr>
			<td><strong>Director Krennic</strong></td>
			<td>{%- include officer/tunic.html class="white" -%}</td>
			<td>{%- include officer/trousers.html class="black" -%}</td>
			<td>{%- include officer/rank-bar.html rank="RRRRRR-BBBBBB" -%}</td>
			<td>
				<ul>
					<li>with cape</li>
				</ul>
			</td>
		</tr>
		<tr>
			<td><strong>Grand Moff Tarkin</strong></td>
			<td>{%- include officer/tunic.html class="olive" -%}</td>
			<td>{%- include officer/trousers.html class="olive" -%}</td>
			<td>{%- include officer/rank-bar.html rank="BBBBBB-RRRYYY" -%}</td>
			<td></td>
		</tr>
		<tr>
			<td><strong>Line Officer</strong></td>
			<td>{%- include officer/tunic.html class="olive" -%}</td>
			<td>{%- include officer/trousers.html class="olive" -%}</td>
			<td>
				<table>
					<tr>
						<td>
							{%- include officer/rank-bar.html rank="RR-BB" -%}
							{%- include officer/rank-bar.html rank="BB" -%}
						</td>
						<td>Junior Lieutenant</td>
					</tr>
					<tr>
						<td>
							{%- include officer/rank-bar.html rank="RR-BB" -%}
							{%- include officer/rank-bar.html rank="BBB" -%}
							{%- include officer/rank-bar.html rank="BBBB" -%}
							{%- include officer/rank-bar.html rank="BBBBBB" -%}
							{%- include officer/rank-bar.html rank="RRB" -%}
						</td>
						<td>Lieutenant</td>
					</tr>
					<tr>
						<td>
							{%- include officer/rank-bar.html rank="RRR-BBB" -%}
							{%- include officer/rank-bar.html rank="YYYYYY" -%}
							{%- include officer/rank-bar.html rank="BBBRR" -%}
						</td>
						<td>Captain/Commandant</td>
					</tr>
					<tr>
						<td>
							{%- include officer/rank-bar.html rank="RRR-BBB" -%}
							{%- include officer/rank-bar.html rank="RR" -%}
							{%- include officer/rank-bar.html rank="BBBBRR" -%}
						</td>
						<td>Commander</td>
					</tr>
					<tr>
						<td>{%- include officer/rank-bar.html rank="RRRR-BBBB" -%}</td>
						<td>Major/Colonel/Commodore</td>
					</tr>
					<tr>
						<td>
							{%- include officer/rank-bar.html rank="RRRR-BBBB" spacing="wide" -%}
							{%- include officer/rank-bar.html rank="BBBBBB-RRRRRR" -%}
							{%- include officer/rank-bar.html rank="YYYYRR" -%}
							{%- include officer/rank-bar.html rank="RRRRRR" -%}
							{%- include officer/rank-bar.html rank="YYYYYY" -%}
						</td>
						<td>General</td>
					</tr>
					<tr>
						<td>{%- include officer/rank-bar.html rank="RRRRR-BBBBB" -%}</td>
						<td>Vice Admiral</td>
					</tr>
					<tr>
						<td>
							{%- include officer/rank-bar.html rank="RRRRRR-BBBBBB" -%}
							{%- include officer/rank-bar.html rank="RRRRYY" -%}
							{%- include officer/rank-bar.html rank="BBRRRR" -%}
							{%- include officer/rank-bar.html rank="BBBBBB" -%}
						</td>
						<td>Admiral</td>
					</tr>
					<tr>
						<td>{%- include officer/rank-bar.html rank="BBBYYY-BBBRRR" -%}</td>
						<td>Grand Admiral/Grand General</td>
					</tr>
				</table>
			</td>
			<td></td>
		</tr>
		<tr>
			<td><strong>Staff Officer</strong></td>
			<td>{%- include officer/tunic.html class="black" -%}</td>
			<td>{%- include officer/trousers.html class="black" -%}</td>
			<td>
				<table>
					<tr>
						<td>{%- include officer/rank-bar.html rank="BBBB" -%}</td>
						<td></td>
					</tr>
					<tr>
						<td>{%- include officer/rank-bar.html rank="BBBBYY" -%}</td>
						<td></td>
					</tr>
					<tr>
						<td>{%- include officer/rank-bar.html rank="RR" -%}</td>
						<td></td>
					</tr>
					<tr>
						<td>{%- include officer/rank-bar.html rank="RRR" -%}</td>
						<td></td>
					</tr>
				</table>
			</td>
			<td></td>
		</tr>
	</tbody>
</table>

## Gathering Materials

|  | **Fabric** | **Lining** | **Interfacing** |
|---|---|---|---|
| **Tunic** | 2¾ | 3⅛ | ¾ |
| **Trousers** | 3 | – | 1⅛ |
| **Total** | **5¾** | **3⅛** | **3⅛** |

## Pattern Modifications

### Tunic

| Number | Part | Modifications |
|---|---|---|
| **1** |  |  |
| **2** |  |  |
| **3** | Upper Back | As a general rule, the uniforms don't have a middle seam down the back, so #3 will need to be cut on the fold (minus seam allowance) |
| **4** |  |  |
| **5** |  |  |
| **6** |  |  |
| **7** |  |  |
| **8** |  |  |
| **9** |  |  |
| **10** |  |  |
| **11** |  |  |
| **12** |  |  |
| **13** |  |  |
| **14** |  |  |
| **15** |  |  |

### Trousers

| Number | Part | Modifications |
|---|---|---|
| **16** |  |  |
| **17** |  |  |
| **18** |  |  |
| **19** |  |  |
| **20** |  |  |
| **21** |  |  |
| **22** |  |  |

*[ISB]: Imperial Security Bureau
*[IOC]: Imperial Officer Corps

<script type="text/javascript" src="{{ '/assets/js/imperial-officer.js?v=' | append: site.github.build_revision | relative_url }}"></script>

{% include comments.html %}
