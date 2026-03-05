---
title: "How Israel Used a Fake Company and Exploding Pagers to Dismantle Hezbollah's Command Structure"
date: "2026-03-07"
excerpt: "Operation Grim Beeper was not a cyberattack. It was a nine-year supply chain operation that ended with thousands of explosives detonating simultaneously inside devices Hezbollah believed were secure. Here is the full story."
tags: ["Cybersecurity", "Supply Chain", "Intelligence Operations", "Geopolitics"]
---

## The Setup Started Nine Years Before the Explosion

On September 17, 2024, thousands of pagers carried by Hezbollah members across Lebanon and Syria exploded simultaneously. Within two days, a second wave of walkie-talkie explosions followed. At least 42 people were killed, over 4,000 were injured, and Hezbollah's command and control structure was effectively paralyzed in a matter of hours.

The operation, which became known as Operation Grim Beeper, was confirmed by Israeli Prime Minister Benjamin Netanyahu in November 2024. But the operation did not begin in 2024. According to US intelligence sources, the supply chain interdiction that made it possible had been in planning for approximately 15 years, and the active phase of infiltrating the specific supply chain took around nine years.

This is not a story about a software vulnerability or a network intrusion. It is a story about patience, deception, and the most consequential supply chain attack ever executed.

## Why Hezbollah Was Using Pagers

The attack succeeded in part because of a decision Hezbollah made to protect itself from Israeli surveillance.

In February 2024, Hezbollah secretary-general Hassan Nasrallah publicly warned members to stop using smartphones. His reasoning was explicit: Israel had infiltrated their cell phone network and smartphones were functioning as tracking and listening devices. He described phones as "a listening device that we carry with us."

About five months before the September explosions, Hezbollah responded to this guidance by ordering 5,000 new pagers, specifically the Gold Apollo AR-924 model. Pagers were chosen because they are simple devices, receive-only, no GPS, no internet connection, no microphone in typical use. From a signals intelligence perspective, they offered minimal attack surface compared to a smartphone.

The decision to move to pagers was a legitimate operational security measure. It just happened to move Hezbollah's communications directly into a supply chain that had already been compromised.

## The Shell Company Architecture

The Gold Apollo AR-924 pager is a Taiwanese product. Gold Apollo's founder and president, Hsu Ching-kuang, said his company had signed a licensing agreement with a Hungarian company called BAC Consulting, which would manufacture and distribute the pager under the Gold Apollo brand.

BAC Consulting is where the story gets interesting.

The company's registered address in Budapest was a nondescript residential building with nothing more than a piece of paper taped to the window bearing the company name. Hungarian government investigators confirmed that no pagers were ever manufactured or even present in Hungary. The company had one registered manager and no operational site.

BAC Consulting's CEO, Cristiana Bársony-Arcidiacono, acknowledged working with Gold Apollo but stated explicitly: "I don't make the pagers. I am just the intermediate."

The New York Times reported that the Mossad, Israel's foreign intelligence service, operated BAC Consulting and created at least two additional unnamed shell corporations to further obscure their involvement. At least some of the people involved in the manufacturing process were reportedly unaware of who they were actually working for.

A separate company, Apollo Systems Ltd, was registered in Taiwan in April 2024 by a former Gold Apollo employee. Its listed website was apollosystemshk.com, promoting Gold Apollo products under a name referencing Hong Kong, despite no such company existing at the listed address or in Hong Kong corporate records. This website, along with online stores and forum discussions, was created to further legitimize the supply chain.

The architecture was designed to make the pagers look like an ordinary licensed product from a credible Taiwanese brand, distributed through a legitimate European intermediary. Any background check on the supply chain would find a real company, a real licensing agreement, and a real brand. The devices themselves bore the Gold Apollo name. Taiwan's customs records showed no direct exports of Gold Apollo pagers to Lebanon, which made tracing the actual source of the devices substantially harder.

## The Device Modification

The AR-924 pager contained a rechargeable lithium-ion battery and could receive text messages of up to 100 characters. It advertised up to 85 days of battery life, an important feature in Lebanon where power outages are frequent.

