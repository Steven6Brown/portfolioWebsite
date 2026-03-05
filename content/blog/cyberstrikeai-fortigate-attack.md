---
title: "AI Is Now Being Used to Hack at Scale, and CyberStrikeAI Is Proof"
date: "2026-03-03"
excerpt: "An open-source AI attack platform was just used to compromise over 600 firewalls across 55 countries. The attacker was low-skilled. That is the point."
tags: ["Cybersecurity", "AI", "Threat Intelligence", "Malware"]
---

## This Already Happened

Between January 11 and February 18, 2026, a single threat actor compromised over 600 Fortinet FortiGate firewalls across more than 55 countries. The actor was described by Amazon's own threat intelligence team as having "low-to-medium baseline technical capability, significantly augmented by AI."

That last part is the part worth sitting with. This was not a nation-state with a team of elite hackers. It was one operator, using commercially available AI tools, breaching enterprise network infrastructure at industrial scale in five weeks.

Three separate investigations, by Amazon Threat Intelligence, Team Cymru, and independent researcher blog Cyber and Ramen, pieced together how it happened. The picture they assembled is one of the clearest real-world examples yet of what AI-augmented offensive operations actually look like in practice.

## The Tool at the Center: CyberStrikeAI

CyberStrikeAI is an open-source offensive security platform hosted on GitHub, developed by a user named Ed1s0nZ. It describes itself as "an AI-native security testing platform built in Go" that integrates over 100 security tools with an intelligent orchestration engine.

The platform was first published on November 8, 2025. For two months, usage was minimal. Then, between January 20 and February 26, 2026, Team Cymru detected 21 unique IP addresses running the platform, primarily hosted in China, Singapore, and Hong Kong. Adoption accelerated sharply, with five new servers standing up on a single day in late February.

The developer, Ed1s0nZ, has documented ties to Chinese state-sponsored operations. In December 2025, they submitted CyberStrikeAI to Knownsec 404's Starlink Project, a firm with known ties to China's Ministry of State Security (MSS) and the People's Liberation Army. In January 2026, they added a CNNVD 2024 Level 2 Contribution Award to their GitHub profile. The China National Vulnerability Database is operated by the MSS and is widely believed to function as a vehicle for collecting zero-day vulnerabilities before public disclosure. The reference was later quietly removed from the profile, but Git commit history preserved both the addition and the deletion.

The primary FortiGate campaign operator was separately assessed as a Russian-speaking, financially motivated actor. CyberStrikeAI is open source. Anyone can use it.

## What the Platform Actually Does

CyberStrikeAI is not a simple script. It is a full attack orchestration environment with a web dashboard, conversational interface, and an AI decision engine compatible with GPT, Claude, and DeepSeek.

The 100+ integrated tools cover every phase of the kill chain: network scanning with tools like nmap and masscan, vulnerability scanning with nuclei, credential harvesting with mimikatz, Active Directory compromise with BloodHound and Impacket, post-exploitation with linpeas and winpeas, and password cracking with hashcat. An operator types a natural language prompt, and the AI translates it into a multi-step attack sequence, reasons over findings from one tool, and automatically chains results into the next.

This is where the significance becomes clear. The operator does not need to know how to chain these tools manually. They do not need to understand the output of one tool well enough to configure the next. The AI handles that reasoning layer. It lowers the barrier to executing complex, multi-stage attacks to something close to conversational.

## How the FortiGate Campaign Worked

The attack did not exploit any zero-day vulnerabilities. It succeeded by targeting exposed FortiGate management interfaces with weak or reused credentials and single-factor authentication, basic security failures that AI helped one operator exploit at scale across 55 countries simultaneously.

The attacker's server, exposed through poor operational security, contained over 1,400 files across 139 subdirectories. Cyber and Ramen documented the contents: CVE exploit code, stolen FortiGate configuration files, Nuclei scanning templates, Veeam credential extraction tools, BloodHound collection data, and AI-generated operational plans.

The attacker used a custom MCP server named ARXON as the bridge between the AI models and their operational infrastructure. ARXON processed scan results, invoked DeepSeek to generate structured attack plans, fed tasks to Claude for execution, and maintained a growing knowledge base that accumulated with each new target.

Folders on the exposed server labeled "claude" and "claude-0" contained Claude outputs and prompt histories. A Claude Code configuration file pre-approved Claude to autonomously run Impacket, Metasploit, and hashcat using hardcoded domain credentials. Claude was not acting as an advisor in this chain. It was an active participant in the exploitation process.

The attacker's own documentation recorded their failures: targets that had patched, ports that were closed, environments with no vulnerable vectors. This transparency tells us something important. The AI enabled the operator to move on quickly and at scale, scanning thousands of devices and focusing effort only where automated access succeeded.

## What This Means for Defenders

The headline, "AI is being used by attackers," is not new. The detail that matters here is what kind of attacker and what kind of attack.

This was not a sophisticated actor who happened to use AI as one tool among many. This was a low-skilled operator for whom AI was the multiplier that made the operation possible. The campaign targeted 2,500+ queued FortiGate appliances across 100+ countries according to scan logs. Scale that would have required a team is now achievable by an individual.

The defensive fundamentals that stopped this campaign where it was stopped are not glamorous: patch management on perimeter devices, removing management interfaces from public internet exposure, enforcing multi-factor authentication, using strong and unique credentials. None of these require AI to implement. All of them would have prevented this specific campaign from succeeding.

The harder problem is that CyberStrikeAI is open source, its adoption is accelerating, and the barrier to deploying it is low. The operators who use it will not all make the operational security mistakes this actor made. Future campaigns using similar tooling will not leave 1,400 files on a publicly accessible server.

## The Bigger Picture

What CyberStrikeAI represents is a category shift. Offensive AI tools are no longer theoretical or limited to nation-state actors. They are open source, actively developed, and being used in real campaigns right now against real infrastructure.

The organizations best positioned to handle this shift are the ones that have already done the unglamorous work: accurate asset inventories, consistent patching, MFA on everything, and detection capabilities that do not assume attackers are human-speed. The ones most at risk are the ones still treating AI-augmented attacks as a future concern.

That window closed in January 2026.