---
title: "The Gift Card Scam That Still Works, and How to Stop It"
date: "2026-03-02"
excerpt: "Someone impersonated my friend's boss and convinced her to buy gift cards for a work event. This is how the scam works, why it's so effective, and how to defend against it."
tags: ["Cybersecurity", "Phishing", "Social Engineering", "Scams", "Awareness"]
---

## A Real Scam That Just Happened

A friend of mine was recently scammed out of $200. She's smart, she's careful, and it still happened.

She received an email that looked like it came from her boss, asking her to quickly buy gift cards for an upcoming end-of-month team event. Not long after, she received a follow-up text message checking if she could handle it.

Wanting to be helpful, and assuming the request was legitimate, she bought $200 worth of gift cards. She then sent the card numbers and PINs over text.

Within minutes, the money was gone.

There were no malicious links. No attachments. No fake login pages. Just a normal-looking workplace request, and a well-executed attack.

## What Type of Attack Is This?

This is a textbook **business email compromise (BEC)**, a combination of phishing, impersonation, and social engineering.

The attacker didn't try to infect her computer. They didn't need access to internal systems. They only needed one person to trust a message.

## Breaking Down the Attack

### The Email Was Spoofed or Compromised

The attacker either spoofed the boss's email address, making it appear to come from the right person without actually controlling the account, or the account itself had been compromised.

Email spoofing is easier than most people realize. Without proper authentication controls like SPF, DKIM, and DMARC configured on the domain, an attacker can send an email that displays any name and address they want in the "From" field. Most people never check the actual sending address, they see the name and trust it.

### Gift Cards Are the Perfect Payment Method for Attackers

Gift cards are almost perfect for scammers, they're fast to purchase, easy to resell or redeem, and once the code is shared, the money is effectively unrecoverable. There is no chargeback, no fraud dispute, no way to get the money back.

Any legitimate workplace request for gift cards will go through an actual purchasing process, expense reports, corporate cards, purchase orders. No real manager asks an employee to personally buy gift cards and text over the numbers.

### The Channel Switch Was Intentional

Moving from email to text message was deliberate. It creates a sense of a separate, more personal conversation and makes the victim less likely to question the request. It also bypasses any email security controls the organization might have in place.

When communication about a financial request suddenly shifts channels, from email to text, from Slack to personal phone, that's a red flag worth pausing on.

### Authority and Urgency Are the Psychological Levers

The attacker impersonated someone in a position of authority and attached the request to a plausible, time-sensitive context. This is the core of social engineering, people are wired to respond to authority and to help when there's a deadline. Attackers know this and exploit it deliberately.

## This Isn't "Classic" Phishing

When people think of phishing, they usually imagine fake websites, login pages, and suspicious links. This attack didn't use any of that.

It was purely behavioral. The attacker manipulated trust, authority, and routine workplace behavior, which makes this style of attack especially dangerous because most security tools can't detect it.

## The Red Flags That Were Easy to Miss

The request was unusual, most employees are not regularly asked to personally buy gift cards for company events. Any unexpected request involving money should automatically be treated with caution.

The message created urgency, urgency is one of the most powerful social engineering tools because it pushes people to act before they verify.

The conversation moved to text, after the initial email, the attacker followed up via SMS, a deliberate move to make the interaction feel more personal and bypass scrutiny.

She was asked to send the codes, a legitimate business process almost never requires employees to send gift card numbers and PINs over email or text. Once those codes are shared, the transaction is irreversible.

## How to Defend Against This

**Check the actual email address, not just the display name.** A spoofed email might show your boss's name but send from a lookalike domain. The name shown in an email client can say anything, the actual sending address is what matters.

**Call to verify.** Any request involving money is worth a 30-second phone call to confirm. Call using a number you already have, not one provided in the suspicious message. If it's legitimate, they'll confirm it. If it's a scam, you just stopped it.

**Question the payment method.** Gift cards as a payment method for anything work-related is an immediate red flag. Full stop.

**Slow down when urgency is used.** Urgent financial requests deserve slower verification. Real requests survive a phone call. Scams depend on you skipping it.

**Never send gift card codes over text or email.** There is almost no legitimate business scenario where this is appropriate. If you are asked to scratch a card, photograph it, or send the code digitally, assume it is a scam until proven otherwise.

## What Organizations Should Do

**Email authentication,** SPF, DKIM, and DMARC records on the company domain make it significantly harder to spoof the organization's email addresses. If DMARC is set to reject, spoofed emails from the domain never reach the inbox.

**Security awareness training,** employees should know that gift card requests via email are a known scam vector, that financial requests should always be verified out-of-band, and that it's always okay to slow down and question something that feels off.

**Clear internal policies,** a simple policy stating that no financial request will ever come through personal text message eliminates an entire category of attack.

## What to Do If It Already Happened

If you or someone you know realizes they've been scammed, notify a manager or your IT/security team immediately, contact the gift card issuer as soon as possible, and preserve all messages and emails, do not delete the conversation. Recovery is difficult, but speed matters. Report it to the FTC at reportfraud.ftc.gov and to local law enforcement.

## The Bottom Line

This wasn't a sophisticated technical attack. It was a spoofed email, a text message, and an understanding of how people respond to authority and urgency. The most effective attacks are often this simple, they target human behavior, not technical vulnerabilities.

If a message asks you to spend your own money on behalf of your organization, especially using gift cards, stop and verify it. Even if it feels awkward. Even if you're worried about slowing someone down. That short moment of verification is often the only thing standing between a normal day at work and a very expensive mistake.