Israeli intelligence modified the battery packs before the devices reached Hezbollah. Lebanese security officials who observed controlled detonations of some of the recovered devices described the technology as "so advanced it was virtually undetectable." The explosive used was PETN, pentaerythritol tetranitrate, a high-velocity military-grade explosive. Academic analysis of the attack documented approximately 3 to 6 grams of PETN embedded within the lithium-ion battery packs of the pagers.

The modifications were designed to survive physical inspection. The batteries looked and functioned like ordinary lithium-ion batteries. The pagers passed whatever security checks Hezbollah performed when receiving them. They worked as advertised for months.

On September 17, 2024, a signal was simultaneously sent to thousands of the devices. The PETN detonated.

The walkie-talkie wave the following day targeted ICOM IC-V82 handheld radios, modified through the same supply chain methodology.

## What the Attack Actually Destroyed

The physical casualties were significant: 42 dead, over 4,000 injured, many with permanent injuries including loss of fingers, hands, and eyes. Two of the dead were children, which generated significant international criticism about the targeting methodology.

The strategic damage went deeper than the casualty count.

Hezbollah's pagers were used specifically by its operational members, fighters and field commanders. The simultaneous detonation targeted that population specifically. According to an unnamed Hezbollah official, the attack took approximately 1,500 Hezbollah fighters out of action due to injuries in the first wave alone.

But the larger damage was to Hezbollah's command and control infrastructure. Their secure communications had just been weaponized against them. Any remaining equipment, any device powered by a battery sourced from a supply chain they could not fully verify, was now suspect. The process of auditing their entire equipment inventory, identifying what else might be compromised, and rebuilding confidence in their communications capability required weeks. That disruption to operational readiness came at a moment when Israel was preparing to shift military focus to the northern border.

As Israeli reserve brigadier general Amir Avivi described it: "In two waves, each in a matter of minutes, Hezbollah lost thousands of its battle-ready militants in an impactful operation that seriously disrupted its command-and-control capabilities."

## Why This Is a Cybersecurity Story

Operation Grim Beeper is usually categorized as a military intelligence operation rather than a cybersecurity event, and that categorization is technically accurate. No software was exploited. No network was breached.

But the principles at its core are the same principles that define supply chain attacks in the technology security world.

The attack succeeded because Hezbollah trusted the integrity of a product based on its brand and apparent legitimacy rather than being able to verify the actual manufacturing process. That is the same assumption that makes software supply chain attacks effective. SolarWinds worked because organizations trusted that a software update from a vendor they had vetted was safe. The FortiGate attacks I wrote about separately work because organizations trust that firmware from a vendor is unmodified. The pager attack worked because Hezbollah trusted that a device from a recognized brand, distributed through an apparently legitimate channel, had not been modified in transit.

The Washington Post's coverage of the attack summarized this directly: "It is virtually impossible to secure the modern electronics supply chain against a determined and sophisticated adversary."

Supply chain trust is one of the foundational assumptions in both physical and digital security infrastructure. When that assumption fails, it fails completely. You cannot patch a device that explodes when activated.

## The Intelligence Lesson

The operational patience required for this attack is worth noting separately. Fifteen years of planning. Nine years of active supply chain infiltration. Shell companies maintained for years to build legitimacy. The entire operation held in reserve while waiting for exactly the right moment, when Hezbollah voluntarily moved its communications to the compromised platform.

Nasrallah's February 2024 speech warning members off smartphones did not trigger the operation. It accelerated the timeline for Hezbollah to place the order that delivered the weapons into their own hands.

This is a level of patience and operational discipline that is difficult to find anywhere in documented intelligence history. And it was precisely Hezbollah's own security awareness, the recognition that their smartphones were compromised, that drove them to order the devices that would be used against them.

## What This Changes

For the security community, the pager attack is a permanent reference point for what adversarial supply chain compromise looks like at its most sophisticated.

It demonstrates that supply chain attacks are not limited to software. Hardware, firmware, physical devices, any component that passes through a supply chain with multiple intermediaries is potentially vulnerable to modification by a sufficiently motivated actor with the access and patience to execute it.

It also demonstrates the limits of operational security measures that focus on one attack surface while leaving others unexamined. Hezbollah correctly identified that smartphones were a vulnerability and moved to address it. The move to pagers was a reasonable response to a real threat. It just happened to walk directly into a trap that had been set years in advance for exactly that kind of response.

The best supply chain attacks are the ones that make the target feel safer right before they detonate.